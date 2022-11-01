import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PolyclinicProfile from '../pages/polyclinic/profile/PolyclinicProfile'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/polyclinic" element={<PolyclinicProfile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter