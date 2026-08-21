const CACHE = "bos-expo-v3.57";
const ASSETS=["./","./index.html","./style.css?v=3.57","./app.js?v=3.57","./manifest.webmanifest","./icon-192.png","./icon-512.png","./logo-bruno-guillard.png"];
const CAMERA_DB_HOST="raw.githubusercontent.com";
const CAMERA_DB_PATH="/BrunoSetTools/BOS-CAMERA-DB/main/cameras.json";

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;

  // BOS-CAMERA-DB : ne jamais servir une ancienne copie du Cache API.
  // app.js demande deja cette ressource avec cache:"no-store" et gere son propre
  // cache offline en localStorage + fallback embarque. En ligne, on laisse donc
  // le navigateur aller directement chercher la derniere version GitHub.
  const url=new URL(e.request.url);
  if(url.hostname===CAMERA_DB_HOST&&url.pathname===CAMERA_DB_PATH) return;

  if(e.request.mode==="navigate"||["document","style","script"].includes(e.request.destination)){
    e.respondWith(
      fetch(e.request)
        .then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r;})
        .catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html")))
    );
  }else{
    e.respondWith(
      caches.match(e.request).then(r=>r||fetch(e.request).then(net=>{
        const cp=net.clone();
        caches.open(CACHE).then(c=>c.put(e.request,cp));
        return net;
      }))
    );
  }
});
