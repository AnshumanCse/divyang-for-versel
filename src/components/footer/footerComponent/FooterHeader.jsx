import LayoutWraper from "@/src/layout/LayoutWraper";
import React from "react";
const FooterHeader = () => {
  return (
    <div className="py-10 border-t border-b border-gray-300 ">
      <LayoutWraper>
        <div className=" px-16 grid grid-cols-1 justify-between items-center gap-5 md:grid-cols-2 lg:grid-cols-2 sm:justify-center">
          <div className="flex gap-3 justify-center lg:flex-nowrap flex-col flex-wrap w-full">
            <div>
              <h3 className=" text-xl font-bold">
                Subscribe to our newsletter
              </h3>
            </div>
            <div>
              <p className="text-gray-700">
                We'll keep you updated with the best new jobs.
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <div className="flex justify-center gap-3 lg:flex-nowrap flex-wrap lg:w-full">
              <div className="w-full inline-flex items-center">
                <input
                  type="email"
                  name=""
                  id=""
                  className="p-2  border-2 border-gray-400 rounded-full w-80 border-opacity-75 md:border-opacity-50 placeholder-black"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center lg:w-full justify-center px-8 w-full py-2 rounded-full bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  placeholder="Enter your email"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutWraper>
    </div>
  );
};
export default FooterHeader;
