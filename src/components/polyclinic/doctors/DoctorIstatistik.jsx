import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi';
import sinusgraphic from "../../../assets/sinusgraphic.png";
const DoctorIstatistik = ({istatistik , index}) => {

  console.log(istatistik.istatistikVeri[4].zamanAdı);
						const bgColor =
							istatistik.id === 1
								? "text-blue1"
								: istatistik.id === 2
								? "text-turquaz"
								: istatistik.id === 3
								? "text-pink"
								: "text-black";
  return (
    <div className="w-1/4 bg-container p-2">
    <div className="flex flex-row p-2 justify-between py-2">
      <div>
        <h6 className="font-bold">{istatistik.istatistikAdi}</h6>
        <h1 className={`text-3xl font-bold ${bgColor} `}>
          {istatistik.istatistikVeri[index].sayı}
        </h1>
        <p className="text-[10px] opacity-70">TÜM ZAMANLAR</p>
      </div>
      <div tabIndex={0} className="dropdown dropdown-end">
        <label className="p-1 bg-white swap rounded-full">
          <input type="checkbox" />
          <div className="swap-on">
            <HiMinus />
          </div>
          <div className="swap-off">
            <HiPlus />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <p>Bugün</p>
          </li>
          <li>
            <p>Bu hafta</p>
          </li>
          <li>
            <p>Bu Ay</p>
          </li>
          <li>
            <p>Bu Yıl</p>
          </li>
          <li>
            <p>Tüm zamanlar</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="py-2">
      <img src={sinusgraphic} alt="" />
    </div>
  </div>
  )
}

export default DoctorIstatistik