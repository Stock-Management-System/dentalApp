import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";

const ForgotPassword = ({setShowLogin, setShowForgotPassword}) => {

    const [email, setEmail] = useState("");

    // const close = () => {
    //     setShowForgotPassword(false);
    //     console.log("close");
    // };

const handleSubmit = (e) => {
    e.preventDefault();
    // send login info
    console.log("close");
    setEmail("");
    setShowForgotPassword(false);
};

return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed xs:inset-x-[calc(50vw-14rem)] lg:inset-x-[calc(50vw-30rem)] xs:inset-y-2 lg:inset-y-16 min-h-max min-w-max z-50 outline-none focus:outline-none">
        <div className="relative w-auto  mx-auto max-w-full">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-row xs:w-[28rem] lg:w-[60rem]  bg-white outline-none focus:outline-none">
            <div className="p-10 xs:w-full lg:w-1/2">
            <h2 className="text-[24px] font-bold">Şifre Sıfırlama</h2>

            <form className=" py-[20px]" onSubmit={handleSubmit}>
                <div className="flex-row pb-5">
                <label htmlFor="email" className="form-label text-formGray text-14">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className=" py-2 w-full  border-b-[1px] border-b-[#a8a8a8] shadow-sm text-base form-underline  focus:outline-none focus:border-blue1"
                />
                </div>
                <button
                style={{ textTransform: "none" }}
                className="h-10 w-40 mt-10 p-[10px 30px] text-14 tracking-[1px] font-bold bg-blue1 text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-blue1 hover:border-blue1"
                type="submit"
                // onClick={() => {
                //     setShowLogin(true);
                //     setShowRegister(false);
                // }}
                >
                Şifremi Sıfırla
                </button>
                <button
                    style={{
                    textTransform: "none",
                    boxShadow: "0 0 30px -12px #5616f5",
                    }}
                    className="lg:hidden col-span-2 h-10 w-28  p-[10px 30px] ml-[4.5rem] text-14 tracking-[.5px] font-bold text-white bg-pink items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-pink hover:border-pink"
                    type="button"
                    onClick={() => {
                        setShowForgotPassword(false);
                        setShowLogin(true)
                    }}
                >
                    Giriş Yap
                </button>
            </form>
            </div>

            <section className="w-1/2 bg-blue1 text-white p-10 xs:hidden lg:block rounded-r-lg">
            <h2 className="text-[24px] font-bold pb-5">Zaten üye misiniz?</h2>
            <p className="text-[38px] font-light py-5">
                Hemen giriş yapın ve size
                <span className="font-bold"> Özel Paneli </span>kullanın.
            </p>
            <ul className="font-light text-14 list-inside ]">
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
                className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-pink"
                type="button"
                onClick={() => {
                    setShowForgotPassword(false);
                    setShowLogin(true)
                }}
            >
                Giriş Yap
            </button>
            </section>
        </div>
        </div>
    </div>
    <div onClick={() => setShowForgotPassword(false)}
        className="opacity-25 fixed inset-0 z-40 bg-black h-full w-full"
    ></div>
    </>
);
};

export default ForgotPassword;
