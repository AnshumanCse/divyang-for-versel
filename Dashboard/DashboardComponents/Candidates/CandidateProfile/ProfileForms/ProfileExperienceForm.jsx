import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";

const ProfileExperienceForm = () => {
  const [jobs, setJobs] = useState([
    { title: "", company: "", from: "", to: "", description: "" },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...jobs];
    list[index][name] = value;
    setJobs(list);
  };

  const handleAddFields = () => {
    setJobs([
      ...jobs,
      { title: "", company: "", from: "", to: "", description: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    // const updatedJobs = jobs.filter((_, i) => i !== index);
    // setJobs(updatedJobs);

    const list = [...jobs];
    list.splice(index, 1);
    setJobs(list);
  };

  return (
    <div className="flex flex-col w-full" style={{ background: "#fafafa" }}>
      <form className="w-full p-6">
        <div>
          <label className="pt-3 text-2xl">Experience info</label>
        </div>
        <div>
          {jobs.map((job, index) => (
            <div key={index} className="flex justify-center items-center">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col p-3 w-full"
              >
                <AccordionItem value={`item-${index}`} className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <AccordionTrigger className="">
                        Experience
                      </AccordionTrigger>
                    </div>
                    <div>
                      <AiOutlineDelete
                        icon={"ic:round-clear"}
                        className="text-3xl text-light-rt bg-main-rt rounded-full absolute top-[-10px] right-[-8px] drop-shadow-lg cursor-pointer text-red-700 hover:scale-2"
                        onClick={() => handleRemoveFields(index)}
                      />
                    </div>
                  </div>
                  <AccordionContent className="">
                    <div className="flex w-full lg:flex-nowrap flex-wrap ">
                      <div className="w-full p-2">
                        <label>
                          Job Title <span className="text-divyang">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border-1 focus:border-none mt-2"
                          onChange={(event) => handleInputChange(index, event)}
                          placeholder="Job Title"
                          value={job.title}
                          name="title"
                        />
                      </div>
                      <div className="w-full p-2">
                        <label>
                          {" "}
                          Company <span className="text-divyang">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border-1 focus:border-none mt-2"
                          onChange={(event) => handleInputChange(index, event)}
                          placeholder="Company"
                          value={job.company}
                          name="company"
                        />
                      </div>
                    </div>
                    <div className="flex w-full lg:flex-nowrap flex-wrap ">
                      <div className="w-full p-2">
                        <label>
                          From <span className="text-divyang">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border-1 focus:border-none mt-2"
                          onChange={(event) => handleInputChange(index, event)}
                          value={job.from}
                          placeholder="D/M/Y"
                          name="from"
                        />
                      </div>
                      <div className="w-full p-2">
                        <label>
                          {" "}
                          To <span className="text-divyang">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border-1 focus:border-none mt-2"
                          onChange={(event) => handleInputChange(index, event)}
                          value={job.to}
                          placeholder="D/M/Y"
                          name="to"
                        />
                      </div>
                    </div>
                    <div className="flex w-full lg:flex-nowrap flex-wrap ">
                      <div className="w-full p-2">
                        <label>
                          Description <span className="text-divyang">*</span>
                        </label>
                        <textarea
                          type="text"
                          className="w-full rounded-md border-1 focus:border-none mt-2"
                          onChange={(event) => handleInputChange(index, event)}
                          value={job.description}
                          placeholder="description"
                          rows="5"
                          name="description"
                        />
                      </div>
                    </div>
                    <div></div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
      </form>
    </div>
  );
};

export default ProfileExperienceForm;
