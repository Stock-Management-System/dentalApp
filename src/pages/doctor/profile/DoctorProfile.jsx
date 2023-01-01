import React from 'react'
import { useSelector } from 'react-redux'
import DoctorHeader from '../../../components/doctor/doctorDashboard/DoctorHeader'
import DoktorProfile from '../../../components/doctor/doctorDashboard/DoktorProfile'
import Layout from '../../../components/doctor/Layout'

const DoctorProfile = () => {
  const open = useSelector(state => state.open.value)
  const doctorData =
    {
      id: 1,
      name: 'Mehmet Ali',
      surname: 'Kaya',
      title: 'Ortodonti Uzmanı',
      city: 'İstanbul',
      district: 'Kadıköy',
      address: 'İnci diş polikliniği',
      phone: '0532 123 45 67',
      email: 'malikaya@gmail.com',
      graduateUniversity:'Selçuk Üniversitesi',
      graduateYear: '12.07.2012',
      workingSince: '20.09.2013',
      workingDays:'Hafta içi hergün',
      workingHours:'09:00-17:00',
      profileImg: "https://down.imgspng.com/download/0720/doctor_PNG15959.png",

    }

  return (
    <>
      <Layout />

      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${
          open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'
        } transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className="divide-y-2 divide-mainPageP p-1">
            <DoctorHeader />
            
         
            
            <DoktorProfile doctorData={doctorData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorProfile
