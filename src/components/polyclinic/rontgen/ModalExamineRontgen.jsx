import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ModalExamineRontgen = ({ rontgenInfo, oneRontgen }) => {
    const [showModal, setShowModal] = useState(false);
    const [rontgen, setRontgen] = useState(oneRontgen.rontgen);
    const [createdDate, setCreatedDate] = useState(oneRontgen.createdDate);
    const [rontgenType, setRontgenType] = useState(oneRontgen.rontgenType);
    const handleClink = (e) => {
        setRontgen(e.rontgen);
        setCreatedDate(e.createdDate);
        setRontgenType(e.rontgenType);
    }
    console.log(rontgenInfo);
    console.log(oneRontgen);
    return (
        <>
            <button
                className="text-blue1 underline decoration-blue1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Röntgen İncele
            </button>
            {showModal ? (
                <>
                    <div
                        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[80rem] my-6 mx-auto max-w-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[80rem] bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between bg-blue1 rounded-t py-1">
                                    <h3 className="text-xl p-1 ml-2 text-white font-semibold">
                                        Röntgen
                                    </h3>
                                    <button
                                        className="text-xl mr-5 text-white"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-3xl text-white">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-3 flex-auto">
                                    <div className="md:grid md:grid-cols-4 md:gap-1">
                                        <div className="md:col-span-3">
                                            <div className="relative mt-1 h-[31.5rem] flex justify-center items-center rounded-md border-2 border-none">
                                                <TransformWrapper
                                                    initialScale={1}
                                                    initialPositionX={0}
                                                    initialPositionY={2}
                                                >
                                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                                        <>
                                                            <div className="z-50 absolute right-1 bottom-2 flex flex-col gap-1">
                                                                <button onClick={() => zoomIn()} className='btn btn-circle btn-outline btn-sm' >+</button>
                                                                <button onClick={() => resetTransform()} className='btn btn-circle btn-outline btn-sm'>x</button>
                                                                <button onClick={() => zoomOut()} className='btn btn-circle btn-outline btn-sm'>-</button>
                                                            </div>
                                                            <TransformComponent>
                                                                <img src={rontgen} width={680} alt="röntgen" className='object-cover' />
                                                            </TransformComponent>
                                                        </>
                                                    )}
                                                </TransformWrapper>
                                            </div>
                                            <div className='rounded-md border border-gray mt-2 flex gap-4 p-1'>
                                                {rontgenInfo?.map((item, index) => (
                                                    <div key={index} className='rounded-md p-1 cursor-pointer' onClick={() => handleClink(item)}>
                                                        <img src={item.rontgen} alt="item" width={50} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-5 md:col-span-1 md:mt-0">
                                            <div className="shadow sm:overflow-hidden sm:rounded-md">
                                                <div className="space-y-3 bg-white sm:p-2">
                                                    <h1 className="font-semibold mb-1">Hasta Bilgileri</h1>
                                                    <table className="table table-compact w-full">
                                                        <tbody>
                                                            <tr>
                                                                <td className="font-bold">Ad-Soyad</td>
                                                                <td className="px-1">:</td>
                                                                <td>Malcolm Lockyer</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="font-bold">Cinsiyet</td>
                                                                <td className="px-1">:</td>
                                                                <td>Bay</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="font-bold">Yaş</td>
                                                                <td className="px-1">:</td>
                                                                <td>41</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="font-bold" colSpan={3}>Röntgen Türü</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={3}>{rontgenType}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="font-bold" colSpan={3}>Röntgen Tarihi</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={3}>{createdDate}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <label htmlFor="notlar" className="block text-sm font-medium text-gray-700">
                                                        Notlar
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id="notlar"
                                                            name="notlar"
                                                            rows={6}
                                                            className="textarea mt-1 block w-full rounded-md border-gray shadow-sm focus:border-gray focus:ring-gray sm:text-sm"
                                                            placeholder="Hasta ile ilgili notları giriniz..."
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-between mx-4 p-2 rounded-b">
                                    <button
                                        className="bg-blue1 text-white btn btn-sm font-bold rounded-3xl w-24 hover:bg-blue1"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Kapat
                                    </button>
                                    <button
                                        className="bg-blue1 text-white btn btn-sm font-bold w-24 rounded-3xl hover:bg-blue1"
                                        type="submit"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Kaydet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ModalExamineRontgen