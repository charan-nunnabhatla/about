import { useState } from "react";

export default function Header() {
  const [currentItem, setCurrentItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-auto bg-[var(--warm-beige)]/95 backdrop-blur-sm border-b border-[var(--near-black)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--near-black)]">
              Charan's Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none items-center gap-6">
            <li
              className={`${currentItem === 0 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(0)}>
              <a href="#hero" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">Home</a>
            </li>
            <li
              className={`${currentItem === 1 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(1)}>
              <a href="#about" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">About</a>
            </li>
            <li
              className={`${currentItem === 2 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(2)}>
              <a href="#tech-stack" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">Skills</a>
            </li>
            <li
              className={`${currentItem === 3 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(3)}>
              <a href="#experience" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">Experience</a>
            </li>
            <li
              className={`${currentItem === 4 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(4)}>
              <a href="#projects" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">Projects</a>
            </li>
            <li
              className={`${currentItem === 5 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(5)}>
              <a href="#education" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">Education</a>
            </li>
            <li
              className={`${currentItem === 6 ? "font-semibold" : ""}`}
              onClick={() => setCurrentItem(6)}>
              <a href="#contact" className="text-sm md:text-base hover:text-[var(--accent-blue)] transition-colors">Contact</a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-[var(--near-black)]/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6 text-[var(--near-black)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--near-black)]/5">
            <ul className="flex flex-col list-none py-4 space-y-2">
              <li
                className={`${currentItem === 0 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(0);
                  setIsMenuOpen(false);
                }}>
                <a href="#hero" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">Home</a>
              </li>
              <li
                className={`${currentItem === 1 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(1);
                  setIsMenuOpen(false);
                }}>
                <a href="#about" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">About</a>
              </li>
              <li
                className={`${currentItem === 2 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(2);
                  setIsMenuOpen(false);
                }}>
                <a href="#tech-stack" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">Skills</a>
              </li>
              <li
                className={`${currentItem === 3 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(3);
                  setIsMenuOpen(false);
                }}>
                <a href="#experience" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">Experience</a>
              </li>
              <li
                className={`${currentItem === 4 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(4);
                  setIsMenuOpen(false);
                }}>
                <a href="#projects" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">Projects</a>
              </li>
              <li
                className={`${currentItem === 5 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(5);
                  setIsMenuOpen(false);
                }}>
                <a href="#education" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">Education</a>
              </li>
              <li
                className={`${currentItem === 6 ? "font-semibold" : ""}`}
                onClick={() => {
                  setCurrentItem(6);
                  setIsMenuOpen(false);
                }}>
                <a href="#contact" className="block py-2 text-sm hover:text-[var(--accent-blue)] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
