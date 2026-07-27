const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

const hero=document.querySelector('.hero');
if(hero&&!hero.querySelector('.hero-video')){
  const video=document.createElement('video');
  video.className='hero-video';
  video.autoplay=true;video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';
  video.poster='assets/visuals/ibera_hero_background_v2_poster.jpg?v=20260724-1';
  video.setAttribute('aria-hidden','true');
  video.innerHTML='<source src="assets/visuals/ibera_hero_background_v2_web.mp4?v=20260724-1" type="video/mp4">';
  hero.prepend(video);
  const rotatingLine=hero.querySelector('h1 em');
  const cues=[{start:0,end:3.4,text:'Before detection.'},{start:3.4,end:6.6,text:'Before targeting.'},{start:6.6,end:9.7,text:'Before commitment.'},{start:9.7,end:13.5,text:'Preserve the mission.'}];
  let activeText='';
  const updateCue=()=>{if(!rotatingLine)return;const t=video.currentTime||0;const cue=cues.find(item=>t>=item.start&&t<item.end)||cues[0];if(cue.text!==activeText){activeText=cue.text;rotatingLine.classList.remove('is-visible');window.setTimeout(()=>{rotatingLine.textContent=cue.text;rotatingLine.classList.add('is-visible');},120);}};
  video.addEventListener('loadedmetadata',updateCue);video.addEventListener('timeupdate',updateCue);video.play().catch(()=>hero.classList.add('hero-video-paused'));
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionPreference=()=>{if(reducedMotion.matches){video.pause();video.removeAttribute('autoplay');if(rotatingLine){rotatingLine.textContent='Before it closes.';rotatingLine.classList.add('is-visible');}}else{video.play().catch(()=>{});}};
  applyMotionPreference();reducedMotion.addEventListener?.('change',applyMotionPreference);
}

const tercioSection=document.querySelector('#tercio');
if(tercioSection&&!document.querySelector('.operational-context-visual')){
  const transition=document.createElement('section');
  transition.className='operational-context-transition';
  transition.setAttribute('aria-label','Representative operational context');
  transition.innerHTML='<figure class="container operational-context-visual"><img src="assets/visuals/gadir-operational-context.jpg" alt="Conceptual passive position-survivability architecture in a representative wooded environment" width="1439" height="810" loading="lazy"><figcaption><span>Operational context concept — not test evidence</span><small>Passive position-survivability architecture in a representative wooded environment.</small></figcaption></figure>';
  tercioSection.before(transition);
}

if(tercioSection){
  const layerGrid=tercioSection.querySelector('.layers-grid');
  if(layerGrid&&!tercioSection.querySelector('.tercio-umbrella-card')){
    const umbrella=document.createElement('a');
    umbrella.className='container tercio-umbrella-card';
    umbrella.href='#demonstrators';
    umbrella.innerHTML='<div><span>TERCIO / SYSTEM OF SYSTEMS</span><h3>Five standalone-capable layers.<br>One evidence-gated architecture.</h3><p>Condition · Conceal · Detect · Extend · React · Deceive · Protect</p></div><strong>Explore the architecture →</strong>';
    layerGrid.before(umbrella);
  }
  const routes={URCE:'urce.html',GADIR:'gadir.html',ATALA:'atala.html',ALANO:'alano.html',ARDID:'ardid.html'};
  const descriptions={
    ALANO:'Attritable forward, remote or mobile nodes that extend sensing, cueing, relay and selected local non-kinetic response functions.',
    ARDID:'Coordinated deception and perception shaping that creates false signatures, alternate cues and ambiguity before target commitment.'
  };
  const published=['URCE','GADIR','ATALA','ALANO','ARDID'];
  tercioSection.querySelectorAll('.layer-card').forEach(card=>{
    const name=card.querySelector('h3')?.textContent?.trim();
    if(!name||card.closest('a'))return;
    const description=card.querySelector('p');
    if(description&&descriptions[name])description.textContent=descriptions[name];
    const link=document.createElement('a');
    link.className='layer-card-link';link.href=routes[name]||'#demonstrators';
    card.replaceWith(link);link.append(card);
    const hint=document.createElement('span');hint.className='card-explore';hint.textContent=published.includes(name)?'Explore system →':'Capability page in development';card.append(hint);
  });
  if(!document.querySelector('.system-concept-visual')){
    const figure=document.createElement('figure');figure.className='container system-concept-visual';
    figure.innerHTML='<img src="assets/visuals/tercio-integrated-concept.jpg" alt="Concept render illustrating the interaction of TERCIO survivability capabilities" width="1439" height="810" loading="lazy"><figcaption class="concept-caption">Integrated architecture concept — not a fielded configuration<span>Illustrative interaction of signature management, warning, distributed geometry, local response and deception.</span></figcaption>';
    layerGrid?.after(figure);
  }
}

const demonstrators=document.querySelector('#demonstrators');
if(demonstrators&&!demonstrators.dataset.expanded){
  demonstrators.dataset.expanded='true';
  const pathways=[
    {layer:'L0 / URCE',title:'Textile Coupon Programme',description:'Compare candidate textile structures and surface treatments against a baseline garment under controlled LWIR, comfort and durability conditions.',entry:'Qualified textile or materials partner, controlled LWIR test access and an agreed human-factors plan.',page:'urce.html#mvp',next:['Garment Integration Article','Wearability & Field-Use Pilot']},
    {layer:'L1 / GADIR',title:'GADIR-TB Position-Screen Programme',description:'Evaluate passive skins, standoff distances, air gaps, spacers and ventilation arrangements against uncovered and baseline-camouflage controls.',entry:'Qualified materials or structures partner, controlled LWIR test access and an agreed reference configuration.',page:'gadir.html#mvp',next:['GADIR-TB 1 m² Panel','Position-Scale TB Demonstrator','GADIR-FS research track']},
    {layer:'L2 / ATALA',title:'Local Early-Warning Breadboard',description:'Test one agreed threat set using a deliberately bounded sensor combination, local processing and a human-centred alert interface.',entry:'User-defined threat set, sensor and BOM trade, representative data or test access, and an agreed nuisance-alert measure.',page:'atala.html#mvp',next:['Cooperative Cueing Pair','Squad Warning Pilot','Multisensor growth path']},
    {layer:'L3 / ALANO',title:'ALANO Forward Mission Node',description:'Test whether a common-core forward, remote or mobile node creates useful sensing, relay or local-response geometry in one agreed deployment scenario.',entry:'Defined mission configuration, stable node interfaces, selected mounting concept and a measurable geometry or response test question.',page:'alano.html#mvp',next:['ALANO-S Sense','ALANO-R Relay','ALANO-E Effect','ALANO-H Hybrid','Vehicle / UGV / UAV mounting track']},
    {layer:'L4 / ARDID',title:'Controlled Deception Experiment',description:'Compare baseline observation with one bounded false or alternate cue to assess changes in attention, classification or selected aim point.',entry:'Approved test authority, defined observation method, safety review, controlled cueing source and independent assessment plan.',page:'ardid.html#mvp',next:['Alternate Aim-Point Experiment','Multi-Node Deception Pattern','Mobile / Aerial decoy growth path']}
  ];
  const grid=demonstrators.querySelector('.mvp-grid');
  if(grid){
    grid.classList.add('mvp-pathways-grid');
    grid.innerHTML='';
    pathways.forEach(pathway=>{
      const card=document.createElement('a');
      card.className='mvp-card mvp-pathway-card';
      card.href=pathway.page;
      card.innerHTML=`<span>${pathway.layer}</span><h3>${pathway.title}</h3><p>${pathway.description}</p><small><strong>ENTRY CONDITION</strong>${pathway.entry}</small><div class="mvp-pathway-next"><b>FOLLOW-ON PATH</b>${pathway.next.map(item=>`<span>${item}</span>`).join('')}</div><em>View candidate MVP pathway →</em>`;
      grid.append(card);
    });
  }
  const headCopy=demonstrators.querySelector('.demonstrators-head>div:last-child');
  if(headCopy)headCopy.innerHTML='<p>Each TERCIO capability can mature through a bounded candidate MVP with a defined question, entry condition and evidence route. The cards below show the first practical demonstrator for each capability and the principal follow-on steps.</p><p>A successful MVP matures only the demonstrated function. It does not validate the complete subsystem or the integrated TERCIO architecture.</p>';
}
