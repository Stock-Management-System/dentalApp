import React from 'react'

import { FiSettings } from 'react-icons/fi';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { IoFileTrayOutline } from 'react-icons/io5';
import { FaChessBoard } from 'react-icons/fa';
import { FaHospitalUser } from 'react-icons/fa';
import { FaTooth } from 'react-icons/fa';
import { ImCalendar } from 'react-icons/im';
import {BiPlusMedical} from 'react-icons/bi'
const Sidebar = ({ open, setOpen }) => {
    return (
        <div className="fixed h-screen bg-gradient-to-b from-blue1 to-blue2 text-white " style={{ width: open ? "267px" : "117px" }}>
            <div>
          
                <div className='h-16 flex justify-center items-center text-indigo-500'>
            <BiPlusMedical />
            {/* font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: -.5px; */}
            <h1 className="fontSize-2.5 text-2.5">D<span style={{ display: !open &&'none' }}>ent<strong>rey</strong></span></h1>
                </div>
                <div>
                    {open ?
                        <ul className="menu p-4 w-50  text-white">
                            <li><a><FaTooth />Kliniğim</a></li>
                            <li><a><ImCalendar /> Randevular</a></li>
                            <li><a><FaHospitalUser /> Doktorlar</a></li>
                            <li><a><FaChessBoard /> Röntgen</a></li>
                            <li><a><IoFileTrayOutline /> Geçmiş İşlem</a></li>
                            <li><a><BiBriefcaseAlt2 /> Heasp Yönetimi</a></li>
                            <li><a><FiSettings /> Ayarlar</a></li>
                        </ul>
                        :
                        <ul className="menu p-4 w-50 text-white gap-2 py-5">
                            <li><a><FaTooth /></a></li>
                            <li><a><ImCalendar /></a></li>
                            <li><a><FaHospitalUser /></a></li>
                            <li><a><FaChessBoard /></a></li>
                            <li><a><IoFileTrayOutline /></a></li>
                            <li><a><BiBriefcaseAlt2 /></a></li>
                            <li><a><FiSettings /></a></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar