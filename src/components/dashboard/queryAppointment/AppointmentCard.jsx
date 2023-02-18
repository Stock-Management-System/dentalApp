import React from 'react'
import { BsCalendar3, BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { MdPersonalInjury } from 'react-icons/md'

const AppointmentCard = ({appointment,patient}) => {
  return (
    <div className="card bg-white p-4 relative overflow-hidden">
    <div className="absolute top-0 right-0 text-12 px-4 py-1 rounded-bl-box bg-pink text-white ">
      Geçmiş Randevu
    </div>
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
          <div>
            <p className="text-lightGray font-light">
              {' '}
              {appointment.polyclinicName}
            </p>
            <p className="font-bold">
              {appointment.doctorFirstName}{' '}
              {appointment.doctorLastName}
            </p>
            <p>{appointment.doctorTitr}</p>
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
                {appointment.date} {appointment.day} /{' '}
                {appointment.time}
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-6 mt-7">
            <BsTelephone className="text-2xl opacity-50 mt-2 mr-2" />
            <div>
              <p className="text-14">TELEFON</p>
              <p className="text-[14px]">{appointment.tel}</p>
            </div>
          </div>
          <div className="flex justify-start gap-6 mt-7">
            <IoLocationOutline className="text-4xl opacity-50 mt-1" />
            <div>
              <p className="text-14">ADRES </p>
              <p className="text-[14px]">
                {appointment.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppointmentCard
