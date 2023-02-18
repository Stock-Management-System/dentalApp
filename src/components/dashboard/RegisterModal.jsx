import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { ilData } from '../../helpers/ilData'

const RegisterModal = ({ setShowRegister, setShowLogin }) => {
  const [registerInfo, setRegisterInfo] = useState({
    klinikAdi: '',
    vergiNo: '',
    email: '',
    phone: '',
    address: '',
    il: ilData[0]['text'],
    ilce: ilData[0]['districts'][0]['text'],
    password: '',
    password2: '',
  })

  const handleChange = e => {
    setRegisterInfo({ ...registerInfo, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(registerInfo)
    setRegisterInfo({
      klinikAdi: '',
      vergiNo: '',
      email: '',
      phone: '',
      address: '',
      il: ilData[0]['text'],
      ilce: ilData[0]['districts'][0]['text'],
      password: '',
      password2: '',
    })
    setShowRegister(false)
    setShowLogin(true)
  }

  const close = () => {
    setShowRegister(false)
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed xs:inset-x-[2.5vw] sm:inset-x-[calc(50vw-14rem)] lg:inset-x-[calc(50vw-30rem)] xs:inset-y-[calc(50vh-180px)] lg:inset-y-[calc(50vh-250px)] min-h-max min-w-max z-50 outline-none focus:outline-none">
        <div className="relative w-auto  mx-auto max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-row xs:w-[95vw] sm:w-[28rem] lg:w-[60rem]  bg-white outline-none focus:outline-none">
            <form
              action="#"
              className="px-10 xs:py-2 lg:py-10 xs:w-full lg:w-1/2 grid grid-cols-6 xs:gap-1 lg:gap-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-[24px] font-bold col-span-6">Kaydol</h2>
              <div className="flex-row col-span-4">
                <label
                  htmlFor="klinik"
                  className="form-label text-formGray text-14"
                >
                  Klinik Adı
                </label>
                <input
                  id="klinikAdi"
                  type="text"
                  value={registerInfo.klinikAdi}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <div className="flex-row col-span-2">
                <label
                  htmlFor="vergiNo"
                  className="form-label text-formGray text-14"
                >
                  Vergi No
                </label>
                <input
                  id="vergiNo"
                  type="text"
                  required
                  maxLength="11"
                  minLength="11"
                  value={registerInfo.vergiNo}
                  onChange={handleChange}
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <div className="flex-row col-span-3">
                <label
                  htmlFor="email"
                  className="form-label text-formGray text-14"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={registerInfo.email}
                  onChange={handleChange}
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <div className="flex-row col-span-3">
                <label
                  htmlFor="phone"
                  className="form-label text-formGray text-14"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={registerInfo.phone}
                  onChange={handleChange}
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <div className="flex-row col-span-6">
                <label
                  htmlFor="address"
                  className="form-label text-formGray text-14"
                >
                  Adres
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  value={registerInfo.address}
                  onChange={handleChange}
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <div className="flex-row col-span-3">
                <label
                  htmlFor="il"
                  className="form-label text-formGray text-14"
                >
                  İl
                </label>
                <select
                  name="il"
                  id="il"
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                  value={registerInfo.il}
                  onChange={handleChange}
                >
                  {ilData.map((il, index) => (
                    <option value={il['text']} key={index}>
                      {il['text']}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-row col-span-3">
                <label
                  htmlFor="ilce"
                  className="form-label text-formGray text-14"
                >
                  İlçe
                </label>
                <select
                  name="ilce"
                  id="ilce"
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                  value={registerInfo.ilce}
                  onChange={handleChange}
                >
                  {ilData
                    .filter(data => data['text'] === registerInfo.il)
                    .map(ilce =>
                      ilce['districts'].map((e, index) => (
                        <option value={e['text']} key={index}>
                          {e['text']}
                        </option>
                      ))
                    )}
                </select>
              </div>
              <div className="flex-row col-span-3">
                <label
                  htmlFor="password"
                  className="form-label text-formGray text-14"
                >
                  Şifre
                </label>
                <input
                  id="password"
                  type="password"
                  value={registerInfo.password}
                  onChange={handleChange}
                  required
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <div className="flex-row col-span-3">
                <label
                  htmlFor="password2"
                  className="form-label text-formGray text-14"
                >
                  Şifre (Tekrar)
                </label>
                <input
                  id="password2"
                  type="password"
                  value={registerInfo.password2}
                  onChange={handleChange}
                  required
                  className=" w-full border-b-formGray border-b-[1.5px] transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                />
              </div>
              <button
                style={{ textTransform: 'none' }}
                className="col-span-4 h-10 w-28   text-14 tracking-[.5px] font-bold bg-blue1 text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-blue1 hover:border-blue1"
                type="submit"
              >
                Kaydol
              </button>
              <button
                style={{
                  textTransform: 'none',
                  boxShadow: '0 0 30px -12px #5616f5',
                }}
                className="lg:hidden col-span-2 h-10 w-28  p-[10px 30px] text-14 tracking-[.5px] font-bold text-white bg-pink items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-pink hover:border-pink"
                type="button"
                onClick={() => {
                  setShowLogin(true)
                  setShowRegister(false)
                }}
              >
                Giriş Yap
              </button>
            </form>

            <section className="w-1/2 bg-blue1 text-white p-10 xs:hidden lg:block rounded-r-lg">
              <h2 className="text-[24px] font-bold pb-5">Zaten üye misiniz?</h2>
              <p className="text-[38px] font-light py-5">
                Hemen giriş yapın ve size
                <span className="font-bold"> Özel Paneli </span>kullanın.
              </p>
              <ul className="font-light text-14 list-inside ]">
                <li>
                  <BsCheck2 className="inline-block mr-2" />
                  Hasta Randevu Sistemi
                </li>
                <li>
                  <BsCheck2 className="inline-block mr-2" />
                  Hasta Kayıt Altyapısı
                </li>
                <li>
                  <BsCheck2 className="inline-block mr-2" />
                  Poliklinik Yönetimi
                </li>
              </ul>
              <button
                style={{
                  textTransform: 'none',
                  boxShadow: '0 0 30px -12px #5616f5',
                }}
                className="h-10 w-28 mt-10 p-[10px 30px] text-14 tracking-[.5px] font-bold text-white items-center border-2 border-white rounded-full mr-3 hover:bg-white hover:text-pink"
                type="button"
                onClick={() => {
                  setShowLogin(true)
                  setShowRegister(false)
                }}
              >
                Giriş Yap
              </button>
            </section>
          </div>
        </div>
      </div>
      <div
        onClick={() => close()}
        className="opacity-25 fixed inset-0 z-40 bg-black h-full w-full"
      ></div>
    </>
  )
}

export default RegisterModal
