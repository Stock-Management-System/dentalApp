import React from 'react'

const QueryWithPersonalInfo = () => {
    return (
        <div>
            <div className="grid grid-cols-1 place-items-center my-9">
                {/* TC numarası ile sorgulama 👇🏻 */}
                <div className="flex flex-col justify-between items-center w-[30rem] gap-4">
                    <div className='flex gap-5 w-11/12 items-center justify-between'>
                        <label className="label-text">ADI</label>
                        <input
                            type="text"
                            placeholder="Ad giriniz"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className='flex gap-5 w-11/12 items-center justify-between'>
                        <label className="label-text">SOYADI</label>
                        <input
                            type="text"
                            placeholder="Soyad giriniz"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className='flex gap-5 w-11/12 items-center justify-between'>
                        <label className="label-text">BABA ADI</label>
                        <input
                            type="text"
                            placeholder="Baba adı giriniz"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <button className="btn btn-sm w-36 btn-outline btn-primary rounded-full capitalize self-end">
                        Sorgula
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead className="text-gray">
                        <tr>
                            <th className="pl-20">DOKTOR</th>
                            <th>HASTA</th>
                            <th>TARİH</th>
                            <th>İŞLEM TÜRÜ</th>
                            <th>İŞLEM ÇEŞİDİ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3 gap-3">
                                    <div className="avatar">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                            <img
                                                src="https://placeimg.com/50/50/people"
                                                alt="Doktor Avatar"
                                            />
                                        </div>
                                    </div>
                                    <div className="font-bold">Egemen Yılmaz</div>
                                </div>
                            </td>
                            <td>Barış Korkmaz</td>
                            <td>Bay</td>
                            <td>11:00</td>
                            <td>Kanal tedavisi devam edecek</td>
                        </tr>
                        {/* <!--örnek silinecek --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3 gap-3">
                                    <div className="avatar">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                            <img
                                                src="https://placeimg.com/70/70/people"
                                                alt="Doktor Avatar"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Egemen Yılmaz</div>
                                    </div>
                                </div>
                            </td>
                            <td>Melike Çetinkaya</td>
                            <td>Bayan</td>
                            <td>10:30</td>
                            <td>saate sıralama koyulmalı</td>
                        </tr>
                        {/* <!-- örnek silinecek --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3 gap-3">
                                    <div className="avatar">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                            <img
                                                src="https://placeimg.com/90/90/people"
                                                alt="Doktor Avatar"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Zeynep Kaya</div>
                                    </div>
                                </div>
                            </td>
                            <td>Yunus Alpaslan</td>
                            <td>Bay</td>
                            <td>09:00</td>
                            <td>Kanal tedavisi devam edecek</td>
                        </tr>
                        {/* <!-- örnek silinecek --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3 gap-3">
                                    <div className="avatar">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                            <img
                                                src="https://placeimg.com/60/60/people"
                                                alt="Doktor Avatar"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Seray Kiraz</div>
                                    </div>
                                </div>
                            </td>
                            <td>Fatma Kaya</td>
                            <td>Bayan</td>
                            <td>10:30</td>
                            <td>Kanal tedavisi devam edecek</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QueryWithPersonalInfo