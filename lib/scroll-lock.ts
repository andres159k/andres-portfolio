type ScrollController = {
  stop: () => void
  start: () => void
  scrollToTop: () => void
}

let controller: ScrollController | null = null
let locks = 0

/**
 * Registers the active smooth-scroll controller (Lenis) so overlays can pause it.
 */
export function registerScrollController(next: ScrollController | null) {
  controller = next
}

/**
 * Locks page scrolling (ref-counted) and pauses smooth scrolling.
 * Safe to call from multiple overlays.
 */
export function lockScroll() {
  locks += 1
  if (locks > 1) return
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
  controller?.stop()
}

export function unlockScroll() {
  if (locks === 0) return
  locks -= 1
  if (locks > 0) return
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
  controller?.start()
}

/**
 * Instantly returns to the top of the page, keeping the smooth-scroll
 * controller in sync so it doesn't snap back to the previous position.
 */
export function scrollToTop() {
  if (typeof window === 'undefined') return
  if (controller) {
    controller.scrollToTop()
  } else {
    window.scrollTo(0, 0)
  }
}
