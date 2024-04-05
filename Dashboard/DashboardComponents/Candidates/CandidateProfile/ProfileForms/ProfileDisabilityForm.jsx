import React, { useState } from "react";
import { SelectOption } from "../../../GlobalComponents/SelectOption";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Icon } from "@radix-ui/react-select";
import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";

const ProfileDisabilityForm = () => {
  const UDID = [{ value: "Yes" }, { value: "No" }];

  const [file1, setFile1] = useState();
  const [file, setFile] = useState();
  const handleFileChange1 = (e) => {
    setFile1(URL.createObjectURL(e.target.files[0]));
  };
  // console.log(file)
  const removeImg1 = () => {
    setFile1(null);
  };
  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  // console.log(file)
  const removeImg = () => {
    setFile1(null);
  };
  return (
    <form
      className="flex flex-col w-full rounded-md p-8"
      style={{ background: "#fafafa" }}
    >
      <div className="flex flex-col justify-evenly p-3 rounded-md border">
        <div>
          <label className="pt-3 text-2xl">Disability Info</label>
        </div>
        <div className="flex flex-col p-3 justify-evenly">
          <div className="flex w-full lg:flex-nowrap flex-wrap ">
            <div className="w-full p-2">
              <label>
                UDID <span className="text-divyang">*</span>
              </label>
              <SelectOption
                className="w-full rounded-md border-1 focus:border-none focus:ring-0 border-1 border-black"
                placeholder="Select Option"
                selectlabel="Select Option"
                options={UDID}
              />
            </div>
            <div className="w-full p-1">
              <label>
                {" "}
                UDID Number<span className="text-divyang">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md border-1 focus:border-none"
                placeholder="Your value"
              />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <label className="pt-3 text-md">Upload UDID Card</label>
            </div>
            <div className="flex w-full mt-2 lg:flex-nowrap flex-wrap ">
              <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border - [0.5px] border-[#8E98A8]">
                {!file && (
                  <label
                    className={
                      "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                    }
                  >
                    <MdOutlineFileUpload className="w-6 h-6" />
                    <p className="text-[8px] text-divyang">Upload Resume</p>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden "
                    />
                  </label>
                )}
                {file && (
                  <>
                    {" "}
                    <AiOutlineDelete
                      icon={"ic:round-clear"}
                      className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                      onClick={removeImg}
                    />
                    <img src={file} className="w-full object-cover" />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <label className="pt-3 text-md">
                Upload Disability Certificate
              </label>
            </div>
            <div className="flex w-full mt-2 lg:flex-nowrap flex-wrap ">
              <div className="rounded-2xl w-full h-40 object-fit overflow-hidden relative border-dotted border - [0.5px] border-[#8E98A8]">
                {!file1 && (
                  <label
                    className={
                      "flex justify-center w-full h-full items-center cursor-pointer text-center flex-col"
                    }
                  >
                    <MdOutlineFileUpload className="w-6 h-6" />
                    <p className="text-[8px] text-divyang">Click here</p>
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
                    <AiOutlineDelete
                      icon={"ic:round-clear"}
                      className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                      onClick={removeImg1}
                    />
                    <img src={file1} className="w-full object-cover" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:flex-nowrap flex-wrap ">
          <div className="w-full md:w-1/2 p-2">
            <label>
              Disability Percentage (As per certificate){" "}
              <span className="text-divyang">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded-md border-1 focus:border-none mt-2"
              placeholder="Your value"
            />
          </div>
        </div>
      </div>

      <div
        className="flex p-3 justify-end mt-6"
        style={{ background: "#FFFFFF" }}
      >
        <Button className="rounded-full px-8 bg-divyang ">Publish</Button>
      </div>
    </form>
  );
};

export default ProfileDisabilityForm;
