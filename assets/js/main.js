(function(){
  var nav=document.getElementById('navbar'),t=document.getElementById('menu-toggle'),links=document.getElementById('nav-links');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>40);
    var s=document.querySelector('.sticky-order');if(s)s.classList.toggle('show',window.scrollY>window.innerHeight*0.7);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(t){t.addEventListener('click',function(){var o=nav.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Menü schließen':'Menü öffnen');});
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');t.setAttribute('aria-expanded','false');});});}
})();
