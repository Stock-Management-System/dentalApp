import React from "react";
import Layout from "../../../components/polyclinic/Layout";
import MiddleLink from "../../../components/polyclinic/MiddleLink";
import { useSelector } from 'react-redux'
import ClinicHeader from '../../../components/polyclinic/ClinicHeader'
import Container from '../../../components/polyclinic/Container'
import "./polyclinicProfile.scss"

const PolyclinicProfile = () => {
	return (
		<>
			<Layout />
			
    <div
      className="absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)]"
      style={{ width: open ? 'calc(100% - 250px)' : 'calc(100% - 100px)' }}
    >
      <div className="bg-white">
        <ClinicHeader />
        <MiddleLink />
      </div>
    </div>

  </>
  )
}

export default PolyclinicProfile