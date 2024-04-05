import React from 'react';
import { IoCameraOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
    return (
        <div>

            <Card className='border-orange-500 p-5  flex flex-col w-full '>
                <div>
                    <div className='flex justify-between items-center'>
                        <Link to='/jobs/:ID'>
                            <h3 className="text-lg font-bold hover:text-divyang ">{job.title}</h3>
                        </Link>
                        <FaRegHeart className=' hover:text-orange-500  text-xl cursor-pointer' />
                    </div>
                    <p className="font-medium text-divyang">{job.category}</p>

                </div>
                <div className='flex gap-2 pt-3'>
                    <Badge className='bg-[#f5ecff] text-[#8369c7] '>{job.type}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang '>{job.location}</Badge>
                    <Badge className='bg-[#d9eaf5] text-divyang '>{job.salary}</Badge>
                </div>
                <div className='flex justify-between pt-3'>
                    <p className="text-sm text-gray-700 text-divyang">{job.description}</p>
                    <p className="text-sm text-[#8369c7]">{job.timeline}</p>
                </div>


            </Card>


        </div>
    );
};
export default JobsCard