
import React, { useState } from 'react'
import PostJobhtitel from './PostJobComp/PostJobhtitel'
import { SelectOption } from '../../GlobalComponents/SelectOption'
import { Link } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Icon } from '@radix-ui/react-select';

const PostJobForm = () => {

  const JobCategories = [
    { value: "Blood Disorder" },
    { value: "Heamophilia" },
    { value: "Sickle Cell Disease" },
    { value: "Thalassemia" },
    { value: "Chronic Neurological" },
    { value: "Multiple Sclerosis" },
    { value: "Parkinsons Disease" },
    { value: "Intellctual Disability" },
    { value: "Autism Spectrum Disorder" },
    { value: "Specific Learning Disabilities" },
    { value: "Mental lllness" },
    { value: "Multiple Disabilities" },
    { value: "Physicl Disabilities" },
    { value: "Hearing Imparirment" },
    { value: "Locomotor Disbility" },
    { value: "Speech and Language Disability" },
    { value: "Visual Impairment" },
  ]
  const JobType = [
    { value: "Government" },
    { value: "NGO" },
    { value: "Private" },
  ]
  const Experience = [
    { value: "0 - 1 Years" },
    { value: "1 - 2 Years" },
    { value: "3 - 5 Years" },
    { value: "6 - 9 Years" },
    { value: "10+ Years" },
  ]
  const Careerlevel = [
    { value: "Accounts / Taxation" },
    { value: "BFSI" },
    { value: "Ecommerce" },
    { value: "Education" },
    { value: "Hospitality" },
    { value: "IT / ITES" },
    { value: "Manufacturing" },
    { value: "Retail" },
  ]
  const Qualification = [
    { value: "10th Pass" },
    { value: "12th Pass" },
    { value: "Below 10th" },
    { value: "Certificate" },
    { value: "Degree" },
    { value: "Diploma" },
    { value: "Doctorate" },
    { value: "Gradaute" },
    { value: "Master" },
    { value: "Post Graduate" },
    { value: "Under Graduate" },
  ]
  const QuantityToBeRecruited = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10+" },
  ]
  const Gender = [
    { value: "Male" },
    { value: "Female" },
    { value: "Other" },
  ]
  const ShowPayBy = [
    { value: "Range" },
    { value: "Starting Amount" },
    { value: "Maximum Amount" },
    { value: "Negotiable Price" },
  ]
  const Currency = [
    { value: "(₹) - INR" },
  ]
  const Rate = [
    { value: "None" },
    { value: "Per Hour" },
    { value: "Per Day" },
    { value: "Per Week" },
    { value: "Per Month" },
    { value: "Per Year" },
  ]
  const option = [
    { value: "Blood Disorder" },
  ]

  const [file1, setFile1] = useState();
  const [file, setFile] = useState();
  const handleFileChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
  }
  // console.log(file)
  const removeImg1 = () => {
    setFile1(null)
  }
  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const removeImg = () => {
    setFile1(null)
  }
  return (

    <>
      <div className='flex flex-row flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col  w-full md:w-1/5 ' >
          <PostJobhtitel />
          <form className='w-full  p-6 ' >
            <div className='flex flex-col rounded-md p-3 justify-evenly border m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Basic info</label>
              </div>
              <div className='mt-5 ' >
                <label className='text-xl'>Job title <span>*</span> </label>
                <input type="text" placeholder='Name' className='w-full h-12 rounded-lg ' />
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full p-2'>
                  <label className='font-bold' >Jobs Categories <span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={JobCategories} />
                </div>
                <div className='w-full p-2'>
                  <label className='font-bold ' >Job type <span className='text-divyang' >*</span></label>
                  <SelectOption placeholder="Select Option" selectlabel="Select Option" options={JobType} />
                </div>
              </div>



              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full p-2'>
                  <label className='font-bold'>Description <span className='text-divyang' >*</span></label> <br />
                  <textarea className='w-full ' rows={5}></textarea>

                </div>

              </div>

              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full p-2'>
                  <label className='font-bold' >Career level<span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={Careerlevel} />
                </div>
                <div className='w-full p-2'>
                  <label className='font-bold ' >Experience <span className='text-divyang' >*</span></label>
                  <SelectOption placeholder="Select Option" selectlabel="Select Option" options={Experience} />
                </div>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full p-2'>
                  <label className='font-bold' >Qualification <span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={Qualification} />
                </div>
                <div className='w-full p-2'>
                  <label className='font-bold ' >Quantity to be recruited<span className='text-divyang' >*</span></label>
                  <SelectOption placeholder="Select Option" selectlabel="Select Option" options={QuantityToBeRecruited} />
                </div>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className=' w-full md:w-1/2 p-2'>
                  <label className='font-bold' >Gender <span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={Gender} />
                </div>
              </div>
            </div>
            <div className='flex flex-col p-3 justify-evenly rounded-md border mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Salary</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full p-2'>
                  <label className='font-bold' >Show pay by <span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={ShowPayBy} />
                </div>
                <div className='w-full p-2'>
                  <label className='font-bold ' >Currency <span className='text-divyang' >*</span></label>
                  <SelectOption placeholder="Select Option" selectlabel="Select Option" options={Currency} />
                </div>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full p-2'>
                  <label className='font-bold' >Minimum <span className='text-divyang' >*</span></label>
                  <input type="number" className='w-full rounded-lg focus-within:ring-divyang border focus:border-none' />
                </div>
                <div className='w-full p-2'>
                  <label className='font-bold' > Maximum <span className='text-divyang' >*</span></label>
                  <input type="number" className='w-full rounded-lg focus-within:ring-divyang border focus:border-none' />
                </div>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >

                <div className='w-full md:w-1/2 p-2'>
                  <label className='font-bold' >Rate <span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={Rate} />
                </div>
              </div>

            </div>
            <div className='flex flex-col p-3 justify-evenly border rounded-md mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Job apply type</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full md:w-1/2 p-2'>
                  <label className='font-bold' >Select type<span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={option} />
                </div>
              </div>
            </div>
            <div className='flex flex-col p-3 rounded-md justify-evenly border mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Company</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full md:w-1/2 p-2'>
                  <label className='font-bold' >Select company<span className='text-divyang' >*</span></label>
                  <SelectOption className="" placeholder="Select Option" selectlabel="Select Option" options={option} />
                  <button className='mt-4 ml-1 text-divyang hover:border-b-2' ><Link>Create new company</Link></button>
                </div>
              </div>
            </div>
            <div className='flex flex-col p-3 justify-evenly border rounded-md mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Location</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap'>
                <div className='w-full md:w-1/2 p-2 flex flex-col'>
                  <label className='font-bold' >Select company<span className='text-divyang' >*</span></label>
                  <input type="text" className='rounded-lg' />
                </div>
              </div>
            </div>

            <div className='flex flex-col p-3 justify-evenly rounded-md border mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Cover Image</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full md:w-1/2 p-2 flex flex-col'>
                  <div className='rounded-2xl relative '>
                    {!file1 && <label className={"flex justify-center  border - [0.5px] items-center  border-dashed rounded-2xl  border-[#8E98A8] cursor-pointer text-center flex-col h-full w-full"}>
                      <Icon icon={"ic:round-image"} className='text-4xl text-[#8E98A8]' />
                      <p className='text-[#8E98A8] text-[8px]'>Choose File
                        <span className='text-black'> click to browser</span></p>
                      <input type="file" onChange={handleFileChange1} className='hidden' />
                    </label>}
                    {file1 &&
                      <> <Icon icon={"ic:round-clear"} className='text-2xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer hover:scale-2'
                        onClick={removeImg1}
                      />
                        <img src={file1} className='h-56  w-40  rounded-2xl' />
                      </>}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col p-3 justify-evenly rounded-md border mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Gallery</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full md:w-1/2 p-2 flex flex-col'>
                  <div className='rounded-2xl relative '>
                    {!file && <label className={"flex justify-center  border - [0.5px] items-center  border-dashed rounded-2xl  border-[#8E98A8] cursor-pointer text-center flex-col h-full w-full"}>
                      <Icon icon={"ic:round-image"} className='text-4xl text-[#8E98A8]' />
                      <p className='text-[#8E98A8] text-[8px]'>Choose File
                        <span className='text-black'> click to browser</span></p>
                      <input type="file" onChange={handleFileChange} className='hidden' />
                    </label>}
                    {file &&
                      <> <Icon icon={"ic:round-clear"} className='text-2xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer hover:scale-2'
                        onClick={removeImg}
                      />
                        <img src={file} className='h-56  w-40 rounded-2xl' />
                      </>}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col p-3 justify-evenly rounded-md border mt-6 m-80' style={{ background: "#ffffff" }} >
              <div>
                <label className='pt-3 text-2xl'>Video</label>
              </div>
              <div className='flex w-full mt-5 lg:flex-nowrap flex-wrap ' >
                <div className='w-full md:w-1/2 p-2 flex flex-col'>
                  <label className='font-bold' >Introduction video Url<span className='text-divyang' >*</span></label>
                  <input type="text" placeholder='youtubeOptions' className='rounded-lg' />
                </div>
              </div>
            </div>

          </form>

        </div>
        <div className=' w-full md:w-1/2 ' >
          <div className='h-80 py-24 ' style={{position:"sticky", top:"100px"}}>
            <span className='text-2xl'> About this job</span>
            <div className=' mt-2 flex flex-col p-5'>
              <div className='border rounded-lg p-3' style={{background:"#ffff"}}>
              <p className='text-2xl'>Title of job</p>
              <p className='mt-3'>by Company Name in <span className='text-divyang'>Category</span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostJobForm