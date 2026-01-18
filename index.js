import{a as d,S as p,i as m}from"./assets/vendor-Cq7ZUixy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",g="54246906-f81d1c2d6c5eb45f9ea82e11c";function h(s){return d.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new p(".gallery a");function b(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:f,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <ul class="image-info">
          <li class="info-point">
            <p class="info-descr"> Likes </p>
            <p class="info-value">${r}</p>
          </li>
           <li class="info-point">
            <p class="info-descr"> Views </p>
            <p class="info-value">${n}</p>
           </li>
           <li class="info-point">
            <p class="info-descr"> Comments </p>
            <p class="info-value">${f}</p>
           </li>
           <li class="info-point">
           <p class="info-descr"> Downloads </p>
           <p class="info-value">${u}</p>
           </li>
        </ul>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const a=document.querySelector(".form");a.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();t&&(v(),S(),h(t).then(o=>{const i=o.data.hits;if(i.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(i)}).catch(o=>{console.error(o)}).finally(()=>{q(),a.reset()}))});
//# sourceMappingURL=index.js.map
