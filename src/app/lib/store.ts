import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './apiSlice/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authSlice.middleware)
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
