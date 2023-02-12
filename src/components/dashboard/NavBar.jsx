import React, { useEffect, useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavBar = ({ setShowRegister }) => {
  const [activePage, setActivePage] = useState('')
  let location = useLocation()

  const [bgColor, setBgColor] = useState(false)

  const changeBgColor = () => {
    if (window.scrollY > 0) {
      setBgColor(true)
    } else {
      setBgColor(false)
    }
  }

  useEffect(() => {
    changeBgColor()
    setActivePage(location.pathname)
    // adding the event when scroll change
    window.addEventListener('scroll', changeBgColor)
  })

  return (
    <div
      style={
        bgColor
          ? {
              backgroundColor: 'white',
              boxShadow: '0 4px 10px 0 rgba(0,0,0,.03)',
            }
          : { backgroundColor: 'transparent' }
      }
      className="navbar w-full top-0 left-0 flex justify-center h-[50px] md:h-[70px] fixed z-50 transition-all duration-300  hover:bg-container"
    >
      <div className="container">
        <div className="flex-1 ">
          <Link to="/">
            <div className="flex  items-center ">
              <BiPlusMedical className="text-primary" />
              <h1 className=" text-28 text-black font-light">
                Dent
                <span className="text-gray2 font-bold">rey</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="xs:hidden lg:block">
          <Link
            to="/"
            className={`mx-5 hover:text-blue1 text-darkGray font-medium uppercase  text-13 tracking-wider ${
              activePage === '/' && 'text-blue1'
            }`}
          >
            Anasayfa
          </Link>
          <Link to="/randevu-sorgula"
            className={`mx-5 hover:text-blue1 text-darkGray font-medium uppercase  text-13 tracking-wider ${
              activePage === '/randevu-sorgula' && 'text-blue1'
            }`}
          >
            Randevu Sorgula
          </Link>
          <Link
            to="/randevu-al"
            className={`mx-5 hover:text-blue1 text-darkGray font-medium uppercase  text-13 tracking-wider ${
              activePage === '/randevu-al' && 'text-blue1'
            }`}
          >
            Randevu Al
          </Link>
          <Link
            to="/poliklinikler"
            className={`mx-5 hover:text-blue1 text-darkGray font-medium uppercase  text-13 tracking-wider ${
              activePage === '/poliklinikler' && 'text-blue1'
            }`}
          >
            Poliklinikler
          </Link>
          <button
            htmlFor="my-modal-4"
            style={{
              textTransform: 'none',
              boxShadow: '0 0 30px -12px #5616f5',
            }}
            className="h-8 w-28 text-blue1 items-center  bg-white rounded-full mr-3 hover:bg-blue1 hover:text-white"
            type="button"
            onClick={() => setShowRegister(true)}
          >
            Giriş Yap
          </button>
        </div>
        <div className=" lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="border  bg-base-100 mt-[140px]"
          >
            <Link to="/randevu-sorgula" className="hover:text-blue1  my-2">Randevu Sorgula</Link>{' '}
            <hr style={{ color: 'rgb(229 231 235)' }} />
            <Link to="/randevu-al" className="hover:text-blue1  my-2">
              Randevu Al
            </Link>{' '}
            <hr style={{ color: 'rgb(229 231 235)' }} />
            <Link to="/poliklinikler" className="hover:text-blue1  my-2">Poliklinikler</Link>{' '}
            <hr style={{ color: 'rgb(229 231 235)' }} />
            <button
              style={{
                textTransform: 'none',
                boxShadow: '0 0 30px -12px #5616f5',
              }}
              className="h-8 w-4/5 mt-3 text-blue1 items-center bg-white rounded-full mx-auto hover:bg-blue1 hover:text-white"
              type="button"
              onClick={() => setShowRegister(true)}
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
