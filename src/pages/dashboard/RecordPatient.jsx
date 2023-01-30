import React, { useState } from 'react'
import Footer from '../../components/dashboard/Footer';
import ForgotPassword from '../../components/dashboard/ForgotPassword';
import LoginModal from '../../components/dashboard/LoginModal';
import NavBar from '../../components/dashboard/NavBar';
import AppointmentDate from '../../components/dashboard/recordPatient/AppointmentDate';
import DoctorsForRecord from '../../components/dashboard/recordPatient/DoctorsForRecord';
import InfoOfPatient from '../../components/dashboard/recordPatient/InfoOfPatient';
import InfoPatientForm from '../../components/dashboard/recordPatient/InfoPatientForm';
import PolyclinicForRecord from '../../components/dashboard/recordPatient/PolyclinicForRecord';
import RegisterModal from '../../components/dashboard/RegisterModal';
import InciDıs from '../../assets/InciDis.png';
const patient = [
    {
        TC: "33018089910",
        firstName: "Cabbar",
        lastName: "Murteza",
        dadyName: "Abbas",
        birthDay: "01.01.1980",
        phone: "05662223311",
        email: "cbbr@gmail.com",
        city: "Ağrı",
        town: "Doğubeyazıt"
        
    },
    {
        TC: "54788552210",
        firstName: "Maksut",
        lastName: "Ali",
        dadyName: "Caner",
        birthDay: "01.01.1990",
        phone: "05662224411",
        email: "mksut@gmail.com",
        city: "Bolu",
        town: "Mengen"
    },
]
const date1 = new Date()
const thisDay = date1.toISOString()

const RecordPatient = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showInfos, setShowInfos] = useState(false)
    const [queryTC, setQueryTC] = useState("")
    const [patientInfo, setPatientInfo] = useState({  //* bu state ler kayıtlı olmayan hastaların bilgilerinin kayıt edilmesi için de tutulan state ler
        TC: queryTC,
        firstName: "",
        lastName: "",
        dadyName: "",
        birthDay: "",
        phone: "",
        email: "",
        city: "",
        town: ""
    })
    const [polyclinic, setPolyclinic] = useState({
        polyclinicId: 1,
        polyclinicName: 'Has İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "İstanbul",
        polyclinicTown: "Ataşehir",
    })
    const [doctor, setDoctor] = useState({
        polyclinicId: 1,
        doctorId: 1,
        doctorTitr: "Diş Hekimi",
        doctorFirstName: "Mehmet",
        doctorLastName: "Kara",
        doctorPhoto: "https://www.seekpng.com/png/full/855-8557328_headshot-of-dr-male-dentist-png.png"
    })
    const [clock, setClock] = useState("");
    const [date, setDate] = useState(thisDay)
    const [place, setPlace] = useState({ city: "İstanbul", town: "Avcılar" })


    const filteredPatient = patient.filter((item) => item.TC === queryTC)

    const handleSubmit = (e) => {
        e.preventDefault()
        setPatientInfo(filteredPatient[0])
        setShowInfos(true)
    }

    return (
        <div className='h-full'>
            <NavBar setShowRegister={setShowRegister} />
            <section className='pt-28'>
                {
                    !showInfos
                        ?
                        <div className='flex items-center justify-center p-10 text-2xl mb-10'>
                            <h1>Lütfen Randevu Almak için TC Kimlik numaranız ile kaydınızı kontrol ediniz.</h1>
                        </div>
                        :
                        null
                }
                <article className={`flex xs:flex-col md:flex-row xs:gap-2 md:gap-0 md:justify-between w-10/12 mx-auto`} >
                    <h1 className='text-3xl text-blue1'>Randevu Al</h1>
                    <form className="form-control" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="TC Kimlik Numaranız" required className="input w-96" value={queryTC} onChange={(e) => setQueryTC(e.target.value)} />
                            <button className="btn btn-ghost bg-white rounded-full" type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </article>
                {
                    !showInfos
                        ?
                        null
                        :
                        patientInfo?.TC !== undefined
                            ?
                            <InfoOfPatient patientInfo={patientInfo} />
                            :
                            <InfoPatientForm queryTC={queryTC} setPersonalInfo={setPatientInfo} personalInfo={patientInfo} />
                }
            </section>
            <section className=''>
                <h2 className='w-10/12 mx-auto px-1 my-8 text-22'>Randevu Bilgileri</h2>
                <PolyclinicForRecord setPlace={setPlace} place={place} setPolyclinic={setPolyclinic} />
                <DoctorsForRecord setDoctor={setDoctor} polyclinic={polyclinic} />
            </section>
            <section className='w-11/12 mx-auto px-1 py-5 my-8'>
                <AppointmentDate setClock={setClock} setDate={setDate} date={date} doctor={doctor} />

                <article className="w-11/12 mx-auto my-8">
                    <article className=''>
                        <h5>Sayın <strong>{patientInfo?.firstName !== undefined ? patientInfo?.firstName : "..."} {patientInfo?.lastName !== undefined ? patientInfo?.lastName : "..."}</strong> . Randevunuz aşağıdaki şekilde oluşturulacaktır.</h5>
                        <div className='my-5'>
                            <h4 className='opacity-80'>POLİKLİNİK</h4>
                            <h6 className='font-semibold'>{polyclinic.polyclinicName}</h6>
                        </div>
                        <div className='my-5'>
                            <h4 className='opacity-80'>DOKTOR</h4>
                            <h6 className='font-semibold'>{doctor.doctorTitr} {doctor.doctorFirstName} {doctor.doctorLastName}</h6>
                        </div>
                        <div className='my-5'>
                            <h4 className='opacity-80'>TARİH / SAAT</h4>
                            <h6 className='font-semibold'>{date} / {clock}</h6>
                        </div>
                    </article>
                    <button
                        className="bg-blue1 text-white capitalize btn btn-sm rounded-3xl hover:bg-blue1"
                        type="submit"
                    >
                        Randevuyu Onayla
                    </button>
                </article>

            </section>
            <Footer />
            {showRegister ? (
                <RegisterModal setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
            ) : null}
            {showLogin ? (
                <LoginModal setShowLogin={setShowLogin} setShowRegister={setShowRegister} setShowForgotPassword={setShowForgotPassword} />
            ) : null}
            {showForgotPassword ? (
                <ForgotPassword setShowLogin={setShowLogin} setShowForgotPassword={setShowForgotPassword} />
            ) : null}
        </div>
    )
}

export default RecordPatient