import { Award, Stethoscope, BookOpen, Star } from 'lucide-react';

const highlights = [
  {
    icon: Stethoscope,
    label: 'Distinguished Physician',
    text: 'Deep understanding of classical Unani medicine and refined diagnostic skills.',
  },
  {
    icon: BookOpen,
    label: 'Classical Knowledge',
    text: 'Trained in authentic Unani texts and methodologies from renowned institutions.',
  },
  {
    icon: Award,
    label: 'Decades of Practice',
    text: 'Years of dedicated clinical practice focusing on root-cause healing.',
  },
  {
    icon: Star,
    label: 'Formulation Expert',
    text: 'Carefully developed herbal formulations blending tradition with clinical evidence.',
  },
];

export default function AboutFounder() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: 'linear-gradient(180deg, #f5edd8 0%, #fdf8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-60px', right: '-80px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,92,56,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px', left: '-60px',
        width: '350px', height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}>
        {/* Left — Portrait / Visual */}
        <div style={{ position: 'relative' }}>
          {/* Decorative frame */}
          <div style={{
            position: 'absolute',
            top: '-16px', left: '-16px',
            right: '16px', bottom: '16px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(26,92,56,0.12), rgba(212,168,67,0.10))',
            border: '1px solid rgba(26,92,56,0.15)',
            zIndex: 0,
          }} />

          {/* Main card */}
          <div style={{
            position: 'relative', zIndex: 1,
            background: 'linear-gradient(145deg, #0d2e1c, #1a5c38)',
            borderRadius: '20px',
            padding: 'clamp(40px, 5vw, 60px) 40px',
            boxShadow: '0 20px 48px rgba(13,46,28,0.25)',
            overflow: 'hidden',
          }}>
            {/* Pattern overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              pointerEvents: 'none',
            }} />

            {/* Gold accent shape */}
            <div style={{
              position: 'absolute',
              top: '-40px', right: '-40px',
              width: '200px', height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Avatar placeholder */}
            <div style={{
              width: '100px', height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(212,168,67,0.25), rgba(212,168,67,0.10))',
              border: '3px solid rgba(212,168,67,0.40)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '28px',
              fontSize: '40px',
              position: 'relative', zIndex: 1,
            }}>
              <span style={{ fontSize: '40px' }}>&#x1F33F;</span>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-block',
                padding: '5px 14px',
                background: 'rgba(212,168,67,0.15)',
                border: '1px solid rgba(212,168,67,0.30)',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: '600',
                color: '#d4a843',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                Founder & Chief Physician
              </div>

              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: '700',
                color: '#ffffff',
                margin: '0 0 8px',
                lineHeight: '1.2',
              }}>
                Dr. Mohammed Farooq Miskeen
              </h3>

              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.65)',
                margin: '0 0 32px',
              }}>
                BUMS · Unani Physician · Hyderabad, India
              </p>

              {/* Separator */}
              <div style={{
                width: '48px', height: '2px',
                background: 'linear-gradient(90deg, #d4a843, transparent)',
                marginBottom: '28px',
                borderRadius: '2px',
              }} />

              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: '1.8',
                margin: '0',
                fontStyle: 'italic',
              }}>
                "True healing begins when we understand the root — not just the symptom."
              </p>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(26,92,56,0.08)',
            border: '1px solid rgba(26,92,56,0.15)',
            borderRadius: '100px',
            marginBottom: '20px',
          }}>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#1a5c38',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              About the Founder
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: '700',
            color: '#1a2e1f',
            margin: '0 0 24px',
            lineHeight: '1.2',
          }}>
            A Legacy of Healing Rooted in Classical Medicine
          </h2>

          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #1a5c38, #d4a843)',
            borderRadius: '2px',
            marginBottom: '28px',
          }} />

          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 16px)',
            color: '#4a5a50',
            lineHeight: '1.85',
            margin: '0 0 20px',
          }}>
            Dr. Mohammed Farooq Miskeen is a distinguished Unani physician with a deep understanding of classical medicine, refined diagnostic skills, and carefully developed herbal formulations built over a lifetime of practice.
          </p>

          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 16px)',
            color: '#4a5a50',
            lineHeight: '1.85',
            margin: '0 0 36px',
          }}>
            His years of dedicated clinical practice focus on identifying root causes rather than simply suppressing symptoms. He strikes a rare balance between traditional Unani wisdom and practical, results-driven clinical experience — a combination that defines TheBioFlux.
          </p>

          {/* Highlight grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}>
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '18px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid rgba(26,92,56,0.10)',
                  boxShadow: '0 2px 8px rgba(26,92,56,0.05)',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '38px', height: '38px',
                    minWidth: '38px',
                    background: 'linear-gradient(135deg, rgba(26,92,56,0.10), rgba(212,168,67,0.10))',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(26,92,56,0.10)',
                  }}>
                    <Icon size={18} color="#1a5c38" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#1a2e1f',
                      marginBottom: '4px',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#6a7a70',
                      lineHeight: '1.5',
                    }}>
                      {item.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust line */}
          <div style={{
            marginTop: '32px',
            padding: '20px 24px',
            background: 'rgba(26,92,56,0.05)',
            borderLeft: '3px solid #d4a843',
            borderRadius: '0 12px 12px 0',
          }}>
            <p style={{
              fontSize: '14px',
              color: '#4a5a50',
              lineHeight: '1.7',
              margin: '0',
            }}>
              Under his guidance, <strong style={{ color: '#1a5c38' }}>TheBioFlux</strong> delivers trusted herbal solutions and personalized Unani treatment — continuing a tradition of healing that has served patients since 1997.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
