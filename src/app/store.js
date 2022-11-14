import { configureStore } from '@reduxjs/toolkit'
import openReducer from '../features/sidebarSlice'

export const store = configureStore({
  reducer: {
    open: openReducer,
  },
})