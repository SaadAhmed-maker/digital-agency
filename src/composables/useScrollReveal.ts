import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  /** Delay in ms before marking visible (for staggered children, set on parent only) */
  delay?: number
  once?: boolean
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Observes an element and toggles visibility when it enters the viewport.
 * Respects prefers-reduced-motion by revealing immediately without animation.
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const target: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null
  let delayTimer: ReturnType<typeof setTimeout> | null = null

  const reveal = () => {
    const delay = options.delay ?? 0

    if (delay > 0) {
      delayTimer = setTimeout(() => {
        isVisible.value = true
      }, delay)
    } else {
      isVisible.value = true
    }
  }

  onMounted(() => {
    if (prefersReducedMotion()) {
      isVisible.value = true
      return
    }

    const el = target.value
    if (!el) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal()
            if (options.once ?? true) {
              observer?.unobserve(entry.target)
            }
          }
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
      },
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    if (delayTimer) clearTimeout(delayTimer)
    observer?.disconnect()
  })

  return { target, isVisible }
}
