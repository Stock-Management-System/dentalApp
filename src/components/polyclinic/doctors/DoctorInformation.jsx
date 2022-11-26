import React from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import DoctorTreatments from "./DoctorTreatments";
import sinusgraphic from "../../../assets/sinusgraphic.png";

const DoctorInformation = ({doktorInfo}) => {
	console.log(doktorInfo);
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
						<h1 className="text-xl font-bold mb-3">{doktorInfo.name}</h1>
						<div className="flex flex-row gap-2">
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">Ortodonti Uzmanı</p>
								<p className="pt-1 font-bold">
									Email:{" "}
									<span className="text-blue1 font-normal">
									{doktorInfo.email}
									</span>
								</p>
								<p className="pt-1 font-bold">
									Doğum: <span className="font-normal">14 Mart 1980</span>
								</p>
							</div>
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">
									Hacettepe Universitesi
								</p>
								<p className="pt-1 font-bold">
									Telefon:{" "}
									<span className="text-blue1 font-normal">0542 123 45 67</span>
								</p>
								<p className="pt-1 font-bold">
									Cinsiyet: <span className="font-normal">Erkek</span>
								</p>
							</div>
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">
									01 Ocak 2022'de çalışmaya başladı
								</p>
								<p className="pt-1 font-bold">
									Adres:{" "}
									<span className="font-normal">
										Cumhuriyet Mh. 18.Cd. No:6 Merkez/Sivas
									</span>
								</p>
								<p className="pt-1 font-bold">
									İşbaşı: <span className="font-normal">01 Ocak 2022</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <-----Hekim Performans Grafikleri ----->👇🏻 */}
				<div className="flex flex-row gap-4 w-full py-10">
					<div className="w-1/4 bg-container p-2">
						<div className="flex flex-row p-2 justify-between py-2">
							<div>
								<h6 className="font-bold">Bakılan Hasta</h6>
								<h1 className="text-3xl font-bold text-blue2">129</h1>
								<p className="text-[10px] opacity-70">TÜM ZAMANLAR</p>
							</div>
							<div tabIndex={0} className="dropdown dropdown-end">
								<label className="p-1 bg-white swap rounded-full">
									<input type="checkbox" />
									<div className="swap-on">
										<HiMinus />
									</div>
									<div className="swap-off">
										<HiPlus />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<p>Bugün</p>
									</li>
									<li>
										<p>Bu hafta</p>
									</li>
									<li>
										<p>Bu Ay</p>
									</li>
									<li>
										<p>Bu Yıl</p>
									</li>
									<li>
										<p>Tüm zamanlar</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="py-2">
					
							{/* <img src={sinusgraphic} alt="" /> */}
						</div>
					</div>
					<div className="w-1/4 bg-container p-2">
						<div className="flex flex-row p-2 justify-between py-2">
							<div>
								<h6 className="font-bold">Bakılan Hasta</h6>
								<h1 className="text-3xl font-bold text-turquaz">48</h1>
								<p className="text-[10px] opacity-70">TÜM ZAMANLAR</p>
							</div>
							<div tabIndex={0} className="dropdown dropdown-end">
								<label className="p-1 bg-white swap rounded-full">
									<input type="checkbox" />
									<div className="swap-on">
										<HiMinus />
									</div>
									<div className="swap-off">
										<HiPlus />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<p>Bugün</p>
									</li>
									<li>
										<p>Bu hafta</p>
									</li>
									<li>
										<p>Bu Ay</p>
									</li>
									<li>
										<p>Bu Yıl</p>
									</li>
									<li>
										<p>Tüm zamanlar</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="py-2">
							<img src={sinusgraphic} alt="" />
						</div>
					</div>
					<div className="w-1/4 bg-container p-2">
						<div className="flex flex-row p-2 justify-between py-2">
							<div>
								<h6 className="font-bold">Bakılan Hasta</h6>
								<h1 className="text-3xl font-bold text-pink">14</h1>
								<p className="text-[10px] opacity-70">TÜM ZAMANLAR</p>
							</div>
							<div tabIndex={0} className="dropdown dropdown-end">
								<label className="p-1 bg-white swap rounded-full">
									<input type="checkbox" />
									<div className="swap-on">
										<HiMinus />
									</div>
									<div className="swap-off">
										<HiPlus />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<p>Bugün</p>
									</li>
									<li>
										<p>Bu hafta</p>
									</li>
									<li>
										<p>Bu Ay</p>
									</li>
									<li>
										<p>Bu Yıl</p>
									</li>
									<li>
										<p>Tüm zamanlar</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="py-2">
							<img src={sinusgraphic} alt="" />
						</div>
					</div>
					<div className="w-1/4 bg-container p-2">
						<div className="flex flex-row p-2 justify-between py-2">
							<div>
								<h6 className="font-bold">Bakılan Hasta</h6>
								<h1 className="text-3xl font-bold text-black">597</h1>
								<p className="text-[10px] opacity-70">TÜM ZAMANLAR</p>
							</div>
							<div tabIndex={0} className="dropdown dropdown-end">
								<label className="p-1 bg-white swap rounded-full">
									<input type="checkbox" />
									<div className="swap-on">
										<HiMinus />
									</div>
									<div className="swap-off">
										<HiPlus />
									</div>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<p>Bugün</p>
									</li>
									<li>
										<p>Bu hafta</p>
									</li>
									<li>
										<p>Bu Ay</p>
									</li>
									<li>
										<p>Bu Yıl</p>
									</li>
									<li>
										<p>Tüm zamanlar</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="py-2">
							<img src={sinusgraphic} alt="" />
						</div>
					</div>
				</div>
				{/* <-----Uyguladığı Tedaviler ----->👇🏻 */}
				<DoctorTreatments />
			</div>
			
		</div>
	);
};

export default DoctorInformation;
