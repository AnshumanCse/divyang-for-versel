
import React from 'react'
import MeetingsCard from '../../GlobalComponents/MeetingsCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTitle from '../../GlobalComponents/PageTitle';

const EmpolyeesMeetingMain = () => {
  const data = [
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
  ]
  const data2 = [
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "30 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "11 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Coming",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
    {
      date: "10/01/2024",
      expired: "Expired",
      jobheading: "React Js ",
      name: "Mohit Jaiswal",
      desc: "Hello sir! I am React Js Devloper  ",
      meetingTime: "10 Minutes"
    },
  ]
  const Title = {
    title: "Meeting",
  };
  return (
    <div className='p-5'>
      <div className='flex flex-col w-full'  >
      <div className="w-full">
        <PageTitle Title={Title} />
      </div>
      </div>
      <Tabs className=" w-full" defaultValue={"Upcoming"}  >
        <TabsList className="w-full bg-transparent">
          <TabsTrigger value="Upcoming" className="text-xl">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="Completed" className="text-xl">
            Completed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Upcoming" className="">
          <div className='flex flex-row gap-5 justify-center flex-wrap'  >
            {/* <hr /> */}
            {
              data.map((e, i) => <MeetingsCard
                key={i}
                date={e.date}
                expired={e.expired}
                jobheading={e.jobheading}
                name={e.name}
                desc={e.desc}
                meetingTime={e.meetingTime} />)
            }
          </div>
        </TabsContent>
        <TabsContent value="Completed" className="w-full">
          <div className='flex flex-row gap-5 justify-center flex-wrap'  >
            {/* <hr /> */}
            {
              data2.map((e, i) => <MeetingsCard
                key={i}
                date={e.date}
                expired={e.expired}
                jobheading={e.jobheading}
                name={e.name}
                desc={e.desc}
                meetingTime={e.meetingTime} />)
            }
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EmpolyeesMeetingMain