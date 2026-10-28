export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type Utm = Record<(typeof UTM_KEYS)[number], string>;

const STORAGE_KEY = "utm-params";
const EMPTY: Utm = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
};

// Persist UTMs from the current URL so they survive navigation to a form page.
// A new URL carrying any utm_* param replaces the stored set (last touch wins).
export function captureUtm() {
  try {
    const p = new URLSearchParams(window.location.search);
    if (!UTM_KEYS.some((k) => p.get(k))) return;
    const utm = { ...EMPTY };
    for (const k of UTM_KEYS) utm[k] = (p.get(k) ?? "").slice(0, 200);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {}
}

// Server-side: pull the utm_* fields out of a parsed JSON body or FormData.
export function parseUtm(get: (key: string) => unknown): Utm {
  const utm = { ...EMPTY };
  for (const k of UTM_KEYS) {
    const v = get(k);
    utm[k] = typeof v === "string" ? v.trim().slice(0, 200) : "";
  }
  return utm;
}
