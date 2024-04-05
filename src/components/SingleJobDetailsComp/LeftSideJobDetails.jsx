import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { IoLocationOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";

const LeftSideJobDetails = (job) => {
    return (
        <Card className='shadow-md p-5  flex flex-col w-full '>
            <div>
                <h1 className='text-3xl font-bold hover:text-divyang'>
                    Customer Support Executive – For Specially Abled
                </h1>
                <p>by pwdnaukri.com in <span className='text-divyang'>Locomotor Disability, Physical Disability</span></p>
            </div>

            <div className='flex gap-2  border-b-2 p-5 pt[-10px]'>
                <Badge className='bg-[#f5ecff] text-[#8369c7] '>Government</Badge>
                <Badge className='bg-[#d9eaf5] text-divyang '> New Delhi</Badge>
                <Badge className='bg-[#d9eaf5] text-divyang  '>17,000₹/month</Badge>
            </div>
            <div className='pt-3 flex flex-col gap-5'>
                <h2 className='text-divyang font-bold'>Job role insights</h2>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-[50%] bg-[#d9eaf5]  p-2'>
                            <IoLocationOutline className='text-3xl text-divyang ' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Hiring location</h3>
                            <p>Mumbai</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-[50%] bg-[#d9eaf5]  p-2'>
                            <LiaRupeeSignSolid className='text-3xl text-divyang ' />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Hiring location</h3>
                            <p>Mumbai</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-7 flex flex-col gap-5'>
                <h2 className='text-xl font-bold'>Description</h2>

                <ul>
                    <li>Roles and Responsibilities:</li>
                    <li>Interacting with the customers on call, chat or email.</li>
                    <li>Resolve their queries related to orders</li>
                </ul>
            </div>
        </Card>
    )
}

export default LeftSideJobDetails