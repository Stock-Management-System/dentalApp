import React from 'react'

const AddFinancialPatientInfo = () => {
    return (
        <div className='row-span-2 bg-white p-4'>
            <table className='table-auto table-compact'>
                <thead>
                    <tr>
                        <th>Hasta Bilgileri</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adı</td>
                        <td>:</td>
                        <td className='font-semibold'>Barış</td>
                    </tr>
                    <tr>
                        <td>Soyadı</td>
                        <td>:</td>
                        <td className='font-semibold'>Korkmaz</td>
                    </tr>
                    <tr>
                        <td>Baba Adı</td>
                        <td>:</td>
                        <td className='font-semibold'>Mehmet</td>
                    </tr>
                    <tr>
                        <td>Doğum Tarihi</td>
                        <td>:</td>
                        <td className='font-semibold'>01.01.1985</td>
                    </tr>
                    <tr>
                        <td>Telefon</td>
                        <td>:</td>
                        <td className='font-semibold'>0555 666 44 33</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td className='font-semibold'>baris@gmail.com</td>
                    </tr>
                    <tr>
                        <td>İl</td>
                        <td>:</td>
                        <td className='font-semibold'>Konya</td>
                    </tr>
                    <tr>
                        <td>İlçe</td>
                        <td>:</td>
                        <td className='font-semibold'>Ereğli</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddFinancialPatientInfo