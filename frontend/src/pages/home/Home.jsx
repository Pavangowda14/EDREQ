import React from "react";
import Button from "../../components/Button";
import { FaArrowRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import BookSessionForm from "../../components/BookSession";
import studyMaterial from "../../assets/images/book (1).png";
import bookSession from "../../assets/images/working.png";
import WhyEdreq from "./components/WhyEdreq";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import logo from "../../assets/images/Edreq_logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-[90vh] flex justify-center items-center bg-cover bg-no-repeat bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="flex flex-col space-y-5 static p-8 max-w-2xl">
        <h1 className="text-6xl font-bold text-center">
          EDREQ
        </h1>
        <div className="flex flex-col space-y-2">
          <h1 className="text-n-15 font-bold text-xl lg:text-2xl">
            Study Anytime, Anywhere Unlock Pre-Recorded Lessons & Personalized
            Notes!
          </h1>
          <p className="rounded-lg font-semibold">
            Get Access to 6-10 Expert-Led Training Sessions at an Unbeatable
            Price!
          </p>
          </div>
        </div>
      </div>
      <WhyEdreq />
      <div className="container flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 relative  min:h-[90vh] py-10  bg-n-2 lg:space-y-7">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-blue-600 font-bold">
            Book your Free Demo session
          </h2>
          <p>Get a free academic counselling session</p>
          <img
            src={bookSession}
            className="w-[300px] h-[300px] hidden md:block"
          />
        </div>
        <BookSessionForm />
      </div>
      <Features />
      <div
        className="w-full h-[90vh] bg-blue-400 flex justify-center items-center"
        // style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div>
          <img src={studyMaterial} />
        </div>
        <div className="flex flex-col space-y-5 w-full max-w-xl relative">
          <h1 className="text-n-15 font-bold text-4xl">Study Materials</h1>
          <div>
            <Button
              className="bg-n-15 text-white flex gap-2"
              onClick={() => navigate("/study-materials")}
            >
              <span>checkout</span>checkout
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;
