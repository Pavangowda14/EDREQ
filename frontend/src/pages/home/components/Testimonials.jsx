import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
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

const Testimonials = () => {
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
  return (
    <div className="container my-10 py-4">
      <p className="h3 mb-4 font-semibold text-center">Testimonials</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-5 flex flex-col items-center text-center space-y-3 justify-center w-[20rem]"
          >
            <div className=" inline-block p-3 border rounded-full bg-n-15">
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
  );
};

export default Testimonials;
