// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn(...inputs) - helper to merge Tailwind classnames
 * usage: cn("p-4", condition && "text-red-500")
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/* ---------------- Image fetcher (Pixabay) ---------------- */

const CACHE_KEY = "img_cache_v1";
// Local fallback image in your public/ directory.
// Put a file at public/travel.jpg (recommended) or change this path.
export const DEFAULT_IMAGE = "/travel.jpg";

const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY || "";

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeCache(obj) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(obj));
  } catch {}
}

function normalize(q) {
  if (!q) return "";
  
  // Extract simple search terms from complex addresses
  let cleaned = String(q).trim();
  
  // Remove common address parts
  cleaned = cleaned
    .replace(/\b(lane|street|road|avenue|boulevard|drive|way|block|extension|area|colony|sector)\b/gi, "")
    .replace(/\b(c-?\d+|block\s+[a-z]|sector\s+\d+)\b/gi, "")
    .replace(/[,\s]+/g, " ")
    .trim();
  
  // Extract hotel name or main location name (first 2-3 words usually)
  const words = cleaned.split(/\s+/).filter(w => w.length > 2);
  
  // Take first 2-3 meaningful words (hotel name or location)
  const searchTerms = words.slice(0, 3).join(" ");
  
  return searchTerms.toLowerCase() || cleaned.toLowerCase();
}

/**
 * fetchImageFor(query) -> returns image URL (pixabay or DEFAULT_IMAGE)
 * - caches in localStorage to reduce API calls during development
 * - returns DEFAULT_IMAGE if PIXABAY_KEY not set or on error
 */
export async function fetchImageFor(query) {
  const q = normalize(query);
  if (!q) return DEFAULT_IMAGE;

  // check cache
  const cache = readCache();
  if (cache[q]) return cache[q];

  if (!PIXABAY_KEY) {
    // no key — fall back to local image
    console.warn("VITE_PIXABAY_KEY not set - using fallback image");
    return DEFAULT_IMAGE;
  }

  const url = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(
    q
  )}&image_type=photo&orientation=horizontal&per_page=3&safesearch=true`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Pixabay error ${res.status}`);
    const data = await res.json();
    const hit = (data.hits && data.hits[0]) || null;
    const imageUrl = hit?.webformatURL || DEFAULT_IMAGE;

    // cache the result (keep cache bounded)
    cache[q] = imageUrl;
    const keys = Object.keys(cache);
    if (keys.length > 300) {
      delete cache[keys[0]];
    }
    writeCache(cache);

    return imageUrl;
  } catch (err) {
    // Only log if it's not a 400 error (common for invalid queries)
    if (!err.message?.includes("400")) {
      console.warn("fetchImageFor error", err);
    }
    return DEFAULT_IMAGE;
  }
}
