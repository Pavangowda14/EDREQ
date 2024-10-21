import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudyMaterials = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  const handleCategoryClick = (id) => {
    navigate(`/study-material/${id}`);
  };

  return (
    <>
      <div className="mt-5 container space-y-6">
        <p className="h4 font-semibold">Study Materials for CBSE class(6-12)</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus
          soluta molestiae saepe, velit impedit nulla porro molestias
          doloremque. Nulla.
        </p>
        <div className="bg-n-3/10 p-6 space-y-3">
          <p className="h5 font-semibold">
            CBSE study materials for Class 6 to 12 2024-25 PDFs
          </p>
          {categories &&
            categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category._id)}
                className="flex justify-between items-center border-b-2 py-4 cursor-pointer"
              >
                <p className="font-semibold text-n-15">
                  CBSE {category.categoryName} Study Material
                </p>
                <FaArrowAltCircleRight className="text-xl text-n-16" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default StudyMaterials;
