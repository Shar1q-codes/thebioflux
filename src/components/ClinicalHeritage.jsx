import { MapPin, Clock, Building2, Heart } from 'lucide-react';

const heritageStats = [
  { icon: Clock, value: 'Since 1997', label: 'Serving Patients' },
  { icon: Building2, value: 'Bait-ul-Shifa', label: 'Clinic Name' },
  { icon: MapPin, value: 'Hyderabad', label: 'Telangana, India' },
  { icon: Heart, value: 'Authentic', label: 'Unani Treatments' },
];

export default function ClinicalHeritage() {
  return (
    <section
      id="heritage"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: 'linear-gradient(135deg, #0d2e1c 0%, #1a5c38 50%, #1e6b42 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '-100px', right: '-100px',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px', left: '-60px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(212,168,67,0.15)',
            border: '1px solid rgba(212,168,67,0.30)',
            borderRadius: '100px',
            marginBottom: '20px',
          }}>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#d4a843',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Clinical Heritage
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(26px, 3.5vw, 44px)',
            fontWeight: '700',
            color: '#ffffff',
            margin: '0 0 20px',
            lineHeight: '1.2',
          }}>
            A Tradition of Healing —
            <span style={{ color: '#d4a843', display: 'block' }}>
              Bait-ul-Shifa Unani Clinic
            </span>
          </h2>

          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #d4a843, rgba(212,168,67,0.3))',
            borderRadius: '2px',
            margin: '0 auto',
          }} />
        </div>

        {/* Main heritage card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
          marginBottom: 'clamp(40px, 6vw, 64px)',
        }}>
          {/* Left — Visual / emblem */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: 'min(360px, 100%)',
              aspectRatio: '1',
            }}>
              {/* Outer ring */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(212,168,67,0.20)',
              }} />
              {/* Middle ring */}
              <div style={{
                position: 'absolute',
                inset: '20px',
                borderRadius: '50%',
                border: '1px solid rgba(212,168,67,0.15)',
              }} />
              {/* Inner circle */}
              <div style={{
                position: 'absolute',
                inset: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, rgba(212,168,67,0.12), rgba(212,168,67,0.05))',
                border: '1px solid rgba(212,168,67,0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}>
                <div style={{ fontSize: '52px', lineHeight: '1' }}>&#x1F33F;</div>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '14px',
                  color: '#d4a843',
                  fontWeight: '600',
                  textAlign: 'center',
                  letterSpacing: '0.5px',
                }}>
                  Bait-ul-Shifa
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.50)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}>
                  Est. 1997
                </div>
              </div>

              {/* Decorative dots on ring */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  style={{
                    position: 'absolute',
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    background: '#d4a843',
                    opacity: 0.4,
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(calc(min(180px, 50vw) - 4px)) translateY(-50%)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <p style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: '1.85',
              margin: '0 0 24px',
            }}>
              Bait-ul-Shifa Unani Clinic has been a beacon of authentic Unani healing in Hyderabad since 1997. Located in the historic neighbourhood of Purani Haveli, the clinic carries forward a tradition of classical medicine that has touched thousands of lives.
            </p>

            <p style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              color: 'rgba(255,255,255,0.70)',
              lineHeight: '1.85',
              margin: '0 0 36px',
            }}>
              With a deeply traditional approach to healing, the clinic treats each patient with the same care and thoroughness that has defined its practice for nearly three decades. TheBioFlux continues and extends this legacy to reach patients worldwide.
            </p>

            {/* Location card */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '20px 24px',
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '14px',
              border: '1px solid rgba(212,168,67,0.20)',
            }}>
              <div style={{
                width: '42px', height: '42px',
                minWidth: '42px',
                background: 'rgba(212,168,67,0.15)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(212,168,67,0.25)',
              }}>
                <MapPin size={20} color="#d4a843" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#d4a843',
                  marginBottom: '4px',
                  letterSpacing: '0.5px',
                }}>
                  Clinical Address
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: '1.6',
                }}>
                  Bait-ul-Shifa Unani Clinic<br />
                  Purani Haveli, Hyderabad<br />
                  Telangana, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          padding: 'clamp(28px, 4vw, 40px)',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '20px',
          border: '1px solid rgba(212,168,67,0.15)',
        }}>
          {heritageStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '16px 12px',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  background: 'rgba(212,168,67,0.12)',
                  border: '1px solid rgba(212,168,67,0.25)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                }}>
                  <Icon size={20} color="#d4a843" strokeWidth={1.8} />
                </div>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
