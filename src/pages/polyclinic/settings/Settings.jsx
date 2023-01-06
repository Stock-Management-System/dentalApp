import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/polyclinic/layout/Layout";
import poliklinikpp from "../../../assets/Poliklinikpp.png";
import { TfiPencil } from "react-icons/tfi";
import { ilData } from "../../../helpers/ilData";

const PolyclinicProfil = {
	klinikAdi: "İnci Diş Polikliniği",
	adres1: "Cumhuriyet Mah. Atatürk Cad.",
	adres2: "123. Sokak No:45",
	il: ilData[52]["text"],
	ilce: ilData[52]["districts"][13]["text"],
	tel1: "0552 475 89 76",
	tel2: "0554 879 85 37",
	tel3: "0551 245 79 68",
	email: "incidis@inci.com",
	vergiNo: "1212848495",
};
console.log(PolyclinicProfil.il);
const Settings = () => {
	const open = useSelector((state) => state.open.value);

	const [registerInfo, setRegisterInfo] = useState({
		il: ilData[0]["text"],
		ilce: ilData[0]["districts"][0]["text"],
	});

	const handleChange = (e) => {
		setRegisterInfo({ ...registerInfo, [e.target.id]: e.target.value });
	};

	return (
		<>
			<Layout />
			<div
				className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${
					open ? "w-[calc(100%-250px)]" : "w-[calc(100%-100px)]"
				} transition-w ease-in-out duration-500`}
			>
				<div className=" bg-white flex justify-center items-center ">
					<div className="grid grid-cols-1 w-1/2  my-20">
						<h1 className="text-3xl mb-4">Ayarlar</h1>
						<div className="h-1/5 w-full my-4 relative">
							<div className="border-2 border-gray border-opacity-30">
								<figure>
									<img
										src={poliklinikpp}
										alt="poliklinik profil"
										className="object-cover"
									/>
								</figure>
							</div>
							<div className="avatar placeholder absolute top-4 right-4 ">
								<div className="border-4 border-gray rounded-full w-12 hover:border-blue1 text-2xl text-gray  hover:text-blue1">
									<TfiPencil />
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1">
							<div className="form-control w-full">
								<label className="label-text mb-3">POLİKLİNİK ADI</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full mb-5"
									value={PolyclinicProfil.klinikAdi}
								/>
							</div>
							<div className="flex flex-row gap-5">
								<div className="form-control w-1/2">
									<div className="form-control w-full mb-5">
										<label className="label-text mb-3">ADRES</label>
										<input
											type="text"
											placeholder="Type here"
											className="input input-bordered w-full mb-2"
											value={PolyclinicProfil.adres1}
										/>
										<input
											type="text"
											placeholder="Type here"
											className="input input-bordered w-full mb-2"
											value={PolyclinicProfil.adres2}
										/>
										<div className="grid grid-cols-2 gap-3 w-full">
											<select
												name="il"
												id="il"
												className="select select-bordered"
												onChange={handleChange}
											>
												<option>{PolyclinicProfil.il}</option>
												{ilData.map((il) => (
													<option value={il["text"]}>{il["text"]}</option>
												))}
											</select>
											<select
												name="ilce"
												id="ilce"
												className="select select-bordered"
												onChange={handleChange}
											>
												<option>{PolyclinicProfil.ilce}</option>
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
									<div className="form-control w-full ">
										<label className="label-text mb-3">EMAİL</label>
										<input
											type="email"
											placeholder="****@*****.com"
											className="input input-bordered w-full "
											value={PolyclinicProfil.email}
										/>
									</div>
								</div>
								<div className="form-control w-1/2">
									<div className="form-control w-full mb-5">
										<label className="label-text mb-3">TELEFONLAR</label>
										<input
											type="text"
											className="input input-bordered w-full mb-2"
											placeholder="Type here"
											value={PolyclinicProfil.tel1}
										/>
										<input
											type="text"
											className="input input-bordered w-full mb-2"
											placeholder="Type here"
											value={PolyclinicProfil.tel2}
										/>
										<input
											type="text"
											className="input input-bordered w-full"
											placeholder="Type here"
											value={PolyclinicProfil.tel3}
										/>
									</div>
									<div className="form-control w-full">
										<label className="label-text mb-3">VERGİ NO</label>
										<input
											type="text"
											className="input input-bordered w-full"
											placeholder="Type here"
											value={PolyclinicProfil.vergiNo}
										/>
									</div>
								</div>
							</div>
							<button className="btn btn-active btn-sm rounded-full my-6 p-2 px-8 place-self-end bg-blue1 hover:bg-blue1">
								KAYDET
							</button>
						</div>
						<div className="grid grid-cols-1">
							<h1 className="text-2xl mb-4">Şifre Yenile</h1>
							<div className="grid grid-cols-3 gap-3">
								<div className="form-control w-full mt-4">
									<label className="label-text mb-1">MEVCUT ŞİFRE</label>
									<input
										type="password"
										placeholder="Type here"
										className="input input-bordered w-full"
									/>
								</div>
								<div className="form-control w-full mt-4">
									<label className="label-text mb-1">YENİ ŞİFRE</label>
									<input
										type="password"
										placeholder="Type here"
										className="input input-bordered w-full"
									/>
								</div>
								<div className="form-control w-full mt-4">
									<label className="label-text mb-1">YENİ ŞİFRE (TEKRAR)</label>
									<input
										type="password"
										placeholder="Type here"
										className="input input-bordered w-full"
									/>
								</div>
							</div>
							<button className="btn btn-active btn-sm rounded-full my-6 p-2 px-8 place-self-end bg-blue1 hover:bg-blue1">
								KAYDET
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
