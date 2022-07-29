import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        category: categoriesReducer,
        post,
        comment,
        sendMail,
        accountVerification,
      },
    });


