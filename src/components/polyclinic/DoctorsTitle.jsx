import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import DoctorsCards from './DoctorsCards'

const DoctorsTitle = () => {
    return (
        <div className='bg-white mt-7 p-3'>
            <div className='mb-6'>
                <h1>HEKİMLERİMİZ</h1>
                <div className='flex justify-end gap-2'>
                    <FaLessThan className='w-2 h-2  ' />
                    <FaGreaterThan className='w-2 h-2' />
                </div>

            </div>
            <div className='grid grid-cols-5 gap-32'>
                <DoctorsCards />
                <DoctorsCards />
                <DoctorsCards />
                <DoctorsCards />
            </div>
        </div>
    )
}

export default DoctorsTitle