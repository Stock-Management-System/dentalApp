import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/dashboard/Footer';
import NavBar from '../../components/dashboard/NavBar';
import dashboardIntro from '../../assets/dashboardIntro.png';
import dashboardDoctor from '../../assets/dashboard_doctor.png';
import dashboardCalendar from '../../assets/dashboard_calendar.png';
import dashboardClinic from '../../assets/dashboard_clinic.png';
import {BsCheck2} from "react-icons/bs"


const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    return (   
        <div className='h-full relative'>
            <NavBar setShowModal={setShowModal}/>      
            <div  style={{borderBottomRightRadius:'100% 100%'}} className='bg-white h-[100vh] w-[94vw] '>
            <div className='h-[110rem] w-full bg-container absolute -z-10'> </div>
                <section  className='flex pt-24 w-[105%] items-center min-h-screen lg:px-20 bg-transparent xs:flex-col lg:flex-row mb-10'>
                    <div className='lg:w-1/2 xs:w-5/6 xs:text-center lg:text-left  pb-10'>
                        <p className='text-blue1 text-44'>Dentrey Randevu Sistemi <br /><span className='text-mainPageGray'>çok yakında hizmetinizde</span></p>                        
                        <p className='text-18 lg:max-w-xl mt-5'>6000 den fazla hekim ve 900 den fazla diş kliniği ile dentrey kullanıcıları artık daha mutlu ve daha huzurlu. Üstelik gülerken çekimser olmak zorunda değil.</p>
                        <div className='flex xs:flex-col lg:flex-row mt-6 xs:items-center gap-5'>
                            <Link to='#' style={{border:'1px solid #3beaf5'}} className='h-10 w-44  text-white tracking-[.5px] bg-turquaz flex justify-center items-center btn rounded-full  hover:bg-white hover:text-turquaz'>Randevu Sorgula</Link>        
                            <Link to='#' style={{border:'1px solid #ff5acd'}} className='h-10 w-44  text-white tracking-[.5px] bg-pink flex justify-center items-center btn rounded-full  hover:bg-white hover:text-pink'>Randevu Al</Link>
                        </div>                    
                    </div>
                    <div className='w-1/2 h-[500px] min-w-[600px] overflow-hidden relative xs:hidden md:block select-none'>
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
            {showModal ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-[60rem]  bg-white outline-none focus:outline-none">
                                <form action="" className='p-10 w-1/2'>
                                    <h2 className='text-[24px] font-bold'>Kaydol</h2>
                                    <div className='flex-row'>
                                        <label htmlFor="username" className='form-label'>Username</label>                                       
                                        <input 
                                        id='username'
                                        type="text" placeholder=""
                                        className="px-4 py-2 w-full  border-b-[1px] border-b-[#a8a8a8] shadow-sm text-base form-underline  focus:outline-none focus:border-blue1"
                                        />
                                    </div>
                                    
                                </form>
                                
                                <section className='w-1/2 bg-blue1 text-white p-10'>
                                    <h2 className='text-[24px] font-bold pb-5'>Zaten üye misiniz?</h2>
                                    <p className='text-[38px] font-light py-5'>
                                        Hemen giriş yapın ve size<span className='font-bold'> Özel Paneli </span>kullanın.
                                    </p>
                                    <ul  className='font-light text-14 list-inside ]'>
                                        <li><BsCheck2 className='inline-block mr-2' />Hasta Randevu Sistemi</li>
                                        <li><BsCheck2 className='inline-block mr-2' />Hasta Kayıt Altyapısı</li>
                                        <li><BsCheck2 className='inline-block mr-2' />Poliklinik Yönetimi</li>
                                    </ul>
                                    <button
                                        style={{ textTransform: "none", boxShadow: "0 0 30px -12px #5616f5" }}
                                        className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-pink"
                                        type="button"
                                        onClick={() => {setShowLogin(true); setShowModal(false)}}
                                        >
                                        Giriş Yap
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                    
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            
        ) : null}   
            {showLogin ? (
            <>
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-[60rem]  bg-white outline-none focus:outline-none">
                            <section className='w-1/2 bg-pink text-white p-10'>
                                    <h2 className='text-[24px] font-bold pb-5'>Dentrey'e Üye Ol!</h2>
                                    <p className='text-[38px] font-light py-5'>
                                        Hemen bize katılın<span className='font-bold'> Ücretsiz </span>kullanın.
                                    </p>
                                    <ul style={{listStyleType:{BsCheck2}}} className='font-light text-14 list-inside ]'>
                                        <li><BsCheck2 className='inline-block mr-2' />Hasta Randevu Sistemi</li>
                                        <li><BsCheck2 className='inline-block mr-2' />Hasta Kayıt Altyapısı</li>
                                        <li><BsCheck2 className='inline-block mr-2' />Poliklinik Yönetimi</li>
                                    </ul>
                                    <button
                                        style={{ textTransform: "none", boxShadow: "0 0 30px -12px #5616f5" }}
                                        className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-blue1"
                                        type="button"
                                        onClick={() => {setShowModal(true); setShowLogin(false)}}
                                        >
                                        Kaydol
                                    </button>
                                </section>
                                <div className='p-10 w-1/2'>
                                    <h2 className='text-[24px] font-bold'>Üye Girişi</h2>                                   

                                    <form action="#" className=' py-[20px]'>
                                        <div className='flex-row pb-5'>
                                            <label htmlFor="email" className='form-label'>Email</label>                                       
                                            <input 
                                            id='email'
                                            type="email" placeholder=""
                                            className=" py-2 w-full  border-b-[1px] border-b-[#a8a8a8] shadow-sm text-base form-underline  focus:outline-none focus:border-blue1"
                                            />
                                        </div>
                                        <div className='flex-row'>
                                            <label htmlFor="password" className='form-label'>Password</label>                                       
                                            <input 
                                            id='password'
                                            type="password" placeholder=""
                                            className=" py-2 w-full  border-b-[1px] border-b-[#a8a8a8] shadow-sm text-base form-underline  focus:outline-none focus:border-blue1"
                                            />
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <input type="checkbox"  className="checkbox checkbox-primary" />
                                                    <span className="label-text pl-2">Remember me</span> 
                                                </label>
                                            </div>
                                            <p className=''>Şifremi unuttum</p>
                                        </div>

                                        <button
                                            style={{ textTransform: "none"}}
                                            className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold bg-blue1 text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-blue1 hover:border-blue1"
                                            type="submit"
                                            onClick={() => {setShowLogin(true); setShowModal(false)}}
                                            >
                                            Giriş Yap
                                        </button>
                                        
                                    </form>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            
        ) : null}   
        </div>       
    )
}

export default MainPage