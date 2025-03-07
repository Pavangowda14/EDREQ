import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import axios from "axios";
import { useUser } from "../../context/UserContext";

const Lessons = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
    const { user, isAuth } = useUser();
  const navigate = useNavigate();

  const fetchMyCourses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/lessons/${id}`,
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
  }, [id]);

  const handleLessonClick=(courseId,lessonId)=>{
    navigate(`/course/${courseId}/lesson/${lessonId}`)
  }

  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  },[isAuth])
  return (
    <>
      <div className="container">
        <div className="p-5 border rounded-lg">
          <p>CBSE Class 6</p>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="mt-5 p-5">
          <p className="font-semibold text-lg">Learning Videos</p>
          <div className="mt-3">
            {lessons &&
              lessons.length > 0 &&
              lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border"
                  onClick={() => handleLessonClick(id,lesson._id)}
                >
                  <div className="flex items-center space-x-4 text-lg">
                    <FaRegCirclePlay className="text-n-15" />
                    <p className="font-medium">{lesson.title}</p>
                  </div>
                  <div>
                    <FaRegCircle className="text-xl text-n-15" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lessons;
