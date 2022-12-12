import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/dashboard/Footer';
import NavBar from '../../components/dashboard/NavBar';
import dashboardIntro from '../../assets/dashboardIntro.png';
import dashboardDoctor from '../../assets/dashboard_doctor.png';
import dashboardCalendar from '../../assets/dashboard_calendar.png';
import dashboardClinic from '../../assets/dashboard_clinic.png';
import LoginModal from '../../components/dashboard/LoginModal';
import RegisterModal from '../../components/dashboard/RegisterModal';
import ForgotPassword from '../../components/dashboard/ForgotPassword';


const MainPage = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    
    return (   
        <div className='h-full relative'>
            <NavBar setShowRegister={setShowRegister}/>      
            <div  style={{borderBottomRightRadius:'100% 100%'}} className='bg-white h-[100vh] w-[94vw] '>
            <div className='h-[110rem] w-full bg-container absolute -z-10'> </div>
                <section  className='flex pt-24 w-[105%] items-center min-h-screen lg:px-20 bg-transparent xs:flex-col lg:flex-row lg:justify-evenly mb-10'>
                    <div className='lg:w-1/2 xl:w-auto xs:w-5/6 xs:text-center lg:text-left  pb-10'>
                        <p className='text-blue1 text-44'>Dentrey Randevu Sistemi <br /><span className='text-mainPageGray'>çok yakında hizmetinizde</span></p>                        
                        <p className='text-18 lg:max-w-xl mt-5'>6000 den fazla hekim ve 900 den fazla diş kliniği ile dentrey kullanıcıları artık daha mutlu ve daha huzurlu. Üstelik gülerken çekimser olmak zorunda değil.</p>
                        <div className='flex xs:flex-col lg:flex-row mt-6 xs:items-center gap-5'>
                            <Link to='#' style={{border:'1px solid #3beaf5'}} className='h-10 w-44  text-white tracking-[.5px] bg-turquaz flex justify-center items-center btn rounded-full  hover:bg-white hover:text-turquaz'>Randevu Sorgula</Link>        
                            <Link to='#' style={{border:'1px solid #ff5acd'}} className='h-10 w-44  text-white tracking-[.5px] bg-pink flex justify-center items-center btn rounded-full  hover:bg-white hover:text-pink'>Randevu Al</Link>
                        </div>                    
                    </div>
                    <div className='w-1/2 h-[500px] min-w-[600px] max-w-[600px] overflow-hidden relative xs:hidden md:block select-none'>
                        <img style={{}} className='absolute -left-6 top-5  min-h-[500px] min-w-[750px] pl-5' src={dashboardIntro} alt="dashboardIntro"/>
                    </div>

                </section>
                <section className='w-[105%]  px-[100px] bg-container sm:mt-14 lg:mt-28 pb-12'>
                    <div className='text-center mb-24'>
                        <h2 className='text-mainPageGray text-[40px] font-bold leading-normal pb-10 tracking-[-.5px]'>Dentrey Nasıl Çalışır?</h2>
                        <p className='xs:w-5/6 lg:w-1/2 m-auto text-center text-gray leading-normal text-18 font-light'>Dentrey ile çok kolay bir şekilde üye olma zorunluluğu olmadan istediğiniz klinikten istediğiniz zaman randevu alabilirsiniz.</p>
                    </div>
                    <div className='flex justify-evenly gap-20 text-center xs:flex-col lg:flex-row pb-20'>
                        <div>
                            <img className='mx-auto mb-10' src={dashboardDoctor} alt="" />
                            <h3 className='text-[24px] text-mainPageGray font-bold tracking-[-.5px] mb-5'>Hekiminizi <span className='font-light'>Seçin</span></h3>
                            <p className='text-[16px] text-mainPageP pb-5 leading-6'>Yüzlerce diş hekimi arasından sizin için en uygun olanı seçin.</p>
                        </div>
                        <div>
                            <img className='mx-auto mb-10' src={dashboardCalendar} alt="" />
                            <h3 className='text-[24px] text-mainPageGray font-bold tracking-[-.5px] mb-5'>Randevunuzu <span className='font-light'>Planlayın</span></h3>
                            <p className='text-[16px] text-mainPageP pb-5 leading-6'>Sizin için en uygun zamanı seçerek tedavi zamanını kendiniz planlayın.</p>
                        </div>
                        <div>
                            <img className='mx-auto mb-10' src={dashboardClinic} alt="" />
                            <h3 className='text-[24px] text-mainPageGray font-bold tracking-[-.5px] mb-5'>Tedaviye <span className='font-light'>Başlayın</span></h3>
                            <p className='text-[16px] text-mainPageP pb-5 leading-6'>Kendi belirlediğiniz doktora, kendi belirlediğiniz zamanda tedavi olun.</p>
                        </div>
                    </div>
                </section>
            <Footer/>
            </div>    

            {showRegister ? (
            <RegisterModal setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>            
            ) : null}   

            {showLogin ? (
            <LoginModal setShowLogin={setShowLogin} setShowRegister={setShowRegister} setShowForgotPassword={setShowForgotPassword}/>            
            ) : null}   

            {showForgotPassword ? (
            <ForgotPassword setShowLogin={setShowLogin} setShowForgotPassword={setShowForgotPassword}/>            
            ) : null}

        </div>       
    )
}

export default MainPage