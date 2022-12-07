import React, { useState } from 'react'
import { AiOutlineFileAdd, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import FirstStepAddAppointment from './FirstStepAddAppointment'
import SecondStepAddAppointment from './SecondStepAddAppointment'
import ThirdStepAddAppointment from './ThirdStepAddAppointment'

const AddAppointmentsModal = () => {
    const [modalToggle, setModalToggle] = useState(false)
    const [stepper, setStepper] = useState(1)

    const handleSubmitForward = (e) => {
        e.preventDefault();
        setStepper(stepper <= 2 && stepper + 1)
    }
    const handleSubmitBackward = (e) => {
        e.preventDefault();
        setStepper(stepper > 1 ? stepper - 1 : 1)
    }
    return (
        <>
            {/* The button to open modal */}
            <label
                onClick={() => setModalToggle(true)}
                htmlFor="add-appointment"
                className="btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1">
                <AiOutlineFileAdd /> Randevu Oluştur
            </label>

            {/* Put this part before </body> tag */}
            {
                modalToggle
                    ?
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none"
                        >
                            <div className="relative my-6 mx-auto max-w-full">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[60rem]">
                                    {/*header*/}
                                    <div className="flex items-center justify-between bg-blue1 rounded-t py-2">
                                        <h3 className="ml-4 text-white font-semibold">
                                            Yeni Randevu Oluştur
                                        </h3>
                                        <button
                                            className="text-xl mr-5 text-white"
                                            onClick={() => setModalToggle(false)}
                                        >
                                            <span className="text-3xl text-white">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-3 flex-auto">
                                        <div className="px-4 sm:px-0">
                                            {/* <!-- component --> */}
                                            <div className="flex flex-col justify-center items-center">

                                                <div className="flex items-center w-3/4">
                                                    <div className="flex items-center relative">
                                                        <div
                                                            onClick={() => setStepper(1)}
                                                            className={`cursor-pointer rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-blue1 flex items-center justify-center text-xl ${stepper === 1 && 'bg-blue1 text-white'}`}>
                                                            1
                                                        </div>
                                                        <div className="absolute top-0 -ml-8 text-center mt-12 whitespace-nowrap uppercase">Hasta Bilgileri</div>
                                                    </div>
                                                    <div className="flex-auto border-t-2 border-blue1 transition duration-500 ease-in-out mx-1"></div>
                                                    <div className="flex items-center relative">
                                                        <div
                                                            onClick={() => setStepper(2)}
                                                            className={`cursor-pointer rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-blue1 flex items-center justify-center text-xl  ${stepper === 2 && 'bg-blue1 text-white'}`}>
                                                            2
                                                        </div>
                                                        <div className="absolute top-0 -ml-11 text-center mt-12 whitespace-nowrap uppercase">Randevu Bilgileri</div>
                                                    </div>
                                                    <div className="flex-auto border-t-2 border-blue1 transition duration-500 ease-in-out mx-1"></div>
                                                    <div className="flex items-center text-gray-500 relative">
                                                        <div
                                                            onClick={() => setStepper(3)}
                                                            className={`cursor-pointer rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-blue1 flex items-center justify-center text-xl ${stepper === 3 && 'bg-blue1 text-white'}`}>
                                                            3
                                                        </div>
                                                        <div className="absolute top-0 -ml-12 text-center mt-12 whitespace-nowrap uppercase">Önizleme ve Onay</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        stepper === 1
                                            ?
                                            <FirstStepAddAppointment handleSubmit={handleSubmitForward} />
                                            :
                                            stepper === 2
                                                ?
                                                <SecondStepAddAppointment handleSubmit={handleSubmitForward} handleSubmitBackward={handleSubmitBackward} />
                                                :
                                                stepper === 3
                                                &&
                                                <ThirdStepAddAppointment handleSubmit={handleSubmitForward} handleSubmitBackward={handleSubmitBackward} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div
                            // onClick={() => setModalToggle(false)}
                            className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                    :
                    null
            }

        </>
    )
}

export default AddAppointmentsModal