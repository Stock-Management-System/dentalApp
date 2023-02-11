import React, { useState } from "react";
import Footer from "../../components/dashboard/Footer";
import ForgotPassword from "../../components/dashboard/ForgotPassword";
import LoginModal from "../../components/dashboard/LoginModal";
import NavBar from "../../components/dashboard/NavBar";
import RegisterModal from "../../components/dashboard/RegisterModal";
import { ilData } from "../../helpers/ilData";
import poliklinikpp from "../../assets/Poliklinikpp.png";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const polyclinics = [
	{
		img: poliklinikpp,
		poliklinikAdı: "İNCİ DİŞ POLİKLİNİĞİ",
		telefon: "0850 911 66 33",
		adres: "Cumhuriyet Mah. Yılmaz Sk. No:5/7 Ereğli/Konya",
	},
	{
		img: "https://dentavega.com/wp-content/uploads/2020/05/dentavega-logo.jpg",
		poliklinikAdı: "Dent Balgat",
		telefon: "0850 746 32 31",
		adres: "Atatürk Mah. Çıkmaz Sk. No:3/1 Ereğli/Konya",
	},
	{
		img: "https://www.aliadent.com/wp-content/uploads/2019/09/logo.png",
		poliklinikAdı: "Alİa Dent",
		telefon: "0850 213 54 32",
		adres: "Cumhuriyet Mah. Mesaj Cad. No:2/5 Ereğli/Konya",
	},
	{
		img: "https://dentia.com.tr/wp-content/uploads/2022/03/LOGO1siyah-yatay.png",
		poliklinikAdı: "Dentİa",
		telefon: "0850 789 14 15",
		adres: "Cumhuriyet Mah. Samsun Cad. No:9/4 Ereğli/Konya",
	},
	{
		img: poliklinikpp,
		poliklinikAdı: "İNCİ DİŞ POLİKLİNİĞİ",
		telefon: "0850 911 66 33",
		adres: "Cumhuriyet Mah. Yılmaz Sk. No:5/7 Ereğli/Konya",
	},
	{
		img: "https://dentavega.com/wp-content/uploads/2020/05/dentavega-logo.jpg",
		poliklinikAdı: "Dent Balgat",
		telefon: "0850 746 32 31",
		adres: "Atatürk Mah. Çıkmaz Sk. No:3/1 Ereğli/Konya",
	},
	{
		img: "https://www.aliadent.com/wp-content/uploads/2019/09/logo.png",
		poliklinikAdı: "Alİa Dent",
		telefon: "0850 213 54 32",
		adres: "Cumhuriyet Mah. Mesaj Cad. No:2/5 Ereğli/Konya",
	},
	{
		img: "https://dentia.com.tr/wp-content/uploads/2022/03/LOGO1siyah-yatay.png",
		poliklinikAdı: "Dentİa",
		telefon: "0850 789 14 15",
		adres: "Cumhuriyet Mah. Samsun Cad. No:9/4 Ereğli/Konya",
	},
];

const Polyclinics = () => {
	const [showRegister, setShowRegister] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [showForgotPassword, setShowForgotPassword] = useState(false);

	const [registerInfo, setRegisterInfo] = useState({
		il: ilData[0]["text"],
		ilce: ilData[0]["districts"][0]["text"],
	});

	const handleChange = (e) => {
		setRegisterInfo({ ...registerInfo, [e.target.id]: e.target.value });
	};

	return (
		<div className="h-full relative">
			<NavBar setShowRegister={setShowRegister} />
			<div>
				<div className="bg-container h-full">
					<section className="flex justify-center pt-24 pb-40   w-full min-h-screen ">
						<div className="w-4/5">
							<div className="flex justify-between w-full">
								<h1 className="text-5xl text-blue1 font-semibold">
									Poliklinikler
								</h1>
								<div className="form-control relative w-1/4 mt-4 xs:hidden md:block">
									<input
										type="text"
										placeholder="Poliklinik adı"
										className="input rounded-3xl w-full"
									/>
									<button className="btn btn-ghost btn-circle absolute right-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className="flex justify-between my-8 mx-2">
								<p>
									Aradığınız kriterlere uygun{" "}
									<span className="font-bold">8 adet</span> poliklinik bulundu.
								</p>
								<div className="grid grid-cols-2 gap-2">
									<select
										name="il"
										id="il"
										className="select select-sm text-gray"
										onChange={handleChange}
									>
										<option disabled selected>
											İl Seçiniz
										</option>
										{ilData.map((il) => (
											<option value={il["text"]}>{il["text"]}</option>
										))}
									</select>
									<select
										name="ilce"
										id="ilce"
										className="select select-sm text-gray"
										onChange={handleChange}
									>
										<option disabled selected>
											İlçe Seçiniz
										</option>
										{ilData
											.filter((data) => data["text"] === registerInfo.il)
											.map((ilce) =>
												ilce["districts"].map((e) => (
													<option value={e["text"]}>{e["text"]}</option>
												))
											)}
									</select>
								</div>
							</div>
							<div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6">
								{polyclinics.map((polyclinic) => (
									<div className="card bg-white p-4 ">
										<div className="divide-y-2 divide-gray">
											<figure className="h-40">
												<img
													src={polyclinic.img}
													alt="profile"
													className="object-contain h-full w-full"
												/>
											</figure>
											<div className="card-body h-2/3">
												<h2 className="text-2xl text-blue1 text-left uppercase">
													{polyclinic.poliklinikAdı}
												</h2>
												<div>
													<div className="flex justify-start gap-6 mt-7">
														<BsTelephone className="text-3xl opacity-50 mt-2 mr-2" />
														<div>
															<p className="text-14">TELEFON</p>
															<p className="text-[14px]">
																{polyclinic.telefon}
															</p>
														</div>
													</div>
													<div className="flex justify-start gap-6 mt-7">
														<IoLocationOutline className="text-5xl opacity-50 mt-1" />
														<div>
															<p className="text-14">ADRES </p>
															<p className="text-[14px]">{polyclinic.adres}</p>
														</div>
													</div>
												</div>
												<button className="btn btn-active btn-sm place-self-end mt-10 mb-2 bg-blue1 hover:bg-blue1">
													Randevu Al
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
				<Footer />
			</div>
			{showRegister ? (
				<RegisterModal
					setShowLogin={setShowLogin}
					setShowRegister={setShowRegister}
				/>
			) : null}

			{showLogin ? (
				<LoginModal
					setShowLogin={setShowLogin}
					setShowRegister={setShowRegister}
					setShowForgotPassword={setShowForgotPassword}
				/>
			) : null}

			{showForgotPassword ? (
				<ForgotPassword
					setShowLogin={setShowLogin}
					setShowForgotPassword={setShowForgotPassword}
				/>
			) : null}
		</div>
	);
};

export default Polyclinics;
