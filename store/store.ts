// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

// Infer types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
