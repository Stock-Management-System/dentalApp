import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import AddAppointmentsModal from "./addAppointmentsModal/AddAppointmentsModal";
import DateRange from "./appointments/DateRange";
import DoctorsAppointments from "./appointments/DoctorsAppointments";
import PatientsAppointments from "./appointments/PatientsAppointments";
import TodayAppointments from "./appointments/TodayAppointments";

const Appointments = () => {
	const [openTab, setOpenTab] = useState(1);
	return (
		<div>
			{/* clinic appointments title 👇🏻 */}
			<div className="flex basis-4/6 justify-between items-center px-5 py-2">
				<p className="text-2xl font-semibold antialiased leading-loose">
					Randevu İşlemleri
				</p>
				<AddAppointmentsModal />
			</div>
			<div className="px-5">
				{/* appointments headers 👇🏻 */}
				<div className="tabs mb-6 ">
					<p
						className={` ${openTab === 1
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(1);
						}}
					>
						Bugünkü Randevular
					</p>
					<p
						className={` ${openTab === 2
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(2);
						}}
					>
						Hasta Randevu Sorgulama
					</p>
					<p
						className={` ${openTab === 3
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(3);
						}}
					>
						Doktor Randevu Sorgulama
					</p>
					<p
						className={`${openTab === 4
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(4);
						}}
					>
						Tarih Aralığı Sorgulama
					</p>
				</div>
				{/* appointments body 👇🏻 */}
				<div className={openTab === 1 ? "block" : "hidden"}>
					<TodayAppointments />
				</div>
				<div className={openTab === 2 ? "block" : "hidden"}>
					<PatientsAppointments />
				</div>
				<div className={openTab === 3 ? "block" : "hidden"}>
					<DoctorsAppointments />
				</div>
				<div className={openTab === 4 ? "block" : "hidden"}>
					<DateRange />
				</div>
			</div>
		</div>
	);
};

export default Appointments;
