import { type ReactNode } from 'react'
import { Navbar } from '@/features/navbar/Navbar'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

interface MainLayoutProps {
  children: ReactNode
  isDark: boolean
  onToggleTheme: () => void
}

export function MainLayout({ children, isDark, onToggleTheme }: MainLayoutProps) {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] transition-colors duration-400">
      {/* Dynamic Floating Navbar */}
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />

      {/* Main Page Content */}
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
