import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import TodayAppointments from "./appointments/TodayAppointments";

const Appointments = () => {
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
				<div className="tabs ">
					<a className="tab tab-bordered">Bugünkü Randevular</a>
					<a className="tab ">Hasta Randevu Sorgulama</a>
					<a className="tab ">Doktor Randevu Sorgulama</a>
					<a className="tab ">Tarih Aralığı Sorgulama</a>
				</div>
				<TodayAppointments />
			</div>
		</div>
	);
};

export default Appointments;
