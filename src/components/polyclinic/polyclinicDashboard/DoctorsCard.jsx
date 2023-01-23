import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SlCalender, SlClock } from 'react-icons/sl'

const DoctorsCards = ({ item }) => {

  const doktorMesaiHesapla = function (sabah, ogle, aksam) {

    if (sabah === 1 && ogle === 1 && aksam === 0) {
      return '09:00 - 16:00'
    } else if (sabah === 0 && ogle === 0 && aksam === 0) {
      return '-'
    } else if (sabah === 1 && ogle === 1 && aksam === 1) {
      return '09:00 - 20:00'
    } else if (sabah === 1 && ogle === 0 && aksam === 0) {
      return '09:00 - 13:00'
    } else if (sabah === 0 && ogle === 1 && aksam === 0) {
      return '13:00 - 16:00'
    } else if (sabah === 0 && ogle === 0 && aksam === 1) {
      return '16:00 - 20:00'
    } else if (sabah === 1 && ogle === 0 && aksam === 1) {
      return '09:00 - 13:00 ve 16:00 - 20:00'
    } else if (sabah === 0 && ogle === 1 && aksam === 1) {
      return '13:00 - 20:00'
    }
  }

  const pazartesiMesai =doktorMesaiHesapla(
    item.doktor_mesai
    .pazartesi_1,
    item.doktor_mesai.pazartesi_2,
    item.doktor_mesai.pazartesi_3
  )
  const saliMesai = doktorMesaiHesapla(
    item.doktor_mesai.sali_1,
    item.doktor_mesai.sali_2,
    item.doktor_mesai.sali_3
  )
  const carsambaMesai = doktorMesaiHesapla(
    item.doktor_mesai.carsamba_1,
    item.doktor_mesai.carsamba_2,
    item.doktor_mesai.carsamba_3
  )
  const persembeMesai = doktorMesaiHesapla(
    item.doktor_mesai.persembe_1,
    item.doktor_mesai.persembe_2,
    item.doktor_mesai.persembe_3
  )
  const cumaMesai = doktorMesaiHesapla(
    item.doktor_mesai.cuma_1,
    item.doktor_mesai.cuma_2,
    item.doktor_mesai.cuma_3
  )
  const cumartesiMesai = doktorMesaiHesapla(
    item.doktor_mesai.cumartesi_1,
    item.doktor_mesai.cumartesi_2,
    item.doktor_mesai.cumartesi_3
  )
  const pazarMesai = doktorMesaiHesapla(
    item.doktor_mesai.pazar_1,
    item.doktor_mesai.pazar_2,
    item.doktor_mesai.pazar_3
  )
  

  return (
    <div>
      <div className="card bg-gray bg-opacity-10">
        <div className="relative flex flex-col justify-center items-center mt-4">
          <img
            src={item.doktor_photo}
            alt="profile"
            className="rounded-full w-24 h-24 object-contain"
          />
          <h2 className="text-center mt-4 font-bold">
            {item.doktor_adi} {item.doktor_soyadi}
          </h2>
          <p className="text-blue2">{item.doktor_unvan}</p>
          <BsThreeDotsVertical className="absolute right-0 top-2 w-10" />
        </div>
        <div className="card-body">
          <div className="flex justify-between mx-8 opacity-50">
            <SlCalender />
            <SlClock className="mr-8" />
          </div>
          <div></div>
          <table className="table-zebra ml-2 opacity-50">
            <tbody>
              <tr>
                <td>Pazartesi</td>
                <td className="text-center">
                  {pazartesiMesai}
                </td>
              </tr>

              <tr>
                <td>Salı</td>
                <td className="text-center">
                  {saliMesai}
                </td>
              </tr>
              <tr>
                <td>Çarşamba</td>
                <td className="text-center">
                  {carsambaMesai}
                </td>
              </tr>
              <tr>
                <td>Perşembe</td>
                <td className="text-center">
                  {persembeMesai}
                </td>
              </tr>
              <tr>
                <td>Cuma</td>
                <td className="text-center">
                  {cumaMesai}
                </td>
              </tr>
              <tr>
                <td>Cumartesi</td>
                <td className="text-center">
                  {cumartesiMesai}
                </td>
              </tr>
              <tr>
                <td>Pazar</td>
                <td className="text-center">
                  {pazarMesai}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DoctorsCards
