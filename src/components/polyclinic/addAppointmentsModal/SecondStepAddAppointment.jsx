import React from 'react';
import { AiOutlineFileAdd, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


const SecondStepAddAppointment = ({ handleSubmit, handleSubmitBackward }) => {
    const sabah = ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30"]
    const ogle = ["13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]
    const aksam = ["18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00"]
    return (
        <div className='mx-4'>
            <div className="flex justify-between px-4 py-2 mt-12 items-center shadow sm:overflow-hidden sm:rounded-md">
                <h1>Randevu Bilgileri</h1>
                <div className="flex justify-center items-center gap-4">
                    <select className="select select-bordered select-sm focus:input-primary">
                        <option disabled selected>Doktor Seçiniz</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                    <input type="date" className="input input-bordered input-sm focus:input-primary w-full max-w-xs" />
                </div>
            </div>
            <form className='w-full p-2'>
                <div >
                    <div className='flex justify-between items-center gap-1'>
                        <h4>Öğleden Önce</h4>
                        <div className='flex gap-1'>
                            {
                                sabah.map((item, index) => (
                                    <div key={index}>
                                        <input type="checkbox" id={item} value={item} name='' className="hidden peer" />
                                        <label htmlFor={item} className="peer-checked:bg-blue1 peer-checked:text-white cursor-pointer border rounded-3xl p-1 px-1 bg-turquaz">
                                            {item}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-1 my-3'>
                        <h4>Öğleden Sonra</h4>
                        <div className='flex flex-wrap gap-1'>
                            {
                                ogle.map((item, index) => (
                                    <div key={index}>
                                        <input type="checkbox" id={item} value={item} name='' className="hidden peer" />
                                        <label htmlFor={item} className="peer-checked:bg-blue1 peer-checked:text-white cursor-pointer border rounded-3xl p-1 px-1 bg-turquaz">
                                            {item}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-1'>
                        <h4>Akşam</h4>
                        <div className='flex flex-wrap items-start gap-1 w-[85%]'>
                            {
                                aksam.map((item, index) => (
                                    <div key={index}>
                                        <input type="checkbox" id={item} value={item} name='' className="hidden peer" />
                                        <label htmlFor={item} className="peer-checked:bg-blue1 peer-checked:text-white cursor-pointer border rounded-3xl p-1 px-1 bg-turquaz">
                                            {item}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between mx-4 p-2 rounded-b">
                    <button
                        className="bg-blue1 text-white btn btn-sm rounded-3xl hover:bg-blue1"
                        onClick={handleSubmitBackward}
                    >
                        <AiOutlineLeft className='mr-4' />
                        Önceki Adım
                    </button>
                    <button
                        className="bg-blue1 text-white btn btn-sm rounded-3xl hover:bg-blue1"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sonraki Adım
                        <AiOutlineRight className='ml-4' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SecondStepAddAppointment
