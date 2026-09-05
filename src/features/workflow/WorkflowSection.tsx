import { CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
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

      {/* Stepper Pipeline Architecture */}
      <div className="relative">
        {/* Desktop Pipeline Connector Track */}
        <div
          className="pointer-events-none absolute top-16 right-8 left-8 -z-0 hidden h-0.5 bg-gradient-to-r from-(--md-sys-color-primary)/20 via-(--md-sys-color-primary) to-(--md-sys-color-primary)/20 lg:block"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {workflowStepsData.map((step, idx) => {
            const Icon = step.icon
            return (
              <article
                key={step.number}
                aria-label={`Phase ${step.number}: ${step.title}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--md-sys-color-primary) hover:shadow-lg sm:p-7"
              >
                <div className="space-y-4">
                  {/* Step Milestone Node */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${step.tonal} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className="font-mono text-2xl font-black tracking-tighter text-(--md-sys-color-primary)"
                      aria-hidden="true"
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-(--md-sys-color-on-surface)">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-relaxed font-normal text-(--md-sys-color-on-surface-variant) sm:text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Progress Milestone Badge */}
                <div className="mt-6 flex items-center justify-between border-t border-(--md-sys-color-outline-variant)/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-(--md-sys-color-surface-container-high) px-3 py-1 text-xs font-semibold text-(--md-sys-color-on-surface-variant)">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-(--md-sys-color-primary)"
                      aria-hidden="true"
                    />
                    Phase {step.number}
                  </span>
                  <span className="text-xs font-medium text-(--md-sys-color-outline)">
                    Sprint {(idx + 1) * 2}w
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
