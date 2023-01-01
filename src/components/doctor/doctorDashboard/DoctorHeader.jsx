import React from 'react'

const DoctorHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 flex-col gap-0 xl:gap-6 mt-16  py-5 justify-between">
      {/* clinic header infos */}
      <div className="flex justify-start items-center px-10 py-4 col-span-6">
        <img
          width={100}
          src="https://ozeldent42.com/tema/genel/uploads/hizmetler/icon/implant.png"
          alt="İnciDis"
        />
        <div className="text-2xl text-Sky-700 ml-8">
          <h1 className="font-bold" style={{ fontSize: '2rem' }}>
            İNCİ DİŞ
          </h1>
          <h2>POLİKLİNİĞİ</h2>
        </div>
      </div>
    
        <div  className="xs:col-span-6 lg:col-span-3 p-6">
          <h3 className="text-2xl font-bold">Adress :</h3>
          <p>Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5</p>
          <p className='text-end font-bold'> FATİH/İSTANBUL</p>
        </div>
        <div className="xs:col-span-6  lg:col-span-3 p-6">
          <h3 className="text-2xl font-bold">Telefon :</h3>
          <p>+90 222 222 22 22</p>
          <p>+90 222 222 22 22</p>
          <p>+90 222 222 22 22</p>
        </div>
   
    </div>
  )
}

export default DoctorHeader
