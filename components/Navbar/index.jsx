import { useState, useEffect } from "react";
import ProfileImage from "../../assets/images/portfolio-image.png";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="rounded-full overflow-hidden ring-2 ring-cyan-500/40 group-hover:ring-cyan-400/80 transition-all duration-300 w-10 h-10">
            <Image
              src={ProfileImage}
              width={40}
              height={40}
              className="rounded-full object-cover"
              alt="Adnan Sameer"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block tracking-wide">
            Adnan Sameer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {["Experiences", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="https://topmate.io/adnan_sameer/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cyan-400 border border-cyan-400/50 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-200"
          >
            Book a session
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {["Experiences", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 text-base font-medium hover:text-white transition-colors"
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a
            href="https://topmate.io/adnan_sameer/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cyan-400 border border-cyan-400/50 px-4 py-2 rounded-full w-fit hover:bg-cyan-400 hover:text-black transition-all duration-200"
            onClick={closeMenu}
          >
            Book a session
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
