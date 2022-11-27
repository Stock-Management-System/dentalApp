import React, { useState } from "react";
import DoctorInformation from "./DoctorInformation";
import { doktorlar } from "../../../helpers/data";

const DoctorPerformance = () => {
	const [openTab, setOpenTab] = useState(0);
	console.log(doktorlar);

	return (
		<div>
			{/* <-----Card Hekimler ----->👇🏻 */}
			<p className="pb-5">Performans görüntülemek için bir hekim seçin.</p>
			<div className="flex flex-row gap-5">
				{doktorlar.map((doktor, index) => (
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
								src={doktor.img}
								alt="Shoes"
								className="w-36 rounded-full object-cover"
							/>
						</figure>
						<div className="text-center py-3">
							<h2 className="text-center text-xl font-semibold">
								{doktor.name}
							</h2>
							<p
								className={` ${
									openTab === doktor.id
										? "text-white text-center"
										: "text-blue1 text-center"
								}`}
							>
								{doktor.ünvan}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* <-----Hekim Profil ----->👇🏻 */}
			<DoctorInformation doktorInfo={doktorlar[openTab]} />
		</div>
	);
};

export default DoctorPerformance;
