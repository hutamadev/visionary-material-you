import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: LucideIcon
  readonly badge: string
  readonly tonalClass: string
  readonly tags: readonly string[]
}

export interface WorkflowStep {
  readonly number: string
  readonly title: string
  readonly description: string
  readonly icon: LucideIcon
  readonly tonal: string
}

export interface ProjectItem {
  readonly id: string
  readonly title: string
  readonly client: string
  readonly category: string
  readonly description: string
  readonly tags: readonly string[]
  readonly metric: string
  readonly metricLabel: string
  readonly tonalClass: string
}

export interface TestimonialItem {
  readonly id: string
  readonly quote: string
  readonly name: string
  readonly role: string
  readonly company: string
  readonly avatar: string
  readonly rating: number
}

export interface TeamMemberSocial {
  readonly github?: string
  readonly linkedin?: string
  readonly twitter?: string
}

export interface TeamMember {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly bio: string
  readonly avatar: string
  readonly badgeColor: string
  readonly social: TeamMemberSocial
}

export interface AboutValue {
  readonly icon: LucideIcon
  readonly title: string
  readonly description: string
  readonly tonalClass: string
  readonly badge: string
}

export interface FooterLinkItem {
  readonly label: string
  readonly href: string
}

export interface FooterLinksStructure {
  readonly solutions: readonly FooterLinkItem[]
  readonly company: readonly FooterLinkItem[]
  readonly resources: readonly FooterLinkItem[]
  readonly legal: readonly FooterLinkItem[]
}
