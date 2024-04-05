
import React, { useState } from 'react';
import JobsFilter from './JobsFilter';
import JobsCard from './JobsCard';
import { RxCross1 } from "react-icons/rx";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CiFilter } from "react-icons/ci";
import { FaFilterCircleXmark } from "react-icons/fa6";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



// Dummy Data
const CATEGORIES = ['Blood Disorder', 'Haemophilia', 'Chronic Neurological', 'Multiple Sclerosis', 'Parkinson’s Disease', 'Intellectual Disability', 'Mental Illness', 'Multiple Disabilities', 'Physical Disability', 'Hearing Impairment', 'Locomotor Disability', 'Language Disability', 'Visual Impairment', 'Sales'];
const JOBTYPES = ['Government', 'NGO', 'Private',]
const JOBSCAREER = ['Accounts / Taxation', 'BFSI', 'Ecommerce', 'Education', 'Hospitality', 'Manufacturing', 'Retail']
const JOBSQUALIFICATION = ['10th Pass', '12th Pass', 'Below 10th', 'Certificate', 'Degree', 'Diploma', 'Graduate', 'Master', 'Post Graduate',]
const JOBSEXP = ['0 - 1 Years', '1 - 2 Years', '3 - 5 Years', '5 Year +']
const JOBSGENDER = ['Female', 'Male']

const JOBS = [
    {
        id: 1,
        title: 'Customer Support Executive – For Specially Abled',
        category: 'Blood Disorder',
        type: 'NGO',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 2,
        title: 'Domestic Data Entry Operator',
        category: 'Haemophilia',
        type: 'Private',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 3,
        title: 'Accounts Executive for Leading Bank',
        category: 'Chronic Neurological',
        type: 'Government',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 4,
        title: 'Accounts Executive for Leading Bank',
        category: 'Physical Disability',
        type: 'Government',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },
    {
        id: 5,
        title: 'Domestic Data Entry Operator',
        category: 'Haemophilia',
        type: 'Private',
        location: 'Mumbai',
        salary: '17,000/Month',
        timeline: '14 days left to apply',
        description: 'This job is for Blood Disorder Candidate.'
    },


];

const JobPortalPage = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    // 👇###################### Filter Functions ##############################

    const handleFilterChange = (category, isChecked, type) => {
        setSelectedFilters(prevFilters =>
            isChecked
                ? [...prevFilters, category]
                : prevFilters.filter(filter => filter !== category)
        );
    };

    const handleClearFilters = () => {
        setSelectedFilters([]);
    };

    const filteredJobs = JOBS.filter(job =>
        selectedFilters.length === 0
            ? true
            : selectedFilters.includes(job.category) || selectedFilters.includes(job.type)
    );
    // 👆👆###################### Filter Functions ##############################

    // ###################### Props data 👇
    const headings = "JOBS CATEGORIES"
    const filterTitle = "Filters"
    const clear = `Clear All `
    const jbtype = "JOBS TYPE"
    const jobsCareer = "JOBS CAREER"
    const jobsQualification = "JOBS QUALIFICATION"
    const jobsExp = "JOBS EXPERIENCE"
    const jobsGender = "JOBS GENDER"
    return (
        <div className='flex flex-col justify-end'>
            <div className='lg:hidden flex items-center justify-between mr-5 ml-5 mt-5'>
                {/* <h1 className=' flex items-center gap-1'><CiFilter className='' />Filter </h1> */}
                <div className='flex items-center lg:hidden'>
                    <Sheet className='lg:hidden'>
                        <SheetTrigger>Filters</SheetTrigger>
                        <SheetContent className="w-[300px] sm:w-[400px] overflow-scroll lg:hidden">
                            <SheetHeader>
                                <SheetTitle>Choose your Job Filter</SheetTitle>
                                <SheetDescription>

                                </SheetDescription>
                                <div className='overflow-scroll'>
                                    <JobsFilter
                                        filterTitle={filterTitle}
                                        clear={clear}
                                        heading={headings}
                                        categories={CATEGORIES}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />

                                    <JobsFilter
                                        heading={jbtype}
                                        categories={JOBTYPES}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />
                                    <JobsFilter
                                        heading={jobsCareer}
                                        categories={JOBSCAREER}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />
                                    <JobsFilter
                                        heading={jobsQualification}
                                        categories={JOBSQUALIFICATION}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />
                                    <JobsFilter
                                        heading={jobsExp}
                                        categories={JOBSEXP}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />

                                    <JobsFilter
                                        heading={jobsGender}
                                        categories={JOBSGENDER}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />

                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <CiFilter className='' />
                </div>

                <span onClick={handleClearFilters} className='flex items-center gap-1'>Clear All <RxCross1 /></span>
            </div>
            <div className="flex justify-center p-5">

                {/*###################### Left Side: Job Filters ############################*/}
                <div className=" pr-6 lg:flex flex-col  gap-5 hidden">
                    <JobsFilter
                        filterTitle={filterTitle}
                        clear={clear}
                        heading={headings}
                        categories={CATEGORIES}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />

                    <JobsFilter
                        heading={jbtype}
                        categories={JOBTYPES}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />
                    <JobsFilter
                        heading={jobsCareer}
                        categories={JOBSCAREER}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />
                    <JobsFilter
                        heading={jobsQualification}
                        categories={JOBSQUALIFICATION}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />
                    <JobsFilter
                        heading={jobsExp}
                        categories={JOBSEXP}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />

                    <JobsFilter
                        heading={jobsGender}
                        categories={JOBSGENDER}
                        selectedFilters={selectedFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />


                </div>

                {/* Right Side: Job Cards */}
                <div className="flex flex-col gap-5 w-full">
                    {filteredJobs.map(job => (
                        <JobsCard key={job.id} job={job} />
                    ))}
                    <Card className='border-orange-500 p-5  flex flex-col gap-3 w-full items-center'>

                        <h3 className='text-lg font-bold hover:text-divyang'>I Think your choice jobs are unavailabe Now</h3>
                        <Button className='max-w-80 bg-divyang' onClick={handleClearFilters}>Explore Other Jobs</Button>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default JobPortalPage;
