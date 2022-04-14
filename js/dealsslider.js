var span1 = document.getElementsByClassName('span1');
var dproducts = document.getElementsByClassName('dproducts');
var l=0;
span1[1].onclick = ()=>{
    l++;
    for(var i of dproducts){
        if (l==0){i.style.left="0px";}
        if (l==1){i.style.left="-740px";}
        if(l>4){l=4}
    }
}
span1[0].onclick = ()=>{
    l--;
    for(var i of dproducts){
        if (l==0){i.style.left="0px";}
        if(l<0){l=0}
    }
}

var span2 = document.getElementsByClassName('span2');
var wproducts = document.getElementsByClassName('wproducts');
var w=0;
span2[1].onclick = ()=>{
    w++;
    for(var i of wproducts){
        if (w==0){i.style.left="0px";}
        if (w==1){i.style.left="-740px";}
        if(w>4){w=4}
    }
}
span2[0].onclick = ()=>{
    w--;
    for(var i of wproducts){
        if (w==0){i.style.left="0px";}
        if(w<0){w=0}
    }
}

var span3 = document.getElementsByClassName('span3');
var mproducts = document.getElementsByClassName('mproducts');
var m=0;
span3[1].onclick = ()=>{
    m++;
    for(var i of mproducts){
        if (m==0){i.style.left="0px";}
        if (m==1){i.style.left="-740px";}
        if(m>1){m=1}
    }
}
span3[0].onclick = ()=>{
    m--;
    for(var i of mproducts){
        if (m==0){i.style.left="0px";}
        if(m<0){m=0}
    }
}