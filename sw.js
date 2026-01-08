self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('portfolio-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './style.css',
          './workscript.js',
          './bg.JPG',
          './favicon.ico',
          './mediheal.png',
          './safar.png',
          './tastebuds.png'
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
  