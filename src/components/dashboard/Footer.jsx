import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer style={{minHeight:'400px'}} className="footer p-10 bg-base-200 place-content-evenly text-white w-[100%] bg-gradient-to-r from-blue1 to-fuchsia">
      <div className="mx-12 w-44">
        <span className="mb-2 font-bold text-18 tracking-wider">Dentrey</span>
        <p className="text-14">
          Copyright © 2018 Dentrey
          <br />
          Tüm hakları saklıdır.
        </p>
        <div>
          <div className="grid grid-flow-col gap-4 mt-7">
            <a href="#">
              <RiTwitterFill className="text-2xl hover:opacity-50 transition-opacity" />
            </a>
            <a href="#">
              <ImFacebook className="text-2xl hover:opacity-50 transition-opacity" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-2xl hover:opacity-50 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-12">
        <span className="mb-2 font-bold text-20">Şirket</span>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Hakkımızda
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Ekibimiz
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Gizlilik
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Sözleşmeler
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Dökümanlar
          <div className=" footer-link-underline "></div>
        </Link>
      </div>
      <div className="mx-12">
        <span className="mb-2 font-bold text-20">Hızlı Erişim</span>
        <Link to="/appointments" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Randevu Al
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="/appointments" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Randevu Sorgula
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="/" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Poliklinikler
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Giriş
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Kayıt
          <div className=" footer-link-underline "></div>
        </Link>
      </div>
      <div className="mx-12">
        <span className="mb-2 font-bold text-20">Destek</span>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          İletişim
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          SSS
          <div className=" footer-link-underline "></div>
        </Link>
        <Link to="#" className="link-hover footer-link hover:text-footerLinkHover hover:no-underline">
          Basında Biz
          <div className=" footer-link-underline "></div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
