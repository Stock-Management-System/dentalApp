import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const sidebarSlice = createSlice({
  name: 'sidebarOpen',
  initialState,
  reducers: {
    sidebarToggle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changesü

      
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { sidebarToggle } = sidebarSlice.actions

export default sidebarSlice.reducer