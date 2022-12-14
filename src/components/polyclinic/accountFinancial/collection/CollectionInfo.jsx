import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import AddFinancialPatientInfo from '../addAccount/AddFinancialPatientInfo'

const CollectionInfo = () => {
    const odemeBilgileri = [
        {
            tanım: "Toplam Ücret",
            miktar: "1200"
        },
        {
            tanım: "Toplam Ödenen",
            miktar: "800"
        },
        {
            tanım: "Kalan Toplam",
            miktar: "400"
        },
    ]
    return (
        <div className='grid grid-rows-2 grid-cols-3 gap-4 mt-3'>
            <AddFinancialPatientInfo />


            <div className='col-span-2 bg-white p-4'>
                <h1 className='font-semibold mb-3 p-2'>Ödeme Bilgileri</h1>
                <div className="grid grid-cols-3 gap-6">
                    {
                        odemeBilgileri.map((item, index) => (
                            <div key={index} className="bg-container p-3">
                                <h2 className='font-semibold uppercase'>{item.tanım}</h2>
                                <p className={`font-bold text-3xl ${(item.tanım.toLocaleLowerCase() === 'toplam ücret') ? 'text-blue1' : (item.tanım.toLocaleLowerCase() === 'toplam ödenen') ? "text-darkTurquaz" : (item.tanım.toLocaleLowerCase() === 'kalan toplam') ? "text-pink" : null}`}>{item.miktar} ₺</p>
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className='col-span-2 bg-white p-4'>
                <h3 className='font-semibold mb-3 p-2'>Tahsilat</h3>
                <form className="grid grid-cols-8 items-end gap-2">
                    <div className='col-span-3'>
                        <label className="label">
                            <span className="label-text">ÖDEME TARİHİ</span>
                        </label>
                        <input type="date" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='col-span-3'>
                        <label className="label">
                            <span className="label-text">ÖDEME MİKTARI</span>
                        </label>
                        <input type="text" placeholder="Ödeme Miktarını Giriniz" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <button type="submit" className='col-span-2 mb-2 w-40 btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1 capitalize'>Ödemeyi Kaydet</button>
                </form>
            </div>

        </div>
    )
}

export default CollectionInfo
