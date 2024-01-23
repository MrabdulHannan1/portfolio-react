// About.js
import React from "react";
import htmlpng from "./img/html.png";
import jspng from "./img/js.png";
import csspng from "./img/css.png";
import reactpng from "./img/react.png";

const SkillCard = ({ skillName, skillImage, skillTags }) => {
  return (
    <div className="mb-4 md:mb-0 md:w-1/2 lg:w-[260px]">
      <div className="w-full rounded-md mb-4 border border-gray-400 shadow-md">
        <img
          src={skillImage}
          alt={skillName}
          className="h-1/2 w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{skillName}&nbsp;</h1>

          <div className="mt-4">
            {skillTags.map((tag, index) => (
              <span
                key={index}
                className="mb-2 mr-2 inline-block rounded-full bg-black px-3 py-1 text-[12px] sm:text-base font-semibold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-24">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 pt-3">
        About me
      </h1>
      <div className="about">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          My expertise primarily revolves around harnessing the capabilities of
          React JS and JavaScript to create dynamic and responsive web
          applications. I take immense pride in my capacity to engineer
          cross-platform solutions, including Progressive Web Apps (PWAs), which
          not only enhance user engagement but also seamlessly adapt to the
          ever-evolving digital landscape.
        </p>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5 pt-3">
          Skills
        </h1>
      </div>

      <div className="flex flex-wrap">
        <SkillCard
          skillName="HTML"
          skillImage={htmlpng}
          skillTags={["#Frontend Development", "#structure", "#design"]}
        />

        <SkillCard
          skillName="CSS"
          skillImage={csspng}
          skillTags={["#Frontend Development", "#Styling", "#design"]}
        />

        {/* JavaScript Skill Card */}
        <SkillCard
          skillName="JavaScript"
          skillImage={jspng}
          skillTags={["#Frontend Development", "#Logic", "#Programming"]}
        />

        <SkillCard
          skillName="React.Js"
          skillImage={reactpng}
          skillTags={["#Frontend Development", "#Programming"]}
        />
      </div>
    </section>
  );
};

export default About;
