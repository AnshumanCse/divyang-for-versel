import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import LayoutWraper from "@/src/layout/LayoutWraper"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { FaRegHeart } from "react-icons/fa6"
import { Button } from "@/components/ui/button"



const jobs = [
    {
        id: 1,
        title: 'Customer Support Executive For Specially Abled',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '12,500  ₹',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 2,
        title: 'MERN Developer',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '11,000  ₹',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 3,
        title: 'Flutter Developer',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '10,000  ₹',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 4,
        title: 'Telecaller',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '17,000  ₹',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 5,
        title: 'BPO',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '7,000  ₹',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 6,
        title: 'Human Resource',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '19,0000  ₹',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },]



const JobCards = () => {
  return (
<LayoutWraper>

       <Carousel className="m-12">
       <h1 className="text-3xl text-center">Explore Featured Jobs</h1>
        <CarouselContent className="flex items-center">
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {jobs.map(job => (
          <CarouselItem key={job.id} className="p-8 sm:basis-1 md:basis-1/2 lg:basis-1/3 ">
               <Link to='/jobs/:ID'>
             <div className="h-80 sm:w-72 lg:w-80 border-2 border-orange-400 rounded-lg overflow-auto flex flex-col justify-between p-8">
                <div className="flex justify-end">
                    
                 
                    <FaRegHeart className=' hover:text-orange-500 text-xl cursor-pointer' />
                    

                </div>
                <div className=''>
                
                        
                            <h3 className="text-lg font-bold hover:text-divyang ">{job.title}</h3>
                        
                        <p className="font-medium text-divyang">{job.category}</p>
                </div>
                <div className=''>
                    <Badge className='bg-[#f5ecff] text-[#8369c7] p-1 m-1'>{job.type}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang p-1 m-1'>{job.location}</Badge>
                    <br />
                    <Badge className='bg-[#d9eaf5] text-divyang m-1'>{job.salary}</Badge>
                </div>
                <div className='flex justify-between'>
            
                    <p className="text-sm text-[#8369c7]">{job.timeline}</p>
                </div>
             </div>
             </Link>
           
          </CarouselItem>
        ))}
        
        {/* ))} */}
      </CarouselContent>
      <CarouselPrevious className="w-12 h-12 bg-gray-200 rounded-full"/>
      <CarouselNext  className="w-12 h-12 bg-gray-200  rounded-full"/>
      <Link to="/postJob">
      <p className="text-center">
       
      <Button className="border w-40 border-orange-500 bg-orange-500 text-white hover:bg-orange-700 rounded-3xl">Post Jobs Free </Button>
      </p>
      </Link>
     
    </Carousel>
    </LayoutWraper>
 
  )
}


{/* <Card>
<CardContent className="flex aspect-square items-center justify-center p-6">
  <span className="text-2xl font-semibold"></span>
</CardContent>
</Card> */}

export default JobCards;
