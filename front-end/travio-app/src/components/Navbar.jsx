// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // optional: remove if not using react-router
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // optional

export default function Navbar() {
  const [open, setOpen] = useState(false);           // mobile menu toggle
  const [scrolled, setScrolled] = useState(false);   // sticky shadow on scroll

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full top-0 z-50 transition-shadow bg-white/80 backdrop-blur-sm ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                Tr.ai    
              </div>
              <span className="font-semibold text-lg text-slate-900">Travio.ai</span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `relative px-2 py-1 text-sm font-medium ${
                    isActive
                      ? "text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-indigo-600"
                      : "text-slate-700 hover:text-indigo-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* CTA Button */}
            <a
              onClick={() => {
                const section = document.getElementById("get-started");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                } else {
                  // If user is not on home page, go home first then scroll
                  window.location.href = "/#get-started";
                }
              }}
              // href="/signup"
              className="ml-3 inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="p-2 rounded-md inline-flex items-center justify-center hover:bg-slate-100"
            >
              {open ? (
                <XMarkIcon className="w-6 h-6 text-slate-800" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-max-height duration-300 overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-6 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-indigo-600" : "text-slate-700 hover:text-indigo-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="/signup"
              className="block mx-3 px-4 py-2 rounded-md bg-indigo-600 text-white text-center font-semibold"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
