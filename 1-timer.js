import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-A92OCY9B.js";const d=document.querySelector(".data-input"),n=document.querySelector(".button"),w=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let c,i;function q(t){const r=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:m,minutes:f,seconds:h}}function a(t){return String(t).padStart(2,"0")}const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e>new Date?(c=e,n.disabled=!1):(p.error({position:"topRight",title:"Error",message:"Please choose a date in the future"}),n.disabled=!0),console.log(t[0])}};y("#datetime-picker",C);function E(){c&&(n.disabled=!0,d.disabled=!0,i=setInterval(()=>{const e=c-new Date;if(e<=0){clearInterval(i),l(0,0,0,0),n.disabled=!1,d.disabled=!1;return}const{days:o,hours:s,minutes:u,seconds:r}=q(e);l(o,s,u,r)},1e3))}function l(t,e,o,s){w.textContent=t,S.textContent=a(e),b.textContent=a(o),D.textContent=a(s)}n.addEventListener("click",E);
//# sourceMappingURL=1-timer.js.map
