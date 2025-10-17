import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { label: "Restitution of Conjugal Rights", path: "/services/conjugalRights" },
  { label: "Contested Divorce", path: "/services/contestedDivorce" },
  { label: "Maintenance and Alimony", path: "/services/maintananceAndAlimony" },
  { label: "Dowry Cases", path: "/services/dowry" },
  { label: "Child Custody", path: "/services/childCustody" },
  { label: "Cruelty", path: "/services/cruelty" },
  { label: "Judicial separation", path: "/services/judicialSeparation" },
  { label: "Child Visitation", path: "/services/childVisitation" },
  { label: "Annulment of Marriage", path: "/services/annulmentOfMarriage" },
  { label: "Mutual Divorce", path: "/services/mutualDivorce" },
];

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setHoveredMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function onNavItemHover(name) {
    setHoveredMenu(name);
  }

  return (
    <nav
      ref={navRef}
      className="bg-[#f5f1ed] shadow-sm sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="/Unsaathi-logo1.png"
                alt="Unsaathi Logo"
                className="w-42 h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/AboutUs"
              onMouseEnter={() => onNavItemHover("About Us")}
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => onNavItemHover("Services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="text-[#232122] hover:text-[#b88b6c] text-[15px] flex items-center gap-1 transition-colors">
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    hoveredMenu === "Services" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 
                       10.586l3.293-3.293a1 1 0 111.414 
                       1.414l-4 4a1 1 0 01-1.414 
                       0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <ul
                className={`absolute left-0 mt-3 w-72 bg-white rounded-xl shadow-lg z-50 border border-[#ece2d7] py-2 transform transition-all duration-300 origin-top 
                  ${
                    hoveredMenu === "Services"
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
              >
                {services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.path}
                      className="block px-6 py-2 text-[#232122] hover:bg-[#f2f2ee] hover:text-[#b88b6c] text-[15px] whitespace-nowrap transition-colors"
                      onClick={() => setHoveredMenu(null)}
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/whyUnsaathi"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              Why Unsaathi?
            </a>
            <a
              href="/howUnsaathi"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              How Unsaathi Works
            </a>
            {/* <a
              href="/blogs"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              Blogs
            </a> */}
            <a
              href="/contact"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#232122] hover:text-[#b88b6c] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#f5f1ed] border-t border-[#e6e1dc] overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4 space-y-3">
          <a
            href="/AboutUs"
            className="py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between w-full py-2 text-[#232122] hover:text-[#b88b6c]"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 
                     10.586l3.293-3.293a1 1 0 111.414 
                     1.414l-4 4a1 1 0 01-1.414 
                     0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                mobileServicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.path}
                  className="block pl-4 py-2 text-sm text-[#232122] hover:text-[#b88b6c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/whyUnsaathi"
            className="py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Unsaathi Right For Me
          </a>
          <a
            href="/howUnsaathi"
            className="py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            How Unsaathi Works
          </a>
          {/* <a
            href="/blogs"
            className="py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </a> */}
          <a
            href="/contact"
            className="py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
