function DigitalClock() {
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();

let Dclock= document.getElementById("clock");
Dclock.innerText= h+":"+m +":"+s ;

 }
DigitalClock();
setInterval(DigitalClock,1000);