"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface SubNavItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "About", 
    href: "#about",
    subItems: [
      { label: "About HIT", href: "/#about-hit" },
      { label: "About Department", href: "/#about-department" },
      { label: "About Committee", href: "/#organizing-committee" },
    ]
  },
  { label: "Speakers", href: "/#speakers" },
  { label: "Event Schedule", href: "/#event-schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "/contact" },
];

const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = ({ 
  href, 
  children, 
  className = "text-gray-700 hover:text-blue-600 transition-colors duration-300",
  onClick
}) => (
  <Link href={href} className={className} onClick={onClick}>
    {children}
  </Link>
);

const DropdownMenu: React.FC<{ 
  items: SubNavItem[];
  isOpen: boolean;
  onItemClick: () => void;
}> = ({ items, isOpen, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
      {items.map((item, index) => (
        <NavLink
          key={index}
          href={item.href}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
          onClick={onItemClick}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      id="header"
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${isScrolled ? "py-2 shadow-lg" : ""}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <NavLink href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-4">
            <Image src="/hit_logo.png" alt="ISCIRF Logo" width={40} height={40} />
            <span>

            ISCIRF {" "}<span className="text-blue-800">2025</span>
            </span>
          </NavLink>
          
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative" ref={item.subItems ? dropdownRef : undefined}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <DropdownMenu
                      items={item.subItems}
                      isOpen={activeDropdown === item.label}
                      onItemClick={() => setActiveDropdown(null)}
                    />
                  </div>
                ) : (
                  <NavLink href={item.href}>
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <NavLink 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrkjJwQY7j3HLy4MvT1wT9JklcQKbHUmiH9zTK8uX8Bxo26A/viewform" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Register Now
            </NavLink>
          </div>

          <button
            type="button"
            className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden flex flex-col space-y-4 py-4 pb-6">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <NavLink 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrkjJwQY7j3HLy4MvT1wT9JklcQKbHUmiH9zTK8uX8Bxo26A/viewform" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
