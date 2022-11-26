import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/dashboard/Footer';
import NavBar from '../../components/dashboard/NavBar';
import dashboardIntro from '../../assets/dashboardIntro.png';


const MainPage = () => {
    return (   
        <div className='h-screen'>        
            <NavBar/>      
            <div style={{borderBottomRightRadius:'100% 100%'}} className='bg-white h-[100vh] w-[94vw]'>
                <section className='flex pt-40 w-screen items-center'>
                    <div className='w-1/2 mb-40 pl-40 mr-10'>
                        <p className='text-blue1 text-64'>Dentrey Randevu Sistemi <span className='text-mainPageGray text-64'>çok yakında hizmetinizde</span></p>                        
                        <p className='text-18 max-w-2xl mt-5'>6000 den fazla hekim ve 900 den fazla diş kliniği ile dentrey kullanıcıları artık daha mutlu ve daha huzurlu. Üstelik gülerken çekimser olmak zorunda değil.</p>
                        <div className='flex mt-6'>
                            <Link to='#' style={{border:'1px solid #3beaf5'}} className=' h-10 w-44  text-white bg-turquaz flex justify-center items-center btn rounded-full mr-5 hover:bg-white hover:text-turquaz'>Randevu Sorgula</Link>        
                            <Link to='#' style={{border:'1px solid #ff5acd'}} className=' h-10 w-44  text-white bg-pink flex justify-center items-center btn rounded-full  hover:bg-white hover:text-pink'>Randevu Al</Link>
                        </div>                    
                    </div>
                    <div className='w-1/2 ml-20'>
                        <img src={dashboardIntro} alt="dashboardIntro"/>
                    </div>

                </section>
            </div>       
            <Footer/>
        </div>       
    )
}

export default MainPage