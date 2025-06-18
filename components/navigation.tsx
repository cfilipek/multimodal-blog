"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="hover:underline" onClick={closeMenu}>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">CLAIRE'S MULTIMODAL LITERACY BLOG</h1>
            <p className="text-xs md:text-sm font-mono">2025</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <div className="relative group">
              <button className="font-bold hover:underline">BLOG POSTS</button>
              <div className="absolute top-full left-0 bg-white border-2 border-black p-4 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link href="/posts/introduction" className="block py-2 hover:underline font-mono text-sm">
                  Introduction
                </Link>

                <Link href="/posts/technology-effects" className="block py-2 hover:underline font-mono text-sm">
                  Technology Effects
                </Link>
                {/* <Link href="/posts/multimodal-composition" className="block py-2 hover:underline font-mono text-sm">
                  Multimodal Composition Techniques
                </Link>
                <Link href="/posts/digital-storytelling" className="block py-2 hover:underline font-mono text-sm">
                  Digital Storytelling Methods
                </Link>
                <Link href="/posts/typography-meaning" className="block py-2 hover:underline font-mono text-sm">
                  Typography and Meaning Making
                </Link> */}
              </div>
            </div>
            <div className="relative group">
              <button className="font-bold hover:underline">READING SUMMARIES</button>
              <div className="absolute top-full left-0 bg-white border-2 border-black p-4 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link href="/summaries/day-1" className="block py-2 hover:underline font-mono text-sm">
                    Day 1: Introduction to Multimodality
                </Link>
                <Link href="/summaries/day-2" className="block py-2 hover:underline font-mono text-sm">
                    Day 2: Technology Effects
                </Link>
                {/* <Link href="/summaries/week-3" className="block py-2 hover:underline font-mono text-sm">
                  Week 3: Digital Composition
                </Link>
                <Link href="/summaries/week-4" className="block py-2 hover:underline font-mono text-sm">
                  Week 4: Audience and Context
                </Link> */}
              </div>
            </div>
            <Link href="/about" className="font-bold hover:underline">
              ABOUT
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden flex flex-col gap-1 p-2" onClick={toggleMenu} aria-label="Toggle menu">
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen pb-4" : "max-h-0"}`}
        >
          <nav className="flex flex-col space-y-4">
            {/* Blog Posts Dropdown */}
            <div>
              <button
                className="font-bold hover:underline flex justify-between items-center w-full text-left"
                onClick={() => toggleDropdown("posts")}
              >
                BLOG POSTS
                <span className={`transition-transform duration-200 ${activeDropdown === "posts" ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeDropdown === "posts" ? "max-h-48 mt-2" : "max-h-0"}`}
              >
                <div className="border-l-2 border-black pl-4 space-y-2">
                  <Link
                    href="/posts/introduction"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/posts/technology-effects"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Technology Effects
                  </Link>
                  {/* <Link
                    href="/posts/multimodal-composition"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Multimodal Composition Techniques
                  </Link>
                  <Link
                    href="/posts/digital-storytelling"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Digital Storytelling Methods
                  </Link>
                  <Link
                    href="/posts/typography-meaning"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Typography and Meaning Making
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Reading Summaries Dropdown */}
            <div>
              <button
                className="font-bold hover:underline flex justify-between items-center w-full text-left"
                onClick={() => toggleDropdown("summaries")}
              >
                READING SUMMARIES
                <span
                  className={`transition-transform duration-200 ${activeDropdown === "summaries" ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeDropdown === "summaries" ? "max-h-48 mt-2" : "max-h-0"}`}
              >
                <div className="border-l-2 border-black pl-4 space-y-2">
                  <Link
                    href="/summaries/day-1"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                     Day 1: Introduction to Multimodality
                  </Link>
                  <Link
                    href="/summaries/day-2"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Day 2: Technology Effects
                  </Link>
                  {/* <Link
                    href="/summaries/week-3"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Week 3: Digital Composition
                  </Link>
                  <Link
                    href="/summaries/week-4"
                    className="block py-1 hover:underline font-mono text-sm"
                    onClick={closeMenu}
                  >
                    Week 4: Audience and Context
                  </Link> */}
                </div>
              </div>
            </div>

            {/* About Link */}
            <Link href="/about" className="font-bold hover:underline" onClick={closeMenu}>
              ABOUT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
