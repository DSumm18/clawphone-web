'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="section section-white">
        <div className="container-narrow text-center">
          <h1>Your AI Assistant, One Tap Away</h1>
          <p className="mt-6 text-muted" style={{ fontSize: '20px' }}>
            Voice chat with your OpenClaw bot using 20+ character voices. Every skill is scanned for safety before you install.
          </p>
          <div className="mt-8" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn btn-primary">Get ClawPhone</a>
            <a href="#how-it-works" className="btn btn-secondary">See How It Works</a>
          </div>
          
          {/* App Mockup Placeholder */}
          <div className="mt-12" style={{ 
            background: 'linear-gradient(135deg, #EEF2FF 0%, #ECFEFF 100%)', 
            borderRadius: '24px', 
            padding: '48px',
            maxWidth: '320px',
            margin: '48px auto 0'
          }}>
            <div style={{ 
              background: '#1F2937', 
              borderRadius: '32px', 
              padding: '12px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}>
              <div style={{ 
                background: '#111827', 
                borderRadius: '24px', 
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🦞</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF' }}>ClawPhone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="section-off-white" style={{ padding: '32px 16px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>12K+</div>
              <div className="text-muted">Downloads</div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>4.8★</div>
              <div className="text-muted">App Store Rating</div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>500+</div>
              <div className="text-muted">Beta Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section section-white">
        <div className="container text-center">
          <h2>How It Works</h2>
          <p className="mt-4 text-muted">Three steps to safer AI conversations</p>
          
          <div className="grid-3 mt-12">
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>1️⃣</div>
              <h3>Connect Your Bot</h3>
              <p className="mt-4 text-muted">Link your existing OpenClaw bot in seconds. No new subscriptions needed.</p>
            </div>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>2️⃣</div>
              <h3>Browse Skills Safely</h3>
              <p className="mt-4 text-muted">Every skill shows a safety score. Green means safe. Amber means caution. Red means risk.</p>
            </div>
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>3️⃣</div>
              <h3>Chat With Confidence</h3>
              <p className="mt-4 text-muted">Voice, text, or images. 20+ character voices. Your data stays protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section section-off-white">
        <div className="container text-center">
          <h2>Everything You Need</h2>
          <p className="mt-4 text-muted">Powerful features for safer AI interactions</p>
          
          <div className="grid-3 mt-12">
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎤</div>
              <h3 style={{ fontSize: '18px' }}>Voice Chat</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>Natural conversations with 20+ character voices</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🛡️</div>
              <h3 style={{ fontSize: '18px' }}>Safety Scanning</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>Every skill checked before you install</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📷</div>
              <h3 style={{ fontSize: '18px' }}>Image Chat</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>Share and discuss images with your bot</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '18px' }}>Instant Alerts</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>Get notified about new risks in your skills</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ fontSize: '18px' }}>Privacy First</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>Your conversations stay yours</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📱</div>
              <h3 style={{ fontSize: '18px' }}>Native Mobile</h3>
              <p className="mt-2 text-muted" style={{ fontSize: '14px' }}>Built for iOS and Android</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Chat Section */}
      <section className="section section-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2>Talk to Your Bot Like a Friend</h2>
              <p className="mt-6 text-muted">
                Choose from 20+ character voices — from professional to playful. ClawPhone makes your AI assistant feel personal.
              </p>
              <div className="mt-8" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span className="badge badge-green">🎭 20+ Voices</span>
                <span className="badge badge-green">🎧 Crystal Clear Audio</span>
                <span className="badge badge-green">⚡ Low Latency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2>Skills Should Be Safe</h2>
          <p className="mt-4" style={{ color: '#9CA3AF' }}>
            ClawPhone scans every skill for security risks before you install. See exactly what you&apos;re adding to your bot.
          </p>
          
          <div className="grid-3 mt-12">
            <div style={{ padding: '24px' }}>
              <div className="safety-score" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                <span className="safety-icon safety-icon-green">✓</span>
                <span style={{ fontWeight: '600' }}>Safe</span>
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '14px' }}>No security risks detected. Install with confidence.</p>
            </div>
            <div style={{ padding: '24px' }}>
              <div className="safety-score" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                <span className="safety-icon safety-icon-amber">!</span>
                <span style={{ fontWeight: '600' }}>Caution</span>
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Minor concerns found. Review before installing.</p>
            </div>
            <div style={{ padding: '24px' }}>
              <div className="safety-score" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                <span className="safety-icon safety-icon-red">✕</span>
                <span style={{ fontWeight: '600' }}>Risk</span>
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Security issues found. We recommend avoiding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section section-off-white">
        <div className="container text-center">
          <h2>Simple Pricing</h2>
          <p className="mt-4 text-muted">Start free. Upgrade when you&apos;re ready.</p>
          
          <div className="grid-3 mt-12">
            {/* Free Tier */}
            <div className="card" style={{ padding: '32px' }}>
              <h3>Free</h3>
              <div className="mt-4">
                <span style={{ fontSize: '48px', fontWeight: '700', color: '#111827' }}>£0</span>
                <span className="text-muted">/month</span>
              </div>
              <ul style={{ marginTop: '24px', textAlign: 'left', listStyle: 'none' }}>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Web skill scanning
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> 2 character voices
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> 10 messages/day
                </li>
              </ul>
              <a href="#" className="btn btn-secondary mt-8" style={{ width: '100%' }}>Get Started</a>
            </div>

            {/* Pro Tier */}
            <div className="card pricing-featured" style={{ padding: '32px' }}>
              <span className="pricing-badge">Most Popular</span>
              <h3>Pro</h3>
              <div className="mt-4">
                <span style={{ fontSize: '48px', fontWeight: '700', color: '#111827' }}>£4.99</span>
                <span className="text-muted">/month</span>
              </div>
              <ul style={{ marginTop: '24px', textAlign: 'left', listStyle: 'none' }}>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Full mobile app
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> 20+ character voices
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Unlimited messages
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Auto skill scanning
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Priority alerts
                </li>
              </ul>
              <a href="#" className="btn btn-primary mt-8" style={{ width: '100%' }}>Get Pro</a>
            </div>

            {/* Team Tier */}
            <div className="card" style={{ padding: '32px' }}>
              <h3>Team</h3>
              <div className="mt-4">
                <span style={{ fontSize: '48px', fontWeight: '700', color: '#111827' }}>£19</span>
                <span className="text-muted">/month</span>
              </div>
              <ul style={{ marginTop: '24px', textAlign: 'left', listStyle: 'none' }}>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Everything in Pro
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Up to 5 team members
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Shared skill library
                </li>
                <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> Admin dashboard
                </li>
              </ul>
              <a href="#" className="btn btn-secondary mt-8" style={{ width: '100%' }}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center">Frequently Asked Questions</h2>
          
          <div className="mt-12">
            <details className="faq-item">
              <summary>What is ClawPhone?</summary>
              <div className="faq-answer">
                ClawPhone is a mobile application for iOS and Android designed for the OpenClaw AI ecosystem. It enables users to engage in voice, text, and image chat with OpenClaw bots using over 20 distinct character voices. Uniquely, ClawPhone includes an integrated security engine that automatically scans every OpenClaw skill for vulnerabilities and assigns a safety score prior to installation, ensuring user privacy and data security.
              </div>
            </details>

            <details className="faq-item">
              <summary>Do I need a new AI model to use ClawPhone?</summary>
              <div className="faq-answer">
                No. ClawPhone connects to your existing OpenClaw bot. You keep your bot — ClawPhone just makes it easier (and safer) to use.
              </div>
            </details>

            <details className="faq-item">
              <summary>What are &apos;skills&apos; in OpenClaw?</summary>
              <div className="faq-answer">
                Skills are add-ons that expand what your bot can do — like connectors, tools, or behaviours you install from ClawdHub. They can be useful… and sometimes risky.
              </div>
            </details>

            <details className="faq-item">
              <summary>What does ClawPhone scan for?</summary>
              <div className="faq-answer">
                ClawPhone checks skills for security risk signals like hidden API keys, data leaks, and suspicious network calls — plus other patterns that often indicate malicious or unsafe behaviour.
              </div>
            </details>

            <details className="faq-item">
              <summary>How do the safety scores work?</summary>
              <div className="faq-answer">
                You&apos;ll see a simple green/amber/red score before install, backed by a severity rating. You can also view the reason behind the score so you can make a quick call.
              </div>
            </details>

            <details className="faq-item">
              <summary>Is ClawPhone a standalone security scanner?</summary>
              <div className="faq-answer">
                No — ClawPhone is an app-first way to talk to your bot. The scanning is built in so you can browse and install skills with confidence while you use the app.
              </div>
            </details>

            <details className="faq-item">
              <summary>What about privacy — do you read my chats?</summary>
              <div className="faq-answer">
                ClawPhone is designed to let you talk to your OpenClaw bot while keeping the experience safe. Your chat history and settings stay with your ClawPhone experience so you can pick up where you left off.
              </div>
            </details>

            <details className="faq-item">
              <summary>What devices does ClawPhone support?</summary>
              <div className="faq-answer">
                ClawPhone is built for mobile: iOS and Android. Pro unlocks the mobile app experience, including automatic scanning and alerts.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2>Make OpenClaw feel safe again.</h2>
          <p className="mt-6" style={{ color: '#9CA3AF', maxWidth: '600px', margin: '24px auto 0' }}>
            Talk to your bot with voice, text, and images — and install skills with a safety score you can trust.
          </p>
          <a href="#pricing" className="btn btn-primary mt-8">Get ClawPhone</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
