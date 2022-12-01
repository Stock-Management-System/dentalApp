import React from "react";

const Modal = ({showModal, setShowModal}) => {
   
    return (
        <>
        <button
            style={{textTransform:'none', boxShadow:'0 0 30px -12px #5616f5'}} 
            className='h-8 xs:w-4/5 lg:w-28 text-blue1 items-center btn-white rounded-full xs:m-auto xs:mt-3 lg:mt-0 lg:mr-3 hover:bg-blue1 hover:text-white'
            type="button"
            onClick={() => setShowModal(true)}
        >
            Giriş Yap
        </button>        
        {showModal ? (
            <>
            <div className="w-96 h-20 bg-container">
                <div className="relative w-auto my-6 mx-auto max-w-full">
                {/*content*/}
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
    );
};

export default Modal;
