import { useState, useEffect } from 'react'
import { Sun, Moon, Menu as MenuIcon, X, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Workflow', target: 'workflow' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Team', target: 'team' },
    { label: 'Contact', target: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-3 flex items-center justify-between transition-all duration-300 m3-glass-nav ${
          isScrolled
            ? isDark
              ? 'bg-[#1e1a24]/80 border border-[#49454f]/60 shadow-xl shadow-black/30'
              : 'bg-[#fdf8fd]/85 border border-[#cac4d0]/60 shadow-lg shadow-black/5'
            : isDark
            ? 'bg-[#1e1a24]/50 border border-[#49454f]/30'
            : 'bg-[#fdf8fd]/60 border border-[#cac4d0]/30'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          aria-label="Visionary - Back to top"
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform" aria-hidden="true">
            <Sparkles className="w-5 h-5 text-[var(--md-sys-color-on-primary)]" />
          </div>
          <div>
            <div className="font-bold tracking-tight text-[var(--md-sys-color-on-surface)] text-base flex items-center gap-1.5">
              Vibecoding
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--md-sys-color-primary)] animate-pulse" />
            </div>
            <span className="hidden sm:block text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider font-semibold">
              Material You 3
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-[var(--md-sys-color-on-surface)]">
          {navLinks.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-[var(--md-sys-color-surface-container-high)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-full bg-[var(--md-sys-color-surface-container)] hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-primary)] border border-[var(--md-sys-color-outline-variant)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#ffd8e4]" />
            ) : (
              <Moon className="w-4 h-4 text-[#6750a4]" />
            )}
          </button>

          <Button
            size="sm"
            variant="default"
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex gap-1.5 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container-high)] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className={`lg:hidden max-w-6xl mx-auto mt-2 p-6 rounded-3xl m3-glass-nav border shadow-2xl transition-all ${
            isDark
              ? 'bg-[#1e1a24]/95 border-[#49454f]/80'
              : 'bg-[#fdf8fd]/95 border-[#cac4d0]/80'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left px-4 py-2.5 rounded-2xl text-sm font-semibold hover:bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[var(--md-sys-color-outline-variant)]">
              <Button
                variant="default"
                className="w-full justify-center"
                onClick={() => scrollTo('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
