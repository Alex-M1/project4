/* eslint-disable quotes */
/* eslint-disable no-return-await */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
const cacheNameStatic = 'checkers';
const cacheNameDynamic = 'checkers';

const staticURLs = [
    './src/index.html',
    './src/assets/img/logo.png',
    './src/assets/img/puzzle.png',
];

self.addEventListener('install', async () => {
    const cache = await caches.open(cacheNameStatic);
    await cache.addAll(staticURLs);
});

self.addEventListener('activate', async () => {
    const cacheKeys = await caches.keys();

    await Promise.all(
        cacheKeys
            .filter((key) => key !== cacheNameStatic && key !== cacheNameDynamic)
            .map((key) => caches.delete(key)),
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(event.request));
    } else if (!request.url.includes('chrome-extension://')) {
        event.respondWith(networkFirst(event.request));
    }
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open(cacheNameDynamic);
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
    } catch (e) {
        // console.log(e, 'error');
        const cached = await cache.match(request);
        const mess = { message: "offline" };
        return cached ?? new Response(JSON.stringify(mess));
    }
}
