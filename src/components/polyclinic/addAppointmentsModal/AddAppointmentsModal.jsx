import React, { useState } from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import FirstStepAddAppointment from './FirstStepAddAppointment';
import SecondStepAddAppointment from './SecondStepAddAppointment';
import ThirdStepAddAppointment from './ThirdStepAddAppointment';
import { ilData } from '../../../helpers/ilData';

const AddAppointmentsModal = () => {
    const [modalToggle, setModalToggle] = useState(false);
    const [stepper, setStepper] = useState(1);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [date, setDate] = useState("");
    const [clock, setClock] = useState("");
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        dadyName: "",
        birthDay: "",
        phone: "",
        email: "",
        city: ilData[0]["text"],
        town: ilData[0]["districts"][0]["text"]
    });
    const doctorAppointmentStatus = [
        {
            doctorId: 1,
            doctorName: "Dt.Mehtap Uysal Bilginoğlu",
            appointmentTime: ["09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]

        },
        {
            doctorId: 2,
            doctorName: "Dt.Mehmet Kılıç",
            appointmentTime: ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "19:00", "19:15", "19:30", "19:45", "20:00"]
        },
        {
            doctorId: 3,
            doctorName: "Uzm.Dt.Fırat Gök",
            appointmentTime: ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "19:00", "19:15", "19:30", "19:45", "20:00"]
        },
        {
            doctorId: 4,
            doctorName: "Doç.Dr.Kenan Cantekin",
            appointmentTime: ["18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00"]

        },
        {
            doctorId: 5,
            doctorName: "Dt.Pınar Burcu Sarıdağ",
            appointmentTime: ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]
        }
    ]

    const handleSubmitFirst = (e) => {
        e.preventDefault();
        // setPersonalInfo({
        //     firstName: "",
        //     lastName: "",
        //     dadyName: "",
        //     birthDay: "",
        //     phone: "",
        //     email: "",
        //     city: ilData[0]["text"],
        //     town: ilData[0]["districts"][0]["text"]
        // })
        setStepper(2)
    }
    const handleSubitSecond = (e) => {
        e.preventDefault();

        setStepper(3)
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
                className="btn-primary mr-3 btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1">
                <BiMessageSquareAdd className='mr-1' /> Randevu Oluştur
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

                                                <div className="flex items-center w-3/4 mt-6">
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
                                            <FirstStepAddAppointment
                                                handleSubmit={handleSubmitFirst}
                                                setPersonalInfo={setPersonalInfo}
                                                personalInfo={personalInfo}
                                            />
                                            :
                                            stepper === 2
                                                ?
                                                <SecondStepAddAppointment
                                                    handleSubmit={handleSubitSecond}
                                                    handleSubmitBackward={handleSubmitBackward}
                                                    setSelectedDoctor={setSelectedDoctor}
                                                    selectedDoctor={selectedDoctor}
                                                    doctorAppointmentStatus={doctorAppointmentStatus}
                                                    date={date}
                                                    setDate={setDate}
                                                    clock={clock}
                                                    setClock={setClock}
                                                />
                                                :
                                                stepper === 3
                                                &&
                                                <ThirdStepAddAppointment
                                                    handleSubmit={null}
                                                    handleSubmitBackward={handleSubmitBackward}
                                                    personalInfo={personalInfo}
                                                    setSelectedDoctor={setSelectedDoctor}
                                                    selectedDoctor={selectedDoctor}
                                                    doctorAppointmentStatus={doctorAppointmentStatus}
                                                    date={date}
                                                    clock={clock}
                                                />
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