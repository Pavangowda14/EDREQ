import React from "react";
import { FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-n-2 pt-8 mt-4">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div>
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">
              EDREQ
            </h1>
            <div className="flex flex-col items-start mt-4 space-y-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id</p>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt /> <span>9999999999</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdMail /> <a href="#">info@edreq.in</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaYoutube /> <a href="#">youtube.com</a>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-n-1">Company</p>

            <div className="flex flex-col items-start mt-4 space-y-2">
              <a
                href="/about-us"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                About us
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Careers
              </a>
              <a
                href="/why-edreq"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Why Edreq
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Help and Support
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-n-1">Company</p>

            <div className="flex flex-col items-start mt-4 space-y-2">
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                About us
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Help and Support
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-n-1">Company</p>

            <div className="flex flex-col items-start mt-4 space-y-2">
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                About us
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-n-1/500 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
              >
                Help and Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm md:text-lg ">
          © 2023 Chakrapriya Edu-Ventures Pvt Ltd. All rights reserved.
        </p>
        <div className="mt-2 lg:m-0 space-x-4 lg:space-x-7">
          <a
            href="#"
            className="text-n-1/500 text-sm md:text-lg transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-n-1/500 text-sm md:text-lg transition-colors duration-300 hover:cursor-pointer hover:text-blue-500"
          >
            Terms and Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
