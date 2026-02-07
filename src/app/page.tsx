import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { FeatureCard } from '@/components/FeatureCard'
import { PricingCard } from '@/components/PricingCard'
import { FAQAccordion } from '@/components/FAQAccordion'
import { SafetyBadge } from '@/components/SafetyBadge'
import { Mic, Shield, Zap, Bell } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container-narrow py-20 md:py-32 text-center">
          <h1 className="text-h1-mobile md:text-h1-desktop text-heading max-w-4xl mx-auto mb-6">
            Talk to your OpenClaw bot — safely.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Voice, text, and images with 20+ character voices — plus every OpenClaw skill gets a safety score before you install it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button href="#" size="large">Get ClawPhone</Button>
            <Button href="#security" variant="secondary" size="large">See safety scores</Button>
          </div>
          <p className="text-sm text-gray-400">
            Connect your existing OpenClaw bot. No new model. No hassle.
          </p>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-surface-off border-y border-gray-100">
        <div className="container-wide py-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center md:border-r border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-heading">500+</div>
              <div className="text-sm text-muted mt-1">Skills pre-scanned</div>
            </div>
            <div className="text-center md:border-r border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-heading">Instant</div>
              <div className="text-sm text-muted mt-1">Safety scores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heading">Powered by</div>
              <div className="text-sm text-muted mt-1">Cisco AI Defense</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center mb-12 md:mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: 1, title: 'Connect your bot', desc: 'Link ClawPhone to your existing OpenClaw bot in seconds.' },
              { num: 2, title: 'Chat your way', desc: 'Talk by voice, text, or images — with 20+ character voices you can swap anytime.' },
              { num: 3, title: 'Install skills with confidence', desc: 'Browse skills with a clear safety score before you install — backed by automatic scanning.' },
            ].map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto md:mx-0 mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{step.title}</h3>
                <p className="text-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding-lg bg-surface-off">
        <div className="container-wide">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center mb-12 md:mb-16">
            Everything you need
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Mic}
              title="Voice-first AI chat"
              description="Speak naturally to your OpenClaw bot with 20+ character voices. Switch to text or images whenever you like."
            />
            <FeatureCard
              icon={Shield}
              title="Safety scores for skills"
              description="Every skill shows green/amber/red before install. We scan for data leaks, hidden API keys, and suspicious network calls."
            />
            <FeatureCard
              icon={Zap}
              title="Pre-scanned, instant results"
              description="Skills are scanned before you even see them. You get immediate scores and clear reasons — no waiting."
            />
            <FeatureCard
              icon={Bell}
              title="Stay protected automatically"
              description="Get alerts when a skill's safety status changes. Keep a trusted list so you always know what's safe to use."
            />
          </div>
        </div>
      </section>

      {/* Voice Chat Section */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2-mobile md:text-h2-desktop mb-6">
                Your bot, on your phone — finally.
              </h2>
              <p className="text-lg text-body mb-8">
                ClawPhone turns OpenClaw into a proper mobile experience. Talk by voice with character voices, send messages, share images, and pick up where you left off — your history and settings stay with you.
              </p>
              <Button href="#">Get ClawPhone</Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-surface-dark rounded-[2.5rem] p-3 shadow-xl">
                  <div className="w-full h-full bg-surface-dark-elevated rounded-[2rem] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-4">🦞</div>
                      <div className="text-lg font-semibold">ClawPhone</div>
                      <div className="text-sm text-gray-400 mt-1">Voice chat active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="section-padding-lg bg-surface-dark text-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="space-y-4">
                {[
                  { name: 'weather-skill', status: 'safe' as const },
                  { name: 'data-export', status: 'caution' as const },
                  { name: 'unknown-remote', status: 'danger' as const },
                ].map((skill) => (
                  <div key={skill.name} className="bg-surface-dark-elevated rounded-lg p-4 flex items-center justify-between min-w-[280px]">
                    <span className="text-white font-medium">{skill.name}</span>
                    <SafetyBadge status={skill.status} />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-h2-mobile md:text-h2-desktop mb-6">
                Built-in safety checks for every skill.
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Skills can do powerful things — and that&apos;s exactly why they need checking. Before you install a skill, ClawPhone scans it for common risk signals like hidden API keys, data leaks, and suspicious network calls. You see a simple safety score (green/amber/red) plus the reason behind it — so you can decide fast.
              </p>
              <p className="text-sm text-gray-400">
                Scanning powered by Cisco AI Defense
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-h2-mobile md:text-h2-desktop mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="md:order-2">
              <PricingCard
                tier="Free"
                price="£0"
                description="A generous start for curious explorers. Use the web scanner, try 2 character voices, and get a feel for safer skill browsing before you go mobile."
                features={[
                  'Web scanner',
                  '2 character voices',
                  '10 messages/day',
                ]}
                ctaText="Start Free"
              />
            </div>
            <div className="md:order-1 md:mt-8">
              <PricingCard
                tier="Pro"
                price="£4.99"
                period="/month"
                description="The full ClawPhone experience. Get the mobile app, automatic skill scanning, push alerts, all voices, and unlimited messages."
                features={[
                  'Mobile app',
                  'Automatic scanning',
                  'Push alerts',
                  'All 20+ voices',
                  'Unlimited messages',
                ]}
                highlighted
                ctaText="Get Pro"
              />
            </div>
            <div className="md:order-3 md:mt-8">
              <PricingCard
                tier="Developer"
                price="£19.99"
                period="/month"
                description="Ship trusted skills people install. Everything in Pro plus 1,000 API scans/month, CI/CD integration, and a verified badge."
                features={[
                  'Everything in Pro',
                  '1,000 API scans/month',
                  'CI/CD integration',
                  'Verified badge',
                ]}
                ctaText="Go Developer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding-lg bg-surface-off">
        <div className="container-narrow">
          <h2 className="text-h2-mobile md:text-h2-desktop text-center mb-12">
            Frequently asked questions
          </h2>
          <FAQAccordion
            items={[
              {
                question: 'What is ClawPhone?',
                answer: 'ClawPhone is a mobile application for iOS and Android designed for the OpenClaw AI ecosystem. It enables users to engage in voice, text, and image chat with OpenClaw bots using over 20 distinct character voices. Uniquely, ClawPhone includes an integrated security engine that automatically scans every OpenClaw skill for vulnerabilities and assigns a safety score prior to installation, ensuring user privacy and data security.',
              },
              {
                question: 'How does skill scanning work?',
                answer: 'When you browse skills in ClawPhone, each one has already been scanned by our security engine (powered by Cisco AI Defense). We look for common risk patterns like hidden API keys, data exfiltration attempts, and suspicious network calls. You see a simple green/amber/red score with plain-English explanations.',
              },
              {
                question: 'Do I need a new OpenClaw bot?',
                answer: 'No. ClawPhone connects to your existing OpenClaw bot. You keep your current setup, history, and preferences — ClawPhone just gives you a better mobile interface and built-in security scanning.',
              },
              {
                question: 'What are character voices?',
                answer: 'ClawPhone includes 20+ distinct text-to-speech voices you can use for your bot responses. From professional narrators to fun character voices, you can switch anytime to match your mood or use case.',
              },
              {
                question: 'Is my data safe?',
                answer: 'Yes. ClawPhone connects directly to your OpenClaw bot. We don\'t store your conversations or personal data. Skill scans are anonymized and only metadata is used for aggregate statistics.',
              },
              {
                question: 'What platforms do you support?',
                answer: 'ClawPhone is available for iOS and Android. The free web scanner works on any device with a browser.',
              },
              {
                question: 'Can I use ClawPhone without the Pro plan?',
                answer: 'Yes! The free tier gives you access to the web scanner, 2 character voices, and 10 messages per day. It\'s a great way to try ClawPhone before upgrading.',
              },
              {
                question: 'How do I cancel my subscription?',
                answer: 'You can cancel anytime through your app store (Apple App Store or Google Play). Your access continues until the end of your billing period.',
              },
            ]}
            defaultOpen={[0, 1]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-primary-hover">
        <div className="container-narrow text-center">
          <h2 className="text-h2-mobile md:text-h2-desktop text-white mb-8">
            Make OpenClaw feel safe again.
          </h2>
          <Button href="#" variant="primary-inverse" size="large">
            Get ClawPhone
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
