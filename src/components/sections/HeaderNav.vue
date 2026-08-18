<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 0
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-200 ease-out"
    :class="
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
        : 'bg-white/80 backdrop-blur-md border-b border-transparent'
    "
  >
    <div class="section-container flex items-center justify-between gap-4 py-4">
      <!-- Wordmark -->
      <a
        href="#hero"
        class="interactive focus-ring text-lg font-bold tracking-tight text-[var(--text-h)] hover:text-[var(--accent)]"
      >
        Hexaknow
      </a>

      <!-- Desktop nav -->
      <nav
        class="hidden lg:block"
        aria-label="Main navigation"
      >
        <ul class="flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="interactive focus-ring text-sm font-medium text-[var(--text)] hover:text-[var(--accent)]"
            >
              <span class="nav-link-underline relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] hover:after:w-full">
                {{ link.label }}
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Desktop CTA + mobile toggle -->
      <div class="flex items-center gap-3">
        <a
          href="https://wa.me/919821733034"
          class="btn focus-ring hidden items-center justify-center rounded-full bg-[var(--text-h)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent)] lg:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>

        <button
          type="button"
          class="interactive focus-ring flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-h)] hover:bg-[var(--accent-bg)] lg:hidden"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 top-[4.5rem] z-40 bg-white/98 backdrop-blur-lg lg:hidden"
      >
        <nav
          class="flex flex-col px-5 py-6 sm:px-6"
          aria-label="Mobile navigation"
        >
          <ul class="flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="interactive focus-ring block rounded-lg px-3 py-3 text-base font-medium text-[var(--text-h)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
                @click="closeMenu"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>

          <a
            href="https://wa.me/919821733034"
            class="btn focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-[var(--text-h)] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
