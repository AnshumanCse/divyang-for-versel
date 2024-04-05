import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { TbBrandZoom } from "react-icons/tb";
import { MdBlinds } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const LgScreenOpenSideBar = ({ Job, Applicants, Messages, Meetings, Company, dashboardRoute, jobRoute, applicantsRoute, messagesRoute, meetingsRoute, companyRouts, settingRoute ,  Profile , profileRoute }) => {
  return (
    <div className=''>
      <Link to={dashboardRoute ? dashboardRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  ' >
        <AiOutlineDashboard />
        <span>Dashboard </span>
      </Link>
      {
        Job ? (
          <NavLink to={jobRoute ? jobRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
            <MdOutlineCleaningServices />
            <span>{Job}</span>
          </NavLink>
        ) : null
      }
      {
        Applicants ? (
          <NavLink to={applicantsRoute ? applicantsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
            <MdOutlineLibraryBooks /> <span>{Applicants}</span>
          </NavLink>
        ) : null
      }
      {
        Messages ? (
          <NavLink to={messagesRoute ? messagesRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300  hover:text-divyang rounded-sm '  >
            <FiMessageSquare />
            <span>{Messages}</span>
          </NavLink>
        ) : null
      }
      {
        Meetings ? (
          <NavLink to={meetingsRoute ? meetingsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
            <TbBrandZoom />
            <span>{Meetings}</span>
          </NavLink>
        ) : null
      }
      {
        Company ? (<NavLink to={companyRouts ? companyRouts : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
          <MdBlinds />
          <span>{Company}</span>
        </NavLink>) : null
      }
         {
          Profile?(<NavLink to={profileRoute ? profileRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
       <CgProfile />
          <span>{Profile}</span>
        </NavLink>):null
        }
      <NavLink to={settingRoute ? settingRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
        <IoSettingsOutline />
        <span>Setting</span>
      </NavLink>
      <NavLink to="/" className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang text-purple-900 rounded-sm ' >
        <IoIosLogOut className='hover:text-green-500' />
        <span>Logout</span>
      </NavLink>

    </div>
  )
}

export default LgScreenOpenSideBar