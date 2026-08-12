import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 mt-10">
      <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <a
          href="#"
          className="text-white font-semibold text-sm tracking-wide hover:text-cyan-400 transition-colors"
        >
          Adnan Sameer
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          {["Experiences", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="flex items-center gap-3">
          {[
            {
              icon: <FaLinkedinIn />,
              href: "https://www.linkedin.com/in/adnan-sameer/",
              label: "LinkedIn",
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/adnansam110",
              label: "GitHub",
            },
            {
              icon: <FaTwitter />,
              href: "https://twitter.com/Adnansa99",
              label: "Twitter",
            },
          ].map(({ icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-gray-600 text-xs mt-8">
        &copy; {new Date().getFullYear()} Adnan Sameer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
