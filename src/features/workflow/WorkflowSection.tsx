import { CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { workflowStepsData } from '@/features/workflow/workflow.data'

export function WorkflowSection() {
  return (
    <section id="workflow" aria-label="Execution Framework" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <Badge variant="mint">
          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Execution Framework</span>
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-surface)]">
          How We Bring Ideas to Life
        </h2>
        <p className="text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl">
          A disciplined, sprint-based approach engineered for predictability, transparency, and rapid delivery.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflowStepsData.map((step) => {
          const Icon = step.icon
          return (
            <Card
              key={step.number}
              as="article"
              aria-label={`Phase ${step.number}: ${step.title}`}
              className="relative p-6 sm:p-7 flex flex-col justify-between border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Step Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tighter text-[var(--md-sys-color-primary)] opacity-80" aria-hidden="true">
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-full ${step.tonal} flex items-center justify-center`} aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[var(--md-sys-color-on-surface)]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Dot */}
              <div className="pt-6 mt-4 border-t border-[var(--md-sys-color-outline-variant)]/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--md-sys-color-primary)]" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-wider">
                  Phase {step.number}
                </span>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
