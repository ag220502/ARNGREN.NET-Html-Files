var daydeal = new Date("Feb 25,2021 23:00:00").getTime();
var x = setInterval(function(){
var today = new Date().getTime();
var diff= daydeal-today;
var hrs = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
var mins = Math.floor(diff%(1000*60*60)/(1000*60));
var sec = Math.floor(diff%(1000*60)/(1000));
if(sec >=0){
    document.getElementById("ddtimer").innerHTML=hrs+"H : " +mins+"M: "+sec+"S  Left";
}
else{
    document.getElementById("ddtimer").innerHTML="Deal Over";
}

})

var weeklydeals = new Date("Mar 3,2021 16:00:00").getTime();
var x = setInterval(function(){
var today = new Date().getTime();
var diff= weeklydeals-today;
var days =Math.floor(diff/(1000*60*60*24));
var hrs = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
var mins = Math.floor(diff%(1000*60*60)/(1000*60));
var sec = Math.floor(diff%(1000*60)/(1000));
if(sec >=0){
    document.getElementById("dwtimer").innerHTML= days+"Days, "+hrs+"H : " +mins+"M: "+sec+"S  Left";
}
else{
    document.getElementById("dwtimer").innerHTML="Deal Over";
}
})

var monthlydeals = new Date("Mar 23,2021 16:00:00").getTime();
var x = setInterval(function(){
var today = new Date().getTime();
var diff= monthlydeals-today;
var days =Math.floor(diff/(1000*60*60*24));
var hrs = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
var mins = Math.floor(diff%(1000*60*60)/(1000*60));
var sec = Math.floor(diff%(1000*60)/(1000));
if(sec >=0){
    document.getElementById("dmtimer").innerHTML= days+"Days, "+hrs+"H : " +mins+"M: "+sec+"S  Left";
}
else{
    document.getElementById("dmtimer").innerHTML="Deal Over";
}
})