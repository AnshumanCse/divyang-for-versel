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
const CloseMenuForLgScreen = ({ Job, Applicants, Messages, Meetings, Company, dashboardRoute, jobRoute, applicantsRoute, messagesRoute, meetingsRoute, companyRouts, settingRoute, Profile, profileRoute }) => {
  return (
    <div className='flex flex-col'>
      <Link to={dashboardRoute ? dashboardRoute : null}>
        <AiOutlineDashboard className='text-2xl ml-4 mt-3 cursor-pointer  hover:text-divyang  ' />
      </Link>
      {
        Job ? (<NavLink to={jobRoute ? jobRoute : null} >
          <MdOutlineCleaningServices className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
        </NavLink>) : null
      }
      {
        Applicants ? (<NavLink to={applicantsRoute ? applicantsRoute : null}>
          <MdOutlineLibraryBooks className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
        </NavLink>) : null
      }

      {
        Messages ? (<NavLink to={messagesRoute ? messagesRoute : null}>
          <FiMessageSquare className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
        </NavLink>) : null
      }
      {
        Meetings ? (<NavLink to={meetingsRoute ? meetingsRoute : null}>
          <TbBrandZoom className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
        </NavLink>) : null
      }
      {
        Company ? (<NavLink to={companyRouts ? companyRouts : null}>
          <MdBlinds className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
        </NavLink>) : null
      }
      {
        Profile ? (<NavLink to={profileRoute ? profileRoute : null} className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3'  >
         <CgProfile />
        </NavLink>) : null
      }
      <NavLink to={settingRoute ? settingRoute : null}>
        <IoSettingsOutline className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
      </NavLink>
      <NavLink to={"hh"}>
        <IoIosLogOut className='text-2xl ml-4 cursor-pointer  hover:text-divyang mt-3' />
      </NavLink>
    </div>
  )
}

export default CloseMenuForLgScreen