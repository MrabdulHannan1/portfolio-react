import React, { useState } from "react";
import piano from "./img/piano.png";
import img1 from "./img/img1.jpeg";
import todo from "./img/todo.png";
import blog from "./img/blog.png";
import dumy from "./img/dummy.png";

const Project = () => {
  const dummyProjects = [
    {
      title: "JavaScript Piano ",
      subtitle: "MERN Stack",
      description:
        "Simple js piano made with HTML CSS JS this piano works with the keyboard and Mouse as well",
      link: "https://github.com/MrabdulHannan1/piano-app-js-html-css",
      image: piano,
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link: "https://reedbarger.com",
      image: img1,
    },
    {
      title: "TODO lIST",
      subtitle: "React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link: "https://reedbarger.com",
      image: todo,
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link: "https://reedbarger.com",
      image: blog,
    },
    // Add more dummy projects as needed
  ];

  const [projects, setProjects] = useState(dummyProjects);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    subtitle: "",
    description: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    // Validate new project
    if (
      newProject.title.trim() === "" ||
      newProject.subtitle.trim() === "" ||
      newProject.description.trim() === "" ||
      newProject.link.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    setProjects((prevProjects) => [
      ...prevProjects,
      { ...newProject, image: dumy },
    ]);
    setNewProject({
      title: "",
      subtitle: "",
      description: "",
      link: "",
    });
    setShowForm(false);
  };

  const handleDeleteProject = (index) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font pt-5 pb-5"
    >
      <div className="container px-4 md:px-8 lg:px-16 mx-auto text-center ">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Apps I've Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I have crafted a diverse range of projects using React, HTML, CSS, and
          JavaScript, showcasing my proficiency in modern web development. My
          portfolio serves as a visually engaging representation of my skills
          and projects, highlighting my commitment to clean design. The piano
          project transforms a digital interface into an interactive virtual
          piano, combining aesthetics and functionality through React's dynamic
          capabilities. In contrast, the todo list project, also built with
          React, emphasizes practicality, offering users an intuitive task
          management experience with real-time updates. These projects
          collectively reflect my passion for creating impactful web
          applications with a focus on user experience and innovation.
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {showForm ? "Cancel" : "Add Project"}
        </button>

        {showForm && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
              className="border-2 border-gray-800 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Subtitle"
              name="subtitle"
              value={newProject.subtitle}
              onChange={handleInputChange}
              className="border-2 border-gray-800 p-2 w-full mt-2"
            />
            <textarea
              placeholder="Description"
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              className="border-2 border-gray-800 p-2 w-full mt-2 resize-none"
            />
            <input
              type="text"
              placeholder="Link"
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
              className="border-2 border-gray-800 p-2 w-full mt-2"
            />
            <button
              onClick={handleAddProject}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Project
            </button>
          </div>
        )}

        {/* Display added projects */}
        <div className="flex flex-wrap -m-2 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="sm:w-1/2 w-full p-2">
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-auto h-full object-cover object-center opacity-100"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <button
                    onClick={() => handleDeleteProject(index)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
