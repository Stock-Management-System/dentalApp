import React from 'react'
import ClinicStatisticComponent from './ClinicStatisticComponent'


const sampleData1 = {
    day: 'BUGÜN',
    date: '16 Kasım 2022',
    quantity: 43,
    peak: 16,
    control: 13,
    toBeContinous: 14
}
const sampleData2 = {
    day: 'BU AY',
    date: '16 Kasım 2022',
    quantity: 217,
    peak: 160,
    control: 137,
    toBeContinous: 140
}
const sampleData3 = {
    day: 'BU YIL',
    date: '16 Kasım 2022',
    quantity: 4127,
    peak: 460,
    control: 337,
    toBeContinous: 540
}

const ClinicHeader = () => {
    return (
        <div className='divide-y p-1'>
            {/* clinic header infos 👇🏻 */}
            <div className='flex flex-row mt-16 gap-20 py-5'>
                <div className='flex basis-4/6 justify-start items-center px-10 py-4'>
                    <img width={100} src="https://ozeldent42.com/tema/genel/uploads/hizmetler/icon/implant.png" alt="İnciDis" />
                    <div className='text-2xl text-Sky-700 ml-8'>
                        <h1 className='font-bold' style={{ fontSize: '2rem' }}>İNCİ DİŞ</h1>
                        <h2>POLİKLİNİĞİ</h2>
                    </div>
                </div>
                <div className='basis-2/12'>
                    <h3>Adress</h3>
                    <p>Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 FATİH/İSTANBUL</p>
                </div>
                <div className='basis-2/12'>
                    <h3>Telefon</h3>
                    <p>+90 222 222 22 22</p>
                    <p>+90 222 222 22 22</p>
                    <p>+90 222 222 22 22</p>
                </div>
            </div>
            {/* Clinic statistic divders 👇🏻 */}
            <ClinicStatisticComponent data1={sampleData1} data2={sampleData2} data3={sampleData3} />
        </div>
    )
}

export default ClinicHeader