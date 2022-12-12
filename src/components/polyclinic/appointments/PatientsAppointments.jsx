import React from "react";

const PatientsAppointments = ({ doktorAppointment }) => {
	return (
		<div>
			<div className="grid grid-cols-1 place-items-center my-9">
				{/* TC numarası ile sorgulama 👇🏻 */}
				<form className="flex justify-between items-center w-[40rem]">
					<label className="label-text text-center">HASTA TC KİMLİK NO</label>
					<input
						type="text"
						placeholder="Hasta TC Kimlik No"
						className="input input-bordered w-full max-w-xs"
					/>
					<button
						type="submit"
						className="btn btn-sm btn-outline btn-primary rounded-full capitalize"
					>
						Randevu Sorgula
					</button>
				</form>
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
							<th></th>
							<th></th>
						</tr>
					</thead>
					{doktorAppointment.map((randevu) => (
						<tbody>
							{/* <!-- row 1 --> */}
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
						</tbody>
					))}
				</table>
			</div>
		</div>
	);
};

export default PatientsAppointments;
