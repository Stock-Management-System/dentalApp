import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaPlus } from 'react-icons/fa';

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [addRontgen, setAddRontgen] = useState([])
    const [imageTrue, setImageTrue] = useState(false);
    const [addNote, setAddNote] = useState("");

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setAddRontgen(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });
    const images = addRontgen.map((file) => (
        <img
            src={file.preview}
            key={file.name}
            alt="preview"
            className="object-cover"
        />
    ));
    console.log(addRontgen)

    useEffect(() => {
        if (images.length > 0) {
            setImageTrue(true);
        }
    }, [images]);

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
                        <div className="relative w-auto my-6 mx-auto max-w-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[70rem] bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between bg-blue1 rounded-t py-2">
                                    <h3 className="text-xl p-2 ml-2 text-white font-semibold">
                                        Röntgen Ekle
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
                                <form>
                                    <div className="relative p-3 flex-auto">
                                        <div className="md:grid md:grid-cols-3 md:gap-3">
                                            <div className="md:col-span-2">
                                                <div className="px-4 sm:px-0">
                                                    <label className="block text-sm font-medium text-gray-700">Röntgen</label>
                                                    <div
                                                        {...getRootProps()}
                                                        class="flex items-center justify-center w-full">
                                                        {
                                                            imageTrue
                                                                ?
                                                                <div className="object-contain overflow-hidden">{images}</div>
                                                                :
                                                                <label
                                                                    class="flex flex-col justify-center w-full h-[29rem] border border-gray border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                                    <input {...getInputProps()} />
                                                                    <div class="flex flex-col items-center justify-center pt-7">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                        </svg>
                                                                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                                            Attach a file</p>
                                                                    </div>
                                                                </label>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 md:col-span-1 md:mt-0">
                                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                                    <div className="space-y-2 bg-white px-2 sm:p-6">
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
                                                        <div className="shadow">
                                                            <h1 className="font-semibold">Hasta Bilgileri</h1>
                                                            <table className="table table-compact w-full">
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
                                                                        <td>41</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="font-bold" colSpan={3} >Röntgen Tipini Seçiniz</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="" colSpan={3} >
                                                                            <select id="rontgentype" className="select select-ghost select-sm  w-full max-w-sm">
                                                                                <option selected>Panoramik Röntgen</option>
                                                                                <option>Perioponal Röntgen</option>
                                                                                <option>Okluzal Röntgen</option>
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="notlar" className="block text-sm font-medium text-gray-700">
                                                                Notlar
                                                            </label>
                                                            <div className="mt-1">
                                                                <textarea
                                                                    id="notlar"
                                                                    name="notlar"
                                                                    rows={3}
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
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}