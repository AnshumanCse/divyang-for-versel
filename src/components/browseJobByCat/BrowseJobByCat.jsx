import React from "react";
import pd from "../../assets/pd.webp";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LayoutWraper from "@/src/layout/LayoutWraper";
const BrowseJobByCat = () => {
  const jobCat = [
    { id: 1, data: "Physical Disability", image: pd },
    { id: 2, data: "Intellectual Disability", image: pd },
    { id: 3, data: "Mental Illness", image: pd },
    { id: 4, data: "Chronic Neurological", image: pd },
    { id: 5, data: "Blood Disorder ", image: pd },
    { id: 6, data: "Multiple Disabilities ", image: pd },
  ];
  return (
    <LayoutWraper>
      <div className="flex flex-col items-center p-5">
        <h1 className="font-semibold text-2xl sm:text-xl py-5">
          Browse Jobs By Category
        </h1>
        <div className="flex justify-between gap-3 overflow-scroll w-full">
          {jobCat.map((item) => (
            <Link to="/jobs"  key={item.id}>
              <Card
               
                className="group border border-[#FE6200]  w-40 h-64 rounded-full relative mr-4 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.data}
                  className="object-cover h-64 w-40 rounded-full group-hover:scale-125 transition-all duration-500 cursor-pointer"
                />
                <div className="absolute top-0 w-full h-full rounded-full bg-opacity-60 bg-orange-600 backdrop-brightness-100 flex items-center justify-center">
                  <h1 className="text-white text-xl text-center">
                    {item.data}
                  </h1>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </LayoutWraper>
  );
};
export default BrowseJobByCat;
