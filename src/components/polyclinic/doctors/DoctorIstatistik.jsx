import React, { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import sinusgraphic from '../../../assets/sinusgraphic.png'
const DoctorIstatistik = ({ istatistik }) => {
  const [veriTime, setVeriTime] = useState(istatistik.istatistikVeri[4].zamanAdı)
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [veriSayı, setVeriSayı] = useState(istatistik.istatistikVeri[4].sayı)

  const bgColor =
    istatistik.id === 1
      ? 'text-blue1'
      : istatistik.id === 2
      ? 'text-turquaz'
      : istatistik.id === 3
      ? 'text-pink'
      : 'text-black'

    
      console.log(veriSayı);
  const handleClick = () => {
    console.log('asdasd')
    setDropdownIsOpen(!dropdownIsOpen)
  }

  const handledrop = (e)=>{
   setDropdownIsOpen(!dropdownIsOpen)
    setVeriSayı(e.sayı)
    setVeriTime(e.zamanAdı)
  }
  return (
    <div className="w-1/4 bg-container p-2"  >
      <div className="flex flex-row p-2 justify-between py-2">
        <div>
          <h6 className="font-bold">{istatistik.istatistikAdi}</h6>
          <h1 className={`text-3xl font-bold ${bgColor} `}>
            {veriSayı}
          </h1>
          <p className="text-[10px] opacity-70">{veriTime.toUpperCase()}</p>
        </div>
        <div tabIndex={0} className="dropdown dropdown-end  ">
          <label
            className="p-1 bg-white swap rounded-full border "
            onClick={handleClick}
          >
            {dropdownIsOpen ? (
              <div>
                {' '}
                <HiMinus />
              </div>
            ) : (
              <div>
                <HiPlus />
              </div>
            )}
          </label>
          <ul
            tabIndex={0}
            className={`menu p-2 shadow bg-base-100 right-0 rounded-box w-52 absolute transition-all ${
              !dropdownIsOpen && 'invisible'
            }`}
          >
            {istatistik.istatistikVeri.map((e) => (
              <li onClick={()=>handledrop(e)}>
                <p>{e.zamanAdı}</p>
              </li>
            ))}

            {/* <li>
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
          </li> */}
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