<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries' },
  { value: '5', label: 'Years Experience' },
]

const textReveal = useScrollReveal()
const visualReveal = useScrollReveal({ delay: 100 })
</script>

<template>
  <section
    id="about"
    class="w-full border-t border-[var(--border)] bg-[var(--accent-bg)]/30"
  >
    <div class="section-padding section-container">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Text -->
        <div
          :ref="textReveal.target"
          class="reveal"
          :class="{ 'is-visible': textReveal.isVisible }"
        >
          <h2 class="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            How we work
          </h2>

          <div class="mt-6 space-y-4 text-base leading-relaxed text-[var(--text)] sm:text-lg">
            <p>
              We combine technology and strategy in one team — not siloed specialists
              handing off work, but collaborators who think in systems and outcomes.
            </p>
            <p>
              From software and AI to marketing and branding, we work across disciplines
              so every decision supports the bigger picture: what you're building, who
              you're reaching, and how you grow.
            </p>
            <p>
              We're outcome-focused. Clear milestones, honest communication, and work
              that ships — not decks that gather dust.
            </p>
          </div>

          <dl class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
            <div v-for="stat in stats" :key="stat.label">
              <dt class="text-2xl font-bold tracking-tight text-[var(--text-h)] sm:text-3xl">
                {{ stat.value }}
              </dt>
              <dd class="mt-1 text-sm text-[var(--text)]">
                {{ stat.label }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Visual placeholder -->
        <div
          :ref="visualReveal.target"
          class="reveal relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-white/50 lg:aspect-square"
          :class="{ 'is-visible': visualReveal.isVisible }"
          aria-hidden="true"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[var(--accent-bg)] via-white to-white"
          />
          <div
            class="absolute inset-0 opacity-30"
            style="
              background-image:
                linear-gradient(var(--border) 1px, transparent 1px),
                linear-gradient(90deg, var(--border) 1px, transparent 1px);
              background-size: 40px 40px;
            "
          />
          <div class="absolute left-8 top-8 h-20 w-20 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-bg)]" />
          <div class="absolute bottom-12 right-10 h-28 w-28 rounded-full border border-[var(--border)] bg-white/90" />
          <div class="absolute bottom-1/3 left-1/3 h-16 w-16 rotate-12 rounded-lg bg-[var(--text-h)] opacity-[0.06]" />
          <div class="absolute right-1/4 top-1/3 h-2 w-32 rounded-full bg-[var(--accent)] opacity-40" />
        </div>
      </div>
    </div>
  </section>
</template>
