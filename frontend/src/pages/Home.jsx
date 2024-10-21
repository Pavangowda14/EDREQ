import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import CourseCard from "../components/CourseCard";
import axios from "axios";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const images = [slide1, slide2];
const testimonials = [
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil. Laborum minus tempora nisi, rem perferendis consequuntur est voluptatem eos maiores dolor itaque facilis fugit officiis tempore? Aliquam, repudiandae voluptates?",
    name: "Name1",
    star: 5,
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil. Laborum minus tempora nisi, rem perferendis consequuntur est voluptatem eos maiores dolor itaque facilis fugit officiis tempore? Aliquam, repudiandae voluptates?",
    name: "Name2",
    star: 4,
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil. Laborum minus tempora nisi, rem perferendis consequuntur est voluptatem eos maiores dolor itaque facilis fugit officiis tempore? Aliquam, repudiandae voluptates?",
    name: "Name3",
    star: 3,
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil. Laborum minus tempora nisi, rem perferendis consequuntur est voluptatem eos maiores dolor itaque facilis fugit officiis tempore? Aliquam, repudiandae voluptates?",
    name: "Name4",
    star: 4,
  },
];
const bgColors = ["bg-blue-200", "bg-red-200", "bg-green-200", "bg-purple-200"];

const Home = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const courseSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  const settingsSM = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        if (response.data.success) {
          setCourses(response.data.courses);
        } else {
          console.error("Error fetching courses details:", error);
        }
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        if (response.data.success) {
          setCategories(response.data.categories);
        } else {
          console.error("Error fetching Categories:", error);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
    fetchCourses();
  }, []);

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };
  const handleCategoryClick = (id) => {
    navigate(`/study-material/${id}`);
  };

  return (
    <>
      <div className="container mt-3 py-4">
        <Slider {...courseSettings}>
          {images.map((image, index) => (
            <div className="relative w-full h-[13rem] md:h-[15rem] lg:h-[24rem]">
              <img
                src={image}
                key={index}
                alt="img"
                className="w-full h-full object-fill"
              ></img>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container my-10 py-4">
        <p className="h3 mb-4 font-semibold text-center">Explore Courses</p>
        <div className="mt-5 container">
          <Slider {...settings}>
            {courses &&
              courses.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  handleCourseClick={handleCourseClick}
                />
              ))}
          </Slider>
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="text-n-2 bg-n-15 w-full md:w-auto">Explore All Courses</Button>
        </div>
      </div>

      <div className="container my-10 py-4 md:py-15 lg:py-20 bg-n-2 space-y-3">
        <p className="font-semibold text-2xl">Book your Free Demo session</p>
        <p>Get a free academic counselling session</p>
        <Button className="text-n-2 bg-n-15 w-full md:w-auto">Book a free Demo</Button>
      </div>

      <div className="container my-10 py-4">
        <p className="h3 mb-4 font-semibold  text-center">Study Materials</p>
        <Slider {...settingsSM}>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category._id)}
                className={`text-center  border px-3 rounded-2xl  ${
                  bgColors[index % bgColors.length]
                } py-10 h-[13rem] w-[10rem] md:w-[13rem] md:h-[16rem] `}
              >
                <p className="font-semibold text-2xl">CBSE </p>
                <p className="font-semibold text-2xl">{category.categoryName}</p>
                <IoIosArrowDropright className="mx-auto mt-3 text-2xl " />
              </div>
            ))}
        </Slider>
      </div>

      <div className="container my-10 py-4">
        <p className="h3 mb-4 font-semibold text-center">Testimonials</p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-2 rounded-lg p-5 flex flex-col items-center text-center space-y-3 justify-center w-[20rem]"
            >
              <div className=" inline-block p-3 border rounded-full bg-blue-400">
                <RiDoubleQuotesL color="white" size={30} className="mx-auto" />
              </div>
              <p className="text-center">{testimonial.review}</p>
              <div className="flex justify-center space-x-1">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <FaStar key={index} color="gold" />
                ))}
              </div>
              <p>{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
