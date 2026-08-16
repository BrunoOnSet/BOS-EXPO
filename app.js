// BOS LIGHT V0.3 — photometric calculator
// Manufacturer illuminance data from Aputure/amaran Halo specification pages.
// Exposure relation: E = C * N^2 / (ISO * t), incident-meter calibration constant C = 250.

const INCIDENT_C = 250;

const state = {
  fixture: 'halo60x',
  accessory: 'softbox',
  cct: 5600,
  intensityPct: 100,
  iso: 800,
  shutterDenom: 50,
  aperture: 2.8,
  testDistance: 2.0
};

const fixtures = {
  halo60x: {
    label: 'Halo 60x', softboxLabel: 'Softbox 60', maxMeasuredM: 3,
    data: {
      2700:{bare:[[1,2570],[3,295]],softbox:[[1,1760],[3,133]],reflector:[[1,21440],[3,2164]]},
      3200:{bare:[[1,2800],[3,321]],softbox:[[1,1927],[3,145]],reflector:[[1,23530],[3,2372]]},
      4300:{bare:[[1,3070],[3,353]],softbox:[[1,2129],[3,160]],reflector:[[1,26000],[3,2622]]},
      5600:{bare:[[1,3240],[3,372]],softbox:[[1,2255],[3,169]],reflector:[[1,27520],[3,2777]]},
      6500:{bare:[[1,3270],[3,375]],softbox:[[1,2285],[3,171]],reflector:[[1,27890],[3,2812]]}
    }
  },
  halo100x: {
    label: 'Halo 100x', softboxLabel: 'Softbox 60', maxMeasuredM: 3,
    data: {
      2700:{bare:[[1,3670],[3,414]],softbox:[[1,2417],[3,182]],reflector:[[1,27910],[3,2690]]},
      3200:{bare:[[1,4360],[3,492]],softbox:[[1,2892],[3,218]],reflector:[[1,33500],[3,3230]]},
      4300:{bare:[[1,4890],[3,551]],softbox:[[1,3280],[3,247]],reflector:[[1,38100],[3,3670]]},
      5600:{bare:[[1,4860],[3,547]],softbox:[[1,3290],[3,248]],reflector:[[1,38400],[3,3700]]},
      6500:{bare:[[1,4630],[3,521]],softbox:[[1,3140],[3,237]],reflector:[[1,36700],[3,3540]]}
    }
  },
  halo200x: {
    label: 'Halo 200x', softboxLabel: 'Softbox 90', maxMeasuredM: 5,
    data: {
      2700:{bare:[[1,7800],[3,881],[5,358]],softbox:[[1,7090],[3,489],[5,175]],reflector:[[1,22000],[3,2136],[5,746]]},
      3200:{bare:[[1,9460],[3,1066],[5,441]],softbox:[[1,8620],[3,595],[5,216]],reflector:[[1,26730],[3,2594],[5,921]]},
      4300:{bare:[[1,10500],[3,1184],[5,495]],softbox:[[1,9620],[3,662],[5,244]],reflector:[[1,29800],[3,2889],[5,1038]]},
      5600:{bare:[[1,10530],[3,1187],[5,503]],softbox:[[1,9670],[3,666],[5,248]],reflector:[[1,29980],[3,2901],[5,1054]]},
      6500:{bare:[[1,9800],[3,1104],[5,471]],softbox:[[1,9010],[3,621],[5,233]],reflector:[[1,27930],[3,2705],[5,988]]}
    }
  },
  halo300x: {
    label: 'Halo 300x', softboxLabel: 'Softbox 90', maxMeasuredM: 5,
    data: {
      2700:{bare:[[1,11850],[3,1335],[5,554]],softbox:[[1,11530],[3,808],[5,293]],reflector:[[1,38100],[3,3630],[5,1292]]},
      3200:{bare:[[1,14600],[3,1647],[5,685]],softbox:[[1,14250],[3,999],[5,364]],reflector:[[1,47200],[3,4480],[5,1602]]},
      4300:{bare:[[1,16200],[3,1827],[5,768]],softbox:[[1,15850],[3,1113],[5,410]],reflector:[[1,52600],[3,5000],[5,1803]]},
      5600:{bare:[[1,16120],[3,1819],[5,763]],softbox:[[1,15890],[3,1111],[5,408]],reflector:[[1,52600],[3,5000],[5,1796]]},
      6500:{bare:[[1,14360],[3,1515],[5,683]],softbox:[[1,14140],[3,989],[5,366]],reflector:[[1,46800],[3,4450],[5,1610]]}
    }
  },
  halo600x: {
    label: 'Halo 600x', softboxLabel: 'Softbox 90', maxMeasuredM: 5,
    data: {
      2700:{bare:[[1,23600],[3,2627],[5,1094]],softbox:[[1,21590],[3,1485],[5,566]],reflector:[[1,72500],[3,6900],[5,2519]]},
      3200:{bare:[[1,27920],[3,3100],[5,1280]],softbox:[[1,25590],[3,1767],[5,662]],reflector:[[1,86400],[3,8200],[5,2948]]},
      4300:{bare:[[1,32000],[3,3550],[5,1475]],softbox:[[1,29700],[3,2042],[5,768]],reflector:[[1,99900],[3,9480],[5,3420]]},
      5600:{bare:[[1,32500],[3,3610],[5,1494]],softbox:[[1,30300],[3,2087],[5,782]],reflector:[[1,102100],[3,9680],[5,3480]]},
      6500:{bare:[[1,31200],[3,3460],[5,1461]],softbox:[[1,29300],[3,2012],[5,766]],reflector:[[1,98400],[3,9340],[5,3410]]}
    }
  }
};

const accessoryLabels = { bare: 'Nu', reflector: 'Réflecteur', softbox: 'Softbox' };
const ISO_VALUES = [100,125,160,200,250,320,400,500,640,800,1000,1250,1600,2000,2500,3200,4000,5000,6400,8000,10000,12800];
const SHUTTER_DENOMS = [24,25,30,40,48,50,60,80,100,120,125,160,200,250,320,400,500,640,800,1000];
const APERTURES = [1.4,1.6,1.8,2,2.2,2.5,2.8,3.2,3.5,4,4.5,5,5.6,6.3,7.1,8,9,10,11,13,14,16,18,20,22];

const $ = sel => document.querySelector(sel);
const els = {
  fixtureGrid: $('#fixtureGrid'), accessoryGrid: $('#accessoryGrid'), cctGrid: $('#cctGrid'),
  softboxButtonLabel: $('#softboxButtonLabel'), cctValue: $('#cctValue'),
  intensitySlider: $('#intensitySlider'), intensityValue: $('#intensityValue'), intensityWarning: $('#intensityWarning'),
  isoSelect: $('#isoSelect'), shutterSelect: $('#shutterSelect'), apertureSelect: $('#apertureSelect'),
  maxDistance: $('#maxDistance'), requiredLux: $('#requiredLux'), cameraSummary: $('#cameraSummary'),
  resultSentence: $('#resultSentence'), dataStatus: $('#dataStatus'), dimmerStatus: $('#dimmerStatus'),
  sourceDescriptor: $('#sourceDescriptor'), measurementRow: $('#measurementRow'),
  testDistanceSlider: $('#testDistanceSlider'), testDistanceValue: $('#testDistanceValue'),
  testLux: $('#testLux'), requiredIso: $('#requiredIso'), possibleAperture: $('#possibleAperture'), stopMargin: $('#stopMargin'), testMessage: $('#testMessage'),
  resetBtn: $('#resetBtn')
};

init();

function init() {
  populateSelect(els.isoSelect, ISO_VALUES, v => `ISO ${v}`, state.iso);
  populateSelect(els.shutterSelect, SHUTTER_DENOMS, v => `1/${v}`, state.shutterDenom);
  populateSelect(els.apertureSelect, APERTURES, v => `f/${formatAperture(v)}`, state.aperture);
  bindUI();
  update();
}

function populateSelect(select, values, labelFn, selected) {
  select.innerHTML = '';
  values.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = labelFn(v);
    if (Number(v) === Number(selected)) opt.selected = true;
    select.appendChild(opt);
  });
}

function bindUI() {
  els.fixtureGrid.addEventListener('click', e => {
    const b = e.target.closest('button[data-fixture]'); if (!b) return;
    state.fixture = b.dataset.fixture; update();
  });
  els.accessoryGrid.addEventListener('click', e => {
    const b = e.target.closest('button[data-accessory]'); if (!b) return;
    state.accessory = b.dataset.accessory; update();
  });
  els.cctGrid.addEventListener('click', e => {
    const b = e.target.closest('button[data-cct]'); if (!b) return;
    state.cct = Number(b.dataset.cct); update();
  });
  els.intensitySlider.addEventListener('input', () => { state.intensityPct = Number(els.intensitySlider.value); update(); });
  els.isoSelect.addEventListener('change', () => { state.iso = Number(els.isoSelect.value); update(); });
  els.shutterSelect.addEventListener('change', () => { state.shutterDenom = Number(els.shutterSelect.value); update(); });
  els.apertureSelect.addEventListener('change', () => { state.aperture = Number(els.apertureSelect.value); update(); });
  els.testDistanceSlider.addEventListener('input', () => { state.testDistance = Number(els.testDistanceSlider.value); update(); });
  els.resetBtn.addEventListener('click', reset);
}

function reset() {
  Object.assign(state, { fixture:'halo60x', accessory:'softbox', cct:5600, intensityPct:100, iso:800, shutterDenom:50, aperture:2.8, testDistance:2.0 });
  els.intensitySlider.value = state.intensityPct;
  els.isoSelect.value = state.iso;
  els.shutterSelect.value = state.shutterDenom;
  els.apertureSelect.value = state.aperture;
  els.testDistanceSlider.value = state.testDistance;
  update();
}

function update() {
  syncActiveButtons();
  const fixture = fixtures[state.fixture];
  els.softboxButtonLabel.textContent = fixture.softboxLabel.toUpperCase();
  els.cctValue.textContent = `${state.cct} K`;
  els.intensityValue.textContent = `${state.intensityPct} %`;
  els.testDistanceValue.textContent = `${state.testDistance.toFixed(1)} m`;

  const points = getPoints();
  const reqLux = requiredLux(state.iso, state.shutterDenom, state.aperture);
  const maxD = state.intensityPct <= 0 ? 0 : solveDistanceForLux(reqLux);

  els.requiredLux.textContent = `${formatLux(reqLux)} lux`;
  els.cameraSummary.textContent = `ISO ${state.iso} · 1/${state.shutterDenom} · f/${formatAperture(state.aperture)}`;
  els.maxDistance.textContent = maxD > 0 ? formatDistance(maxD) : '0.0';

  const rangeState = classifyDistance(maxD, points);
  els.dataStatus.textContent = rangeState.label;
  els.dataStatus.classList.toggle('warning', rangeState.warning);

  if (state.intensityPct === 100) {
    els.dimmerStatus.textContent = '100 % · MESURE CONSTRUCTEUR';
    els.intensityWarning.textContent = 'À 100 %, le calcul utilise directement les mesures constructeur.';
    els.intensityWarning.classList.remove('warning');
  } else {
    els.dimmerStatus.textContent = `${state.intensityPct} % · DIMMER ESTIMÉ`;
    els.intensityWarning.textContent = 'Sous 100 %, les lux sont estimés proportionnellement au dimmer : amaran ne publie pas de courbe complète par pourcentage.';
    els.intensityWarning.classList.add('warning');
  }

  if (maxD <= 0) {
    els.resultSentence.textContent = 'Projecteur à 0 % : aucun éclairement disponible.';
  } else {
    els.resultSentence.textContent = `${fixture.label} · ${currentAccessoryLabel()} · ${state.cct} K · ${state.intensityPct} % peut atteindre environ ${formatDistance(maxD)} m avant de passer sous l'exposition cible.`;
  }

  renderMeasurements(points);
  updateTestDistance(reqLux);
}

function syncActiveButtons() {
  document.querySelectorAll('[data-fixture]').forEach(b => b.classList.toggle('active', b.dataset.fixture === state.fixture));
  document.querySelectorAll('[data-accessory]').forEach(b => b.classList.toggle('active', b.dataset.accessory === state.accessory));
  document.querySelectorAll('[data-cct]').forEach(b => b.classList.toggle('active', Number(b.dataset.cct) === state.cct));
}

function currentAccessoryLabel() {
  if (state.accessory === 'softbox') return fixtures[state.fixture].softboxLabel;
  return accessoryLabels[state.accessory];
}

function getPoints() {
  return fixtures[state.fixture].data[state.cct][state.accessory];
}

function requiredLux(iso, shutterDenom, aperture) {
  const t = 1 / shutterDenom;
  return INCIDENT_C * aperture * aperture / (iso * t);
}

function estimatedLuxAtDistance(distance) {
  if (state.intensityPct <= 0) return 0;
  const fullPower = curveLux(distance, getPoints());
  return fullPower * (state.intensityPct / 100);
}

function curveLux(distance, points) {
  const d = Math.max(0.05, distance);
  let a, b;
  if (d <= points[0][0]) {
    [a,b] = [points[0], points[1]];
  } else if (d >= points[points.length - 1][0]) {
    [a,b] = [points[points.length - 2], points[points.length - 1]];
  } else {
    for (let i=0;i<points.length-1;i++) {
      if (d >= points[i][0] && d <= points[i+1][0]) { a=points[i]; b=points[i+1]; break; }
    }
  }
  const [d1,e1] = a; const [d2,e2] = b;
  const exponent = Math.log(e2/e1) / Math.log(d2/d1);
  return e1 * Math.pow(d/d1, exponent);
}

function solveDistanceForLux(targetLux) {
  if (state.intensityPct <= 0) return 0;
  const nearLux = estimatedLuxAtDistance(0.1);
  if (nearLux < targetLux) return 0;
  let lo = 0.1, hi = 1;
  while (estimatedLuxAtDistance(hi) > targetLux && hi < 200) hi *= 2;
  if (hi >= 200 && estimatedLuxAtDistance(hi) > targetLux) return 200;
  for (let i=0;i<80;i++) {
    const mid = (lo+hi)/2;
    if (estimatedLuxAtDistance(mid) >= targetLux) lo = mid; else hi = mid;
  }
  return (lo+hi)/2;
}

function classifyDistance(distance, points) {
  if (distance <= 0) return {label:'SOURCE ÉTEINTE', warning:true};
  const min = points[0][0], max = points[points.length-1][0];
  if (distance < min) return {label:`EXTRAPOLATION < ${min} m`, warning:true};
  if (distance > max) return {label:`EXTRAPOLATION > ${max} m`, warning:true};
  const atPoint = points.some(([d]) => Math.abs(d-distance) < 0.02);
  return {label: atPoint ? 'POINT CONSTRUCTEUR' : 'INTERPOLATION CONSTRUCTEUR', warning:false};
}

function renderMeasurements(points) {
  const fixture = fixtures[state.fixture];
  els.sourceDescriptor.textContent = `${fixture.label} · ${currentAccessoryLabel()} · ${state.cct} K · mesures à 100 %`;
  els.measurementRow.innerHTML = points.map(([d,lux]) => `<div class="measure-chip"><span>${d} m</span><strong>${formatLux(lux)} lux</strong></div>`).join('');
}

function updateTestDistance(reqLux) {
  const d = state.testDistance;
  const lux = estimatedLuxAtDistance(d);
  const reqIso = lux > 0 ? INCIDENT_C * state.aperture * state.aperture / (lux * (1/state.shutterDenom)) : Infinity;
  const possibleF = lux > 0 ? Math.sqrt(lux * state.iso * (1/state.shutterDenom) / INCIDENT_C) : 0;
  const margin = lux > 0 && reqLux > 0 ? Math.log2(lux/reqLux) : -Infinity;
  const rangeState = classifyDistance(d, getPoints());

  els.testLux.textContent = `${formatLux(lux)} lux`;
  els.requiredIso.textContent = Number.isFinite(reqIso) ? `ISO ${formatIso(reqIso)}` : '—';
  els.possibleAperture.textContent = possibleF > 0 ? `f/${formatAperture(possibleF)}` : '—';
  els.stopMargin.textContent = Number.isFinite(margin) ? `${margin >= 0 ? '+' : ''}${margin.toFixed(1)} stop${Math.abs(margin) >= 1.5 ? 's' : ''}` : '—';

  const enough = lux >= reqLux && lux > 0;
  els.testMessage.classList.toggle('negative', !enough);
  const confidenceText = rangeState.warning ? ` ${rangeState.label.toLowerCase()}.` : '';
  if (lux <= 0) {
    els.testMessage.textContent = 'Source à 0 % : pas d’exposition disponible.';
  } else if (enough) {
    els.testMessage.textContent = `À ${d.toFixed(1)} m, la source suffit pour ISO ${state.iso} / 1/${state.shutterDenom} / f/${formatAperture(state.aperture)} avec ${Math.abs(margin).toFixed(1)} stop${Math.abs(margin)>=1.5?'s':''} de marge.${confidenceText}`;
  } else {
    els.testMessage.textContent = `À ${d.toFixed(1)} m, il manque ${Math.abs(margin).toFixed(1)} stop${Math.abs(margin)>=1.5?'s':''}. Il faudrait environ ISO ${formatIso(reqIso)} à 1/${state.shutterDenom} et f/${formatAperture(state.aperture)}.${confidenceText}`;
  }
}

function formatLux(v) {
  if (!Number.isFinite(v)) return '—';
  if (v >= 10000) return Math.round(v).toLocaleString('fr-FR');
  if (v >= 1000) return Math.round(v).toLocaleString('fr-FR');
  if (v >= 100) return Math.round(v).toString();
  if (v >= 10) return v.toFixed(1).replace('.', ',');
  return v.toFixed(2).replace('.', ',');
}
function formatDistance(v) {
  if (v >= 20) return v.toFixed(0);
  if (v >= 10) return v.toFixed(1);
  return v.toFixed(1);
}
function formatAperture(v) {
  if (v >= 10) return v.toFixed(1).replace(/\.0$/,'');
  return v.toFixed(1).replace(/\.0$/,'');
}
function formatIso(v) {
  if (!Number.isFinite(v)) return '—';
  if (v >= 1000) return Math.round(v/10)*10;
  return Math.max(1, Math.round(v));
}
