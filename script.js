const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

const heroDiagram=document.querySelector('.hero-monogram');
if(heroDiagram){
  heroDiagram.setAttribute('viewBox','0 0 520 640');
  heroDiagram.innerHTML=`
    <title id="hero-diagram-title">Official ÍBERA monogram with five concentric TERCIO functional layers</title>
    <desc id="hero-diagram-desc">The fortified I monogram sits at the centre of five subtle concentric functional layers labelled L0 to L4. The rings are conceptual and do not indicate measured range.</desc>
    <g class="coverage-rings" fill="none" stroke="#20aeb0">
      <circle cx="250" cy="305" r="78" stroke-width="1.6" opacity=".34" stroke-dasharray="2 10"/>
      <circle cx="250" cy="305" r="118" stroke-width="1.5" opacity=".28" stroke-dasharray="3 12"/>
      <circle cx="250" cy="305" r="160" stroke-width="1.4" opacity=".23" stroke-dasharray="4 14"/>
      <circle cx="250" cy="305" r="204" stroke-width="1.3" opacity=".19" stroke-dasharray="5 16"/>
      <circle cx="250" cy="305" r="250" stroke-width="1.2" opacity=".16" stroke-dasharray="6 18"/>
    </g>
    <g class="ring-markers" fill="#081119" stroke="#20aeb0" stroke-width="2.6">
      <circle cx="328" cy="305" r="6"/>
      <circle cx="368" cy="305" r="6"/>
      <circle cx="410" cy="305" r="6"/>
      <circle cx="454" cy="305" r="6"/>
      <circle cx="500" cy="305" r="6"/>
    </g>
    <g class="ring-labels" font-family="Sora,Arial,sans-serif" font-size="13" letter-spacing="2" fill="#7edddd">
      <text x="316" y="287">L0</text>
      <text x="356" y="274">L1</text>
      <text x="398" y="261">L2</text>
      <text x="442" y="248">L3</text>
      <text x="478" y="235">L4</text>
    </g>
    <image href="assets/brand/IBERA_Monogram_Detailed_Reverse.svg" x="158" y="95" width="184" height="420" preserveAspectRatio="xMidYMid meet"/>
    <path class="copper-accent" d="M82 586H470"/>
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
