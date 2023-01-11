import React from 'react'

const AppointmentDate = ({ setClock, setDate, date }) => {
    const sabah = ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30"]
    const ogle = ["13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]
    const aksam = ["18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00"]
    const tarihFiltre = [
        {

        }
    ]
    console.log("date", date)
    const date1 = new Date()
    const thisDay = date1.toISOString()
    const tomorrow = new Date(date1)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowDay = tomorrow.toISOString()
    const twoWeek = new Date(date1)
    twoWeek.setDate(twoWeek.getDate() + 14)
    const nextTwoWeek = twoWeek.toISOString().slice(0, 10)
    const beforeThisDay = thisDay.slice(0, 10)
    console.log("new Date obj:", date1)
    console.log(tomorrow.toISOString());
    console.log(beforeThisDay);
    console.log(nextTwoWeek);

    return (
        <section className='w-11/12 mx-auto'>
            <article className='flex justify-between mb-8 mx-2'>
                <h2 className='text-22'>Tarih</h2>
                <article className='flex items-center'>
                    <button value={thisDay} onClick={(e) => setDate(e.target.value)} className='btn btn-sm btn-link'>Bugün</button>
                    <button value={tomorrowDay} onClick={(e) => setDate(e.target.value)} className='btn btn-sm btn-link'>Yarın</button>
                    <div className="form-control">
                        <label className="input-group input-group-vertical" htmlFor='appointmentDate'>
                            <span>Tarih Seçiniz</span>
                            <input className='input input-sm'
                                type="date"
                                name="appointmentDate"
                                id='appointmentDate'
                                value={date}
                                min={thisDay.slice(0, 10)}
                                max={nextTwoWeek}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                </article>
            </article>
            {
                date
                &&
                <form className='w-full px-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between items-center gap-1'>
                            <h4 className='w-40'>Öğleden Önce</h4>
                            <div className='flex flex-wrap gap-x-1 w-full'>
                                {
                                    sabah.map((item, index) => (
                                        <div key={index}>
                                            <input type="radio" id={item} value={item}
                                                name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                            <label
                                                htmlFor={item}
                                                className="cursor-pointer border rounded-3xl text-14 px-4 peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white">
                                                {item}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-1 my-2'>
                            <h4 className='w-40'>Öğleden Sonra</h4>
                            <div className=' flex flex-wrap gap-x-1 w-full'>
                                {
                                    ogle.map((item, index) => (
                                        <div key={index}>
                                            <input type="radio" id={item} value={item}
                                                name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                            <label htmlFor={item} className="cursor-pointer border rounded-3xl text-14 px-4 peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white">
                                                {item}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-1'>
                            <h4 className='w-40'>Akşam</h4>
                            <div className='flex flex-wrap gap-x-1 w-full'>
                                {
                                    aksam.map((item, index) => (
                                        <div key={index}>
                                            <input type="radio" id={item} value={item}
                                                name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                            <label htmlFor={item} className="cursor-pointer border rounded-3xl text-14 px-4 peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white">
                                                {item}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </form >
            }

        </section >
    )
}

export default AppointmentDate