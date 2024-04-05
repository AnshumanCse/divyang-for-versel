import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import LgScreenOpenSideBar from "./LgScreenOpenSideBar";
import MdScreenOpenSiderbar from "./MdScreenOpenSiderbar";
import CloseMenuForLgScreen from "./CloseMenuForLgScreen";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "@/src/components/header/Navbar";
const SideBar = ({
  Job,
  Applicants,
  Messages,
  Meetings,
  Company,
  dashboardRoute,
  jobRoute,
  applicantsRoute,
  messagesRoute,
  meetingsRoute,
  companyRouts,
  settingRoute,
  Profile,
  profileRoute,
}) => {
  const [togal, setTogal] = useState(true);
  const [svgVisibility, setSvgVisibilityForLgScreen] = useState("block");
  const [svgVisibilityForMobile, setSvgVisibilityForMdScreen] = useState(
    "hidden"
  );

  /* 👇👇👇 Function to handle media query change ###############  */
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 767px)").matches) {
        setTogal(false);
      } else {
        setTogal(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 👇👇👇 function for lg screen show and hidden sidebar ############# */
  useEffect(() => {
    const handleResizeforsvg = () => {
      if (window.innerWidth <= 767) {
        setTogal(true);
        setSvgVisibilityForLgScreen("hidden");
      } else {
        setSvgVisibilityForLgScreen("block");
      }
    };

    handleResizeforsvg();
    window.addEventListener("resize", handleResizeforsvg);
    return () => window.removeEventListener("resize", handleResizeforsvg);
  }, []);

  /* 👇👇👇 function for md screen show and hidden sidebar ############# */
  useEffect(() => {
    const handleResizeforMobilebtn = () => {
      if (window.innerWidth <= 767) {
        setTogal(true);
        setSvgVisibilityForMdScreen("block");
      } else {
        setSvgVisibilityForMdScreen("hidden");
      }
    };

    handleResizeforMobilebtn();
    window.addEventListener("resize", handleResizeforMobilebtn);
    return () => window.removeEventListener("resize", handleResizeforMobilebtn);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex">
          <div>
            <div className={togal ? "block" : "hidden"}>
              <div className="w-20">
                <div
                  className={`${svgVisibility} cursor-pointer text-3xl ml-4 mt-2`}
                  onClick={() => setTogal(false)}
                >
                  <IoIosArrowDropright />
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <div
                      className={`${svgVisibilityForMobile} z-20`}
                      style={{ position: "fixed", top: "300px", left: "5px" }}
                    >
                      <Button
                        onClick={() => setTogal(true)}
                        variant="outline"
                        className="bg-divyang text-white text-lg"
                      >
                        <GiHamburgerMenu />
                      </Button>
                    </div>
                  </SheetTrigger>
                  <MdScreenOpenSiderbar
                    Job={Job ? `${Job}` : null}
                    Applicants={Applicants ? `${Applicants}` : null}
                    Messages={Messages ? `${Messages}` : null}
                    Meetings={Meetings ? `${Meetings}` : null}
                    Company={Company ? `${Company}` : null}
                    dashboardRoute={dashboardRoute ? `${dashboardRoute}` : null}
                    jobRoute={jobRoute ? `${jobRoute}` : null}
                    applicantsRoute={
                      applicantsRoute ? `${applicantsRoute}` : null
                    }
                    messagesRoute={messagesRoute ? `${messagesRoute}` : null}
                    meetingsRoute={meetingsRoute ? `${meetingsRoute}` : null}
                    companyRouts={companyRouts ? `${companyRouts}` : null}
                    Profile={Profile ? `${Profile}` : null}
                    profileRoute={profileRoute ? `${profileRoute}` : null}
                    settingRoute={settingRoute ? `${settingRoute}` : null}
                  />
                </Sheet>
                <div
                  className={`${svgVisibility} `}
                  style={{ transition: "all 0.5" }}
                >
                  <CloseMenuForLgScreen
                    Job={Job ? `${Job}` : null}
                    Applicants={Applicants ? `${Applicants}` : null}
                    Messages={Messages ? `${Messages}` : null}
                    Meetings={Meetings ? `${Meetings}` : null}
                    Company={Company ? `${Company}` : null}
                    dashboardRoute={dashboardRoute ? `${dashboardRoute}` : null}
                    jobRoute={jobRoute ? `${jobRoute}` : null}
                    applicantsRoute={
                      applicantsRoute ? `${applicantsRoute}` : null
                    }
                    messagesRoute={messagesRoute ? `${messagesRoute}` : null}
                    meetingsRoute={meetingsRoute ? `${meetingsRoute}` : null}
                    Profile={Profile ? `${Profile}` : null}
                    profileRoute={profileRoute ? `${profileRoute}` : null}
                    companyRouts={companyRouts ? `${companyRouts}` : null}
                    settingRoute={settingRoute ? `${settingRoute}` : null}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={togal ? "hidden" : "block"}>
            <div className="w-56 ">
              <div className="">
                <div className="text-3xl ml-4">
                  <IoIosArrowDropleft
                    className="cursor-pointer "
                    onClick={() => setTogal(true)}
                  />
                </div>
                <LgScreenOpenSideBar
                  Job={Job ? `${Job}` : null}
                  Applicants={Applicants ? `${Applicants}` : null}
                  Messages={Messages ? `${Messages}` : null}
                  Meetings={Meetings ? `${Meetings}` : null}
                  Company={Company ? `${Company}` : null}
                  dashboardRoute={dashboardRoute ? `${dashboardRoute}` : null}
                  jobRoute={jobRoute ? `${jobRoute}` : null}
                  applicantsRoute={
                    applicantsRoute ? `${applicantsRoute}` : null
                  }
                  messagesRoute={messagesRoute ? `${messagesRoute}` : null}
                  meetingsRoute={meetingsRoute ? `${meetingsRoute}` : null}
                  Profile={Profile ? `${Profile}` : null}
                  profileRoute={profileRoute ? `${profileRoute}` : null}
                  companyRouts={companyRouts ? `${companyRouts}` : null}
                  settingRoute={settingRoute ? `${settingRoute}` : null}
                />
              </div>
            </div>
          </div>
        </div>

        <main className="flex flex-wrap justify-between w-full bg-divyangbg">
      
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SideBar;
