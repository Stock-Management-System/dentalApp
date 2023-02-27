import React, { useState } from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { modalToggle } from '../../features/modalSlice'
import { randevular, doktoraGoreRandevu } from "../../helpers/data";
import DoctorDateRange from './doctorAppointments/DoctorDateRange';
import DoctorPatientsAppointments from './doctorAppointments/DoctorPatientsAppointments';
import TodayDoctorAppointments from './doctorAppointments/TodayDoctorAppointments';



const DoctorAppointments = () => {
  const [openTab, setOpenTab] = useState(1)
  // const toggleModal = useSelector((state) => state.toggleM.toggleModal)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        {/* clinic appointments title 👇🏻 */}
        <div className="flex basis-4/6 justify-between items-center px-5 py-2">
          <p className="text-2xl font-semibold antialiased leading-loose">
            Randevu İşlemleri
          </p>
          <button
            onClick={() => dispatch(modalToggle())}
            htmlFor="add-appointment"
            className="btn-primary mr-3 btn btn-active btn-sm bg-blue1 gap-2 rounded-full hover:bg-blue1"
          >
            <BiMessageSquareAdd className="mr-1" /> Randevu Oluştur
          </button>
        </div>
      </div>

      <div className="px-5">
        {/* appointments headers 👇🏻 */}
        <div className="tabs mb-6 ">
        <p
						className={` ${openTab === 1
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(1);
						}}
					>
						Bugünkü Randevular
					</p>
					<p
						className={` ${openTab === 2
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(2);
						}}
					>
						Hasta Randevu Sorgulama
					</p>
			
					<p
						className={`${openTab === 3
							? "tab border-b-2 border-blue1 text-blue1 "
							: "tab text-black"
							}`}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(3);
						}}
					>
						Tarih Aralığı Sorgulama
					</p>
        </div>
        {/* appointments body 👇🏻 */}
        <div className={openTab === 1 ? "block" : "hidden"}>
					<TodayDoctorAppointments todayDoktorAppointment={randevular} />
				</div>
				<div className={openTab === 2 ? "block" : "hidden"}>
					<DoctorPatientsAppointments doktorPatientsAppointment={randevular} />
					{/* <PatientsAppointments doktorAppointment={randevular} /> */}
				</div>
				<div className={openTab === 3 ? "block" : "hidden"}>
					<DoctorDateRange doktorDateAppointment={randevular} />
					{/* <DateRange doktorAppointment={randevular} /> */}
				</div>
			
      </div>
    </>
  )
}

export default DoctorAppointments
