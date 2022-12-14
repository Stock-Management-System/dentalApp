import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import AddFinancialForm from './AddFinancialForm'
import AddFinancialPatientInfo from './AddFinancialPatientInfo'

const PatientInformation = () => {
    const devamEdenIslemler = ["Dolgu", "Diş Çekimi", "İmplant", "Diş Teli", "Köprü Tedavisi", " Diş Beyazlatma", "İmplant", "Diş Teli", "Köprü Tedavisi", " Diş Beyazlatma"]
    return (
        <div className='grid grid-cols-3 gap-4 p-2 mt-3'>
            <AddFinancialPatientInfo />


            <div className='grid grid-rows-2 gap-4 h-96'>
                <div className='flex flex-col gap-1 bg-white p-4'>
                    <h3 className='font-semibold'>Devam Eden İşlemler</h3>
                    <div className="flex flex-col flex-wrap gap-1 text-14 h-36 w-full mt-1">
                        {
                            devamEdenIslemler.map((item, index) => (
                                <p className='flex items-center gap-1 w-28' key={index} ><FiChevronRight className='text-blue1' />{item}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-1 bg-white p-4'>
                    <h3 className='font-semibold'>Biten İşlemler</h3>
                    <div className="flex flex-col flex-wrap gap-1 text-14 h-36 w-full mt-1">
                        {
                            devamEdenIslemler.map((item, index) => (
                                <p className='flex items-center gap-1 w-28' key={index} ><FiChevronRight className='text-blue1' />{item}</p>
                            ))
                        }
                    </div>
                </div>

            </div>



            <AddFinancialForm />

        </div>
    )
}

export default PatientInformation
