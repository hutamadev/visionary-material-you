import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Globe,
  Share2,
  MessageCircle,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { scrollToTarget } from '@/hooks/useSmoothScroll'
import { footerLinksData } from '@/features/footer/footer.data'

export function FooterSection() {
  return (
    <footer
      id="contact"
      aria-label="Footer and Contact Information"
      className="scroll-mt-28 pt-16 pb-12"
    >
      <div className="space-y-16 rounded-[2.5rem] border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) p-8 shadow-lg sm:p-12 lg:p-16">
        {/* Top Section: Contact Cards & Inquiries */}
        <div>
          <div className="mb-10 flex flex-col items-center space-y-3 text-center">
            <Badge variant="primary">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Direct Connect</span>
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-4xl">
              Let's Start a Conversation
            </h2>
            <p className="max-w-md text-sm text-(--md-sys-color-on-surface-variant) sm:text-base">
              Have an ambitious project or questions about our tech stack? Our
              engineering team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Location Card */}
            <article
              aria-label="Global Studio Address"
              className="m3-tonal-lavender group flex flex-col items-center gap-3 rounded-3xl p-6 text-center shadow-sm transition-transform duration-200 hover:scale-[1.02] sm:p-7"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/10 transition-transform group-hover:scale-110 dark:bg-white/15"
                aria-hidden="true"
              >
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold">Global Studio</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  123 Innovation Drive, Silicon Valley, CA
                  <br />
                  Remote-First Engineering Hub
                </p>
              </div>
            </article>

            {/* Email Card */}
            <a
              href="mailto:hello@vibecoding.dev"
              aria-label="Send email inquiry to hello@vibecoding.dev"
              className="m3-tonal-mint group flex flex-col items-center gap-3 rounded-3xl p-6 text-center shadow-sm transition-transform duration-200 hover:scale-[1.02] sm:p-7"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/10 transition-transform group-hover:scale-110 dark:bg-white/15"
                aria-hidden="true"
              >
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold">Direct Inquiry</h3>
                <p className="text-xs leading-relaxed break-all opacity-85">
                  hello@vibecoding.dev
                  <br />
                  Average Response: &lt; 2 Hours
                </p>
              </div>
            </a>

            {/* Phone / Hotline Card */}
            <a
              href="tel:+15550192834"
              aria-label="Call direct hotline at +1 (555) 019-2834"
              className="m3-tonal-peach group flex flex-col items-center gap-3 rounded-3xl p-6 text-center shadow-sm transition-transform duration-200 hover:scale-[1.02] sm:p-7"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/10 transition-transform group-hover:scale-110 dark:bg-white/15"
                aria-hidden="true"
              >
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold">Direct Hotline</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  +1 (555) 019-2834
                  <br />
                  Mon – Fri · 24/5 Engineering Support
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Middle Navigation Grid & Info */}
        <div className="grid grid-cols-2 gap-8 border-t border-(--md-sys-color-outline-variant) pt-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4 md:col-span-4">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-(--md-sys-color-primary) font-bold text-(--md-sys-color-on-primary) shadow-md"
                aria-hidden="true"
              >
                <Sparkles className="h-5 w-5 text-(--md-sys-color-on-primary)" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-(--md-sys-color-on-surface)">
                  Vibecoding
                </span>
                <p className="text-[10px] font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
                  Material You 3 Google
                </p>
              </div>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-(--md-sys-color-on-surface-variant)">
              Engineering modern digital experiences with adaptive Google
              Material You 3 aesthetics and high-velocity reactive technology.
            </p>

            {/* Operational Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-(--md-sys-color-surface-container-high) px-3 py-1 text-[11px] font-semibold text-(--md-sys-color-on-surface)">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              <span>All Systems 100% Operational</span>
            </div>
          </div>

          {/* Nav Columns */}
          <nav
            aria-label="Solutions Navigation"
            className="col-span-1 space-y-3 md:col-span-2"
          >
            <h3 className="text-xs font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs text-(--md-sys-color-on-surface-variant)">
              {footerLinksData.solutions.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#') && item.href !== '#') {
                        e.preventDefault()
                        scrollToTarget(item.href)
                      }
                    }}
                    className="transition-colors hover:text-(--md-sys-color-primary)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Company Navigation"
            className="col-span-1 space-y-3 md:col-span-2"
          >
            <h3 className="text-xs font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-(--md-sys-color-on-surface-variant)">
              {footerLinksData.company.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#') && item.href !== '#') {
                        e.preventDefault()
                        scrollToTarget(item.href)
                      }
                    }}
                    className="transition-colors hover:text-(--md-sys-color-primary)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Resources Navigation"
            className="col-span-1 space-y-3 md:col-span-2"
          >
            <h3 className="text-xs font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
              Resources
            </h3>
            <ul className="space-y-2 text-xs text-(--md-sys-color-on-surface-variant)">
              {footerLinksData.resources.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-(--md-sys-color-primary)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Legal Navigation"
            className="col-span-1 space-y-3 md:col-span-2"
          >
            <h3 className="text-xs font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-xs text-(--md-sys-color-on-surface-variant)">
              {footerLinksData.legal.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-(--md-sys-color-primary)"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-(--md-sys-color-outline-variant) pt-8 text-xs text-(--md-sys-color-on-surface-variant) sm:flex-row">
          <div>
            © 2026 Vibecoding Project · Visionary Tech Solutions. All rights
            reserved.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-(--md-sys-color-surface-container-high) p-2 transition-all hover:scale-110 hover:text-(--md-sys-color-primary)"
              aria-label="Visit Visionary on GitHub"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-(--md-sys-color-surface-container-high) p-2 transition-all hover:scale-110 hover:text-(--md-sys-color-primary)"
              aria-label="Visit Visionary on LinkedIn"
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-(--md-sys-color-surface-container-high) p-2 transition-all hover:scale-110 hover:text-(--md-sys-color-primary)"
              aria-label="Visit Visionary on Twitter"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
