<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'

interface Service {
  title: string
  description: string
  icon: 'software' | 'automation' | 'marketing' | 'branding'
}

const services: Service[] = [
  {
    title: 'Software & Digital Solutions',
    description:
      'Custom web apps, platforms, and digital products built for performance, scale, and long-term maintainability.',
    icon: 'software',
  },
  {
    title: 'AI & Automation',
    description:
      'Intelligent workflows, integrations, and AI tooling that reduce manual work and unlock smarter operations.',
    icon: 'automation',
  },
  {
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns across search, social, and paid channels — designed to grow reach and convert demand.',
    icon: 'marketing',
  },
  {
    title: 'Content & Branding',
    description:
      'Clear positioning, visual identity, and content systems that make your brand memorable and consistent.',
    icon: 'branding',
  },
]

const headerReveal = useScrollReveal()
const cardsReveal = useScrollReveal()
</script>

<template>
  <section
    id="services"
    class="w-full border-t border-[var(--border)] bg-white"
  >
    <div class="section-padding section-container">
      <header
        :ref="headerReveal.target"
        class="reveal mx-auto max-w-2xl text-center"
        :class="{ 'is-visible': headerReveal.isVisible }"
      >
        <h2 class="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
          What we do
        </h2>
        <p class="mt-4 text-base leading-relaxed text-[var(--text)] sm:text-lg">
          Four disciplines, one team — everything you need to build, grow, and automate.
        </p>
      </header>

      <ul
        :ref="cardsReveal.target"
        class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        <li
          v-for="(service, index) in services"
          :key="service.title"
          class="reveal"
          :class="{ 'is-visible': cardsReveal.isVisible }"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <article
            class="service-card group h-full rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--accent-border)]"
          >
            <div
              class="interactive flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] text-[var(--accent)] group-hover:border-[var(--accent-border)]"
              aria-hidden="true"
            >
              <!-- Software & Digital Solutions -->
              <svg
                v-if="service.icon === 'software'"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 9l-3 3 3 3" />
                <path d="M16 9l3 3-3 3" />
                <path d="M13 6l-2 12" />
              </svg>

              <!-- AI & Automation -->
              <svg
                v-else-if="service.icon === 'automation'"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <path d="M17 14v7M14 17.5h6" />
              </svg>

              <!-- Digital Marketing -->
              <svg
                v-else-if="service.icon === 'marketing'"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 18V6" />
                <path d="M4 18h16" />
                <path d="M8 14l3-3 3 2 5-6" />
              </svg>

              <!-- Content & Branding -->
              <svg
                v-else
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h10" />
                <path d="M4 17h14" />
                <circle cx="19" cy="17" r="2" />
              </svg>
            </div>

            <h3 class="mt-5 text-lg font-semibold text-[var(--text-h)]">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-[var(--text)]">
              {{ service.description }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
