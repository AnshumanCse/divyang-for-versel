import React from 'react';
import { SelectOption } from '../../GlobalComponents/SelectOption';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTitle from '../../GlobalComponents/PageTitle';

const EmpolyesJobMain = () => {


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
    title: "Jobs",
  };
  return (
    <>
      <div className='flex flex-col  w-full' >
      <div className="w-full ml-4">
        <PageTitle Title={Title} />
      </div>
        <div className='flex justify-between px-4 mt-4 flex-wrap gap-3' >
          <div className='w-72 md:w-full' >
            <SelectOption placeholder="Select Option" options={jobType} selectlabel="Select Option" />
          </div>
          <div className='w-72 md:w-full ' >
            <SelectOption placeholder="Select Option" options={short} selectlabel="Select Option" />
          </div>
        </div>
        <div className='mt-3 '  >
          <div className='p-5 ' >
            <Table className="border bg-white"  >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">TITLE</TableHead>
                  <TableHead className="font-bold text-black">APPLICANTS</TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">POSTED</TableHead>
                  <TableHead className="font-bold text-black">EXPIRED</TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody >
                <TableRow >
                  <TableCell className="font-bold text-black">Node Js</TableCell>
                  <TableCell className="hover:text-divyang">1 Application</TableCell>
                  <TableCell >
                    <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                      <option value="opening" className="bg-gray-100">Opening</option>
                      <option value="pause" className="bg-gray-100">Pause</option>
                    </select>
                  </TableCell>
                  <TableCell >30/03/2024</TableCell>
                  <TableCell > <span className="text-divyang">29/04/2024</span></TableCell>
                  <TableCell >
                    <div className='flex text-2xl'>
                      <FaEdit className='text-blue-600 cursor-pointer ' /> <MdDelete className='ml-5 text-red-700 cursor-pointer' />
                    </div>  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell className="font-bold text-black">Node Js</TableCell>
                  <TableCell className="hover:text-divyang">1 Application</TableCell>
                  <TableCell >
                    <select  className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                      <option value="opening" className="bg-gray-100">Opening</option>
                      <option value="pause" className="bg-gray-100 ">Pause</option>
                    </select>
                  </TableCell>
                  <TableCell >30/03/2024</TableCell>
                  <TableCell > <span className="text-divyang">29/04/2024</span></TableCell>
                  <TableCell >
                    <div className='flex text-2xl'>
                      <FaEdit className='text-blue-600 cursor-pointer ' /> <MdDelete className='ml-5 text-red-700 cursor-pointer' />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpolyesJobMain;
