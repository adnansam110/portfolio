import React from "react";
import works from "./data/data.js";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Works = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="projects">
      {/* Section Header */}
      <div className="mb-14">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Portfolio
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Latest{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Works
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works &&
          works.map((work, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="flex justify-center items-center p-6 bg-white/[0.02]">
                <img
                  className="rounded-2xl w-28 h-28 object-cover shadow-lg shadow-black/30"
                  src={work.image_url}
                  alt={work.work_title}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 pt-2">
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full w-fit mb-4">
                  {work.genre}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {work.work_title}
                </h3>
                <p className="text-gray-400 text-sm leading-6 flex-1 mb-5">
                  {work.description}
                </p>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-2 w-full bg-white/5 border border-white/10 text-white text-sm font-semibold px-4 py-3 rounded-xl group-hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
                >
                  <span>Visit website</span>
                  <HiOutlineArrowNarrowRight className="text-lg" />
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Works;
