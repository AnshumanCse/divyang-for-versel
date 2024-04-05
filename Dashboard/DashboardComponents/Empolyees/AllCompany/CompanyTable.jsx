import React from 'react';
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

const CompanyTable = () => {
  const Title = {
    title: "Companies",
  };

  return (
    <>
      <div className='flex flex-col  w-full '  >
        <div className='mt-5 ml-5'>
        <div className="w-full">
        <PageTitle Title={Title} />
      </div>
        </div>
        <div className='mt-3 '  >
          <div className='p-5 ' >
            <Table className="border" style={{ background: "#ffffff" }} >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">NAME</TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">CATEGORY</TableHead>
                  <TableHead className="font-bold text-black">ACTIVE JOBS</TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow >
                  <TableCell className="font-bold text-black">Conner and Mayer Trading</TableCell>
                  <TableCell >
                    <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                      <option value="opening" className="bg-gray-100">Opening</option>
                      <option value="pause" className="bg-gray-100">Pause</option>
                    </select>
                  </TableCell>
                  <TableCell > <span className="text-divyang">IT / ITES</span></TableCell>
                  <TableCell >0</TableCell>
                  <TableCell >
                    <div className='flex text-2xl'>
                      <FaEdit className='text-blue-600 cursor-pointer ' /> <MdDelete className='ml-5 text-red-700 cursor-pointer' />
                    </div>  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell className="font-bold text-black">Conner and Mayer Trading</TableCell>
                  <TableCell >
                    <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0">
                      <option value="opening" className="bg-gray-100">Opening</option>
                      <option value="pause" className="bg-gray-100">Pause</option>
                    </select>
                  </TableCell>
                  <TableCell > <span className="text-divyang">IT / ITES</span></TableCell>
                  <TableCell >0</TableCell>
                  <TableCell >
                    <div className='flex text-2xl'>
                      <FaEdit className='text-blue-600 cursor-pointer ' /> <MdDelete className='ml-5 text-red-700 cursor-pointer' />
                    </div>  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyTable;
