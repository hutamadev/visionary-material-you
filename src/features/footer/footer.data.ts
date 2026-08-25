import type { FooterLinksStructure } from '@/types'

export const footerLinksData: FooterLinksStructure = {
  solutions: [
    { label: 'Full-Stack Web', href: '#services' },
    { label: 'Material You 3 Design', href: '#services' },
    { label: '3D WebGL Graphics', href: '#services' },
    { label: 'AI Autonomous Agents', href: '#services' },
    { label: 'Cloud Architecture', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Execution Workflow', href: '#workflow' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Core Team', href: '#team' },
    { label: 'Careers (We’re Hiring!)', href: '#contact' },
  ],
  resources: [
    { label: 'Material 3 Guidelines', href: 'https://m3.material.io' },
    { label: 'React 19 Documentation', href: 'https://react.dev' },
    { label: 'Three.js Documentation', href: 'https://threejs.org' },
    { label: 'Engineering Blog', href: '#' },
    { label: 'System Status', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security & Compliance', href: '#' },
    { label: 'Cookie Preferences', href: '#' },
  ],
} as const
