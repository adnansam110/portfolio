import React from "react";

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { resumeUrl } from "../../constants";
// import resume from "assets/files/resume.pdf";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
      <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
        <span>Hello there</span>
        <SiHey />
        <span>I am</span>
      </h2>
      <h1 className="text-6xl font-bold text-white sm:text-7xl">
        Adnan Sameer
      </h1>
      <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
        Cuber and Self-Taught Software Developer, I enjoy building
        responsive web apps & designs using HTML5, CSS3, JavaScript, Next JS,
        React JS, Vue JS Flutter, Firebase, Restful APIs..., I have been working on the
        web and mobile for over 3 years building freelance/learning projects.
      </p>
      <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
        <button
          className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white"
          title="View Resume"
        >
          <a
            target={"_blank"}
            href={resumeUrl}
            className="flex justify-start items-center gap-1"
            rel="noreferrer"
          >
            <span>View Resume</span>
            <RiProfileLine />
          </a>
        </button>
        <button
          className="bg-white py-2 px-4 font-bold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white"
          title="Get in touch"
        >
          <a href="#contact" className="flex justify-start items-center gap-1">
            <span>Get in touch</span>
            <RiContactsBookLine />
          </a>
        </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <h4 className="text-xl text-white font-bold">Find me on :</h4>
        <ul className="flex justify-start items-center flex-wrap gap-4">
          <li title="Twitter">
            <a
              href="https://twitter.com/Adnansa99"
              target={"_blank"}
              className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
          </li>
          <li title="GitHub">
            <a
              href="https://github.com/adnansam110"
              target={"_blank"}
              className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/adnan-sameer-785103201/"
              target={"_blank"}
              className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
