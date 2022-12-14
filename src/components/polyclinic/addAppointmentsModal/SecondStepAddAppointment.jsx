import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const SecondStepAddAppointment = ({ handleSubmit, handleSubmitBackward, setSelectedDoctor, selectedDoctor, doctorAppointmentStatus, date, setDate, clock, setClock }) => {
    const [isChecked, setIsChecked] = useState(true)
    const sabah = ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30"]
    const ogle = ["13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]
    const aksam = ["18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00"]

    const current = doctorAppointmentStatus.filter((item) => item.doctorName === selectedDoctor)
    console.log(date)
    console.log(clock)
    console.log(selectedDoctor)
    console.log(current)
    return (
        <div className='m-4'>
            <div className="flex xs:justify-around md:justify-end px-4 py-2 mt-5 items-center sm:overflow-hidden sm:rounded-md mb-4">
                <h1 className='md:hidden'>Randevu Bilgileri</h1>
                <div className="flex xs:flex-col md:flex-row justify-between items-center gap-4 w-3/5">
                    <select className="select select-bordered select-sm focus:input-primary w-full max-w-xs" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                        {/* <option disabled selected>Doktor Seçiniz</option> */}
                        {doctorAppointmentStatus.map((item, index) => (
                            <option key={index} value={item.doctorName}>{item.doctorName}</option>
                        ))}
                    </select>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
            </div>
            <form className='w-full px-2'>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center gap-1'>
                        <h4 className='w-40'>Öğleden Önce</h4>
                        <div className='flex flex-wrap gap-x-1 w-full'>
                            {
                                sabah.map((item, index) => (
                                    <div key={index}>
                                        <input type="radio" id={item} value={item}
                                            // disabled={!(current[0].appointmentTime?.includes(item))} 
                                            name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                        <label
                                            htmlFor={item}
                                            className="cursor-pointer border rounded-3xl text-14 px-5 peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white">
                                            {item}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-1 my-2'>
                        <h4 className='w-40'>Öğleden Sonra</h4>
                        <div className=' flex flex-wrap gap-x-1 w-full'>
                            {
                                ogle.map((item, index) => (
                                    <div key={index}>
                                        <input type="radio" id={item} value={item}
                                            // disabled={!(current[0].appointmentTime.includes(item))}
                                            name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                        <label htmlFor={item} className="cursor-pointer border rounded-3xl text-14 px-5 peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white">
                                            {item}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-1'>
                        <h4 className='w-40'>Akşam</h4>
                        <div className='flex flex-wrap gap-x-1 w-full'>
                            {
                                aksam.map((item, index) => (
                                    <div key={index}>
                                        <input type="radio" id={item} value={item}
                                            // disabled={!(current[0].appointmentTime?.includes(item))} 
                                            name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                        <label htmlFor={item} className="cursor-pointer border rounded-3xl text-14 px-5 peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white">
                                            {item}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between mx-4 mt-7 rounded-b">
                    <button
                        className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                        onClick={handleSubmitBackward}
                    >
                        <AiOutlineLeft className='mr-4' />
                        Önceki Adım
                    </button>
                    <button
                        className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sonraki Adım
                        <AiOutlineRight className='ml-4' />
                    </button>
                </div>
            </form >
        </div >
    )
}

export default SecondStepAddAppointment
