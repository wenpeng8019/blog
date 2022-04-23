let mdw = null;
document.addEventListener("DOMContentLoaded", function() {
    let d=window.document, es = d.getElementsByClassName(`language-widget`);
    for(let c,e,i=es.length;i--;) { e=(c=es[i]).parentElement;
        e.style.display = 'none';
        e.insertAdjacentElement('afterend', mdw=d.createElement('div'));
        e = d.createElement("script");
        e.text = '(function (){' + c.innerText + '})();';
        d.getElementsByTagName("head")[0].appendChild(e);
    }
    mdw = null;
});
