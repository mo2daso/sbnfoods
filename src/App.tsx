import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <nav className="bg-red-600 dark:bg-red-800 text-white sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between md:justify-center items-center h-16 relative">
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-red-700 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/" className={({isActive}) => 
                  `nav-link text-lg hover:text-white/90 transition-colors ${isActive ? 'active font-medium' : ''}`
                }>
                  Home
                </NavLink>
                <NavLink to="/about" className={({isActive}) => 
                  `nav-link text-lg hover:text-white/90 transition-colors ${isActive ? 'active font-medium' : ''}`
                }>
                  About
                </NavLink>
                <NavLink to="/services" className={({isActive}) => 
                  `nav-link text-lg hover:text-white/90 transition-colors ${isActive ? 'active font-medium' : ''}`
                }>
                  Services
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => 
                  `nav-link text-lg hover:text-white/90 transition-colors ${isActive ? 'active font-medium' : ''}`
                }>
                  Contact
                </NavLink>
              </div>

              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 hover:bg-red-700 rounded-lg transition-colors absolute right-4"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen 
                  ? 'max-h-64 opacity-100' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="py-4 space-y-4">
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `block px-4 py-2 text-lg hover:bg-red-700 rounded-lg transition-colors ${
                      isActive ? 'bg-red-700/50 font-medium' : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about"
                  className={({isActive}) => 
                    `block px-4 py-2 text-lg hover:bg-red-700 rounded-lg transition-colors ${
                      isActive ? 'bg-red-700/50 font-medium' : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/services"
                  className={({isActive}) => 
                    `block px-4 py-2 text-lg hover:bg-red-700 rounded-lg transition-colors ${
                      isActive ? 'bg-red-700/50 font-medium' : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
                <NavLink 
                  to="/contact"
                  className={({isActive}) => 
                    `block px-4 py-2 text-lg hover:bg-red-700 rounded-lg transition-colors ${
                      isActive ? 'bg-red-700/50 font-medium' : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-red-600 dark:bg-red-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="mb-2">
                  <i className="fas fa-phone-alt mr-2"></i>+91 98765 43210
                </p>
                <p className="mb-2">
                  <i className="fas fa-envelope mr-2"></i>contact@sbnfoods.in
                </p>
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>Mumbai, India
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a href="#" className="hover:text-white/80 transition-colors" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp fa-2x"></i>
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="mb-2">Monday - Saturday</p>
                <p className="mb-4">9:00 AM - 8:00 PM</p>
                <p>Sundays by appointment</p>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} SBN Catering. All rights reserved.<br />
                <span className="text-white/80">Delivering exceptional taste since 2008</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;