import React from "react";
import DoctorTreatments from "./DoctorTreatments";
import DoctorIstatistik from "./DoctorIstatistik";

const DoctorInformation = ({ doktorInfo }) => {
	return (
		<div>
			<div>
				{/* <-----Hekim Performans ----->👇🏻 */}
				<div className="flex flex-row gap-10 pt-10">
					{/* <-----Hekim Resmi ----->👇🏻 */}
					<figure>
						<img
							src={doktorInfo.img}
							alt="Shoes"
							className="w-56 h-56 rounded-full object-contain"
						/>
					</figure>
					{/* <-----Hekim Bilgileri ----->👇🏻 */}
					<div className="w-full ">
						<h1 className="text-2xl font-bold mb-3 capitalize">
							{doktorInfo.name}
						</h1>
						<div className="flex flex-row gap-10 text-xl">
							<div className="w-1/3">
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
							<div className="w-1/3">
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
							<div className="w-1/3">
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
						return <DoctorIstatistik istatistik={istatis} key={index} />;
					})}
				</div>
				{/* <-----Uyguladığı Tedaviler ----->👇🏻 */}
				<DoctorTreatments doctorTreatment={doktorInfo.uyguladıtedavi} />
			</div>
		</div>
	);
};

export default DoctorInformation;
