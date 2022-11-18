import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
  linkHover: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebarOpen',
  initialState,
  reducers: {
    sidebarToggle: state => {
      state.value = !state.value
    },
    linkHoverToggle: state => {
      state.linkHover = !state.linkHover
    },
  },
})

// Action creators are generated for each case reducer function
export const { sidebarToggle, linkHoverToggle } = sidebarSlice.actions

export default sidebarSlice.reducer
