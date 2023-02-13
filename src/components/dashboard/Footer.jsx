import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { RiTwitterFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer
      style={{ minHeight: '400px' }}
      className="footer md:py-[100px] pt-[50px] pb-[100px] bg-gradient-to-r from-blue1 to-fuchsia  text-white w-[100%] "
    >
      <div className=' footer  xl:w-10/12 w-11/12 mx-auto '>
        <div className="md:col-span-2 mb-[25px]">
          <span className="pb-[20px] font-bold text-18 md:tracking-wider leading-[18px]">DENTREY</span>
          <p className="text-14 pb-[20px] font-light">
            Copyright © 2023 Dentrey
            <br />
            Tüm hakları saklıdır.
          </p>
          <div>
            <div className="grid grid-flow-col gap-4 ">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <RiTwitterFill className="text-2xl hover:opacity-50 transition-opacity" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <ImFacebook className="text-2xl hover:opacity-50 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="text-2xl hover:opacity-50 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 font-light   mb-[25px]">
          <span className="mb-2 font-bold text-20 ">Şirket</span>
          <div className='flex flex-wrap md:flex-col'>
            <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline font-light mr-5 mb-2  "
          >
            Hakkımızda
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline font-light mr-5 mb-2"
          >
            Ekibimiz
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline font-light mr-5 mb-2"
          >
            Gizlilik
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            Sözleşmeler
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline "
          >
            Dökümanlar
            <div className=" footer-link-underline "></div>
          </Link>
          </div>
          
        </div>
        <div className="col-span-1 font-light  mb-[25px]">
          <span className="mb-2 font-bold text-20">Hızlı Erişim</span>
          <div className="flex flex-wrap md:flex-col">

         
          <Link
            to="/randevu-al"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            Randevu Al
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="/randevu-sorgula"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            Randevu Sorgula
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="/poliklinikler"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            Poliklinikler
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            Giriş
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline"
          >
            Kayıt
            <div className=" footer-link-underline "></div>
          </Link>
          </div>
        </div>
        <div className="col-span-1 font-light  mb-[25px]">
          <span className="mb-2 font-bold text-20">Destek</span>
          <div className="flex flex-wrap md:flex-col">

          
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            İletişim
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            SSS
            <div className=" footer-link-underline "></div>
          </Link>
          <Link
            to="#"
            className="link-hover footer-link hover:text-footerLinkHover hover:no-underline mr-5 mb-2"
          >
            Basında Biz
            <div className=" footer-link-underline "></div>
          </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
