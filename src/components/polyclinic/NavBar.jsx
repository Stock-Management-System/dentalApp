import React from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarToggle } from '../../features/sidebarSlice';

const NavBar = () => {
  const open = useSelector(state => state.open.value)
  const dispatch = useDispatch()

  return (
    <div className={`navbar bg-white h-20  right-0 z-10 fixed ${open  ? 'w-[calc(100%-250px)]':'w-[calc(100%-100px)]'} transition-w ease-in-out duration-500`} >
      <div  className={open ? "absolute top-5 left-0 btn-primary w-5 h-10 rounded-r-full" : "absolute top-5 left-0 w-5 h-10   rotate-180 btn-primary rounded-l-full"}  onClick={() => dispatch(sidebarToggle())}>

            <MdArrowBackIosNew className='text-xl'
              
              />
              </div>
      <div className="navbar-start">
        <div className='ml-6 xs:hidden md:block'>
          <button className='btn btn-sm btn-primary rounded-3xl mr-3'><BiMessageSquareAdd className='mr-1' />Randevu Oluştur</button>
          <button className='btn btn-sm btn-outline rounded-3xl'><BsCalendar3 className='mr-1' />Randevu Sorgula</button>
        </div>
        <div className="dropdown ml-6 md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><BiMessageSquareAdd className='mr-1' /> Randevu Oluştur</a></li>
            <li><a><BsCalendar3 className='mr-1' />Randevu Sorgula</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div tabIndex={0} className="collapse group md:hidden">
          <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content btn btn-ghost btn-circle">
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
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
          <select className="select select-sm max-w-xs menu menu-compact">
            <option disabled selected>Asuman Durmaz</option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
          {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar