import React from 'react';


export let dateForArray ;
const AppointmentDate = ({ setClock, setDate, date, doctor }) => {
    const workingDay = [
        {
            doctorId: 1,
            polyclinicId: 1,
            dates: [
                {
                    "11.02.2023": {
                        sabah: [
                            { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                        ]
                    }
                },
                {
                    "12.02.2023": {
                        sabah: [
                            { '09:00': true }, { '09:15': false }, { "09:30": true }, { "09:45": false }, { "10:00": true }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false }
                        ],
                        ogle: [
                            { "13:30": false }, { "13:45": false }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": false }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": false }
                        ]
                    }
                },
                {
                    "13.02.2023": {
                        sabah: [
                            { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                        ]
                    }
                },
                {
                    "14.02.2023": {
                        sabah: [
                            { '09:00': false }, { '09:15': true }, { "09:30": true }, { "09:45": false }, { "10:00": true }, { "10:15": false }, { "10:30": true }, { "10:45": true }, { "11:00": false }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": false }, { "16:00": true }, { "16:15": false }, { "16:30": true }, { "16:45": false }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": false }, { "18:15": true }, { "18:30": false }, { "18:45": false }, { "19:00": true }, { "19:15": false }, { "19:30": true }, { "19:45": false }, { "20:00": false }
                        ]
                    }
                },
                {
                    "15.02.2023": {
                        sabah: [
                            { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                        ]
                    }
                },
                {
                    "16.02.2023": {
                        sabah: [
                            { '09:00': false }, { '09:15': true }, { "09:30": true }, { "09:45": false }, { "10:00": true }, { "10:15": false }, { "10:30": true }, { "10:45": true }, { "11:00": false }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": false }, { "16:00": true }, { "16:15": false }, { "16:30": true }, { "16:45": false }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": false }, { "18:15": true }, { "18:30": false }, { "18:45": false }, { "19:00": true }, { "19:15": false }, { "19:30": true }, { "19:45": false }, { "20:00": false }
                        ]
                    }
                },
                {
                    "17.02.2023": {
                        sabah: [
                            { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": false }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": false }, { "20:00": false }
                        ]
                    }
                },
                {
                    "18.02.2023": {
                        sabah: [
                            { '09:00': false }, { '09:15': true }, { "09:30": true }, { "09:45": false }, { "10:00": true }, { "10:15": false }, { "10:30": true }, { "10:45": true }, { "11:00": false }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": false }, { "16:00": true }, { "16:15": false }, { "16:30": true }, { "16:45": false }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": false }, { "18:15": true }, { "18:30": false }, { "18:45": false }, { "19:00": true }, { "19:15": false }, { "19:30": true }, { "19:45": false }, { "20:00": false }
                        ]
                    }
                },
                {
                    "19.02.2023": {
                        sabah: [
                            { '09:00': false }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": false }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": false }, { "14:00": true }, { "14:15": false }, { "14:30": false }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": false }, { "18:15": true }, { "18:30": true }, { "18:45": false }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": false }, { "20:00": false }
                        ]
                    }
                },
                {
                    "20.02.2023": {
                        sabah: [
                            { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true }
                        ],
                        ogle: [
                            { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true }
                        ],
                        aksam: [
                            { "18:00": false }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": false }, { "20:00": false }
                        ]
                    }
                },
               
               
            ]
        }
    ]

    const date1 = new Date()
    const thisDay = date1.toISOString()
    const tomorrow = new Date(date1)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowDay = tomorrow.toISOString()
    const twoWeek = new Date(date1)
    twoWeek.setDate(twoWeek.getDate() + 14)
    const nextTwoWeek = twoWeek.toISOString().slice(0, 10)
    const beforeThisDay = (date1.toISOString()).slice(0, 10)

    dateForArray = date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4)
   
    // burası çıkartılacak tüm tarihlerde çalışması için yazıldı
  
    switch (dateForArray[1]) {
        case '0':
            dateForArray = '20.02.2023'
            break;
        case '1':
            dateForArray = '11.02.2023'
            break;
        case '2':
            dateForArray = '12.02.2023'
            break;
        case '3':
            dateForArray = '13.02.2023'
            break;
        case '4':
            dateForArray = '14.02.2023'
            break;
        case '5':
            dateForArray = '15.02.2023'
            break;
        case '6':
            dateForArray = '16.02.2023'
            break;
        case '7':
            dateForArray = '17.02.2023'
            break;
        case '8':
            dateForArray = '18.02.2023'
            break;
        case '9':
            dateForArray = '19.02.2023'
            break;
        default:
            break;
    }
console.log(date);
console.log(thisDay);
  
    // const bunedir = workingDay?.filter((workday) => workday.doctorId === doctor.doctorId)?.map((day) => day.dates)[0].map((i) => i[dateForArray]).filter((k) => k !== undefined && k)[0].sabah
    // console.log("bunedir   : ", bunedir)
    return (
        <section className='w-11/12 mx-auto'>
            <article className='flex justify-between mb-8 mx-2'>
                <h2 className='text-22'>Tarih</h2>
                <article className='flex items-center'>
                
                    <button value={thisDay} onClick={(e) => setDate(e.target.value)} className={date.slice(0, 10)===thisDay.slice(0, 10) ?'btn-primary mr-3 btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1 ' :'btn-primary mr-3 btn btn-sm bg-white text-blue1 gap-2 rounded-full hover:text-white'}>Bugün</button>
                    <button value={tomorrowDay} onClick={(e) => setDate(e.target.value)} className={date.slice(0, 10)===tomorrowDay.slice(0, 10) ?'btn-primary mr-3 btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1 ' :'btn-primary mr-3 btn btn-sm bg-white text-blue1 gap-2 rounded-full hover:text-white'}>Yarın</button>
                    <div className="form-control">
                        <label className="input-group input-group-vertical  cursor-pointer " htmlFor='appointmentDate'>
                            <span>Tarih Seçiniz</span>
                            <input className='input input-sm  '
                                type="date"
                                name="appointmentDate"
                                id='appointmentDate'
                                value={date}
                                min={beforeThisDay}
                                // max={nextTwoWeek}
                                
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                </article>
            </article>

            <form className='w-full px-2'>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between  gap-1'>
                        <h4 className='w-40 font-bold'>Öğleden Önce</h4>
                        <div className='flex flex-wrap gap-1 w-full mb-4'>
                            {
                               
                                // workingDay?.filter((workday) => workday.doctorId === doctor.doctorId)?.map((day) => day.dates)[0].map((i) => i[dateForArray]).filter((k) => k !== undefined && k)[0].sabah.map((item, index) => {
                                //     let hourKey;
                                //     let hourVal;
                                //     for (const [key, val] of Object.entries(item)) {
                                //         hourKey = key;
                                //         hourVal = val
                                //     }
                                //     return (
                                //         <div key={index}>
                                //             <input type="radio" id={hourKey} value={hourKey} disabled={!hourVal}
                                //                 name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                //             <label
                                //                 htmlFor={hourKey}
                                //                 className={`border rounded-3xl text-14 px-4 ${!hourVal ? "bg-gray" : "cursor-pointer peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white"} peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white`}>
                                //                 {hourKey}
                                //             </label>
                                //         </div>
                                //     )
                                // })
                                workingDay?.filter((workday) => workday.doctorId === doctor.doctorId)?.map((day) => day.dates)[0].map((i) => i[dateForArray]).filter((k) => k !== undefined && k)[0].sabah.map((item, index) => {
                                    let hourKey;
                                    let hourVal;
                                    for (const [key, val] of Object.entries(item)) {
                                        hourKey = key;
                                        hourVal = val
                                    }
                                    return (
                                        <div key={index} className="h-10">
                                            <input type="radio" id={hourKey} value={hourKey} disabled={!hourVal}
                                                name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                            <label
                                                htmlFor={hourKey}
                                                className={` rounded-3xl text-16 py-1 px-4 ${!hourVal ? "bg-lightGray text-darkGray" : "cursor-pointer peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white"} peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white bg-white font-semibold`}>
                                                {hourKey}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex justify-between  gap-1 my-2'>
                        <h4 className='w-40 font-bold'>Öğleden Sonra</h4>
                        <div className=' flex flex-wrap gap-x-1 w-full  mb-4'>
                            {
                                workingDay?.filter((workday) => workday.doctorId === doctor.doctorId)?.map((day) => day.dates)[0].map((i) => i[dateForArray]).filter((k) => k !== undefined && k)[0].ogle.map((item, index) => {
                                    let hourKey;
                                    let hourVal;
                                    for (const [key, val] of Object.entries(item)) {
                                        hourKey = key;
                                        hourVal = val
                                    }
                                    return (
                                        <div key={index} className="h-10">
                                            <input type="radio" id={hourKey} value={hourKey} disabled={!hourVal}
                                                name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                           <label
                                                htmlFor={hourKey}
                                                className={` rounded-3xl text-16 py-1 px-4 ${!hourVal ? "bg-lightGray text-darkGray" : "cursor-pointer peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white"} peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white bg-white font-semibold`}>
                                                {hourKey}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex justify-between  gap-1'>
                        <h4 className='w-40 font-bold'>Akşam</h4>
                        <div className='flex flex-wrap gap-x-1 w-full  mb-4'>
                            {
                                workingDay?.filter((workday) => workday.doctorId === doctor.doctorId)?.map((day) => day.dates)[0].map((i) => i[dateForArray]).filter((k) => k !== undefined && k)[0].aksam.map((item, index) => {
                                    let hourKey;
                                    let hourVal;
                                    for (const [key, val] of Object.entries(item)) {
                                        hourKey = key;
                                        hourVal = val
                                    }
                                    return (
                                        <div key={index} className="h-10">
                                            <input type="radio" id={hourKey} value={hourKey} disabled={!hourVal}
                                                name="randevuSaati" className="hidden peer" onChange={(e) => setClock(e.target.value)} />
                                         <label
                                                htmlFor={hourKey}
                                                className={` rounded-3xl text-16 py-1 px-4 ${!hourVal ? "bg-lightGray text-darkGray" : "cursor-pointer peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white"} peer-checked:bg-blue1 peer-checked:text-white peer-checked:border-white bg-white font-semibold`}>
                                                {hourKey}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </form >


        </section >
    )
}

export default AppointmentDate