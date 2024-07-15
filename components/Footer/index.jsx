import React from "react";

// React Icons
import { FaLinkedinIn, FaCodepen, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-2">
      <div className="py-4 border-b border-b-gray-800 flex justify-between items-center max-w-6xl m-auto">
        <h2 className="text-md text-white font-semibold">
          <a href="">Adnan Sameer</a>
        </h2>
        <ul className="flex justify-center items-center gap-3">
          <li className="text-white text-sm" title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/adnan-sameer/"
              target={"_blank"}
              className="ease-in-out duration-150 hover:text-teal-500"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="text-white text-sm" title="GitHub">
            <a
              href="https://github.com/adnansam110"
              target={"_blank"}
              className="ease-in-out duration-150 hover:text-teal-500"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="text-white text-sm" title="Twitter">
            <a
              href="https://twitter.com/Adnansa99"
              target={"_blank"}
              className="ease-in-out duration-150 hover:text-teal-500"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="py-8 flex flex-col gap-4 justify-between items-center max-w-6xl m-auto sm:flex-row sm:gap-0">
        <ul className="flex justify-center items-center gap-4">
          <li className="text-gray-400 text-sm" title="Experiences">
            <a
              href="#experiences"
              className="font-bold ease-in-out duration-150 hover:text-white"
            >
              Experiences
            </a>
          </li>
          <li className="text-gray-400 text-sm" title="Projects">
            <a
              href="#projects"
              className="font-bold ease-in-out duration-150 hover:text-white"
            >
              Projects
            </a>
          </li>
          <li className="text-gray-400 text-sm" title="Contact">
            <a
              href="#ontact"
              className="font-bold ease-in-out duration-150 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
        <h5 className="text-white font-initial text-sm">
          &copy; {new Date().getFullYear()} - Adnan Sameer. All Rights Reserved.
        </h5>
      </div>
      <div className="py-8 pt-0 px-2">
        <h5 className="text-white text-sm text-center leading-6">
          &copy; {new Date().getFullYear()} - Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/adnan-sameer/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-500"
          >
            Adnan Sameer
          </a>{" "}
          <br />
          The Career Connect, Basket, Heba and Svips logos are trademarks of their respective
          owners.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
