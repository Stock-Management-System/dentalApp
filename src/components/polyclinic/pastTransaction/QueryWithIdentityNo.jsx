import React from 'react'

const QueryWithIdentityNo = ({ patiensInfo }) => {
    return (
        <div>
            <div className="grid grid-cols-1 place-items-center my-9">
                {/* TC numarası ile sorgulama 👇🏻 */}
                <div className="flex justify-between items-center w-[40rem]">
                    <label className="label-text text-center">Hasta TC Kimlik No</label>
                    <input
                        type="text"
                        placeholder="Hasta TC Kimlik No"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <button className="btn btn-sm btn-outline btn-primary w-28 rounded-full capitalize">
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

export default QueryWithIdentityNo