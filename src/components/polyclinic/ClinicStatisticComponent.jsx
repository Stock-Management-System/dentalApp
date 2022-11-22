import React from 'react'

const ClinicStatisticComponent = ({ data1, data2, data3 }) => {
    return (
        <div className='grid grid-cols-3 gap-3 p-4 py-6'>
            <div className='bg-container p-2'>
                <div className='p-2'>
                    <h6 className='font-bold'>{data1.day}</h6>
                    <p className='opacity-70'>{data1.date}</p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className='row-span-3 text-blue2 text-6xl font-bold text-center' style={{ fontSize: '4rem' }}>
                        {data1.quantity}
                    </div>
                    <div className='row-span-2 col-span-2 opacity-90'>
                        <p className='mt-4'>{data1.peak} YENİ MUAYENE</p>
                        <p>{data1.control} KONTROL</p>
                        <p>{data1.toBeContinous} TEDAVİSİ DEVAM EDEN</p>
                    </div>
                </div>
            </div>
            <div className='bg-container p-2'>
                <div className='p-2'>
                    <h6 className='font-bold'>{data2.day}</h6>
                    <p className='opacity-70'>{data2.date}</p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className='row-span-3 text-Sky-500 text-6xl font-bold text-center' style={{ fontSize: '4rem' }}>
                        {data2.quantity}
                    </div>
                    <div className='row-span-2 col-span-2 opacity-90'>
                        <p className='mt-4'>{data2.peak} YENİ MUAYENE</p>
                        <p>{data2.control} KONTROL</p>
                        <p>{data2.toBeContinous} TEDAVİSİ DEAVM EDEN</p>
                    </div>
                </div>
            </div>
            <div className='bg-container p-2'>
                <div className='p-2'>
                    <h6 className='font-bold'>{data3.day}</h6>
                    <p className='opacity-70'>{data3.date}2</p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className='row-span-3 text-Rose-400 text-6xl font-bold text-center' style={{ fontSize: '4rem' }}>
                        {data3.quantity}
                    </div>
                    <div className='row-span-2 col-span-2 opacity-90'>
                        <p className='mt-4'>{data3.peak} YENİ MUAYENE</p>
                        <p>{data3.control} KONTROL</p>
                        <p>{data3.toBeContinous} TEDAVİSİ DEAVM EDEN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicStatisticComponent