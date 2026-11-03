(function(){
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.links');
  if(!toggle||!links)return;
  toggle.addEventListener('click',function(){
    const open=links.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
    toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Open navigation menu');
    });
  });
})();
