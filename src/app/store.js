import { configureStore } from '@reduxjs/toolkit'
import modalSlice from '../features/modalSlice'
import openReducer from '../features/sidebarSlice'
import policlinicProfileD from '../features/policlinicProfileSlice'

export const store = configureStore({
  reducer: {
    open: openReducer,
    toggleM: modalSlice,
    polData: policlinicProfileD
  },
})