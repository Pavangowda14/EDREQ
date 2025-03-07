import React, { useState } from "react";

const BookSessionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    classNo: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phno ||
      !formData.classNo
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setSuccess("Session booked successfully! 🎉");
    setFormData({
      name: "",
      email: "",
      phno: "",
      classNo: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-center text-xl font-bold p-2">Book a session</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm text-center">{success}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email ID"
          />

          <input
            type="number"
            name="phno"
            value={formData.phno}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your mobile number"
          />

          <select
            id="classNo"
            name="classNo"
            className="block w-full px-2 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none bg-transparent"
            value={formData.classNo}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Class</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-none focus:ring-2 focus:ring-blue-500"
            placeholder="Additional Message (optional)"
            rows="3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Book Session
          </button>
        </form>
      </div>
    </>
  );
};

export default BookSessionForm;
