import React from "react";

const DoctorsAppointments = () => {
	return (
		<div>
			<div className="grid grid-cols-2 place-content-evenly my-9">
				<div className="grid grid-cols-1 place-items-center my-9">
					<div className="form-control w-full max-w-xs">
						<label className="label-text my-2">Hekim Seçerek Sorgula</label>
						<select className="select select-bordered">
							<option disabled selected>
								Hekim Seç
							</option>
							<option>Egemen Yılmaz</option>
							<option>Zeynep Kara</option>
							<option>Serap Kiraz</option>
						</select>
						<button className="btn btn-sm btn-outline btn-primary rounded-full place-self-end my-3 capitalize">
							Randevu Sorgula
						</button>
					</div>
				</div>

				<div className="grid place-items-center my-9">
					{/* Diploma numarası ile sorgulama 👇🏻 */}
					<div className="form-control w-full max-w-xs ">
						<label className="label-text my-2">Diploma No ile Sorgula</label>
						<input
							type="text"
							placeholder="Diploma No ile Sorgula"
							className="input input-bordered w-full max-w-xs"
						/>
						<button className="btn btn-sm btn-outline btn-primary rounded-full place-self-end my-3 capitalize">
							Randevu Sorgula
						</button>
					</div>
				</div>
			</div>

			{/* patients appointments table 👇🏻 */}
			<div className="overflow-x-auto ">
				<table className="table w-full ">
					{/* <!-- head --> */}
					<thead className="text-gray">
						<tr>
							<th className="pl-20">DOKTOR</th>
							<th>HASTA</th>
							<th>CİNSİYET</th>
							<th>TARİH</th>
							<th>SAAT</th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- row 1 --> */}
						<tr>
							<td>
								<div className="flex items-center space-x-3 gap-3">
									<div className="avatar">
										<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
											<img
												src="https://placeimg.com/50/50/people"
												alt="Doktor Avatar"
											/>
										</div>
									</div>
									<div className="font-bold">Egemen Yılmaz</div>
								</div>
							</td>
							<td>Barış Korkmaz</td>
							<td>Bay</td>
							<td>23.09.2022</td>
							<td>15:00</td>
						</tr>
						{/* <!--örnek silinecek --> */}
						<tr>
							<td>
								<div className="flex items-center space-x-3 gap-3">
									<div className="avatar">
										<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
											<img
												src="https://placeimg.com/70/70/people"
												alt="Doktor Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold">Egemen Yılmaz</div>
									</div>
								</div>
							</td>
							<td>Melike Çetinkaya</td>
							<td>Bayan</td>
							<td>10.09.2022</td>
							<td>11:00</td>
						</tr>
						{/* <!-- örnek silinecek --> */}
						<tr>
							<td>
								<div className="flex items-center space-x-3 gap-3">
									<div className="avatar">
										<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
											<img
												src="https://placeimg.com/90/90/people"
												alt="Doktor Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold">Zeynep Kaya</div>
									</div>
								</div>
							</td>
							<td>Yunus Alpaslan</td>
							<td>Bay</td>
							<td>30.08.2022</td>
							<td>09:00</td>
						</tr>
						{/* <!-- örnek silinecek --> */}
						<tr>
							<td>
								<div className="flex items-center space-x-3 gap-3">
									<div className="avatar">
										<div className="bg-neutral-focus text-neutral-content rounded-full w-12">
											<img
												src="https://placeimg.com/60/60/people"
												alt="Doktor Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold">Seray Kiraz</div>
									</div>
								</div>
							</td>
							<td>Fatma Kaya</td>
							<td>Bayan</td>
							<td>23.08.2022</td>
							<td>10:30</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DoctorsAppointments;
