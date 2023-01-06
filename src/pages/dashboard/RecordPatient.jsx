import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/dashboard/Footer';
import ForgotPassword from '../../components/dashboard/ForgotPassword';
import LoginModal from '../../components/dashboard/LoginModal';
import NavBar from '../../components/dashboard/NavBar';
import DoctorsForRecord from '../../components/dashboard/recordPatient/DoctorsForRecord';
import InfoOfPatient from '../../components/dashboard/recordPatient/InfoOfPatient';
import PolyclinicForRecord from '../../components/dashboard/recordPatient/PolyclinicForRecord';
import RegisterModal from '../../components/dashboard/RegisterModal';
import { ilData } from "../../helpers/ilData";

const RecordPatient = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [queryTC, setQueryTC] = useState("")
    const [place, setPlace] = useState({
        city: "",
        town: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setQueryTC("")
    }

    return (
        <div className='h-full'>
            <NavBar setShowRegister={setShowRegister} />
            <section className='flex flex-col pt-24 min-h-screen bg-transparent  mb-10'>
                <article className='flex justify-between mx-32' >
                    <h1 className='text-3xl text-blue1'>Randevu Al</h1>
                    <form className="form-control" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="TC Kimlik Numaranız" className="input w-96" value={queryTC} onChange={(e) => setQueryTC(e.target.value)} />
                            <button className="btn btn-ghost bg-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </article>
                <InfoOfPatient />
            </section>
            <section className='flex flex-col justify-center items-center min-h-screen bg-transparent'>
                <PolyclinicForRecord setPlace={setPlace} place={place} />
                <DoctorsForRecord />
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