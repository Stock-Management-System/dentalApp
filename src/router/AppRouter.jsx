import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PolyclinicProfile from '../pages/polyclinic'
import Patients from '../pages/polyclinic'
import Rontgen from '../pages/polyclinic'
import Account from '../pages/polyclinic'
import PolyclinicAppointments from '../pages/polyclinic'
import PolyclinicDoctors from '../pages/polyclinic'
import Operations from '../pages/polyclinic'
import Settings from '../pages/polyclinic'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PolyclinicProfile />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/rontgen" element={<Rontgen />} />
        <Route path="/account" element={<Account />} />
        <Route path="/appointments" element={<PolyclinicAppointments />} />
        <Route path="/polyclinicdoctors" element={<PolyclinicDoctors />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
