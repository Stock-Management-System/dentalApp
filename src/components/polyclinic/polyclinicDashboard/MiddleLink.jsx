import React from "react";
import { Link } from "react-router-dom";
import teeth from "../../../assets/teeth.png";
import calendar from "../../../assets/calendar.png";
import payments from "../../../assets/payments.png";
import users from "../../../assets/users.png";
import reports from "../../../assets/reports.png";
import ayarlar from "../../../assets/ayarlar.png";

const MiddleLink = () => {
	return (
		<div className=" bg-container flex justify-between gap-3 mt-7">
			<Link
				to="/poliklinik/rontgen"
				className=" card w-64 rounded-none bg-gradient-to-r  from-blue1 to-blue2 text-primary-content hover:transition-all duration-300 hover:-translate-y-1"
			>
				<div className="card-body items-center text-center">
					<span className="absolute top-1 -right-1 bg-white text-blue1 px-1 py-0.5 font-medium rounded-md shadow-lg">
						3 YENİ
					</span>
					<figure>
						<img src={teeth} alt="Röntgen" className="h-16" />
					</figure>
					<h5 className="card-title">Rötgenler</h5>
				</div>
			</Link>
			<Link
				to="/poliklinik/hesabım"
				className="card w-64 rounded-none bg-gradient-to-r  from-darkTurquaz to-turquaz text-primary-content hover:transition-all duration-300 hover:-translate-y-1 "
			>
				<div className="card-body items-center text-center">
					<span className="absolute top-1 -right-1 bg-white text-blue1 px-1 py-0.5 font-medium rounded-md shadow-lg">
						14 YENİ
					</span>
					<figure>
						<img src={payments} alt="Account" className="h-16" />
					</figure>
					<h5 className="card-title">Hesaplar</h5>
				</div>
			</Link>
			<Link
				to="/poliklinik/randevular"
				className="card w-64 rounded-none bg-gradient-to-r  from-pink to-lightPink bg-primary text-primary-content hover:transition-all duration-300 hover:-translate-y-1 "
			>
				<div className="card-body items-center text-center">
					<span className="absolute top-1 -right-1 bg-white text-blue1 px-1 py-0.5 font-medium rounded-md shadow-lg">
						13 YENİ
					</span>
					<figure>
						<img src={calendar} alt="Calendar" className="h-16" />
					</figure>
					<h5 className="card-title ">Randevular</h5>
				</div>
			</Link>
			<Link
				to="/poliklinik/doktorlarımız"
				className="card w-64 rounded-none bg-white hover:transition-all duration-300 hover:-translate-y-1 "
			>
				<div className="card-body items-center text-center">
					<figure>
						<img src={users} alt="Users" className="h-16" />
					</figure>

					<h5 className="card-title">Doktorlar</h5>
				</div>
			</Link>
			<Link
				to="/poliklinik/hesabım"
				className="card w-64 rounded-none bg-white hover:transition-all duration-300 hover:-translate-y-1 "
			>
				<div className="card-body items-center text-center">
					<figure>
						<img src={reports} alt="Reports" className="h-16" />
					</figure>

					<h5 className="card-title">Geçmiş İşlemler</h5>
				</div>
			</Link>
			<Link
				to="/poliklinik/ayarlar"
				className="card w-64 rounded-none bg-white hover:transition-all duration-300 hover:-translate-y-1 "
			>
				<div className="card-body items-center text-center">
					<figure>
						<img src={ayarlar} alt="Settings" className="h-16" />
					</figure>

					<h5 className="card-title">Ayarlar</h5>
				</div>
			</Link>
		</div>
	);
};

export default MiddleLink;
