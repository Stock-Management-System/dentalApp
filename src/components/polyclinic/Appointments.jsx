import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
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
				<button className="btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1">
					<AiOutlineFileAdd /> Randevu Oluştur
				</button>
			</div>
			<div className="px-5">
				{/* appointments headers 👇🏻 */}
				<div className="tabs">
					<a
						className={` ${
							openTab === 1 ? "tab tab-bordered tab-active" : "tab"
						}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(1);
						}}
					>
						Bugünkü Randevular
					</a>
					<a
						className={` ${
							openTab === 2 ? "tab tab-bordered tab-active" : "tab"
						}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(2);
						}}
					>
						Hasta Randevu Sorgulama
					</a>
					<a
						className={` ${
							openTab === 3 ? "tab tab-bordered tab-active" : "tab"
						}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(3);
						}}
					>
						Doktor Randevu Sorgulama
					</a>
					<a
						className={`${
							openTab === 4 ? "tab tab-bordered tab-active" : "tab"
						}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(4);
						}}
					>
						Tarih Aralığı Sorgulama
					</a>
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
