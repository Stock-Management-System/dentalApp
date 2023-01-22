import React, { useState } from 'react'
import { BsPersonPlus } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import DoctorHeader from '../../../components/doctor/doctorDashboard/DoctorHeader'
import Layout from '../../../components/doctor/Layout'
import AddPatientModal from '../../../components/doctor/patient/AddPatientModal'

const patientsInfos = [
  {
    id: 1,
    hasta_tc: 77777777777,
    hasta_adi: 'Ahmet',
    hasta_soyadi: 'Güzel',
    hasta_baba_adi: 'Mehmet ',
    hasta_il: 'Konya ',
    hasta_ilce: 'Ereğli ',
    hasta_tel: '05789999999',
    hasta_mail: 'ahmet@gmail.com',
    hasta_adres: 'Konya/Ereğli ',
    hasta_dogum_tarihi: '2012-10-17',
    cinsiyet: 'E',
  },
  {
    id: 2,
    hasta_tc: 88888888888,
    hasta_adi: 'Pervim',
    hasta_soyadi: 'Bilgiç',
    hasta_baba_adi: 'Osman',
    hasta_il: 'Ankara',
    hasta_ilce: 'Çankaya',
    hasta_tel: '05964444444',
    hasta_mail: 'pervim@gmail.com',
    hasta_adres: 'Ankara/Merkez',
    hasta_dogum_tarihi: '2012-10-04',
    cinsiyet: 'K',
  },
  {
    id: 3,
    hasta_tc: 11111111111,
    hasta_adi: 'Fatma',
    hasta_soyadi: 'Yılmaz',
    hasta_baba_adi: 'Mustafa',
    hasta_il: 'Istanbul',
    hasta_ilce: 'Beşiktaş',
    hasta_tel: '0540000000',
    hasta_mail: 'fatma@gmail.com',
    hasta_adres: 'Istanbul/Beşiktaş',
    hasta_dogum_tarihi: '2000-05-01',
    cinsiyet: 'K',
  },
  {
    id: 4,
    hasta_tc: 22222222222,
    hasta_adi: 'Mehmet',
    hasta_soyadi: 'Soylu',
    hasta_baba_adi: 'Hasan',
    hasta_il: 'Izmir',
    hasta_ilce: 'Bornova',
    hasta_tel: '0560000000',
    hasta_mail: 'mehmet@gmail.com',
    hasta_adres: 'Izmir/Bornova',
    hasta_dogum_tarihi: '1997-01-20',
    cinsiyet: 'E',
  },
  {
    id: 5,
    hasta_tc: 33333333333,
    hasta_adi: 'Gülcan',
    hasta_soyadi: 'Acar',
    hasta_baba_adi: 'Muzaffer',
    hasta_il: 'Antalya',
    hasta_ilce: 'Kepez',
    hasta_tel: '05555555555',
    hasta_mail: 'gulcan@gmail.com',
    hasta_adres: 'Antalya/Kepez',
    hasta_dogum_tarihi: '1990-12-10',
    cinsiyet: 'K',
  },
  {
    id: 6,
    hasta_tc: 44444444444,
    hasta_adi: 'Alper',
    hasta_soyadi: 'Duman',
    hasta_baba_adi: 'Ahmet',
    hasta_il: 'Bursa',
    hasta_ilce: 'Yıldırım',
    hasta_tel: '0580000000',
    hasta_mail: 'alper@gmail.com',
    hasta_adres: 'Bursa/Yildirim',
    hasta_dogum_tarihi: '1988-03-25',
    cinsiyet: 'E',
  },
  {
    id: 7,
    hasta_tc: 55555555555,
    hasta_adi: 'Aysun',
    hasta_soyadi: 'Kara',
    hasta_baba_adi: 'Yusuf',
    hasta_il: 'Adana',
    hasta_ilce: 'Seyhan',
    hasta_tel: '0530000000',
    hasta_mail: 'aysun@gmail.com',
    hasta_adres: 'Adana/Seyhan',
    hasta_dogum_tarihi: '1995-06-15',
    cinsiyet: 'K',
  },
  {
    id: 8,
    hasta_tc: 66666666666,
    hasta_adi: 'Mehmet',
    hasta_soyadi: 'Kara',
    hasta_baba_adi: 'Yusuf',
    hasta_il: 'Adana',
    hasta_ilce: 'Seyhan',
    hasta_tel: '0530000000',
    hasta_mail: 'mehmet@gmail.com',
    hasta_adres: 'Adana/Seyhan',
    hasta_dogum_tarihi: '1995-06-15',
    cinsiyet: 'E',
  },
]

const Patients = () => {
  const [showModal, setShowModal] = useState(false)
  const [searchPatient, setSearchPatient] = useState('')
  const [filterPatient, setFilterPatient] = useState('')
  const open = useSelector(state => state.open.value)
  console.log(searchPatient)
  console.log(filterPatient)

  return (
    <>
      <Layout />

      <div
        className={`absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)] ${
          open ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-100px)]'
        } transition-w ease-in-out duration-500`}
      >
        <div className="bg-white">
          <div className="divide-y p-1">
            <DoctorHeader />
          </div>
        </div>
        <div className="flex xs:flex-col md:flex-row items-center justify-between mt-7 mx-4 gap-6">
          <h1 className="text-28">Hastalar</h1>
          {/* <label className="label-text text-center">Hasta TC Kimlik No</label> */}
          <div className="flex xs:flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              name="search"
              value={searchPatient}
              onChange={e => setSearchPatient(e.target.value)}
              placeholder="Hasta Ara ..."
              className="input input-sm input-bordered w-40 max-w-xs rounded-3xl"
            />
            <select
              name="filterPatient"
              value={filterPatient}
              onChange={e => setFilterPatient(e.target.value)}
              className="select select-bordered select-sm rounded-3xl max-w-xs"
            >
              <option disabled value={''}>
                Filtre Seçenekleri
              </option>
              <option value={'Small Apple'}>Small Apple</option>
              <option value={'Small Orange'}>Small Orange</option>
              <option value={'Small Tomato'}>Small Tomato</option>
            </select>
            <button
              className="btn btn-primary btn-sm rounded-full"
              onClick={() => setShowModal(true)}
            >
              <BsPersonPlus className="mr-2 text-18" />
              Yeni Hasta Ekle
            </button>
          </div>
        </div>
        {/* Buraya tbale component igelecek 👇🏻 */}

        <div className="bg-white py-4 mt-8">
          <div className="overflow-x-auto m-4 px-4">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr >
                  <th>İSİM</th>
                  <th>BABA ADI</th>
                  <th>DOĞUM TARİHİ</th>
                  <th>E-Posta</th>
                  <th>TELEFON</th>
                  <th>ADRES</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="font-light  ">
                {/* <!-- row 1 --> */}
                {patientsInfos?.map((item, index, arr) => {
          
                  return (
                    <tr key={index} className="leading-10 cursor-pointer hover  rounded-xl hover:rounded-lg">
                      <td>
                        {item.hasta_adi} {item.hasta_soyadi}
                      </td>
                      <td>{item.hasta_baba_adi}</td>
                      <td>{item.hasta_dogum_tarihi} </td>
                      <td>{item.hasta_mail}</td>
                      <td>{item.hasta_tel}</td>
                      <td>{item.hasta_adres}</td>
                      <td></td>
                      <td></td>
                      <td>
                        <button className='btn btn-primary btn-sm rounded-full capitalize'>+ Randevu</button>
                      </td>
                      <td>
                        <button className='btn btn-sm btn-outline btn-primary rounded-full capitalize px-6'>
                          Detay
                        </button>
                      </td>
                      {/* <td><ModalExamineRontgen rontgenInfo={arr} oneRontgen={item} /></td> */}
                      {/* <td>{item.rontgen.map((i, key, arr) => (
                                   <ImageModal key={key} />
                               ))}
                             </td> */}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && <AddPatientModal setShowModal={setShowModal} />}
    </>
  )
}

export default Patients
