// map.js — extracted from map.html, wrapped in IIFE so its top-level lets/consts don't leak into the site's globals.
(function(){
"use strict";
/*───────────────────────────────────────────────────────────────────
  LOAM HOUSE INTERACTIVE MAP
  One camera (the SVG viewBox). Every place is a TARGET {vb, parent}.
  Navigation = fly the camera to a target. Amenity dots are just
  targets whose viewBox is "where this circle fills the screen".
  Level-of-detail is one function of camera width. No special cases.
───────────────────────────────────────────────────────────────────*/

/* ── locked placement of the precinct plan on the area map ── */
const PLACEMENT = { tx:823.2, ty:325.5, s:0.08, rot:10, pivx:730, pivy:470 };
const CLIP_TOP  = 170;                    // precinct-own Y; above = cropped road band
// Area viewBox — landscape shows the whole map area; portrait centres on Loam House with aspect matching viewport.
// Recomputed on resize so it always fills cleanly on any device.
function areaVB(){
  const aspect = (innerWidth > 0 && innerHeight > 0) ? innerWidth/innerHeight : 1;   // guard: zero-size viewport (hidden embed) would poison every flight with NaN
  if(aspect >= 1) return [-150,-400, 1500, 1500];   // landscape: matches the earlier desktop framing you had working
  // portrait: centre on Loam House, nudged so map sits further right
  // (mapPoint isn't defined yet at boot; the pivot IS (730,470) so it maps trivially without rotation)
  const LHx = PLACEMENT.tx + PLACEMENT.s * PLACEMENT.pivx;
  const LHy = PLACEMENT.ty + PLACEMENT.s * PLACEMENT.pivy;
  const h = 900, w = h * aspect;
  return [LHx - w/2 - 70, LHy - h/2, w, h];
}
let AREA_VB = areaVB();
const DOT_R     = 10;                      // amenity dot radius, precinct-own units
const MAX_SPIN  = 4;                        // max degrees of random sway on dot transitions
// Gecko: a per-frame transform on #spin makes Firefox layerise the whole map subtree and
// scale the CACHED raster instead of re-rasterising (the dive/entry pixelation). With the
// spin gated off, only the viewBox animates — which Gecko must paint fresh every frame.
const GECKO = CSS.supports('-moz-appearance','none');
const AMENITY_COLOR = '#7a3b26';           // all precinct amenities share one colour (area POIs are category-coded)

/* ── amenity taxonomy ── */
const CATEGORIES = {
  landscape:{ label:'Landscape', color:'#3f4a33' },
  social:   { label:'Social',    color:'#7a3b26' },
  leisure:  { label:'Leisure',   color:'#46303f' },
  wellness: { label:'Wellness',  color:'#35473f' },
  work:     { label:'Work',      color:'#33404f' },
  services: { label:'Services',  color:'#4a463f' },
};

/* ── the 13 precinct amenities (positions in precinct-own coords, from the PDF) ── */
const AMENITIES = [
  {id:'01', name:'Landscaped Gardens',  cat:'landscape', x:903.6, y:596.0, blurb:'Curated native gardens that shift with the seasons, threaded through the precinct.'},
  {id:'02', name:'Fire Pits',           cat:'social',    x:896.9, y:511.6, blurb:'Gather close as the evening cools — open flame beneath open sky.'},
  {id:'03', name:'Barbeques',           cat:'social',    x:884.0, y:681.6, blurb:'Alfresco kitchens made for long lunches and easy entertaining.'},   /* nudged right, clear of 05 */
  {id:'04', name:'Resident Dining Room',cat:'social',    x:866.7, y:715.1, blurb:'A private dining room for the dinners too large for your own table.'},
  {id:'05', name:'Terrace',             cat:'landscape', x:857.2, y:681.5, blurb:'An elevated outdoor room for morning coffee and golden-hour drinks.'},
  {id:'06', name:'Wine Room',           cat:'social',    x:841.0, y:715.1, blurb:'Temperature-controlled cellaring and a table made for tasting.'},
  {id:'07', name:'Movie Room',          cat:'leisure',   x:872.2, y:748.4, blurb:'Plush, dim and yours to book — cinema without leaving home.'},
  {id:'08', name:'Work Space',          cat:'work',      x:820.8, y:701.1, blurb:'Quiet desks and meeting nooks for the days you work from here.'},
  {id:'09', name:'The Retreat',         cat:'wellness',  x:965.1, y:505.0, blurb:'A calm sanctuary to slow down, stretch out and reset.'},
  {id:'10', name:'Car and Dog Wash',    cat:'services',  x:748.1, y:673.6, blurb:'A bay for the car and a bath for the dog — the practical made effortless.'},
  {id:'11', name:'Multipurpose Gym',    cat:'wellness',  x:758.7, y:264.9, blurb:'A fully-equipped gym downstairs, open whenever you are.'},
  {id:'12', name:'Golf Simulator',      cat:'leisure',   x:767.2, y:294.0, blurb:'Play St Andrews before breakfast on a full-swing simulator.'},   /* nudged down, clear of 11 */
  {id:'13', name:'Business Centre',     cat:'work',      x:809.7, y:267.7, blurb:'A boardroom and private offices for when work gets serious.'},
];

const AMENITY_IDS = new Set(AMENITIES.map(a=>a.id));
const isAmenity   = id => AMENITY_IDS.has(id);

/* ── building labels on the precinct plan (positions in precinct-own coords, from the PDF) ── */
const LABELS = [
  {lines:['LOAM','HOUSE'],     x:796, y:468},
  {lines:['PAVILION','GREEN'], x:995, y:467},
  {lines:['SEA & SKY'],        x:935, y:712},
];

/* which building an amenity sits in — nearest building label (shown in the detail view) */
const BUILDINGS = [
  {name:'Loam House',     x:796, y:468},
  {name:'Pavilion Green', x:995, y:467},
  {name:'Sea & Sky',      x:935, y:712},
];
const buildingFor = (x,y) => BUILDINGS.reduce((best,b)=>
  ((x-b.x)**2+(y-b.y)**2) < ((x-best.x)**2+(y-best.y)**2) ? b : best).name;

/* ── area POIs (45 items across four categories, PDF-verified positions) ── */
const POI_CATS = {
  cafes:      { label:'Cafés & Bars',       color:'#8d5030' },
  retail:     { label:'Retail',             color:'#3a5a5c' },
  recreation: { label:'Sport & Culture',    color:'#4a6438' },
  schools:    { label:'Schools & Hospitals',color:'#5a3f5c' },
  train:      { label:'Train Stations',     color:'#40453b' },
  bus:        { label:'Bus Stops',          color:'#1c1e19' },
};
const POIS = [
  {id: 1, cat:'cafes',      name:'Full Turn Kitchen Bar',           x:914.2, y:364.5, walkMin:3, driveMin:1},
  {id: 2, cat:'cafes',      name:'The Flour House',                 x:1044.8,y:357.7, walkMin:18, driveMin:2},
  {id: 3, cat:'cafes',      name:'Bay Road Nursery & Café',         x:807.9, y:334.8, walkMin:14, driveMin:2},
  {id: 4, cat:'cafes',      name:'Port of Call',                    x:752.1, y:317.6, walkMin:22, driveMin:3},
  {id: 5, cat:'cafes',      name:'Limoncello',                      x:727.8, y:294.3, walkMin:25, driveMin:3},
  {id: 6, cat:'cafes',      name:'Baia Di Vino',                    x:719.7, y:308.9, walkMin:24, driveMin:3},
  {id: 7, cat:'cafes',      name:'Vina e Vita',                     x:1015.8,y:284.3, walkMin:26, driveMin:4},
  {id: 8, cat:'cafes',      name:'Ammos Greek Tavern',              x:725.2, y:303.1, walkMin:24, driveMin:3},
  {id: 9, cat:'cafes',      name:'Stevie',                          x:729.9, y:285.3, walkMin:26, driveMin:3},
  {id:10, cat:'cafes',      name:'Bad Shepherd Brewing Co',         x:1039.0,y:386.8, walkMin:18, driveMin:2},
  {id:11, cat:'cafes',      name:'The Hamptons Bakery',             x:712.6, y:124.2, walkMin:45, driveMin:6},
  {id:12, cat:'cafes',      name:'True South',                      x:839.8, y:565.0, walkMin:34, driveMin:5},
  {id:13, cat:'cafes',      name:'Au Citron Cafe',                  x:741.4, y:55.3, walkMin:53, driveMin:7},
  {id:14, cat:'cafes',      name:'Fabrica',                         x:1057.6,y:439.9, walkMin:31, driveMin:5},
  {id:15, cat:'retail',     name:'Sandringham Village',             x:747.4, y:293.2, walkMin:26, driveMin:3},
  {id:16, cat:'retail',     name:'Ulysses Bookstore',               x:726.5, y:142.8, walkMin:44, driveMin:6},
  {id:17, cat:'retail',     name:'Uncorked Wines',                  x:737.4, y:315.6, walkMin:22, driveMin:3},
  {id:18, cat:'retail',     name:'7-Eleven Sandringham',            x:886.9, y:333.2, walkMin:9, driveMin:1},
  {id:19, cat:'retail',     name:'IGA Sandringham',                 x:915.1, y:354.8, walkMin:3, driveMin:1},
  {id:20, cat:'retail',     name:'Westfield Southland',             x:1143.5,y:395.4, walkMin:31, driveMin:6},
  {id:21, cat:'retail',     name:'Coles Sandringham',               x:707.4, y:286.5, walkMin:27, driveMin:4},
  {id:22, cat:'retail',     name:'Coles Hampton',                   x:872.8, y:294.0, walkMin:17, driveMin:2},
  {id:23, cat:'retail',     name:'ALDI Cheltenham',                 x:995.1, y:369.3, walkMin:23, driveMin:3},
  {id:24, cat:'retail',     name:'Woolworths Highett',              x:1028.6,y:286.4, walkMin:27, driveMin:4},
  {id:25, cat:'retail',     name:'Black Rock Village',              x:828.9, y:547.2, walkMin:33, driveMin:5},
  {id:26, cat:'retail',     name:'Hampton Village',                 x:708.4, y:140.4, walkMin:44, driveMin:6},
  {id:27, cat:'retail',     name:'Trove Melbourne',                 x:987.1, y:717.2, walkMin:59, driveMin:8},
  {id:28, cat:'retail',     name:'Lobster Cave',                    x:992.3, y:674.2, walkMin:59, driveMin:8},
  {id:29, cat:'recreation', name:'Liquid Room Yoga',                x:918.4, y:337.2, walkMin:3, driveMin:1},
  {id:30, cat:'recreation', name:'Sandringham Club',                x:714.7, y:263.8, walkMin:31, driveMin:4},
  {id:31, cat:'recreation', name:'Sandringham Croquet Club',        x:690.4, y:266.3, walkMin:30, driveMin:4},
  {id:32, cat:'recreation', name:'Sandringham Athletics Club',      x:842.8, y:186.2, walkMin:31, driveMin:5},
  {id:33, cat:'recreation', name:'Dendy Park Tennis Club',          x:885.8, y:35.1, walkMin:50, driveMin:7},
  {id:34, cat:'recreation', name:'Zenith Wellness Lounge',          x:852.4, y:569.5, walkMin:33, driveMin:4},
  {id:35, cat:'recreation', name:'MoPA – Museum of Play and Art',   x:989.4, y:348.2, walkMin:9, driveMin:1},
  {id:36, cat:'recreation', name:'Sandringham Library',             x:732.6, y:268.3, walkMin:27, driveMin:4},
  {id:37, cat:'recreation', name:'Adult Ballet Centre',             x:1033.1,y:416.2, walkMin:20, driveMin:3},
  {id:38, cat:'recreation', name:'Hampton Cricket Club',            x:873.4, y:127.7, walkMin:19, driveMin:2},
  {id:39, cat:'schools',    name:'Sandringham East Primary School', x:875.7, y:384.8, walkMin:7, driveMin:2},
  {id:40, cat:'schools',    name:'Sandringham College 10–12',       x:910.3, y:389.3, walkMin:32, driveMin:4},
  {id:41, cat:'schools',    name:'St Leonards College',             x:747.4, y:40.0, walkMin:57, driveMin:7},
  {id:42, cat:'schools',    name:'Haileybury Brighton',             x:739.6, y:80.7, walkMin:51, driveMin:6},
  {id:43, cat:'schools',    name:'Sandy Hill Medical Centre',       x:885.8, y:350.0, walkMin:3, driveMin:1},
  {id:44, cat:'schools',    name:'Sandringham Medical Centre',      x:769.9, y:314.1, walkMin:13, driveMin:2},
  {id:45, cat:'schools',    name:'Linacre Private Hospital',        x:718.7, y:214.1, walkMin:36, driveMin:6},
];
// (POI dot rendering removed — the POIS array below remains as the research dataset that
//  fed the Place chapter's walk/drive times; the map itself shows no POI markers.)

/* ── bus stops (small black dots from the PDF's legend key) ── */
const BUSSTOPS = [
  {name:'Sandringham Station', x:798.5,  y:325.0},
  {name:'Bay Road',            x:1017.4, y:360.7},
];

/* ── landmark names (parks, reserves, golf courses, beaches — from the PDF, red-brown accent) ── */
const LANDMARKS = [
  {lines:['Brighton Public','Golf Course'],     x:840.4, y:14.4},
  {lines:['Dendy','Park'],                      x:902.4, y:21.4},
  {lines:['Castlefield','Reserve'],             x:782.8, y:90.2},
  {lines:['R. J. Sillitoe','Reserve'],          x:861.3, y:104.4},
  {lines:['Hampton','Beach'],                   x:630.2, y:159.3},
  {lines:['Moorabbin','Baseball Club'],         x:934.6, y:168.4},
  {lines:['Basterfield','Park'],                x:973.7, y:193.9},
  {lines:['Thomas Street','South Reserve'],     x:845.1, y:208.5},
  {lines:['Sandringham','Dog Beach'],           x:656.3, y:225.4},
  {lines:['Sandringham','Yacht Club'],          x:626.0, y:262.4},
  {lines:['Bay Road','Reserve'],                x:942.1, y:357.5},
  {lines:['Red Bluff Cliffs','and Lookout'],    x:749.4, y:456.1},
  {lines:['Sandringham','Golf Course'],         x:945.7, y:471.8},
  {lines:['Victoria','Golf Course'],            x:1086.6,y:471.8},
  {lines:['Half Moon','Bay'],                   x:754.8, y:500.4},
  {lines:['Royal Melbourne','Golf Course'],     x:945.7, y:515.6},
  {lines:['Ricketts Point','Marine Sanctuary'], x:891.8, y:776.6},
];

/* ── suburb labels (positions from the PDF, red-brown accent) ── */
const SUBURBS = [
  {lines:['BRIGHTON'],           x:780.6, y:51.7},
  {lines:['HAMPTON'],            x:808.4, y:143.2},
  {lines:['HAMPTON','EAST'],     x:955.0, y:131.4},
  {lines:['SANDRINGHAM'],        x:811.7, y:267.9},
  {lines:['BLACK ROCK'],         x:894.2, y:555.7},
  {lines:['PORT PHILLIP BAY'],   x:690.8, y:663.6},
  {lines:['BEAUMARIS'],          x:1032.2,y:695.6},
];

/* ── road names (positions from the PDF, in area-map coords) ── */
const ROADS = [
  {n:'Hampton Street',    x:734.3, y:28.0},
  {n:'Were Street',       x:687.4, y:27.0},
  {n:'South Road',        x:790.3, y:75.1},
  {n:'Jasper Road',       x:1041.2,y:78.7},
  {n:'Tucker Road',       x:1122.4,y:93.5},
  {n:'Ludstone Street',   x:756.7, y:111.9},
  {n:'Boundary Road',     x:1176.3,y:178.3},
  {n:'Thomas Street',     x:845.1, y:208.5},
  {n:'Wickham Road',      x:977.9, y:228.3},
  {n:'Highett Road',      x:975.0, y:266.8},
  {n:'Route 822',         x:797.7, y:314.7},
  {n:'Nepean Hwy',        x:1111.2,y:315.7},
  {n:'Route 822',         x:1017.4,y:349.7},
  {n:'Beach Road',        x:763.2, y:356.8},
  {n:'Bay Road',          x:941.0, y:343.0},   // above the road (north side), not on the park south of it
  {n:'Bay Road',          x:1091.5,y:372.9},
  {n:'Tulip Street',      x:949.2, y:438.5},
  {n:'Park Road',         x:1084.5,y:450.1},
  {n:'Bluff Road',        x:844.8, y:509.9},
  {n:'Weatherall Road',   x:1081.6,y:530.0},
  {n:'Cherterville Road', x:1157.6,y:583.7},
  {n:'Balcombe Road',     x:910.3, y:588.0},
  {n:'Cromer Road',       x:1088.3,y:651.7},
  {n:'Reserve Road',      x:974.1, y:724.8},
];

/* ── train stations (white marker + label, area-map coords, from the PDF) ── */
const STATIONS = [
  {name:'Brighton Beach', x:606.1,  y:31.6},
  {name:'Hampton',        x:713.8,  y:164.5},
  {name:'Sandringham',    x:734.4,  y:302.1},
  {name:'Patterson',      x:1008.5, y:27.8},
  {name:'Moorabbin',      x:1019.6, y:125.1},
  {name:'Highett',        x:1063.8, y:280.5},
];

/*──────────────── geometry ────────────────*/
const rad = PLACEMENT.rot*Math.PI/180, COS = Math.cos(rad), SIN = Math.sin(rad);
function mapPoint(x,y){                    // precinct-own coords → area-map coords
  const {tx,ty,s,pivx,pivy}=PLACEMENT, dx=x-pivx, dy=y-pivy;
  const rx = pivx + dx*COS - dy*SIN, ry = pivy + dx*SIN + dy*COS;
  return [tx + s*rx, ty + s*ry];
}
const DOT_MAP_R = DOT_R*PLACEMENT.s;       // dot radius in map units
const FILL_W    = DOT_MAP_R*1.1;           // camera width where the circle truly covers the viewport

/*──────────────── targets ────────────────*/
const TARGETS = {};
// Mobile lands the precinct closer: portrait slice-fit crops the sides anyway, so the
// desktop frame reads too far away on a phone. One factor, centred on Loam House,
// recomputed on resize (the resize listener refreshes the target and entry path).
const MOB_PRECINCT_ZOOM = 0.8;
const MOB_PRECINCT_PAN_X = 6;   // camera pans right by this many map units → the map reads shifted LEFT on screen
function precinctVB(){
  const [lx,ly] = mapPoint(730,470);       // Loam House building centre on the map
  const mob = matchMedia('(max-width:800px)').matches;
  const z = mob ? MOB_PRECINCT_ZOOM : 1;
  return [lx-58*z + (mob ? MOB_PRECINCT_PAN_X : 0), ly-41*z, 117*z, 83*z];
}
(function buildTargets(){
  const [lx,ly] = mapPoint(730,470);
  TARGETS.area     = { vb:AREA_VB.slice(),         parent:null      };
  TARGETS.precinct = { vb:precinctVB(),            parent:'area'    };
  TARGETS.loam     = { vb:[lx-44,ly-28,80,58],     parent:'precinct'};
  for(const a of AMENITIES){
    const [mx,my]=mapPoint(a.x,a.y);
    TARGETS[a.id] = { vb:[mx-FILL_W/2, my-FILL_W/2, FILL_W, FILL_W], parent:'precinct' };
  }
})();

/*──────────────── level-of-detail (pure functions of camera width) ────────────────*/
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const ramp  = (w,lo,hi)=>clamp((w-lo)/(hi-lo),0,1);     // 0 at lo → 1 at hi
const HALO_FADE_W = 40;                                 // camera width below which halos fade out and the pulse freezes
function dotOpacity(w){                                  // non-active dots
  return 1 - ramp(w, 190, 360);                         // present at Loam House / Precinct, fade only toward the Area
}                                                       // (no deep fade: once a dot fills the frame, the rest are already off-screen)
function panelOpacity(w){                                // focused amenity TEXT (colour comes from the dot itself)
  return 1 - ramp(w, FILL_W*1.3, FILL_W*2.8);           // holds while the dot fills; fades only as the dot recedes
}

/*──────────────── camera ────────────────*/
const map = document.getElementById('map');
let camVB  = TARGETS.precinct.vb.slice();
let focus  = 'precinct';   // where the camera is headed / resting — precinct is the chapter's home view
let active = null;      // amenity that currently owns the colour field (independent of focus)
let raf    = null;
let entryCamOwned = true;   // the chapter-entry camera drives camVB until the user takes a flight of their own; re-armed when the chapter leaves the viewport

function setVB(v){ map.setAttribute('viewBox', `${v[0]} ${v[1]} ${v[2]} ${v[3]}`); }
// Camera rotation, applied INSIDE the SVG paint pass (the #spin content group), about the
// current camera centre. A CSS transform on the <svg> element itself lets the compositor
// slide stale raster tiles under a fresh transform while the viewBox invalidates per frame
// — the intermittent seam/ghost flicker on dives. In here, one renderer paints everything.
const spinG = document.getElementById('spin');
function setSpin(ang){
  if(!ang || Math.abs(ang) < 0.05){ spinG.removeAttribute('transform'); return; }
  const cx = camVB[0]+camVB[2]/2, cy = camVB[1]+camVB[3]/2, s = 1+0.03*Math.abs(ang);
  spinG.setAttribute('transform', `translate(${cx} ${cy}) rotate(${ang.toFixed(2)}) scale(${s.toFixed(3)}) translate(${-cx} ${-cy})`);
}
const easeInOutSine = t => -(Math.cos(Math.PI*t)-1)/2;
const easeInOutPow  = (t,a) => t<0.5 ? Math.pow(2*t,a)/2 : 1-Math.pow(2*(1-t),a)/2;   // dives: gentle start, fast middle, long settle; a from ?tune
const PHOTO_FADE_IN = 3, PHOTO_FADE_OUT = 22;          // camera widths: photo fully in by 3, starts surfacing at 22 (defaults; ?tune overrides)
const PHOTO_V = 3;                                     // cache-buster for the amenity photos (same convention as the css/js ?v=) — bump when a master is replaced
const PHOTO_DIR = window.matchMedia('(max-width:800px)').matches ? 'assets/mobile/amenities' : 'assets/map/amenities';   // phones get the optimised crops

/* Van Wijk & Nuij smooth zoom-and-pan: one arc-length-uniform path between two
   viewBoxes that keeps the destination framed throughout (no end-swing). */
function camPath(from, to){
  const rho=Math.SQRT2, rho2=2, rho4=4, EPS=1e-9;
  const c0=[from[0]+from[2]/2, from[1]+from[3]/2], w0=from[2], ar0=from[3]/from[2];
  const c1=[to[0]+to[2]/2,     to[1]+to[3]/2],     w1=to[2],   ar1=to[3]/to[2];
  const dx=c1[0]-c0[0], dy=c1[1]-c0[1], d2=dx*dx+dy*dy;
  let S, pos;
  if(d2 < EPS){                                   // pure zoom, no pan
    S = Math.abs(Math.log(w1/w0)) / rho;
    pos = t => [ c0[0], c0[1], w0*Math.pow(w1/w0, t) ];
  } else {
    const d1=Math.sqrt(d2);
    const b0=(w1*w1 - w0*w0 + rho4*d2)/(2*w0*rho2*d1);
    const b1=(w1*w1 - w0*w0 - rho4*d2)/(2*w1*rho2*d1);
    const r0=Math.log(Math.sqrt(b0*b0+1)-b0), r1=Math.log(Math.sqrt(b1*b1+1)-b1);
    S=(r1-r0)/rho; const coshr0=Math.cosh(r0), sinhr0=Math.sinh(r0);
    pos = t => {
      const s=t*S;
      const u = (w0/rho2)*(coshr0*Math.tanh(r0+rho*s) - sinhr0);   // along-path distance, 0 → d1
      const k = u/d1;                                              // fraction along the line, 0 → 1
      return [ c0[0]+k*dx, c0[1]+k*dy, w0*coshr0/Math.cosh(r0+rho*s) ];
    };
  }
  return { S, at(t){ const [cx,cy,w]=pos(t), ar=ar0+(ar1-ar0)*t, h=w*ar; return [cx-w/2, cy-h/2, w, h]; } };
}

function flyTo(id){
  entryCamOwned = false;   // a user flight takes the camera; the entry camera re-arms once the chapter scrolls out of view
  // A user flight completes the entry: editorial fast-forwards any scrub catch-up still
  // easing (scrub 6 ≈ 6s of writes after the last scroll) so the entry choreography can
  // never move dots mid-dive — the mode collision behind the intermittent dive flicker.
  window.dispatchEvent(new Event('map-flight'));
  // Copy: any departure plays the open panel's exit over the flight (amenity and destination
  // alike — one performance system); the arrival's entrance is scheduled below, once dur is known.
  if(destActive != null && destActive !== id) destPanelOut();
  const dotMove = isAmenity(id) || isAmenity(focus);   // diving into, or pulling out of, a dot
  focus = id;
  if(isAmenity(id)) active = id;                        // flying IN claims the field; flying OUT keeps it to dissolve
  syncNav();
  syncPhoto();                                          // the photo only ever opens on the flight's own dot
  const TT   = (window.__mapTune && window.__mapTune.T) || {};
  const path = camPath(camVB.slice(), TARGETS[id].vb); // Van Wijk arc keeps the target framed throughout
  const dur  = clamp(path.S * 520, 750, 2200) * (dotMove ? (TT.diveDur || 1.6) : 1);
  const divePow = TT.divePow || 4;
  // The copy is the same hero performance for both kinds. Amenity copy begins near the
  // flight's END — the materialization cost (viewport-scale type + blur layers) must land
  // on a quiet frame; textLead (?tune) pulls it into the settle tail, where the camera's
  // remaining motion is imperceptible, so the wait never feels dead.
  if(isAmenity(id)) setTimeout(() => { if(focus === id) destPanelIn(id); },
    Math.max(0, dur - (TT.textLead != null ? TT.textLead : 200)));
  const spin = (dotMove && !GECKO) ? (Math.random()*2-1)*MAX_SPIN : 0;
  const t0 = performance.now();
  let prevLW = null, prevT = t0;
  if(raf) cancelAnimationFrame(raf);
  (function frame(now){
    const p = Math.min(1,(now-t0)/dur), e = dotMove ? easeInOutPow(p, divePow) : easeInOutSine(p);
    camVB = path.at(e);
    setVB(camVB);
    const w = camVB[2];
    if(dotMove){
      // amenity dive: NO blur. Rotation swings only while the map is still legible, then fades to
      // zero as the dot fills the frame — so you land crisp and square on the colour field.
      map.style.filter = 'none';
      const ang = spin * Math.sin(Math.PI*p) * ramp(w, FILL_W*4, FILL_W*12);
      mapSpinAng = ang;   // published BEFORE render(), which seats the photo clip through this same rotation
      setSpin(ang);
    } else {
      // map move: speed-tied motion blur, no rotation
      const lw = Math.log(w); if(prevLW===null) prevLW = lw;
      const dt = Math.max(1, now-prevT), vel = Math.abs(lw-prevLW)/dt;
      prevLW = lw; prevT = now;
      const blur = Math.min(6, vel*1400);
      map.style.filter = (p<1 && blur>0.15) ? `blur(${blur.toFixed(2)}px)` : 'none';
    }
    render();   // after the frame's transform state is fully decided — clip and map can never disagree
    if(p<1){ raf = requestAnimationFrame(frame); }
    else {
      raf=null; map.style.filter='none'; setSpin(0); mapSpinAng=0;
      if(!isAmenity(focus)) active=null;
      syncPhoto(); render();
    }
  })(t0);
}
function back(){ const p = TARGETS[focus].parent; if(p) flyTo(p); }

// The open photo: exactly one dot — the dive's own — may show its photograph. It stays open
// through the pull-out (the crossfade mirrors out with altitude) and closes when the flight
// that leaves it lands. render() projects openPhoto's map position into the screen-space
// #photo-layer clip every frame; the photograph itself never moves.
let openPhoto = null, mapSpinAng = 0, photoReady = false;
function syncPhoto(){
  const keep = active;   // active persists through a pull-out, so the photo dissolves instead of snapping off
  if(keep){
    const a = AMENITIES.find(x => x.id === keep);
    if(a){
      const [mx, my] = mapPoint(a.x, a.y);
      openPhoto = { mx, my };
      const src = `${PHOTO_DIR}/${keep}.jpg?v=${PHOTO_V}`;
      if(EL.photoImg.getAttribute('src') !== src){ photoReady = false; EL.photoImg.style.visibility = 'hidden'; EL.photoImg.src = src; }
    } else openPhoto = null;
  } else openPhoto = null;
}

/*──────────────── render (LOD every frame) ────────────────*/
let dotEls = [], panelEls = [];
/* ── Unified marker sizing ── each type has a curve: [camera_width, target_pixel_radius].
   Group transform:scale on each marker hits the target pixel size at any zoom/device.
   Amenity's dive-fill is the natural extension of its curve (big pixel target at close w). */
/* Curves are interpolated log-log (exponential), so smooth power-law growth between anchors.
   Segments join with continuous slope in log-log space → no jerky rate-changes as camera zooms. */
const MARKER_CURVES = {
  amenity: [       // invisible at area, grows as camera closes to loam, viewport-fill at dive
    [500, 1.5], [80, 24], [0.88, 1600],
  ],
  poi: [           // ambient texture under the highlight labels — small everywhere, never demanding
    [2000, 5], [500, 5], [80, 4],
  ],
  station: [
    [2000, 6], [500, 6], [80, 3],
  ],
  busstop: [
    [2000, 5], [500, 5], [80, 2],
  ],
};
const MARKER_BASE_R = {   // designed r in area units (what group transform scales from)
  amenity: DOT_R * PLACEMENT.s,   // 10 precinct × 0.08 = 0.8 area units
  station: 4.5, busstop: 5.15,
};
const markerRefs = { amenity:[], station:[], busstop:[] };
function markerCurve(c, w){
  if(w>=c[0][0]) return c[0][1];
  if(w<=c[c.length-1][0]) return c[c.length-1][1];
  const lw = Math.log(w);
  for(let i=0;i<c.length-1;i++){ const [w0,r0]=c[i],[w1,r1]=c[i+1];
    if(w<=w0 && w>=w1){
      const t = (lw - Math.log(w0)) / (Math.log(w1) - Math.log(w0));
      return Math.exp(Math.log(r0) + (Math.log(r1) - Math.log(r0)) * t);
    }
  }
  return c[c.length-1][1];
}
const EL = {                                       // cached once — no per-frame DOM lookups
  nav:    document.getElementById('map-nav'),
  dots:   document.getElementById('dots'),
  labels: document.getElementById('labels'),
  stations: document.getElementById('stations'),
  precinctNote: document.querySelector('.map-chapter .precinct-note'),
  photoLayer: document.getElementById('photo-layer'),
  photoImg: document.querySelector('#photo-layer img'),
  roads: document.getElementById('roads'),
  suburbs: document.getElementById('suburbs'),
};
// photoReady gates only the img inside the layer — a missing or still-loading image shows
// the layer's clay ground instead, on the same ramp; the photo fades up whenever it arrives.
EL.photoImg.addEventListener('load',  () => { photoReady = true;  EL.photoImg.style.visibility = '';       render(); });
EL.photoImg.addEventListener('error', () => { photoReady = false; EL.photoImg.style.visibility = 'hidden'; render(); });
function render(){
  const w = camVB[2];
  const pOp   = active ? panelOpacity(w) : 0;     // text strength, tied to the camera
  const dOp   = dotOpacity(w);                     // dot / label presence
  dotEls.forEach((el)=>{
    const on = el.dataset.id===active;
    el.style.opacity = on ? 1 : dOp;              // the active dot IS the growing background — always opaque
    el.style.pointerEvents = (!active && dOp>0.5) ? 'auto' : 'none';
  });
  // Panels are timed performances (destPanelIn/Out — one system for amenities and
  // destinations), not width-keyed: render never touches their opacity or pointer-events.
  // The precinct note steps back for dives only.
  // The note steps back for dives via a class — CSS carries a fade+blur both ways
  // (an inline opacity write here snapped it in and out with no transition).
  // OUT: the moment a dive claims the field (click-instant). BACK IN: altitude-keyed —
  // the fade starts mid-pull-out, once the camera has climbed past the halo band.
  if(EL.precinctNote) EL.precinctNote.classList.toggle('dived', active != null && (isAmenity(focus) || w < HALO_FADE_W * 1.5));
  // While destination copy is up, the map's own lettering steps back so the copy owns the type
  const dimText = destActive != null ? 0.15 : 1;
  EL.roads.style.opacity = dimText;
  EL.suburbs.style.opacity = dimText;
  EL.nav.style.opacity = (active && pOp>0.5) ? 0 : 1;
  EL.dots.classList.toggle('diving', w < HALO_FADE_W);   // fade halos out/in with the zoom
  // Numerals leave EARLY and COMPLETELY (hard zero by w=12, while the glyph is still small).
  // The old 10% "ghost" kept a viewport-sized translucent vector glyph repainting every
  // frame of a dive's reveal window — the flicker. Identification has no business on screen
  // once the dot is bigger than a coin; it returns at the same altitude on the way out.
  EL.dots.style.setProperty('--num-op', String(ramp(w, 12, 45)));   // wider band = gentler return on the pull-out
  // The layer belongs to the final approach and rides ONE altitude ramp on every dive —
  // photograph and scrim together, or the clay ground and scrim when no image exists
  // (photoReady gates only the img inside the layer, never the ramp — no snapping paths).
  const TTr = (window.__mapTune && window.__mapTune.T) || {};
  // The breath is altitude-graded like every other LOD behaviour: its AMPLITUDE melts to
  // zero on the approach and grows back on the pull-out. The animation itself never stops
  // or restarts (a re-attached CSS animation resets its clock — the mid-dive jump), phase
  // stays locked to the ping, and amplitude is exactly 1 before the photo band opens
  // (w≤45), so dot and aperture remain identical at depth by construction.
  const breathFull = TTr.pulseBreath || 1.06;
  EL.dots.style.setProperty('--breath-scale', String(1 + (breathFull - 1) * ramp(w, 45, 100)));
  // Photo fade: starts at altitude pOut, runs for photoLen of altitude, shaped by photoCurve
  // (>1 back-loads the fade toward the landing, <1 front-loads it). Mirrors on the pull-out.
  const pOut = TTr.photoOut || PHOTO_FADE_OUT;
  const pIn  = Math.max(1, pOut - (TTr.photoLen || (PHOTO_FADE_OUT - PHOTO_FADE_IN)));
  let photoOp = openPhoto ? 1 - ramp(w, pIn, pOut) : 0;
  if(photoOp > 0 && photoOp < 1) photoOp = Math.pow(photoOp, TTr.photoCurve || 1);
  EL.labels.style.opacity = dOp;                   // building labels fade toward the Area
  const areaFade = ramp(w, AREA_VB[2]*0.5, AREA_VB[2]*0.95);
  EL.stations.style.opacity = areaFade;                                     // stations only visible at the Area view
  // Marker sizing — one system for every marker type. Curve defines target pixel size at each camera width,
  // referenced to a desktop viewport (REF_VMIN). On smaller screens targets shrink proportionally so a marker
  // holds the same fraction of the viewport on any device.
  // Amenity's dive-fill is the natural end of its curve (target pixel size grows huge at close w).
  const pxPerAreaUnit = Math.max(innerWidth / w, innerHeight / camVB[3]);
  const REF_VMIN = 800;
  // Square-root scaling: gentler than linear vmin. Same size on desktop, ~70% on mobile — proportional
  // enough that dots don't dominate a small screen, but not so shrunk they become illegible.
  const deviceScale = Math.sqrt(Math.min(innerWidth, innerHeight) / REF_VMIN);
  for(const type of ['amenity','station','busstop']){
    const targetAreaR = (markerCurve(MARKER_CURVES[type], w) * deviceScale) / pxPerAreaUnit;
    const scale = targetAreaR / MARKER_BASE_R[type];
    // A zero-size viewport (a hidden or not-yet-laid-out window) makes the ratios above
    // 0/0 = NaN, and a NaN scale written into the SVG throws once per marker. Skip the
    // write and leave the previous transform; the next render at a real viewport sizes it.
    if(!Number.isFinite(scale)) continue;
    for(const m of markerRefs[type]){
      m.grp.setAttribute('transform', `translate(${m.cx} ${m.cy}) scale(${scale}) translate(${-m.cx} ${-m.cy})`);
    }
  }
  // The lens, in screen space: the photograph never transforms — it sits full-bleed in
  // #photo-layer and is revealed through a circular clip that rides the open dot. Centre
  // comes from projecting the dot through the viewBox (slice fit), radius straight from the
  // amenity marker curve, opacity from the altitude ramp. The dive's rotation swing tilts
  // the SVG only, so the circle's centre is passed through the same rotation to stay seated.
  const dotScreenR = markerCurve(MARKER_CURVES.amenity, w) * deviceScale;
  // Occlusion: at full dive every pixel on screen is the photograph or the clay — the vector
  // map contributes nothing, so the SVG is hidden entirely. The panel performance can then
  // never trigger expensive deep-zoom vector repaints (the dive flicker): the backdrop is one
  // cached bitmap. The layer's own clay ground means photo-less dives land on the same clay
  // field as always — the handover is clay-over-clay, invisible — and the SVG returns on the
  // pull-out while the aperture still covers the screen, so there is never a gap.
  const covered = innerWidth > 0 && !!active && dotScreenR >= Math.hypot(innerWidth, innerHeight) * 0.75;
  map.classList.toggle('occluded', covered);
  if(openPhoto && innerWidth > 0 && innerHeight > 0){
    const sPx = pxPerAreaUnit;
    let mx = openPhoto.mx, my = openPhoto.my;
    let rpx = dotScreenR;
    if(mapSpinAng){   // the spin group rotates map content about the camera centre — pass the dot through the same transform
      const ccx = camVB[0]+w/2, ccy = camVB[1]+camVB[3]/2, th = mapSpinAng*Math.PI/180, sc = 1 + 0.03*Math.abs(mapSpinAng);
      const dx = mx - ccx, dy = my - ccy;
      mx = ccx + (dx*Math.cos(th) - dy*Math.sin(th)) * sc;
      my = ccy + (dx*Math.sin(th) + dy*Math.cos(th)) * sc;
      rpx *= sc;
    }
    const x = (mx - camVB[0]) * sPx + (innerWidth  - w * sPx) / 2;
    const y = (my - camVB[1]) * sPx + (innerHeight - camVB[3] * sPx) / 2;
    EL.photoLayer.style.clipPath = `circle(${rpx.toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px)`;
  }
  EL.photoLayer.style.opacity = String(covered ? 1 : photoOp);   // covered: the layer IS the field (photo or its clay ground)
}

/*──────────────── build DOM ────────────────*/
const SVGNS='http://www.w3.org/2000/svg';
function buildDots(){
  const g=document.getElementById('dots');
  AMENITIES.forEach((a,i)=>{
    const grp=document.createElementNS(SVGNS,'g'); grp.setAttribute('class','dot'); grp.dataset.id=a.id;
    const halo=document.createElementNS(SVGNS,'g'); halo.setAttribute('class','halo');   // opacity wrapper
    const ping=document.createElementNS(SVGNS,'circle');   // expanding halo behind the dot
    ping.setAttribute('class','ping'); ping.setAttribute('cx',a.x); ping.setAttribute('cy',a.y); ping.setAttribute('r',DOT_R);
    ping.setAttribute('fill',AMENITY_COLOR);
    halo.appendChild(ping);   // its delay is set by applyPulse, phase-locked to this dot's breath
    grp._ph = Math.random();   // this dot's phase in the shared pulse clock (applyPulse)
    const core=document.createElementNS(SVGNS,'circle');   // the crisp dot — breathes inside .pulse
    core.setAttribute('class','core'); core.setAttribute('cx',a.x); core.setAttribute('cy',a.y); core.setAttribute('r',DOT_R);
    core.setAttribute('fill',AMENITY_COLOR);
    // Serifed numeral on the dot — pairs with the numbered legend list.
    const num=document.createElementNS(SVGNS,'text');
    num.setAttribute('class','num'); num.setAttribute('x',a.x); num.setAttribute('y',a.y);
    num.setAttribute('dy','0.22em'); num.textContent=a.id;
    num.setAttribute('transform',`rotate(${-PLACEMENT.rot} ${a.x} ${a.y})`);
    // .pulse: the breathing wrapper (CSS animation owns its transform — nothing else touches
    // it). The numeral keeps its counter-rotation attribute inside, untouched by the breath.
    const pulse=document.createElementNS(SVGNS,'g'); pulse.setAttribute('class','pulse');
    pulse.appendChild(core); pulse.appendChild(num);
    // .hit: the ONE shape the pointer tests against — fixed size, never animated. A <g> has no
    // box of its own (its hit region is the union of its children), so with only the breathing/
    // hover-scaled core to hit, the rim moved under a parked cursor and hover toggled (Firefox
    // jitter). Everything animated below is pointer-events:none; this circle owns the events.
    const hit=document.createElementNS(SVGNS,'circle');
    hit.setAttribute('class','hit'); hit.setAttribute('cx',a.x); hit.setAttribute('cy',a.y); hit.setAttribute('r',DOT_R*1.35);
    const reveal=document.createElementNS(SVGNS,'g'); reveal.setAttribute('class','dot-reveal');
    reveal.appendChild(hit); reveal.appendChild(halo); reveal.appendChild(pulse);
    grp.appendChild(reveal); g.appendChild(grp);
    grp.addEventListener('click', e=>{ e.stopPropagation(); flyTo(a.id); });
    // Hover whispers the amenity's name above the note's hairline (the .dot-name slot).
    grp.addEventListener('mouseenter', ()=>{
      const n = document.querySelector('.precinct-note .dot-name');
      if(n){ n.textContent = a.name; n.classList.add('on'); }
    });
    grp.addEventListener('mouseleave', ()=>{
      const n = document.querySelector('.precinct-note .dot-name');
      if(n) n.classList.remove('on');
    });
    dotEls.push(grp); markerRefs.amenity.push({grp, cx:a.x, cy:a.y});
  });
}
// Amenity photos fetch only when the chapter first approaches the viewport — a visitor who
// never reaches the map costs nothing, and a diver finds them already cached. Fired from
// the chapter-visibility trigger below.
let photosLoaded=false;
function loadAmenityPhotos(){
  if(photosLoaded) return; photosLoaded=true;
  for(const a of AMENITIES){ const im=new Image(); im.src=`${PHOTO_DIR}/${a.id}.jpg?v=${PHOTO_V}`; }
}
// (raw POI dots removed — the curated destination labels are the neighbourhood layer)
function buildBusStops(){
  const g=document.getElementById('busstops');
  for(const s of BUSSTOPS){
    const grp=document.createElementNS(SVGNS,'g'); grp.setAttribute('class','busstop');
    grp.dataset.name=s.name; grp.dataset.cat='bus';
    const halo=document.createElementNS(SVGNS,'circle'); halo.setAttribute('class','marker-halo');
    halo.setAttribute('cx',s.x); halo.setAttribute('cy',s.y); halo.setAttribute('r',5.15); halo.setAttribute('fill','#1c1e19');
    const c=document.createElementNS(SVGNS,'circle');
    c.setAttribute('cx',s.x); c.setAttribute('cy',s.y); c.setAttribute('r',5.15); c.setAttribute('fill','#1c1e19');
    grp.appendChild(halo); grp.appendChild(c); g.appendChild(grp); markerRefs.busstop.push({grp, cx:s.x, cy:s.y});
  }
}
function buildSuburbs(){
  const g=document.getElementById('suburbs');
  // suburb labels (uppercase, bigger)
  const LH_S=14;
  for(const s of SUBURBS){
    const t=document.createElementNS(SVGNS,'text'); t.setAttribute('class','sublabel');
    const y0=s.y-(s.lines.length-1)*LH_S/2;
    s.lines.forEach((ln,i)=>{
      const ts=document.createElementNS(SVGNS,'tspan');
      ts.setAttribute('x',s.x); ts.setAttribute('y',y0+i*LH_S); ts.textContent=ln;
      t.appendChild(ts);
    });
    g.appendChild(t);
  }
  // landmark labels (mixed case, smaller — parks, reserves, beaches, golf courses)
  const LH_L=8;
  for(const l of LANDMARKS){
    const t=document.createElementNS(SVGNS,'text'); t.setAttribute('class','lmlabel');
    const y0=l.y-(l.lines.length-1)*LH_L/2;
    l.lines.forEach((ln,i)=>{
      const ts=document.createElementNS(SVGNS,'tspan');
      ts.setAttribute('x',l.x); ts.setAttribute('y',y0+i*LH_L); ts.textContent=ln;
      t.appendChild(ts);
    });
    g.appendChild(t);
  }
}
function buildRoads(){
  const g=document.getElementById('roads');
  // Collect the map's white road paths (fills) and stroke roads — the underlying road network
  const roadPaths=[...document.querySelectorAll('#area path')].filter(p=>{
    const f=p.getAttribute('fill'), s=p.getAttribute('stroke');
    return (f && f.toLowerCase()==='#ffffff') || (s && (s.toLowerCase()==='#ffffff' || s.toLowerCase()==='#f4f4f4'));
  });
  function angleAt(x,y){
    // Find the closest point on the closest road path; return its tangent angle in degrees
    let bestD=Infinity, bestP=null, bestPath=null, bestLen=0;
    for(const p of roadPaths){
      const L=p.getTotalLength(); if(!L) continue;
      const step=Math.max(2, L/80);
      for(let l=0;l<=L;l+=step){
        const pt=p.getPointAtLength(l);
        const d=(pt.x-x)**2+(pt.y-y)**2;
        if(d<bestD){ bestD=d; bestP=pt; bestPath=p; bestLen=l; }
      }
    }
    if(!bestPath) return 0;
    const eps=0.5, L=bestPath.getTotalLength();
    const a=bestPath.getPointAtLength(Math.max(0,bestLen-eps));
    const b=bestPath.getPointAtLength(Math.min(L,bestLen+eps));
    let deg=Math.atan2(b.y-a.y, b.x-a.x)*180/Math.PI;
    if(deg>90) deg-=180; if(deg<-90) deg+=180;    // keep upright
    return deg;
  }
  for(const r of ROADS){
    const t=document.createElementNS(SVGNS,'text'); t.setAttribute('class','rlabel');
    t.setAttribute('x',r.x); t.setAttribute('y',r.y); t.textContent=r.n;
    const deg=angleAt(r.x,r.y);
    t.setAttribute('transform',`rotate(${deg.toFixed(1)} ${r.x} ${r.y})`);
    g.appendChild(t);
  }
}
function buildStations(){
  const g=document.getElementById('stations');
  for(const s of STATIONS){
    const grp=document.createElementNS(SVGNS,'g'); grp.setAttribute('class','station');
    grp.dataset.name=s.name; grp.dataset.cat='train';
    const halo=document.createElementNS(SVGNS,'circle'); halo.setAttribute('class','marker-halo');
    halo.setAttribute('cx',s.x); halo.setAttribute('cy',s.y); halo.setAttribute('r',4.5); halo.setAttribute('fill','#40453b');
    const c=document.createElementNS(SVGNS,'circle'); c.setAttribute('cx',s.x); c.setAttribute('cy',s.y); c.setAttribute('r',4.5);
    const left = s.x>900;                              // right-edge stations label to the left
    const t=document.createElementNS(SVGNS,'text'); t.setAttribute('class','stlabel');
    t.setAttribute('x', s.x + (left?-8:8)); t.setAttribute('y', s.y);
    t.setAttribute('text-anchor', left?'end':'start'); t.setAttribute('dominant-baseline','central');
    t.textContent = s.name;
    grp.appendChild(halo); grp.appendChild(c); grp.appendChild(t); g.appendChild(grp); markerRefs.station.push({grp, cx:s.x, cy:s.y});
  }
}
function buildLabels(){
  const g=document.getElementById('labels'), LH=15;   // line height, precinct-own units
  for(const L of LABELS){
    const t=document.createElementNS(SVGNS,'text'); t.setAttribute('class','blabel'); t.setAttribute('text-anchor','middle');
    const y0=L.y-(L.lines.length-1)*LH/2;
    L.lines.forEach((ln,i)=>{
      const ts=document.createElementNS(SVGNS,'tspan');
      ts.setAttribute('x',L.x); ts.setAttribute('y',y0+i*LH); ts.textContent=ln;
      t.appendChild(ts);
    });
    g.appendChild(t);
  }
}
function buildPanels(){
  const c=document.getElementById('content');
  for(const a of AMENITIES){
    const cat=CATEGORIES[a.cat].label;   // colour comes from the SVG dot itself, not the panel
    const p=document.createElement('div'); p.className='panel'; p.dataset.id=a.id;
    p.innerHTML=`<div class="panel-in">
      <span class="eyebrow">${cat} · ${buildingFor(a.x,a.y)}</span>
      <h2>${a.name}</h2>
      <p>${a.blurb}</p>
      <span class="back">Click anywhere to return</span>
    </div>`;
    c.appendChild(p); panelEls.push(p);
  }
}

/*──────────────── input ────────────────*/
// The journey link: one verb at a time. At home it reads "Explore the neighbourhood";
// out there it reads "Back to Loam House". Label swap is CSS, driven by the chapter's
// data-mode (set in syncNav) — this handler only decides the destination.
document.querySelector('#map-nav .map-journey')?.addEventListener('click', ()=>{
  // The zoom gesture: see the building in context (a clean camera pull-out — base
  // cartography only), and back. From inside a dive it is a return gesture first.
  if(isAmenity(focus)){ back(); return; }
  flyTo(focus === 'area' ? 'precinct' : 'area');
});
map.addEventListener('click', ()=>{ if(isAmenity(focus)) back(); });
document.getElementById('content').addEventListener('click', back);
addEventListener('keydown', e=>{
  if(e.key!=='Escape') return;
  // If the highlight takeover is open, Escape closes it (handled by its own listener) — don't also fly the camera.
  if(document.getElementById('poi-detail')?.classList.contains('open')) return;
  back();
});
function syncNav(){
  // Mode derives from focus: area = neighbourhood, everything else (precinct, an amenity
  // dive) = precinct. The chapter's data-mode drives the journey link's label and the
  // colour key's visibility — pure CSS from here.
  const chapter = document.querySelector('.map-chapter');
  if(chapter) chapter.dataset.mode = focus === 'area' ? 'neighbourhood' : 'precinct';
}

/*──────────────── boot ────────────────*/
async function inject(url,id){
  const t=await(await fetch(url)).text();
  const doc=new DOMParser().parseFromString(t,'image/svg+xml').querySelector('svg');
  const g=document.getElementById(id); while(doc.firstChild) g.appendChild(doc.firstChild);
}
const preXf = `translate(${PLACEMENT.tx} ${PLACEMENT.ty}) scale(${PLACEMENT.s}) rotate(${PLACEMENT.rot} ${PLACEMENT.pivx} ${PLACEMENT.pivy})`;
document.getElementById('precinct').setAttribute('transform', preXf);
document.getElementById('dots').setAttribute('transform', preXf);  // amenity dots share precinct's transform but render above POIs
document.getElementById('cliprect').setAttribute('y',CLIP_TOP);
document.getElementById('cliprect').setAttribute('height',830-CLIP_TOP);

addEventListener('resize', ()=>{
  AREA_VB = areaVB(); TARGETS.area.vb = AREA_VB.slice();
  TARGETS.precinct.vb = precinctVB();
  if(window.__mapCam) window.__mapCam.set();   // drop the cached entry path — it targets the precinct frame
  if(focus==='area'){ camVB = AREA_VB.slice(); setVB(camVB); render(); }
  else if(focus==='precinct' && !raf && !active){ camVB = TARGETS.precinct.vb.slice(); setVB(camVB); render(); }
});

/*──────────────── Neighbourhood destinations ────────────────
  "Minutes from home." Eight curated destinations, each a TARGET in the same tree as the
  amenities: click a destination label → the camera flies to frame it and its copy composes
  over the map (the dive-panel idiom); click the open map → fly back out. One navigation
  rule for the whole chapter. Labels carry their minutes, so the neighbourhood states its
  case with zero interaction required. */
const LOAM_XY = mapPoint(730, 470);   // precinct pivot → area coords



// Destination copy composes over the map exactly like the amenity dive panels — same
// #content surface, same idiom, an ink variant for the light map ground.
let destActive = null, destTl = null;
// Diagnostic bisection switches for the dive flicker (temporary, URL-gated):
// Entrance: the site's chapter vocabulary as a short performance over the map — headline in
// from the side with a held blur, eyebrow from the right, body rising after, staggered.
function destPanelIn(id){
  const p = panelEls.find(e => e.dataset.id === id);   // amenity and destination ids never collide — one finder, one performance
  if(!p) return;
  destActive = id;
  if(destTl) destTl.kill();
  const eb = p.querySelector('.eyebrow'), h2 = p.querySelector('h2'),
        body = p.querySelector('p'), back = p.querySelector('.back');
  // Headline splits into lines once (lazily — fonts are certainly loaded by interaction
  // time) and each line enters from ALTERNATING sides at the site's real distances.
  if(!p._lines && window.SplitText){
    p._lines = new SplitText(h2, { type: 'lines' }).lines;
  }
  const lines = p._lines || [h2];
  const dir = i => (i % 2 ? 1 : -1) * Math.max(innerWidth, 1) * 0.28;
  p.style.pointerEvents = 'auto';
  // The hero entrance recipe, verbatim values. Destinations keep the hero's own timeScale;
  // amenity dives read theirs from ?tune (textSpeed) so the pace is hand-tunable.
  const TTp = (window.__mapTune && window.__mapTune.T) || {};
  destTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  destTl.timeScale(TTp.textSpeed || 1.5)
    .fromTo(p,     { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power1.out' }, 0)
    .fromTo(lines, { x: dir, opacity: 0 }, { x: 0, opacity: 1, duration: 2.6, ease: 'expo.out' }, 0.05)
    .fromTo(eb,    { y: 46, opacity: 0 }, { y: 0, opacity: 1, duration: 1.82 }, 1.6)
    .fromTo([body, back], { y: 46, opacity: 0 }, { y: 0, opacity: 1, duration: 1.82, stagger: 0.15 }, 1.6);
  destTl
    .fromTo(lines, { filter: 'blur(16px)' }, { filter: 'blur(0px)', duration: 3.06, ease: 'power1.out' }, 0.05)
    .fromTo(eb,    { filter: 'blur(9px)' }, { filter: 'blur(0px)', duration: 2.9, ease: 'power1.out' }, 1.6)
    .fromTo([body, back], { filter: 'blur(9px)' }, { filter: 'blur(0px)', duration: 2.9, ease: 'power1.out', stagger: 0.15 }, 1.6);
}

// Exit mirrors the hero OUT's character: blur leads, lines return the way they came,
// the small pieces drop away — playing WHILE the camera departs.
function destPanelOut(){
  if(destActive == null) return;
  const p = panelEls.find(e => e.dataset.id === destActive);
  destActive = null;
  if(destTl) destTl.kill();
  if(!p) return;
  p.style.pointerEvents = 'none';
  const eb = p.querySelector('.eyebrow'), body = p.querySelector('p'), back = p.querySelector('.back');
  const lines = p._lines || [p.querySelector('h2')];
  const dir = i => (i % 2 ? 1 : -1) * Math.max(innerWidth, 1) * 0.28;
  destTl = gsap.timeline({ defaults: { ease: 'power2.in' } });
  destTl.timeScale(1.5)
    .to(lines, { x: dir, opacity: 0, duration: 1.0, ease: 'power2.out' }, 0)
    .to(eb,    { y: 46, opacity: 0, duration: 0.6 }, 0)
    .to([body, back], { y: -26, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.1)
    .to(p, { opacity: 0, duration: 0.35, ease: 'power1.in',
             onComplete(){ gsap.set([p, eb, body, back, ...lines], { clearProps: 'all' }); } }, 0.9);
  destTl
    .to(lines, { filter: 'blur(14px)', duration: 0.5, ease: 'power2.out' }, 0)
    .to(eb,    { filter: 'blur(9px)', duration: 0.6 }, 0)
    .to([body, back], { filter: 'blur(7px)', duration: 0.7, stagger: 0.08 }, 0.1);
}


// (takeover, count-up and Leaflet route inset removed — destination depth now composes
//  over the map itself via the dive-panel idiom. The route data files remain on disk for
//  a future walking-route feature.)



Promise.all([
  inject('assets/map/area_clean.svg','area'),
  inject('assets/map/precinct_clean.svg','preinner'),
]).then(()=>{
  buildDots(); buildLabels(); buildRoads(); buildStations(); buildBusStops(); buildSuburbs(); buildPanels();

  // ── Ambient pulse ── the dot breathes; the contraction releases the ping. One clock per
  // dot (its own random phase), five ?tune knobs, applied live — no rebuild needed.
  function applyPulse(){
    const T = (window.__mapTune && window.__mapTune.T) || {};
    const period = T.pulsePeriod || 2.6;
    EL.dots.style.setProperty('--pulse-period', period + 's');
    // --breath-scale belongs to render() — it grades the amplitude by altitude every frame.
    EL.dots.style.setProperty('--ping-scale', String(T.pingScale || 2.4));
    EL.dots.style.setProperty('--ping-op', String(T.pingOp != null ? T.pingOp : 0.35));
    const phase = T.pingPhase != null ? T.pingPhase : 0.55;
    for(const d of dotEls){
      const ph = d._ph || 0;
      const pu = d.querySelector('.pulse'), pi = d.querySelector('.ping');
      if(pu) pu.style.animationDelay = (-ph * period).toFixed(2) + 's';
      if(pi) pi.style.animationDelay = ((-ph + phase) * period).toFixed(2) + 's';
    }
    render();   // re-grade --breath-scale for the current altitude (live slider changes)
  }
  window.__mapPulse = applyPulse;
  applyPulse();
  setVB(camVB); render();

  // Panel headlines split at BUILD, behind the same fonts gate the site's chapters use —
  // never lazily at interaction time. A mid-flight SplitText forces a full synchronous
  // layout of the viewport-sized panel on one frame: the flash just before the copy enters.
  if(window.SplitText && document.fonts && document.fonts.ready){
    document.fonts.ready.then(() => {
      for(const p of panelEls){
        const h2 = p.querySelector('h2');
        if(h2 && !p._lines){ try{ p._lines = new SplitText(h2, { type: 'lines' }).lines; }catch(e){} }
      }
    });
  }

  /* ── Chapter-entry camera ── the map's own viewBox flies in over the first half of the
     chapter's scroll band, holds at rest through the centre, and flies back out over the
     second half — mirroring the site's IN/hold/OUT reveal scheme. Rotation rides the dive's
     idiom (fades to zero on arrival, scale-compensated so edges never appear). Because this
     IS the camera system, zooming shows more real map — no clipped edges, no giant
     composited layer, no raster flashing. */
  if (window.gsap && window.ScrollTrigger){
    const chapter = document.querySelector('.map-chapter');
    if (chapter){
      const [lx, ly] = LOAM_XY;

      // The camera is exposed as a tiny hook; editorial.js drives it on the SAME scrubbed,
      // mirrored timeline grammar as every other chapter move (same band, same scrub, the
      // heading's power3.out). No bespoke timing lives here — just how a t maps to a frame.
      // Start distance (× the precinct rest view) and rotation are settable so the tuning
      // panel can drive them; camDist 2.4 / camRot 15 are the shipped values (hand-tuned).
      const camState = { t: 0 };
      let camDist = 2.4, camRot = 15, camEntryPath = null;
      const entryPath = () => camEntryPath || (camEntryPath = camPath(
        [lx - 117 * camDist / 2, ly - 83 * camDist / 2, 117 * camDist, 83 * camDist],
        TARGETS.precinct.vb.slice()));
      window.__mapCam = {
        state: camState,
        set(dist, rot){
          if (dist > 0) camDist = dist;
          if (rot != null) camRot = rot;
          camEntryPath = null;   // path recomputes lazily from the new distance
        },
        apply(){
          if (!entryCamOwned || raf || active) return;   // never fight a user flight or a dive
          camVB = entryPath().at(camState.t);
          setVB(camVB);
          setSpin(GECKO ? 0 : camRot * (1 - camState.t));   // in-SVG rotation — same paint pass as the viewBox, no compositor mismatch
          render();
        },
      };
      window.__mapCam.apply();   // frame the far view until the chapter's timeline takes over

      // Re-arm the entry camera only once the chapter is fully off screen, so retaking
      // the camera never causes a visible jump.
      ScrollTrigger.create({
        trigger: chapter,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: loadAmenityPhotos,
        onEnterBack: loadAmenityPhotos,
        onLeave(){ entryCamOwned = true; },
        onLeaveBack(){ entryCamOwned = true; },
      });
      // Page may load with the chapter already in range — the trigger only fires on crossings.
      const r = chapter.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) loadAmenityPhotos();
    }
  }

  // Signal editorial.js that the map's DOM (dots, POIs, labels, chrome) is populated
  // so it can now set up the chapter reveal timeline against real elements.
  window.__mapReady = true;
  window.dispatchEvent(new Event('map-ready'));
});
})();
