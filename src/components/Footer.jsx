import { Leaf, MapPin, Heart } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Products', href: '#products' },
    { label: 'Clinical Heritage', href: '#heritage' },
    { label: 'Contact', href: '#contact' },
  ],
  'Our Practice': [
    { label: 'Unani Medicine', href: '#about' },
    { label: 'Root-Cause Healing', href: '#approach' },
    { label: 'Mizaj Assessment', href: '#approach' },
    { label: 'Herbal Formulations', href: '#products' },
    { label: 'PrimePulse Chyawanprash', href: '#products' },
  ],
};

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a2218 0%, #0d2e1c 100%)',
      color: 'rgba(255,255,255,0.72)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Main footer content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: 'clamp(48px, 6vw, 80px) 24px 0',
        position: 'relative',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(36px, 5vw, 56px)',
          paddingBottom: 'clamp(40px, 5vw, 64px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '38px', height: '38px',
                background: 'linear-gradient(135deg, #1a5c38, #2a8a56)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(42,138,86,0.25)',
              }}>
                <Leaf size={19} color="#d4a843" fill="#d4a843" />
              </div>
              <span style={{
                fontFamily: 'Georgia, serif',
                fontSize: '20px',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '-0.3px',
              }}>
                TheBioFlux
              </span>
            </div>

            <p style={{
              fontSize: '13px',
              fontStyle: 'italic',
              color: '#d4a843',
              fontFamily: 'Georgia, serif',
              margin: '0 0 16px',
              lineHeight: '1.5',
            }}>
              Restoring Health Through Root-Cause Healing
            </p>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: '1.75',
              margin: '0 0 28px',
              maxWidth: '260px',
            }}>
              Guided by the principles of Unani medicine, we deliver authentic herbal solutions and personalized healing care.
            </p>

            {/* Address */}
            <div style={{
              display: 'flex',
              gap: '12px',
              padding: '16px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              <MapPin size={16} color="#d4a843" style={{ minWidth: '16px', marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.60)', lineHeight: '1.6' }}>
                Bait-ul-Shifa Unani Clinic<br />
                Purani Haveli, Hyderabad<br />
                Telangana, India
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#d4a843',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                margin: '0 0 20px',
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.60)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => { e.target.style.color = '#d4a843'; }}
                      onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.60)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Heritage column */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#d4a843',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              margin: '0 0 20px',
            }}>
              Our Heritage
            </h4>

            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(26,92,56,0.25), rgba(26,92,56,0.12))',
              borderRadius: '14px',
              border: '1px solid rgba(26,92,56,0.30)',
              marginBottom: '16px',
            }}>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '22px',
                fontWeight: '700',
                color: '#d4a843',
                marginBottom: '4px',
              }}>
                Bait-ul-Shifa
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                Unani Clinic — Est. 1997
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: '1.6',
              }}>
                Serving patients with authentic Unani treatments from Purani Haveli, Hyderabad for over 27 years.
              </div>
            </div>

            <div style={{
              padding: '14px 16px',
              background: 'rgba(212,168,67,0.08)',
              borderRadius: '10px',
              border: '1px solid rgba(212,168,67,0.15)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.60)',
              lineHeight: '1.6',
            }}>
              <span style={{ color: '#d4a843', fontWeight: '600' }}>TheBioFlux.com</span> extends the healing legacy of Bait-ul-Shifa to the world.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          gap: '16px',
        }}>
          <div style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.40)',
          }}>
            &copy; {new Date().getFullYear()} TheBioFlux. All rights reserved.
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.40)',
          }}>
            Made with
            <Heart size={13} color="#d4a843" fill="#d4a843" />
            for holistic wellness
          </div>

          <div style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.30)',
            maxWidth: '380px',
            textAlign: 'right',
            lineHeight: '1.5',
          }}>
            Disclaimer: These products are not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified physician before use.
          </div>
        </div>
      </div>
    </footer>
  );
}
