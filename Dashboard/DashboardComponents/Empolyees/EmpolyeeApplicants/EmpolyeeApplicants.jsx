import React from 'react'
import { SelectOption } from '../../GlobalComponents/SelectOption'
import { MdDelete } from "react-icons/md";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTitle from '../../GlobalComponents/PageTitle';
const EmpolyeeApplicants = () => {
  const jobType = [
    { value: "All Job" },
    { value: "Opening" },
    { value: "Paused" },
    { value: "Closed" },
    { value: "Pending" },
  ];
  const short = [
    { value: "Newest" },
    { value: "Oldest" },
    { value: "Featured" },
  ];
  const Title = {
    title: "All applicants",
  };

  return (
    <>
      <div className='flex flex-col border w-full ' >
        <div className='mt-5 ml-5'>
        <div className="w-full">
        <PageTitle Title={Title} />
      </div>
        </div>
        <div className='flex justify-between px-4 mt-4 flex-wrap gap-3' >
          <div className='w-72 md:w-full' >
            <SelectOption placeholder="Select Option" options={jobType} selectlabel="Select Option" />
          </div>
          <div className='w-72 md:w-full ' >
            <SelectOption placeholder="Select Option" options={short} selectlabel="Select Option" />
          </div>
        </div>
        <div className='mt-3 ' >
          <div className='p-5 '>
            <Table className="border" style={{ background: "#ffffff" }} >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">NAME</TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">INFORMATION </TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow >
                  <TableCell > <span className="font-bold text-black"> Mohit Jaiswal</span> <br />
                    <span>Sr. Backend Developer </span>
                  </TableCell>
                  <TableCell >
                    <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                      <option value="opening" className="bg-gray-100">Approved</option>
                      <option value="pause" className="bg-gray-100">Rejected</option>
                    </select> <br />
                    <p className='mt-1' > Applied : March 29 2024</p>
                  </TableCell>
                  <TableCell >
                    <span>mj3468246@gmail.com</span> <br />
                    <span>+91 9161048508</span>
                  </TableCell>
                  <TableCell >
                    <div className='flex text-2xl'>
                      <div>
                        <TbMessageCircle2Filled className='ml-5 text-blue-600 cursor-pointer' />
                      </div>
                      <div>
                        <FaVideo className='ml-5 text-blue-600 cursor-pointer' />
                      </div>
                      <div>
                        <MdDelete className='ml-5 text-red-700 cursor-pointer' />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell > <span className="font-bold text-black"> Rohit Jaiswal</span> <br />
                    <span>Sr. React js Developer </span>
                  </TableCell>
                  <TableCell >
                    <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                      <option value="opening" className="bg-gray-100">Approved</option>
                      <option value="pause" className="bg-gray-100">Rejected</option>
                    </select> <br />
                    <p className='mt-1' > Applied : March 15 2024</p>
                  </TableCell>
                  <TableCell >
                    <span>Rohit@gmail.com</span> <br />
                    <span>+91 8601916540</span>
                  </TableCell>
                  <TableCell >
                    <div className='flex text-2xl'>
                      <div>
                        <TbMessageCircle2Filled className='ml-5 text-blue-600 cursor-pointer' />
                      </div>
                      <div>
                        <FaVideo className='ml-5 text-blue-600 cursor-pointer' />
                      </div>
                      <div>
                        <MdDelete className='ml-5 text-red-700 cursor-pointer' />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpolyeeApplicants