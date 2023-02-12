import React, { useEffect, useState } from 'react'
import NavBar from '../../components/dashboard/NavBar'
import Footer from '../../components/dashboard/Footer'
import { BsCalendar3, BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { MdPersonalInjury } from 'react-icons/md'
import RegisterModal from '../../components/dashboard/RegisterModal'
import LoginModal from '../../components/dashboard/LoginModal'
import ForgotPassword from '../../components/dashboard/ForgotPassword'
const patients = [
  {
    TC: '33018089910',
    firstName: 'Cabbar',
    lastName: 'Murteza',
    dadyName: 'Abbas',
    birthDay: '01.01.1980',
    phone: '05662223311',
    email: 'cbbr@gmail.com',
    city: 'Ağrı',
    town: 'Doğubeyazıt',
    appointments: [
      {
        date: '09 Ocak 2023 ',
        day: 'Pazartesi',
        time: '09:15',
        polyclinicName: 'İnci Diş Polikliniği',
        tel: '08509116633',
        address:
          'Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 Fatih/İstanbul',
        polyclinicPhoto:
          'https://dentavega.com/wp-content/uploads/2020/05/dentavega-logo.jpg',
        polyclinicCity: 'Ankara',
        polyclinicTown: 'Bala',
        doctorId: 1,
        doctorTitr: 'Diş Hekimi',
        doctorFirstName: 'Mehmet',
        doctorLastName: 'Kara',
        doctorPhoto:
          'https://www.seekpng.com/png/full/855-8557328_headshot-of-dr-male-dentist-png.png',
      },
      {
        date: '15 Ocak 2023 ',
        day: 'Salı',
        time: '11:15',
        polyclinicName: 'Dentist Diş Polikliniği',
        tel: '08509456633',
        address: 'Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 ',
        polyclinicPhoto:
          'https://st4.depositphotos.com/6464944/24998/v/600/depositphotos_249985444-stock-illustration-dentist-character-clean-big-white.jpg',
        polyclinicCity: 'Ankara',
        polyclinicTown: 'Bala',
        doctorId: 6,
        doctorTitr: 'Diş Hekimi',
        doctorFirstName: 'Ayşe',
        doctorLastName: 'Cik',
        doctorPhoto:
          'https://img.lovepik.com/free-png/20220125/lovepik-female-dentist-holding-dentures-explaining-dental-png-image_401694338_wh860.png',
      },
    ],
  },
  {
    TC: '54788552210',
    firstName: 'Maksut',
    lastName: 'Ali',
    dadyName: 'Caner',
    birthDay: '01.01.1990',
    phone: '05662224411',
    email: 'mksut@gmail.com',
    city: 'Bolu',
    town: 'Mengen',
    appointments: [
      {
        date: '09 Ocak 2023 ',
        day: 'Pazartesi',
        time: '09:15',
        polyclinicName: 'İnci Diş Polikliniği',
        tel: '08509116633',
        address:
          'Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 Fatih/İstanbul',
        polyclinicPhoto:
          'https://dentavega.com/wp-content/uploads/2020/05/dentavega-logo.jpg',
        polyclinicCity: 'Ankara',
        polyclinicTown: 'Bala',
        doctorId: 1,
        doctorTitr: 'Diş Hekimi',
        doctorFirstName: 'Mehmet',
        doctorLastName: 'Kara',
        doctorPhoto:
          'https://www.seekpng.com/png/full/855-8557328_headshot-of-dr-male-dentist-png.png',
      },
      {
        date: '15 Ocak 2023 ',
        day: 'Salı',
        time: '11:15',
        polyclinicName: 'Dentist Diş Polikliniği',
        tel: '08509456633',
        address: 'Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 ',
        polyclinicPhoto:
          'https://st4.depositphotos.com/6464944/24998/v/600/depositphotos_249985444-stock-illustration-dentist-character-clean-big-white.jpg',
        polyclinicCity: 'Ankara',
        polyclinicTown: 'Bala',
        doctorId: 6,
        doctorTitr: 'Diş Hekimi',
        doctorFirstName: 'Ayşe',
        doctorLastName: 'Cik',
        doctorPhoto:
          'https://img.lovepik.com/free-png/20220125/lovepik-female-dentist-holding-dentures-explaining-dental-png-image_401694338_wh860.png',
      },
    ],
  },
]
const QueryAppointment = () => {
  
	const [showRegister, setShowRegister] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showInfos, setShowInfos] = useState(true)
  const [queryTC, setQueryTC] = useState('')
  const patient = patients.find(patient => patient.TC === '33018089910')
  const [patientInfo, setPatientInfo] = useState(patient)

  console.log(patients)

  const handleSubmit = e => {
    e.preventDefault()
    const patient = patients.find(patient => patient.TC === queryTC)
    if (patient) {
      setPatientInfo(patient)
      setShowInfos(true)
    }
    // herhangi bir şey girince çalışacak
    else {
      const patient = patients.find(patient => patient.TC === '54788552210')
      setPatientInfo(patient)
      setShowInfos(true)
    }
    //  setShowInfos(true)
  }
  console.log(patient)
  return (
    <div className="h-full relative">
      <NavBar  setShowRegister={setShowRegister}/>
      <div>

      
      <section className="pt-40 py-20 min-h-screen">
      {/* {
                    !showInfos
                        ? */}
                        <div className='flex items-center justify-center p-10 text-2xl mb-10'>
                            <h1>Lütfen Randevu Sorgulamak için TC Kimlik numaranız ile kaydınızı kontrol ediniz.</h1>
                        </div>
                        {/* :
                        null
                } */}
        <article
          className={`flex xs:flex-col md:flex-row xs:gap-2 md:gap-0 md:justify-between w-10/12 mx-auto`}
        >
          <h1 className="text-[48px] font-light text-blue1">Randevu Sorgula</h1>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="TC Kimlik Numaranız"
                required
                className="input w-96"
                value={queryTC}
                onChange={e => setQueryTC(e.target.value)}
              />
              <button
                className="btn btn-ghost bg-white rounded-full"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </article>
        {showInfos && (
          <section className="w-10/12 mx-auto px-1 py-5 ">
              <section className='w-10/12 mx-auto'>
            <h1 className='text-22 my-8 mx-auto'>Hasta Bilgileri</h1>
            <article className='grid xs:grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='w-9/12 mx-auto'>
                    <p className='label-text ml-4 mb-1'>Ad</p>
                    <p className='input xs:input-sm md:input-md input-accent flex items-center'>{patientInfo.firstName}</p>
                </div>
                <div className='w-9/12 mx-auto'>
                    <p className='label-text ml-4 mb-1'>Soyad</p>
                    <p className='input xs:input-sm md:input-md input-accent flex items-center'>{patientInfo.lastName}</p>
                </div>
                <div className='w-9/12 mx-auto'>
                    <p className='label-text ml-4 mb-1'>Telefon</p>
                    <p className='input xs:input-sm md:input-md input-accent flex items-center'>{patientInfo.phone}</p>
                </div>
            </article>
        </section>
            <div className="flex justify-between my-8 mx-2">
              <p>
                Aradığınız kriterlere uygun
                <span className="font-bold"> {patient.appointments.length} adet</span> randevu bulundu.
              </p>
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6">

              {patientInfo.appointments.map(appointment => (
              <div className="card bg-white p-4 relative overflow-hidden">
                <div className='absolute top-0 right-0 text-12 px-4 py-1 rounded-bl-box bg-pink text-white '>Geçmiş Randevu</div>
              <div className="divide-y-2 divide-gray">
                <figure className="h-40 pb-2">
                  <img
                    src={appointment.polyclinicPhoto}
                    alt="profile"
                    className="object-contain h-full w-full"
                  />
                </figure>
                <div className="p-4 h-2/3">
                <div className="flex items-center space-x-3 gap-3">
									<div className="avatar">
										<div className="rounded-full w-14">
											<img
												src={appointment.doctorPhoto}
												alt="Doktor Avatar"
												className="object-top"
											/>
										</div>
									</div>
									<div >
                    <p className='text-lightGray font-light'>  {appointment.polyclinicName}</p>
                    <p className="font-bold">

                    {appointment.doctorFirstName} {appointment.doctorLastName}
                    </p>
                    <p>
                      {appointment.doctorTitr}
                    </p>
                    </div>
								</div>
                  
                  <div>
                    <div className="flex justify-start gap-6 mt-7">
                      <MdPersonalInjury className="text-2xl opacity-50 mt-2 mr-2" />
                      <div>
                        <p className="text-14">HASTA</p>
                        <p className="text-[14px]">
                          {patient.firstName} {patient.lastName} 
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start gap-6 mt-7">
                      <BsCalendar3 className="text-2xl opacity-50 mt-2 mr-2" />
                      <div>
                        <p className="text-14">RANDEVU TARİHİ</p>
                        <p className="text-[14px]">
                          {appointment.date} {appointment.day} / {appointment.time}  
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start gap-6 mt-7">
                      <BsTelephone className="text-2xl opacity-50 mt-2 mr-2" />
                      <div>
                        <p className="text-14">TELEFON</p>
                        <p className="text-[14px]">
                          {appointment.tel}
                        </p>
                      </div>
                    </div>  
                    <div className="flex justify-start gap-6 mt-7">
                      <IoLocationOutline className="text-4xl opacity-50 mt-1" />
                      <div>
                        <p className="text-14">ADRES </p>
                        <p className="text-[14px]">{appointment.address}</p>
                      </div>
                    </div>
                  </div>
               
                </div>
              </div>
            </div>
              ))}
            </div>
            

          </section>
        )}
      </section>
      <Footer />
      </div>
      {showRegister ? (
				<RegisterModal
					setShowLogin={setShowLogin}
					setShowRegister={setShowRegister}
				/>
			) : null}

			{showLogin ? (
				<LoginModal
					setShowLogin={setShowLogin}
					setShowRegister={setShowRegister}
					setShowForgotPassword={setShowForgotPassword}
				/>
			) : null}

			{showForgotPassword ? (
				<ForgotPassword
					setShowLogin={setShowLogin}
					setShowForgotPassword={setShowForgotPassword}
				/>
			) : null}
    </div>
    
  )
}

export default QueryAppointment
