import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SlCalender, SlClock } from 'react-icons/sl'

const DoctorsCards = () => {
  return (
    <div>
      <div className="card w-64 bg-gray bg-opacity-10" >
        <div className='relative flex flex-col justify-center items-center mt-4'>
          <img src="https://www.vegathemes.net/medikit/images/avatar-2.jpg" alt="profile" className='rounded-full w-20' />
          <h2 className="text-center mt-4 font-bold">Egemen Yılmaz</h2>
          <p className='text-blue2'>Başhekim</p>
          <BsThreeDotsVertical className='absolute right-0 top-2 w-10' />
        </div>
        <div className="card-body">
          <div className='flex justify-between mx-8 opacity-50'>
            <SlCalender />
            <SlClock className='mr-8' />
          </div>
          <div>
          </div>
          <table className='table-zebra ml-2 opacity-50'>
            <tbody>
              <tr>
                <td>Pazartesi</td>
                <td className='text-center'>09:00-16:00</td>
              </tr>

              <tr>
                <td>Salı</td>
                <td className='text-center'>09:00-16:00</td>
              </tr>
              <tr>
                <td>Çarşamba</td>
                <td className='text-center'>09:00-16:00</td>
              </tr>
              <tr>
                <td>Perşembe</td>
                <td className='text-center'>09:00-16:00</td>
              </tr>
              <tr>
                <td>Cuma</td>
                <td className='text-center'>09:00-16:00</td>
              </tr>
              <tr>
                <td>Cumartesi</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <td>Pazar</td>
                <td className='text-center'>-</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default DoctorsCards