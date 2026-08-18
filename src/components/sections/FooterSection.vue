<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const EMAIL = 'Hexaknow@gmail.com'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const contacts = [
  {
    name: 'Saad Ahmed',
    phone: '+91 9821733034',
    href: 'https://wa.me/919821733034',
  },
  {
    name: 'Saffan Ansari',
    phone: '+91 9028414673',
    href: 'https://wa.me/919028414673',
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/hexaknow_digital',
    platform: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/hexaknows/',
    platform: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DS8DJiuZE/?mibextid=wwXIfr',
    platform: 'facebook',
  },
  {
    label: 'X',
    href: 'https://x.com/hexaknow?s=11',
    platform: 'x',
  },
]

const ctaReveal = useScrollReveal()

const emailCopied = ref(false)
let copyResetTimer: ReturnType<typeof setTimeout> | null = null

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL)
    emailCopied.value = true
    if (copyResetTimer) clearTimeout(copyResetTimer)
    copyResetTimer = setTimeout(() => {
      emailCopied.value = false
    }, 1500)
  } catch {
    emailCopied.value = false
  }
}

onUnmounted(() => {
  if (copyResetTimer) clearTimeout(copyResetTimer)
})
</script>

<template>
  <footer id="contact" class="w-full">
    <!-- Closing CTA -->
    <div class="section-padding w-full bg-[var(--accent)]">
      <div
        :ref="ctaReveal.target"
        class="reveal section-container text-center"
        :class="{ 'is-visible': ctaReveal.isVisible }"
      >
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build, grow, and automate?
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us what you're working on — we'll help you figure out the right next step.
        </p>
        <a
          href="mailto:Hexaknow@gmail.com"
          class="btn focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--text-h)] hover:bg-white/90"
        >
          Get in touch
        </a>
      </div>
    </div>

    <!-- Footer links -->
    <div class="w-full bg-[var(--text-h)] py-12 sm:py-14">
      <div class="section-container">
        <div class="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <!-- Wordmark -->
          <a
            href="#hero"
            class="interactive focus-ring text-lg font-bold tracking-tight text-white hover:text-[var(--accent)]"
          >
            Hexaknow
          </a>

          <!-- Nav -->
          <nav aria-label="Footer navigation">
            <ul class="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <li v-for="link in navLinks" :key="link.href">
                <a
                  :href="link.href"
                  class="interactive focus-ring text-sm font-medium text-white/70 hover:text-[var(--accent)]"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact + social -->
        <div class="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10 lg:flex-row lg:items-start lg:justify-between">
          <div class="text-center lg:text-left">
            <p class="text-sm font-semibold uppercase tracking-wide text-white/90">
              Get in touch
            </p>

            <div class="mt-4 inline-flex items-center justify-center gap-2 lg:justify-start">
              <a
                href="mailto:Hexaknow@gmail.com"
                class="interactive focus-ring inline-flex items-center gap-2 text-sm text-white/80 hover:text-[var(--accent)]"
              >
                <svg
                  class="h-4 w-4 shrink-0 text-[var(--accent)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
                {{ EMAIL }}
              </a>

              <button
                type="button"
                class="interactive focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-[var(--accent)]"
                aria-label="Copy email address"
                @click="copyEmail"
              >
                <svg
                  v-if="!emailCopied"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="8" y="8" width="12" height="14" rx="1.5" />
                  <path d="M16 6H6a2 2 0 0 0-2 2v12" />
                </svg>
                <svg
                  v-else
                  class="h-4 w-4 text-[var(--accent)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </button>

              <span
                v-if="emailCopied"
                class="text-xs font-medium text-[var(--accent)]"
                role="status"
              >
                Copied!
              </span>
            </div>

            <ul class="mt-5 space-y-3">
              <li v-for="contact in contacts" :key="contact.name">
                <a
                  :href="contact.href"
                  class="interactive focus-ring inline-flex flex-col items-center gap-1 text-sm sm:flex-row sm:gap-3 lg:items-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="inline-flex items-center gap-2 text-white/80 hover:text-[var(--accent)]">
                    <svg
                      class="h-4 w-4 shrink-0 text-[var(--accent)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    <span class="font-medium text-white">{{ contact.name }}</span>
                  </span>
                  <span class="text-white/60">{{ contact.phone }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Social -->
          <ul class="flex items-center justify-center gap-3 lg:justify-end">
            <li v-for="social in socialLinks" :key="social.label">
              <a
                :href="social.href"
                :aria-label="social.label"
                class="interactive focus-ring flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-[var(--accent)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <!-- Instagram -->
                <svg
                  v-if="social.platform === 'instagram'"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>

                <!-- LinkedIn -->
                <svg
                  v-else-if="social.platform === 'linkedin'"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.537H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
                </svg>

                <!-- Facebook -->
                <svg
                  v-else-if="social.platform === 'facebook'"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.617 4.533-4.617 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>

                <!-- X -->
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

        <p class="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 Hexaknow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
