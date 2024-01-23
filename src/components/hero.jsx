import React from "react";
import hananpng from "./img/hanan.png";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./styles/hero.css";

const Hero = () => {
  const [type] = useTypewriter({
    words: ["Front End Developer", "React.js developer"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <section className="bg-gray-200 text-black py-16">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:w-1/2 pr-6 pl-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4">
            Hello, I am <span className="text-green-500 font-bold">HANNAN</span>
          </h1>
          <div>
            <h1 className="text-green-900 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
              <span className="font-bold">{type}</span>
              <Cursor></Cursor>
            </h1>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Experienced React JS Developer | JavaScript Specialist | Front-End
              Web Dev | UI/UX Enthusiast | Web App Developer | Cross-Platform
              Expert | Progressive Web Apps | Responsive Design | BUILTIN LOGIX
            </p>
          </div>
          <div className="mt-4 sm:mt-6">
            <Link to="/hire">
              <button className="btn text-sm sm:text-base md:text-lg lg:text-xl">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/2 ml-8 rounded-lg">
          <img
            src={hananpng}
            alt="hananimg"
            className="object-cover w-1/2 h-1/2 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
