import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import sinusgraphic from "../../../assets/sinusgraphic.png";

const DoctorPerformance = () => {
	const [openTab, setOpenTab] = useState(1);

	return (
		<div>
			{/* <-----Card Hekimler ----->👇🏻 */}
			<p className="pb-5">Performans görüntülemek için bir hekim seçin.</p>
			<div className="flex flex-row gap-5">
				<div
					className={` ${
						openTab === 1
							? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
							: "card w-1/5 bg-container"
					}`}
					onClick={(e) => {
						e.preventDefault();
						setOpenTab(1);
					}}
				>
					<figure className="pt-5">
						<img
							src="https://placeimg.com/850/850/people"
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					<div className="text-center py-3">
						<h2 className="text-center text-xl font-semibold">Egemen Yılmaz</h2>
						<p
							className={` ${
								openTab === 1
									? "text-white text-center"
									: "text-blue1white text-center"
							}`}
						>
							Başhekim
						</p>
					</div>
				</div>
				<div
					className={` ${
						openTab === 2
							? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
							: "card w-1/5 bg-container"
					}`}
					onClick={(e) => {
						e.preventDefault();
						setOpenTab(2);
					}}
				>
					<figure className="pt-5">
						<img
							src="https://placeimg.com/800/800/people"
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					<div className="text-center py-3">
						<h2 className="text-center text-xl font-semibold">Çelebi Doğan</h2>
						<p
							className={` ${
								openTab === 2
									? "text-white text-center"
									: "text-blue1white text-center"
							}`}
						>
							Ortodonti Uzmanı
						</p>
					</div>
				</div>
				<div
					className={` ${
						openTab === 3
							? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
							: "card w-1/5 bg-container"
					}`}
					onClick={(e) => {
						e.preventDefault();
						setOpenTab(3);
					}}
				>
					<figure className="pt-5">
						<img
							src="https://placeimg.com/700/700/people"
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					<div className="text-center py-3">
						<h2 className="text-center text-xl font-semibold">Zeynep Kara</h2>
						<p
							className={` ${
								openTab === 3
									? "text-white text-center"
									: "text-blue1white text-center"
							}`}
						>
							Diş Hekimi
						</p>
					</div>
				</div>
				<div
					className={` ${
						openTab === 4
							? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
							: "card w-1/5 bg-container"
					}`}
					onClick={(e) => {
						e.preventDefault();
						setOpenTab(4);
					}}
				>
					<figure className="pt-5">
						<img
							src="https://placeimg.com/950/950/people"
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					<div className="text-center py-3">
						<h2 className="text-center text-xl font-semibold">
							Mikail Çelikbaş
						</h2>
						<p
							className={` ${
								openTab === 4
									? "text-white text-center"
									: "text-blue1white text-center"
							}`}
						>
							Diş Hekimi
						</p>
					</div>
				</div>
				<div
					className={` ${
						openTab === 5
							? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
							: "card w-1/5 bg-container"
					}`}
					onClick={(e) => {
						e.preventDefault();
						setOpenTab(5);
					}}
				>
					<figure className="pt-5">
						<img
							src="https://placeimg.com/1100/1100/people"
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					<div className="text-center py-3">
						<h2 className="text-center text-xl font-semibold">Seray Kiraz</h2>
						<p
							className={` ${
								openTab === 5
									? "text-white text-center"
									: "text-blue1white text-center"
							}`}
						>
							Diş Hekimi
						</p>
					</div>
				</div>
			</div>
			{/* <-----Hekim Profil ----->👇🏻 */}
			<div className={openTab === 1 ? "block" : "hidden"}>
				{/* <-----Hekim Performans ----->👇🏻 */}
				<div className="flex flex-row gap-5 pt-10">
					{/* <-----Hekim Resmi ----->👇🏻 */}
					<figure>
						<img
							src="https://placeimg.com/850/850/people"
							alt="Shoes"
							className="w-36 rounded-full object-cover"
						/>
					</figure>
					{/* <-----Hekim Bilgileri ----->👇🏻 */}
					<div className="w-full">
						<h1 className="text-xl font-bold mb-3">Egemen Yılmaz</h1>
						<div className="flex flex-row gap-2">
							<div className="w-1/4">
								<p className="bg-base-200 rounded-lg p-2 ">Ortodonti Uzmanı</p>
								<p className="pt-1 font-bold">
									Email:{" "}
									<span className="text-blue1 font-normal">
										celebidogan@email.com
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
				<div className="flex flex-row gap-4 w-full py-5">
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
										<a>Bugün</a>
									</li>
									<li>
										<a>Bu hafta</a>
									</li>
									<li>
										<a>Bu Ay</a>
									</li>
									<li>
										<a>Bu Yıl</a>
									</li>
									<li>
										<a>Tüm zamanlar</a>
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
										<a>Bugün</a>
									</li>
									<li>
										<a>Bu hafta</a>
									</li>
									<li>
										<a>Bu Ay</a>
									</li>
									<li>
										<a>Bu Yıl</a>
									</li>
									<li>
										<a>Tüm zamanlar</a>
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
										<a>Bugün</a>
									</li>
									<li>
										<a>Bu hafta</a>
									</li>
									<li>
										<a>Bu Ay</a>
									</li>
									<li>
										<a>Bu Yıl</a>
									</li>
									<li>
										<a>Tüm zamanlar</a>
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
										<a>Bugün</a>
									</li>
									<li>
										<a>Bu hafta</a>
									</li>
									<li>
										<a>Bu Ay</a>
									</li>
									<li>
										<a>Bu Yıl</a>
									</li>
									<li>
										<a>Tüm zamanlar</a>
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
				<div>
					<div className="flex flex-row justify-between py-5">
						<h1 className="text-xl font-semibold mb-3">Uyguladığı Tedaviler</h1>
						<div className="flex flex-row gap-2 ">
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Cerrahi
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Tedavi
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Ortodonti
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Radyoloji
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Fenoloji
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Ağız Bakım
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Cleoronti
							</button>
							<button className="btn btn-sm btn-outline rounded-full capitalize">
								Ceromonti
							</button>
						</div>
					</div>
					<div className="grid grid-cols-8 gap-4 place-content-center py-8">
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Telgerme</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								139
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Telleme</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								215
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Sıkma</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								751
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Gevşetme</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								102
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Uydurma</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								234
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Uyarlama</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								145
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Sallama</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								210
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Kasnak Atma</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								145
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Entegre</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								103
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Ondoitasyon</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								137
							</h1>
						</div>
						<div className="grid place-content-center bg-container p-8 ">
							<div>
								<h6 className="text-xl font-semibold">Pufrize</h6>
								<p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
							</div>
							<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
								191
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className={openTab === 2 ? "block" : "hidden"}>Çelebi Doğan</div>
			<div className={openTab === 3 ? "block" : "hidden"}>Zeynep Kara</div>
			<div className={openTab === 4 ? "block" : "hidden"}>Mikail Çelikbaş</div>
			<div className={openTab === 5 ? "block" : "hidden"}>Seray Kiraz</div>
		</div>
	);
};

export default DoctorPerformance;
