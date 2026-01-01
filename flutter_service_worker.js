'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"index.html": "6b366df2345165e57699084744e7ae71",
"/": "6b366df2345165e57699084744e7ae71",
"assets/site.webmanifest": "4efce79f319c245ecdf5528fdbd01ed3",
"assets/icons/ios_512x512.png": "2c942a27a5180caf2ec0ca1675080fc7",
"assets/icons/chrome_512x512.png": "657cef546129e8a3dce4eaff547ec272",
"assets/icons/android_512x512.png": "1a751010e6e2cd2ca6610421ee06ba19",
"assets/apple-touch-icon-152x152-precomposed.png": "928a4b9168e33e797cf27a956dd43b3c",
"assets/apple-touch-icon-76x76-precomposed.png": "edcd075e9e9ab81165e437d19ba8373f",
"assets/manifest.json": "c5b3f35291bb450a9cbbd842b68d9d30",
"assets/apple-touch-icon-60x60.png": "4b9f4e48fc16c2659367f810a81b3853",
"assets/apple-touch-icon-precomposed.png": "532a41e73aecfe8836e71c2db8bb7b5a",
"assets/apple-touch-icon-76x76.png": "d77835ff9684c05996f58a464fa7e9be",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/browserconfig.xml": "98d814e4ac433cd0e99762bf2e78422b",
"assets/mstile-310x310.png": "41620cdb4fb43792c0c6cced52b6367b",
"assets/favicon-32x32.png": "e12c05a7144442c0ef3180fe7eec9038",
"assets/AssetManifest.bin.json": "797d67e4b0d374059f307888078065c5",
"assets/apple-touch-icon-114x114-precomposed.png": "1d00f0d050a6d27df93ccb4df32c4c68",
"assets/favicon-16x16.png": "18d59c1773c7cc25b03f87ca96ddf445",
"assets/apple-touch-icon-180x180-precomposed.png": "532a41e73aecfe8836e71c2db8bb7b5a",
"assets/apple-touch-icon-60x60-precomposed.png": "bc5ad2f49eb3dad6392425125dcdd555",
"assets/apple-touch-icon-180x180.png": "7eaa331ef1d02983f99f6350f727d923",
"assets/assets/icons/ios_512x512.png": "2c942a27a5180caf2ec0ca1675080fc7",
"assets/assets/icons/chrome_512x512.png": "657cef546129e8a3dce4eaff547ec272",
"assets/assets/icons/android_512x512.png": "1a751010e6e2cd2ca6610421ee06ba19",
"assets/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/FontManifest.json": "f66aa55cd79651f341aedd8491362eea",
"assets/apple-touch-icon-72x72.png": "c05eacedf7935728cd9ad21230024d63",
"assets/favicon.png": "e990c85d612f13b66faa12c37ac913d3",
"assets/apple-touch-icon-72x72-precomposed.png": "147517598c1f7a1bc2e763023a6b76f9",
"assets/apple-touch-icon.png": "7eaa331ef1d02983f99f6350f727d923",
"assets/android-chrome-512x512.png": "8f4f27c0597d8395e9b535bdfabe1dd5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/mstile-150x150.png": "3a764ccf97f9af44f02ec57e203116ee",
"assets/loading.gif": "6def8d80a999aa526b1eeb5799c215c7",
"assets/android-chrome-256x256.png": "44c9c954286a22b227ec048370467620",
"assets/apple-touch-icon-120x120.png": "4aad8385ac20920476c32e7a18039896",
"assets/NOTICES": "d9de4a1f49a09f3341140515f65ecc6a",
"assets/android-chrome-192x192.png": "746f11e788dfa49738162005f3b42d3b",
"assets/favicon.ico": "4a71e949ab0117b847950cf3e200af00",
"assets/apple-touch-icon-144x144.png": "2af145cc8f09b4dcc157641a87213642",
"assets/apple-touch-icon-57x57-precomposed.png": "e2960b0b849f7bda7e87bb8f60ec599e",
"assets/mstile-70x70.png": "3613827e558b2cf6b447b441f843b16c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/apple-touch-icon-120x120-precomposed.png": "3f5dd85ef05dbead12a586a36b542965",
"assets/mstile-144x144.png": "e1c471245a99c596c55782e18d0658a4",
"assets/apple-touch-icon-57x57.png": "60ccd363761c2869197272cab4a78fe3",
"assets/apple-touch-icon-152x152.png": "d5571273a8103f6efa1472e8b9abf283",
"assets/FontManifest.json": "f66aa55cd79651f341aedd8491362eea",
"assets/AssetManifest.bin": "cfec1f839b2a292320ffcee1cb7a4092",
"assets/apple-touch-icon-114x114.png": "9cdf6a59d48ffa17b6285db2280c0fe1",
"assets/apple-touch-icon-144x144-precomposed.png": "3199c713fbd8bd3dc3c339a50ccb4629",
"assets/safari-pinned-tab.svg": "888e683ba0949d3968be8af4fad941fc",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"flutter_bootstrap.js": "aead2302a44478990d9d2cea4a05c384",
"version.json": "a74ce0bee35cc93dee71211e4d8908f1",
"main.dart.js": "51d43a7f0a1a38a99747f15ce86baaf2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
