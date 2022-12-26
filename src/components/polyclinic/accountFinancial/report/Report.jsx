import React, { useState } from 'react'
import DateRangePickerComp from '../../appointments/DateRangePickerComp'

const Report = ({ setShowInfo }) => {
    const [tapOpen, setTapOpen] = useState(1)


    const handleSubmit = (e) => {
        e.preventDefault()
        setShowInfo(3)
    }

    return (
        <div>
            <div className="tabs p-2">
                <p
                    className={` ${tapOpen === 1
                        ? "tab border-b-2 border-blue1 text-blue1 "
                        : "tab text-black"
                        }`}
                    onClick={() => setTapOpen(1)}
                >Kimik Numarası ile Sorula</p>
                <p
                    className={` ${tapOpen === 2
                        ? "tab border-b-2 border-blue1 text-blue1 "
                        : "tab text-black"
                        }`}
                    onClick={() => setTapOpen(2)}
                >Kişi Bilgileri ile Sorula</p>
                <p
                    className={` ${tapOpen === 3
                        ? "tab border-b-2 border-blue1 text-blue1 "
                        : "tab text-black"
                        }`}
                    onClick={() => setTapOpen(3)}
                >Tarih ile Sorgula</p>
            </div>
            {
                tapOpen === 1
                &&
                <div className="grid grid-cols-1 place-items-center my-9">
                    {/* TC numarası ile sorgulama 👇🏻 */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex justify-between items-center w-[40rem]"
                    >
                        <label className="label-text text-center">HASTA TC KİMLİK NO</label>
                        <input
                            type="text"
                            placeholder="Hasta TC Kimlik No"
                            className="input input-bordered input-sm w-full max-w-xs"
                        />
                        <button
                            type='submit'
                            className="btn btn-sm w-28 btn-outline btn-primary rounded-full capitalize">
                            Sorgula
                        </button>
                    </form>
                </div>
            }
            {
                tapOpen === 2
                &&
                <div className="grid grid-cols-1 place-items-center my-9">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col justify-between items-center w-[30rem] gap-2">
                        <div className='flex gap-2 w-11/12 items-center justify-between'>
                            <label className="label-text">ADI</label>
                            <input
                                type="text"
                                placeholder="Ad giriniz"
                                className="input input-bordered input-sm w-full max-w-xs"
                            />
                        </div>
                        <div className='flex gap-5 w-11/12 items-center justify-between'>
                            <label className="label-text">SOYADI</label>
                            <input
                                type="text"
                                placeholder="Soyad giriniz"
                                className="input input-bordered input-sm w-full max-w-xs"
                            />
                        </div>
                        <div className='flex gap-5 w-11/12 items-center justify-between'>
                            <label className="label-text">BABA ADI</label>
                            <input
                                type="text"
                                placeholder="Baba adı giriniz"
                                className="input input-bordered input-sm w-full max-w-xs"
                            />
                        </div>
                        <button
                            type='submit'
                            className="btn btn-sm w-36 btn-outline btn-primary rounded-full capitalize self-end">
                            Sorgula
                        </button>
                    </form>
                </div>
            }
            {
                tapOpen === 3
                &&
                <div className="grid grid-cols-1 place-items-center my-9">
                    <form
                        onSubmit={handleSubmit}
                        className="flex justify-center items-center w-[30rem] gap-2">

                        <label
                            htmlFor="my-modal"
                            className="btn btn-sm btn-outline btn-primary rounded-full w-36 mr-4 capitalize"
                        >
                            Tarih Seç
                        </label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <div className="flex justify-center">
                                    <DateRangePickerComp />
                                </div>
                                <div className="modal-action">
                                    <label
                                        htmlFor="my-modal"
                                        className="btn btn-sm bg-blue1 hover:bg-blue2 "
                                    >
                                        Cancel
                                    </label>
                                    <label
                                        htmlFor="my-modal"
                                        className="btn btn-sm bg-blue1 hover:bg-blue2 "
                                    >
                                        Apply
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type='submit'
                            className="btn btn-sm w-36 btn-outline btn-primary rounded-full capitalize self-end">
                            Sorgula
                        </button>
                    </form>
                </div>
            }

        </div>
    )
}

export default Report