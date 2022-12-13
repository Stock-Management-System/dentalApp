import React from 'react'

const PatientInformation = () => {
    return (
        <div className='grid grid-cols-3 gap-4 p-2'>
            <div className=''>
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
                            <td className='font-semibold'>Barış</td>
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
            <div className='grid grid-rows-2 gap-4'>
                <div>b</div>
                <div>c </div>
            </div>
            <div className=''>
                d
            </div>

        </div>
    )
}

export default PatientInformation
