const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

const heroDiagram=document.querySelector('.hero-monogram');
if(heroDiagram){
  heroDiagram.setAttribute('viewBox','0 0 520 640');
  heroDiagram.innerHTML=`
    <title id="hero-diagram-title">Official ÍBERA monogram with aligned TERCIO system layers</title>
    <desc id="hero-diagram-desc">The fortified I master monogram anchors five conceptual capability layers aligned from its base to its crown.</desc>
    <g class="system-lines" fill="none" stroke="#20aeb0" stroke-width="2">
      <path d="M280 72H430"/>
      <path d="M280 184H430"/>
      <path d="M280 296H430"/>
      <path d="M280 408H430"/>
      <path d="M280 520H430"/>
      <path d="M430 72V520" opacity=".38"/>
    </g>
    <g class="system-nodes">
      <circle cx="430" cy="72" r="7"/>
      <circle cx="430" cy="184" r="7"/>
      <circle cx="430" cy="296" r="7"/>
      <circle cx="430" cy="408" r="7"/>
      <circle cx="430" cy="520" r="7"/>
    </g>
    <image href="assets/brand/IBERA_Monogram_Detailed_Reverse.svg" x="92" y="45" width="230" height="500" preserveAspectRatio="xMidYMid meet"/>
    <g class="layer-labels" font-family="Sora,Arial,sans-serif" font-size="13" letter-spacing="2">
      <text x="449" y="77">L4</text>
      <text x="449" y="189">L3</text>
      <text x="449" y="301">L2</text>
      <text x="449" y="413">L1</text>
      <text x="449" y="525">L0</text>
    </g>
    <path class="copper-accent" d="M110 586H470"/>
  `;
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