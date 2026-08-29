import { CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { workflowStepsData } from '@/features/workflow/workflow.data'

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      aria-label="Execution Framework"
      className="scroll-mt-28 py-12"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center space-y-3 text-center">
        <Badge variant="mint">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Execution Framework</span>
        </Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-5xl">
          How We Bring Ideas to Life
        </h2>
        <p className="max-w-2xl text-base text-(--md-sys-color-on-surface-variant) sm:text-lg">
          A disciplined, sprint-based approach engineered for predictability,
          transparency, and rapid delivery.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {workflowStepsData.map((step) => {
          const Icon = step.icon
          return (
            <Card
              key={step.number}
              as="article"
              aria-label={`Phase ${step.number}: ${step.title}`}
              className="relative flex flex-col justify-between border-(--md-sys-color-outline-variant) p-6 transition-all duration-300 hover:border-(--md-sys-color-primary) sm:p-7"
            >
              <div className="space-y-4">
                {/* Step Indicator */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-3xl font-black tracking-tighter text-(--md-sys-color-primary) opacity-80"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div
                    className={`h-10 w-10 rounded-full ${step.tonal} flex items-center justify-center`}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-(--md-sys-color-on-surface)">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed font-normal text-(--md-sys-color-on-surface-variant) sm:text-sm">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Dot */}
              <div className="mt-4 flex items-center gap-2 border-t border-(--md-sys-color-outline-variant)/60 pt-6">
                <span
                  className="h-2 w-2 rounded-full bg-(--md-sys-color-primary)"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-semibold tracking-wider text-(--md-sys-color-on-surface-variant) uppercase">
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
