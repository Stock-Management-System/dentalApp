import React from 'react'
import "./rontgen.scss"
import { useSelector } from "react-redux";
import ClinicHeader from "../../../components/polyclinic/ClinicHeader";
import Layout from "../../../components/polyclinic/Layout";
import RontgenQuery from '../../../components/polyclinic/rontgen/RontgenQuery';

const Rontgen = () => {
  const open = useSelector((state) => state.open.value);
  return (
    <div>
      <Layout />
      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? "w-[calc(100%-250px)]" : "w-[calc(100%-100px)]"
          } transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className="divide-y-2 p-1">
            <ClinicHeader />
            <RontgenQuery />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rontgen