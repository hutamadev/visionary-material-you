import { Sparkles, Compass, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { scrollToTarget } from '@/hooks/useSmoothScroll'
import {
  aboutValuesData,
  aboutMilestonesData,
} from '@/features/about/about.data'

export function AboutSection() {
  const handleScrollToServices = (): void => {
    scrollToTarget('services')
  }

  return (
    <section
      id="about"
      aria-label="About Visionary"
      className="scroll-mt-28 py-12"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center space-y-3 text-center">
        <Badge variant="primary">
          <Compass className="h-3.5 w-3.5" aria-hidden="true" />
          <span>About Visionary</span>
        </Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-(--md-sys-color-on-surface) sm:text-5xl">
          Pioneering the Next Wave of Digital Craft
        </h2>
        <p className="max-w-2xl text-base text-(--md-sys-color-on-surface-variant) sm:text-lg">
          We combine Google's adaptive design philosophy with modern software
          engineering to create experiences that empower businesses worldwide.
        </p>
      </div>

      {/* Main Grid: Story + Pillars */}
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left Column: Narrative */}
        <div className="space-y-6 lg:col-span-5">
          <Card className="space-y-6 border-(--md-sys-color-outline-variant) p-8">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider text-(--md-sys-color-primary) uppercase">
                Our Genesis
              </span>
              <h3 className="text-2xl font-bold text-(--md-sys-color-on-surface) sm:text-3xl">
                Built for builders, designed for humans.
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-(--md-sys-color-on-surface-variant) sm:text-base">
              Founded in 2012, Visionary Tech Solutions emerged with a singular
              mandate: to bridge the gap between high-level architectural
              complexity and elegant, human-first visual design.
            </p>

            <p className="text-sm leading-relaxed text-(--md-sys-color-on-surface-variant) sm:text-base">
              We leverage Material You 3 to bring harmonic tonal palettes,
              responsive layouts, and seamless micro-animations into production
              software at scale.
            </p>

            <div className="space-y-3 pt-2">
              {aboutMilestonesData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs font-medium text-(--md-sys-color-on-surface) sm:text-sm"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-(--md-sys-color-primary)"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="default"
                onClick={handleScrollToServices}
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>Explore Capabilities</span>
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: 3 Pillar Cards */}
        <div className="space-y-5 lg:col-span-7">
          {aboutValuesData.map((v, i) => {
            const Icon = v.icon
            return (
              <article
                key={i}
                aria-label={v.title}
                className={`${v.tonalClass} rounded-3xl p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md sm:p-8`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/10 shadow-inner dark:bg-white/15"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                        {v.title}
                      </h3>
                      <span className="rounded-full bg-black/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase dark:bg-white/15">
                        {v.badge}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-normal opacity-90 sm:text-sm">
                      {v.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
