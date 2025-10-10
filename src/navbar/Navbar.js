import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Each service now has a label + path
const services = [
  { label: 'Restitution of Conjugal Rights', path: '/services/conjugalRights' },
  { label: 'Contested Divorce', path: '/services/contestedDivorce' },
  { label: 'Maintenance and Alimony', path: '/services/maintananceAndAlimony' },
  { label: 'Dowry Cases', path: '/services/dowry' },
  { label: 'Child Custody', path: '/services/childCustody' },
  { label: 'Cruelty', path: '/services/cruelty' },
  { label: 'Judicial separation', path: '/services/judicialSeparation' },
  { label: 'Child Visitation', path: '/services/childVisitation' },
  { label: 'Annulment of Marriage', path: '/services/annulmentOfMarriage' },
  { label: 'Mutual Divorce', path: '/services/mutualDivorce' },

];

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
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
      <div className="max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Link to='/'><img
                src="/assets/Unsaathi-logo.svg"
                alt="Unsaathi Logo"
                className="w-42 h-10"
              /></Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/aboutUs"
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
              <button
                className="text-[#232122] hover:text-[#b88b6c] text-[15px] flex items-center gap-1 transition-colors"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${hoveredMenu === "Services" ? "rotate-180" : "rotate-0"
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
                  ${hoveredMenu === "Services"
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
              onMouseEnter={() => onNavItemHover("Unsaathi Right For Me")}
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              Unsaathi Right For Me
            </a>
            <a
              href="/howUnsaathi"
              onMouseEnter={() => onNavItemHover("How Unsaathi Works")}
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              How Unsaathi Works
            </a>
            <a
              href="/blogs"
              onMouseEnter={() => onNavItemHover("Blogs")}
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              Blogs
            </a>
            <a
              href="/contact"
              onMouseEnter={() => onNavItemHover("Contact Us")}
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#232122] hover:text-[#b88b6c]">
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
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
