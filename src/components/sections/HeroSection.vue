<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const whatsappSaad = 'https://wa.me/919821733034'
const visualReveal = useScrollReveal()

// Entrance animation state — defaults to true (fully visible) so that
// if JS fails to run for any reason, content is still readable.
// The "not yet revealed" state is only applied briefly, and only if
// the browser doesn't prefer reduced motion.
const entranceReady = ref(true)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion) {
    entranceReady.value = true
    return
  }

  // Start hidden, then reveal on next frame so the transition actually runs.
  entranceReady.value = false
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      entranceReady.value = true
    })
  })

  // Safety net: no matter what happens above, guarantee full visibility
  // within 1.2s. This prevents the "stuck at partial opacity" bug seen
  // on mobile — content can never remain unreadable.
  setTimeout(() => {
    entranceReady.value = true
  }, 1200)
})
</script>

<template>
  <section
    id="hero"
    class="relative flex w-full min-h-[calc(100vh-4.5rem)] items-center overflow-hidden"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-[var(--accent-bg)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.35]"
      style="
        background-image:
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px);
        background-size: 64px 64px;
      "
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--text-h)] opacity-[0.04] blur-3xl"
      aria-hidden="true"
    />

    <div class="section-padding section-container relative">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <h1
            class="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text-h)] transition-all duration-700 ease-out sm:text-5xl lg:text-6xl xl:text-7xl"
            :class="entranceReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            style="transition-delay: 0ms"
          >
            <span class="font-extrabold">Build.</span>
            <span class="font-medium text-[var(--text)]"> Grow.</span>
            <span class="font-bold text-[var(--accent)]"> Automate.</span>
          </h1>

          <p
            class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text)] transition-all duration-700 ease-out sm:text-lg lg:mx-0"
            :class="entranceReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            style="transition-delay: 120ms"
          >
            We help businesses ship software, harness AI and automation,
            scale digital marketing, and build brands that stand out —
            end to end, with clarity and craft.
          </p>

          <div
            class="mt-10 flex flex-col items-center gap-4 transition-all duration-700 ease-out sm:flex-row sm:justify-center lg:justify-start"
            :class="entranceReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            style="transition-delay: 240ms"
          >
            <a
              :href="whatsappSaad"
              class="btn focus-ring inline-flex w-full items-center justify-center rounded-full bg-[var(--text-h)] px-7 py-3.5 text-sm font-medium text-white hover:bg-[var(--accent)] sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a project
            </a>
            <a
              href="#services"
              class="btn focus-ring inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white/60 px-7 py-3.5 text-sm font-medium text-[var(--text-h)] backdrop-blur-sm hover:border-[var(--accent-border)] hover:text-[var(--accent)] sm:w-auto"
            >
              See our services
            </a>
          </div>
        </div>

        <!-- Desktop visual -->
        <div
          :ref="visualReveal.target"
          class="reveal relative mx-auto hidden aspect-square w-full max-w-md lg:block lg:max-w-none"
          :class="{ 'is-visible': visualReveal.isVisible }"
          style="--reveal-delay: 180ms"
          aria-hidden="true"
        >
          <div class="absolute inset-0 rounded-3xl border border-[var(--border)] bg-white/40 backdrop-blur-sm" />
          <div
            class="absolute inset-4 rounded-2xl opacity-40"
            style="
              background-image:
                linear-gradient(var(--border) 1px, transparent 1px),
                linear-gradient(90deg, var(--border) 1px, transparent 1px);
              background-size: 32px 32px;
            "
          />
          <div class="hero-shape-float absolute left-1/4 top-1/4 h-16 w-16 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-bg)]" />
          <div class="hero-shape-pulse absolute right-1/4 top-1/3 h-24 w-24 rounded-full border border-[var(--border)] bg-white/80" />
          <div class="hero-shape-diamond absolute bottom-1/4 left-1/3 h-20 w-20 rounded-lg bg-[var(--text-h)] opacity-[0.08]" />
          <div class="hero-shape-float-alt absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full bg-[var(--accent)]" />
          <div class="hero-shape-float absolute right-1/3 top-1/2 h-2 w-24 rounded-full bg-[var(--accent)] opacity-30" style="animation-delay: -2s" />
        </div>
      </div>
    </div>
  </section>
</template>
