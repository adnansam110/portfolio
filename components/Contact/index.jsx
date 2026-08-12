import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/adnan-sameer/",
      label: "LinkedIn",
      handle: "adnan-sameer",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/adnansam110",
      label: "GitHub",
      handle: "adnansam110",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/Adnansa99",
      label: "Twitter",
      handle: "Adnansa99",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="contact">
      {/* Section Header */}
      <div className="mb-14">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Let&apos;s work{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            together
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg text-base leading-7">
          Have a project in mind? I&apos;m always open to discussing new
          opportunities and interesting ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email CTA */}
        <a
          href="mailto:adnansameer62@gmail.com"
          className="group flex items-center gap-4 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 hover:from-cyan-500/15 hover:to-blue-600/15 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xl">
            <HiOutlineMail />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Start a project</p>
            <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
              adnansameer62@gmail.com
            </p>
          </div>
        </a>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          {socials.map(({ icon, href, label, handle }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-200 group"
            >
              <span className="text-gray-400 group-hover:text-cyan-400 transition-colors text-base">
                {icon}
              </span>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                <p className="text-white text-sm font-medium">/{handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
