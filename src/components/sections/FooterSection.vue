<script setup lang="ts">
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
]
</script>

<template>
  <footer id="contact">
    <!-- Closing CTA -->
    <div class="bg-[var(--accent)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-6xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build, grow, and automate?
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us what you're working on — we'll help you figure out the right next step.
        </p>
        <a
          href="mailto:hello@agency.com"
          class="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get in touch
        </a>
      </div>
    </div>

    <!-- Footer links -->
    <div class="bg-[var(--text-h)] px-5 py-10 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <!-- Wordmark -->
          <a
            href="#"
            class="text-lg font-bold tracking-tight text-white transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            AGENCY
          </a>

          <!-- Nav -->
          <nav aria-label="Footer navigation">
            <ul class="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <li v-for="link in navLinks" :key="link.href">
                <a
                  :href="link.href"
                  class="text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Social -->
          <ul class="flex items-center justify-center gap-3">
            <li v-for="social in socialLinks" :key="social.label">
              <a
                :href="social.href"
                :aria-label="social.label"
                class="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <!-- LinkedIn -->
                <svg
                  v-if="social.label === 'LinkedIn'"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.537H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
                </svg>

                <!-- Twitter / X -->
                <svg
                  v-else
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <p class="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 AGENCY. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
