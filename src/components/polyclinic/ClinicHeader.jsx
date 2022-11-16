import React from 'react'

const ClinicHeader = () => {
    return (
        <div className='divide-y p-1'>
            {/* clinic header infos 👇🏻 */}
            <div className='gird grid-cols-6 gap-4 p-4'>
                <div className='col-span-4 flex'>
                    <img width={100} src="https://ozeldent42.com/tema/genel/uploads/hizmetler/icon/implant.png" alt="İnciDis" />
                    <div>
                        <h1>İNCİ DİŞ POLİKİNİĞİ</h1>
                    </div>
                </div>
                <div className=''>
                    <h3>Adress</h3>
                    <p>Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 FATİH/İSTANBUL</p>
                </div>
                <div className=''>
                    <h3>Telefon</h3>
                    <p>+90 222 222 22 22</p>
                    <p>+90 222 222 22 22</p>
                    <p>+90 222 222 22 22</p>
                </div>
            </div>
            {/* Clinic statistic divders 👇🏻 */}
            <div className='grid grid-cols-3 gap-3 p-4'>
                <div className='bg-container p-2'>
                    <div className='p-2'>
                        <h6 className='font-bold'>BUGÜN</h6>
                        <p className='opacity-70'>16 Kasım 2022</p>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className='row-span-3 text-blue2 text-6xl font-bold text-center' style={{ fontSize: '4rem' }}>43</div>
                        <div className='row-span-2 col-span-2 opacity-90'>
                            <p className='mt-4'>16 YENİ MUAYENE</p>
                            <p>13 KONTROL</p>
                            <p>14 TEDAVİSİ DEAVM EDEN</p>
                        </div>
                    </div>
                </div>

                <div className='bg-container p-2'>
                    <div className='p-2'>
                        <h6 className='font-bold'>BU AY</h6>
                        <p className='opacity-70'>16 Kasım 2022</p>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className='row-span-3 text-Sky-500 text-6xl font-bold text-center' style={{ fontSize: '4rem' }}>217</div>
                        <div className='row-span-2 col-span-2 opacity-90'>
                            <p className='mt-4'>160 YENİ MUAYENE</p>
                            <p>137 KONTROL</p>
                            <p>140 TEDAVİSİ DEAVM EDEN</p>
                        </div>
                    </div>
                </div>

                <div className='bg-container p-2'>
                    <div className='p-2'>
                        <h6 className='font-bold'>BU YIL</h6>
                        <p className='opacity-70'>16 Kasım 2022</p>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className='row-span-3 text-Rose-400 text-6xl font-bold text-center' style={{ fontSize: '4rem' }}>4127</div>
                        <div className='row-span-2 col-span-2 opacity-90'>
                            <p className='mt-4'>460 YENİ MUAYENE</p>
                            <p>337 KONTROL</p>
                            <p>540 TEDAVİSİ DEAVM EDEN</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClinicHeader