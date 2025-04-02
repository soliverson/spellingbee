const CACHE_NAME = "spelling-bee-cache-v1";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/script/main.js",
  "/script/gameLogic.js",
  "/script/ui.js",
  "/script/voiceUtils.js",
  "/script/wordData.js",
  "/script/storage.js",
  "/favicon.ico",
  "/manifest.json",
  "/bee.mp4",
  "/sounds/correct.mp3",
  "/sounds/wrong.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});
