// services/api.js
// Central API configuration — import this wherever backend calls are needed

export const BASE_URL = 'http://localhost:8000/api';

// ─── Circulars ───────────────────────────────────────────────
export const CIRCULARS_URL = `${BASE_URL}/circulars`;
// GET /circulars → [ { id, title, pdfUrl, date, isNew } ]

// ─── Videos ──────────────────────────────────────────────────
export const VIDEOS_URL = `${BASE_URL}/videos`;
// GET /videos → [ { id, title, link, platform: 'youtube'|'facebook'|'instagram', date } ]

// ─── Banners / Slider ─────────────────────────────────────────
export const BANNERS_URL = `${BASE_URL}/banners`;
// GET /banners → [ { id, imageUrl, altText, caption } ]

// ─── Chief Scout Photo ───────────────────────────────────────
export const CHIEF_SCOUT_URL = `${BASE_URL}/chief-scout`;
// GET /chief-scout → { name, designation, imageUrl }

/**
 * Generic fetch helper — wraps fetch with error handling.
 * Usage: const data = await apiFetch(CIRCULARS_URL);
 */
export async function apiFetch(url, options = {}) {
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('[apiFetch]', err.message);
    return null;
  }
}