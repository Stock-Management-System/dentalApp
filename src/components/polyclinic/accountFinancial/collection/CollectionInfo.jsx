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
            miktar: "1200"
        },
    ]
    return (
        <div className='grid grid-rows-2 grid-cols-3 gap-4 mt-3'>
            <AddFinancialPatientInfo />


            <div className='col-span-2 bg-white p-4'>
                <h1>Ödeme Bilgileri</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        odemeBilgileri.map((item, index) => (
                            <div key={index} className="bg-container p-3">
                                <h2>{item.tanım}</h2>
                                <p>{item.miktar} ₺</p>
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className='col-span-2 bg-white p-4'>
                aa
            </div>

        </div>
    )
}

export default CollectionInfo
