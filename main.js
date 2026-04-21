const BASE = './images/';
const characters = [
  { id:'cinnamoroll',  name:'Cinnamoroll',       img:BASE+'Cinnamoroll.png',        color:'#d0e4f8', trait:'Curious & Sweet',   personality:'Dreamy',      spirit:'Friendship',   tags:['quiet moments','dreaming','comfort'],    mood:4, level:9,  desc:'Fluffy, cloud-like and dreamy — always floating above reality.' },
  { id:'kuromi',       name:'Kuromi',             img:BASE+'kuromi.png',             color:'#e8d0f0', trait:'Edgy & Cool',       personality:'Rebellious',  spirit:'Mischief',     tags:['edge','attitude','fun'],                mood:3, level:5,  desc:'A little punk with a secret sweet heart underneath.' },
  { id:'mymelody',     name:'My Melody',          img:BASE+'melody.png',             color:'#f8d8e8', trait:'Gentle & Caring',   personality:'Tender',      spirit:'Kindness',     tags:['tenderness','roses','softness'],         mood:5, level:5,  desc:'Pink-hooded sweetness — the gentlest soul in any forest.' },
  { id:'pompompurin',  name:'Pompompurin',        img:BASE+'pompompurin.png',        color:'#f8e8a0', trait:'Lazy & Content',    personality:'Cheerful',    spirit:'Contentment',  tags:['lazy days','pudding','peace'],           mood:4, level:10, desc:'The golden retriever who embodies the art of doing nothing.' },
  { id:'twinstars',    name:'Little Twin Stars',  img:BASE+'Little Twin Stars.png',  color:'#e0d0f8', trait:'Magical & Paired',  personality:'Whimsical',   spirit:'Wonder',       tags:['magic','stars','wonder'],               mood:5, level:0,  desc:'Celestial siblings drifting through a pastel cosmos.' },
  { id:'keroppi',      name:'Keroppi',            img:BASE+'Keroppi.png',            color:'#c8e8c8', trait:'Lively & Active',   personality:'Energetic',   spirit:'Joy',          tags:['play','rain','energy'],                 mood:4, level:0,  desc:'The happiest frog who finds songs in every puddle.' },
  { id:'badtzmaru',    name:'Badtz-Maru',         img:BASE+'Badtz Maru.png',         color:'#d0d0e8', trait:'Sarcastic & Sly',   personality:'Mischievous', spirit:'Attitude',     tags:['cool','mischief','dark humor'],          mood:3, level:2,  desc:'The spiky penguin who turned cynicism into a lifestyle.' },
  { id:'pochacco',     name:'Pochacco',           img:BASE+'pochacco.png',           color:'#d8e8f8', trait:'Sporty & Bright',   personality:'Athletic',    spirit:'Adventure',    tags:['sport','freedom','movement'],            mood:4, level:10, desc:'Always running, always smiling — a white dog chasing sunshine.' },
  { id:'hangyodon',    name:'Hangyodon',          img:BASE+'Hangyodon.png',          color:'#b8dce8', trait:'Unique & Quirky',   personality:'Calm',        spirit:'Patience',     tags:['ocean','calm','depth'],                 mood:3, level:1,  desc:'A fish in a bow tie, navigating life with serene grace.' },
  { id:'pekkle',       name:'Pekkle',             img:BASE+'Pekkle.png',             color:'#c8e8d8', trait:'Playful & Bright',  personality:'Cheerful',    spirit:'Laughter',     tags:['dance','fun','color'],                  mood:4, level:3,  desc:'The dancing duck who proves joy needs no reason.' },
  { id:'gudetama',     name:'Gudetama',           img:BASE+'Gudetama.png',           color:'#f8f0a0', trait:'Unmotivated',       personality:'Resigned',    spirit:'Rest',         tags:['rest','surrender','peace'],             mood:2, level:0,  desc:'Profound wisdom wrapped in a lazy yolk: nothing matters, nap.' },
  { id:'mysweetpiano', name:'My Sweet Piano',     img:BASE+'My Sweet Piano.png',     color:'#f0d8e8', trait:'Musical & Soft',    personality:'Gentle',      spirit:'Harmony',      tags:['music','calm','melody'],                mood:4, level:10, desc:'A lamb who hears melodies in everything, even the wind.' },
  { id:'chococat',     name:'Chococat',           img:BASE+'Chococat.png',           color:'#d8c8e8', trait:'Curious & Clever',  personality:'Witty',       spirit:'Curiosity',    tags:['mystery','cleverness','play'],           mood:3, level:10, desc:'Dark and curious — the cat who always asks the next question.' },
  { id:'kuririn',      name:'Kuririn',            img:BASE+'kuririn.png',            color:'#f8d0d8', trait:'Classic & Iconic',  personality:'Friendly',    spirit:'Love',         tags:['friendship','nostalgia','warmth'],       mood:5, level:10, desc:'A beloved classic — radiating warmth and unconditional love.' },
];

const emotionMap = {
  calm:         { chars:['cinnamoroll','gudetama','hangyodon','mysweetpiano'], msg:'For quiet drifting and gentle nothings.' },
  playful:      { chars:['keroppi','pochacco','kuromi','chococat','badtzmaru'], msg:'For laughter that sneaks up and stays.' },
  warm:         { chars:['kuririn','mymelody','pekkle','pompompurin'], msg:'For the soft ache of being truly seen.' },
  dreamy:       { chars:['twinstars','mysweetpiano','cinnamoroll'], msg:'For stargazing and half-formed wishes.' },
  sophisticated:{ chars:['chococat','hangyodon','kuririn'], msg:'For elegance in ordinary moments.' },
};

function generateMessage(collected) {
  const ids = collected.map(c=>c.id);
  const allTags = collected.flatMap(c=>c.tags);
  const uniqueTags = [...new Set(allTags)].slice(0,4);
  
  if (ids.includes('gudetama') && ids.includes('cinnamoroll')) return { msg:'A small moment of softness.', sub:'Float gently. Do as little as you need.' };
  if (ids.includes('kuririn') && ids.includes('mymelody')) return { msg:'For comfort and quiet moments.', sub:'Surrounded by kindness, you are exactly enough.' };
  if (ids.includes('kuromi')) return { msg:'Sweet on the outside, spicy within.', sub:'The most interesting gifts have layers.' };
  if (ids.includes('badtzmaru')) return { msg:'Coolly wrapped, warmly meant.', sub:'Sometimes attitude is just love in disguise.' };
  if (ids.length === 1) return { msg:'One is all you need sometimes.', sub:'Singular focus, complete feeling.' };
  
  const hasDreamy = ids.some(i=>['cinnamoroll','twinstars','mysweetpiano'].includes(i));
  const hasPlayful = ids.some(i=>['keroppi','pochacco','kuromi','badtzmaru'].includes(i));
  const hasWarm = ids.some(i=>['kuririn','mymelody','pekkle','pompompurin'].includes(i));
  
  if (hasDreamy && hasPlayful) return { msg:'Dreaming out loud, laughing softly.', sub:'The best feelings exist between sleep and dancing.' };
  if (hasWarm && hasDreamy) return { msg:'Warmth wrapped in a daydream.', sub:'Hold this quietly, like a letter you keep rereading.' };
  if (hasWarm) return { msg:'A gift made entirely of warmth.', sub:'Some things are given, not earned. This is one of them.' };
  
  return { msg:'A constellation of feelings.', sub:'Whatever you needed — it\'s in here.' };
}

let collected = [];
let stageChar = null;
let dragging = null;
let dragFrom = null;
let mouseX = 0, mouseY = 0;
let ghostX = 0, ghostY = 0;
const MAX = 5;
const cursor = document.getElementById('cursor');
const ghost = document.getElementById('drag-ghost');
const ghostInner = document.getElementById('ghost-inner');

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = e.clientX+'px';
  cursor.style.top = e.clientY+'px';
  
  if (dragging) {
    ghostX += (mouseX - ghostX) * 0.6;
    ghostY += (mouseY - ghostY) * 0.6;
    ghost.style.left = mouseX + 'px';
    ghost.style.top = mouseY + 'px';
    checkProximity(e);
  }
});

function checkProximity(e) {
  // Gift box proximity — lid peeks
  const boxEl = document.getElementById('gift-box-container');
  const boxRect = boxEl.getBoundingClientRect();
  const boxCX = boxRect.left + boxRect.width/2;
  const boxCY = boxRect.top + boxRect.height/2;
  const distBox = Math.hypot(e.clientX-boxCX, e.clientY-boxCY);

  if (distBox < 120) {
    boxEl.classList.add('drag-near');
    document.getElementById('iso-lid-group').classList.add('peek');
  } else {
    boxEl.classList.remove('drag-near');
    document.getElementById('iso-lid-group').classList.remove('peek');
  }
}

const dock = document.getElementById('dock');
const track = document.getElementById('dock-track');

function buildDockItems(container) {
  characters.forEach((ch, i) => {
    const item = document.createElement('div');
    item.className = 'dock-item';
    item.dataset.id = ch.id;
    item.innerHTML = `
      <div class="dock-circle" style="background:linear-gradient(135deg,${ch.color}88,${ch.color}44);">
        <img src="${ch.img}" alt="${ch.name}">
      </div>
      <div class="dock-name">${ch.name}</div>
    `;
    const circ = item.querySelector('.dock-circle');
    const anims = ['dockFloat1','dockFloat2','dockFloat3'];
    circ.style.animation = `${anims[i%3]} ${2.2+i*0.18}s ease-in-out infinite`;
    item.addEventListener('mousedown', e => startDrag(e, ch, item));
    item.addEventListener('mouseenter', () => { cursor.classList.add('grab'); pauseScroll(); });
    item.addEventListener('mouseleave', () => { cursor.classList.remove('grab'); resumeScroll(); });
    container.appendChild(item);
  });
}

buildDockItems(track);
const clone = track.cloneNode(true);
clone.querySelectorAll('.dock-item').forEach((item, i) => {
  const ch = characters[i % characters.length];
  item.addEventListener('mousedown', e => startDrag(e, ch, item));
  item.addEventListener('mouseenter', () => { cursor.classList.add('grab'); pauseScroll(); });
  item.addEventListener('mouseleave', () => { cursor.classList.remove('grab'); resumeScroll(); });
});
dock.appendChild(clone);

let scrollX = 0;
let scrollSpeed = 0.6;
let scrollPaused = false;
let rafId;
const singleWidth = () => track.scrollWidth + 18;

function animateScroll() {
  if (!scrollPaused) {
    scrollX += scrollSpeed;
    if (scrollX >= singleWidth()) scrollX -= singleWidth();
    track.style.transform = `translateX(${-scrollX}px)`;
    clone.style.transform = `translateX(${-scrollX}px)`;
    // Reposition clone right after track
    clone.style.position = 'absolute';
    clone.style.left = singleWidth() + 'px';
    track.style.position = 'relative';
  }
  rafId = requestAnimationFrame(animateScroll);
}

dock.style.position = 'relative';
dock.style.overflow = 'hidden';
track.style.position = 'absolute';
track.style.left = '0';
clone.style.position = 'absolute';

function startScrollAnim() {
  function step() {
    if (!scrollPaused) {
      scrollX += scrollSpeed;
      const sw = track.scrollWidth + 18;
      if (scrollX >= sw) scrollX -= sw;
      track.style.transform = `translateX(${-scrollX}px)`;
      clone.style.left = (track.scrollWidth + 18 - scrollX) + 'px';
    }
    rafId = requestAnimationFrame(step);
  }
  setTimeout(() => {
    clone.style.left = (track.scrollWidth + 18) + 'px';
    step();
  }, 500);
}
startScrollAnim();

function pauseScroll() { scrollPaused = true; }
function resumeScroll() { scrollPaused = false; }

let dockDragScrolling = false, dockStartX2 = 0, dockScrollXAtStart = 0;
dock.addEventListener('mousedown', e => {
  if (e.target.closest('.dock-item')) return;
  dockDragScrolling = true;
  dockStartX2 = e.clientX;
  dockScrollXAtStart = scrollX;
  pauseScroll();
});
document.addEventListener('mouseup', () => {
  if (dockDragScrolling) { dockDragScrolling = false; resumeScroll(); }
});
document.addEventListener('mousemove', e => {
  if (!dockDragScrolling) return;
  const dx = dockStartX2 - e.clientX;
  scrollX = dockScrollXAtStart + dx;
});

function toggleAbout() {
  document.getElementById('about-overlay').classList.toggle('open');
}
function closeAbout(e) {
  if (!e || e.target === document.getElementById('about-overlay') || e.currentTarget === document.getElementById('about-close')) {
    document.getElementById('about-overlay').classList.remove('open');
  }
}
document.getElementById('about-btn').addEventListener('mouseenter', () => cursor.classList.add('grab'));
document.getElementById('about-btn').addEventListener('mouseleave', () => cursor.classList.remove('grab'));
document.getElementById('about-close').addEventListener('mouseenter', () => cursor.classList.add('grab'));
document.getElementById('about-close').addEventListener('mouseleave', () => cursor.classList.remove('grab'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAbout();
});

setTimeout(() => {
  const defaultChar = characters.find(c=>c.id==='cinnamoroll');
  updateCharCard(defaultChar);
  document.getElementById('char-card').classList.add('visible');
}, 600);


function startDrag(e, ch, fromEl) {
  e.preventDefault();
  dragging = ch;
  dragFrom = fromEl;
  cursor.classList.remove('grab');
  cursor.classList.add('grabbing');
  ghostInner.innerHTML = `<img src="${ch.img}" alt="${ch.name}" style="width:52px;height:52px;object-fit:contain;">`;
  ghostInner.style.background = `linear-gradient(135deg, ${ch.color}cc, ${ch.color}66)`;
  ghost.style.display = 'block';
  ghost.style.left = e.clientX+'px';
  ghost.style.top = e.clientY+'px';
  // Random slight rotation
  const rot = (Math.random()*6-3).toFixed(1);
  ghost.querySelector('.ghost-circle').style.transform = `rotate(${rot}deg) scale(1.15)`;
  playSound('grab');
}

document.addEventListener('mouseup', e => {
  if (!dragging) return;
  cursor.classList.remove('grabbing');
  cursor.classList.add('grab');
  ghost.style.display = 'none';
  document.getElementById('iso-lid-group').classList.remove('peek');
  document.getElementById('gift-box-container').classList.remove('drag-near');
  
  const stageRect = document.getElementById('globe-dome').getBoundingClientRect();
  const stCX = stageRect.left + stageRect.width/2;
  const stCY = stageRect.top + stageRect.height/2;
  const distStage = Math.hypot(e.clientX-stCX, e.clientY-stCY);
  
  const boxRect = document.getElementById('gift-box-container').getBoundingClientRect();
  const boxCX = boxRect.left + boxRect.width/2;
  const boxCY = boxRect.top + boxRect.height/2;
  const distBox = Math.hypot(e.clientX-boxCX, e.clientY-boxCY);
  
  if (distStage < stageRect.width / 2 + 20) {
    dropOnStage(dragging, e.clientX, e.clientY);
  } else if (distBox < 110) {
    dropInBox(dragging, e.clientX, e.clientY);
  }
  
  dragging = null;
  dragFrom = null;
  setTimeout(() => cursor.classList.remove('grab'), 200);
});

function dropOnStage(ch, x, y) {
  stageChar = ch;
  document.getElementById('stage-char-display').innerHTML = `<img src="${ch.img}" alt="${ch.name}" style="width:90px;height:90px;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(74,55,40,0.15));">`;
  document.getElementById('stage-char-display').style.fontSize = '';
  document.getElementById('stage-hint').classList.add('hidden');
  
  updateCharCard(ch);
  spawnRipple(x, y, 'stage');
  spawnParticles(x, y, ch.color);
  playSound('snap');
}

function updateCharCard(ch) {
  const card = document.getElementById('char-card');
  card.classList.remove('visible');
  setTimeout(() => {
    document.getElementById('card-char-name').textContent = ch.name.toUpperCase();
    document.getElementById('card-big-char').innerHTML = `<img src="${ch.img}" alt="${ch.name}" style="width:80px;height:80px;object-fit:contain;">`;
    document.getElementById('card-description').textContent = ch.desc;
    document.getElementById('card-stat-char').textContent = ch.trait;
    document.getElementById('card-stat-level').textContent = `Level ${ch.level}/10`;
    document.getElementById('card-stat-personality').textContent = ch.personality;
    document.getElementById('card-stat-spirit').textContent = ch.spirit + ' ♡';
    const stars = '★'.repeat(ch.mood) + '☆'.repeat(5-ch.mood);
    document.getElementById('card-stars').textContent = stars;
    const tags = ch.tags;
    for (let i=0;i<3;i++) {
      const el = document.getElementById('tag-'+i);
      if (el) { el.textContent = tags[i]||''; el.style.display = tags[i]?'':'none'; }
    }
    card.classList.add('visible');
  }, 150);
}

function dropInBox(ch, x, y) {
  if (collected.length >= MAX) { shakeBox(); showOverflow(); return; }
  if (collected.find(c=>c.id===ch.id)) { shakeBox(); return; }

  collected.push(ch);
  spawnRipple(x, y, 'box');
  spawnParticles(x, y, ch.color);
  playSound('drop');

  const lid = document.getElementById('iso-lid-group');
  lid.classList.remove('peek');
  lid.classList.add('open');

  const boxItemsSvg = document.getElementById('box-items-svg');
  const offsetX = (collected.length - 1) * 22 - (Math.min(collected.length,4)-1)*11;
  const fo = document.createElementNS('http://www.w3.org/2000/svg','image');
  fo.setAttribute('href', ch.img);
  fo.setAttribute('width', '26'); fo.setAttribute('height', '26');
  fo.setAttribute('x', String(offsetX - 13)); fo.setAttribute('y', '-36');
  fo.style.animation = 'itemLand 0.5s cubic-bezier(0.34,1.56,0.64,1) both';
  fo.style.filter = 'drop-shadow(0 2px 4px rgba(200,100,130,0.35))';
  boxItemsSvg.appendChild(fo);

  setTimeout(() => { lid.classList.remove('open'); }, 900);

  const boxEl = document.getElementById('gift-box-container');
  setTimeout(() => {
    boxEl.style.transition = 'transform 0.12s';
    boxEl.style.transform = 'scaleY(0.94)';
    setTimeout(() => { boxEl.style.transform = 'scaleY(1.04)'; }, 120);
    setTimeout(() => { boxEl.style.transform = ''; boxEl.style.transition = ''; }, 300);
  }, 800);

  document.getElementById('item-counter').textContent = `${collected.length} / ${MAX} items`;
  if (collected.length >= 1) document.getElementById('open-box-btn').classList.add('visible');
  if (!stageChar) dropOnStage(ch, x, y);
}

function shakeBox() {
  const boxEl = document.getElementById('gift-box-container');
  boxEl.classList.add('shake');
  setTimeout(() => boxEl.classList.remove('shake'), 500);
}

function showOverflow() {
  const msg = document.getElementById('overflow-msg');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 2000);
}

function openGiftBox() {
  if (collected.length === 0) return;
  const modal = document.getElementById('modal-overlay');
  modal.classList.add('open');
  
  const charsInside = document.getElementById('modal-chars-inside');
  charsInside.innerHTML = collected.map((c,i) => `<span class="modal-char" style="animation-delay:${i*0.1}s"><img src="${c.img}" alt="${c.name}" style="width:40px;height:40px;object-fit:contain;"></span>`).join('');
  
  const { msg, sub } = generateMessage(collected);
  document.getElementById('modal-message').textContent = msg;
  document.getElementById('modal-submessage').textContent = sub;
  
  const allTags = [...new Set(collected.flatMap(c=>c.tags))].slice(0,4);
  document.getElementById('modal-tags').innerHTML = allTags.map(t=>`<span class="modal-tag">${t}</span>`).join('');
  
  playSound('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function surpriseMe() {
  const shuffled = [...characters].sort(() => Math.random()-0.5);
  const count = Math.floor(Math.random()*3)+2;
  const picks = shuffled.slice(0,count);
  
  collected = [];
  document.getElementById('box-items').innerHTML = '';
  document.getElementById('item-counter').textContent = '0 / 5 items';
  document.getElementById('open-box-btn').classList.remove('visible');
  
  picks.forEach((ch, i) => {
    setTimeout(() => {
      const boxRect = document.getElementById('gift-box-container').getBoundingClientRect();
      dropInBox(ch, boxRect.left + boxRect.width/2, boxRect.top + boxRect.height/2);
      if (i === picks.length-1) {
        setTimeout(() => openGiftBox(), 600);
      }
    }, i*300);
  });
  
  dropOnStage(picks[0], window.innerWidth/2, window.innerHeight/2);
}

function spawnRipple(x, y, type) {
  const r = document.createElement('div');
  r.className = 'drop-ripple';
  r.style.left = x+'px';
  r.style.top = y+'px';
  if (type==='stage') r.style.borderColor = 'rgba(212,168,64,0.6)';
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 900);
}

function spawnParticles(x, y, color) {
  for (let i=0;i<8;i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const angle = (i/8)*Math.PI*2;
    const dist = 40+Math.random()*40;
    p.style.cssText = `left:${x}px;top:${y}px;width:6px;height:6px;background:${color};--px:${Math.cos(angle)*dist}px;--py:${Math.sin(angle)*dist}px;animation-delay:${Math.random()*0.1}s;animation-duration:${0.6+Math.random()*0.3}s;`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }
}

let audioCtx;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  return audioCtx;
}
function playSound(type) {
  try {
    const ctx = getAudio();
    if (type==='grab') {
      const buf = ctx.createBuffer(1,ctx.sampleRate*0.15,ctx.sampleRate);
      const d = buf.getChannelData(0);
      for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*0.02*Math.exp(-i/d.length*5);
      const s=ctx.createBufferSource(); s.buffer=buf;
      const g=ctx.createGain(); g.gain.value=0.3;
      s.connect(g); g.connect(ctx.destination); s.start();
    } else if (type==='snap') {
      const o=ctx.createOscillator();
      const g=ctx.createGain();
      o.type='sine'; o.frequency.setValueAtTime(880,ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(1320,ctx.currentTime+0.08);
      g.gain.setValueAtTime(0.2,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.5);
      o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime+0.5);
    } else if (type==='drop') {
      const o=ctx.createOscillator();
      const g=ctx.createGain();
      o.type='sine'; o.frequency.setValueAtTime(523,ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(659,ctx.currentTime+0.06);
      g.gain.setValueAtTime(0.18,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.8);
      o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime+0.8);
    } else if (type==='open') {
      [523,659,784,1047].forEach((freq,i) => {
        const o=ctx.createOscillator();
        const g=ctx.createGain();
        o.type='sine'; o.frequency.value=freq;
        g.gain.setValueAtTime(0,ctx.currentTime+i*0.12);
        g.gain.linearRampToValueAtTime(0.15,ctx.currentTime+i*0.12+0.05);
        g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.12+0.8);
        o.connect(g); g.connect(ctx.destination);
        o.start(ctx.currentTime+i*0.12); o.stop(ctx.currentTime+i*0.12+0.9);
      });
    }
  } catch(e){}
}

document.querySelectorAll('#gift-box-container,#open-box-btn,#surprise-btn,#modal-close').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grab'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grab'));
});

const isMobile = () => {
  const hasTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  const isNarrow = window.innerWidth < 1200;
  const ua = navigator.userAgent;
  const isMobileUA = /iPhone|iPad|iPod|Android/i.test(ua);
  return hasTouch && (isNarrow || isMobileUA);
};

function initMobile() {
  if (!isMobile()) return;

  document.body.classList.add('is-mobile');

  document.getElementById('stage-char-display').textContent = '';

  document.getElementById('mobile-screen-1').style.display = 'flex';
  document.getElementById('mobile-screen-2').style.display = 'flex';
  document.getElementById('mobile-scroll-hint').style.display = 'flex';

  const s1 = document.getElementById('mobile-screen-1');
  s1.appendChild(document.getElementById('char-card'));
  s1.appendChild(document.getElementById('stage-area'));

  const grid = document.getElementById('mobile-char-grid');
  grid.innerHTML = '';
  characters.forEach(ch => {
    const item = document.createElement('div');
    item.className = 'mobile-char-item';
    item.dataset.id = ch.id;
    item.innerHTML = `
      <div class="mobile-char-circle" style="background:linear-gradient(135deg,${ch.color}88,${ch.color}44);" id="mcc-${ch.id}">
        <img src="${ch.img}" alt="${ch.name}">
      </div>
      <div class="mobile-char-name">${ch.name.split(' ')[0]}</div>
    `;
    item.addEventListener('click', () => mobileSelectChar(ch, item));
    grid.appendChild(item);
  });

  const mbox = document.getElementById('mobile-box-container');
  mbox.addEventListener('dragover', e => { e.preventDefault(); document.getElementById('mobile-iso-lid')?.classList.add('peek'); });
  mbox.addEventListener('dragleave', () => { document.getElementById('mobile-iso-lid')?.classList.remove('peek'); });
  mbox.addEventListener('drop', e => {
    e.preventDefault();
    document.getElementById('mobile-iso-lid')?.classList.remove('peek');
    const id = e.dataTransfer.getData('charId');
    const ch = characters.find(c => c.id === id);
    if (ch) mobileDropInBox(ch);
  });

  grid.querySelectorAll('.mobile-char-item').forEach((item, i) => {
    const ch = characters[i];
    item.draggable = true;
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('charId', ch.id);
      item.style.opacity = '0.6';
    });
    item.addEventListener('dragend', () => { item.style.opacity = ''; });
  });

  let touchDragging = null;
  let touchGhost = null;
  grid.querySelectorAll('.mobile-char-item').forEach((item, i) => {
    const ch = characters[i];
    item.addEventListener('touchstart', e => {
      touchDragging = ch;
      touchGhost = document.createElement('div');
      touchGhost.style.cssText = `position:fixed;z-index:9999;pointer-events:none;width:58px;height:58px;border-radius:50%;background:${ch.color}88;border:2px solid rgba(212,168,64,0.6);display:flex;align-items:center;justify-content:center;`;
      touchGhost.innerHTML = `<img src="${ch.img}" style="width:40px;height:40px;object-fit:contain;">`;
      document.body.appendChild(touchGhost);
    }, { passive: true });
    item.addEventListener('touchmove', e => {
      if (!touchGhost) return;
      const t = e.touches[0];
      touchGhost.style.left = (t.clientX - 29) + 'px';
      touchGhost.style.top = (t.clientY - 29) + 'px';
      // Highlight box if over it
      const mboxRect = document.getElementById('mobile-box-container').getBoundingClientRect();
      const over = t.clientX >= mboxRect.left && t.clientX <= mboxRect.right && t.clientY >= mboxRect.top && t.clientY <= mboxRect.bottom;
      const mobileLid = document.getElementById('mobile-iso-lid');
      if (mobileLid) mobileLid.classList.toggle('peek', over);
    }, { passive: true });
    item.addEventListener('touchend', e => {
      if (!touchDragging || !touchGhost) return;
      touchGhost.remove(); touchGhost = null;
      const mobileLid2 = document.getElementById('mobile-iso-lid');
      if (mobileLid2) mobileLid2.classList.remove('peek');
      const t2 = e.changedTouches[0];
      const mboxRect2 = document.getElementById('mobile-box-container').getBoundingClientRect();
      const over = t2.clientX >= mboxRect2.left && t2.clientX <= mboxRect2.right && t2.clientY >= mboxRect2.top && t2.clientY <= mboxRect2.bottom;
      if (over) mobileDropInBox(touchDragging);
      touchDragging = null;
    });
  });

  const hint = document.getElementById('mobile-scroll-hint');
  const screen2 = document.getElementById('mobile-screen-2');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      hint.style.opacity = entry.isIntersecting ? '0' : '1';
    });
  }, { threshold: 0.2 });
  observer.observe(screen2);
}

let mobileCollected = [];
let mobileStageChar = null;

function mobileSelectChar(ch, item) {
  mobileStageChar = ch;
  document.getElementById('app').scrollTo({ top: 0, behavior: 'smooth' });
  updateCharCard(ch);
  document.getElementById('char-card').classList.add('visible');
  document.getElementById('stage-char-display').innerHTML = `<img src="${ch.img}" alt="${ch.name}" style="width:66px;height:66px;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(74,55,40,0.15));">`;
  document.getElementById('stage-hint').classList.add('hidden');
  document.querySelectorAll('.mobile-char-circle').forEach(c => c.classList.remove('selected'));
  item.querySelector('.mobile-char-circle').classList.add('selected');
  playSound('snap');
}

function mobileDropInBox(ch) {
  if (mobileCollected.length >= MAX) { shakeBox(); showOverflow(); return; }
  if (mobileCollected.find(c => c.id === ch.id)) { shakeBox(); return; }
  mobileCollected.push(ch);
  playSound('drop');

  const lid = document.getElementById('mobile-iso-lid');
  if (lid) {
    lid.classList.add('open');
    setTimeout(() => lid.classList.remove('open'), 900);
  }

  const svgItems = document.getElementById('mobile-box-items-svg');
  if (svgItems) {
    const offsetX = (mobileCollected.length - 1) * 18 - (Math.min(mobileCollected.length,4)-1)*9;
    const img = document.createElementNS('http://www.w3.org/2000/svg','image');
    img.setAttribute('href', ch.img);
    img.setAttribute('width', '22'); img.setAttribute('height', '22');
    img.setAttribute('x', String(offsetX - 11)); img.setAttribute('y', '-30');
    img.style.filter = 'drop-shadow(0 2px 4px rgba(200,100,130,0.35))';
    svgItems.appendChild(img);
  }

  const bc = document.getElementById('mobile-box-container');
  bc.style.transition = 'transform 0.12s';
  bc.style.transform = 'scaleY(0.94)';
  setTimeout(() => { bc.style.transform = 'scaleY(1.04)'; }, 120);
  setTimeout(() => { bc.style.transform = ''; bc.style.transition = ''; }, 300);

  document.getElementById('mobile-item-counter').textContent = `${mobileCollected.length} / ${MAX} items`;
  if (mobileCollected.length >= 1) document.getElementById('mobile-open-btn').classList.add('visible');

  const rect = document.getElementById('mobile-box-container').getBoundingClientRect();
  spawnRipple(rect.left + rect.width/2, rect.top + rect.height/2, 'box');
  collected = mobileCollected;
}

function mobileOpenBox() {
  if (mobileCollected.length === 0) return;
  collected = mobileCollected;
  openGiftBox();
}

function shakeBox() {
  const b = document.getElementById('mobile-box-container');
  if (!b) return;
  b.style.animation = 'none';
  b.offsetHeight;
  b.style.animation = 'boxShake 0.4s ease-in-out';
  setTimeout(() => b.style.animation = '', 500);
}

const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes boxShake { 0%,100%{transform:rotate(0)} 20%{transform:rotate(-3deg) scale(1.02)} 40%{transform:rotate(3deg) scale(1.05)} 60%{transform:rotate(-2deg)} 80%{transform:rotate(2deg)} }`;
document.head.appendChild(shakeStyle);

window.addEventListener('load', initMobile);
window.addEventListener('resize', () => {
  if (isMobile()) initMobile();
});

const loadingScreen = document.getElementById('loading-screen');
const lsFill = document.getElementById('ls-fill');
const LS_CIRC = 151;
const LS_HOLD_MS = 1800;
let lsHoldStart = null, lsHoldRaf = null, lsDone = false;

function lsStartHold() {
  if (lsDone) return;
  lsHoldStart = performance.now();
  function tick() {
    const pct = Math.min((performance.now() - lsHoldStart) / LS_HOLD_MS, 1);
    lsFill.style.strokeDashoffset = LS_CIRC * (1 - pct);
    if (pct < 1) { lsHoldRaf = requestAnimationFrame(tick); }
    else { lsTrigger(); }
  }
  lsHoldRaf = requestAnimationFrame(tick);
}

function lsCancelHold() {
  if (lsDone) return;
  if (lsHoldRaf) { cancelAnimationFrame(lsHoldRaf); lsHoldRaf = null; }
  lsFill.style.transition = 'stroke-dashoffset 0.4s ease';
  lsFill.style.strokeDashoffset = LS_CIRC;
  setTimeout(() => lsFill.style.transition = '', 420);
}

function lsTrigger() {
  if (lsDone) return;
  lsDone = true;
  playSound('open');

  const colors = ['#fce8f0','#f0c8d8','#e8d4f8','#d0e8f8','#f8f0c8','#c8f0e0'];
  for (let i = 0; i < 36; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const angle = (i / 36) * Math.PI * 2;
    const dist = 80 + Math.random() * 200;
    const size = 5 + Math.random() * 9;
    p.style.cssText = `left:50%;top:40%;width:${size}px;height:${size}px;background:${colors[i%colors.length]};--px:${Math.cos(angle)*dist}px;--py:${Math.sin(angle)*dist}px;animation-duration:${0.8+Math.random()*0.4}s;`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }

  loadingScreen.classList.add('unwrapping');
  setTimeout(() => {
    loadingScreen.classList.add('done');
    setTimeout(() => { loadingScreen.style.display = 'none'; }, 700);
  }, 700);
}

document.addEventListener('keydown', e => {
  if ((e.code === 'Space' || e.key === ' ') && !e.repeat) { e.preventDefault(); lsStartHold(); }
});
document.addEventListener('keyup', e => {
  if (e.code === 'Space' || e.key === ' ') lsCancelHold();
});
loadingScreen.addEventListener('mousedown', lsStartHold);
loadingScreen.addEventListener('mouseup', lsCancelHold);
loadingScreen.addEventListener('mouseleave', lsCancelHold);
loadingScreen.addEventListener('touchstart', e => { e.preventDefault(); lsStartHold(); });
loadingScreen.addEventListener('touchend', lsCancelHold);

