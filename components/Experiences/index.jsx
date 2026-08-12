import React from "react";
import experiences from "./data/data.js";

const Experiences = () => {
  const years = new Date().getFullYear() - new Date(2021, 2, 15).getFullYear();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="experiences">
      {/* Section Header */}
      <div className="mb-14">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Career
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          {years}+ Years of{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden sm:block ml-[7px]" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="sm:pl-10 relative group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-cyan-400 bg-gray-950 hidden sm:block group-hover:bg-cyan-400 transition-colors duration-300" />

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                    {exp.company}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    {exp.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {exp.job_title}
                </h3>
                <p className="text-gray-400 text-sm leading-7">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
