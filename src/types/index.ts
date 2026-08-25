export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
  badge: string
  tonalClass: string
}

export interface WorkflowStep {
  step: string
  title: string
  description: string
  tag: string
}

export interface ProjectItem {
  id: string
  title: string
  client: string
  category: string
  description: string
  tags: string[]
  metric: string
  metricLabel: string
  tonalClass: string
}

export interface TestimonialItem {
  id: string
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  badgeColor: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}
