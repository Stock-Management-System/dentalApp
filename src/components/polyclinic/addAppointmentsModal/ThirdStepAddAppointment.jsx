import React from 'react';
import { AiOutlineFileAdd, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ThirdStepAddAppointment = ({ handleSubmit, handleSubmitBackward }) => {
    return (
        <div>

            <form className='w-full p-2'>
                <div className='grid grid-cols-4 gap-2'>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">ADI</span>
                        </label>
                        <input type="text" placeholder="Hastanın Adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">SOYADI</span>
                        </label>
                        <input type="text" placeholder="Hastanın Soyadı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">BABA ADI</span>
                        </label>
                        <input type="text" placeholder="Hastanın baba adı" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">DOĞUM TARİHİ</span>
                        </label>
                        <input type="date" placeholder="Hastanın Doğum Tarihi" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">TELEFON</span>
                        </label>
                        <input type="text" placeholder="Hastanın Telefon No" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">EMAIL</span>
                        </label>
                        <input type="email" placeholder="abcd@abcd.com" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">İL</span>
                        </label>
                        <input type="text" placeholder="Hastanın Yaşadığı İl" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                    <div className="col-span-1">
                        <label className="label">
                            <span className="label-text">iLÇE</span>
                        </label>
                        <input type="text" placeholder="Hastanın Yaşadığı İlçe" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between mx-4 p-2 rounded-b">
                    <button
                        className="bg-blue1 text-white btn btn-sm rounded-3xl hover:bg-blue1"
                        onClick={handleSubmitBackward}
                    >
                        <AiOutlineLeft className='mr-4' />
                        Önceki Adım
                    </button>
                    <button
                        className="bg-blue1 text-white btn btn-sm rounded-3xl hover:bg-blue1"
                        type="submit"
                        onClick={null}
                    >
                        Randevuyu Onayla
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ThirdStepAddAppointment