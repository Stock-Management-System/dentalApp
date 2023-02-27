import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/doctor/Layout";
import ClinicHeader from "../../../components/polyclinic/polyclinicDashboard/ClinicHeader";
import { CiUser } from "react-icons/ci";
import { TbSchool } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";

const DoctorSettings = () => {
	const open = useSelector((state) => state.open.value);
	const doctorData = {
		profileImg: "https://down.imgspng.com/download/0720/doctor_PNG15959.png",
	};
	return (
		<>
			<Layout />

			<div
				className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${
					open ? "w-[calc(100%-250px)]" : "w-[calc(100%-100px)]"
				} transition-w ease-in-out duration-500`}
			>
				<div className="bg-white">
					<div className="divide-y p-1">
						<ClinicHeader />
						<div className="grid grid-cols-3 gap-3 border-gray"></div>
					</div>
					<div className="grid gap-4 grid-cols-2 my-10 ">
						<div className=" sm:w-80 sm:h-80 w-full mx-auto">
							<img
								src={doctorData.profileImg}
								alt="profile"
								className="rounded-full w-full h-full object-contain p-2 bg-turquaz border-blue2  border-4"
							/>
							<p className="text-center my-2">Düzenle</p>
						</div>
						<div className="w-2/3">
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<CiUser className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<TbSchool className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<HiOutlineCalendar className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<BsClock className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<CiUser className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<TbSchool className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<HiOutlineCalendar className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
							<div className="form-control w-full mt-4 flex flex-row gap-2">
								<BsClock className="text-5xl text-gray" />
								<input type="text" className="input input-bordered w-full" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorSettings;
