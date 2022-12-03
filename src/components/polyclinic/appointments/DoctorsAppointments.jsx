import React, { useState } from "react";

const DoctorsAppointments = ({ doktorAppointment }) => {
	const [openTab, setOpenTab] = useState(0);

	return (
		<div>
			{/* Diploma numarası ile sorgulama 👇🏻 */}
			<form>
				<input
					type="text"
					placeholder="Diploma no giriniz"
					className="input input-bordered input-sm w-full max-w-xs mr-7"
				/>
				<button
					type="submit"
					className="btn btn-sm btn-outline btn-primary rounded-full capitalize"
				>
					Doktor Ara
				</button>
			</form>
			<div className="flex flex-row gap-5 my-7">
				{doktorAppointment.map((doktor) => (
					<div
						className={` ${
							openTab === doktor.id
								? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
								: "card w-1/5 bg-container"
						}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(doktor.id);
						}}
					>
						<figure className="pt-5">
							<img
								src={doktor.doktorİmg}
								alt="Shoes"
								className="w-36 h-36 rounded-full object-contain"
							/>
						</figure>
						<div className="text-center py-3">
							<h2 className="text-center text-xl font-semibold">
								{doktor.doktorAdı}
							</h2>
							<p
								className={` ${
									openTab === doktor.id
										? "text-white text-center"
										: "text-blue1 text-center"
								}`}
							>
								{doktor.doktorUnvan}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* Hasta tablosu 👇🏻 */}
			<div className="overflow-x-auto ">
				<table className="table w-full ">
					<thead className="text-gray">
						<tr>
							<th className="pl-20">DOKTOR</th>
							<th>HASTA</th>
							<th>CİNSİYET</th>
							<th>TARİH</th>
							<th>SAAT</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{doktorAppointment[openTab].randevular.map((randevu) => (
							<tr>
								<td>
									<div className="flex items-center space-x-3 gap-3">
										<div className="avatar">
											<div className="rounded-full w-14">
												<img
													src={randevu.doktorİmg}
													alt="Doktor Avatar"
													className="object-top"
												/>
											</div>
										</div>
										<div className="font-bold">{randevu.doktorAdı}</div>
									</div>
								</td>
								<td>{randevu.hastaAdı}</td>
								<td>{randevu.gender}</td>
								<td>{randevu.randevuTarihi}</td>
								<td>{randevu.randevuSaati}</td>
								<td></td>
								<td></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DoctorsAppointments;
