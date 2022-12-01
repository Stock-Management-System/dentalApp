import React, { useEffect, useState } from "react";
import quadrant1 from "../../../assets/quadrant1.png";
import quadrant2 from "../../../assets/quadrant2.png";
import quadrant3 from "../../../assets/quadrant3.png";
import doctorUser from "../../../assets/doctorUser.png";
import { useDropzone } from "react-dropzone";

const NewDoctorAddPage = () => {
	const [files, setFiles] = useState([]);
	const [imageTrue, setImageTrue] = useState(false);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const images = files.map((file) => (
		<img
			src={file.preview}
			key={file.name}
			alt="preview"
			className="object-cover"
		/>
	));

	useEffect(() => {
		if (images.length > 0) {
			setImageTrue(true);
		}
	}, [images]);

	return (
		<div className="py-3 px-5">
			{/* <----- KİŞİSEL BİLGİLER -----> */}
			<p className="text-xl font-semibold antialiased leading-loose">
				Kişisel Bilgi
			</p>
			<div className="mt-5">
				<div className="flex flex-row gap-3">
					<div
						{...getRootProps()}
						className="flex justify-center w-1/3 h-[340px] transition bg-container rounded-sm  cursor-pointer hover:border border-gray object-cover"
					>
						{imageTrue ? (
							<div className="object-contain overflow-hidden">{images}</div>
						) : (
							<>
								<input {...getInputProps()} />
								<figure className="relative max-w-sm">
									<img
										src={doctorUser}
										alt="users"
										className="object-cover opacity-25 mt-5"
									/>
									<p className="absolute bottom-36 text-center text-xl">
										Resmi buraya sürükleyin veya yüklemek için tıklayın.
									</p>
								</figure>
							</>
						)}
					</div>
					<div className="form-control w-1/3">
						<div className="form-control w-full">
							<label className="label-text mb-1">ADI *</label>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
						</div>
						<div className="form-control w-full mt-4">
							<label className="label-text mb-1">E-POSTA *</label>
							<input
								type="email"
								placeholder="****@*****.com"
								className="input input-bordered w-full "
							/>
						</div>
						<div className="form-control w-full mt-4">
							<label className="label-text mb-1">CİNSİYET</label>
							<select className="select select-bordered w-full">
								<option disabled selected>
									Bir cinsiyet seçim
								</option>
								<option>Bay</option>
								<option>Bayan</option>
							</select>
						</div>
						<div className="form-control w-full mt-4">
							<label className="label-text mb-1">ŞİFRE</label>
							<input
								type="password"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
						</div>
					</div>
					<div className="form-control w-1/3">
						<div className="form-control w-full">
							<label className="label-text mb-1">SOYADI *</label>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
						</div>
						<div className="form-control w-full mt-4">
							<label className="label-text mb-1">TELEFON *</label>
							<input
								type="text"
								className="input input-bordered w-full"
								placeholder="Type here"
							/>
						</div>
						<div className="form-control w-full mt-4">
							<label className="label-text mb-1">DOĞUM TARİHİ</label>
							<input
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
						</div>
						<div className="form-control w-full mt-4">
							<label className="label-text mb-1">ŞİFRE (TEKRAR)</label>
							<input
								type="password"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
						</div>
					</div>
				</div>
				<div className="form-control w-full mt-5">
					<label className="label-text mb-1">ADRES *</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
					/>
				</div>
				<div className="flex flex-row gap-3 mt-4">
					<div className="form-control w-1/3">
						<label className="label-text mb-1">ÜLKE</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-1/3">
						<label className="label-text mb-1">KENT</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-1/3">
						<label className="label-text mb-1">POSTA KODU</label>
						<input
							type="number"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
				</div>
				<button className="btn btn-active btn-sm rounded-full my-6 p-2 px-8 bg-blue1 hover:bg-blue1">
					DOKTOR EKLE
				</button>
			</div>
			{/* <----- MESLEKİ BİLGİLER -----> */}
			<div>
				<p className="text-xl font-semibold antialiased leading-loose">
					Mesleki Bilgiler
				</p>
				<div className="flex flex-row gap-3 mt-3">
					<div className="form-control w-2/4">
						<label className="label-text mb-1">UZMANLIK</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-1/4">
						<label className="label-text mb-1">DİPLOMA NO</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-1/4">
						<label className="label-text mb-1">İŞE BAŞLAMA TARİHİ</label>
						<input
							type="number"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
				</div>
				<div className="flex flex-row gap-3 mt-4">
					<div className="form-control w-1/2">
						<label className="label-text mb-1">TIP EĞİTİMİ</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-1/2">
						<label className="label-text mb-1">DÖNEM</label>
						<input
							type="number"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
				</div>
				<div className="form-control w-full mt-4">
					<label className="label-text mb-1">NOTLAR *</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
					/>
				</div>
				<button className="btn btn-active btn-sm rounded-full my-6 p-2 px-8 bg-blue1 hover:bg-blue1">
					KAYDET
				</button>
			</div>
			{/* <----- ÇALIŞMA GÜNLERİ -----> */}
			<div>
				<p className="text-xl font-semibold antialiased leading-loose">
					Çalışma Günleri
				</p>
				<div className="overflow-x-auto pr-5">
					<table className="table w-full">
						{/* <!-- head --> */}
						<thead className="text-center">
							<tr>
								<th className="bg-blue1 text-white"></th>
								<th className="bg-blue1 text-white">PAZARTESİ</th>
								<th className="bg-blue1 text-white">SALI</th>
								<th className="bg-blue1 text-white">ÇARŞAMBA</th>
								<th className="bg-blue1 text-white">PERŞEMBE</th>
								<th className="bg-blue1 text-white">CUMA</th>
								<th className="bg-blue1 text-white">CUMAERTESİ</th>
								<th className="bg-blue1 text-white">PAZAR</th>
							</tr>
						</thead>
						<tbody>
							{/* <!-- Sabah --> */}
							<tr>
								<th>
									<img src={quadrant1} alt="quadrant" />
								</th>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											09:00 - 12:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											09:00 - 12:00
										</div>
									</label>
								</td>
							</tr>
							{/* <!-- Öğle --> */}
							<tr>
								<th>
									<img src={quadrant2} alt="quadrant" />
								</th>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											13:00 - 16:30
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											13:00 - 16:30
										</div>
									</label>
								</td>
							</tr>
							{/* <!-- Akşam --> */}
							<tr>
								<th>
									<img src={quadrant3} alt="quadrant" />
								</th>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
								<td>
									<label className="swap text-sm">
										<input type="checkbox" />
										<div className="swap-on border rounded-full border-blue1 text-blue1 p-1 px-3">
											18:00 - 22:00
										</div>
										<div className="swap-off border rounded-full border-gray text-gray p-1 px-3">
											18:00 - 22:00
										</div>
									</label>
								</td>
							</tr>
						</tbody>
					</table>
					<button className="btn btn-active btn-sm rounded-full my-6 p-2 px-8 bg-blue1 hover:bg-blue1">
						KAYDET
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewDoctorAddPage;
