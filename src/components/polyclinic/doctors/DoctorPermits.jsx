import React, { useEffect, useRef, useState } from "react";
import DoctorPermitsTable from "./DoctorPermitsTable";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DoctorPermits = ({ doktorlar }) => {
	const [openTab, setOpenTab] = useState(0);
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
				className="flex flex-row"
				spaceBetween={25}
				slidesPerView={5}
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
				{doktorlar.map((doktor) => (
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
			<p className="my-7 text-blue1 text-2xl font-semibold">
				{doktorlar[openTab].name}
				<span className="text-black font-normal">
					{" "}
					isimli personelin izin bilgilerini görüntülüyorsunuz
				</span>
			</p>
			<DoctorPermitsTable DoctorPermits={doktorlar[openTab].izinler} />
		</div>
	);
};

export default DoctorPermits;
