import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [courseContentOpen, setCourseContentOpen] = useState(false);
  const [singleLesson, setSingleLesson] = useState(null);

  const fetchMyCourses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/lessons/${courseId}`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setLessons(response.data.lessons);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyCourses();
  }, [courseId]);

  const handleCourseContentToggle = () => {
    setCourseContentOpen(!courseContentOpen);
  };

  return (
    <>
      <div className="mt-3 mx-1 lg:mx-3 flex space-x-2 h-[500px]">
        <div
          className={`${
            courseContentOpen ? "block" : "hidden"
          } lg:border lg:w-1/3 overflow-y-scroll fixed inset-0 lg:static lg:block lg:mx-auto z-40 lg:z-0d bg-n-2`}
        >
          <div className="p-4 flex justify-between items-center">
            <p className="font-semibold">Content</p>
            <button className="lg:hidden text-xl" onClick={handleCourseContentToggle}> <AiOutlineClose /></button>
          </div>
          <div className="">
            <p className="p-4 font-semibold">Learning videos</p>
            <div className="">
              {lessons &&
                lessons.length > 0 &&
                lessons.map((lesson, index) => (
                  <div key={index} className="p-4 border">
                    {lesson.title}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="border p-3 lg:px-5 lg:py-2 w-full space-y-2">
          <button className=" lg:hidden flex items-center space-x-1 text-n-15" onClick={handleCourseContentToggle}>
          <AiOutlineMenu className="text-xl"/>
           <p> Course content</p>
          </button>
          <p className="font-semibold lg:text-lg">Biology</p>
          <iframe
            className="w-full h-[230px] md:h-[330px] lg:h-[430px]"
            src="https://www.youtube.com/embed/7hzbLqx_s2k?si=kHIya3I750UD6OVg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Lesson;
