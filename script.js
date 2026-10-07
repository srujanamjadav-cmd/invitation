const doors=document.querySelector(".doors");
const opening=document.getElementById("opening");
const invitation=document.getElementById("invitation");
const openBtn=document.getElementById("openBtn");
const close=document.getElementById("closing");
const closeBtn=document.getElementById("closeBtn");
const again=document.getElementById("againBtn");

openBtn.onclick=()=>{
 doors.classList.add("open");
 setTimeout(()=>{
   opening.classList.add("hide");
   window.scrollTo(0,0);
 },1700);
};

closeBtn.onclick=()=>{
 close.classList.add("animate");
 setTimeout(()=>close.classList.add("done"),3800);
};

again.onclick=()=>{
 close.classList.remove("done","animate");
 opening.classList.remove("hide");
 doors.classList.remove("open");
 window.scrollTo(0,0);
};

/* Countdown */
const target=new Date("2026-10-28T19:30:00+05:30").getTime();
function timer(){
 let x=Math.max(0,target-Date.now());
 let d=Math.floor(x/86400000); x%=86400000;
 let h=Math.floor(x/3600000); x%=3600000;
 let m=Math.floor(x/60000); x%=60000;
 let s=Math.floor(x/1000);
 days.textContent=String(d).padStart(2,"0");
 hours.textContent=String(h).padStart(2,"0");
 minutes.textContent=String(m).padStart(2,"0");
 seconds.textContent=String(s).padStart(2,"0");
}
timer();setInterval(timer,1000);

/* Optional music */
const music=new Audio("wedding-music.mp3");
music.loop=true;
musicBtn.onclick=()=>{
 if(music.paused){
   music.play().catch(()=>alert("Add wedding-music.mp3 in this same folder first."));
   musicBtn.textContent="♪";
 }else{
   music.pause();musicBtn.textContent="♫";
 }
};
