import React, { useState } from 'react';
import { ilData } from '../../../helpers/ilData';

const InfoOfPatient = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        dadyName: "",
        birthDay: "",
        phone: "",
        email: "",
        city: ilData[0]["text"],
        town: ilData[0]["districts"][0]["text"]
    });
    const handleChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // setPersonalInfo({
        //     firstName: "",
        //     lastName: "",
        //     dadyName: "",
        //     birthDay: "",
        //     phone: "",
        //     email: "",
        //     city: ilData[0]["text"],
        //     town: ilData[0]["districts"][0]["text"]
        // })
    }
    return (
        <section className='w-10/12 mx-auto px-1 py-5'>
            <h1 className='text-22 my-8'>Hasta Bilgileri</h1>
            <article className='grid xs:grid-rows-3 md:grid-cols-3 gap-5'>
                <div>
                    <p className='label-text'>Ad</p>
                    <p className='input input-accent flex items-center'>Yunus</p>
                </div>
                <div>
                    <p className='label-text'>Soyad</p>
                    <p className='input input-accent flex items-center'>Alpaslan</p>
                </div>
                <div>
                    <p className='label-text'>Telefon</p>
                    <p className='input input-accent flex items-center'>0525 999 88 77</p>
                </div>
            </article>
        </section>
    )
}

export default InfoOfPatient