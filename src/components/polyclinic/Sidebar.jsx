import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { IoFileTrayOutline } from 'react-icons/io5';
import { FaChessBoard } from 'react-icons/fa';
import { FaHospitalUser } from 'react-icons/fa';
import { FaTooth } from 'react-icons/fa';
import { ImCalendar } from 'react-icons/im';

const Sidebar = ({ open, setOpen }) => {
    return (
        <div className="relative h-screen bg-indigo-600" style={{ width: open ? "220px" : "75px" }}>
            <div>
                <MdArrowBackIosNew style={{ marginLeft: '-4.5px' }} className={open ? "absolute top-6 left-56 z-10 btn-primary rounded-r-full" : "absolute top-6 left-20 z-10 rotate-180 btn-primary rounded-l-full"} onClick={() => setOpen(!open)} />
                <div className='h-16 flex justify-center items-center text-white'>
                    <h1>
                        Dentist
                    </h1>
                </div>
                <div>
                    {open ?
                        <ul className="menu p-4 w-50 bg-indigo-600 text-white">
                            <li><a><FaTooth />Kliniğim</a></li>
                            <li><a><ImCalendar /> Randevular</a></li>
                            <li><a><FaHospitalUser /> Doktorlar</a></li>
                            <li><a><FaChessBoard /> Röntgen</a></li>
                            <li><a><IoFileTrayOutline /> Geçmiş İşlem</a></li>
                            <li><a><BiBriefcaseAlt2 /> Heasp Yönetimi</a></li>
                            <li><a><FiSettings /> Ayarlar</a></li>
                        </ul>
                        :
                        <ul className="menu p-4 w-50 bg-indigo-600 text-white gap-2 py-5">
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