import React from "react";
import DateRangePickerComp from "./DateRangePickerComp";

const DateRange = ({ doktorAppointment }) => {
	return (
		<div>
			<div className="flex justify-center my-8">
				{/* The button to open modal */}
				<label
					htmlFor="my-modal"
					className="btn btn-sm btn-outline btn-primary rounded-full place-self-end my-3 capitalize"
				>
					Tarih Seç
				</label>

				{/* Put this part before </body> tag */}
				<input type="checkbox" id="my-modal" className="modal-toggle" />
				<div className="modal">
					<div className="modal-box w-11/12 max-w-5xl">
						<div className="flex justify-center">
							<DateRangePickerComp />
						</div>
						<div className="modal-action">
							<label
								htmlFor="my-modal"
								className="btn btn-sm bg-blue1 hover:bg-blue2 "
							>
								Cancel
							</label>
							<label
								htmlFor="my-modal"
								className="btn btn-sm bg-blue1 hover:bg-blue2 "
							>
								Apply
							</label>
						</div>
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

export default DateRange;
