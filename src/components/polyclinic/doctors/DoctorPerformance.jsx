import React, { useState } from "react";
import DoctorInformation from "./DoctorInformation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DoctorPerformance = ({ doktorlar }) => {
	const [openTab, setOpenTab] = useState(0);

	return (
		<div>
			{/* <-----Card Hekimler ----->👇🏻 */}
			<div>
				<p className="pb-5">Performans görüntülemek için bir hekim seçin.</p>
			</div>
			<Swiper
				className="flex flex-row gap-5"
				spaceBetween={25}
				slidesPerView={5}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{doktorlar.map((doktor, index) => (
					<SwiperSlide
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
								className="w-36 h-36 rounded-full object-contain"
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
					</SwiperSlide>
				))}
			</Swiper>
			{/* <-----Hekim Profil ----->👇🏻 */}
			<DoctorInformation doktorInfo={doktorlar[openTab]} />
		</div>
	);
};

export default DoctorPerformance;
