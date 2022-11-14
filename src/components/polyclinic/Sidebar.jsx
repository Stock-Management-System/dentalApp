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
              ent<strong className="text-turquaz">rey</strong>
            </span>
          </h1>
        </Link>
        <div>
          {open ? (
            <ul className="menu  w-50   text-white">
              <li className="border p-2">
                <Link to='patients'>
                  <FaTooth className="text-turquaz" />
                  Kliniğim
                </Link>
              </li>
              <li>
                <a>
                  <ImCalendar className="text-turquaz" /> Randevular
                </a>
              </li>
              <li>
                <a>
                  <FaHospitalUser className="text-turquaz" /> Doktorlar
                </a>
              </li>
              <li>
                <a>
                  <FaChessBoard className="text-turquaz" /> Röntgen
                </a>
              </li>
              <li>
                <a>
                  <IoFileTrayOutline className="text-turquaz" /> Geçmiş İşlem
                </a>
              </li>
              <li>
                <a>
                  <BiBriefcaseAlt2 className="text-turquaz" /> Heasp Yönetimi
                </a>
              </li>
              <li>
                <a>
                  <FiSettings className="text-turquaz" /> Ayarlar
                </a>
              </li>
            </ul>
          ) : (
            <ul className="menu p-4 w-50 text-white gap-2 py-5">
              <li>
                <a>
                  <FaTooth className="text-turquaz" />
                </a>
              </li>
              <li>
                <a>
                  <ImCalendar className="text-turquaz" />
                </a>
              </li>
              <li>
                <a>
                  <FaHospitalUser className="text-turquaz" />
                </a>
              </li>
              <li>
                <a>
                  <FaChessBoard className="text-turquaz" />
                </a>
              </li>
              <li>
                <a>
                  <IoFileTrayOutline className="text-turquaz" />
                </a>
              </li>
              <li>
                <a>
                  <BiBriefcaseAlt2 className="text-turquaz" />
                </a>
              </li>
              <li>
                <a>
                  <FiSettings className="text-turquaz" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
