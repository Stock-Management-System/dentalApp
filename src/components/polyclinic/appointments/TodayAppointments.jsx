import React from "react";

const TodayAppointments = ({ doktorAppointment }) => {
	return (
		//! appointments table 👇🏻
		<div className="overflow-x-auto ">
			<table className="table w-full ">
				{/* <!-- head --> */}
				<thead className="text-gray">
					<tr>
						<th className="pl-20">DOKTOR</th>
						<th>HASTA</th>
						<th>CİNSİYET</th>
						<th>SAAT</th>
						<th>AÇIKLAMA</th>
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
							<td>{randevu.randevuSaati}</td>
							<td>{randevu.descriptions}</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
};

export default TodayAppointments;
