import React from 'react';
import { ilData } from "../../../helpers/ilData";
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl'


const PolyclinicForRecord = ({ place, setPlace }) => {
    const oylesine = [1, 2, 3, 4]
    const handleChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value })
    }
    return (
        <section>
            <article className='flex justify-between'>
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
                    <button><SlArrowLeftCircle className='text-28 bg-white rounded-full' /></button><button><SlArrowRightCircle className='text-28 bg-white rounded-full' /></button>
                </article>
            </article>
            <div className="carousel gap-4 p-5">
                {
                    oylesine.map((item, index) => (
                        <div className="carousel-item" key={index}>
                            <div className="card card-compact w-96 bg-base-100 p-1">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className='border-b opacity-80 w-[96%] my-1 mx-auto'></div>
                                <div className="card-body">
                                    <h2 className="card-title text-blue1 font-normal">İNCİ DİŞ POLİKLİNİĞİ</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default PolyclinicForRecord
