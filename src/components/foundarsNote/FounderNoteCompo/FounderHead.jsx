import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import LayoutWraper from '@/src/layout/LayoutWraper'


const FounderHead = () => {
  return (
    <div className=' bg-slate-100 h-72 py-24'>
      
      <LayoutWraper>
        <div className='flex flex-col justify-center items-start px-16'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-lg">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-lg ">Founder's Note</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>

        <div className='px-16'>
          <h1 className='md:text-5xl text-3xl font-semibold'>Founder’s Note</h1>
        </div>
      </LayoutWraper>


    </div>
  )
}

export default FounderHead
