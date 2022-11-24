import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'


const MainPageNavBar = () => {
return (
    <div className="navbar bg-base-100 w-10/12 m-auto">
    <div className="flex-1">
    <div className="flex  items-center ">
            <BiPlusMedical className='text-primary'/>
            <h1 className=" text-28 text-black font-light">
                Dent
                <span className="text-gray2 font-medium">rey                </span>
            </h1>
        </div>       
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <li><a>Randevu Sorgula</a></li>        
        <li><a>Randevu Al</a></li>        
        <li><a>Poliklinikler</a></li>
        <li><button style={{textTransform:'none'}} className='btn text-white items-center btn-primary rounded-3xl mr-3'>Giriş Yap</button></li>
        </ul>
    </div>
</div>
)
}

export default MainPageNavBar