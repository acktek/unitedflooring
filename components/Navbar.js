"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }

  function handleNavClick(e, href) {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? "bg-white/97 backdrop-blur-[20px] py-3.5 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "py-5"
      }`}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="transition-opacity duration-400"
        >
          <Logo
            variant="inline"
            theme={scrolled ? "light" : "dark"}
            className="h-[36px] w-auto"
          />
        </a>

        {/* Desktop + Mobile Nav Links */}
        <div
          className={`flex items-center gap-9 max-md:fixed max-md:top-0 max-md:w-4/5 max-md:max-w-[320px] max-md:h-screen max-md:flex-col max-md:justify-center max-md:gap-7 max-md:bg-navy-dark max-md:p-8 max-md:shadow-[-10px_0_40px_rgba(0,0,0,0.2)] max-md:transition-[right] max-md:duration-400 ${
            menuOpen ? "max-md:right-0" : "max-md:right-[-100%]"
          }`}
        >
          {[
            { href: "#services", label: "Services" },
            { href: "#gallery", label: "Gallery" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`font-heading text-[0.85rem] font-medium tracking-[0.5px] relative transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-light after:transition-[width] after:duration-300 hover:after:w-full max-md:!text-white/80 max-md:text-base ${
                scrolled ? "text-charcoal hover:text-blue" : "text-white/85 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:9089072998"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue text-white rounded-md font-heading text-[0.85rem] font-semibold transition-all duration-300 hover:bg-blue-light hover:-translate-y-px after:!hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            908-907-2998
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="hidden max-md:flex flex-col gap-[5px] p-1 z-[1001]"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] rounded-sm transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] rounded-sm transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] rounded-sm transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""}`}
          />
        </button>
      </div>
    </nav>
  );
}
