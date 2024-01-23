import React, { useState } from "react";
import ailogo from "./img/ailogo.jpg";

const HireMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="hire-me"
      className="text-gray-900 flex flex-col lg:flex-row sm:text-center bg-gray-100 body-font"
    >
      <img
        src={ailogo}
        alt=""
        className="lg:w-1/2 object-cover lg:object-contain h-64 sm:mt-3 lg:h-auto"
      />

      <div className="container px-5 py-10 mx-auto text-center lg:px-10 lg:w-1/2">
        <h1 className="sm:text-5xl text-4xl flex font-black items-center title-font mb-4 text-black">
          Hire Me
        </h1>
        <form onSubmit={handleSubmit} className="mx-auto max-w-600px">
          <div className="grid grid-cols-1 gap-6 pt-8 mt-10 items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full bg-gray-200 border-2 border-gray-500 p-3 rounded focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full bg-gray-200 border-2 border-gray-500 p-3 rounded focus:outline-none focus:border-green-500 mt-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="4"
              className="w-full bg-gray-200 border-2 border-gray-500 p-4 rounded focus:outline-none focus:border-green-500 resize-none mt-4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HireMeForm;
