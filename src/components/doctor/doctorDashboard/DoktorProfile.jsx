import React from 'react'
import { IoSchoolOutline } from 'react-icons/io5'
import { FaUniversity } from 'react-icons/fa'
import { CgWorkAlt } from 'react-icons/cg'
import { BiTimeFive } from 'react-icons/bi'

const DoktorProfile = ({ doctorData }) => {
  console.log(doctorData)
  return (
    <div className="grid  xxl:grid-cols-4 xl:grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-1  p-4 py-6">
      <div className="p-2 flex justify-center ">
        <div className=" sm:w-80 sm:h-80 w-full  ">
          <img
            src={doctorData.profileImg}
            alt="profile"
            className="rounded-full w-full h-full object-contain p-2 bg-turquaz  border border-blue2  border-4"
          />
        </div>
      </div>

      <div className="p-2 ">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">
              {doctorData.name} {doctorData.surname}{' '}
            </h1>
            <p>
              <span className="text-xl font-medium text-mainPageP">
                {doctorData.title}
              </span>
            </p>
          </div>
          <div className="flex flex-col mt-6 ">
            <div className="flex items-center ">
              <div className="text-mainPageP text-[40px] mr-4 ">
                <FaUniversity />
              </div>
              <p className="">
                <span className="font-semibold">
                  {doctorData.graduateUniversity}
                </span>
                'nde okudu.
              </p>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-mainPageP text-[40px] mr-4 ">
                <IoSchoolOutline />
              </div>
              <p className="">
                <span className="font-semibold">
                  {doctorData.graduateYear}{' '}
                </span>
                tarihinde mezun oldu.
              </p>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-mainPageP text-[40px] mr-4 ">
                <CgWorkAlt />
              </div>
              <p className="">
                <span className="font-semibold">
                  {doctorData.workingSince}{' '}
                </span>
                tarihinden bu yana çalışıyor.
              </p>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-mainPageP text-[40px] mr-4 ">
                <BiTimeFive />
              </div>
              <p className="">
                <span>{doctorData.workingDays} </span>
                <span className="font-semibold">
                  {doctorData.workingHours}{' '}
                </span>
                saatleri arasında çalışıyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoktorProfile
