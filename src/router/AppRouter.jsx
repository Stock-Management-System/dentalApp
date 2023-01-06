import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointments from "../pages/doctor/appointments/Appointments";
import DoctorProfile from "../pages/doctor/profile/DoctorProfile";
import DoctorSettings from "../pages/doctor/settings/DoctorSettings";
import DoctorPatient from "../pages/doctor/patients/Patients";

import Account from "../pages/polyclinic/account/Account";
import PolyclinicAppointments from "../pages/polyclinic/appointments/PolyclinicAppointments";
import PolyclinicDoctors from "../pages/polyclinic/doctors/PolyclinicDoctors";
import Operations from "../pages/polyclinic/operations/Operations";
import Patients from "../pages/polyclinic/patients/Patients";
import PolyclinicProfile from "../pages/polyclinic/profile/PolyclinicProfile";
import Rontgen from "../pages/polyclinic/rontgen/Rontgen";
import Settings from "../pages/polyclinic/settings/Settings";
import MainPage from "../pages/dashboard/MainPage";
import Polyclinics from "../pages/dashboard/Polyclinics";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<MainPage />} />
				<Route path="/doktorlar" element={<DoctorProfile />} />
				<Route path="/doktorlar/randevular" element={<Appointments />} />
				<Route path="/doktorlar/hastalarım" element={<DoctorPatient />} />
				<Route path="/doktorlar/ayarlar" element={<DoctorSettings />} />
				
				{/* Dashboard */}
				<Route path="/poliklinikler" element={<Polyclinics />} />

				<Route path="/poliklinik" element={<PolyclinicProfile />} />
				<Route path="/poliklinik/randevular" element={<PolyclinicAppointments />} />
				<Route path="/poliklinik/doktorlarımız" element={<PolyclinicDoctors />} />
				<Route path="/poliklinik/hastalarımız" element={<Patients />} />
				<Route path="/poliklinik/rontgen" element={<Rontgen />} />
				<Route path="/poliklinik/islemlerimiz" element={<Operations />} />
				<Route path="/poliklinik/hesabım" element={<Account />} />
				<Route path="/poliklinik/ayarlar" element={<Settings />} />


			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
