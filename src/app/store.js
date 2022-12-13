import { configureStore } from '@reduxjs/toolkit'
import modalSlice from '../features/modalSlice'
import openReducer from '../features/sidebarSlice'

export const store = configureStore({
  reducer: {
    open: openReducer,
    toggleM: modalSlice
  },
})