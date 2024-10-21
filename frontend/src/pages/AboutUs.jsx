import React from "react";
import logo from "../assets/images/Edreq_logo.png";

const AboutUs = () => {
  return (
    <>
      <div className="mt-5 p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src={logo} alt="logo" />
        <div className="col-span-2 space-y-4">
          <p className="h3">Welcome to Edreq!</p>
          <p>
            At Edreq, we stand for the idea that every student has some hidden
            talents and we aim to help expose them. It is our goal to
            revolutionize the current and conventional schooling system,
            fostering personalized education that unlocks unique potential.
            Deliberately targeted at students from the 6th to the 10th grade,
            our online platform offers the best practices in learning path
            customization, engagement with qualified tutors, and provision of
            high-quality learning materials to establish a highly effective and
            interesting academic process for students.
          </p>
        </div>
      </div>
      <div className="mt-7 container space-y-4">
        <p className="font-semibold h4 text-center">Our commitment</p>
        <p>
          {" "}
          At Edreq, we believe that every child has a potential that needs to be
          discovered and nurtured. That is why we strive to develop a learning
          environment that is catered to the individual learner abilities,
          preferences, and learning needs. Using special tests and effective
          analysis, we determine the child's potential and his/her weaknesses,
          and design a developmental program to help the student develop his/her
          talents and become interested in studying.{" "}
        </p>
        <p>
          Our platform provides individualized learning experiences and
          personalized curriculum based on the child’s academic requirements,
          complemented with effective, versatile study resources such as
          animated videos, quizzes, and revision notes. Staffed by qualified
          teachers and tutors, our approach is based on direct support that
          involves assistance in tackling academic difficulties and building
          logical thinking abilities and self-confidence. That is why at our
          platform l we strive for critical thinking, problem-solving,
          creativity, and perseverance, focusing not only on academic success,
          but on students as complete individuals in a global society.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-10 container">
        <div className="border p-5 space-y-3 border-b-4 border-b-green-400 hover:bg-green-400 transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
          <p className="text-center h5 font-semibold">Vision</p>
          <p>
            To transform the system of education so that each learner gets an
            education that discovers the unique in him, ignites the spirit of
            learning and pursues it throughout his life. Our dream is for each
            student regardless of which environment she or he comes to have
            individual coaching, supported by the best experienced tutors,
            enough further resources to develop their own potential and become
            the successful learner, the successful person who will be ready to
            face the future.
          </p>
        </div>
        <div className="border p-5 space-y-3 border-b-4 border-b-blue-400 hover:bg-blue-400 transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
          <p className="text-center h5 font-semibold">Mission</p>
          <p>
            We believe that every student in the 6th to the 10th grade deserves
            to be enabled to learn according to their abilities and their
            intended aspirations. It is our desire to achieve the best results
            in terms of the imparted knowledge through the use of professional
            tutors, quality material and a modern approach to teaching, thus
            fostering student's growth and confidence to face future challenges.
          </p>
        </div>
      </div>
      <div className="my-10 container text-center space-y-4">
        <p className="font-semibold h5">
          Welcome to join us for the journey to strive for excellence.!
        </p>
        <p>
          We invite you to explore our innovative platform and get acquainted
          with the possibilities, which can change your child's learning process
          with the help of Edreq. For these reasons and with the help of our
          support, students will get not only what they need for successful
          studying but also the skills which will help them in further life.
        </p>
      </div>
      <div className="my-10 container space-y-6">
        <p>
          <span className="font-semibold text-lg">Get Started Today! </span>
          Discover more about us such as where to get more details, our
          educators, as well as a brief on how we offer education differently.
          Allowing in equal measure every student to be what they can be as they
          prepare for the future.
        </p>
      <p>
        <span className="font-semibold text-lg">Edreq:</span>Where
        learning is individualized, guidance is significant, and each learners’
        progression is different.
      </p>
      </div>
    </>
  );
};

export default AboutUs;
