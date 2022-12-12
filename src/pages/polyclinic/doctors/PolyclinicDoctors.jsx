import React, { useState } from "react";
import { useSelector } from "react-redux";
import ClinicHeader from "../../../components/polyclinic/polyclinicDashboard/ClinicHeader";
import Layout from "../../../components/polyclinic/layout/Layout";
import NewDoctorAddPage from "../../../components/polyclinic/doctors/NewDoctorAddPage";
import { AiOutlineFileAdd } from "react-icons/ai";
import DoctorPerformance from "../../../components/polyclinic/doctors/DoctorPerformance";
import DoctorPermits from "../../../components/polyclinic/doctors/DoctorPermits";
import { doktorlar } from "../../../helpers/data";
const PolyclinicAppointments = () => {
	const open = useSelector((state) => state.open.value);
	const [openTab, setOpenTab] = useState(1);
	return (
		<div>
			<Layout />

			<div
				className={`absolute bg-container mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${open ? "w-[calc(100%-250px)]" : "w-[calc(100%-100px)]"
					} transition-w ease-in-out duration-500`}
			>
				{/* <----- Header -----> */}
				<div className="bg-white">
					<div className="divide-y p-1">
						<ClinicHeader />
						<div className="grid grid-cols-3 gap-3 border-gray"></div>
					</div>
					{/* personel title 👇🏻 */}
					<div className="flex basis-4/6 justify-between items-center px-5 py-2">
						<p className="text-2xl font-semibold antialiased leading-loose">
							Personel İşlemleri
						</p>
						<button className="btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1 capitalize">
							<AiOutlineFileAdd /> Doktor Ekle
						</button>
					</div>
					<div className="px-5">
						{/* <-----Tab Header ----->👇🏻 */}
						<div className="tabs mb-5 ">
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
								Hekimlerimiz
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
								Performans
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
								İzinler
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
								Yeni Kayıt
							</p>
						</div>
						{/* <-----Tab Body ----->👇🏻 */}
						<div className={openTab === 1 ? "block" : "hidden"}>
							Hekimlerimiz Component gelecek
						</div>
						<div className={openTab === 2 ? "block" : "hidden"}>
							<DoctorPerformance doktorlar={doktorlar} />
						</div>
						<div className={openTab === 3 ? "block" : "hidden"}>
							<DoctorPermits doktorlar={doktorlar} />
						</div>
					</div>
				</div>
				<div className={openTab === 4 ? "block, bg-white" : "hidden"}>
					<NewDoctorAddPage />
				</div>
			</div>
		</div>
	);
};

export default PolyclinicAppointments;
