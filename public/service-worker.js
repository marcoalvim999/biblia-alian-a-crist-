self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('biblia-alianca-crista-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
