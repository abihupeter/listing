import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/features/counter/counter-slice' // replace with your actual slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
