import React from 'react'

const ReportInfo = () => {
    const reportInfo = [
        {
            firstName: "Ali",
            lastName: "Yılmaz",
            dadyName: "Ahmet",
            phoneNumber: "+90 555 333 22 11",
            address: "Ata Mah. 14045 Sk. Ereğli/KONYA",
            opendedDate: "01.02.2022",
            paymentDate: "01.02.2022",
            desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            payment: "3000",
            nowPaymnet: "1000",
            remainingPayment: "2000",
            paymentOffer: "Nakit"
        },
        {
            firstName: "Ali",
            lastName: "Yılmaz",
            dadyName: "Ahmet",
            phoneNumber: "+90 555 333 22 11",
            address: "Ata Mah. 14045 Sk. Ereğli/KONYA",
            opendedDate: "01.02.2022",
            paymentDate: "01.02.2022",
            desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            payment: "3000",
            nowPaymnet: "1000",
            remainingPayment: "2000",
            paymentOffer: "Nakit"
        },
        {
            firstName: "Ali",
            lastName: "Yılmaz",
            dadyName: "Ahmet",
            phoneNumber: "+90 555 333 22 11",
            address: "Ata Mah. 14045 Sk. Ereğli/KONYA",
            opendedDate: "01.02.2022",
            paymentDate: "01.02.2022",
            desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            payment: "3000",
            nowPaymnet: "1000",
            remainingPayment: "2000",
            paymentOffer: "Nakit"
        },
    ]
    return (
        <div className=''>
            <div className="overflow-x-auto w-full my-6 bg-white p-2">
                <h3 className='p-3 ml-2'>
                    YAPILAN İŞLEMLER
                </h3>
                <table className="table w-full mx-auto z-0">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>AD SOYAD</th>
                            <th>HESAP AÇMA TARİHİ</th>
                            <th>ÖDEME ŞEKLİ</th>
                            <th>AÇILAMA</th>
                            <th>ÜCRET</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportInfo?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.opendedDate}</td>
                                    <td>{item.paymentOffer}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.payment} TL</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto w-full mb-6 bg-white p-2  z-0">
                <h3 className='p-3 ml-2'>
                    TAHSİLATLAR
                </h3>
                <table className="table w-full mx-auto">
                    {/* <!-- head --> */}

                    <thead>
                        <tr>
                            <th>AD SOYAD</th>
                            <th colSpan={3}>ÖDEME TARİHİ</th>
                            <th className='text-end'>ÖDENEN MİKTAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportInfo?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td colSpan={3}>{item.opendedDate}</td>
                                    <td className='text-end'>{item.nowPaymnet} TL</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto w-full mb-3 bg-white p-2  z-0">
                <h3 className='p-3 ml-2'>
                    HESAPLAR
                </h3>
                <table className="table table-fixed w-full mx-auto">
                    {/* <!-- head --> */}
                    <thead className='text-left'>
                        <tr>
                            <th>AD SOYAD</th>
                            <th>BABA ADI</th>
                            <th>TELEFON</th>
                            <th>ADRES</th>
                            <th className='text-end'>KALAN ÖDEME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportInfo?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.opendedDate}</td>
                                    <td>{item.paymentOffer}</td>
                                    <td>{item.address}</td>
                                    <td className='text-end'>{item.remainingPayment} TL</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportInfo
