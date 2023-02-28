import React from 'react'

const TodayDoctorAppointments = ({ todayDoktorAppointment }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table table-auto w-full z-0">
        {/* <!-- head --> */}
        <thead className="text-gray">
          <tr>
            <th>HASTA</th>
            <th>CİNSİYET</th>
            <th>SAAT</th>
            <th>AÇIKLAMA</th>
          </tr>
        </thead>
        {todayDoktorAppointment.map(randevu => (
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className=' border-b border-b-lightGray'>
              <td>{randevu.hastaAdı}</td>
              <td>{randevu.gender}</td>
              <td>{randevu.randevuSaati}</td>
              <td>{randevu.descriptions}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default TodayDoctorAppointments
