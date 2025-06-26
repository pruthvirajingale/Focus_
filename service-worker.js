self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('video-cache').then((cache) => {
            return cache.addAll([
                'video.mp4',
                'video2.mp4',
                'video3.mp4',
                'video4.mp4'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
