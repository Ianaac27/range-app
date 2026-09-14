// ---------- Content ----------
const DRILLS = {
  wallAnkle: {
    id: 'wallAnkle', name: 'Wall Ankle Rock', area: 'Ankle', duration: 90,
    cue: 'Drive the knee over the toe without the heel lifting.',
    steps: [
      'Stand facing a wall, toes a few inches back from it.',
      'Keep your heel flat and drive your knee forward to tap the wall.',
      'Back off slightly, then repeat for the full time, then switch sides.'
    ]
  },
  ankleCircles: {
    id: 'ankleCircles', name: 'Ankle Circles + Calf Stretch', area: 'Ankle', duration: 60,
    cue: 'Move slow enough to feel the edges of the joint.',
    steps: [
      'Lift one foot and trace slow circles with your toes, both directions.',
      'Step that foot back and press the heel down for a standing calf stretch.',
      'Switch sides halfway through.'
    ]
  },
  couchStretch: {
    id: 'couchStretch', name: 'Couch Stretch', area: 'Hip / Quad', duration: 90,
    cue: 'Keep your ribs down and glute squeezed — don\u2019t let your back arch.',
    steps: [
      'Kneel with your back shin against a wall or couch, rear foot up.',
      'Stack your hips over your knee and squeeze the glute on that side.',
      'Hold, breathing steadily, then switch sides.'
    ]
  },
  ninetyNinety: {
    id: 'ninetyNinety', name: '90/90 Hip Switch', area: 'Hip', duration: 90,
    cue: 'Stay tall through the spine as you rotate.',
    steps: [
      'Sit with front leg bent 90°, back leg bent 90° out to the side.',
      'Lean gently over the front shin, then rotate to switch legs without using your hands.',
      'Keep switching side to side for the full time.'
    ]
  },
  pigeon: {
    id: 'pigeon', name: 'Pigeon Stretch', area: 'Hip', duration: 90,
    cue: 'Square your hips to the front rather than letting them twist open.',
    steps: [
      'From all fours, bring one knee forward and angle the shin across the body.',
      'Extend the back leg long and settle your hips toward the floor.',
      'Hold, then switch sides.'
    ]
  },
  thoracicExt: {
    id: 'thoracicExt', name: 'Thoracic Extension Over Roller', area: 'Upper Back', duration: 60,
    cue: 'Lead with your chest, not your neck.',
    steps: [
      'Place a foam roller under your upper back, knees bent, hands behind your head.',
      'Extend backward over the roller, then curl back up.',
      'Move the roller up a notch after 4–5 reps and repeat.'
    ]
  },
  openBook: {
    id: 'openBook', name: 'Open Book Rotation', area: 'Spine', duration: 60,
    cue: 'Keep both knees pinned together as you rotate.',
    steps: [
      'Lie on your side, knees bent 90°, arms stacked out in front.',
      'Rotate your top arm and chest open toward the floor behind you.',
      'Return and repeat, then switch sides.'
    ]
  },
  crossBodyShoulder: {
    id: 'crossBodyShoulder', name: 'Cross-Body Shoulder Stretch', area: 'Shoulder', duration: 60,
    cue: 'Pin the shoulder blade down so the stretch stays in the joint.',
    steps: [
      'Bring one arm across your chest, holding it just above the elbow.',
      'Gently pull it closer while keeping that shoulder relaxed and low.',
      'Hold, then switch sides.'
    ]
  },
  wristStretch: {
    id: 'wristStretch', name: 'Wrist Flexor / Extensor Stretch', area: 'Wrist', duration: 60,
    cue: 'Small range here matters more than force.',
    steps: [
      'Extend one arm, palm up, and gently pull the fingers back with the other hand.',
      'Flip to palm down and gently press the hand toward you.',
      'Switch sides halfway through.'
    ]
  },
  deepSquat: {
    id: 'deepSquat', name: 'Deep Squat Hold', area: 'Hip / Ankle', duration: 90,
    cue: 'Use your elbows to gently press your knees out over your toes.',
    steps: [
      'Lower into the deepest squat you can control, heels down.',
      'Rest your elbows inside your knees and sit tall.',
      'Rock gently side to side, breathing into the stretch.'
    ]
  },
  catCow: {
    id: 'catCow', name: 'Cat-Cow Spinal Wave', area: 'Spine', duration: 60,
    cue: 'Move one vertebra at a time rather than hinging only at the hips.',
    steps: [
      'On all fours, drop your belly and lift your chest and tailbone.',
      'Round your spine up, tucking chin and tailbone.',
      'Flow between the two slowly for the full time.'
    ]
  },
  foamRoll: {
    id: 'foamRoll', name: 'Foam Roll Quads / IT Band', area: 'Legs', duration: 90,
    cue: 'Slow passes find more than fast ones — a couple inches per second.',
    steps: [
      'Prop yourself on your forearms with the roller under your thighs.',
      'Roll slowly from hip to knee, pausing on tender spots for a few breaths.',
      'Shift slightly to cover the outer thigh, then switch sides.'
    ]
  },
  kneeToChest: {
    id: 'kneeToChest', name: 'Knee-to-Chest Stretch', area: 'Low Back', duration: 60,
    cue: 'Keep your lower back flat on the floor, not arched.',
    steps: [
      'Lie on your back, both knees bent, feet flat.',
      'Pull one knee gently toward your chest with both hands.',
      'Hold, then switch legs, then try both knees together.'
    ],
    stopIf: 'Stop if this sends pain, tingling, or numbness down your leg — that\u2019s a sign this direction isn\u2019t the one for you today.'
  },
  figureFourStretch: {
    id: 'figureFourStretch', name: 'Seated Figure-4 (Piriformis) Stretch', area: 'Hip / Glute', duration: 90,
    cue: 'Keep your back tall — the stretch should feel like it\u2019s in the glute, not the low back.',
    steps: [
      'Sit tall in a chair and cross one ankle over the opposite knee.',
      'Hinge forward from the hips, keeping your spine long, until you feel a stretch in the glute.',
      'Hold, then switch sides.'
    ],
    stopIf: 'Stop if you feel sharp pain or pins-and-needles shooting down the leg rather than a stretch in the muscle.'
  },
  sciaticGlide: {
    id: 'sciaticGlide', name: 'Seated Sciatic Nerve Glide', area: 'Nerve Mobility', duration: 60,
    cue: 'This should feel like a mild pull or tingling that eases right when you stop — never sharp.',
    steps: [
      'Sit tall and straighten one knee while flexing your foot up (toes toward you).',
      'At the same time, gently tip your head forward; then reverse — bend the knee and tip your head back.',
      'Move slowly back and forth for the full time, then switch sides.'
    ],
    stopIf: 'Stop immediately if pain sharpens, lingers after you stop, or spreads further down the leg.'
  },
  gluteBridge: {
    id: 'gluteBridge', name: 'Glute Bridge', area: 'Hip / Core', duration: 60,
    cue: 'Push through your heels and squeeze the glutes at the top rather than arching the low back.',
    steps: [
      'Lie on your back, knees bent, feet flat hip-width apart.',
      'Press through your heels to lift your hips until your body is in a straight line.',
      'Lower with control and repeat for the full time.'
    ],
    stopIf: 'Stop if you feel it pinching in the low back instead of working the glutes.'
  },
  proneCobra: {
    id: 'proneCobra', name: 'Prone Press-Up (Gentle Cobra)', area: 'Low Back', duration: 60,
    cue: 'Keep your hips heavy on the floor — this moves through the upper back, not by cranking the low back.',
    steps: [
      'Lie face down, hands under your shoulders.',
      'Press your chest up gently, letting your low back relax, hips staying down.',
      'Lower back down slowly and repeat.'
    ],
    stopIf: 'Stop if leg pain increases as you extend — try Knee-to-Chest instead and see which direction your body prefers.'
  },
  birdDog: {
    id: 'birdDog', name: 'Bird Dog', area: 'Core / Low Back', duration: 60,
    cue: 'Move slowly enough that your hips don\u2019t rock or twist.',
    steps: [
      'Start on all fours, spine neutral.',
      'Extend one arm and the opposite leg straight out, holding briefly.',
      'Return with control and switch sides, keeping your core braced throughout.'
    ]
  }
};

const ROUTINES = [
  { id: 'morning', name: 'Morning Reset', minutes: 8, blurb: 'Wake the spine and hips up before the day starts.',
    drills: ['catCow', 'wallAnkle', 'ninetyNinety', 'openBook'] },
  { id: 'squatPrep', name: 'Pre-Squat Prep', minutes: 6, blurb: 'Open up ankles and hips before loaded squatting.',
    drills: ['deepSquat', 'couchStretch', 'ankleCircles'] },
  { id: 'deskReset', name: 'Desk Break Reset', minutes: 5, blurb: 'Undo an hour of sitting in five minutes.',
    drills: ['thoracicExt', 'wristStretch', 'openBook'] },
  { id: 'fullBody', name: 'Full Body Flow', minutes: 15, blurb: 'A complete pass through every major joint.',
    drills: ['catCow', 'wallAnkle', 'couchStretch', 'ninetyNinety', 'thoracicExt', 'crossBodyShoulder', 'wristStretch'] },
  { id: 'evening', name: 'Evening Wind-down', minutes: 10, blurb: 'Slow, longer holds to close out the day.',
    drills: ['pigeon', 'foamRoll', 'catCow'] },
  { id: 'sciaticRelief', name: 'Hip & Low Back Relief', minutes: 9, blurb: 'A mix of directions and approaches — notice what actually eases your leg pain, and bring that to a PT.', caution: true,
    drills: ['kneeToChest', 'figureFourStretch', 'sciaticGlide', 'gluteBridge', 'proneCobra', 'birdDog'] }
];

const TIPS = [
  { title: 'Mobilize before you stretch', body: 'Warm the joint and move it through its range a few times before holding a static stretch — tissue that hasn\u2019t moved yet resists a static hold.' },
  { title: 'Breathe through the position', body: 'Slow nasal breathing while you hold a stretch tells your nervous system it\u2019s safe to let go of tension. Holding your breath does the opposite.' },
  { title: 'Little and often beats occasional and long', body: 'Ten minutes daily changes tissue faster than one long session on the weekend. Frequency drives adaptation more than duration.' },
  { title: 'Work the end range, not just the middle', body: 'The last few degrees of a range of motion are where most restrictions live. Spend extra time there rather than rushing through it.' },
  { title: 'Load a position once you own it', body: 'Passive flexibility only becomes useful once you can control it under tension — after mobilizing, test the same range with light load or bodyweight.' },
  { title: 'Track tightness, not just soreness', body: 'Note which positions feel restricted before you train, not just which muscles are sore after — restriction is the earlier warning sign.' },
  { title: 'Symmetry matters', body: 'Most people carry a tighter side. Give it the extra set rather than splitting time evenly by default.' },
  { title: 'Pain is a stop sign, discomfort is not', body: 'A stretch should feel like tension or mild discomfort. Sharp, pinching, or radiating pain means back off, not push through.' }
];

// ---------- State ----------
const STORAGE_KEY = 'range-progress-v1';

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completions: {}, streak: 0, lastDate: null };
  } catch { return { completions: {}, streak: 0, lastDate: null }; }
}
function saveState(s) { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
let state = loadState();

function todayKey() { return new Date().toISOString().slice(0, 10); }

function markRoutineDone(routineId) {
  const key = todayKey();
  state.completions[key] = state.completions[key] || [];
  if (!state.completions[key].includes(routineId)) state.completions[key].push(routineId);

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (state.lastDate === key) {
    // already counted today
  } else if (state.lastDate === yesterday) {
    state.streak += 1;
    state.lastDate = key;
  } else {
    state.streak = 1;
    state.lastDate = key;
  }
  saveState(state);
}

function routineForToday() {
  const idx = new Date().getDay() % ROUTINES.length;
  return ROUTINES[idx];
}

// ---------- Rendering ----------
const app = document.getElementById('app');
let route = 'today';

function fmtTime(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function navBar() {
  const items = [
    ['today', 'Today'], ['routines', 'Routines'], ['drills', 'Drills'], ['tips', 'Tips']
  ];
  return `<nav class="tabbar">${items.map(([id, label]) =>
    `<button class="tab ${route === id ? 'active' : ''}" data-nav="${id}">${label}</button>`
  ).join('')}</nav>`;
}

function renderToday() {
  const key = todayKey();
  const doneToday = state.completions[key] || [];
  const rec = routineForToday();
  const isDone = doneToday.includes(rec.id);
  return `
    <header class="hero">
      <p class="eyebrow-free">${new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      <h1>Today's routine</h1>
      <div class="streak">${state.streak > 0 ? `${state.streak} day streak` : 'Start your streak today'}</div>
    </header>
    <section class="today-card">
      <h2>${rec.name}</h2>
      <p class="muted">${rec.blurb}</p>
      <p class="meta">${rec.minutes} min · ${rec.drills.length} drills</p>
      ${isDone
        ? `<div class="done-badge">Completed today</div>`
        : `<button class="btn-primary" data-start="${rec.id}">Start routine</button>`}
    </section>
    <section class="quick-tip">
      <h3>Principle of the day</h3>
      <p>${TIPS[new Date().getDate() % TIPS.length].body}</p>
    </section>
  `;
}

function renderRoutines() {
  return `
    <header class="page-head"><h1>Routines</h1></header>
    <section class="list">
      ${ROUTINES.map(r => `
        <article class="card">
          ${r.caution ? '<span class="tag caution-tag">Read before starting</span>' : ''}
          <h2>${r.name}</h2>
          <p class="muted">${r.blurb}</p>
          <p class="meta">${r.minutes} min · ${r.drills.length} drills</p>
          <button class="btn-secondary" data-start="${r.id}">Start</button>
        </article>
      `).join('')}
    </section>
  `;
}

function renderDrills() {
  return `
    <header class="page-head"><h1>Drill library</h1></header>
    <section class="list">
      ${Object.values(DRILLS).map(d => `
        <article class="card">
          <span class="tag">${d.area}</span>
          <h2>${d.name}</h2>
          <p class="muted">${d.cue}</p>
          <button class="btn-secondary" data-drill="${d.id}">View steps</button>
        </article>
      `).join('')}
    </section>
  `;
}

function renderTips() {
  return `
    <header class="page-head"><h1>Training principles</h1></header>
    <section class="list">
      ${TIPS.map(t => `
        <article class="card">
          <h2>${t.title}</h2>
          <p class="muted">${t.body}</p>
        </article>
      `).join('')}
    </section>
  `;
}

function renderDrillDetail(id) {
  const d = DRILLS[id];
  return `
    <header class="page-head"><button class="back" data-back="drills">← Drills</button></header>
    <section class="drill-detail">
      <span class="tag">${d.area}</span>
      <h1>${d.name}</h1>
      <p class="cue">${d.cue}</p>
      ${d.stopIf ? `<p class="stop-if">${d.stopIf}</p>` : ''}
      <ol>${d.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <p class="meta">${d.duration}s per side / hold</p>
    </section>
  `;
}

// ---------- Session player ----------
let session = null;

function renderSession() {
  const routine = ROUTINES.find(r => r.id === session.routineId);
  const drillId = routine.drills[session.index];
  const drill = DRILLS[drillId];
  const isLast = session.index === routine.drills.length - 1;

  return `
    <header class="page-head"><button class="back" data-back="today">✕ Exit</button></header>
    <section class="session">
      <p class="progress">Drill ${session.index + 1} of ${routine.drills.length}</p>
      <span class="tag">${drill.area}</span>
      <h1>${drill.name}</h1>
      <p class="cue">${drill.cue}</p>
      ${drill.stopIf ? `<p class="stop-if">${drill.stopIf}</p>` : ''}
      <div class="timer">${fmtTime(session.remaining)}</div>
      <ol>${drill.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div class="session-controls">
        <button class="btn-secondary" data-session="pause">${session.running ? 'Pause' : 'Resume'}</button>
        <button class="btn-primary" data-session="next">${isLast ? 'Finish' : 'Next drill'}</button>
      </div>
    </section>
  `;
}

let timerHandle = null;
function tick() {
  if (!session || !session.running) return;
  session.remaining -= 1;
  if (session.remaining <= 0) {
    advanceDrill();
  } else {
    render();
  }
}
function advanceDrill() {
  const routine = ROUTINES.find(r => r.id === session.routineId);
  if (session.index >= routine.drills.length - 1) {
    finishSession();
    return;
  }
  session.index += 1;
  session.remaining = DRILLS[routine.drills[session.index]].duration;
  render();
}
function finishSession() {
  markRoutineDone(session.routineId);
  clearInterval(timerHandle);
  session = null;
  route = 'today';
  render();
}

function startSession(routineId) {
  const routine = ROUTINES.find(r => r.id === routineId);
  if (routine.caution) {
    pendingRoutineId = routineId;
    route = 'safetyGate';
    render();
    return;
  }
  launchSession(routineId);
}

function launchSession(routineId) {
  const routine = ROUTINES.find(r => r.id === routineId);
  session = { routineId, index: 0, remaining: DRILLS[routine.drills[0]].duration, running: true };
  clearInterval(timerHandle);
  timerHandle = setInterval(tick, 1000);
  route = 'session';
  render();
}

let pendingRoutineId = null;

function renderSafetyGate() {
  return `
    <header class="page-head"><button class="back" data-back="routines">← Back</button></header>
    <section class="safety-gate">
      <h1>Before you start</h1>
      <p class="muted">This routine mixes a few different approaches on purpose, since the right one depends on what's actually causing your pain. Please check:</p>
      <ul>
        <li>No numbness, tingling, or weakness in your leg or foot</li>
        <li>No change in bladder or bowel control</li>
        <li>Pain doesn't sharply worsen or spread further down the leg during a drill</li>
      </ul>
      <p class="muted">If any of those are true, stop and see a doctor rather than continuing — this app can't diagnose what's going on. Otherwise, go slowly, and skip any drill that makes your leg pain worse.</p>
      <button class="btn-primary" data-confirm-start="1">I understand, continue</button>
    </section>
  `;
}

// ---------- Router / render ----------
let drillDetailId = null;

function render() {
  let html = '';
  if (route === 'session' && session) {
    html = renderSession();
  } else if (route === 'safetyGate') {
    html = renderSafetyGate();
  } else if (route === 'drillDetail' && drillDetailId) {
    html = renderDrillDetail(drillDetailId);
  } else if (route === 'today') {
    html = renderToday();
  } else if (route === 'routines') {
    html = renderRoutines();
  } else if (route === 'drills') {
    html = renderDrills();
  } else if (route === 'tips') {
    html = renderTips();
  }
  const hideNav = route === 'session' || route === 'safetyGate';
  app.innerHTML = html + (hideNav ? '' : navBar());
}

app.addEventListener('click', (e) => {
  const nav = e.target.closest('[data-nav]');
  const start = e.target.closest('[data-start]');
  const drillBtn = e.target.closest('[data-drill]');
  const back = e.target.closest('[data-back]');
  const sessionBtn = e.target.closest('[data-session]');
  const confirmStart = e.target.closest('[data-confirm-start]');

  if (nav) { route = nav.dataset.nav; render(); }
  if (start) { startSession(start.dataset.start); }
  if (confirmStart && pendingRoutineId) { launchSession(pendingRoutineId); pendingRoutineId = null; }
  if (drillBtn) { drillDetailId = drillBtn.dataset.drill; route = 'drillDetail'; render(); }
  if (back) { route = back.dataset.back; render(); }
  if (sessionBtn) {
    if (sessionBtn.dataset.session === 'pause') { session.running = !session.running; render(); }
    if (sessionBtn.dataset.session === 'next') { advanceDrill(); }
  }
});

render();

// ---------- Install prompt ----------
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('install-btn');
  if (btn) btn.hidden = false;
});
document.getElementById('install-btn')?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('install-btn').hidden = true;
});

// ---------- Service worker ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
