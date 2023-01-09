import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { doktorlar } from "../../../helpers/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import 'swiper/css/effect-fade';

const DoctorsForRecord = () => {
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
        <section className=''>
            <article className='flex justify-between px-20'>
                <h1>Doktorlarımız</h1>
                <article className='flex gap-3'>
                    <button ref={prevRef}><AiOutlineLeft className='text-28 bg-white rounded-full' /></button>
                    <button ref={nextRef}><AiOutlineRight className='text-28 bg-white rounded-full' /></button>
                </article>
            </article>
            <div className="p-1 my-10">
                {/* <Slider ref={slider} {...settings}> */}


                <Swiper
                    className="flex flex-row gap-5"
                    spaceBetween={25}
                    // slidesPerView="auto"
                    slidesPerView={5}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={setSwiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
                    navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    updateOnWindowResize
                    observer
                    observeParents
                >
                    {doktorlar.map((doktor, index) => (
                        <SwiperSlide
                            className={` ${openTab === doktor.id
                                ? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
                                : "card w-1/5 bg-white"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(doktor.id);
                            }}
                        >
                            <figure className="pt-5">
                                <img
                                    src={doktor.img}
                                    alt={doktor.name}
                                    className="w-36 h-36 rounded-full object-contain"
                                />
                            </figure>
                            <div className="text-center py-3">
                                <h2 className="text-center text-xl font-semibold">
                                    {doktor.name}
                                </h2>
                                <p
                                    className={` ${openTab === doktor.id
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
            </div>
        </section>
    )
}

export default DoctorsForRecord