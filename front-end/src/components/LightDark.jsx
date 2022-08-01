import * as React from "react";

import { ThemeContext } from "./theme.tsx";

const clearAndReload = () => {
  localStorage.removeItem("mode");
  document.location.reload();
};

export function LightDark() {
  const { theme, mode, setMode } = React.useContext(ThemeContext);
  return (
    <>
      <div style={{ marginBottom: "1em" }}>
        The current mode is <pre style={{ display: "inline" }}>{mode}</pre>,
        which visually appears <pre style={{ display: "inline" }}>{theme}</pre>
      </div>
      <div style={{ marginBottom: "1em" }}>
        Controls:{" "}
        <button onClick={() => setMode("light")}>Switch to light</button>
        <button onClick={() => setMode("dark")}>Switch to dark</button>
        <button onClick={() => setMode("system")}>Switch to system</button>
      </div>
      <button onClick={clearAndReload}>Forget mode and reload page</button>

      <br />

     
    </>
  );
}
