import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-primary">Mohan k</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="home" label="Home" />
            <NavLink to="about" label="About" />
            <NavLink to="projects" label="Projects" />
            <NavLink to="skills" label="Skills" />
            <NavLink to="contact" label="Contact" />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-2">
            <MobileNavLink to="home" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="about" label="About" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="projects" label="Projects" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="skills" label="Skills" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="contact" label="Contact" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      activeClass="text-primary font-semibold"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      onClick={onClick}
      className="text-gray-700 hover:text-primary hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      activeClass="text-primary font-semibold"
    >
      {label}
    </Link>
  );
}