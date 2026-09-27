const C='rafiq-v1';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(url.pathname==='/'||url.pathname.indexOf('.html')>=0){
  e.respondWith(
   fetch(e.request).then(res=>{
    const cl=res.clone();
    caches.open(C).then(c=>c.put(e.request,cl));
    return res;
   }).catch(()=>caches.match(e.request))
  );
 }
});
