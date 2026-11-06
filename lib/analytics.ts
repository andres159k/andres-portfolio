type Payload = Record<string, unknown>

declare global {
  interface Window {
    dataLayer?: Payload[]
  }
}

/**
 * Lightweight analytics bridge. Pushes a structured event to the GTM dataLayer
 * when present. Safe to call on the server (no-op).
 */
export function track(event: string, payload: Payload = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...payload })
}
