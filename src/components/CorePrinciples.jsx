import { Search, BookOpen, Leaf, Users } from 'lucide-react';
import { useState } from 'react';

const principles = [
  {
    icon: Search,
    title: 'Root-Cause Diagnosis',
    description:
      'We identify the real underlying cause of illness rather than only suppressing symptoms. Every treatment begins with understanding what is truly disrupting the body\'s balance.',
    color: '#1a5c38',
    accent: '#d4a843',
  },
  {
    icon: BookOpen,
    title: 'Authentic Unani Formulations',
    description:
      'Our preparations are grounded in classical Unani medical knowledge — a time-tested system of healing developed over centuries by distinguished physicians across the ancient world.',
    color: '#1a5c38',
    accent: '#d4a843',
  },
  {
    icon: Leaf,
    title: 'Pure Natural Ingredients',
    description:
      'Every herb and ingredient is carefully selected for its quality, potency, and effectiveness. We use only the finest natural botanicals, free from harmful additives.',
    color: '#1a5c38',
    accent: '#d4a843',
  },
  {
    icon: Users,
    title: 'Generational Knowledge',
    description:
      'Built on a rich legacy of traditional healing experience and clinical practice, our approach combines decades of family wisdom with rigorously applied medical expertise.',
    color: '#1a5c38',
    accent: '#d4a843',
  },
];

function PrincipleCard({ principle, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = principle.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #1a5c38 0%, #0d2e1c 100%)'
          : '#ffffff',
        borderRadius: '16px',
        padding: '40px 32px',
        border: hovered ? '1px solid transparent' : '1px solid rgba(26,92,56,0.12)',
        boxShadow: hovered
          ? '0 20px 48px rgba(26,92,56,0.25)'
          : '0 4px 16px rgba(26,92,56,0.06)',
        transition: 'all 0.35s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background number */}
      <div style={{
        position: 'absolute',
        top: '-10px', right: '20px',
        fontFamily: 'Georgia, serif',
        fontSize: '120px',
        fontWeight: '700',
        color: hovered ? 'rgba(212,168,67,0.08)' : 'rgba(26,92,56,0.04)',
        lineHeight: '1',
        pointerEvents: 'none',
        transition: 'color 0.35s ease',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div style={{
        width: '60px', height: '60px',
        background: hovered
          ? 'rgba(212,168,67,0.18)'
          : 'linear-gradient(135deg, rgba(26,92,56,0.10), rgba(212,168,67,0.10))',
        borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '24px',
        transition: 'all 0.35s ease',
        border: hovered ? '1px solid rgba(212,168,67,0.30)' : '1px solid rgba(26,92,56,0.10)',
      }}>
        <Icon size={26} color={hovered ? '#d4a843' : '#1a5c38'} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '20px',
        fontWeight: '700',
        color: hovered ? '#ffffff' : '#1a2e1f',
        margin: '0 0 14px',
        lineHeight: '1.3',
        transition: 'color 0.35s ease',
      }}>
        {principle.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '15px',
        color: hovered ? 'rgba(255,255,255,0.78)' : '#5a6a5f',
        lineHeight: '1.75',
        margin: '0',
        transition: 'color 0.35s ease',
      }}>
        {principle.description}
      </p>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '3px',
        background: hovered
          ? 'linear-gradient(90deg, #d4a843, rgba(212,168,67,0.3))'
          : 'transparent',
        borderRadius: '0 0 16px 16px',
        transition: 'background 0.35s ease',
      }} />
    </div>
  );
}

export default function CorePrinciples() {
  return (
    <section
      id="principles"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: '#fdf8f0',
        position: 'relative',
      }}
    >
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(26,92,56,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Section header */}
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
              Our Foundation
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: '700',
            color: '#1a2e1f',
            margin: '0 0 20px',
            lineHeight: '1.2',
          }}>
            The Pillars of Our Practice
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
            maxWidth: '580px',
            margin: '0 auto',
          }}>
            Every aspect of TheBioFlux is guided by enduring principles rooted in centuries of Unani medical wisdom and clinical experience.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.title} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
