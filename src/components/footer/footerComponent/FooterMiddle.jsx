import LayoutWraper from "@/src/layout/LayoutWraper";
import React from "react";
import logo from "../../../assets/DivyangCareeIcon.png"
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
const FooterMiddle = () => {
  return (
    <LayoutWraper>
      <footer className="p-10">
        {/* <div className="mx-auto py-10"> */}

        {/* <div className="grid mx-auto grid-cols-1 lg:grid-cols-3">
          <div>
            <div className="flex justify-center items-center sm:justify-start">
              <p className="text-lg font-medium ">Disclamer</p>
            </div>
            <p className="  leading-relaxed   sm:max-w-xs sm:mx-0 sm:text-left">
              (www.divyangcareer.com) is a career platform connecting employers
              and candidates. We make no particular recommendations for any job
              or employer. We do not charge any fees or guarantee job placements
              and do not give any references. We reserve the right to take
              strict action for any wrongful activity conducted by any person.
            </p>
            <p className="font-bold ">
              We do not provide jobs and this is informative platform only.
            </p>
            <p className=" mx-auto leading-relaxed   sm:max-w-xs sm:mx-0 sm:text-left">
              This website has been conceptualized by the PwD's (divyangs)
              specially for the PwD candidates. If you find any mistakes /
              suggestions please provide your feedback so that we can improvise
              it further. Write us at divyangcareer@gmail.com{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2  lg:col-span-2 md:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">About Us</p>
              <nav className="">
                <ul className="space-y-4 text-sm">
                  <li>
                    <p>
                      At Divyang Career, we believe in the power of inclusivity.
                      We're not just a job portal
                    </p>
                  </li>
                  <li>
                    <Link >
                      T. +91 877 935 2803
                    </Link>
                  </li>
                  <li>
                    <Link >
                      E. divyangcareer@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link  >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Useful Links</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Founders Note
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Connect</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm mr-0">
                  <li>
                    <Link >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link >
                      Youtube
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
        {/* </div> */}


        {/* <div className="flex  flex-wrap lg:flex-nowrap">
          <div className="flex flex-col justify-center gap-3 w-2/5" >
            <div>
              <span className="text-xl text-black" >Disclaimer</span>
            </div>
            <div className="">
              <div className="">
                <p>(www.divyangcareer.com) is a career platform connecting employers and candidates. We make no particular recommendations for any job or employer. We do not charge any fees or guarantee job placements and do not give any references. We reserve the right to take strict action for any wrongful activity conducted by any person.</p> <br />
              </div>
              <div>
                <p>We do not provide jobs and this is informative platform only.</p>
              </div>
              <div>
                <p>This website has been conceptualized by the PwD's (divyangs) specially for the PwD candidates. If you find any mistakes / suggestions please provide your feedback so that we can improvise it further. Write us at divyangcareer@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-end">
            <div className="flex ms-6  flex-col gap-3 ">
              <p className="text-xl text-black">About Us</p>
              <div>
                <p>At Divyang Career, we believe in <br />
                  the power of inclusivity. We're not <br />
                  just a job portal</p>
              </div>
              <div>
                <span>T. +91 877 935 2803</span>
              </div>
              <div>
                <span>E. divyangcareer@gmail.com</span>
              </div>
              <div>
                <span>Working Day & Time</span>
              </div>
              <div>
                <span>Monday - Friday </span> <br />
                <span>09 Am to 05 Pm</span>
              </div>
            </div>
            <div className="flex ms-6  flex-col gap-3">
              <p className="text-xl">Connect</p>
              <div>Jobs</div>
              <div>FAQ</div>
              <div>Contact us</div>
              <div>Founders Note</div>
              <div>Privacy Policy</div>
            </div>
            <div className="flex ms-6  flex-col gap-3">
              <p className="text-xl mx-3">Useful </p>
              <div>Linkedin</div>
              <div>Twitter</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Youtube</div>
            </div>
          </div>


        </div> */}




        <div className="px-3 pt-4 lg:px-9 ">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a className="inline-flex items-center">
                <img src={logo} alt="logo" className="h-8 w-10" />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">divyangcareer</span>
              </a>
              <div className="mt-6 lg:max-w-xl">
                <p className="text-lg text-gray-800">
                (www.divyangcareer.com) is a career platform connecting employers and candidates. We make no particular recommendations for any job or employer. We do not charge any fees or guarantee job placements and do not give any references. We reserve the right to take strict action for any wrongful activity conducted by any person.
                </p> 
                <br />
                <p className="font-bold">
                We do not provide jobs and this is informative platform only.
                </p> <br />
                <p className="text-lg text-gray-800">
                This website has been conceptualized by the PwD's (divyangs) specially for the PwD candidates. If you find any mistakes / suggestions please provide your feedback so that we can improvise it further. Write us at divyangcareer@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex flex-col">
              <p className="text-base gap-3 font-bold tracking-wide text-gray-900">Useful Links</p>
              <Link to="jobs" className="text-lg mt-1 text-gray-500 hover:text-divyang">Jobs</Link>
              <Link  className="text-lg mt-1 text-gray-500 hover:text-divyang">FAQ</Link>
              <Link to="contact" className="text-lg mt-1 text-gray-500 hover:text-divyang">Contact us</Link>
              <Link to="founder" className="text-lg mt-1 text-gray-500 hover:text-divyang">Founders Note</Link>
              <Link className="text-lg mt-1 text-gray-500 hover:text-divyang">Privacy Policy</Link>
              </div>
              <div className="flex mt-4 flex-col">
              <p className="text-base font-bold tracking-wide text-gray-900">About Us</p>
              <p className="text-lg mt-1 text-gray-500 ">At Divyang Career, we believe in the power of inclusivity. We're not just a job portal</p>
              <Link className="text-lg mt-1 text-gray-500 hover:text-divyang">T. +91 877 935 2803</Link>
              <Link className="text-lg mt-1 text-gray-500 hover:text-divyang">E. divyangcareer@gmail.com</Link>
              <p className="text-lg mt-1 text-gray-500 ">Working Day & Time</p>
              <p className="text-lg mt-1 text-gray-500 ">Monday - Friday <br />09 Am to 05 Pm</p>
              </div>
            </div>
            
            <div>
              <div className="flex  flex-col  gap-1 px-2">
              <p className="text-base font-bold tracking-wide text-gray-900">Connect</p>
             <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
              <FaLinkedin/>
              <Link >Linkedin</Link>
             </div>
             <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
              <FiTwitter/>
              <Link >Twitter</Link>
             </div>
             <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
              <FaFacebook/>
              <Link >Facebook</Link>
             </div>
             <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
              <FaInstagram/>
              <Link >Instagram</Link>
             </div>
             <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
              <CiYoutube/>
              <Link >Youtube</Link>
             </div>
              </div>
            </div>
          </div>

        </div>

      </footer>
    </LayoutWraper>
  );
};
export default FooterMiddle;
