import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../../components/doctor/Layout'


const DoctorProfile = () => {
  const open = useSelector(state => state.open.value)
  return (
    <>
      <Layout />


      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'} transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className='divide-y p-1'>
            buraya ne gelecek
            <br />
            <hr />
            Doktorun Banner i gelecek

          </div>
        </div>

      </div>

    </>
  )
}

export default DoctorProfile