import React from "react";
import Layout from "../../../components/polyclinic/layout/Layout";
import MiddleLink from "../../../components/polyclinic/polyclinicDashboard/MiddleLink";
import { useSelector } from 'react-redux'
import ClinicHeader from '../../../components/polyclinic//polyclinicDashboard/ClinicHeader'
import ClinicStatisticComponent from "../../../components/polyclinic/ClinicStatisticComponent";
import DoctorsTitle from "../../../components/polyclinic/polyclinicDashboard/DoctorsTitle";


const sampleData1 = {
  day: 'BUGÜN',
  date: '16 Kasım 2022',
  quantity: 43,
  peak: 16,
  control: 13,
  toBeContinous: 14
}
const sampleData2 = {
  day: 'BU AY',
  date: '16 Kasım 2022',
  quantity: 217,
  peak: 160,
  control: 137,
  toBeContinous: 140
}
const sampleData3 = {
  day: 'BU YIL',
  date: '16 Kasım 2022',
  quantity: 4127,
  peak: 460,
  control: 337,
  toBeContinous: 540
}

const PolyclinicProfile = () => {
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
            {/* Clinic statistic divders 👇🏻 */}
            <ClinicStatisticComponent data1={sampleData1} data2={sampleData2} data3={sampleData3} />
          </div>
        </div>
        <MiddleLink />
        <DoctorsTitle/>
      </div>

    </>

  )
}

export default PolyclinicProfile