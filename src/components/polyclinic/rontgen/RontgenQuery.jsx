import React from 'react';
import Modal from './Modal';
import ModalExamineRontgen from './ModalExamineRontgen';

const RontgenQuery = () => {
    return (
        <div>
            <div className="flex basis-4/6 justify-between items-center px-5 py-2">
                <p className="text-2xl font-semibold antialiased leading-loose">
                    Röntgen Sorgulama
                </p>
                <Modal />
            </div>
            <div className="grid grid-cols-1 place-items-center my-9">
                {/* TC numarası ile sorgulama 👇🏻 */}
                <div className="flex justify-between items-center w-[40rem]">
                    <label className="label-text text-center">HASTA TC KİMLİK NO</label>
                    <input
                        type="text"
                        placeholder="Hasta TC Kimlik No"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <button className="btn btn-sm btn-outline btn-primary rounded-full capitalize">
                        Sorgula
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className="text-xl">RÖNTGEN TANIMI</th>
                            <th>RÖNTGEN TARİHİ</th>
                            <th>NOTLAR</th>
                            <th>RÖNTGENLER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>Perioponal Röntgen</td>
                            <td>23.09.2022</td>
                            <td>Alt-7 kök eğilmesi başlamış.</td>
                            <td><ModalExamineRontgen /></td>
                        </tr>
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
                            <td>10.09.2022</td>
                            <td><ModalExamineRontgen /></td>
                        </tr>
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
                            <td>30.08.2022</td>
                            <td><ModalExamineRontgen /></td>
                        </tr>
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
                            <td>23.08.2022</td>
                            <td><ModalExamineRontgen /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RontgenQuery
