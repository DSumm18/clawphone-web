'use client'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <span style={{ fontSize: '24px' }}>🦞</span>
          <span style={{ fontWeight: '700', fontSize: '18px', color: '#111827' }}>ClawPhone</span>
        </a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="#how-it-works" className="nav-link hidden md:flex">How It Works</a>
          <a href="#pricing" className="nav-link hidden md:flex">Pricing</a>
          <a href="#faq" className="nav-link hidden md:flex">FAQ</a>
          <a href="#pricing" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '14px' }}>Get ClawPhone</a>
        </div>
      </div>
    </nav>
  )
}
