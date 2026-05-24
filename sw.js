// TYST Service Worker — minimal, privacy-first
// No caching of sensitive content

const CACHE = 'tyst-v4';
const STATIC = [
  '/index.html',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Never cache API calls or admin — always fresh
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/admin')) {
    e.respondWith(fetch(e.request));
    return;
  }


  // Static assets — cache first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
