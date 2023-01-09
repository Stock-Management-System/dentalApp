import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ilData } from "../../../helpers/ilData";
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import InciDıs from '../../../assets/InciDis.png';


const PolyclinicForRecord = ({ place, setPlace }) => {
    const [openTab, setOpenTab] = useState(0);
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();
    const oylesine = [1, 2, 3, 4, 5, 6, 7, 8];
    useEffect(() => {
        if (swiper) {
            console.log("Swiper instance:", swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);
    const handleChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value })
    };

    return (
        <section className=''>
            <article className='flex justify-between px-16 w-11/12 mx-auto'>
                <h1>Poliklinik</h1>
                <article className='flex gap-3'>
                    <select
                        name="city"
                        id="city"
                        className=" select select-sm w-52 transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                        value={place.city}
                        onChange={handleChange}
                    >
                        <option value="">İl Seçiniz</option>
                        {ilData.map((il) => <option value={il["text"]}>{il["text"]}</option>)}
                    </select>
                    <select
                        name="town"
                        id="town"
                        className="select select-sm w-52 transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                        value={place.town}
                        onChange={handleChange}
                    >
                        <option value="">İlçe Seçiniz</option>
                        {ilData.filter((data) => (data["text"] === place.city)).map((ilce) => (ilce["districts"].map((e) => <option value={e["text"]}>{e["text"]}</option>)))
                        }
                    </select>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={prevRef}><HiOutlineArrowLeft className='' /></button>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={nextRef}><HiOutlineArrowRight className='' /></button>
                </article>
            </article>
            <div className="p-1 my-10 w-[87%] mx-auto">
                <Swiper
                    className=""
                    spaceBetween={25}
                    // slidesPerView="auto"
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={setSwiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
                    navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current,
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                // updateOnWindowResize
                // observer
                // observeParents
                >
                    {
                        oylesine.map((item, index) => (
                            <SwiperSlide
                                className={` ${openTab === item
                                    ? "border-2 rounded-2xl border-blue1 py-2"
                                    : "bg-transparent"
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(item);
                                }}
                                key={index}
                            >
                                <div className="card card-compact bg-base-100 mx-3" >
                                    <figure><img src={InciDıs} alt="InciDıs" /></figure>
                                    <div className='border-b opacity-80 w-[96%] my-1 mx-auto'></div>
                                    <div className="card-body">
                                        <h2 className="card-title text-blue1 font-normal">İNCİ DİŞ POLİKLİNİĞİ</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default PolyclinicForRecord
