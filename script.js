const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

const tercioSection=document.querySelector('#tercio');
if(tercioSection&&!document.querySelector('.operational-context-visual')){
  const transition=document.createElement('section');
  transition.className='operational-context-transition';
  transition.setAttribute('aria-label','Representative operational context');
  transition.innerHTML='<figure class="container operational-context-visual"><img src="assets/visuals/gadir-operational-context.jpg" alt="Conceptual passive position-survivability architecture in a representative wooded environment" width="1439" height="810" loading="lazy"><figcaption><span>Operational context concept — not test evidence</span><small>Passive position-survivability architecture in a representative wooded environment.</small></figcaption></figure>';
  tercioSection.before(transition);
}