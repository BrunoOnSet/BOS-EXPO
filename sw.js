const CACHE="bos-expo-v4-2-3-tech-illustrated-jpg";
const ASSETS=[
  "./",
  "./index.html",
  "./expo-host.js",
  "./expo-light-shell.js",
  "./expo-light-shell.css",
  "./assets/triangle-exposition.jpg",
  "./assets/fiche-filtres-nd.jpg",
  "./assets/expo-tech-triangle-thumb.jpg",
  "./assets/expo-tech-effects-thumb.jpg",
  "./assets/expo-tech-nd-thumb.jpg",
  "./assets/expo-camera-thumb.svg",
  "./assets/expo-dynamique-thumb.svg",
  "./assets/expo-compenser-thumb.svg",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const url=new URL(e.request.url);
  const jpgFiche=url.origin===self.location.origin &&
    /^\/BOS-EXPO\/assets\/(?:triangle-exposition|fiche-filtres-nd|effets-des-reglages)\.jpg$/.test(url.pathname);
  if(jpgFiche){
    // Les JPG sont remplacables par l'utilisateur sans éditer l'application.
    // Toujours vérifier le fichier réseau, en gardant une copie hors-ligne.
    e.respondWith(
      fetch(new Request(e.request,{cache:"no-store"}))
        .then(response=>{
          if(response.ok) {
            const copy=response.clone();
            caches.open(CACHE).then(cache=>cache.put(e.request,copy)).catch(()=>{});
          }
          return response;
        })
        .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(cached=>cached||Response.error()))
    );
    return;
  }
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request).then(r=>{
      const cp=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});
      return r;
    }).catch(()=>caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(net=>{
    if(net.ok) {
      const cp=net.clone();
      caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});
    }
    return net;
  })));
});
