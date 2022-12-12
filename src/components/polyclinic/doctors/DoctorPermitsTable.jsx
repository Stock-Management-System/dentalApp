import React from "react";

const DoctorPermitsTable = ({ DoctorPermits }) => {
	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="border">Takvim</div>
			<div className="col-span-2 overflow-x-auto mx-3">
				<p className="text-xl my-6">Tüm İzinler</p>
				<table className="table w-full font-semibold">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th className="bg-blue1 text-white"></th>
							<th className="bg-blue1 text-white">İZİN BAŞLANGIÇ</th>
							<th className="bg-blue1 text-white">İZİN BİTİŞ</th>
							<th className="bg-blue1 text-white">İZİNLİ GÜN</th>
							<th className="bg-blue1 text-white">İZİN TÜRÜ</th>
						</tr>
					</thead>
					{DoctorPermits.map((permit) => (
						<tbody>
							{/* <!-- row 1 --> */}
							<tr>
								<td className="font-bold">{permit.id}.</td>
								<td>{permit.başlangıç}</td>
								<td>{permit.bitiş}</td>
								<td>{permit.gün}</td>
								<td>{permit.türü}</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</div>
	);
};

export default DoctorPermitsTable;
