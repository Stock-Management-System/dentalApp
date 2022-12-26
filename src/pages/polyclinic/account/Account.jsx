import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ClinicHeader from '../../../components/polyclinic/polyclinicDashboard/ClinicHeader'
import Layout from '../../../components/polyclinic/layout/Layout'
import AddFinancialAccount from '../../../components/polyclinic/accountFinancial/addAccount/AddFinancialAccount'
import PatientInformation from '../../../components/polyclinic/accountFinancial/addAccount/PatientInformation'
import Collection from '../../../components/polyclinic/accountFinancial/collection/Collection'
import CollectionInfo from '../../../components/polyclinic/accountFinancial/collection/CollectionInfo'


const Account = () => {
  const open = useSelector(state => state.open.value)
  const [showInfo, setShowInfo] = useState(0)
  const [hesap, setHesap] = useState(1)
  const handleClick = (a) => {
    setHesap(a)
    setShowInfo(0)
  }

  return (
    <>
      <Layout />

      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'} transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className='divide-y p-1'>
            <ClinicHeader />
            <div>
              <div className='flex'>
                <h1 className={`text-xl ${hesap === 1 && 'font-semibold bg-blue2 text-white'} p-2 my-4 ml-4 w-48 text-center cursor-pointer`} onClick={() => handleClick(1)}>Hesap Oluştur</h1>
                <h1 className={`text-xl ${hesap === 2 && 'font-semibold bg-blue2 text-white'} p-2 my-4 mr-4 w-48 text-center cursor-pointer`} onClick={() => handleClick(2)} > Tahsilat</h1>
              </div>
              {
                hesap === 1
                &&
                <AddFinancialAccount setShowInfo={setShowInfo} />
              }
              {
                hesap === 2
                &&
                <Collection setShowInfo={setShowInfo} />
              }
            </div>
          </div>
        </div>
        {
          showInfo === 1
          &&
          <PatientInformation />
        }
        {
          showInfo === 2
          &&
          <CollectionInfo />
        }

        {
          showInfo === 3
          &&
          <ReportInfo />
        }

      </div>

    </>
  )
}

export default Account