import React from 'react'

const AddFinancialForm = () => {
    return (
        <form className="w-full max-w-sm bg-white pl-8 py-8">
            <div className="md:flex md:items-center mb-4  gap-2">
                <div className="md:w-1/3">
                    <label className="md:text-right mb-1 md:mb-0 text-14" htmlhtmlFor="Telefon">
                        Telefon
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="input input-bordered input-sm appearance-none rounded  focus:bg-white" type="text" id='Telefon' />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4  gap-2">
                <div className="md:w-1/3">
                    <label className="md:text-right mb-1 md:mb-0 text-14" htmlFor="Hesap Açma Tarihi">
                        Hesap Açma Tarihi
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="input input-bordered input-sm appearance-none rounded  focus:bg-white" type="text" id='Hesap Açma Tarihi' />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4  gap-2">
                <div className="md:w-1/3">
                    <label className="md:text-right mb-1 md:mb-0 text-14" htmlFor="Ücret">
                        Ücret
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="input input-bordered input-sm appearance-none rounded  focus:bg-white" type="text" id='Ücret' />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4  gap-2">
                <div className="md:w-1/3">
                    <label className="md:text-right mb-1 md:mb-0 text-14" htmlFor="Ödeme Şekli">
                        Ödeme Şekli
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="input input-bordered input-sm appearance-none rounded  focus:bg-white" type="text" id='Ödeme Şekli' />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4  gap-2">
                <div className="md:w-1/3">
                    <label className="md:text-right mb-1 md:mb-0 text-14" htmlFor="Adres">
                        Adres
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="input input-bordered input-sm appearance-none rounded  focus:bg-white" type="text" id='Adres' />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4 gap-2">
                <div className="md:w-1/3">
                    <label className="md:text-right mb-1 md:mb-0 text-14" htmlFor="Açıklama">
                        Açıklama
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="input input-bordered input-sm appearance-none rounded  focus:bg-white" type="text" id='Açıklama' />
                </div>
            </div>
            <div className="md:flex md:items-center md:justify-between mr-4">
                <div className=""></div>
                <div className="">
                    <button className="shadow bg-blue1 text-white hover:bg-blue2 focus:shadow-outline focus:outline-none py-1 px-4 rounded-full" type="button">
                        Kaydet
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddFinancialForm