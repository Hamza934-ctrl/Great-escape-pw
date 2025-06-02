
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("cleanzone-cache").then(function(cache) {
      return cache.addAll([
        "cleanzone-pwa.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
