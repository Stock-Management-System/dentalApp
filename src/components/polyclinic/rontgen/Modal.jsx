import React from "react";
import { FaPlus } from 'react-icons/fa';

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <FaPlus /> Röntgen Ekle
            </button>
            {showModal ? (
                <>
                    <div
                        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-10/12 my-6 mx-auto max-w-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[85rem] bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between bg-blue1 rounded-t">
                                    <h3 className="text-xl p-2 ml-2 text-white font-semibold">
                                        Röntgen Ekle
                                    </h3>
                                    <button
                                        className="text-3xl mr-3 text-white font-semibold"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-3xl text-white font-semibold">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="md:grid md:grid-cols-3 md:gap-6">
                                        <div className="md:col-span-2">
                                            <div className="px-4 sm:px-0">
                                                <label className="block text-sm font-medium text-gray-700">Röntgen</label>
                                                <div className="mt-1 flex justify-center items-center rounded-md border-2 border-dashed border-gray-300 h-[28rem] px-6 pt-5 pb-6">
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                            >
                                                                <span className="underline">Bir Röntgen filmi yükle</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">veya filmi sürükle bırak</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 md:col-span-1 md:mt-0">
                                            <form action="#" method="POST">
                                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                                    <div className="space-y-6 bg-white px-2 py-2 sm:p-6">
                                                        <h1 className="font-bold">Hasta Sorgula</h1>
                                                        <div className="flex justify-between items-center gap-4 w-[20rem]">
                                                            {/* <label className="label-text text-center">Hasta TC Kimlik No</label> */}
                                                            <input
                                                                type="text"
                                                                placeholder="Hasta TC Kimlik No"
                                                                className="input input-bordered w-full max-w-xs"
                                                            />
                                                            <button className="btn btn-sm btn-outline btn-primary rounded-full capitalize">
                                                                Sorgula
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col justify-evenly gap-3">
                                                            <h1 className="font-semibold">Hasta Bilgileri</h1>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="font-bold">Ad-Soyad</td>
                                                                    <td className="px-2">:</td>
                                                                    <td>Malcolm Lockyer</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="font-bold">Cinsiyet</td>
                                                                    <td className="px-2">:</td>
                                                                    <td>Bay</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="font-bold">Yaş</td>
                                                                    <td className="px-2">:</td>
                                                                    <td>1975</td>
                                                                </tr>
                                                            </tbody>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="notlar" className="block text-sm font-medium text-gray-700">
                                                                Notlar
                                                            </label>
                                                            <div className="mt-1">
                                                                <textarea
                                                                    id="notlar"
                                                                    name="notlar"
                                                                    rows={6}
                                                                    className="mt-1 block w-full rounded-md border-gray shadow-sm focus:border-gray focus:ring-gray sm:text-sm"
                                                                    placeholder="Hasta ile ilgili notları giriniz..."
                                                                    defaultValue={''}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 rounded-b">
                                    <button
                                        className="bg-blue1 text-white btn btn-sm font-bold btn-wide rounded-3xl hover:bg-blue1"
                                        type="button"
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
    );
}