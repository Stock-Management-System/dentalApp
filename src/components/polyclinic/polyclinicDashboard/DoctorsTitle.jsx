import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import DoctorsCard from './DoctorsCard'
import {doktorlar} from "../../../helpers/data.js"
// import { useSelector } from 'react-redux'

const DoctorsTitle = ( {policlinicProfile}) => {
 /*    console.log(window.document.body.clientWidth);
    const open = useSelector(state => state.open.value)
    const width = open ? window.document.body.clientWidth - 298 :  window.document.body.clientWidth - 148
    const gridCount = width < 500 ? 1 : width < 800 ? 2 : width < 1200 ? 3 : width < 1600 ? 4 : width < 2000 ? 5 : 6
    console.log(gridCount); */


    return (
        <div className='bg-white mt-7 p-3'>
            <div className='mb-6'>
                <h1>HEKİMLERİMİZ</h1>
                <div className='flex justify-end gap-2'>
                    <FaLessThan className='w-2 h-2  ' />
                    <FaGreaterThan className='w-2 h-2' />
                </div>

            </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
                {policlinicProfile.doktorlar.map((item,index)=> <DoctorsCard key={index} item={item} />)}
            </div>
        </div>
    )
}

export default DoctorsTitle