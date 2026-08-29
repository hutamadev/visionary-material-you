import { type ReactNode } from 'react'
import { Navbar } from '@/features/navbar/Navbar'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useTheme } from '@/hooks/useTheme'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  useSmoothScroll()
  const { theme, isDark, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] transition-colors duration-400">
      {/* Dynamic Floating Navbar */}
      <Navbar theme={theme} isDark={isDark} onToggleTheme={setTheme} />

      {/* Main Page Content */}
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
