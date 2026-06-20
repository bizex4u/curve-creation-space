/**
 * Lightweight analytics wrapper — fires Plausible and/or GA4 if present.
 * Never throws; analytics should never break the user experience.
 */
export function track(event: string, props?: Record<string, string | number | boolean>) {
  try {
    if (typeof window === "undefined") return;
    // Plausible
    if ((window as any).plausible) {
      (window as any).plausible(event, { props });
    }
    // GA4
    if ((window as any).gtag) {
      (window as any).gtag("event", event, props);
    }
    if (import.meta.env.DEV) {
      console.debug(`[analytics] ${event}`, props);
    }
  } catch {
    // Swallow silently
  }
}

/** Track a CTA button click */
export function trackCta(label: string, destination?: string) {
  track("cta_click", { label, ...(destination ? { destination } : {}) });
}

/** Track a WhatsApp click */
export function trackWhatsApp(source?: string) {
  track("whatsapp_click", { ...(source ? { source } : {}) });
}

/** Track a phone number click */
export function trackPhone(source?: string) {
  track("phone_click", { ...(source ? { source } : {}) });
}

/** Track an email link click */
export function trackEmail(source?: string) {
  track("email_click", { ...(source ? { source } : {}) });
}

/** Track a lead magnet download click */
export function trackDownload(assetName: string) {
  track("download_click", { asset: assetName });
}
