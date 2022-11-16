import React from "react";
import { useSelector } from "react-redux";
import Container from "../../../components/polyclinic/Container";
import Layout from "../../../components/polyclinic/Layout";
import "./polyclinicProfile.scss";

import { Link } from "react-router-dom";

const PolyclinicProfile = () => {
	const open = useSelector((state) => state.open.value);
	return (
		<>
			<Layout />

			<div
				className="absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)]"
				style={{ width: open ? "calc(100% - 250px)" : "calc(100% - 100px)" }}
			>
				<div className="bg-container flex justify-between ">
					<Link
						to="/rontgen"
						className=" card rounded-none bg-gradient-to-r  from-blue1 to-blue2 text-primary-content"
					>
						<div className="card-body">
							<figure>
								<img src="" alt="Röntgen" className="h-16" />
							</figure>
							<h5 className="card-title">Rötgenler</h5>
						</div>
					</Link>
					<Link
						to="/account"
						className="card rounded-none bg-turquaz text-primary-content "
					>
						<div className="card-body">
							<figure >
								<img
									src="https://www.vegathemes.net/medikit/images/icons/icons-64-blue/payments.png"
									alt="Account"
									className="h-16"
								/>
							</figure>
							<h5 className="card-title">Hesaplar</h5>
						</div>
					</Link>
					<Link
						to="/appointments"
						className="card rounded-none bg-gradient-to-r  from-pink to-lightPink bg-primary text-primary-content"
					>
						<div className="card-body">
							<figure>
								<img
									src="https://www.vegathemes.net/medikit/images/icons/icons-64-white/calendar.png"
									alt="Calendar"
									className="h-16"
								/>
							</figure>
							<h5 className="card-title">Randevular</h5>
						</div>
					</Link>
					<Link to="/polyclinicdoctors" className="card rounded-none bg-white">
						<div className="card-body">
							<figure>
								<img
									src="https://www.vegathemes.net/medikit/images/icons/icons-64-blue/users.png"
									alt="Users"
									className="h-16"
								/>
							</figure>

							<h5 className="card-title">Doktorlar</h5>
						</div>
					</Link>
					<Link to="/operations" className="card rounded-none bg-white">
						<div className="card-body">
							<figure>
								<img
									src="https://www.vegathemes.net/medikit/images/icons/icons-64-blue/reports.png"
									alt="Reports"
									className="h-16"
								/>
							</figure>

							<h5 className="card-title">Geçmiş İşlemler</h5>
						</div>
					</Link>
					<Link to="/settings" className="card rounded-none bg-white">
						<div className="card-body">
							<figure>
								<img
									src="https://cdn-icons-png.flaticon.com/512/6392/6392125.png"
									alt="Settings"
									className="h-16"
								/>
							</figure>

							<h5 className="card-title">Ayarlar</h5>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PolyclinicProfile;
