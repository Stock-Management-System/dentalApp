import React from 'react'

const QueryWithPersonalInfo = ({ patiensInfo }) => {
    return (
        <div>
            <div className="grid grid-cols-1 place-items-center my-9">
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
                        {
                            patiensInfo[0].transaction?.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center space-x-3 gap-3">
                                            <div className="avatar">
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                    <img
                                                        src={item.doctorAvatar}
                                                        alt="Doktor Avatar"
                                                    />
                                                </div>
                                            </div>
                                            <div className="font-bold">{item.doctorFirstName} {item.doctorLastName}</div>
                                        </div>
                                    </td>
                                    <td>{patiensInfo[0].firstName} {patiensInfo[0].lastName}</td>
                                    <td>{item.operationDate}</td>
                                    <td>{item.transactionType}</td>
                                    <td>{item.operationType}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QueryWithPersonalInfo