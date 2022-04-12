
/**
 */

function height_btree(t,h) { let b,r=h=h?h+1:1;
    if ((b=t[1]) !== void 0) r=height_btree(b,h);
    if ((b=t[2]) !== void 0) { b=height_btree(b,h); if (b>r) r=b; }
    return r;
}
function draw_btree(t,h/*height*/,d/*depth*/,p/*parent-middle*/,m/*middle*/,cw/*cell-width*/,ch,cr/*cell-radius*/,sw/*stroke-width*/) {
    let c=t[0], n=ch*d, a/*shape*/=c&&c['shape'], sc/*stroke-color*/ = c&&c['stroke'], fc/* fill-color */=c&&c['fill'];

    if (a==='rect')
        document.write('<rect x="'+ (m-cr) +'" y="'+(n)+'" width="'+(2*cr)+'" height="'+(2*cr)+'"'
            +(sc?' stroke="'+sc+'" stroke-width="'+sw+'"':'')
            +' fill="'+(fc||'black')+'"/>');
    else
        document.write('<circle cx="'+m+'" cy="'+(cr+n)+'" r="'+cr+'"'
            +(sc?' stroke="'+sc+'" stroke-width="'+sw+'"':'')
            +' fill="'+(fc||'black')+'"/>');
    if (p!==false) {
        document.write('<line x1="'+m+'" y1="'+(n-sw/2)+'" x2="'+p+'" y2='+(n-ch+2*cr+sw/2)+' stroke="black" stroke-width="'+sw+'" />');
    }
    n=(Math.pow(2,h-++d)-1)/2;
    if ((a/* sub-tree */=t[1]) !== void 0) draw_btree(a,h,d,m,m-(0.5+n)*cw,cw,ch,cr,sw);
    if ((a/* sub-tree */=t[2]) !== void 0) draw_btree(a,h,d,m,m+(0.5+n)*cw,cw,ch,cr,sw);
}

function btree(t/*tree*/,cw/*cell-width*/,ch/*cell-height*/,cr/*cell-radius*/,sw/*stroke-width*/) {
    let h = height_btree(t)-1,w=(Math.pow(2,h)-1)*cw+2*cr; sw || (sw=2);
    document.write('<svg style="width: '+ Math.ceil(w) +'px; height: '+ Math.ceil(ch * h+2*cr) +'px; padding: '+sw+'px">');
    draw_btree(t,/*height*/h,/*depth*/0,false,/*middle*/w/2,cw,ch,cr,sw);
    document.write('</svg>');
}