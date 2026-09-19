const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>q('.preloader').classList.add('hide'),900));
addEventListener('mousemove',e=>{q('#x').textContent='X:'+String(e.clientX).padStart(4,'0');q('#y').textContent='Y:'+String(e.clientY).padStart(4,'0')});
const sections=qa('section[data-name]'); const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting) q('#s').textContent='S:'+e.target.dataset.name}),{threshold:.35}); sections.forEach(s=>io.observe(s));
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.15});qa('.reveal').forEach(x=>reveal.observe(x));
addEventListener('scroll',()=>{const d=document.documentElement;q('#p').textContent='P:'+String(Math.max(1,Math.round(scrollY/(d.scrollHeight-innerHeight)*100))).padStart(3,'0')+'%';q('.hero-bg').style.transform=`translateY(${scrollY*.18}px) scale(1.08)`});
q('.menu').onclick=()=>q('nav').classList.toggle('open');qa('nav a').forEach(a=>a.onclick=()=>q('nav').classList.remove('open'));
q('.top').onclick=()=>scrollTo({top:0,behavior:'smooth'});q('.email').onclick=async e=>{await navigator.clipboard.writeText(e.currentTarget.dataset.email);e.currentTarget.querySelector('i').textContent='COPIED'};
