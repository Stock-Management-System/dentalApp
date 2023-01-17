import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender, SlClock } from "react-icons/sl";
import {
	AiOutlineCheck,
	AiOutlineClose,
	AiOutlineLeft,
	AiOutlineRight,
} from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DoctorsOur = ({ doktorlar }) => {
	const widthScreen = window.innerWidth;
	const [swiper, setSwiper] = useState();
	const prevRef = useRef();
	const nextRef = useRef();
	useEffect(() => {
		if (swiper) {
			console.log("Swiper instance:", swiper);
			swiper.params.navigation.prevEl = prevRef.current;
			swiper.params.navigation.nextEl = nextRef.current;
			swiper.navigation.init();
			swiper.navigation.update();
		}
	}, [swiper]);
	return (
		<div>
			<div className="flex justify-end mb-4 px-2">
				<article className="flex gap-3">
					<button ref={prevRef}>
						<AiOutlineLeft className="text-28 bg-white rounded-full" />
					</button>
					<button ref={nextRef}>
						<AiOutlineRight className="text-28 bg-white rounded-full" />
					</button>
				</article>
			</div>
			<Swiper
				className="grid grid-cols-5 gap-5"
				spaceBetween={25}
				slidesPerView={
					widthScreen < 768
						? 1
						: widthScreen < 1050
						? 2
						: widthScreen < 1400
						? 3
						: widthScreen < 1800
						? 4
						: 5
				}
				onSlideChange={() => console.log("slide change")}
				onSwiper={setSwiper}
				modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
				navigation={{
					prevEl: prevRef?.current,
					nextEl: nextRef?.current,
				}}
				updateOnWindowResize
				observer
				observeParents
			>
				{doktorlar.map((doktor, index) => (
					<SwiperSlide>
						<div className="card bg-container mb-4 ">
							<div className="relative flex flex-col justify-center items-center mt-4 md:">
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
								<div className="grid grid-cols-2 gap-3">
									<button className="btn btn-ghost bg-blue1 bg-opacity-10 text-blue1 capitalize hover:bg-blue1 hover:text-white">
										<AiOutlineCheck className="mr-2" /> Performans
									</button>
									<button className="btn btn-ghost bg-red bg-opacity-10 text-red capitalize hover:bg-red hover:text-white ">
										<AiOutlineClose className="mr-2" /> İzinler
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
