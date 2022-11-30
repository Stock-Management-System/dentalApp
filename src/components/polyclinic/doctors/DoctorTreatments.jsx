import React, { useState } from "react";

const DoctorTreatments = ({ doctorTreatment }) => {
	const [openTreatment, setOpenTreatment] = useState(1);

	return (
		<div>
			<div className="flex flex-row justify-between py-5">
				<h1 className="text-xl font-semibold mb-3">Uyguladığı Tedaviler</h1>
				<div className="flex flex-row gap-2 ">
					{/* <-----Butonlar ----->👇🏻 */}
					{doctorTreatment.map((tedavi, index) => {
						return (
							<button
								className={` ${
									openTreatment === index + 1
										? "btn btn-sm btn-primary rounded-full capitalize"
										: "btn btn-sm btn-outline btn-primary rounded-full capitalize"
								}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTreatment(index + 1);
								}}
							>
								{tedavi.müdahaleKategori}
							</button>
						);
					})}
				</div>
			</div>
			{/* <----- Doktor Müdahale Kartları ----->👇🏻 */}
			{doctorTreatment.map((tedavi, index, hepsi) => {
				return (
					<div
						className={
							openTreatment === index + 1
								? "grid grid-cols-8 gap-4 place-content-center py-8"
								: "hidden"
						}
					>
						{tedavi.müdahaleIstatistik.map((müdahale) => {
							return (
								<div className="grid place-content-center bg-container p-8 ">
									<div>
										<h6 className="text-xl font-semibold capitalize">
											{müdahale.müdahaleAdı}
										</h6>
										<p className="text-[10px] opacity-70 uppercase">
											{hepsi[index].müdahaleKategori}
										</p>
									</div>
									<h1 className="text-3xl font-bold text-blue2 text-center pt-6">
										{müdahale.müdahaleSayı}
									</h1>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default DoctorTreatments;
