import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

const polyclinicDocotrs = [
    {
        polyclinicId: 1,
        doctorId: 1,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Mehmet",
        doctorLastName: "Kara",
        doctorPhoto: "https://www.seekpng.com/png/full/855-8557328_headshot-of-dr-male-dentist-png.png",
    },
    {
        polyclinicId: 1,
        doctorId: 2,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Zeynep",
        doctorLastName: "Kara",
        doctorPhoto: "https://www.pngall.com/wp-content/uploads/8/Female-Dentist-PNG.png",
    },
    {
        polyclinicId: 1,
        doctorId: 3,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Ali",
        doctorLastName: "Can",
        doctorPhoto: "https://www.pngall.com/wp-content/uploads/8/Male-Dentist-PNG.png",
    },
    {
        polyclinicId: 1,
        doctorId: 4,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Mehmet",
        doctorLastName: "Güler",
        doctorPhoto: "https://www.statpearls.com/dist/images/DentistCe.png",
    },
    {
        polyclinicId: 1,
        doctorId: 5,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Cemşit",
        doctorLastName: "Cano",
        doctorPhoto: "https://thumbs.dreamstime.com/b/portrait-male-dentist-portrait-male-dentist-white-background-139676463.jpg",
    },
    {
        polyclinicId: 1,
        doctorId: 6,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Ayşe",
        doctorLastName: "Cik",
        doctorPhoto: "https://img.lovepik.com/free-png/20220125/lovepik-female-dentist-holding-dentures-explaining-dental-png-image_401694338_wh860.png",
    },
    {
        polyclinicId: 1,
        doctorId: 7,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Zeynep",
        doctorLastName: "Kara",
        doctorPhoto: "https://w7.pngwing.com/pngs/488/261/png-transparent-female-doctor-3d-illustration-physician-nursing-health-care-hospital-the-doctor-miscellaneous-image-file-formats-service-thumbnail.png",
    },
    {
        polyclinicId: 1,
        doctorId: 8,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Zeynep",
        doctorLastName: "Kara",
        doctorPhoto: "https://w7.pngwing.com/pngs/488/261/png-transparent-female-doctor-3d-illustration-physician-nursing-health-care-hospital-the-doctor-miscellaneous-image-file-formats-service-thumbnail.png",
    },
]

const DoctorsForRecord = ({ setDoctor, polyclinic }) => {
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

    return (
        <section className=''>
            <article className='flex justify-between px-16 w-11/12 mx-auto h-8'>
                <h1>Doktorlarımız</h1>
                <article className='flex gap-3'>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={prevRef}><HiOutlineArrowLeft className='' /></button>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={nextRef}><HiOutlineArrowRight className='' /></button>
                </article>
            </article>
            <div className="p-1 my-10 w-[87%] mx-auto">
                <Swiper
                    className="flex flex-row gap-5"
                    spaceBetween={25}
                    // slidesPerView="auto"
                    slidesPerView={5}
                    // onSlideChange={() => console.log("slide change")}
                    onSwiper={setSwiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
                    navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                // updateOnWindowResize
                // observer
                // observeParents
                >
                    {polyclinicDocotrs.filter((poli) => poli.polyclinicId === polyclinic.polyclinicId).map((doktor, index) => (
                        <SwiperSlide
                            className={` ${openTab === doktor.doctorId
                                ? "card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white"
                                : "card w-1/5 bg-white"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(doktor.doctorId);
                                setDoctor(doktor)
                            }}
                            key={index}
                        >
                            <figure className="pt-5">
                                <img
                                    src={doktor.doctorPhoto}
                                    alt={doktor.doctorTitr + doktor.doctorLastName}
                                    className="w-36 h-36 rounded-full object-contain"
                                />
                            </figure>
                            <div className="text-center py-3">
                                <h2 className="text-center text-xl font-semibold">
                                    {doktor.doctorFirstName + " " + doktor.doctorLastName}
                                </h2>
                                <p
                                    className={` ${openTab === doktor.doctorId
                                        ? "text-white text-center"
                                        : "text-blue1 text-center"
                                        }`}
                                >
                                    {doktor.doctorTitr}
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