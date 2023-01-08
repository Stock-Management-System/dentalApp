import React from 'react';
import { ilData } from "../../../helpers/ilData";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useRef } from 'react';


const PolyclinicForRecord = ({ place, setPlace }) => {
    const oylesine = [1, 2, 3, 4, 5, 6, 7, 8];
    const handleChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value })
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '60px',
        // draggable: true,
        // focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = useRef(null)
    return (
        <section>
            <article className='flex justify-between px-20'>
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
                    <button onClick={() => slider?.current?.slickPrev()}><AiOutlineLeft className='text-28 bg-white rounded-full' /></button>
                    <button onClick={() => slider?.current?.slickNext()}><AiOutlineRight className='text-28 bg-white rounded-full' /></button>
                </article>
            </article>
            <div className="p-1 my-10">
                <Slider ref={slider} {...settings}>
                    {
                        oylesine.map((item, index) => (
                            <div key={index}>
                                <div className="card card-compact w-96 bg-base-100 p-1" >
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className='border-b opacity-80 w-[96%] my-1 mx-auto'></div>
                                    <div className="card-body">
                                        <h2 className="card-title text-blue1 font-normal">İNCİ DİŞ POLİKLİNİĞİ</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default PolyclinicForRecord
