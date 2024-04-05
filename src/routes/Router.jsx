import React, { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../layout/Layout";
import Job from "@/Dashboard/DashBoardPages/Empolyees/Job";
import Applicants from "@/Dashboard/DashBoardPages/Empolyees/Applicants";
import SideBar from "@/Dashboard/DashBoardmain/SideBar";
import DashBoard from "@/Dashboard/DashBoardPages/Empolyees/DashBoard";
import Messages from "@/Dashboard/DashBoardPages/Empolyees/Messages";
import Meetings from "@/Dashboard/DashBoardPages/Empolyees/Meetings";
import Company from "@/Dashboard/DashBoardPages/Empolyees/Company";
import Setting from "@/Dashboard/DashBoardPages/Empolyees/Setting";

import SingleJobDetails from "../components/SingleJobDetailsComp/SingleJobMain";
import CandidatesDashBoard from "@/Dashboard/DashBoardPages/Candidates/CandidatesDashBoard";
import CandidatesMyJob from "@/Dashboard/DashBoardPages/Candidates/CandidatesMyJob";
import CandidatesProfile from "@/Dashboard/DashBoardPages/Candidates/CandidatesProfile";
import CandidatesMessages from "@/Dashboard/DashBoardPages/Candidates/CandidatesMessages";
import CandidatesMeetings from "@/Dashboard/DashBoardPages/Candidates/CandidatesMeetings";
import CandidatesSetting from "@/Dashboard/DashBoardPages/Candidates/CandidatesSetting";
import PostJob from "@/Dashboard/DashBoardPages/Empolyees/PostJob";
import ProtectedEmployerRoute from "./ProtectedEmployerRoute";
import ProtectedCandidateRoute from "./ProtectedCandidateRoute";
// ================ 👇 importing component with LAZY 👇  =====================

const HomePage = lazy(() => import("../pages/HomePage"));
const Blogs = lazy(() => import("../pages/Blogs"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Schems = lazy(() => import("../pages/Schems"));
const PostAJob = lazy(() => import("../pages/PostAJob"));
const Jobs = lazy(() => import("../pages/Jobs"));
// const SingleJobDetails = lazy(() => import("../pages/SingleJobDetails"));
const FoundersNote = lazy(() => import("../pages/FoundersNote"));

// ================ 👆 importing component with LAZY 👆 =====================

const Router = ({ children }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<HomePage />} />
          {/* ############################## */}
          <Route path={"jobs"} element={<Jobs />} />
          <Route path={"jobs/:ID"} element={<SingleJobDetails />} />

          {/* ############################## */}
          <Route path={"schemes"} element={<Schems />} />
          <Route path={"blogs"} element={<Blogs />} />
          <Route path={"contact"} element={<ContactUs />} />
          <Route path={"about"} element={<AboutUs />} />
          <Route path={"postJob"} element={<PostAJob />} />
          <Route path={"founder"} element={<FoundersNote />} />
        </Route>
        {/* employers Routing ############ */}
        <Route element={<ProtectedEmployerRoute />}>
          <Route
            path="dashboard/employers"
            element={
              <SideBar
                dashboardRoute="/dashboard/employers"
                Job="Jobs"
                jobRoute="job"
                Applicants="Applicants"
                applicantsRoute="applicants"
                Messages="Messages"
                messagesRoute="messages"
                Meetings="Meetings"
                meetingsRoute="meetings"
                Company="Company"
                companyRouts="company"
                Profile="Profile"
                profileRoute="profile"
                settingRoute="setting"
              />
            }
          >
            <Route index element={<DashBoard />} />
            <Route path={"job"} element={<Job />} />
            <Route path={"applicants"} element={<Applicants />} />
            <Route path={"messages"} element={<Messages />} />
            <Route path={"meetings"} element={<Meetings />} />
            <Route path={"company"} element={<Company />} />
            <Route path={"setting"} element={<Setting />} />
            <Route path={"postjob"} element={<PostJob />} />
            <Route path={"profile"} element={<PostJob />} />
          </Route>
        </Route>
        {/* candidates Routing ############ */}
        <Route element={<ProtectedCandidateRoute />}>
          <Route
            path="dashboard/candidates"
            element={
              <SideBar
                dashboardRoute="/dashboard/candidates"
                Job="My Jobs"
                jobRoute="job"
                Applicants="Profile"
                applicantsRoute="profile"
                Messages="Messages"
                messagesRoute="messages"
                Meetings="Meetings"
                meetingsRoute="meetings"
                settingRoute="setting"
              />
            }
          >
            <Route index element={<CandidatesDashBoard />} />
            <Route path={"job"} element={<CandidatesMyJob />} />
            <Route path={"profile"} element={<CandidatesProfile />} />
            <Route path={"messages"} element={<CandidatesMessages />} />
            <Route path={"meetings"} element={<CandidatesMeetings />} />
            <Route path={"setting"} element={<CandidatesSetting />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}>Router</RouterProvider>;
};

export default Router;
