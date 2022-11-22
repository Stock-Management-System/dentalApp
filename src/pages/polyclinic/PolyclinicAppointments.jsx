import React from "react";
import { useSelector } from "react-redux";
import ClinicHeader from "../../../components/polyclinic/ClinicHeader";
import Layout from "../../../components/polyclinic/Layout";

import Appointments from "../../../components/polyclinic/Appointments";

const PolyclinicAppointments = () => {
	const open = useSelector((state) => state.open.value);
	return (
		<div>
			<Layout />

			<div
				className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${
					open ? "w-[calc(100%-250px)]" : "w-[calc(100%-100px)]"
				} transition-w ease-in-out duration-500`}
			>
				<div className="bg-white">
					{/* silinecek ClinicHeader Components gelecek */}
					<div className="divide-y p-1">
						<ClinicHeader />
						<div className="grid grid-cols-3 gap-3"></div>
					</div>
					{/* Randevu componenti burdan başlıyor */}
					<Appointments />
				</div>
			</div>
		</div>
	);
};

export default PolyclinicAppointments;
