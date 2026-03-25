import { UserCheck, Brain, FlaskConical, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    number: '01',
    icon: UserCheck,
    title: 'Individual Diagnosis',
    description:
      'Every patient is treated as a unique individual. We begin with a thorough assessment that considers your complete health history, lifestyle, and symptoms.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Mizaj-Based Assessment',
    description:
      'Treatment is guided by your Mizaj (temperament), lifestyle patterns, and health condition — the cornerstone of classical Unani diagnostic methodology.',
  },
  {
    number: '03',
    icon: FlaskConical,
    title: 'Customized Herbal Formulations',
    description:
      'Herbal preparations are tailored specifically to your diagnosis. No generic prescriptions — every formulation is designed around your individual needs.',
  },
  {
    number: '04',
    icon: Target,
    title: 'Root-Cause Focus',
    description:
      'We address the underlying imbalances causing illness, not just the surface symptoms. This approach prevents recurrence and promotes lasting health.',
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Long-Term Healing',
    description:
      'Our goal is sustained wellness. Treatment plans support your body\'s natural healing processes and build resilience over time for enduring health.',
  },
];

export default function TreatmentApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section
      id="approach"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: 'linear-gradient(180deg, #fdf8f0 0%, #f0ede4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,92,56,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
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
              Our Approach
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(26px, 3.5vw, 44px)',
            fontWeight: '700',
            color: '#1a2e1f',
            margin: '0 0 20px',
            lineHeight: '1.2',
          }}>
            Treatment Designed Around the Individual,
            <span style={{ color: '#1a5c38', display: 'block' }}>Not Just the Disease</span>
          </h2>

          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #1a5c38, #d4a843)',
            borderRadius: '2px',
            margin: '0 auto 24px',
          }} />

          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: '#5a6a5f',
            lineHeight: '1.75',
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            Our Unani methodology follows a structured, holistic journey from diagnosis to lasting wellness.
          </p>
        </div>

        {/* Two-column layout: steps list + detail panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Steps list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '20px 24px',
                    background: isActive
                      ? 'linear-gradient(135deg, #1a5c38, #0d2e1c)'
                      : '#ffffff',
                    borderRadius: '14px',
                    border: isActive
                      ? '1px solid transparent'
                      : '1px solid rgba(26,92,56,0.10)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive
                      ? '0 8px 24px rgba(26,92,56,0.20)'
                      : '0 2px 8px rgba(26,92,56,0.05)',
                  }}
                >
                  <div style={{
                    width: '46px', height: '46px',
                    minWidth: '46px',
                    borderRadius: '12px',
                    background: isActive
                      ? 'rgba(212,168,67,0.18)'
                      : 'rgba(26,92,56,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: isActive
                      ? '1px solid rgba(212,168,67,0.30)'
                      : '1px solid rgba(26,92,56,0.08)',
                    transition: 'all 0.3s ease',
                  }}>
                    <StepIcon size={20} color={isActive ? '#d4a843' : '#1a5c38'} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: isActive ? 'rgba(212,168,67,0.80)' : '#8a9a90',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '3px',
                      transition: 'color 0.3s ease',
                    }}>
                      Step {step.number}
                    </div>
                    <div style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: isActive ? '#ffffff' : '#1a2e1f',
                      transition: 'color 0.3s ease',
                    }}>
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div style={{
            background: 'linear-gradient(145deg, #1a5c38, #0d2e1c)',
            borderRadius: '20px',
            padding: 'clamp(36px, 5vw, 56px) clamp(32px, 4vw, 48px)',
            boxShadow: '0 20px 48px rgba(13,46,28,0.22)',
            position: 'sticky',
            top: '90px',
            overflow: 'hidden',
          }}>
            {/* Background pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              top: '-60px', right: '-60px',
              width: '250px', height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Step badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(212,168,67,0.15)',
                border: '1px solid rgba(212,168,67,0.30)',
                borderRadius: '100px',
                marginBottom: '28px',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#d4a843',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Step {active.number}
                </span>
              </div>

              {/* Icon */}
              <div style={{
                width: '72px', height: '72px',
                background: 'rgba(212,168,67,0.15)',
                border: '1px solid rgba(212,168,67,0.30)',
                borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '28px',
              }}>
                <ActiveIcon size={32} color="#d4a843" strokeWidth={1.6} />
              </div>

              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: '700',
                color: '#ffffff',
                margin: '0 0 20px',
                lineHeight: '1.25',
              }}>
                {active.title}
              </h3>

              <div style={{
                width: '48px', height: '2px',
                background: 'linear-gradient(90deg, #d4a843, transparent)',
                borderRadius: '2px',
                marginBottom: '24px',
              }} />

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: '1.85',
                margin: '0',
              }}>
                {active.description}
              </p>

              {/* Progress dots */}
              <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '40px',
              }}>
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      width: idx === activeStep ? '28px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: idx === activeStep ? '#d4a843' : 'rgba(255,255,255,0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: '0',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
