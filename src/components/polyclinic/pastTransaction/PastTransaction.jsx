import React, { useState } from 'react';
import QueryWithIdentityNo from './QueryWithIdentityNo';
import QueryWithPersonalInfo from './QueryWithPersonalInfo';

const patiensInfo = [
    {
        firstName: "Ali",
        lastName: "Arslan",
        gender: "Erkek",
        transaction: [
            {
                doctorFirstName: "Fatma",
                doctorLastName: "Şahin",
                doctorAvatar: "https://img.favpng.com/13/13/15/medicine-physician-dentistry-experteeth-dental-png-favpng-vwEXYC7Eb1cWtFa0fUYWrzh44.jpg",
                transactionType: "Cerrahi",
                operationType: "Çene Ameliyatı",
                operationDate: "11.11.2022",
            },
            {
                doctorFirstName: "Jale",
                doctorLastName: "Sugötürür",
                doctorAvatar: "https://e7.pngegg.com/pngimages/996/576/png-clipart-dentistry-health-care-physician-dental-insurance-doctor-thumbnail.png",
                transactionType: "Pedodonti",
                operationType: "Dolgu",
                operationDate: "11.08.2022",
            },
            {
                doctorFirstName: "Fatma",
                doctorLastName: "Şahin",
                doctorAvatar: "https://img.favpng.com/13/13/15/medicine-physician-dentistry-experteeth-dental-png-favpng-vwEXYC7Eb1cWtFa0fUYWrzh44.jpg",
                transactionType: "Ortodonti",
                operationType: "Maloklüzyon",
                operationDate: "11.01.2022",
            },
            {
                doctorFirstName: "Ayşe",
                doctorLastName: "Cansever",
                doctorAvatar: "https://e7.pngegg.com/pngimages/405/671/png-clipart-physician-hospital-medicine-doctor-dentist-doctor-service-people.png",
                transactionType: "Periodontoloji ",
                operationType: "Kök Düzeltmesi",
                operationDate: "01.12.2022",
            },
        ]
    }
]

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
                    <QueryWithIdentityNo patiensInfo={patiensInfo} />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <QueryWithPersonalInfo patiensInfo={patiensInfo} />
                </div>
            </div>
        </div>
    )
}

export default PastTransaction