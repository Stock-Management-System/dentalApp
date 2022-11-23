import React, { useState } from "react";
import quadrant1 from "../../../assets/quadrant1.png";
import quadrant2 from "../../../assets/quadrant2.png";
import quadrant3 from "../../../assets/quadrant3.png";
import doctorUser from "../../../assets/doctorUser.png";
import { useDropzone } from "react-dropzone";

const NewDoctorAddPage = () => {
	const [files, setFiles] = useState([]);

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
		<div key={file.name}>
			<div>
				<img src={file.preview} alt="preview" />
			</div>
		</div>
	));

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
						className="flex justify-center w-1/3 transition bg-container rounded-sm  cursor-pointer hover:border border-gray "
					>
						<input {...getInputProps()} />
						<figure className="relative max-w-sm">
							<img src={doctorUser} alt="users" className="object-cover" />
							<p className="absolute bottom-36 text-center">
								Resmi buraya bırakın veya yüklemek için tıklayın.
							</p>
						</figure>

						<div className="h-full object-cover">{images}</div>
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
						<thead className="bg-blue1 text-center">
							<tr>
								<th></th>
								<th>PAZARTESİ</th>
								<th>SALI</th>
								<th>ÇARŞAMBA</th>
								<th>PERŞEMBE</th>
								<th>CUMA</th>
								<th>CUMAERTESİ</th>
								<th>PAZAR</th>
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
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
							{/* <!-- row 2 --> */}
							<tr>
								<th>
									<img src={quadrant2} alt="quadrant" />
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
							{/* <!-- row 3 --> */}
							<tr>
								<th>
									<img src={quadrant3} alt="quadrant" />
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
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default NewDoctorAddPage;
