import React from 'react'
import Layout from '../../../components/polyclinic/layout/Layout'
import MiddleLink from '../../../components/polyclinic/polyclinicDashboard/MiddleLink'
import { useSelector } from 'react-redux'
import ClinicHeader from '../../../components/polyclinic//polyclinicDashboard/ClinicHeader'
import ClinicStatisticComponent from '../../../components/polyclinic/ClinicStatisticComponent'
import DoctorsTitle from '../../../components/polyclinic/polyclinicDashboard/DoctorsTitle'

const sampleData1 = {
  day: 'BUGÜN',
  date: '16 Kasım 2022',
  quantity: 43,
  peak: 16,
  control: 13,
  toBeContinous: 14,
}
const sampleData2 = {
  day: 'BU AY',
  date: '16 Kasım 2022',
  quantity: 217,
  peak: 160,
  control: 137,
  toBeContinous: 140,
}
const sampleData3 = {
  day: 'BU YIL',
  date: '16 Kasım 2022',
  quantity: 4127,
  peak: 460,
  control: 337,
  toBeContinous: 540,
}

const policlinicProfile = {
  pol_adi: 'İNCİ DİŞ',
  pol_logo:
    'https://ozeldent42.com/tema/genel/uploads/hizmetler/icon/implant.png',
  pol_il: 'İSTANBUL',
  pol_ilce: 'FATİH',
  pol_adres: 'Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5',
  pol_tel: '+90 222 222 22 22',
  pol_tel2: '+90 222 222 22 22',
  pol_tel3: '+90 222 222 22 22',
  doktorlar: [
    {
      diploma_no: 2000000000,
      doktor_adi: 'Egemen',
      doktor_soyadi: 'Yılmaz',
      doktor_unvan: 'Başhekim',
      doktor_photo:
        'https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-File-Download-Free.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 0,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
    {
      diploma_no: 3000000000,
      doktor_adi: 'Çelebi',
      doktor_soyadi: 'Doğan',
      doktor_unvan: 'Ortodonti Uzmanı',
      doktor_photo:
        'https://down.imgspng.com/download/0720/doctor_PNG15959.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 1,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
    {
      diploma_no: 3000000000,
      doktor_adi: 'Zeynep',
      doktor_soyadi: 'Kara',
      doktor_unvan: 'Diş Hekimi',
      doktor_photo:
        'https://gcdentalworld.com/wp-content/uploads/2015/11/doktorka.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 1,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
    {
      diploma_no: 3000000000,
      doktor_adi: 'Mikail',
      doktor_soyadi: 'Çelikbaş',
      doktor_unvan: 'Diş Hekimi',
      doktor_photo:
        'https://esendent.com.tr/wp-content/uploads/2022/07/engin-boruk.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 1,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
    {
      diploma_no: 3000000000,
      doktor_adi: 'Seray',
      doktor_soyadi: 'Kiraz',
      doktor_unvan: 'Diş Hekimi',
      doktor_photo: 'https://wellwomanclinics.com/upload/6238de3da7b98.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 1,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
    {
      diploma_no: 3000000000,
      doktor_adi: 'Ahmet',
      doktor_soyadi: 'Yakup',
      doktor_unvan: 'Diş Hekimi',
      doktor_photo:
        'https://down.imgspng.com/download/0720/doctor_PNG16041.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 1,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
    {
      diploma_no: 3000000000,
      doktor_adi: 'Yavuz',
      doktor_soyadi: 'Çelik',
      doktor_unvan: 'Diş Hekimi',
      doktor_photo:
        'https://www.pngplay.com/wp-content/uploads/7/Doctor-Standing-Background-PNG-Image.png',
      doktor_mesai: {
        pazartesi_1: 1,
        pazartesi_2: 1,
        pazartesi_3: 0,
        sali_1: 1,
        sali_2: 1,
        sali_3: 0,
        carsamba_1: 1,
        carsamba_2: 1,
        carsamba_3: 0,
        persembe_1: 1,
        persembe_2: 1,
        persembe_3: 0,
        cuma_1: 0,
        cuma_2: 1,
        cuma_3: 0,
        cumartesi_1: 0,
        cumartesi_2: 0,
        cumartesi_3: 0,
        pazar_1: 0,
        pazar_2: 0,
        pazar_3: 0,
      },
    },
  ],
}
const PolyclinicProfile = () => {
  const open = useSelector(state => state.open.value)
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
            <ClinicHeader policlinicProfile={policlinicProfile} />

            {/* Clinic statistic divders 👇🏻 */}
            <ClinicStatisticComponent
              data1={sampleData1}
              data2={sampleData2}
              data3={sampleData3}
            />
          </div>
        </div>
        <MiddleLink />
        <DoctorsTitle policlinicProfile={policlinicProfile} />
      </div>
    </>
  )
}

export default PolyclinicProfile
