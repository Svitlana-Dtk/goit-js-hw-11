import{a as p,S as d,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="54246906-f81d1c2d6c5eb45f9ea82e11c",y="https://pixabay.com/api/";async function g(s){return(await p.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:f,downloads:u})=>`
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
            <p class="info-value">${a}</p>
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
    `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",v);async function v(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){n.warning({message:"Please enter a search query"});return}w(),S();try{const o=await g(t);if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o.hits)}catch{n.error({message:"Something went wrong. Try again later."})}finally{b(),s.target.reset()}}
//# sourceMappingURL=index.js.map
