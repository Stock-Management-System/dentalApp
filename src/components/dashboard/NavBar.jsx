import React, { useEffect, useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavBar = ({ setShowRegister }) => {
  const [activePage, setActivePage] = useState('')
  let location = useLocation()
  const [menuOpen, setMenuOpen] = useState(true);

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
    console.log(menuOpen);
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
      className="navbar w-full top-0 left-0 flex justify-center h-[50px] md:h-[70px] fixed z-50 transition-all duration-300  hover:bg-container "
    >
      <div className="container ">
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
       

       
      <div className={`lg:hidden w-full absolute left-0 right-0 transition-all ease-in-out duration-500 top-[50px] md:top-[70px] overflow-hidden ${menuOpen?'h-64':'h-0'}`}>
        
          <ul
            tabIndex={0}
            className="  bg-base-100  p-2"
          >
            <li className='m-4'>

            <Link to="/randevu-sorgula" className="hover:text-blue1 h-4 ">Randevu Sorgula</Link>
            </li>
            <hr style={{ color: 'rgb(229 231 235)' }} />
            <li className='m-4'>

            <Link to="/randevu-al" className="hover:text-blue1  my-2">
              Randevu Al
            </Link>
            </li>
            <hr style={{ color: 'rgb(229 231 235)' }} />
            <li className='m-4'>
            <Link to="/poliklinikler" className="hover:text-blue1  my-2">Poliklinikler</Link>
            </li>
            <hr style={{ color: 'rgb(229 231 235)' }} />

          <div className='text-center'>
            <button

              style={{
                textTransform: 'none',
                boxShadow: '0 0 30px -12px #5616f5',
              }}
              className="h-8 w-40 m-4 text-blue1 items-center bg-white rounded-full mx-auto hover:bg-blue1 hover:text-white"
              type="button"
              onClick={() => setShowRegister(true)}
              >
              Giriş Yap
            </button>
              </div>
          </ul>
        </div>
        <FiMenu className='lg:hidden text-3xl cursor-pointer' onClick={()=>{
          
          setMenuOpen(!menuOpen)
        } 
        } />
      </div> 
    </div>
  )
}

export default NavBar
