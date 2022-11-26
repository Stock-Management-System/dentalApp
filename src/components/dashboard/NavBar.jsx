import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar bg-transparent w-screen px-32 fixed">
        <div className="flex-1">
        <div className="flex  items-center ">
                <BiPlusMedical className='text-primary'/>
                <h1 className=" text-28 text-black font-light">
                    Dent
                    <span className="text-gray2 font-bold">rey</span>
                </h1>
            </div>       
        </div>
        <div className="xs:hidden lg:block">        
            <Link className='hover:text-blue1'>Randevu Sorgula</Link>        
            <Link className='mx-10 hover:text-blue1'>Randevu Al</Link>        
            <Link className='mr-10 hover:text-blue1'>Poliklinikler</Link>        
            <button style={{textTransform:'none', boxShadow:'0 0 30px -12px #5616f5'}} className='h-8 w-28 text-blue1 items-center btn-white rounded-full mr-3 hover:bg-blue1 hover:text-white' >Giriş Yap</button>
        </div>    
        <div className="dropdown dropdown-end lg:hidden ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96 text-center">
                <Link className='hover:text-blue1  my-2'>Randevu Sorgula</Link> <hr style={{color:'rgb(229 231 235)'}} />       
                <Link className='hover:text-blue1  my-2'>Randevu Al</Link>  <hr style={{color:'rgb(229 231 235)'}} />     
                <Link className='hover:text-blue1  my-2'>Poliklinikler</Link>   <hr style={{color:'rgb(229 231 235)'}} />      
                <button style={{textTransform:'none', boxShadow:'0 0 30px -12px #5616f5'}} className='h-8 w-4/5 mt-3 text-blue1 items-center btn-white rounded-full m-auto hover:bg-blue1 hover:text-white' >Giriş Yap</button>
            </div>
        </div>    
    </div>
    )
}

export default NavBar