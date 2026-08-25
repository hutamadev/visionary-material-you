import { MapPin, Mail, Phone, Sparkles, Globe, Share2, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { footerLinksData } from '@/features/footer/footer.data'

export function FooterSection() {
  return (
    <footer id="contact" aria-label="Footer and Contact Information" className="scroll-mt-28 pt-16 pb-12">
      <div className="rounded-[2.5rem] bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] p-8 sm:p-12 lg:p-16 shadow-lg space-y-16">
        
        {/* Top Section: Contact Cards & Inquiries */}
        <div>
          <div className="flex flex-col items-center text-center space-y-3 mb-10">
            <Badge variant="primary">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Direct Connect</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
              Let's Start a Conversation
            </h2>
            <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] max-w-md">
              Have an ambitious project or questions about our tech stack? Our engineering team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Card */}
            <article
              aria-label="Global Studio Address"
              className="m3-tonal-lavender rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center gap-3 transition-transform duration-200 hover:scale-[1.02] shadow-sm group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Global Studio</h3>
                <p className="text-xs opacity-85 leading-relaxed">
                  123 Innovation Drive, Silicon Valley, CA<br />
                  Remote-First Engineering Hub
                </p>
              </div>
            </article>

            {/* Email Card */}
            <a
              href="mailto:hello@vibecoding.dev"
              aria-label="Send email inquiry to hello@vibecoding.dev"
              className="m3-tonal-mint rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center gap-3 transition-transform duration-200 hover:scale-[1.02] shadow-sm group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Direct Inquiry</h3>
                <p className="text-xs opacity-85 leading-relaxed break-all">
                  hello@vibecoding.dev<br />
                  Average Response: &lt; 2 Hours
                </p>
              </div>
            </a>

            {/* Phone / Hotline Card */}
            <a
              href="tel:+15550192834"
              aria-label="Call direct hotline at +1 (555) 019-2834"
              className="m3-tonal-peach rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center gap-3 transition-transform duration-200 hover:scale-[1.02] shadow-sm group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Direct Hotline</h3>
                <p className="text-xs opacity-85 leading-relaxed">
                  +1 (555) 019-2834<br />
                  Mon – Fri · 24/5 Engineering Support
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Middle Navigation Grid & Info */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pt-10 border-t border-[var(--md-sys-color-outline-variant)]">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center font-bold shadow-md" aria-hidden="true">
                <Sparkles className="w-5 h-5 text-[var(--md-sys-color-on-primary)]" />
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-lg text-[var(--md-sys-color-on-surface)]">
                  Vibecoding
                </span>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[var(--md-sys-color-primary)]">
                  Material You 3 Google
                </p>
              </div>
            </div>

            <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-sm">
              Engineering modern digital experiences with adaptive Google Material You 3 aesthetics and high-velocity reactive technology.
            </p>

            {/* Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--md-sys-color-surface-container-high)] text-[11px] font-semibold text-[var(--md-sys-color-on-surface)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>All Systems 100% Operational</span>
            </div>
          </div>

          {/* Nav Columns */}
          <nav aria-label="Solutions Navigation" className="col-span-1 md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
              {footerLinksData.solutions.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company Navigation" className="col-span-1 md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
              {footerLinksData.company.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources Navigation" className="col-span-1 md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Resources
            </h3>
            <ul className="space-y-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
              {footerLinksData.resources.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--md-sys-color-primary)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal Navigation" className="col-span-1 md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--md-sys-color-primary)]">
              Legal
            </h3>
            <ul className="space-y-2 text-xs text-[var(--md-sys-color-on-surface-variant)]">
              {footerLinksData.legal.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-[var(--md-sys-color-primary)] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--md-sys-color-outline-variant)] text-xs text-[var(--md-sys-color-on-surface-variant)]">
          <div>
            © 2026 Vibecoding Project · Visionary Tech Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-primary)] hover:scale-110 transition-all"
              aria-label="Visit Visionary on GitHub"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-primary)] hover:scale-110 transition-all"
              aria-label="Visit Visionary on LinkedIn"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-primary)] hover:scale-110 transition-all"
              aria-label="Visit Visionary on Twitter"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
