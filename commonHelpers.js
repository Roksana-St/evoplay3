/* empty css                      */import{S as f,N as b,K as m,P as y}from"./assets/vendor-aaa28e29.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".header-container"),t=document.getElementById("burgerMenu"),r=document.getElementById("mobileMenu"),n=document.getElementById("backdrop"),e=document.body,s=document.querySelectorAll(".nav-link");t.addEventListener("click",()=>{const i=t.classList.toggle("is-open");r.classList.toggle("is-open"),n.classList.toggle("is-open"),i&&window.scrollTo({top:0,behavior:"smooth"}),e.style.overflow=i?"hidden":""}),n.addEventListener("click",()=>{t.classList.remove("is-open"),r.classList.remove("is-open"),n.classList.remove("is-open"),e.style.overflow=""}),s.forEach(i=>{i.addEventListener("click",l=>{l.preventDefault();const a=i.getAttribute("href").substring(1),c=document.getElementById(a);c&&window.scrollTo({top:c.offsetTop-o.offsetHeight,behavior:"smooth"}),t.classList.remove("is-open"),r.classList.remove("is-open"),n.classList.remove("is-open"),e.style.overflow=""})}),window.addEventListener("scroll",()=>{window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled")})});const g=document.querySelector(".swiper.swiper-one"),d=document.querySelector(".button-next-svg"),u=document.querySelector(".button-prev"),v=new f(g,{modules:[b,m,y],navigation:{nextEl:d,prevEl:u},pagination:{el:".swiper-pagination",clickable:!0},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:20},1200:{slidesPerView:4,spaceBetween:60}}});v.update();const p=(o,t)=>{t?(o.style.opacity="0.5",o.style.cursor="not-allowed"):(o.style.opacity="1",o.style.cursor="pointer")},w=new MutationObserver(o=>{o.forEach(t=>{if(t.attributeName==="class"){const r=d.classList.contains("swiper-button-disabled");p(d,r)}})});w.observe(d,{attributes:!0});const L=new MutationObserver(o=>{o.forEach(t=>{if(t.attributeName==="class"){const r=u.classList.contains("swiper-button-disabled");p(u,r)}})});L.observe(u,{attributes:!0});document.querySelectorAll(".faq-btn").forEach(o=>{o.addEventListener("click",function(){const t=this.closest(".faq-item").querySelector(".faq-panel"),r=t.classList.contains("open");document.querySelectorAll(".faq-panel.open").forEach(n=>{n!==t&&(n.classList.remove("open"),n.previousElementSibling.querySelector(".faq-btn").classList.remove("open"),n.previousElementSibling.querySelector(".faq-btn").setAttribute("aria-expanded","false"))}),t.classList.toggle("open",!r),this.classList.toggle("open",!r),this.setAttribute("aria-expanded",!r)})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".features-list li"),i=["#89caba","#fff788","#a9c562","#fdc898","#f2a7c0"];o.forEach((l,a)=>{l.style.border=`2px solid ${i[a]}`,l.style.borderRadius="8px";const c=l.querySelector(".features-icons");c&&(c.style.backgroundColor=i[a],c.style.padding="4px",c.style.borderRadius="50%")})});
//# sourceMappingURL=commonHelpers.js.map
