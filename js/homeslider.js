var span = document.getElementsByTagName('span');
var dproducts = document.getElementsByClassName('dproducts');
var l=0;
span[1].onclick = ()=>{
    l++;
    for(var i of dproducts){
        if (l==0){i.style.left="0px";}
        if (l==1){i.style.left="-650px";}
        if(l>2){l=2}
    }
}
span[0].onclick = ()=>{
    l--;
    for(var i of dproducts){
        if (l==0){i.style.left="0px";}
        if(l<0){l=0}
    }
}