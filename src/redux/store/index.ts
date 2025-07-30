import { configureStore, Middleware } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'


const logger: Middleware = (storeAPI) => (next) => (action) => {
    console.log("[Dispatching]:",  (action as any).type);
    const result = next(action);
    console.log("[Next State]:", storeAPI.getState());
    return result;
  };
  
  export const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;