import React from "react";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { resumeUrl } from "../../constants";

const Hero = () => {
  const years = new Date().getFullYear() - new Date(2021, 2, 15).getFullYear();

  return (
    <section className="relative min-h-[88vh] flex items-center px-6 py-20 max-w-5xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
          Adnan{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sameer
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-xl sm:text-2xl font-medium text-gray-400 mb-6 tracking-wide">
          Software Engineer &amp; Self-Taught Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-8 max-w-2xl mb-10 text-base sm:text-lg">
          I build scalable web products using{" "}
          <span className="text-cyan-400 font-medium">React</span>,{" "}
          <span className="text-cyan-400 font-medium">Next.js</span>,{" "}
          <span className="text-cyan-400 font-medium">Vue.js</span>, and{" "}
          <span className="text-cyan-400 font-medium">TypeScript</span>, with
          backend experience in{" "}
          <span className="text-cyan-400 font-medium">Node.js</span>,{" "}
          <span className="text-cyan-400 font-medium">Express.js</span>,{" "}
          <span className="text-cyan-400 font-medium">PostgreSQL</span>, and{" "}
          <span className="text-cyan-400 font-medium">.NET</span>. {years}+
          years of professional experience building production-ready products,
          AI-powered features, and high-performance user experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            <RiProfileLine className="text-lg" />
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            <RiContactsBookLine className="text-lg" />
            Get in touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            {
              icon: <FiGithub />,
              href: "https://github.com/adnansam110",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin />,
              href: "https://www.linkedin.com/in/adnan-sameer/",
              label: "LinkedIn",
            },
            {
              icon: <FiTwitter />,
              href: "https://twitter.com/Adnansa99",
              label: "Twitter",
            },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={label}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-lg hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
