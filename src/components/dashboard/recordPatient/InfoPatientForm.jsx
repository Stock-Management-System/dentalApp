import React from 'react';
import { ilData } from '../../../helpers/ilData';

const InfoPatientForm = ({ queryTC, setPersonalInfo, personalInfo }) => {

    const handleChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPersonalInfo({ ...personalInfo, TC: queryTC })

    }
    return (
        <section className='w-10/12 mx-auto px-1 py-5 mt-8'>
            <article>
                <h3>Girilen TC kimlik numarasına ait bir kayıt bulunamadı. Lütfen Randevu almak için aşağıdaki formu doldurun.</h3>
                <h1 className='text-22 mt-8 mb-4'>Hasta Bilgileri</h1>
            </article>
            <form onSubmit={handleSubmit}>
                <div className='grid xs:grid-cols-2 md:grid-cols-4 xs:gap-5 md:gap-10'>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">ADI<sup>*</sup></span>
                        </label>
                        <input
                            type="text"
                            name='firstName'
                            value={personalInfo?.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Adı" className="input input-bordered focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">SOYADI<sup>*</sup></span>
                        </label>
                        <input
                            type="text"
                            name='lastName'
                            value={personalInfo?.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Soyadı" className="input input-bordered focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">BABA ADI<sup>*</sup></span>
                        </label>
                        <input
                            type="text"
                            name='dadyName'
                            value={personalInfo?.dadyName}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın baba adı" className="input input-bordered focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">DOĞUM TARİHİ<sup>*</sup></span>
                        </label>
                        <input
                            type="date"
                            name='birthDay'
                            value={personalInfo?.birthDay}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Doğum Tarihi" className="input input-bordered focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">TELEFON<sup>*</sup></span>
                        </label>
                        <input
                            type="text"
                            name='phone'
                            value={personalInfo?.phone}
                            onChange={handleChange}
                            required
                            placeholder="Hastanın Telefon No" className="input input-bordered focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">EMAIL<sup>*</sup></span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            value={personalInfo?.email}
                            onChange={handleChange}
                            required
                            placeholder="abcd@abcd.com" className="input input-bordered focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">İL<sup>*</sup></span>
                        </label>
                        <select
                            name='city'
                            value={personalInfo?.city}
                            onChange={handleChange}
                            required
                            className="select select-bordered text-14 font-normal focus:border-blue1 w-full max-w-xs"
                        >
                            {ilData.map((il, i) => <option value={il["text"]} key={i}>{il["text"]}</option>)}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">İLÇE<sup>*</sup></span>
                        </label>
                        <select
                            name='town'
                            value={personalInfo?.town}
                            onChange={handleChange}
                            required
                            className=" select select-bordered text-14 font-normal focus:border-blue1 w-full max-w-xs"
                        >
                            {ilData.filter((data) => (data["text"] === personalInfo?.city)).map((ilce) => (ilce["districts"].map((e, i) => <option value={e["text"]} key={i}>{e["text"]}</option>)))
                            }
                        </select>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end mx-4 mt-4 p-2 rounded-b">
                    <button
                        className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                        type="submit"
                    // onClick={handleSubmit}
                    >
                        Bilgileri Kaydet
                    </button>
                </div>
            </form>
        </section>
    )
}

export default InfoPatientForm