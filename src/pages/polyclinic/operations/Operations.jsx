import React from 'react'
import { useSelector } from 'react-redux'
import ClinicHeader from '../../../components/polyclinic/ClinicHeader'
import Layout from '../../../components/polyclinic/Layout'
import PastTransaction from '../../../components/polyclinic/pastTransaction/PastTransaction'

const Operations = () => {
  const open = useSelector(state => state.open.value)
  return (
    <>
      <Layout />


      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'} transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className='divide-y p-1'>
            <ClinicHeader />
            <PastTransaction />
          </div>
        </div>

      </div>

    </>
  )
}

export default Operations