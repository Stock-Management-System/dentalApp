import React, { useState } from 'react'
import Container from '../../../components/polyclinic/Container'
import Layout from '../../../components/polyclinic/Layout'
import './patients.scss'

const Patients = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Layout />
      <div className="absolute bg-bg-container  h-full w-96 mt-20 right-0 " style={{width: open ? 'calc(100% - 267px)' : 'calc(100% - 117px)'}}>
        <div className='m-6 bg-white h-full'>
patients
        </div>
      </div>
    </div>
  )
}

export default Patients
