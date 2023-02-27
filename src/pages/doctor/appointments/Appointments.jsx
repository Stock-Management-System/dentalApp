import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DoctorAppointments from '../../../components/doctor/DoctorAppointments'
import DoctorHeader from '../../../components/doctor/doctorDashboard/DoctorHeader'
import Layout from '../../../components/doctor/Layout'
import AddPatientModal from '../../../components/doctor/patient/AddPatientModal'

const Appointments = () => {
  const [showModal, setShowModal] = useState(false)
  const open = useSelector(state => state.open.value)
  return (
    <>
      <Layout />


      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'} transition-w ease-in-out duration-500`}
      >
      

        <div className="bg-white">
					{/* silinecek ClinicHeader Components gelecek */}
					<div className="divide-y p-1">
						<DoctorHeader />
						<div className="grid grid-cols-3 gap-3"></div>
					</div>
					{/* Randevu componenti burdan başlıyor */}
					<DoctorAppointments />
				</div>
        {showModal && <AddPatientModal setShowModal={setShowModal} />}
      </div>

    </>
  )
}

export default Appointments