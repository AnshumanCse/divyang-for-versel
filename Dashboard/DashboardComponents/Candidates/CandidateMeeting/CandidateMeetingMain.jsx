import React from "react";
import MeetingsCard from "../../GlobalComponents/MeetingsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTitle from "../../GlobalComponents/PageTitle";

const Title = {
  title: "Meeting",
};

const CandidateMeetingMain = () => {
  const Completed = [
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
  ];
  const Upcoming = [
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "Node Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "Express Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "30 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "11 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "Bun Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes",
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>

      <Tabs className=" w-full" defaultValue={"Upcoming"}>
        <TabsList className="w-full">
          <TabsTrigger value="Upcoming" className="text-xl">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="Completed" className="text-xl">
            Completed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Upcoming" className="">
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <hr />
            {Upcoming.map((e, i) => (
              <MeetingsCard
                key={i}
                date={e.date}
                expired={e.expired}
                jobheading={e.jobheading}
                name={e.name}
                desc={e.desc}
                meetingTime={e.meetingTime}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Completed" className="w-full">
          <div className="flex flex-row gap-5 justify-center flex-wrap">
            <hr />
            {Completed.map((e, i) => (
              <MeetingsCard
                key={i}
                date={e.date}
                expired={e.expired}
                jobheading={e.jobheading}
                name={e.name}
                desc={e.desc}
                meetingTime={e.meetingTime}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CandidateMeetingMain;
