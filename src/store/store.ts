import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from './slices/applicationSlice'
import tariffsReducer from './slices/tariffsSlice'

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    tariffs: tariffsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
