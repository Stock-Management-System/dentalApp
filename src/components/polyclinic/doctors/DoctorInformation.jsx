import React from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import DoctorTreatments from "./DoctorTreatments";
import sinusgraphic from "../../../assets/sinusgraphic.png";
import DoctorIstatistik from "./DoctorIstatistik";

const DoctorInformation = ({ doktorInfo }) => {
	// console.log(doktorInfo.istatistik);
	return (
		<div>
			<div>
				{/* <-----Hekim Performans ----->👇🏻 */}
				<div className="flex flex-row gap-5 pt-10">
					{/* <-----Hekim Resmi ----->👇🏻 */}
					<figure>
						<img
							src={doktorInfo.img}
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					{/* <-----Hekim Bilgileri ----->👇🏻 */}
					<div className="w-full">
						<h1 className="text-xl font-bold mb-3 capitalize">
							{doktorInfo.name}
						</h1>
						<div className="flex flex-row gap-2 ">
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">
									{doktorInfo.ünvan}
								</p>
								<p className="pt-1 font-bold">
									Email:{" "}
									<span className="text-blue1 font-normal">
										{doktorInfo.email}
									</span>
								</p>
								<p className="pt-1 font-bold">
									Doğum: <span className="font-normal">{doktorInfo.doğum}</span>
								</p>
							</div>
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">
									{doktorInfo.üniversite}
								</p>
								<p className="pt-1 font-bold">
									Telefon:{" "}
									<span className="text-blue1 font-normal">
										{doktorInfo.phone}
									</span>
								</p>
								<p className="pt-1 font-bold">
									Cinsiyet:{" "}
									<span className="font-normal">{doktorInfo.gender}</span>
								</p>
							</div>
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">
									{doktorInfo.işbaşı}'de çalışmaya başladı
								</p>
								<p className="pt-1 font-bold">
									Adres: <span className="font-normal">{doktorInfo.adres}</span>
								</p>
								<p className="pt-1 font-bold">
									İşbaşı:{" "}
									<span className="font-normal">{doktorInfo.işbaşı}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <-----Hekim Performans Grafikleri ----->👇🏻 */}
				<div className="flex flex-row gap-4 w-full py-10">
					{doktorInfo.istatistik.map((istatis, index) => {
						return <DoctorIstatistik istatistik={istatis} key={index} />
						
					})}
				</div>
				{/* <-----Uyguladığı Tedaviler ----->👇🏻 */}
				<DoctorTreatments doctorTreatment={doktorInfo.uyguladıtedavi} />
			</div>
		</div>
	);
};

export default DoctorInformation;
