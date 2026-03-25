const CACHE_NAME = "rtu-calc-v1";
const ASSETS_TO_CACHE = ["/", "/icon.svg", "/globe.svg", "/window.svg"];

// Install event: cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Fetch event: Network-first approach with cache fallback for offline usage
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Skip caching for API or external requests if necessary, but here we just fallback to cache.
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Update the cache with the new response
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => caches.match(event.request)),
  );
});
