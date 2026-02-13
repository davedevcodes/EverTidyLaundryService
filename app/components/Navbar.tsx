// components/Navbar.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-1 md:py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image 
            className="bg-blue-950 rounded-full"
            src="/Logo.png"
            alt="Evertidy Laundry Services Logo"
            width={60}
            height={60}
            />
            <h1 className="text-blue-600 text-3xl font-medium">EverTidy</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

            {/* button */}
            <a href="https://wa.me/message/QXZRVT3NLXWRP1" className="hidden md:flex bg-blue-600 hover:bg-blue-700 px-0 md:px-8 py-3 rounded-lg text-sm font-thin  md:text-md md:font-medium transition-colors">
                Book Now
            </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="#"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}