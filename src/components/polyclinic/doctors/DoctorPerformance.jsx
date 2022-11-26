import React, { useState } from 'react'
import DoctorInformation from './DoctorInformation'
import {doktorlar} from '../../../helpers/data'

const DoctorPerformance = () => {
  const [openTab, setOpenTab] = useState(1)
 
  return (
    <div>
      {/* <-----Card Hekimler ----->👇🏻 */}
      <p className="pb-5">Performans görüntülemek için bir hekim seçin.</p>
      <div className="flex flex-row gap-5">
        <div
          className={` ${
            openTab === 0
              ? 'card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white'
              : 'card w-1/5 bg-container'
          }`}
          onClick={e => {
            e.preventDefault()
            setOpenTab(0)
          }}
        >
          <figure className="pt-5">
            <img
              src="https://placeimg.com/850/850/people"
              alt="Shoes"
              className="w-36 rounded-full object-cover"
            />
          </figure>
          <div className="text-center py-3">
            <h2 className="text-center text-xl font-semibold">Egemen Yılmaz</h2>
            <p
              className={` ${
                openTab === 0
                  ? 'text-white text-center'
                  : 'text-blue1white text-center'
              }`}
            >
              Başhekim
            </p>
          </div>
        </div>
        <div
          className={` ${
            openTab === 1
              ? 'card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white'
              : 'card w-1/5 bg-container'
          }`}
          onClick={e => {
            e.preventDefault()
            setOpenTab(1)
          }}
        >
          <figure className="pt-5">
            <img
              src="https://placeimg.com/800/800/people"
              alt="Shoes"
              className="w-36 rounded-full object-cover"
            />
          </figure>
          <div className="text-center py-3">
            <h2 className="text-center text-xl font-semibold">Çelebi Doğan</h2>
            <p
              className={` ${
                openTab === 1
                  ? 'text-white text-center'
                  : 'text-blue1white text-center'
              }`}
            >
              Ortodonti Uzmanı
            </p>
          </div>
        </div>
        <div
          className={` ${
            openTab === 2
              ? 'card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white'
              : 'card w-1/5 bg-container'
          }`}
          onClick={e => {
            e.preventDefault()
            setOpenTab(2)
          }}
        >
          <figure className="pt-5">
            <img
              src="https://placeimg.com/700/700/people"
              alt="Shoes"
              className="w-36 rounded-full object-cover"
            />
          </figure>
          <div className="text-center py-3">
            <h2 className="text-center text-xl font-semibold">Zeynep Kara</h2>
            <p
              className={` ${
                openTab === 2
                  ? 'text-white text-center'
                  : 'text-blue1white text-center'
              }`}
            >
              Diş Hekimi
            </p>
          </div>
        </div>
        <div
          className={` ${
            openTab === 3
              ? 'card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white'
              : 'card w-1/5 bg-container'
          }`}
          onClick={e => {
            e.preventDefault()
            setOpenTab(3)
          }}
        >
          <figure className="pt-5">
            <img
              src="https://placeimg.com/950/950/people"
              alt="Shoes"
              className="w-36 rounded-full object-cover"
            />
          </figure>
          <div className="text-center py-3">
            <h2 className="text-center text-xl font-semibold">
              Mikail Çelikbaş
            </h2>
            <p
              className={` ${
                openTab === 3
                  ? 'text-white text-center'
                  : 'text-blue1white text-center'
              }`}
            >
              Diş Hekimi
            </p>
          </div>
        </div>
        <div
          className={` ${
            openTab === 4
              ? 'card w-1/5 bg-gradient-to-r  from-blue1 to-blue2 text-white'
              : 'card w-1/5 bg-container'
          }`}
          onClick={e => {
            e.preventDefault()
            setOpenTab(4)
          }}
        >
          <figure className="pt-5">
            <img
              src="https://placeimg.com/1100/1100/people"
              alt="Shoes"
              className="w-36 rounded-full object-cover"
            />
          </figure>
          <div className="text-center py-3">
            <h2 className="text-center text-xl font-semibold">Seray Kiraz</h2>
            <p
              className={` ${
                openTab === 4
                  ? 'text-white text-center'
                  : 'text-blue1white text-center'
              }`}
            >
              Diş Hekimi
            </p>
          </div>
        </div>
      </div>
      {/* <-----Hekim Profil ----->👇🏻 */}

      {/* <div className={openTab === 0 ? "block" : "hidden"}> */}
      <DoctorInformation doktorInfo={doktorlar[openTab]} />
      {/* </div> */}
      {/* <div className={openTab === 1? "block" : "hidden"}>
			<DoctorInformation doktorInfo={doktorlar[openTab]} />
			</div>
			<div className={openTab === 2 ? "block" : "hidden"}>
			<DoctorInformation doktorInfo={doktorlar[openTab]} />
			</div>
			<div className={openTab === 3 ? "block" : "hidden"}>
			<DoctorInformation doktorInfo={doktorlar[openTab]} />
			</div>
			<div className={openTab === 4? "block" : "hidden"}>
			<DoctorInformation doktorInfo={doktorlar[openTab]} />
			</div> */}
    </div>
  )
}

export default DoctorPerformance
