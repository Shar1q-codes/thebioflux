import { useState } from 'react';
import { ShieldCheck, Crown, Zap, Leaf, Users, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import primeplusImg from '../assets/primeplus.png';

const benefits = [
  'Enhances physical stamina, strength, and overall vitality',
  'Supports healthy testosterone levels and male hormonal balance',
  'Improves cognitive function, mental clarity, and focus',
  'Strengthens the immune system and builds resistance to illness',
  'Promotes recovery after physical exertion and fatigue',
  'Supports cardiovascular health and circulation',
];

const whoShouldUse = [
  'Men seeking enhanced vitality and physical performance',
  'Those experiencing fatigue, low energy, or weakness',
  'Individuals looking for natural hormonal support',
  'Men over 35 prioritizing preventive health measures',
  'Those recovering from illness or prolonged stress',
];

const lifestyleBenefits = [
  'Improved sleep quality and recovery',
  'Enhanced mood and emotional resilience',
  'Better digestive health and nutrient absorption',
  'Increased mental agility and sharpness',
];

const ingredients = [
  { latin: 'Aconitum heterophyllum', common: 'Atis Root', region: 'Himalayan' },
  { latin: 'Hyoscyamus niger', common: 'Black Henbane', region: 'Classical' },
  { latin: 'Valeriana wallichii', common: 'Indian Valerian', region: 'Himalayan' },
  { latin: 'Lavandula stoechas', common: 'French Lavender', region: 'Mediterranean' },
  { latin: 'Smilax china', common: 'China Root', region: 'East Asian' },
  { latin: 'Elettaria cardamomum', common: 'Green Cardamom', region: 'South Asian' },
  { latin: 'Phyllanthus emblica', common: 'Indian Gooseberry', region: 'South Asian' },
  { latin: 'Holarrhena antidysenterica', common: 'Kurchi Bark', region: 'Indian' },
  { latin: 'Anethum graveolens', common: 'Dill Seed', region: 'Mediterranean' },
  { latin: 'Iris germanica', common: 'Orris Root', region: 'European' },
  { latin: 'Anacyclus pyrethrum', common: 'Pellitory Root', region: 'North African' },
  { latin: 'Borago officinalis', common: 'Borage', region: 'Mediterranean' },
];

const tabs = ['Benefits', 'Who It\'s For', 'How It Works', 'Ingredients'];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedIngredient, setExpandedIngredient] = useState(null);

  return (
    <section
      id="products"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: 'linear-gradient(180deg, #fdf8f0 0%, #f5edd8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(26,92,56,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '-60px', right: '-80px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
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
            background: 'rgba(212,168,67,0.12)',
            border: '1px solid rgba(212,168,67,0.25)',
            borderRadius: '100px',
            marginBottom: '20px',
          }}>
            <Crown size={13} color="#c49022" />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#a8791a',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Flagship Product
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '700',
            color: '#1a2e1f',
            margin: '0 0 16px',
            lineHeight: '1.15',
          }}>
            PrimePulse Chyawanprash
          </h2>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#d4a843',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            margin: '0 0 20px',
            fontWeight: '500',
          }}>
            Advanced Herbal Vitality Formula for Men
          </p>

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
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            A meticulously crafted formulation of 140+ rare herbs and traditional tonic ingredients,
            historically used in royal Unani courts for supreme male vitality.
          </p>
        </div>

        {/* Product hero card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          marginBottom: '48px',
          alignItems: 'stretch',
        }}>
          {/* Product visual card */}
          <div style={{
            background: 'linear-gradient(145deg, #0d2e1c, #1a5c38)',
            borderRadius: '24px',
            padding: 'clamp(36px, 4vw, 56px) clamp(28px, 3vw, 44px)',
            boxShadow: '0 20px 60px rgba(13,46,28,0.28)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              top: '-60px', right: '-60px',
              width: '280px', height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 65%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Product image */}
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '28px',
              }}>
                <img
                  src={primeplusImg}
                  alt="PrimePulse Chyawanprash"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.35))',
                  }}
                />
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                background: 'rgba(212,168,67,0.15)',
                border: '1px solid rgba(212,168,67,0.30)',
                borderRadius: '100px',
                marginBottom: '16px',
              }}>
                <Crown size={12} color="#d4a843" />
                <span style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#d4a843',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Royal Heritage Formula
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: '700',
                color: '#ffffff',
                margin: '0 0 16px',
                lineHeight: '1.2',
              }}>
                PrimePulse Chyawanprash
              </h3>

              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: '1.75',
                margin: '0 0 32px',
              }}>
                Historically used by nawabs and royal courts, this ancient Unani formulation has been refined for the modern gentleman seeking peak vitality, strength, and enduring health.
              </p>

              {/* Feature pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['140+ Herbs', 'Royal Formula', 'Unani Certified', 'All Natural'].map((tag) => (
                  <span key={tag} style={{
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.09)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'rgba(255,255,255,0.75)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key features grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {[
              { icon: ShieldCheck, label: 'Pure & Safe', text: 'Free from synthetic additives and harmful chemicals' },
              { icon: Crown, label: 'Royal Legacy', text: 'Historically used in Nawabi courts across Hyderabad' },
              { icon: Leaf, label: '140+ Herbs', text: 'Rare botanicals sourced for maximum potency' },
              { icon: Zap, label: 'Proven Efficacy', text: 'Clinically refined formulation over decades of practice' },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  border: '1px solid rgba(26,92,56,0.10)',
                  boxShadow: '0 4px 12px rgba(26,92,56,0.06)',
                  transition: 'all 0.25s ease',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(26,92,56,0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,92,56,0.06)';
                  }}
                >
                  <div style={{
                    width: '46px', height: '46px',
                    background: 'linear-gradient(135deg, rgba(26,92,56,0.10), rgba(212,168,67,0.10))',
                    border: '1px solid rgba(26,92,56,0.10)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px',
                  }}>
                    <Icon size={22} color="#1a5c38" strokeWidth={1.8} />
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#1a2e1f',
                    marginBottom: '6px',
                  }}>
                    {feature.label}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#6a7a70',
                    lineHeight: '1.55',
                  }}>
                    {feature.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabbed content */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(26,92,56,0.10)',
          boxShadow: '0 8px 32px rgba(26,92,56,0.08)',
          overflow: 'hidden',
        }}>
          {/* Tab header */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid rgba(26,92,56,0.10)',
            background: '#fdf8f0',
            overflowX: 'auto',
          }}>
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '18px 28px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: activeTab === idx ? '#1a5c38' : '#8a9a90',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === idx ? '3px solid #1a5c38' : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.3px',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
            {activeTab === 0 && (
              <div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1a2e1f',
                  margin: '0 0 8px',
                }}>
                  Key Benefits
                </h3>
                <p style={{ fontSize: '14px', color: '#8a9a90', margin: '0 0 28px' }}>
                  What PrimePulse Chyawanprash does for your body
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                }}>
                  {benefits.map((benefit) => (
                    <div key={benefit} style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '18px',
                      background: '#f9faf9',
                      borderRadius: '12px',
                      border: '1px solid rgba(26,92,56,0.08)',
                      alignItems: 'flex-start',
                    }}>
                      <CheckCircle2 size={18} color="#1a5c38" style={{ minWidth: '18px', marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: '#3a4a40', lineHeight: '1.6' }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1a2e1f',
                  margin: '0 0 8px',
                }}>
                  Who Should Use It
                </h3>
                <p style={{ fontSize: '14px', color: '#8a9a90', margin: '0 0 28px' }}>
                  PrimePulse Chyawanprash is ideal for:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {whoShouldUse.map((item, idx) => (
                    <div key={item} style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'center',
                      padding: '18px 24px',
                      background: '#f9faf9',
                      borderRadius: '12px',
                      border: '1px solid rgba(26,92,56,0.08)',
                    }}>
                      <div style={{
                        width: '32px', height: '32px',
                        minWidth: '32px',
                        background: 'linear-gradient(135deg, #1a5c38, #2a8a56)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#ffffff',
                      }}>
                        {idx + 1}
                      </div>
                      <span style={{ fontSize: '15px', color: '#3a4a40', lineHeight: '1.5' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1a2e1f',
                  margin: '0 0 8px',
                }}>
                  How It Works & Lifestyle Benefits
                </h3>
                <p style={{ fontSize: '14px', color: '#8a9a90', margin: '0 0 28px' }}>
                  The science and lifestyle impact of this formulation
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                }}>
                  <div style={{
                    padding: '28px',
                    background: 'linear-gradient(135deg, rgba(26,92,56,0.05), rgba(26,92,56,0.02))',
                    borderRadius: '16px',
                    border: '1px solid rgba(26,92,56,0.10)',
                  }}>
                    <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#x2697;&#xFE0F;</div>
                    <h4 style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1a2e1f',
                      margin: '0 0 12px',
                    }}>
                      How It Works
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#5a6a5f',
                      lineHeight: '1.75',
                      margin: 0,
                    }}>
                      PrimePulse Chyawanprash works by addressing the Mizaj (temperament) and vital organs through a synergistic blend of 140+ botanicals. The formulation nourishes Ojas (vital essence), balances the four Akhlat (humours), and restores the body's innate intelligence — strengthening from the cellular level outward.
                    </p>
                  </div>

                  <div>
                    <h4 style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1a2e1f',
                      margin: '0 0 16px',
                    }}>
                      Lifestyle Benefits
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {lifestyleBenefits.map((benefit) => (
                        <div key={benefit} style={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'center',
                          padding: '14px 18px',
                          background: '#ffffff',
                          borderRadius: '10px',
                          border: '1px solid rgba(26,92,56,0.08)',
                          boxShadow: '0 2px 6px rgba(26,92,56,0.04)',
                        }}>
                          <Leaf size={16} color="#d4a843" style={{ minWidth: '16px' }} />
                          <span style={{ fontSize: '14px', color: '#3a4a40' }}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1a2e1f',
                  margin: '0 0 8px',
                }}>
                  Key Botanical Ingredients
                </h3>
                <p style={{ fontSize: '14px', color: '#8a9a90', margin: '0 0 28px' }}>
                  A selection from our 140+ rare herbs — sourced from around the world
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '14px',
                }}>
                  {ingredients.map((ing, idx) => (
                    <div
                      key={ing.latin}
                      onClick={() => setExpandedIngredient(expandedIngredient === idx ? null : idx)}
                      style={{
                        padding: '18px 20px',
                        background: expandedIngredient === idx
                          ? 'linear-gradient(135deg, #1a5c38, #0d2e1c)'
                          : '#f9faf9',
                        borderRadius: '12px',
                        border: expandedIngredient === idx
                          ? '1px solid transparent'
                          : '1px solid rgba(26,92,56,0.10)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        boxShadow: expandedIngredient === idx
                          ? '0 8px 24px rgba(26,92,56,0.20)'
                          : '0 2px 6px rgba(26,92,56,0.04)',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}>
                        <div>
                          <div style={{
                            fontSize: '13px',
                            fontStyle: 'italic',
                            color: expandedIngredient === idx ? 'rgba(255,255,255,0.70)' : '#8a9a90',
                            marginBottom: '4px',
                            transition: 'color 0.25s ease',
                          }}>
                            {ing.latin}
                          </div>
                          <div style={{
                            fontSize: '15px',
                            fontWeight: '600',
                            color: expandedIngredient === idx ? '#ffffff' : '#1a2e1f',
                            transition: 'color 0.25s ease',
                          }}>
                            {ing.common}
                          </div>
                        </div>
                        {expandedIngredient === idx
                          ? <ChevronUp size={16} color="rgba(255,255,255,0.60)" />
                          : <ChevronDown size={16} color="#8a9a90" />
                        }
                      </div>
                      {expandedIngredient === idx && (
                        <div style={{
                          marginTop: '12px',
                          paddingTop: '12px',
                          borderTop: '1px solid rgba(255,255,255,0.12)',
                        }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '4px 10px',
                            background: 'rgba(212,168,67,0.18)',
                            border: '1px solid rgba(212,168,67,0.30)',
                            borderRadius: '100px',
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#d4a843',
                            letterSpacing: '0.5px',
                          }}>
                            {ing.region} Origin
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: 'linear-gradient(135deg, #1a5c38, #2a8a56)',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '16px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(26,92,56,0.28)',
              transition: 'all 0.25s ease',
              letterSpacing: '0.3px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(26,92,56,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,92,56,0.28)';
            }}
          >
            Inquire About PrimePulse
            <ArrowRight size={18} />
          </button>
          <p style={{
            fontSize: '13px',
            color: '#8a9a90',
            marginTop: '12px',
          }}>
            Personalized consultations available
          </p>
        </div>
      </div>
    </section>
  );
}
