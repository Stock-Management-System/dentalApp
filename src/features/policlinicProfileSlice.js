import { createSlice } from '@reduxjs/toolkit'
import {policlinicProfile} from '../helpers/data'
const initialState = {
  value: policlinicProfile
  
}

export const policlinicProfileSlice = createSlice({
  name: 'policlinicProfileData',
  initialState,
  reducers: {
    policlinicProfileD: state => {
      state.value = state.value
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { policlinicProfileD } = policlinicProfileSlice.actions

export default policlinicProfileSlice.reducer
