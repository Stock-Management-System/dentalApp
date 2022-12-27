import React, { useState } from 'react'
import { BsPersonPlus } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import DoctorHeader from '../../../components/doctor/doctorDashboard/DoctorHeader'
import Layout from '../../../components/doctor/Layout'
import AddPatientModal from '../../../components/doctor/patient/AddPatientModal'



const Patients = () => {
  const [showModal, setShowModal] = useState(false)
  const open = useSelector(state => state.open.value)
  return (
    <>
      <Layout />


      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'} transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className='divide-y p-1'>
            <DoctorHeader />

          </div>
        </div>
        <div className='flex xs:flex-col md:flex-row items-center justify-between mt-7 mx-4 gap-6'>
          <h1 className='text-28'>Hastalar</h1>
          {/* <label className="label-text text-center">Hasta TC Kimlik No</label> */}
          <div className='flex xs:flex-col md:flex-row items-center justify-between gap-4'>
            <input
              type="text"
              placeholder="Hasta Ara ..."
              className="input input-sm input-bordered w-40 max-w-xs rounded-3xl"
            />
            <select className="select select-bordered select-sm rounded-3xl max-w-xs">
              <option disabled selected>Filtre Seçenekleri</option>
              <option>Small Apple</option>
              <option>Small Orange</option>
              <option>Small Tomato</option>
            </select>
            <button className='btn btn-primary btn-sm rounded-full' onClick={() => setShowModal(true)}><BsPersonPlus className='mr-2 text-18' />Yeni Hasta Ekle</button>
          </div>
        </div>

      </div>
      {
        showModal
        &&
        <AddPatientModal setShowModal={setShowModal} />
      }
    </>
  )
}

export default Patients