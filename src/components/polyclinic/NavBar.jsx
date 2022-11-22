import React, { useState } from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdArrowBackIosNew } from 'react-icons/md';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarToggle } from '../../features/sidebarSlice';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const open = useSelector(state => state.open.value)
  const dispatch = useDispatch()
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <div className="navbar bg-white  right-0 z-10 fixed" style={{ width: open ? "calc(100% - 250px)" : "calc(100% - 100px)",height:'80px' }}>
      <div  className={open ? "absolute top-5 left-0 btn-primary w-5 h-10 rounded-r-full" : "absolute top-5 left-0 w-5 h-10   rotate-180 btn-primary rounded-l-full"}  onClick={() => dispatch(sidebarToggle())}>

            <MdArrowBackIosNew className='text-xl'
              
              />
              </div>
      <div className="navbar-start">
        <div className='ml-6 xs:hidden xl:block'>
          <button className='btn btn-sm btn-primary rounded-3xl mr-3'><BiMessageSquareAdd className='mr-1' />Randevu Oluştur</button>
          <button className='btn btn-sm btn-outline rounded-3xl'><BsCalendar3 className='mr-1' />Randevu Sorgula</button>
        </div>
      </div>

      <div className="navbar-end flex flex-row ">
        <div className="dropdown ml-6 xl:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><BiMessageSquareAdd className='mr-1' /> Randevu Oluştur</a></li>
            <li><a><BsCalendar3 className='mr-1' />Randevu Sorgula</a></li>
          </ul>
        </div>
        {/* <div tabIndex={0} className="collapse group md:hidden">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content btn btn-ghost btn-circle">
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div> */}
        <div className="form-control relative xs:hidden md:block">
          <input type="text" placeholder="Search Patient" className="input input-bordered rounded-3xl" />
          <button className="btn btn-ghost btn-circle absolute right-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>        
        <div className="dropdown dropdown-end ml-3 flex items-center">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full avatar">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <span className='text-center xs:hidden md:block'>Asuman Durmaz</span>
          <div className="dropdown dropdown-end">          
            <div tabIndex={0} className="btn btn-ghost" onClick={()=> setDropOpen(!dropOpen)}>
            {dropOpen?<RiArrowDropDownLine className="text-3xl"/>:<RiArrowDropUpLine className="text-3xl"/>}
            </div>
            <ul tabIndex={0} className="divide-y menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <div className="">
               {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700"  */}
              <p  className="text-gray-300 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Kullanıcı Menüsü</p>      
            </div>
            <div>
              <li><Link to="#">Profilim</Link></li>
              <li><Link to="#">Faaliyet</Link></li>
              <li><Link to="#">Hesap Değiştir</Link></li>
              <li><Link to="#">Yardım</Link></li>
              <li class="logout"><Link to="#" className="btn btn-outline btn-error btn-circle w-20">Çıkış</Link></li>
            </div>           
            </ul>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default NavBar