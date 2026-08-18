<script setup lang="ts">
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden"
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

    <div class="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text-h)] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span class="font-extrabold">Build.</span>
            <span class="font-medium text-[var(--text)]"> Grow.</span>
            <span class="font-bold text-[var(--accent)]"> Automate.</span>
          </h1>

          <p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-lg lg:mx-0">
            We help businesses ship software, harness AI and automation,
            scale digital marketing, and build brands that stand out —
            end to end, with clarity and craft.
          </p>

          <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              class="inline-flex w-full items-center justify-center rounded-full bg-[var(--text-h)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:w-auto"
            >
              Start a project
            </a>
            <a
              href="#services"
              class="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white/60 px-7 py-3.5 text-sm font-medium text-[var(--text-h)] backdrop-blur-sm transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:w-auto"
            >
              See our services
            </a>
          </div>
        </div>

        <!-- Desktop visual -->
        <div
          class="relative mx-auto hidden aspect-square w-full max-w-md lg:block lg:max-w-none"
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
          <div class="absolute left-1/4 top-1/4 h-16 w-16 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-bg)]" />
          <div class="absolute right-1/4 top-1/3 h-24 w-24 rounded-full border border-[var(--border)] bg-white/80" />
          <div class="absolute bottom-1/4 left-1/3 h-20 w-20 rotate-45 rounded-lg bg-[var(--text-h)] opacity-[0.08]" />
          <div class="absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full bg-[var(--accent)]" />
          <div class="absolute right-1/3 top-1/2 h-2 w-24 rounded-full bg-[var(--accent)] opacity-30" />
        </div>
      </div>
    </div>
  </section>
</template>
