import React from 'react';
import { AiOutlineFileAdd, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const FirstStepAddAppointment = ({ handleSubmit }) => {
    return (
        <div>
            <div className="flex justify-between px-4 py-2 mt-12 items-center shadow sm:overflow-hidden sm:rounded-md">
                <h1>Hasta Bilgiler</h1>
                <div className="flex justify-center items-center gap-4">
                    <label className="label-text text-center">HASTA TC KİMLİK NO</label>
                    <input
                        type="text"
                        placeholder="Hasta TC Kimlik No"
                        className="input input-bordered input-sm w-full max-w-xs"
                        value={null}

                    />
                    <button
                        onClick={null}
                        className="btn btn-sm btn-outline btn-primary rounded-full capitalize"
                    >
                        Sorgula
                    </button>
                </div>


            </div>
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
                <div className="flex items-center justify-end mx-4 p-2 rounded-b">
                    <button
                        className="bg-blue1 text-white btn btn-sm rounded-3xl hover:bg-blue1"
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