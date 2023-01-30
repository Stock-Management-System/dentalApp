import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai'
import { ilData } from '../../../helpers/ilData';

const FirstStepAddAppointment = ({ handleSubmit, personalInfo, setPersonalInfo }) => {
    const [querytc, setQuerytc] = useState("")

    const handleClickTc = () => {
        // const patient = getTc(querytc)

    }
    const handleChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
    }
    console.log(personalInfo);
    return (
        <div className='relative p-1'>
            <h1 className='absolute top-3 left-10 text-18 md:hidden'>Hasta Bilgileri</h1>
            <div className="flex xs:flex-col md:flex-row md:justify-end md:items-center xs:gap-2 px-4 py-2 mt-12 mx-5 overflow-hidden rounded-md">
                {/* <div className="flex xs:flex-col md:flex-row xs:justify-start xs:items-start xs:gap-2 justify-center items-center gap-4 w-2/3"> */}
                <label className="label-text">HASTA TC KİMLİK NO</label>
                <input
                    type="text"
                    name='tc'
                    value={querytc}
                    maxLength={"11"}
                    onChange={(e) => setQuerytc(e.target.value)}
                    placeholder="Hasta TC Kimlik No" className="input input-bordered input-sm md:w-full max-w-xs"
                />
                <button
                    onClick={handleClickTc}
                    className="xs:block md:inline btn btn-sm btn-outline btn-primary rounded-full capitalize"
                >
                    Sorgula
                </button>
            </div>
            {/* </div> */}
            <form className='w-full p-2'>
                <div className='grid xs:grid-cols-2 md:grid-cols-4 gap-2'>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">ADI</span>
                        </label>
                        <input
                            type="text"
                            name='firstName'
                            value={personalInfo.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">SOYADI</span>
                        </label>
                        <input
                            type="text"
                            name='lastName'
                            value={personalInfo.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Soyadı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">BABA ADI</span>
                        </label>
                        <input
                            type="text"
                            name='dadyName'
                            value={personalInfo.dadyName}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın baba adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">DOĞUM TARİHİ</span>
                        </label>
                        <input
                            type="date"
                            name='birthDay'
                            value={personalInfo.birthDay}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Doğum Tarihi" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">TELEFON</span>
                        </label>
                        <input
                            type="text"
                            name='phone'
                            value={personalInfo.phone}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Telefon No" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">EMAIL</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            value={personalInfo.email}
                            onChange={handleChange}
                            required
                            placeholder="abcd@abcd.com" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">İL</span>
                        </label>
                        <select
                            name='city'
                            value={personalInfo.city}
                            onChange={handleChange}
                            required
                            className="select select-bordered select-sm text-14 font-normal focus:border-blue1 w-full"
                        >
                            {ilData.map((il) => <option value={il["text"]}>{il["text"]}</option>)}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">İLÇE</span>
                        </label>
                        <select
                            name='town'
                            value={personalInfo.town}
                            onChange={handleChange}
                            required
                            className=" select select-bordered select-sm text-14 font-normal focus:border-blue1 w-full"
                        >
                            {ilData.filter((data) => (data["text"] === personalInfo.city)).map((ilce) => (ilce["districts"].map((e) => <option value={e["text"]}>{e["text"]}</option>)))
                            }
                        </select>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end mx-4 mt-4 p-2 rounded-b">
                    <button
                        className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sonraki Adım
                        <AiOutlineRight className='ml-4' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FirstStepAddAppointment