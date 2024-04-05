import React from 'react'
import { SheetClose, SheetContent, } from "@/components/ui/sheet"
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
const MdScreenOpenSiderbar = ({ Job, Applicants, Messages, Meetings, Company, dashboardRoute, jobRoute, applicantsRoute, messagesRoute, meetingsRoute, companyRouts, settingRoute, Profile, profileRoute }) => {
  return (
    <SheetContent side={"left"} >
      <div>
        <SheetClose asChild>
          <Link to={dashboardRoute ? dashboardRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  ' >
            <AiOutlineDashboard />
            <span>Dashboard </span>
          </Link>
        </SheetClose>
        {
          Job ? (
            <SheetClose asChild>
              <NavLink to={jobRoute ? jobRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
                <MdOutlineCleaningServices />
                <span>{Job}</span>
              </NavLink>
            </SheetClose>) : null
        }

        {
          Applicants ? (<SheetClose asChild>
            <NavLink to={applicantsRoute ? applicantsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
              <MdOutlineLibraryBooks /> <span>{Applicants}</span>
            </NavLink>
          </SheetClose>
          ) : null
        }
        {
          Messages ? (<SheetClose asChild><NavLink to={messagesRoute ? messagesRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300  hover:text-divyang rounded-sm '  >
            <FiMessageSquare />
            <span>{Messages}</span>
          </NavLink></SheetClose>) : null
        }
        {
          Meetings ? (<SheetClose asChild><NavLink to={meetingsRoute ? meetingsRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
            <TbBrandZoom />
            <span>{Meetings}</span>
          </NavLink></SheetClose>) : null
        }
        {
          Company ? (<SheetClose asChild><NavLink to={companyRouts ? companyRouts : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
            <MdBlinds />
            <span>{Company}</span>
          </NavLink></SheetClose >) : null
        }
        {
          Profile ? (<SheetClose asChild><NavLink to={profileRoute ? profileRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang  rounded-sm '  >
            <CgProfile />
            <span>{Profile}</span>
          </NavLink></SheetClose>) : null
        }
        <SheetClose asChild><NavLink to={settingRoute ? settingRoute : null} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang rounded-sm  '  >
          <IoSettingsOutline />
          <span>Setting</span>
        </NavLink>
        </SheetClose>
        <SheetClose asChild>
          <NavLink to={"/"} className='flex gap-3 p-2 ms-3 text-2xl hover:bg-gray-300 hover:text-divyang text-purple-900 rounded-sm ' >
            <IoIosLogOut className='hover:text-green-500' />
            <span >Logout</span>
          </NavLink>
        </SheetClose>
      </div>

    </SheetContent>
  )
}

export default MdScreenOpenSiderbar