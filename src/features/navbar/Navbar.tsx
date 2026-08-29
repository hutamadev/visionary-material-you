import { useState, useEffect, useRef } from 'react'
import {
  Sun,
  Moon,
  Monitor,
  Menu as MenuIcon,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { scrollToTarget } from '@/hooks/useSmoothScroll'
import { type Theme } from '@/hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggleTheme: (theme: Theme) => void
  isDark: boolean
}

export function Navbar({ theme, onToggleTheme, isDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: [1] }
    )

    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    scrollToTarget(id)
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
    <header className="fixed top-0 right-0 left-0 z-50 px-4 py-4 transition-all duration-300 sm:px-8">
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 h-4"
      />
      <nav
        aria-label="Main Navigation"
        className={`m3-glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 sm:px-7 ${
          isScrolled
            ? isDark
              ? 'border border-[#49454f]/60 bg-[#1e1a24]/80 shadow-xl shadow-black/30 backdrop-blur-xl'
              : 'border border-[#cac4d0]/60 bg-[#fdf8fd]/85 shadow-lg shadow-black/5 backdrop-blur-xl'
            : isDark
              ? 'border border-[#49454f]/30 bg-[#1e1a24]/50 backdrop-blur-md'
              : 'border border-[#cac4d0]/30 bg-[#fdf8fd]/60 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          aria-label="Vibecoding - Back to top"
          className="group flex cursor-pointer items-center gap-2.5 text-left"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-(--md-sys-color-primary) text-sm font-bold text-(--md-sys-color-on-primary) shadow-md transition-transform group-hover:scale-105"
            aria-hidden="true"
          >
            <Sparkles className="h-5 w-5 text-(--md-sys-color-on-primary)" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-base font-bold tracking-tight text-(--md-sys-color-on-surface)">
              Vibecoding
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-(--md-sys-color-primary)" />
            </div>
            <span className="hidden text-[10px] font-semibold tracking-wider text-(--md-sys-color-on-surface-variant) uppercase sm:block">
              Material You 3
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 text-sm font-medium text-(--md-sys-color-on-surface) lg:flex">
          {navLinks.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 hover:bg-(--md-sys-color-surface-container-high) hover:text-(--md-sys-color-primary)"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="relative flex items-center gap-2.5">
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) p-2.5 text-(--md-sys-color-primary) shadow-sm transition-all duration-200 hover:scale-105 hover:bg-(--md-sys-color-surface-container-high) active:scale-95"
              aria-label="Change theme"
            >
              {theme === 'dark' ? (
                <Moon className="h-4 w-4" />
              ) : theme === 'light' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Monitor className="h-4 w-4" />
              )}
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>

            {showThemeMenu && (
              <div className="absolute top-full right-0 z-50 mt-3 w-32 overflow-hidden rounded-lg border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) py-1 shadow-lg">
                {(['light', 'dark', 'system'] as Theme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      onToggleTheme(t)
                      setShowThemeMenu(false)
                    }}
                    className={`w-full px-4 py-2 text-left text-xs font-medium capitalize transition-colors hover:bg-(--md-sys-color-surface-container-high) ${theme === t ? 'text-(--md-sys-color-primary)' : 'text-(--md-sys-color-on-surface)'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            size="sm"
            variant="default"
            onClick={() => scrollTo('contact')}
            className="hidden gap-1.5 shadow-sm sm:inline-flex"
          >
            <span>Let's Talk</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer rounded-full p-2 text-(--md-sys-color-on-surface) hover:bg-(--md-sys-color-surface-container-high) lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className={`m3-glass-nav mx-auto mt-2 max-w-6xl rounded-3xl border p-6 shadow-2xl transition-all lg:hidden ${
            isDark
              ? 'border-[#49454f]/80 bg-[#1e1a24]/95'
              : 'border-[#cac4d0]/80 bg-[#fdf8fd]/95'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="rounded-2xl px-4 py-2.5 text-left text-sm font-semibold text-(--md-sys-color-on-surface) hover:bg-(--md-sys-color-surface-container-high)"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-(--md-sys-color-outline-variant) pt-3">
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
