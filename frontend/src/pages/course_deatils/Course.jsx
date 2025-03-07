import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import AccordianItem from "../../components/AccordianItem";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { useFetchCourseDetails } from "./api/getCourseDetail";

const items = [
  {
    title: "Question 1",
    content: "This is the content for Question 1.",
  },
  {
    title: "Question 2",
    content: "This is the content for Question 2.",
  },
  {
    title: "Question 3",
    content: "This is the content for Question 3.",
  },
];

const Course = () => {
  const { id } = useParams();

  const {
    data: courseDetailsData,
    refetch: refetchCourseDetails,
    isFetching,
    isLoading,
    isSuccess,
  } = useFetchCourseDetails({ courseId: id });

  return (
    <>
      <div className="py-5 px-7 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="sm:h-[16rem] md:h-full">
          <img
            src={courseDetailsData?.course.thumbnail}
            alt={courseDetailsData?.course.title}
            className="w-full h-full object-fill border-1 rounded-lg"
          />
        </div>
        <div className="lg:px-5 space-y-6">
          <p className="h3 font-semibold">{courseDetailsData?.course.title}</p>
          <div className="space-y-4">
            <div className="flex items-center text-sm flex-wrap">
              <p className="mr-2">Subjects Covered:</p>
              <div className="flex items-center text-sm flex-wrap space-x-2">
                <p className="border rounded-lg px-2 py-1 bg-n-2">Biology</p>
                <p className="border rounded-lg px-2 py-1 bg-n-2">Maths</p>
                <p className="border rounded-lg px-2 py-1 bg-n-2">Chemistry</p>
              </div>
            </div>
            <div className="flex items-center text-sm flex-wrap">
              <p className="mr-2">Language:</p>
              <p className="border rounded-lg bg-n-7 text-n-8 px-3 py-1">
                English
              </p>
            </div>
          </div>
          <p className="h5">₹{courseDetailsData?.course.price}</p>
          <Button className="text-n-8 bg-n-15 w-full md:w-2/3">Buy Now</Button>
        </div>
      </div>
      <div className="m-7 py-2 border">
        <p className="px-3 py-4 h4">Course Details</p>
        <p className="p-3 border bg-n-2">What you'll learn</p>
        <div className="p-3">
          <ul className="flex flex-wrap justify-between ">
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-n-15" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-n-15" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-n-15" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-n-15" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-n-15" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="w-1/2 py-2 flex items-center gap-2">
              <FaCheck className="text-n-15" />
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
      </div>
      <div className="container space-y-6">
        <p className="h4 font-semibold">Frequently asked questions</p>
        {items.map((item, index) => (
          <AccordianItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Course;
