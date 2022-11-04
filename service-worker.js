// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);

  if (event.request.method === 'POST' && url.pathname === '/pwa-share-data') {
    event.respondWith((async () => {
      const formData = await event.request.formData();
      const file = formData.get('sgf');
      if (file) {
        const text = await file.text();
        return Response.redirect("/upload?sgf=" + encodeURIComponent(text), 303);
      }
      return Response.redirect("/", 303);
    })());
  } else {
    event.respondWith(fetch(event.request));
  }
});
