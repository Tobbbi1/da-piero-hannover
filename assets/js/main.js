(function(){
  var nav=document.getElementById('navbar'),t=document.getElementById('menu-toggle'),links=document.getElementById('nav-links');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>40);
    var s=document.querySelector('.sticky-order');if(s)s.classList.toggle('show',window.scrollY>window.innerHeight*0.7);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(t){t.addEventListener('click',function(){var o=nav.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Menü schließen':'Menü öffnen');});
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');t.setAttribute('aria-expanded','false');});});}
})();
(function(){
  /* Winterpause-Pop-up: jedes Jahr vom 1. Dezember bis einschließlich 1. Februar */
  var d=new Date(),m=d.getMonth(),day=d.getDate();
  var aktiv=m===11||m===0||(m===1&&day===1)||/[?&]winterpause=1/.test(location.search);
  if(!aktiv)return;
  try{if(sessionStorage.getItem('winterpause-gesehen'))return;}catch(e){}
  var o=document.createElement('div');o.className='wp-overlay';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-labelledby','wp-title');
  o.innerHTML='<div class="wp-box"><button class="wp-close" aria-label="Schließen">&times;</button><p class="wp-kicker">Liebe Gäste</p><h2 id="wp-title">Wir sind in der Winterpause</h2><p>Vom <strong>1. Dezember bis 1. Februar</strong> macht das Eiscafé da Piero Winterpause.</p><p>Wir freuen uns, Sie danach wieder bei uns begrüßen zu dürfen!</p><p class="wp-sign">Ihr Eiscafé da Piero Team</p><button class="btn btn-primary wp-ok">Alles klar</button></div>';
  function zu(){o.remove();document.body.style.overflow='';try{sessionStorage.setItem('winterpause-gesehen','1');}catch(e){}}
  o.addEventListener('click',function(e){if(e.target===o||e.target.classList.contains('wp-close')||e.target.classList.contains('wp-ok'))zu();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.body.contains(o))zu();});
  document.body.appendChild(o);document.body.style.overflow='hidden';o.querySelector('.wp-ok').focus();
})();
