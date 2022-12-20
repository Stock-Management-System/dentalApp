import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender, SlClock } from "react-icons/sl";
import { AiOutlineCheck } from "react-icons/ai";

const DoctorsOur = ({ doktorlar }) => {
	return (
		<div>
			<Swiper
				className="flex flex-row gap-5"
				spaceBetween={25}
				slidesPerView={5}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{doktorlar.map((doktor, index) => (
					<SwiperSlide>
						<div className="card bg-container mb-4">
							<div className="relative flex flex-col justify-center items-center mt-4">
								<img
									src={doktor.img}
									alt="profile"
									className="rounded-full w-32 h-32 object-contain"
								/>
								<h2 className="text-center mt-4 font-bold">{doktor.name}</h2>
								<p className="text-blue2">{doktor.ünvan}</p>
								<BsThreeDotsVertical className="absolute right-0 top-2 w-10" />
							</div>
							<div className="card-body">
								<div className="flex justify-between mx-8 opacity-50">
									<SlCalender />
									<SlClock className="mr-8" />
								</div>
								<table className="table-zebra ml-2 mb-4">
									<tbody>
										<tr>
											<td>Pazartesi</td>
											<td className="text-center">09:00-16:00</td>
										</tr>
										<tr>
											<td>Salı</td>
											<td className="text-center">09:00-16:00</td>
										</tr>
										<tr>
											<td>Çarşamba</td>
											<td className="text-center">09:00-16:00</td>
										</tr>
										<tr>
											<td>Perşembe</td>
											<td className="text-center">09:00-16:00</td>
										</tr>
										<tr>
											<td>Cuma</td>
											<td className="text-center">09:00-16:00</td>
										</tr>
										<tr>
											<td>Cumartesi</td>
											<td className="text-center">-</td>
										</tr>
										<tr>
											<td>Pazar</td>
											<td className="text-center">-</td>
										</tr>
									</tbody>
								</table>
								<div className="flex justify-between font-semibold">
									<button className="btn btn-ghost bg-blue1 bg-opacity-10 text-blue1 capitalize hover:bg-blue1 hover:text-white">
										<AiOutlineCheck className="mr-2" /> Performans
									</button>
									<button className="btn btn-ghost bg-red bg-opacity-10 text-red capitalize hover:bg-red hover:text-white px-8">
										<span className="mr-2">X</span>İzinler
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default DoctorsOur;