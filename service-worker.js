self.addEventListener("install", event => {
    console.log("ARTIUS установлен");
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});