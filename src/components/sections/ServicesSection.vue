<script setup lang="ts">
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
</script>

<template>
  <section
    id="services"
    class="border-t border-[var(--border)] bg-white"
  >
    <div class="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <header class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
          What we do
        </h2>
        <p class="mt-4 text-base leading-relaxed text-[var(--text)] sm:text-lg">
          Four disciplines, one team — everything you need to build, grow, and automate.
        </p>
      </header>

      <ul class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <li v-for="service in services" :key="service.title">
          <article
            class="group h-full rounded-2xl border border-[var(--border)] bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:shadow-sm"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] text-[var(--accent)] transition-colors duration-200 group-hover:border-[var(--accent-border)]"
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
