import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { modalToggle } from '../../../features/modalSlice';

const ThirdStepAddAppointment = ({ handleSubmit, handleSubmitBackward, personalInfo, selectedDoctor, setSelectedDoctor, doctorAppointmentStatus, date,
    clock }) => {
    const [datetime, setDatetime] = useState(date + 'T' + clock)
    const dispatch = useDispatch()
    console.log(datetime);
    console.log(personalInfo);
    const handleSubmitForm = (e) => {
        e.preventDefault()
        dispatch(modalToggle())
    }
    const hanleClick = () => {
        alert('Lütfen değişiklik için önceki forma geçiniz !')
    }
    return (
        <form className='w-full flex flex-col p-4'>
            <h3 className='mt-6'>Hasta Bilgileri</h3>
            <div className='grid grid-cols-4 gap-2'>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">ADI</span>
                    </label>
                    <input type="text" value={personalInfo.firstName} onClick={hanleClick} readOnly placeholder="Hastanın Adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">SOYADI</span>
                    </label>
                    <input type="text" value={personalInfo.lastName} onClick={hanleClick} readOnly placeholder="Hastanın Soyadı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">BABA ADI</span>
                    </label>
                    <input type="text" value={personalInfo.dadyName} onClick={hanleClick} readOnly placeholder="Hastanın baba adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">DOĞUM TARİHİ</span>
                    </label>
                    <input type="date" value={personalInfo.birthDay} onClick={hanleClick} placeholder="Hastanın Doğum Tarihi" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
            </div>
            <h3 className='mt-6'>Randevu Bilgileri</h3>
            <div className='grid grid-cols-3 gap-12'>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">POLİKLİNİK</span>
                    </label>
                    <input type="text" readOnly onClick={hanleClick} placeholder="Poliklinik Adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">DOKTOR</span>
                    </label>
                    <select className="select select-bordered select-sm focus:input-primary w-full max-w-xs" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                        {/* <option disabled selected>Doktor Seçiniz</option> */}
                        {doctorAppointmentStatus.map((item, index) => (
                            <option key={index} value={item.doctorName}>{item.doctorName}</option>
                        ))}
                    </select>
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">TARİH & SAAT</span>
                    </label>
                    <input
                        type="datetime-local"
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                        className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between mx-4 mt-4 p-2 rounded-b">
                <button
                    className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                    onClick={handleSubmitBackward}
                >
                    <AiOutlineLeft className='mr-4' />
                    Önceki Adım
                </button>
                <button
                    className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                    type="submit"
                    onClick={handleSubmitForm}
                >
                    Randevuyu Onayla
                </button>
            </div>
        </form >
    )
}

export default ThirdStepAddAppointment