import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PolyclinicProfile from '../pages/polyclinic/PolyclinicProfile'
import Patients from '../pages/polyclinic/Patients'
import Rontgen from '../pages/polyclinic/Rontgen'
import Account from '../pages/polyclinic/Account'
import PolyclinicAppointments from '../pages/polyclinic/PolyclinicAppointments'
import PolyclinicDoctors from '../pages/polyclinic/PolyclinicDoctors'
import Operations from '../pages/polyclinic/Operations'
import Settings from '../pages/polyclinic/Settings'

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
