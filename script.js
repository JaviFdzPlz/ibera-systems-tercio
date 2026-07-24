const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

/* Refine the hero diagram: align L0/L4 with the monogram and suggest an enveloping 360° / hemispherical architecture. */
const heroDiagram=document.querySelector('.hero-monogram');
if(heroDiagram){
  const lines=heroDiagram.querySelector('.system-lines');
  const nodes=heroDiagram.querySelector('.system-nodes');
  const labels=heroDiagram.querySelector('.layer-labels');
  const desc=heroDiagram.querySelector('#hero-diagram-desc');

  if(desc) desc.textContent='The fortified I master monogram anchors five capability layers aligned from base to crown, with subtle coverage arcs indicating distributed and enveloping operation.';

  if(lines) lines.innerHTML='<path d="M286 72 C344 72 365 72 416 72"/><path d="M302 184 C350 184 380 177 432 164"/><path d="M306 295 C356 295 395 295 446 295"/><path d="M302 408 C350 408 380 415 432 426"/><path d="M286 520 C344 520 365 520 416 520"/><path d="M416 72 C468 145 480 224 480 296 C480 368 468 447 416 520" opacity=".48"/><path d="M118 72 C66 145 54 224 54 296 C54 368 66 447 118 520" opacity=".18"/><path d="M118 72 H178 M102 164 H166 M92 295 H154 M102 426 H166 M118 520 H178" opacity=".18"/>';

  if(nodes) nodes.innerHTML='<circle cx="416" cy="72" r="7"/><circle cx="432" cy="164" r="7"/><circle cx="446" cy="295" r="7"/><circle cx="432" cy="426" r="7"/><circle cx="416" cy="520" r="7"/>';

  if(labels) labels.innerHTML='<text x="436" y="77">L4</text><text x="452" y="169">L3</text><text x="466" y="300">L2</text><text x="452" y="431">L1</text><text x="436" y="525">L0</text>';
}

const tercioSection=document.querySelector('#tercio');
if(tercioSection&&!document.querySelector('.operational-context-visual')){
  const transition=document.createElement('section');
  transition.className='operational-context-transition';
  transition.setAttribute('aria-label','Representative operational context');
  transition.innerHTML='<figure class="container operational-context-visual"><img src="assets/visuals/gadir-operational-context.jpg" alt="Conceptual passive position-survivability architecture in a representative wooded environment" width="1439" height="810" loading="lazy"><figcaption><span>Operational context concept — not test evidence</span><small>Passive position-survivability architecture in a representative wooded environment.</small></figcaption></figure>';
  tercioSection.before(transition);
}

if(tercioSection&&!document.querySelector('.system-concept-visual')){
  const layerGrid=tercioSection.querySelector('.layers-grid');
  const figure=document.createElement('figure');
  figure.className='container system-concept-visual';
  figure.innerHTML='<img src="assets/visuals/tercio-integrated-concept.jpg" alt="Concept render illustrating the interaction of TERCIO survivability capabilities" width="1439" height="810" loading="lazy"><figcaption class="concept-caption">Integrated architecture concept — not a fielded configuration<span>Illustrative interaction of signature management, warning, distributed geometry and deception.</span></figcaption>';
  layerGrid?.after(figure);
}
