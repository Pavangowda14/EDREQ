import React from "react";
import Button from "../../components/Button";

const MyProfile = () => {
  return (
    <>
      <div className="my-5 mx-auto md:w-[80%] grid grid:cols-1 lg:grid-cols-3 lg:gap-10 bg-n-2 lg:p-7">
        <div className="flex justify-center items-center flex-col gap-6  p-5  ">
          <div className="border-2 border-n-15 rounded-full w-[6rem] h-[6rem] flex items-center justify-center overflow-hidden bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 1.5c-3.313 0-6 2.011-6 4.5v1.5h12v-1.5c0-2.489-2.687-4.5-6-4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="h4">Pavan</p>
            <p className="font-semibold">pavan@gmail.com</p>
          </div>
          <p>
            <span className="text-neutral-500">class </span>
            <span className="font-semibold">10</span>
          </p>
          <p>
            <span className="text-neutral-500">Board </span>
            <span className="font-semibold">CBSE</span>
          </p>
          <Button className="bg-n-8 text-n-15b rounded-3xl">Change</Button>
        </div>
        <div className="lg:col-span-2 flex p-5 flex-col">
          <div className="flex flex-col justify-center items-center">
            {" "}
            <p className="h4">Public Profile</p>
            <p>Add Information about Yourself</p>
          </div>
          <form className="mt-7 flex flex-col gap-5">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">
                Enter your name
              </label>{" "}
              <input className="flex-grow p-3 border rounded-lg" type="text" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">Gender</label>
              <select className="flex-grow p-3 bg-white outline-none">
                <option>Male</option>
                <option>Female</option>
                <option>others</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">Address</label>
              <textarea className="flex-grow" rows="4"></textarea>
            </div>
            <div className="flex justify-between lg:justify-center lg:gap-6 mt-8">
              <Button className="px-8">Cancel</Button>
              <Button className="bg-n-15 text-n-8 px-8">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
