import React, { useState } from "react";
import { SelectOption } from "../../../GlobalComponents/SelectOption";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Icon } from "@radix-ui/react-select";
import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "@/components/ui/button";

import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";

const ProfileBasicForm = () => {
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
  ];
  const JobType = [
    { value: "Government" },
    { value: "NGO" },
    { value: "Private" },
  ];
  const Experience = [
    { value: "0 - 1 Years" },
    { value: "1 - 2 Years" },
    { value: "3 - 5 Years" },
    { value: "6 - 9 Years" },
    { value: "10+ Years" },
  ];
  const Careerlevel = [
    { value: "Accounts / Taxation" },
    { value: "BFSI" },
    { value: "Ecommerce" },
    { value: "Education" },
    { value: "Hospitality" },
    { value: "IT / ITES" },
    { value: "Manufacturing" },
    { value: "Retail" },
  ];
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
  ];
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
  ];
  const Age = [
    { value: "18 - 25" },
    { value: "25 - 30" },
    { value: "30 - 35" },
    { value: "35 - 40" },
    { value: "40 +" },
  ];
  const Gender = [{ value: "Male" }, { value: "Female" }, { value: "Other" }];

  const [socialNetworks, setSocialNetworks] = useState([{ name: "", url: "" }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...socialNetworks];
    list[index][name] = value;
    setSocialNetworks(list);
  };

  const handleAddFields = () => {
    setSocialNetworks([...socialNetworks, { name: "", url: "" }]);
  };

  const handleRemoveFields = (index) => {
    const list = [...socialNetworks];
    list.splice(index, 1);
    setSocialNetworks(list);
  };

  const [file1, setFile1] = useState();
  const handleFileChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
  };
  // console.log(file)
  const removeImg1 = () => {
    setFile1(null);
  };

  return (
    <form
      className="flex flex-col w-full rounded-md p-8"
      style={{ background: "#fafafa" }}
    >
      <div className="flex flex-col justify-evenly p-3 rounded-md border">
        <div>
          <label className="pt-3 text-2xl">Basic info</label>
        </div>
        <div className="flex flex-col p-3 justify-evenly">
          <div>
            <label className="pt-3 text-md">Your photo</label>
          </div>
          <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap ">
            <div className="rounded-2xl w-40 h-40 object-fit overflow-hidden relative border-dotted border - [0.5px] border-[#8E98A8]">
              {!file1 && (
                <label
                  className={
                    "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                  }
                >
                  <MdOutlineFileUpload className="w-6 h-6" />
                  <p className="text-[8px] text-divyang">Upload Image</p>
                  <input
                    type="file"
                    onChange={handleFileChange1}
                    className="hidden "
                  />
                </label>
              )}
              {file1 && (
                <>
                  {" "}
                  <Icon
                    icon={"ic:round-clear"}
                    className="text-2xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer hover:scale-2"
                    onClick={removeImg1}
                  />
                  <img src={file1} className="h-56  w-40  rounded-2xl" />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap ">
          <div className="w-full p-2">
            <label>
              First name <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="First name"
            />
          </div>
          <div className="w-full p-2">
            <label>
              {" "}
              Last name <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap ">
          <div className="w-full p-2">
            <label className="">
              Email address <span className="text-divyang">*</span>
            </label>
            <input
              type="email"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder=" Email address"
            />
          </div>
          <div className="w-full p-2">
            <label className="">
              {" "}
              Phone number <span className="text-divyang">*</span>
            </label>
            <input
              type="number"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap">
          <div className="md:w-1/2 w-full p-2">
            <label className="">
              Categories <span className="text-divyang">*</span>
            </label>
            <SelectOption
              className="w-full rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
              placeholder="Select Option"
              selectlabel="Select Option"
              options={JobCategories}
            />
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap">
          <div className="w-full p-2">
            <label className="">
              Description <span className="text-divyang">*</span>
            </label>
            <textarea
              id="w3review"
              name="w3review"
              rows="6"
              className="border rounded-md w-full mt-2"
              placeholder="Write description here"
            ></textarea>
          </div>
        </div>
        <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap ">
          <div className="w-full p-2">
            <label className="">
              {" "}
              Date of Birth <span className="text-divyang">*</span>
            </label>
            <input
              type="date"
              className="w-full rounded-md border-1 focus:border-none"
              placeholder="date"
            />
          </div>
          <div className="w-full p-2">
            <label>
              Age <span className="text-divyang">*</span>
            </label>
            <SelectOption
              className="w-full mt-2 rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
              placeholder="Select Option"
              selectlabel="Select Option"
              options={Age}
            />
          </div>
        </div>

        <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap">
          <div className="w-full p-2">
            <label>
              Gender <span className="text-divyang">*</span>
            </label>
            <SelectOption
              className="mt-2"
              placeholder="Select Option"
              selectlabel="Select Option"
              options={Gender}
            />
          </div>
          <div className="w-full p-2">
            <label>
              Qualification <span className="text-divyang">*</span>
            </label>
            <SelectOption
              className="mt-2"
              placeholder="Select Option"
              selectlabel="Select Option"
              options={Qualification}
            />
          </div>
        </div>
      </div>
      {/* Resume Section */}
      <div
        className="flex flex-col p-3 justify-evenly rounded-md border mt-5"
        style={{ background: "#FFFFFF" }}
      >
        <div>
          <label className="pt-3 text-xl font-semibold">Resume</label>
        </div>
        <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap ">
          <div className="flex flex-col p-3 justify-evenly">
            <div>
              <label className="pt-3 text-md font-semibold">
                CV Attachment
              </label>
            </div>
            <div className="flex w-full mt-5 lg:flex-nowrap flex-wrap rounded-full border">
              <input
                type="file"
                name=""
                id=""
                className="rounded-full border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* social section */}
      <div
        className="flex flex-col p-3 justify-evenly border rounded-md mt-6 m-80"
        style={{ background: "#FFFFFF" }}
      >
        <div>
          <label className="pt-3 text-xl font-semibold">Social Network</label>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap ">
          <div className="w-full p-2">
            <label>
              Twitter <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="twitter.com/candidate"
            />
          </div>
          <div className="w-full p-2">
            <label>
              {" "}
              Linkedin <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="linkedin.com/candidate"
            />
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap ">
          <div className="w-full p-2">
            <label>
              Facebook <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="facebook.com/candidate"
            />
          </div>
          <div className="w-full p-2">
            <label>
              {" "}
              Instagram <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="instagram.com/candidate"
            />
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap ">
          <div className="md:w-1/2 w-full p-2">
            <label>
              {" "}
              Youtube <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="youtube.com/candidate"
            />
          </div>
        </div>
        <div>
          {socialNetworks.map((network, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-wrap lg:flex-nowrap"
            >
              <div className="w-full p-2">
                <label>
                  Name <span className="text-divyang">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={network.name}
                  className="w-full rounded-md border-1 focus:border-none mt-2"
                  placeholder={`Enter name`}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="w-full p-2">
                <label>
                  URL <span className="text-divyang">*</span>
                </label>
                <input
                  type="text"
                  name="url"
                  value={network.url}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-full rounded-md border-1 focus:border-none mt-2"
                  placeholder={`Enter URL`}
                />
              </div>

              <div className="w-1/2 p-2 flex justify-center md:justify-starts ">
                <AiOutlineDelete
                  icon={"ic:round-clear"}
                  className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                  onClick={() => handleRemoveFields(index)}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="text-divyang mt-2 flex justify-center items-center gap-2 px-2"
            onClick={handleAddFields}
          >
            <IoIosArrowDropup />
            Add More
          </button>
        </div>
      </div>
      {/* Publish Button */}
      <div
        className="flex p-3 justify-end mt-6"
        style={{ background: "#FFFFFF" }}
      >
        <Button className="rounded-full px-8 bg-divyang ">Publish</Button>
      </div>
    </form>
  );
};

export default ProfileBasicForm;
