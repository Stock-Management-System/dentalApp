import React from "react";
import { useSelector } from "react-redux";

const ClinicHeader = () => {
	const policlinicProfile = useSelector((state) => state.polData.value)

	return (
		<div className="flex flex-row mt-16 gap-20 py-5">
			{/* clinic header infos */}
			<div className="flex basis-4/6 justify-start items-center px-10 py-4">
				<img
					width={100}
					src="https://ozeldent42.com/tema/genel/uploads/hizmetler/icon/implant.png"
					alt="İnciDis"
				/>
				<div className="text-2xl text-Sky-700 ml-8">
					<h1 className="font-bold" style={{ fontSize: "2rem" }}>
					{policlinicProfile.pol_adi}
					</h1>
					<h2>POLİKLİNİĞİ</h2>
				</div>
			</div>
			<div className="basis-2/12">
				<h3 className="font-medium">Adress</h3>
				<p>{policlinicProfile.pol_adres} <span className="font-medium">{policlinicProfile.pol_ilce}</span>/<span className="font-medium">{policlinicProfile.pol_il}</span></p>
			</div>
			<div className="basis-2/12">
				<h3 className="font-medium">Telefon</h3>
				<p>{policlinicProfile.pol_tel}</p>
				<p>{policlinicProfile.pol_tel2}</p>
				<p>{policlinicProfile.pol_tel3}</p>
			</div>
		</div>
	);
};

export default ClinicHeader;
