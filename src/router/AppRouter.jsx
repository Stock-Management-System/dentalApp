import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Patients from '../pages/polyclinic/patients/Patients'
import PolyclinicProfile from '../pages/polyclinic/profile/PolyclinicProfile'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/polyclinic" element={<PolyclinicProfile/>}/>
            <Route path="/patients" element={<Patients/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter