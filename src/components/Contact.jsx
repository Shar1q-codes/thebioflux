import { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle2, Loader } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 16px 14px 48px',
    fontSize: '15px',
    color: '#2c2c2c',
    background: focused === field ? '#ffffff' : '#fdfaf5',
    border: focused === field
      ? '2px solid #1a5c38'
      : '2px solid rgba(26,92,56,0.15)',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
    boxShadow: focused === field ? '0 0 0 4px rgba(26,92,56,0.08)' : 'none',
  });

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: 'linear-gradient(180deg, #f5edd8 0%, #fdf8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorations */}
      <div style={{
        position: 'absolute',
        top: '-80px', right: '-80px',
        width: '450px', height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,92,56,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-60px', left: '-60px',
        width: '380px', height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
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
              Get In Touch
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
            Begin Your Healing Journey
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
            Reach out to schedule a consultation or inquire about our products. Dr. Miskeen and the TheBioFlux team are here to guide you.
          </p>
        </div>

        {/* Grid: info + form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(32px, 5vw, 56px)',
          alignItems: 'start',
        }}>
          {/* Left — Info */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, #0d2e1c, #1a5c38)',
              borderRadius: '20px',
              padding: 'clamp(32px, 4vw, 48px)',
              boxShadow: '0 16px 40px rgba(13,46,28,0.22)',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                top: '-40px', right: '-40px',
                width: '200px', height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 65%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#ffffff',
                  margin: '0 0 8px',
                }}>
                  Book a Consultation
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.65)',
                  margin: '0 0 32px',
                  lineHeight: '1.6',
                }}>
                  Our Unani physicians provide personalized treatment plans tailored to your unique health profile.
                </p>

                {[
                  { label: 'Clinic', value: 'Bait-ul-Shifa Unani Clinic' },
                  { label: 'Address', value: 'Purani Haveli, Hyderabad, Telangana, India' },
                  { label: 'Established', value: 'Since 1997' },
                  { label: 'Specialty', value: 'Classical Unani Medicine' },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '18px',
                    paddingBottom: '18px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#d4a843',
                      minWidth: '80px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      paddingTop: '2px',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.78)',
                      lineHeight: '1.5',
                    }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div style={{
              padding: '24px',
              background: 'rgba(212,168,67,0.08)',
              borderLeft: '3px solid #d4a843',
              borderRadius: '0 12px 12px 0',
            }}>
              <p style={{
                fontSize: '15px',
                fontStyle: 'italic',
                fontFamily: 'Georgia, serif',
                color: '#3a2e1a',
                lineHeight: '1.7',
                margin: '0 0 10px',
              }}>
                "Every patient deserves a treatment rooted in understanding, not assumptions."
              </p>
              <div style={{ fontSize: '13px', color: '#8a7a50', fontWeight: '600' }}>
                — Dr. Mohammed Farooq Miskeen
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: 'clamp(32px, 4vw, 48px)',
            border: '1px solid rgba(26,92,56,0.10)',
            boxShadow: '0 8px 32px rgba(26,92,56,0.08)',
          }}>
            {status === 'success' ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
              }}>
                <div style={{
                  width: '72px', height: '72px',
                  background: 'linear-gradient(135deg, rgba(26,92,56,0.12), rgba(26,92,56,0.06))',
                  border: '2px solid rgba(26,92,56,0.20)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <CheckCircle2 size={34} color="#1a5c38" strokeWidth={1.8} />
                </div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1a2e1f',
                  margin: '0 0 12px',
                }}>
                  Message Received
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#5a6a5f',
                  lineHeight: '1.7',
                  margin: '0 0 28px',
                }}>
                  Thank you for reaching out. We will review your inquiry and respond promptly to schedule your consultation.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    padding: '12px 28px',
                    background: 'linear-gradient(135deg, #1a5c38, #2a8a56)',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '14px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1a2e1f',
                  margin: '0 0 8px',
                }}>
                  Send Us a Message
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#8a9a90',
                  margin: '0 0 32px',
                }}>
                  We typically respond within 24 hours
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Name */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#3a4a40',
                      marginBottom: '8px',
                      letterSpacing: '0.3px',
                    }}>
                      Full Name
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User
                        size={16}
                        color={focused === 'name' ? '#1a5c38' : '#a0b0a8'}
                        style={{
                          position: 'absolute', left: '16px', top: '50%',
                          transform: 'translateY(-50%)', pointerEvents: 'none',
                          transition: 'color 0.2s',
                        }}
                      />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Your full name"
                        required
                        style={inputStyle('name')}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#3a4a40',
                      marginBottom: '8px',
                      letterSpacing: '0.3px',
                    }}>
                      Email Address
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail
                        size={16}
                        color={focused === 'email' ? '#1a5c38' : '#a0b0a8'}
                        style={{
                          position: 'absolute', left: '16px', top: '50%',
                          transform: 'translateY(-50%)', pointerEvents: 'none',
                          transition: 'color 0.2s',
                        }}
                      />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="your@email.com"
                        required
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#3a4a40',
                      marginBottom: '8px',
                      letterSpacing: '0.3px',
                    }}>
                      Message
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MessageSquare
                        size={16}
                        color={focused === 'message' ? '#1a5c38' : '#a0b0a8'}
                        style={{
                          position: 'absolute', left: '16px', top: '16px',
                          pointerEvents: 'none',
                          transition: 'color 0.2s',
                        }}
                      />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Describe your health concern or inquiry..."
                        required
                        rows={5}
                        style={{
                          ...inputStyle('message'),
                          resize: 'vertical',
                          minHeight: '130px',
                          paddingTop: '14px',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '16px 32px',
                      background: status === 'submitting'
                        ? 'rgba(26,92,56,0.65)'
                        : 'linear-gradient(135deg, #1a5c38, #2a8a56)',
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '15px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 16px rgba(26,92,56,0.25)',
                      transition: 'all 0.25s ease',
                      letterSpacing: '0.3px',
                    }}
                    onMouseEnter={(e) => {
                      if (status !== 'submitting') {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,92,56,0.32)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,92,56,0.25)';
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
