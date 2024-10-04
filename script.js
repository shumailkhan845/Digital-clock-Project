let hrs = document.querySelector(".hour");
let min = document.querySelector(".minute");
let sec = document.querySelector(".second");
let am = document.querySelector(".Am");
setInterval(()=>{
     let currentTime=new Date();
     
          hrs.innerText=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
          min.innerText=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
          sec.innerText=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
          if(hrs.innerText<12)
          {
               am.innerText="am";
          }
          else
          {
               am.innerText="pm";
          }
}, 1000);


 
