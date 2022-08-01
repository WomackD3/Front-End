import * as React from "react";

const localStorageKey = "mode";

// Saved mode
type Mode = "light" | "dark" | "system";
// Visual themes
type Theme = "light" | "dark";

// Emulate backend calls
const getMode = (): Promise<Mode> =>
  new Promise((res) =>
    setTimeout(() => {
      res(
        (localStorage.getItem(localStorageKey) as Mode | undefined) || "system"
      );
    }, 3000)
  );
const saveMode = async (mode: Mode): Promise<void> => {};

// exposed context for doing awesome things directly in React
export const ThemeContext = React.createContext<{
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
}>({
  mode: "system",
  theme: "light",
  setMode: () => {}
});

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [mode, setMode] = React.useState<Mode>(() => {
    const initialMode =
      (localStorage.getItem(localStorageKey) as Mode | undefined) || "system";
    return initialMode;
  });

  // This will only get called during the 1st render
  React.useState(() => {
    getMode().then(setMode);
  });

  // When the mode changes, save it to the localStorage and to the database
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, mode);
    saveMode(mode);
  }, [mode]);

  const [theme, setTheme] = React.useState<Theme>(() => {
    if (mode !== "system") {
      return mode;
    }
    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)")
      .matches;
    return isSystemInDarkMode ? "dark" : "light";
  });

  // Update the theme according to the mode
  React.useEffect(() => {
    if (mode !== "system") {
      setTheme(mode);
      return;
    }

    const isSystemInDarkMode = matchMedia("(prefers-color-scheme: dark)");
    // If system mode, immediately change theme according to the current system value
    setTheme(isSystemInDarkMode.matches ? "dark" : "light");

    // As the system value can change, we define an event listener when in system mode
    // to track down its changes
    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };
    isSystemInDarkMode.addListener(listener);
    return () => {
      isSystemInDarkMode.removeListener(listener);
    };
  }, [mode]);

  // Update the visuals on theme change
  React.useEffect(() => {
    // Clear previous classNames on the body and add the new one
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme);
    // change <meta name="color-scheme"> for native inputs
    (document.getElementById("colorScheme") as HTMLMetaElement).content = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
