import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const LoginModal = ({ setShowRegister, setShowLogin, setShowForgotPassword }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const navigate = useNavigate();

    const close = () => {
        setShowLogin(false);        
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        // send login info        
        setEmail('');
        setPassword('');
        setIsRemember(false);  
        setShowLogin(false);   
        navigate("/poliklinik")  
    };

    return (
        <>
        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed xs:inset-x-[2.5vw] sm:inset-x-[calc(50vw-14rem)] lg:inset-x-[calc(50vw-30rem)] inset-y-[calc(50vh-216px)] min-h-max min-w-max z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-row xs:w-[95vw] sm:w-[28rem] lg:w-[60rem]  bg-white outline-none focus:outline-none">
                <section className="w-1/2 bg-pink text-white p-10 xs:hidden lg:block rounded-l-lg">
                <h2 className="text-[24px] font-bold pb-5">Dentrey'e Üye Ol!</h2>
                <p className="text-[38px] font-light py-5">
                    Hemen bize katılın<span className="font-bold"> Ücretsiz </span>
                    kullanın.
                </p>
                <ul
                    style={{ listStyleType: { BsCheck2 } }}
                    className="font-light text-14 list-inside ]"
                >
                    <li>
                    <BsCheck2 className="inline-block mr-2" />
                    Hasta Randevu Sistemi
                    </li>
                    <li>
                    <BsCheck2 className="inline-block mr-2" />
                    Hasta Kayıt Altyapısı
                    </li>
                    <li>
                    <BsCheck2 className="inline-block mr-2" />
                    Poliklinik Yönetimi
                    </li>
                </ul>
                <button
                    style={{
                    textTransform: "none",
                    boxShadow: "0 0 30px -12px #5616f5",
                    }}
                    className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-blue1"
                    type="button"
                    onClick={() => {
                    setShowRegister(true);
                    setShowLogin(false);
                    }}
                >
                    Kaydol
                </button>
                </section>
                <div className="p-10 xs:w-full lg:w-1/2">
                <h2 className="text-[24px] font-bold">Üye Girişi</h2>

                <form action="#" className=" py-[20px]" onSubmit={handleSubmit}>
                    <div className="flex-row pb-5">
                    <label htmlFor="email" className="form-label text-formGray text-14">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        className=" py-2 w-full  border-b-[1.5px] border-b-formGray shadow-sm text-base transition-all duration-1000 outline-none focus:border-blue1"
                    />
                    </div>
                    <div className="flex-row">
                    <label htmlFor="password" className="form-label text-formGray text-14">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                        className=" py-2 w-full  border-b-[1.5px] border-b-formGray shadow-sm text-base transition-all duration-1000 outline-none focus:border-blue1"
                    />
                    </div>
                    <div className="flex items-center justify-between">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                        <input
                        
                            value={isRemember}
                            onClick={()=>setIsRemember(!isRemember)}
                            type="checkbox"    
                            className="checkbox checkbox-primary"
                            checked={isRemember}
                            readOnly
                        />
                        <span className="label-text pl-2" >Beni hatırla</span>
                        </label>
                    </div>
                    <p className="btn-ghost text-pink hover:text-blue1 hover:bg-white cursor-pointer" onClick={()=>{setShowForgotPassword(true); setShowLogin(false)}}>Şifremi unuttum</p>
                    </div>

                    <button
                    style={{ textTransform: "none" }}
                    className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold bg-blue1 text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-blue1 hover:border-blue1"
                    type="submit"
                    onClick={() => {
                        setShowLogin(true);
                        setShowRegister(false);
                    }}
                    >
                    Giriş Yap
                    </button>
                    <button
                    style={{
                    textTransform: "none",
                    boxShadow: "0 0 30px -12px #5616f5",
                    }}
                    className="lg:hidden h-10 w-28  p-[10px 30px] ml-[7.5rem] text-14 tracking-[.5px] font-bold text-white bg-pink items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-pink hover:border-pink"
                    type="button"
                    onClick={() => {
                    setShowRegister(true);
                    setShowLogin(false);
                    }}
                >
                    Kaydol
                </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div onClick={()=> close()} className="opacity-25 fixed inset-0 z-40 bg-black h-full w-full"></div>
        
        </>
    );
};

export default LoginModal;
