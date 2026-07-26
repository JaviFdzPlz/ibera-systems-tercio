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
    if(!published.includes(name))link.setAttribute('aria-label',`${name} capability — detailed page in development`);
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
  const pathways={
    URCE:{layer:'L0 / URCE',title:'Passive human-signature demonstrators',intro:'A staged materials-to-garment pathway intended to test source-level signature conditioning without claiming invisibility or operational effectiveness.',page:'urce.html',items:[['MVP 1','Textile Coupon Programme','Compare candidate textile structures and surface treatments against a baseline garment under controlled LWIR, comfort and durability conditions.'],['MVP 2','Garment Integration Article','Integrate shortlisted materials into a bounded wearable panel or garment zone to assess seams, load-bearing interaction, ventilation and movement.'],['MVP 3','Wearability & Field-Use Pilot','Evaluate donning, mobility, maintenance, abrasion, moisture and user burden before any operationally representative garment is considered.']]},
    GADIR:{layer:'L1 / GADIR',title:'Passive position-survivability demonstrators',intro:'The current lead pathway begins with controlled material evidence and grows toward representative position-scale assemblies.',page:'gadir.html',items:[['MVP 1','GADIR-TB Coupons','Screen candidate skins, air gaps, spacers and ventilation arrangements against uncovered and baseline controls.'],['MVP 2','GADIR-TB 1 m² Panel','Build repeatable panel articles for steady-state, transient, viewing-angle, wind, moisture and handling tests.'],['MVP 3','Position-Scale TB Demonstrator','Assemble a limited position configuration to evaluate installation, repair, visual compatibility and observer detection behaviour.'],['RESEARCH TRACK','GADIR-FS Passive Overhead Article','Investigate non-powered overhead and residual-effect mitigation as a separate, qualification-dependent pathway with no untested protection claims.']]},
    ATALA:{layer:'L2 / ATALA',title:'Local and cooperative warning demonstrators',intro:'A progression from one bounded local-warning question toward cooperative multi-node cueing and later multisensor integration.',page:'atala.html',items:[['MVP 1','Local Warning Breadboard','Test one agreed threat set using a deliberately narrow sensor combination, local processing and a human-centred alert.'],['MVP 2','Cooperative Cueing Pair','Evaluate whether two separated nodes improve confidence or bearing without creating unacceptable link, emissions or false-alert burden.'],['MVP 3','Squad Warning Pilot','Assess cue presentation, trust, nuisance burden, disconnected behaviour and operator response across a small user group.'],['GROWTH','Multisensor ATALA Demonstrator','Introduce additional sensing channels only after the local interface, data model and alert logic are stable.']]},
    ALANO:{layer:'L3 / ALANO',title:'Forward, remote and mobile node demonstrators',intro:'A common-core approach with a limited set of clearly identifiable mission configurations and mounting kits.',page:'alano.html',items:[['MVP 1','ALANO-S Sense Node','Test the geometry value of a forward or off-axis sensing node in representative masking and terrain.'],['MVP 2','ALANO-R Relay Node','Evaluate event-level cue relay, degraded operation, emissions discipline and recovery after link loss.'],['MVP 3','ALANO-E Local Effect Node','Test one bounded, event-driven non-kinetic response function such as visual, thermal, acoustic or smoke-based disruption.'],['MVP 4','ALANO-H Hybrid Node','Combine sensing with relay or one local effect only after the individual functions and interfaces are demonstrated.'],['MOBILITY TRACK','Vehicle / UGV / UAV Mounting Kits','Validate ground, structure, vehicle, robotic and aerial-host interfaces without creating separate electronic families.']]},
    ARDID:{layer:'L4 / ARDID',title:'Deception and perception-shaping demonstrators',intro:'A controlled progression from one measurable deception effect toward coordinated distributed patterns.',page:'ardid.html',items:[['MVP 1','Single-Signature Deception Trial','Compare baseline observation with one controlled false thermal, visual, acoustic or activity cue.'],['MVP 2','Alternate Aim-Point Experiment','Evaluate whether a bounded pattern changes attention allocation, classification confidence or selected aim point.'],['MVP 3','Multi-Node Deception Pattern','Coordinate several dedicated assets or ARDID-tasked ALANO modules under logged timing and safe stop conditions.'],['GROWTH','Mobile / Aerial Decoy Demonstrator','Examine repositionable or airborne decoy patterns only after single-pattern credibility and control discipline are established.']]}
  };
  const grid=demonstrators.querySelector('.mvp-grid');
  if(grid){
    grid.classList.add('mvp-pathways-grid');grid.innerHTML='';
    Object.values(pathways).forEach(pathway=>{
      const card=document.createElement('article');card.className='mvp-card mvp-pathway-card';
      card.innerHTML=`<span>${pathway.layer}</span><h3>${pathway.title}</h3><p>${pathway.intro}</p><div class="mvp-pathway-list">${pathway.items.map(item=>`<div class="mvp-pathway-item"><small>${item[0]}</small><strong>${item[1]}</strong><p>${item[2]}</p></div>`).join('')}</div><a class="mvp-pathway-link" href="${pathway.page}">Explore capability pathway →</a>`;
      grid.append(card);
    });
  }
  const headCopy=demonstrators.querySelector('.demonstrators-head>div:last-child');
  if(headCopy)headCopy.innerHTML='<p>Each TERCIO capability can mature through more than one bounded demonstrator. The pathways below separate immediate test articles, later integration steps and growth options so that one successful MVP does not imply maturity of the complete subsystem.</p><p>GADIR-TB remains the current lead candidate, while the other pathways can advance in parallel when the required partner, test authority, safety envelope and evidence route exist.</p>';
}
