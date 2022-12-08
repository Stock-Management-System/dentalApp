import React from 'react';
import { AiOutlineFileAdd, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ThirdStepAddAppointment = ({ handleSubmit, handleSubmitBackward }) => {
    const handleSubmitForm = (e) => {
        e.preventDefault()
    }
    return (
        <form className='w-full flex flex-col p-4'>
            <h3 className='mt-6'>Hasta Bilgileri</h3>
            <div className='grid grid-cols-4 gap-2'>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">ADI</span>
                    </label>
                    <input type="text" readOnly placeholder="Hastanın Adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">SOYADI</span>
                    </label>
                    <input type="text" readOnly placeholder="Hastanın Soyadı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">BABA ADI</span>
                    </label>
                    <input type="text" readOnly placeholder="Hastanın baba adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">DOĞUM TARİHİ</span>
                    </label>
                    <input type="date" placeholder="Hastanın Doğum Tarihi" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
            </div>
            <h3 className='mt-6'>Randevu Bilgileri</h3>
            <div className='grid grid-cols-3 gap-12'>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">POLİKLİNİK</span>
                    </label>
                    <input type="text" readOnly placeholder="Poliklinik Adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">DOKTOR</span>
                    </label>
                    <select className="select select-bordered select-sm w-full max-w-xs focus:input-primary">
                        <option disabled selected>Doktor Seçiniz</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <label className="label">
                        <span className="label-text">TARİH & SAAT</span>
                    </label>
                    <input type="datetime-local" placeholder="Hastanın Doğum Tarihi" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
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
        </form>
    )
}

export default ThirdStepAddAppointment