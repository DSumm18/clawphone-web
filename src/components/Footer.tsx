export default function Footer() {
  return (
    <footer style={{ 
      background: '#111827', 
      color: '#9CA3AF', 
      padding: '48px 16px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF' }}>🦞 ClawPhone</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <a href="#how-it-works" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }}>How It Works</a>
          <a href="#pricing" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }}>Pricing</a>
          <a href="#faq" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }}>FAQ</a>
        </div>
        <p style={{ fontSize: '14px' }}>
          © 2026 Schoolgle Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
