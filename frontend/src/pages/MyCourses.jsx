import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const { user, isAuth } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  const fetchMyCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mycourses", {
        withCredentials: true,
      });
      if (response.data.success) {
        setCourses(response.data.courses);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyCourses();
  }, []);

  const handleCourseClick = (id) => {
    navigate(`/lessons/${id}`);
  };
  return (
    <>
      <p className="p-5 h5 md:h4 font-semibold">
        Welcome {user && user.fullName}, continue Learning
      </p>
      <p className="p-5 h3 md:h4 bg-n-2">Enrolled Courses</p>
      {courses && courses.length > 0 ? (
        <div className="mt-3 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              handleCourseClick={handleCourseClick}
            />
          ))}
        </div>
      ) : (
        <div className="p-5 text-center">
          <p className="h3 md:h4 font-semibold">No Courses Enrolled</p>
        </div>
      )}
    </>
  );
};

export default MyCourses;
