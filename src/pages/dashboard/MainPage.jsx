import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/dashboard/Footer';
import NavBar from '../../components/dashboard/NavBar';
import dashboardIntro from '../../assets/dashboardIntro.png';
import dashboardDoctor from '../../assets/dashboard_doctor.png';
import dashboardCalendar from '../../assets/dashboard_calendar.png';
import dashboardClinic from '../../assets/dashboard_clinic.png';


const MainPage = () => {
    return (   
        <div className='h-full relative'>
            <NavBar/>      
            <div style={{borderBottomRightRadius:'100% 100%'}} className='bg-white h-[100vh] w-[94vw]'>
            <div className='h-[115rem] w-screen bg-container absolute -z-10'> </div>
                <section className='flex pt-40 w-screen items-center min-h-screen md:px-20 bg-transparent xs:flex-col lg:flex-row'>
                    <div className='md:w-1/2 mb-40 xs:w-5/6'>
                        <p className='text-blue1 xs:text-5xl xl:text-64'>Dentrey Randevu Sistemi <br /><span className='text-mainPageGray'>çok yakında hizmetinizde</span></p>                        
                        <p className='text-18 max-w-2xl mt-5'>6000 den fazla hekim ve 900 den fazla diş kliniği ile dentrey kullanıcıları artık daha mutlu ve daha huzurlu. Üstelik gülerken çekimser olmak zorunda değil.</p>
                        <div className='flex xs:flex-col md:flex-row mt-6 xs:items-center md:ml-0'>
                            <Link to='#' style={{border:'1px solid #3beaf5'}} className='mb-5 h-10 w-44  text-white bg-turquaz flex justify-center items-center btn rounded-full mx-5 hover:bg-white hover:text-turquaz'>Randevu Sorgula</Link>        
                            <Link to='#' style={{border:'1px solid #ff5acd'}} className='mb-5 h-10 w-44  text-white bg-pink flex justify-center items-center btn rounded-full  hover:bg-white hover:text-pink'>Randevu Al</Link>
                        </div>                    
                    </div>
                    <div className='w-[800px] h-[550px] min-w-[600px] ml-20 overflow-hidden relative xs:hidden md:block'>
                        <img style={{}} className='absolute left-0 top-0  min-h-[500px] min-w-[600px] pl-5' src={dashboardIntro} alt="dashboardIntro"/>
                    </div>

                </section>
                <section className='w-screen  px-[100px] bg-container lg:mt-28'>
                    <div className='text-center'>
                        <h2 className='text-mainPageGray text-[3.8rem] font-bold leading-normal pb-10 tracking-[-.5px]'>Dentrey Nasıl Çalışır?</h2>
                        <p className='xs:w-5/6 lg:w-1/2 m-auto text-center text-gray leading-normal text-[1.8rem] pb-20 font-light'>Dentrey ile çok kolay bir şekilde üye olma zorunluluğu olmadan istediğiniz klinikten istediğiniz zaman randevu alabilirsiniz.</p>
                    </div>
                    <div className='flex justify-evenly gap-32 text-center xs:flex-col lg:flex-row pb-20'>
                        <div>
                            <img className='mx-auto mb-10' src={dashboardDoctor} alt="" />
                            <h3 className='text-[2.4rem] text-mainPageGray font-bold tracking-[-.5px] mb-5'>Hekiminizi <span className='font-light'>Seçin</span></h3>
                            <p className='text-[1.6rem] text-mainPageP pb-5 leading-6'>Yüzlerce diş hekimi arasından sizin için en uygun olanı seçin.</p>
                        </div>
                        <div>
                            <img className='mx-auto mb-10' src={dashboardCalendar} alt="" />
                            <h3 className='text-[2.4rem] text-mainPageGray font-bold tracking-[-.5px] mb-5'>Randevunuzu <span className='font-light'>Planlayın</span></h3>
                            <p className='text-[1.6rem] text-mainPageP pb-5 leading-6'>Sizin için en uygun zamanı seçerek tedavi zamanını kendiniz planlayın.</p>
                        </div>
                        <div>
                            <img className='mx-auto mb-10' src={dashboardClinic} alt="" />
                            <h3 className='text-[2.4rem] text-mainPageGray font-bold tracking-[-.5px] mb-5'>Tedaviye <span className='font-light'>Başlayın</span></h3>
                            <p className='text-[1.6rem] text-mainPageP pb-5 leading-6'>Kendi belirlediğiniz doktora, kendi belirlediğiniz zamanda tedavi olun.</p>
                        </div>
                    </div>
                </section>
            <Footer/>
            </div>       
        </div>       
    )
}

export default MainPage