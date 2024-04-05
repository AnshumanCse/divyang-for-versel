import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
// import CandidateApplications from "./CandidateApplications";
import JobsCard from "@/src/components/jobsComponents/JobsCard";
import CandidateApplications from "./CandidateApplications";
import PageTitle from "../../GlobalComponents/PageTitle";

const JOBS = [
  {
    id: 1,
    title: "Customer Support Executive – For Specially Abled",
    category: "Blood Disorder",
    type: "NGO",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
  {
    id: 2,
    title: "Domestic Data Entry Operator",
    category: "Haemophilia",
    type: "Private",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
  {
    id: 3,
    title: "Accounts Executive for Leading Bank",
    category: "Chronic Neurological",
    type: "Government",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
  {
    id: 4,
    title: "Accounts Executive for Leading Bank",
    category: "Physical Disability",
    type: "Government",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
  {
    id: 5,
    title: "Domestic Data Entry Operator",
    category: "Haemophilia",
    type: "Private",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
];
const Whislist = [
  {
    id: 1,
    title: "For Specially Abled",
    category: "Disorder",
    type: "NGO",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
  {
    id: 2,
    title: "Domestic Data Entry Operator",
    category: "Haemophilia",
    type: "Private",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
  {
    id: 3,
    title: "Accounts Executive for Leading Bank",
    category: "Chronic Neurological",
    type: "Government",
    location: "Mumbai",
    salary: "17,000/Month",
    timeline: "14 days left to apply",
    description: "This job is for Blood Disorder Candidate.",
  },
];

const Title = {
  title: "My Jobs",
};
const JobsMain = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="w-full">
          <PageTitle Title={Title} />
        </div>
        <Tabs className=" w-full" defaultValue={"Applied"}>
          <TabsList className="w-full bg-transparent">
            <TabsTrigger value="Applied" className="text-xl">
              Applied
            </TabsTrigger>
            <TabsTrigger value="Wishlist" className="text-xl">
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="Invite" className="text-xl">
              Invite
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Applied" className="">
            <div className=" p-5">
              <h3 className="text-md font-semibold text-gray-500">
                Applied Jobs{" "}
              </h3>
            </div>
            <hr />
            <div className="flex flex-col gap-5 w-full py-5">
              <CandidateApplications />
            </div>
          </TabsContent>
          <TabsContent value="Wishlist" className="w-full">
            <div className=" p-5">
              <h3 className="text-md font-semibold text-gray-500">
                Whislist Jobs{" "}
              </h3>
            </div>
            <hr />
            <div className="flex flex-col gap-5 w-full py-5">
              <CandidateApplications />
            </div>
          </TabsContent>
          <TabsContent value="Invite" className="">
            <div className="p-5">
              <h3 className="text-md font-semibold text-gray-500">
                Job Invitations
              </h3>
              {/* <h3 className="text-md font-semibold text-gray-500">
                POSTED DATE
              </h3> */}
            </div>
            <hr />
            <div className="flex flex-col gap-5 w-full py-5">
              <CandidateApplications />
            </div>
          </TabsContent>
        </Tabs>
        <div className="p-6">
          <Button className="border w-44 text-[16px] p-3 border-orange-500 text-white bg-orange-500 hover:bg-orange-600 rounded-3xl">
            View All JOBS
          </Button>
        </div>
      </div>
    </div>
  );
};
export default JobsMain;
