self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('spelling-bee-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './main.js',
        './wordData.js',
        './bee.mp4',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
