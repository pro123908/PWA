self.addEventListener("install", event => {
  console.log("Installing Service Worker ... ", event);
});

self.addEventListener("activate", event => {
  console.log("Activating Service Worker ... ", event);
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  console.log("Fetching Service Worker...", event);
  // event.respondWith(fetch(event.request));
});
