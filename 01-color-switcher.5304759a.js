const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyColorSw:document.querySelector("body")};let e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.bodyColorSw.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.setAttribute("disabled",""),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStop.setAttribute("disabled",""),t.btnStart.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.5304759a.js.map