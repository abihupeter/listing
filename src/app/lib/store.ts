import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './apiSlice/auth/authSlice';
import { propertySlice } from './apiSlice/property/propertySlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [propertySlice.reducerPath]: propertySlice.reducer,


    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authSlice.middleware)
        .concat(propertySlice.middleware)
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
