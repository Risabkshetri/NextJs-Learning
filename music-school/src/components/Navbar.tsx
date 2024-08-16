"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn("fixed top-0 left-0 right-0 bg-black shadow-md  shadow-cyan-500/50   z-50", className)}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={50} className="cursor-pointer" />
            </Link>
          </div>
          
          {isMobile ? (
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          ) : (
            <Menu setActive={setActive}>
              <Link href="/"><MenuItem setActive={setActive} active={active} item="Home" /></Link>
              <Link href="/about-us"><MenuItem setActive={setActive} active={active} item="About Us" /></Link>
              <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/courses">All Courses</HoveredLink>
                  <HoveredLink href="/courses/python-fundamentals">Python Fundamentals</HoveredLink>
                  <HoveredLink href="/courses/advanced-javascript-techniques">Advanced JavaScript</HoveredLink>
                  <HoveredLink href="/courses/web-development-fundamentals">Web Development</HoveredLink>
                  <HoveredLink href="/courses/full-stack-development">Full-Stack Development</HoveredLink>
                  <HoveredLink href="/courses/data-structures-and-algorithms">Data Structures & Algorithms</HoveredLink>
                </div>
              </MenuItem>
              <Link href="/contact"><MenuItem setActive={setActive} active={active} item="Contact Us" /></Link>
            </Menu>
          )}
        </div>
      </div>
      
      {isMobile && isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link onClick={() => setIsMenuOpen(false)} href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-slate-100 hover:bg-gray-900">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">About Us</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Our Courses</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;