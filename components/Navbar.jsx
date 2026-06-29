"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          World Explorer
        </Link>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" className={isActive("/") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/countries" className={isActive("/countries") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Countries
          </Link>
          <Link href="/search" className={isActive("/search") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Search
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
