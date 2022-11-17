import React, { useEffect, useState } from 'react'

import { FiSettings } from 'react-icons/fi'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { IoFileTrayOutline } from 'react-icons/io5'
import { FaChessBoard } from 'react-icons/fa'
import { FaHospitalUser } from 'react-icons/fa'
import { FaTooth } from 'react-icons/fa'
import { ImCalendar } from 'react-icons/im'
import { BiPlusMedical } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sidebarToggle } from '../../features/sidebarSlice';

const Sidebar = () => {
  const open = useSelector(state => state.open.value)
  const [linkHover, setLinkHover] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
   
  }, []);

  const handleMouseOver = () => {
  dispatch(sidebarToggle())
  setLinkHover(!linkHover)
  }
  const handleMouseOut = () => {
      dispatch(sidebarToggle())
      setLinkHover(!linkHover)
  }

  return (
    <div
      className={` fixed h-screen bg-gradient-to-b from-blue1 to-blue2 text-white ${open  ? 'w-[250px]':'w-[100px]'} transition-w ease-in-out duration-500` }
    
    >
      <div>
        <Link to='/' className=" absolute top-0 h-20 flex pl-9 items-center text-indigo-500 transition-all ease-in-out duration-500">
          <BiPlusMedical />
          <h1 className=" text-28 font-bold">
            D
            <span className={`${open ? 'opacity-100':'opacity-0'} transition-all ease-in-out duration-500`}>
              ent<strong className="text-turquaz ">rey</strong>
            </span>
          </h1>
        </Link>
        <div>
        
            <ul className="menu  w-50 mt-24   text-white"  >
              <li className="hover:bg-linkhover transition duration-0 hover:duration-300 mt-0.5">
                <Link to='patients' className=" pl-9" >
                  <FaTooth className="text-turquaz text-22" />
                 <span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}>Kliniğim</span> 
                </Link>
              </li>
              <li  className="hover:bg-linkhover transition duration-0 hover:duration-300 mt-0.5">
              <Link to='patients' className=" pl-9">
                  <ImCalendar className="text-turquaz text-22" /> <span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}> Randevular</span>
                  </Link>
              </li>
              <li  className="hover:bg-linkhover transition duration-0 hover:duration-300  mt-0.5">
              <Link to='patients' className=" pl-9">
                  <FaHospitalUser className="text-turquaz text-22" /> <span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}>Doktorlar</span> 
                  </Link>
              </li>
              <li className="hover:bg-linkhover transition duration-0 hover:duration-300  mt-0.5">
              <Link to='patients' className=" pl-9">
                  <FaChessBoard className="text-turquaz text-22" /> <span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}>Röntgen</span> 
                  </Link>
              </li>
              <li className="hover:bg-linkhover transition duration-0 hover:duration-300  mt-0.5">
              <Link to='patients' className=" pl-9">
                  <IoFileTrayOutline className="text-turquaz text-22" /><span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}>Geçmiş İşlem</span>  
                  </Link>
              </li>
              <li className="hover:bg-linkhover transition duration-0 hover:duration-300 mt-0.5 ">
              <Link to='patients' className=" pl-9">
                  <BiBriefcaseAlt2 className="text-turquaz text-22" /><span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}> Heasp Yönetimi</span> 
                  </Link>
              </li>
              <li className="hover:bg-linkhover transition duration-0 hover:duration-300 mt-0.5 ">
              <Link to='patients' className=" pl-9">
                  <FiSettings className="text-turquaz text-22" /> <span className={`whitespace-nowrap ${open ? 'opacity-100' : 'opacity-0' } transition-all ease-in-out duration-500`}>Ayarlar</span> 
                  </Link>
              </li>
            </ul>
       
        </div>
      </div>
    </div>
  )
}

export default Sidebar
