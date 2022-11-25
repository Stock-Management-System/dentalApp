import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const MainPageNavBar = () => {
return (
    <div className="navbar bg-base-100 w-10/12 m-auto">
    <div className="flex-1">
    <div className="flex  items-center ">
            <BiPlusMedical className='text-primary'/>
            <h1 className=" text-28 text-black font-light">
                Dent
                <span className="text-gray2 font-medium">rey</span>
            </h1>
        </div>       
    </div>
    <div className="flex-none xs:hidden lg:block">        
        <Link>Randevu Sorgula</Link>        
        <Link>Randevu Al</Link>        
        <Link>Poliklinikler</Link>        
        <button style={{textTransform:'none'}} className='h-8 w-28 text-blue1 items-center btn-white rounded-full mr-3 hover:bg-blue1 hover:text-white'>Giriş Yap</button>
    </div>    
    <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96 text-center">
            <Link>Randevu Sorgula</Link> <hr />       
            <Link>Randevu Al</Link> <hr />        
            <Link>Poliklinikler</Link> <hr />        
            <button style={{textTransform:'none', boxShadow:'0 0 30pc -12px #5616f5'}} className='h-8 w-4/5 mt-3 text-blue1 items-center btn-white rounded-full m-auto hover:bg-blue1 hover:text-white'>Giriş Yap</button>
        </div>
    </div>    
</div>
)
}

export default MainPageNavBar