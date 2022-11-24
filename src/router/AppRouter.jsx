import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/polyclinic/Footer";
import Account from "../pages/polyclinic/account/Account";
import PolyclinicAppointments from "../pages/polyclinic/appointments/PolyclinicAppointments";
import PolyclinicDoctors from "../pages/polyclinic/doctors/PolyclinicDoctors";
import Operations from "../pages/polyclinic/operations/Operations";
import Patients from "../pages/polyclinic/patients/Patients";
import PolyclinicProfile from "../pages/polyclinic/profile/PolyclinicProfile";
import Rontgen from "../pages/polyclinic/rontgen/Rontgen";
import Settings from "../pages/polyclinic/settings/Settings";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Footer />} />
				<Route path="/patients" element={<Patients />} />
				<Route path="/rontgen" element={<Rontgen />} />
				<Route path="/account" element={<Account />} />
				<Route path="/appointments" element={<PolyclinicAppointments />} />
				<Route path="/polyclinicdoctors" element={<PolyclinicDoctors />} />
				<Route path="/operations" element={<Operations />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
