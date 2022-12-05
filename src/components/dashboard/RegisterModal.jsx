import React from "react";
import { BsCheck2 } from "react-icons/bs";

const RegisterModal = ({ setShowRegister, setShowLogin }) => {
    const close = () => {
        setShowRegister(false);
        
    };
    return (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-[calc(50vw-30rem)] inset-y-16 min-h-max min-w-max z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto max-w-full">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-[60rem]  bg-white outline-none focus:outline-none">

                <form action="" className="p-10 w-1/2">
                <h2 className="text-[24px] font-bold">Kaydol</h2>
                <div className="flex-row">
                    <label htmlFor="username" className="form-label">
                    Username
                    </label>
                    <input
                    id="username"
                    type="text"
                    placeholder=""
                    className="px-4 py-2 w-full  border-b-[1px] border-b-[#a8a8a8] shadow-sm text-base form-underline  focus:outline-none focus:border-blue1"
                    />
                </div>
                </form>

                <section className="w-1/2 bg-blue1 text-white p-10">
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
                    setShowLogin(true);
                    setShowRegister(false);
                    }}
                >
                    Giriş Yap
                </button>
                </section>

            </div>
            </div>
        </div>
        <div
            onClick={() => close()}
            className="opacity-25 fixed inset-0 z-40 bg-black h-full w-full"
        ></div>
        </>
    );
};

export default RegisterModal;
