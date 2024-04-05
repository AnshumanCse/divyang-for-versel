import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { LuClock } from "react-icons/lu";
const MeetingsCard = ({ date, expired, jobheading, name, desc, meetingTime }) => {
  return (
    <>
      <div className='w-80 px-2 border flex flex-col  gap-5 mt-4 rounded-lg ' style={{ background: "#ffffff" }} >
        <div className='flex mt-4 justify-between'>
          <div className=' flex gap-3'>
            <MdOutlineCalendarMonth className='ml-4 text-gray-500 text-2xl' /> <span>{date}</span>
          </div>
          <div>
            <span className='mr-4 bg-gray-200 text-gray-500 px-5 py-1 rounded-3xl' >{expired}</span>
          </div>
        </div>
        <div>
          <p className='font-medium ml-4 text-xl'>{jobheading} </p>
        </div>
        <div>
          <p className='text-gray-500 ml-4' >Meeting With : <span className='text-divyang text-xl' >{name} </span> </p>
        </div>
        <div className='w-4/5 p-3  overflow-hidden' >
          <p className='text-gray-500 h-24 overflow-hidden ' >{desc}</p>
        </div>
        <div className='flex mt-4 justify-between mb-5'>
          <div className='flex '>
            <SiGooglemeet className='ml-4 mt-1' /> <span className='text-gray-500 ml-4'>Zoom</span>
          </div>
          <div className='flex justify-between'>
            <LuClock className='mt-1' /> <span className='text-gray-500 ml-4 mr-4'> {meetingTime}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default MeetingsCard