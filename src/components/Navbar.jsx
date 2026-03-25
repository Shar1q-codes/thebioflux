import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Products', href: '#products' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(253,248,240,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(26,92,56,0.10)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,67,0.18)' : 'none',
        transition: 'all 0.4s ease',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '88px' }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src={logo}
              alt="TheBioFlux"
              style={{ height: '80px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
            />
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#2c4a38',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#1a5c38';
                  e.target.style.backgroundColor = 'rgba(26,92,56,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#2c4a38';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                marginLeft: '8px',
                padding: '10px 22px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#fff',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #1a5c38, #2a8a56)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(26,92,56,0.25)',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(26,92,56,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(26,92,56,0.25)';
              }}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#1a5c38',
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: '#fdf8f0',
          borderTop: '1px solid rgba(212,168,67,0.2)',
          padding: '16px 24px 24px',
          boxShadow: '0 8px 24px rgba(26,92,56,0.12)',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                display: 'block',
                padding: '14px 0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#1a5c38',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(26,92,56,0.08)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            style={{
              display: 'block',
              marginTop: '16px',
              padding: '14px 22px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#fff',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #1a5c38, #2a8a56)',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            Book Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
