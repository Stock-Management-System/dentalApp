import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { RiTwitterFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 place-content-evenly text-white w-screen bg-gradient-to-r from-blue1 to-fuchsia">
  <div className='mx-16'>
  <span className="mb-2 font-bold text-base tracking-wider">Dentrey</span>
    <p>Copyright © 2018 Dentrey<br/>Tüm hakları saklıdır.</p>
    <div>
    
    <div className="grid grid-flow-col gap-4 mt-7">
   
      <a href="#"><RiTwitterFill className='text-2xl'/></a>      
      <a href="#"><ImFacebook className='text-2xl'/></a>
      <a href="#"><FaLinkedinIn className='text-2xl'/></a>
    </div>
  </div>
  </div> 
  <div className='mx-12'>
    <span className="mb-2 font-bold text-base">Şirket</span> 
    <Link to="#" className="link-hover">Hakkımızda</Link> 
    <Link to="#" className="link-hover">Ekibimiz</Link> 
    <Link to="#" className="link-hover">Gizlilik</Link> 
    <Link to="#" className="link-hover">Sözleşmeler</Link>
    <Link to="#" className="link-hover">Dökümanlar</Link>
  </div> 
  <div className='mx-12'>
    <span className="mb-2 font-bold text-base">Hızlı Erişim</span> 
    <Link to="/appointments" className="link-hover">Randevu Al</Link> 
    <Link to="/appointments" className="link-hover">Randevu Sorgula</Link> 
    <Link to="/" className="link-hover">Poliklinikler</Link> 
    <Link to="#" className="link-hover">Giriş</Link>
    <Link to="#" className="link-hover">Kayıt</Link>
  </div> 
  <div className='mx-12'>
    <span className="mb-2 font-bold text-base">Destek</span> 
    <Link to="#" className="link-hover">İletişim</Link> 
    <Link to="#" className="link-hover">SSS</Link> 
    <Link to="#" className="link-hover">Basında Biz</Link>
  </div>
</footer>
  )
}

export default Footer