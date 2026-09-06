import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Moon,
  Monitor,
  Menu as MenuIcon,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { scrollToTarget } from '@/hooks/useSmoothScroll'
import { type Theme } from '@/hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggleTheme: (theme: Theme) => void
  isDark: boolean
}

export function Navbar({ theme, onToggleTheme, isDark: _isDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const sentinelRef = useRef<HTMLDivElement>(null)
  const themeMenuRef = useRef<HTMLDivElement>(null)

  // Click outside to close theme dropdown
  useEffect(() => {
    if (!showThemeMenu) return
    const handleClickOutside = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setShowThemeMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showThemeMenu])

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

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'services',
      'workflow',
      'portfolio',
      'team',
      'contact-cta',
    ]
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(
          id === 'contact-cta' ? 'contact-cta' : id
        )
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id === 'contact-cta' ? 'contact' : id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
            ? 'border border-(--md-sys-color-outline-variant)/60 bg-(--md-sys-color-surface)/85 shadow-xl backdrop-blur-xl'
            : 'border border-(--md-sys-color-outline-variant)/30 bg-(--md-sys-color-surface)/60 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          aria-label="Visionary - Back to top"
          className="group flex cursor-pointer items-center gap-2.5 rounded-full text-left focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-(--md-sys-color-primary) text-sm font-bold text-(--md-sys-color-on-primary) shadow-md transition-transform group-hover:scale-105"
            aria-hidden="true"
          >
            <Sparkles className="h-5 w-5 text-(--md-sys-color-on-primary)" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-base font-bold tracking-tight text-(--md-sys-color-on-surface)">
              Visionary
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-(--md-sys-color-primary)" />
            </div>
            <span className="hidden text-xs font-semibold tracking-wider text-(--md-sys-color-on-surface-variant) uppercase sm:block">
              Material You 3
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 text-sm font-medium text-(--md-sys-color-on-surface) lg:flex">
          {navLinks.map((item) => {
            const isActive = activeSection === item.target
            return (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className={`min-h-11 cursor-pointer rounded-full px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none ${
                  isActive
                    ? 'bg-(--md-sys-color-primary-container) text-(--md-sys-color-on-primary-container) shadow-xs'
                    : 'hover:bg-(--md-sys-color-surface-container-high) hover:text-(--md-sys-color-primary)'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="relative flex items-center gap-2.5">
          <div ref={themeMenuRef} className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) px-3 text-(--md-sys-color-primary) shadow-sm transition-all duration-200 hover:scale-105 hover:bg-(--md-sys-color-surface-container-high) focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none active:scale-95"
              aria-label="Change theme"
              aria-expanded={showThemeMenu}
            >
              <motion.div
                key={theme}
                initial={{ scale: 0.7, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                className="flex items-center justify-center"
              >
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4" />
                ) : theme === 'light' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Monitor className="h-4 w-4" />
                )}
              </motion.div>
              <ChevronDown
                className={`h-3 w-3 opacity-60 transition-transform duration-200 ${
                  showThemeMenu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showThemeMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                className="absolute top-full right-0 z-50 mt-2.5 w-48 overflow-hidden rounded-2xl border border-(--md-sys-color-outline-variant)/60 bg-(--md-sys-color-surface)/95 p-1.5 shadow-2xl backdrop-blur-xl"
              >
                {[
                  { type: 'light' as Theme, label: 'Light Mode', icon: Sun },
                  { type: 'dark' as Theme, label: 'Dark Mode', icon: Moon },
                  { type: 'system' as Theme, label: 'System Theme', icon: Monitor },
                ].map(({ type: t, label, icon: Icon }) => {
                  const isSelected = theme === t
                  return (
                    <button
                      key={t}
                      onClick={() => {
                        onToggleTheme(t)
                        setShowThemeMenu(false)
                      }}
                      className={`flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none ${
                        isSelected
                          ? 'bg-(--md-sys-color-primary-container) text-(--md-sys-color-on-primary-container) shadow-xs'
                          : 'text-(--md-sys-color-on-surface) hover:bg-(--md-sys-color-surface-container-high) hover:text-(--md-sys-color-primary)'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                      {isSelected && (
                        <Check
                          className="h-3.5 w-3.5 shrink-0 text-(--md-sys-color-on-primary-container)"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )
                })}
              </motion.div>
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
            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full p-2.5 text-(--md-sys-color-on-surface) hover:bg-(--md-sys-color-surface-container-high) focus-visible:ring-2 focus-visible:ring-(--md-sys-color-primary) focus-visible:outline-none lg:hidden"
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
          className="m3-glass-nav mx-auto mt-2 max-w-6xl rounded-3xl border border-(--md-sys-color-outline-variant)/80 bg-(--md-sys-color-surface)/95 p-6 shadow-2xl backdrop-blur-xl transition-all lg:hidden"
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
