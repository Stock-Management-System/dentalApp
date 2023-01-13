import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ilData } from "../../../helpers/ilData";
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import InciDıs from '../../../assets/InciDis.png';

const polyclinic = [
    {
        polyclinicId: 1,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Ataşehir",
    },
    {
        polyclinicId: 2,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Beşiktaş",
    },
    {
        polyclinicId: 3,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Avcılar",
    },
    {
        polyclinicId: 4,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Kartal",
    },
    {
        polyclinicId: 5,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Pendik",
    },
    {
        polyclinicId: 6,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Sarıyer",
    },
    {
        polyclinicId: 7,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Kağıthane",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Şişli",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "Ankara",
        polyclinicTown: "Keçiören",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "Ankara",
        polyclinicTown: "Çankaya",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "Ankara",
        polyclinicTown: "Sincan",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'Dental Klinik',
        polyclinicPhoto: "https://st4.depositphotos.com/17134304/25574/v/950/depositphotos_255748988-stock-illustration-dental-clinic-color-vector-web.jpg",
        polyclinicCity: "Ankara",
        polyclinicTown: "Yenimahalle",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'Dentist Diş Polikliniği',
        polyclinicPhoto: "https://st4.depositphotos.com/6464944/24998/v/600/depositphotos_249985444-stock-illustration-dentist-character-clean-big-white.jpg",
        polyclinicCity: "Ankara",
        polyclinicTown: "Bala",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "Ankara",
        polyclinicTown: "Etimeskut",
    },
    {
        polyclinicId: 8,
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "Ankara",
        polyclinicTown: "Mamak",
    },
]



// useEffect(() => {
// polyclinicQuery()
// doctorsQuery()
// dostorsDates()
// doctorsHours()
// }, [])

const PolyclinicForRecord = ({ place, setPlace }) => {
    const [openTab, setOpenTab] = useState(0);
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            // console.log("Swiper instance:", swiper);
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
                        {ilData.map((il, i) => <option value={il["text"]} key={i}>{il["text"]}</option>)}
                    </select>
                    <select
                        name="town"
                        id="town"
                        className="select select-sm w-52 transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                        value={place.town}
                        onChange={handleChange}
                    >
                        <option value="">İlçe Seçiniz</option>
                        {ilData.filter((data) => (data["text"] === place.city)).map((ilce) => (ilce["districts"].map((e, i) => <option value={e["text"]} key={i}>{e["text"]}</option>)))
                        }
                    </select>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={prevRef}><HiOutlineArrowLeft /></button>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={nextRef}><HiOutlineArrowRight /></button>
                </article>
            </article>
            <div className="p-1 my-10 w-[87%] mx-auto">
                <Swiper
                    className=""
                    spaceBetween={25}
                    // slidesPerView="auto"
                    slidesPerView={4}
                    // onSlideChange={() => console.log("slide change")}
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
                        polyclinic.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={` ${openTab === index
                                    ? "border-2 rounded-2xl border-blue1 py-2"
                                    : "bg-transparent"
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(index);
                                }}
                            >
                                <div className="card card-compact bg-base-100 mx-3" >
                                    <figure><img src={item.polyclinicPhoto} alt="InciDıs" /></figure>
                                    <div className='border-b opacity-80 w-[96%] my-1 mx-auto'></div>
                                    <div className="card-body">
                                        <h2 className="card-title text-blue1 font-normal">{item.polyclinicName}</h2>
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
