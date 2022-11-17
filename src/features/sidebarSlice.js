import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const sidebarSlice = createSlice({
  name: 'sidebarOpen',
  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { sidebarToggle } = sidebarSlice.actions

export default sidebarSlice.reducer