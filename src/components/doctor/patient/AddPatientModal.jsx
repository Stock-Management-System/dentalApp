import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg'
import { ilData } from '../../../helpers/ilData';

const AddPatientModal = ({ setShowModal }) => {
    const [addPatient, setAddPatient] = useState({
        identity: "",
        firstName: "",
        lastName: "",
        birthDay: "",
        dadyName: "",
        phoneNumber: "",
        email: "",
        city: ilData[0]["text"],
        village: ilData[0]["districts"][0]["text"],
    })

    const handleChange = (e) => {
        setAddPatient({ ...addPatient, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setAddPatient({
            identity: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            dadyName: "",
            phoneNumber: "",
            email: "",
            city: ilData[0]["text"],
            village: ilData[0]["districts"][0]["text"],
        })
        setShowModal(false)
    }
    console.log(addPatient);
    return (
        <div>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blue2 bg-opacity-20">
                <div className="relative mx-auto max-w-fit">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center justify-between bg-blue1 rounded-t-md text-white p-3">
                            <h3 className="text-xl font=semibold">Yeni Hasta Kaydı</h3>
                            <button
                                className=""
                                onClick={() => setShowModal(false)}
                            >
                                <CgClose />
                            </button>
                        </div>
                        <h1 className='ml-5 mt-3 font-semibold'>Hasta Bilgileri</h1>
                        <form className="flex flex-col p-5 gap-2" onSubmit={handleSubmit}>
                            <div className="md:flex justify-center items-center gap-3">
                                <div>
                                    <label className="block label-text mb-1">
                                        TC KİMLİK NO
                                    </label>
                                    <input type="text" name='identity' value={addPatient.identity}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                                <div>
                                    <label className="block label-text mb-1">
                                        DOĞUM TARİHİ
                                    </label>
                                    <input type={"date"} name='birthDay' value={addPatient.birthDay}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                                <div>
                                    <label className="block label-text mb-1">
                                        EMAİL
                                    </label>
                                    <input type={"email"} name='email' value={addPatient.email}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                            </div>
                            <div className="md:flex justify-center items-center gap-3">
                                <div>
                                    <label className="block label-text mb-1">
                                        ADI
                                    </label>
                                    <input type={"text"} name='firstName' value={addPatient.firstName}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                                <div>
                                    <label className="block label-text mb-1">
                                        BABA ADI
                                    </label>
                                    <input type={"text"} name='dadyName' value={addPatient.dadyName}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                                <div>
                                    <label className="block label-text mb-1">
                                        İL
                                    </label>
                                    <select
                                        name="city"
                                        id="city"
                                        className="select select-sm select-bordered w-52 xs:max-w-fit md:max-w-xs"
                                        value={addPatient.city}
                                        onChange={handleChange}
                                    >
                                        {ilData.map((il) => <option value={il["text"]}>{il["text"]}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="md:flex justify-center items-center gap-3">
                                <div>
                                    <label className="block label-text mb-1">
                                        SOYADI
                                    </label>
                                    <input type={"text"} name='lastName' value={addPatient.lastName}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                                <div>
                                    <label className="block label-text mb-1">
                                        TELEFON
                                    </label>
                                    <input type={"text"} name='phoneNumber' value={addPatient.phoneNumber}
                                        onChange={handleChange}
                                        className="input input-bordered input-sm w-52 xs:max-w-fit md:max-w-xs" />
                                </div>
                                <div>
                                    <label className="block label-text mb-1">
                                        İLÇE
                                    </label>
                                    <select
                                        name="village"
                                        id="village"
                                        className="select select-sm select-bordered w-52 xs:max-w-fit md:max-w-xs"
                                        value={addPatient.village}
                                        onChange={handleChange}
                                    >
                                        {ilData.filter((data) => (data["text"] === addPatient.city)).map((village) => (village["districts"].map((e) => <option value={e["text"]}>{e["text"]}</option>)))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-3">
                                {/* <button
                                    className="btn btn-primary btn-sm w-28 uppercase text-sm rounded-full shadow hover:shadow-lg outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button> */}
                                <button
                                    className="btn btn-primary btn-sm w-40 uppercase text-sm rounded-full shadow hover:shadow-lg outline-none focus:outline-none"
                                    type="submit"
                                >
                                    KAYDET
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPatientModal