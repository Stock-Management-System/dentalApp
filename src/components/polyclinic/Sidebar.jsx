import React from 'react'

import { FiSettings } from 'react-icons/fi'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { IoFileTrayOutline } from 'react-icons/io5'
import { FaChessBoard } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { FaTooth } from 'react-icons/fa'
import { ImCalendar } from 'react-icons/im'
import { BiPlusMedical } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const open = useSelector(state => state.open.value)

  return (
    <div
      className="fixed h-screen bg-gradient-to-b  from-blue1 to-blue2 text-white "
      style={{ width: open ? '250px' : '100px',transition:'all .5s easy-in-out' }}
    >
      <div>
        <Link to='/' className="h-20 flex pl-8 items-center text-indigo-500">
          <BiPlusMedical />
          <h1 className=" text-28 font-bold">
            D
            <span style={{ display: !open && 'none' }}>
              ent<strong className="text-turquaz ">rey</strong>
            </span>
          </h1>
        </Link>
        <div>
          {open ? (
            <ul className="menu  w-50 mt-5  text-white">
              <li >
                <Link to='patients' className=" pl-9" style={{transitionDelay: '0s'}}>
                  <FaTooth className="text-turquaz text-22" />
                  Kliniğim
                </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <ImCalendar className="text-turquaz text-22" /> Randevular
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <FaHospitalUser className="text-turquaz text-22" /> Doktorlar
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <FaChessBoard className="text-turquaz text-22" /> Röntgen
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <IoFileTrayOutline className="text-turquaz text-22" /> Geçmiş İşlem
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <BiBriefcaseAlt2 className="text-turquaz text-22" /> Heasp Yönetimi
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <FiSettings className="text-turquaz text-22" /> Ayarlar
                  </Link>
              </li>
            </ul>
          ) : (
            <ul className="menu w-50 text-white gap-2 mt-5">
              <li>
              <Link to='patients' className=" pl-9">
                  <FaTooth className="text-turquaz text-22" />
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <ImCalendar className="text-turquaz text-22" />
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <FaHospitalUser className="text-turquaz text-22" />
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <FaChessBoard className="text-turquaz text-22" />
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <IoFileTrayOutline className="text-turquaz" />
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <BiBriefcaseAlt2 className="text-turquaz text-22" />
                  </Link>
              </li>
              <li>
              <Link to='patients' className=" pl-9">
                  <FiSettings className="text-turquaz text-22" />
                  </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
