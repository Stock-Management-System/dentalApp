import React, { useState } from 'react'
import { AiOutlineFileAdd, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const AddAppointmentsModal = () => {
    const [modalToggle, setModalToggle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // sendInfo(addNote, typeRontgen, addRontgen[0].path)



        setModalToggle(false);

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
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-full">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[70rem] bg-white outline-none focus:outline-none">
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
                                        <div className="">
                                            <div className="">
                                                <div className="px-4 sm:px-0">
                                                    {/* <!-- component --> */}
                                                    <div className="flex flex-col justify-center items-center">

                                                        <div className="flex items-center w-3/4">
                                                            <div className="flex items-center relative">
                                                                <div
                                                                    onClick={null}
                                                                    className="cursor-pointer rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-blue1 flex items-center justify-center text-xl">
                                                                    1
                                                                </div>
                                                                <div className="absolute top-0 -ml-8 text-center mt-12 whitespace-nowrap uppercase">Hasta Bilgileri</div>
                                                            </div>
                                                            <div className="flex-auto border-t-2 border-blue1 transition duration-500 ease-in-out mx-1"></div>
                                                            <div className="flex items-center relative">
                                                                <div
                                                                    onClick={null}
                                                                    className="cursor-pointer rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-blue1 flex items-center justify-center text-xl">
                                                                    2
                                                                </div>
                                                                <div className="absolute top-0 -ml-11 text-center mt-12 whitespace-nowrap uppercase">Randevu Bilgileri</div>
                                                            </div>
                                                            <div className="flex-auto border-t-2 border-blue1 transition duration-500 ease-in-out mx-1"></div>
                                                            <div className="flex items-center text-gray-500 relative">
                                                                <div
                                                                    onClick={null}
                                                                    className="cursor-pointer rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-blue1 flex items-center justify-center text-xl">
                                                                    3
                                                                </div>
                                                                <div className="absolute top-0 -ml-12 text-center mt-12 whitespace-nowrap uppercase">Önizleme ve Onay</div>
                                                            </div>
                                                        </div>

                                                        {/* <div className="mt-8 p-4">
                                                            <div>
                                                                <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Full Name</div>
                                                                <div className="flex flex-col md:flex-row">
                                                                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                                                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                                            <input placeholder="First Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                                                                    </div>
                                                                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                                                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                                            <input placeholder="Last Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col md:flex-row">
                                                                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                                                        <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Username</div>
                                                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                                            <input placeholder="Just a hint.." className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                                                                    </div>
                                                                    <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                                                        <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div>
                                                                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                                            <input placeholder="jhon@doe.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex p-2 mt-4">
                                                                <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">Previous</button>
                                                                <div className="flex-auto flex flex-row-reverse">
                                                                    <button className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition">Next</button>
                                                                    <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-200 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">Skip</button>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between px-4 py-2 mt-12 items-center shadow sm:overflow-hidden sm:rounded-md">
                                                <h1>Hasta Bilgiler</h1>
                                                <div className="flex justify-center items-center gap-4">
                                                    <label className="label-text text-center uppercase">Hasta TC Kimlik No</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Hasta TC Kimlik No"
                                                        className="input input-bordered w-full max-w-xs"
                                                        value={null}

                                                    />
                                                    <button
                                                        onClick={null}
                                                        className="btn btn-sm btn-outline btn-primary rounded-full capitalize"
                                                    >
                                                        Sorgula
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-between mx-4 p-2 rounded-b">
                                        <button
                                            className="bg-blue1 text-white btn btn-sm rounded-3xl hover:bg-blue1"
                                            onClick={() => setModalToggle(false)}
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
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                    :
                    null
            }

        </>
    )
}

export default AddAppointmentsModal