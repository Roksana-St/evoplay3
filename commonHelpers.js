/* empty css                      */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("burgerMenu"),s=document.getElementById("mobileMenu"),o=document.getElementById("backdrop");r.addEventListener("click",()=>{r.classList.toggle("is-open"),s.classList.toggle("is-open"),o.classList.toggle("is-open")})});mobileMenu.addEventListener("click",()=>{burgerMenu.classList.contains("is-open"),mobileMenu.classList.contains("is-open"),backdrop.classList.contains("is-open")&&(burgerMenu.classList.remove("is-open"),mobileMenu.classList.remove("is-open"),backdrop.classList.remove("is-open"))});document.querySelectorAll(".faq-btn").forEach(r=>{r.addEventListener("click",function(){const s=this.closest(".faq-item").querySelector(".faq-panel"),o=s.classList.contains("open");document.querySelectorAll(".faq-panel.open").forEach(n=>{n!==s&&(n.classList.remove("open"),n.previousElementSibling.querySelector(".faq-btn").classList.remove("open"),n.previousElementSibling.querySelector(".faq-btn").setAttribute("aria-expanded","false"))}),s.classList.toggle("open",!o),this.classList.toggle("open",!o),this.setAttribute("aria-expanded",!o)})});
//# sourceMappingURL=commonHelpers.js.map