const cur=document.getElementById('cur'),cr=document.getElementById('cur-r');
let mx=window.innerWidth/2,my=window.innerHeight/2,rx=mx,ry=my;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;cr.style.left=Math.round(rx)+'px';cr.style.top=Math.round(ry)+'px';requestAnimationFrame(loop)})();

const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('sc',scrollY>55);
  let c='';
  document.querySelectorAll('section[id]').forEach(s=>{if(scrollY>=s.offsetTop-110)c=s.id});
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+c));
},{passive:true});

document.querySelectorAll('[data-tilt]').forEach(el=>{
  el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(600px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`});
  el.addEventListener('mouseleave',()=>el.style.transform='');
});

function showP(id,el){
  ['authored','panels','media'].forEach(t=>{const p=document.getElementById('p-'+t);if(p)p.style.display='none'});
  const panel=document.getElementById('p-'+id);
  if(panel)panel.style.display='block';
  document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
}