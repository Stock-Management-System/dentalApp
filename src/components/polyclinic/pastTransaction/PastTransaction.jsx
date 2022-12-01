import React, { useState } from 'react';
import QueryWithIdentityNo from './QueryWithIdentityNo';
import QueryWithPersonalInfo from './QueryWithPersonalInfo';

const PastTransaction = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div>

            <div className="flex basis-4/6 justify-between items-center px-5 py-2">
                <p className="text-2xl font-semibold antialiased leading-loose">
                    Geçmiş İşlem
                </p>
            </div>
            <div className="px-5">

                <div className="tabs mb-6 ">
                    <p
                        className={` ${openTab === 1
                            ? "tab border-b-2 border-blue1 text-blue1 "
                            : "tab text-black"
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                    >
                        Kimlik Numarası ile Sorgula
                    </p>
                    <p
                        className={` ${openTab === 2
                            ? "tab border-b-2 border-blue1 text-blue1 "
                            : "tab text-black"
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                    >
                        Kişisel Bilgiler ile Sorgula
                    </p>
                </div>

                <div className={openTab === 1 ? "block" : "hidden"}>
                    <QueryWithIdentityNo />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <QueryWithPersonalInfo />
                </div>
            </div>
        </div>
    )
}

export default PastTransaction