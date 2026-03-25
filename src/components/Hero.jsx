import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0d2e1c 0%, #1a5c38 40%, #1e6b42 65%, #2c4a20 100%)',
      }}
    >
      {/* Layered background elements */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(212,168,67,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 80%, rgba(212,168,67,0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-80px', right: '-80px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px', left: '-60px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(42,138,86,0.20) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Organic leaf shapes */}
      <div style={{
        position: 'absolute',
        top: '15%', right: '8%',
        width: '180px', height: '180px',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        background: 'rgba(212,168,67,0.07)',
        border: '1px solid rgba(212,168,67,0.12)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%', right: '18%',
        width: '120px', height: '120px',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        pointerEvents: 'none',
      }} />

      {/* Dot pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 80px',
        width: '100%', position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            background: 'rgba(212,168,67,0.15)',
            border: '1px solid rgba(212,168,67,0.35)',
            borderRadius: '100px',
            marginBottom: '32px',
          }}>
            <Sparkles size={14} color="#d4a843" />
            <span style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#d4a843',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Ancient Wisdom. Modern Healing.
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.12',
            letterSpacing: '-1px',
            margin: '0 0 28px',
          }}>
            Restoring Health by{' '}
            <span style={{
              color: '#d4a843',
              display: 'block',
            }}>
              Identifying the Root Cause
            </span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'rgba(255,255,255,0.80)',
            lineHeight: '1.75',
            margin: '0 0 44px',
            maxWidth: '600px',
          }}>
            Guided by the principles of Unani medicine — natural healing, balanced lifestyle, and carefully prepared herbal formulations that work in harmony with your body.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => scrollTo('#products')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #d4a843, #c49022)',
                color: '#0d2e1c',
                fontWeight: '700',
                fontSize: '15px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(212,168,67,0.35)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(212,168,67,0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,168,67,0.35)';
              }}
            >
              Explore Products
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '15px 32px',
                background: 'transparent',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '15px',
                borderRadius: '10px',
                border: '2px solid rgba(255,255,255,0.35)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.60)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
              }}
            >
              <Calendar size={17} />
              Book Consultation
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            marginTop: '64px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}>
            {[
              { value: '27+', label: 'Years of Practice' },
              { value: '140+', label: 'Rare Herbs Used' },
              { value: '1997', label: 'Clinic Established' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '700',
                  color: '#d4a843',
                  lineHeight: '1',
                  marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.60)',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, #fdf8f0)',
        pointerEvents: 'none',
      }} />
    </section>
  );
}
