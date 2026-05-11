const nodes = {
  1:"Vestíbulo Principal",
  2:"Invernaderos",
  3:"Pasillo al Campanario",
  4:"Entrada al Vestíbulo",
  5:"Mazmorras de Slytherin",
  6:"Gran Escalera",
  7:"Pasillo de Relojes",
  8:"Gran Comedor",
  9:"Bodegas",
  10:"Pasillo de Rowena",
  11:"Pasillo de la Bruja Tuerta",
  12:"Torre de Facultad",
  13:"Vestíbulo de Profesorado",
  14:"Enfermería",
  15:"Pasillo Musical",
  16:"Torre de Gryff",
  17:"Baño de Mujeres",
  18:"Recibidor",
  19:"Patio del Viaducto",
  20:"Embarcadero",
  21:"Viaducto",
  22:"Aula de Adivinación",
  23:"Pasadizo Punzante",
  24:"Torre Oeste",
  25:"Cuidado de Criaturas Mágicas",
  26:"Patio del Campanario",
  27:"Entrada a Hogwarts",
  28:"Terrenos de Hogwarts",
  29:"Campo de Quidditch",
  30:"Patio del Invernadero",
  31:"Campanario",
  32:"Vestíbulo Norte",
  33:"Mazmorras",
  34:"Aula de EEMM",
  35:"Camino Sinuoso",
  36:"Lechucería",
  37:"Círculo de Piedra",
  38:"Salida Sur",
  39:"Torre del Reloj",
  40:"Pasillo de Mapas",
  41:"Baño de Hombres",
  42:"Pasillo Herodiana",
  43:"Torre de DCAO",
  44:"Aula de DCAO",
  45:"Quinto Piso",
  46:"Sexto Piso",
  47:"Séptimo Piso",
  48:"Aula de Astronomía",
  49:"Aula de Encantamientos",
  50:"Aula de Aritmancia",
  51:"Aula Abandonada",
  52:"Puente de Piedra",
  53:"Patio de Transformaciones",
  54:"Aula de Transformaciones",
  55:"Biblioteca",
  56:"Clase de Pociones",
  57:"Clase de Herbología",
  58:"Común de Slytherin",
  59:"Común Hufflepuff",
  60:"Común Ravenclaw",
  61:"Baño de Prefectos",
  62:"Aula HDM",
  63:"Red Flú Escolar",
  64:"Aula de Runas Antiguas",
  65:"Cabaña del Guardabosques",
  66:"Bosque Prohibido I",
  67:"Bosque Prohibido III",
  68:"Bosque Prohibido II",
  69:"Habitación 234-00",
  70:"Sauce boxeador"
};

const fluNetwork = {
  43: "torre de dcao",
  7: "pasillo de relojes",
  5: "mazmorras de slytherin",
  13: "enfermería",
  26: "campanario",
  46: "sexto piso",
  29: "campo de quidditch"
};

const fluNodes = [43, 7, 5, 13, 26, 46, 29];
const fluHub = 63;

const restrictedNodes = [66, 67, 68];

const BASE_URL = "./assets/";
const roomImages = {};
for(let i = 1; i <= 70; i++){
  roomImages[i] = BASE_URL + i + ".png";
}

function getImage(id){
  return roomImages[id] || "https://via.placeholder.com/1400x900?text=Sin+imagen";
}

const links = [
  [1,2],[1,3],[1,4],[1,53],[1,55],[1,56],
  [2,57],
  [3,31],
  [4,5],[4,6],[4,21],[4,22],[4,52],
  [5,6],[5,17],[5,18],[5,58],
  [6,7],[6,9],[6,10],[6,11],
  [7,8],[7,18],
  [9,59],
  [10,60],
  [11,12],
  [12,13],[12,15],[12,16],
  [13,14],[13,61],
  [15,40],
  [18,19],
  [19,20],[19,21],
  [23,24],[23,43],
  [24,25],
  [25,26],[25,35],
  [26,27],[26,30],[26,31],[26,70]
  [27,28],[27,29],
  [28,66],
  [31,32],
  [32,33],[32,53],[32,62],
  [33,34],
  [35,36],[35,37],
  [37,38],[37,65],
  [38,39],
  [39,40],
  [40,41],[40,42],
  [42,43],
  [43,44],[43,45],[43,52],[43,53],
  [45,46],[45,51],[45,64],
  [46,47],[46,49],[46,50],
  [47,48],
  [53,54],[53,69]
  [66,67],[66,68]
];

const pos = {
  1:[1300,900],
  55:[1120,760],
  56:[1450,760],
  2:[1700,900],
  57:[1870,900],

  3:[1500,620],
  31:[1680,580],
  32:[1820,760],
  62:[1980,760],
  33:[1960,900],
  34:[2120,980],

  12:[1300,500],
  13:[1450,390],
  61:[1600,300],
  14:[1600,430],
  15:[1160,360],
  16:[1060,430],

  4:[1300,1130],
  22:[1510,1110],
  52:[1120,1190],
  21:[1450,1320],
  19:[1460,1490],
  20:[1590,1630],

  5:[960,1090],
  58:[800,1090],
  17:[900,1260],
  18:[1100,1260],
  6:[1100,960],
  9:[930,940],
  59:[770,940],
  10:[1060,810],
  60:[960,680],
  11:[1230,790],
  7:[1170,1090],
  8:[1210,1240],

  40:[980,420],
  41:[850,330],
  42:[1100,350],
  43:[1240,340],
  23:[1380,490],
  24:[1540,560],
  44:[1390,250],
  45:[1250,160],
  51:[1110,100],
  46:[1390,110],
  50:[1260,35],
  49:[1520,55],
  47:[1530,180],
  48:[1660,120],
  64:[1150,30],

  25:[1740,1120],
  26:[1900,1220],
  30:[1850,1240],
  27:[2080,1290],
  29:[2080,1460],
  28:[2250,1380],
  35:[1770,1420],
  36:[1890,1540],
  37:[1890,1660],
  38:[2020,1780],
  39:[1830,1770],
  65:[2020,1660],
  66:[2450,1480],
  67:[2650,1480],
  68:[2450,1680],
  70:[1850,1420],

  53:[1500,920],
  54:[1580,1020],
  69:[1580,820],

  63:[580,760]
};

const map = document.getElementById("map");
const svg = document.getElementById("lines");
const infoContent = document.getElementById("infoContent");
const clearSelectionBtn = document.getElementById("clearSelection");
const startInput = document.getElementById("startInput");
const endInput = document.getElementById("endInput");
const roomsList = document.getElementById("roomsList");
const findRouteBtn = document.getElementById("findRouteBtn");
const clearRouteBtn = document.getElementById("clearRouteBtn");
const routeResult = document.getElementById("routeResult");

let selectedNodeId = null;
let currentRoute = [];
let currentRouteSteps = [];

const lineRefs = [];
const nodeRefs = {};
const connLabelRefs = [];
const fluLineRefs = [];

const graph = {};

function buildGraph(){
  Object.keys(nodes).forEach(id => {
    graph[id] = [];
  });

  links.forEach(([a,b]) => {
    graph[a].push({ to:b, type:"normal" });
    graph[b].push({ to:a, type:"normal" });
  });

  fluNodes.forEach(nodeId => {
    graph[fluHub].push({
      to: nodeId,
      type: "flu",
      word: fluNetwork[nodeId]
    });

    graph[nodeId].push({
      to: fluHub,
      type: "flu",
      word: fluNetwork[nodeId]
    });
  });
}

buildGraph();

links.forEach(([a,b])=>{
  if(!pos[a] || !pos[b]) return;

  const line = document.createElementNS("http://www.w3.org/2000/svg","line");
  line.setAttribute("x1", pos[a][0]);
  line.setAttribute("y1", pos[a][1]);
  line.setAttribute("x2", pos[b][0]);
  line.setAttribute("y2", pos[b][1]);
  svg.appendChild(line);

  lineRefs.push({a,b,el:line});
});

fluNodes.forEach(nodeId => {
  if(!pos[fluHub] || !pos[nodeId]) return;

  const line = document.createElementNS("http://www.w3.org/2000/svg","line");
  line.setAttribute("x1", pos[fluHub][0]);
  line.setAttribute("y1", pos[fluHub][1]);
  line.setAttribute("x2", pos[nodeId][0]);
  line.setAttribute("y2", pos[nodeId][1]);
  line.setAttribute("class", "flu-line");
  svg.appendChild(line);

  fluLineRefs.push({
    a: fluHub,
    b: nodeId,
    word: fluNetwork[nodeId],
    el: line
  });
});

function resetLines(){
  lineRefs.forEach(ref=>{
    ref.el.style.opacity = 0.7;
    ref.el.style.stroke = "#cfcfcf";
    ref.el.style.strokeWidth = "2";
  });

  fluLineRefs.forEach(ref=>{
    ref.el.classList.remove("active");
    ref.el.style.opacity = 0.18;
  });
}

function dimLines(){
  lineRefs.forEach(ref=>{
    ref.el.style.opacity = 0.1;
    ref.el.style.stroke = "#cfcfcf";
    ref.el.style.strokeWidth = "2";
  });

  fluLineRefs.forEach(ref=>{
    ref.el.classList.remove("active");
    ref.el.style.opacity = 0.02;
  });
}

function clearConnectionLabels(){
  connLabelRefs.forEach(el => el.remove());
  connLabelRefs.length = 0;
}

function highlightNodeConnections(id, persist=false){
  dimLines();

  const connected = [];

  lineRefs.forEach(ref=>{
    if(ref.a === id || ref.b === id){
      ref.el.style.opacity = 1;
      ref.el.style.stroke = "#ffffff";
      ref.el.style.strokeWidth = "3";
      connected.push({
        id: ref.a === id ? ref.b : ref.a,
        type: "normal",
        word: null
      });
    }
  });

  if(persist){
    fluLineRefs.forEach(ref=>{
      if(ref.a === id || ref.b === id){
        ref.el.classList.add("active");
        ref.el.style.opacity = 1;

        const otherId = ref.a === id ? ref.b : ref.a;

        if(!connected.some(item => item.id === otherId && item.type === "flu")){
          connected.push({
            id: otherId,
            type: "flu",
            word: ref.word || null
          });
        }
      }
    });

    clearConnectionLabels();

    connected.forEach(item=>{
      const [x, y] = pos[item.id];

      const label = document.createElement("div");
      label.className = "conn-label";

      if(item.type === "flu"){
        label.textContent = `${item.id} - ${nodes[item.id]} 🔥`;
      } else {
        label.textContent = `${item.id} - ${nodes[item.id]}`;
      }

      label.style.left = x + "px";
      label.style.top = (y - 26) + "px";
      map.appendChild(label);
      connLabelRefs.push(label);
    });

    let extraInfo = "";

    if(restrictedNodes.includes(id)){
      extraInfo += `<p class="sub">⛔ No es de conocimiento público</p>`;
    }

    if(id === fluHub){
      const fluList = fluNodes.map(fid =>
        `<li>${fid} - ${nodes[fid]} <br><small>Palabra: "${fluNetwork[fid]}"</small></li>`
      ).join("");

      infoContent.innerHTML = `
        <strong>${id} - ${nodes[id]}</strong>
        <p class="sub">🔥 Nodo central de Red Flú Escolar</p>
        <ul>${fluList}</ul>
      `;
      return;
    }

    if(fluNetwork[id]){
      extraInfo += `<p class="sub">🔥 Red Flú: "${fluNetwork[id]}"</p>`;
    }

    infoContent.innerHTML = `
      <strong>${id} - ${nodes[id]}</strong>
      ${extraInfo}
      <ul>
        ${connected.map(item => {
          if(item.type === "flu" && item.id !== fluHub){
            return `<li>${item.id} - ${nodes[item.id]} <small>(Red Flú: "${item.word}")</small></li>`;
          }
          if(item.type === "flu" && item.id === fluHub){
            return `<li>${item.id} - ${nodes[item.id]} <small>(Acceso Red Flú)</small></li>`;
          }
          return `<li>${item.id} - ${nodes[item.id]}</li>`;
        }).join("")}
      </ul>
    `;
  }
}

function clearSelection(){
  selectedNodeId = null;
  clearConnectionLabels();

  if(currentRoute.length === 0){
    resetLines();
  } else {
    highlightRoute({ nodes: currentRoute, steps: currentRouteSteps });
  }

  infoContent.textContent = "No hay nodo seleccionado.";
  Object.values(nodeRefs).forEach(el => el.classList.remove("selected"));
}

Object.keys(nodes).forEach(id=>{
  const numId = parseInt(id, 10);
  if(!pos[numId]) return;

  const div = document.createElement("div");
  div.className = "node";

  if (fluNodes.includes(numId)) {
    div.classList.add("flu");
  }

  if (numId === fluHub) {
    div.classList.add("flu-hub");
  }

  if (restrictedNodes.includes(numId)) {
    div.classList.add("restricted");
  }

  div.innerText = id;

  div.dataset.name = restrictedNodes.includes(numId)
    ? `${nodes[id]} ⛔ (No es de conocimiento público)`
    : nodes[id];

  div.style.left = pos[numId][0] + "px";
  div.style.top = pos[numId][1] + "px";

  div.onclick = (e) => {
    e.stopPropagation();
    selectedNodeId = numId;

    Object.values(nodeRefs).forEach(el => el.classList.remove("selected"));
    div.classList.add("selected");

    highlightNodeConnections(numId, true);
    openModal(getImage(numId));
  };

  div.onmouseenter = () => {
    if(selectedNodeId !== null || currentRoute.length > 1) return;
    highlightNodeConnections(numId, false);
  };

  div.onmouseleave = () => {
    if(selectedNodeId !== null || currentRoute.length > 1) return;
    resetLines();
  };

  map.appendChild(div);
  nodeRefs[numId] = div;
});

document.getElementById("viewport").addEventListener("click", (e)=>{
  if(e.target === document.getElementById("viewport") || e.target === map || e.target === svg){
    clearSelection();
  }
});

clearSelectionBtn.onclick = clearSelection;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

function openModal(src){
  modal.classList.remove("full");
  modalImg.src = src;
  modal.classList.add("active");
}

closeBtn.onclick = ()=>{
  modal.classList.remove("active");
  modal.classList.remove("full");
};

modalImg.ondblclick = ()=>{
  modal.classList.toggle("full");
};

document.addEventListener("click", (e) => {
  const isNode = e.target.closest(".node");
  const isModal = e.target.closest("#modal");

  if (!isNode && !isModal) {
    modal.classList.remove("active");
    modal.classList.remove("full");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
    modal.classList.remove("full");
  }
});

const routeModal = document.getElementById("routeModal");
const routeModalClose = document.getElementById("routeModalClose");
const routeGallery = document.getElementById("routeGallery");
const routeSequence = document.getElementById("routeSequence");

function openRouteModal(routeData){
  const textParts = [];
  textParts.push(`${routeData.nodes[0]} - ${nodes[routeData.nodes[0]]}`);

  routeData.steps.forEach(step => {
    if(step.type === "flu"){
      if(step.to === fluHub){
        textParts.push(`🔥 Red Flú Escolar`);
      } else {
        textParts.push(`🔥 "${step.word}"`);
      }
    }

    textParts.push(`${step.to} - ${nodes[step.to]}`);
  });

  routeSequence.innerHTML = `
    <strong>Recorrido:</strong><br>
    ${textParts.join(" → ")}
  `;

  routeGallery.innerHTML = routeData.nodes.map(id => `
    <div class="routeCard">
      <img
        src="${getImage(id)}"
        alt="${nodes[id]}"
        data-title="${id} - ${nodes[id]}"
      >
      <div class="meta">
        <strong>${id} - ${nodes[id]}</strong>
        <span>Orden en la ruta</span>
      </div>
    </div>
  `).join("");

  bindRouteHoverPreview();
  routeModal.classList.add("active");
}

routeModalClose.onclick = () => {
  routeModal.classList.remove("active");
  hideHoverPreview();
};

routeModal.onclick = (e) => {
  if(e.target === routeModal){
    routeModal.classList.remove("active");
    hideHoverPreview();
  }
};

const hoverPreview = document.getElementById("hoverPreview");
const hoverPreviewImg = document.getElementById("hoverPreviewImg");
const hoverPreviewCaption = document.getElementById("hoverPreviewCaption");

function showHoverPreview(src, title){
  hoverPreviewImg.src = src;
  hoverPreviewCaption.textContent = title || "";
  hoverPreview.classList.add("active");
}

function hideHoverPreview(){
  hoverPreview.classList.remove("active");
  hoverPreviewImg.src = "";
  hoverPreviewCaption.textContent = "";
}

function bindRouteHoverPreview(){
  const galleryImages = routeGallery.querySelectorAll("img");

  galleryImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
      showHoverPreview(img.src, img.dataset.title || img.alt);
    });

    img.addEventListener("mouseleave", () => {
      hideHoverPreview();
    });
  });
}

window.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    routeModal.classList.remove("active");
    hideHoverPreview();
  }
});

const roomOptions = [];

function populateSelects(){
  roomOptions.length = 0;

  const entries = Object.keys(nodes)
    .map(id => ({ id:Number(id), name:nodes[id] }))
    .sort((a,b) => a.id - b.id);

  roomsList.innerHTML = entries.map(item => {
    const label = `${item.id} - ${item.name}`;
    roomOptions.push({
      id: item.id,
      label,
      normalized: label.trim().toLowerCase()
    });

    return `<option value="${label}"></option>`;
  }).join("");
}

populateSelects();

function getRoomIdFromInput(value){
  const normalized = value.trim().toLowerCase();
  const match = roomOptions.find(opt => opt.normalized === normalized);
  return match ? match.id : null;
}

function validateRoomInput(input){
  const id = getRoomIdFromInput(input.value);

  if(input.value.trim() === ""){
    input.classList.remove("invalid");
    return null;
  }

  if(id === null){
    input.classList.add("invalid");
    return null;
  }

  input.classList.remove("invalid");
  return id;
}

[startInput, endInput].forEach(input => {
  input.addEventListener("change", () => validateRoomInput(input));
  input.addEventListener("blur", () => validateRoomInput(input));
  input.addEventListener("input", () => {
    if(input.classList.contains("invalid")){
      validateRoomInput(input);
    }
  });
});

function findShortestPath(start, end){
  start = Number(start);
  end = Number(end);

  if(start === end){
    return {
      nodes: [start],
      steps: []
    };
  }

  const queue = [{
    node: start,
    path: [start],
    steps: []
  }];

  const visited = new Set([start]);

  while(queue.length){
    const current = queue.shift();
    const last = current.node;

    for(const edge of graph[last]){
      const neighbor = edge.to;

      if(visited.has(neighbor)) continue;

      const newPath = [...current.path, neighbor];
      const newSteps = [...current.steps, {
        from: last,
        to: neighbor,
        type: edge.type,
        word: edge.word || null
      }];

      if(neighbor === end){
        return {
          nodes: newPath,
          steps: newSteps
        };
      }

      visited.add(neighbor);
      queue.push({
        node: neighbor,
        path: newPath,
        steps: newSteps
      });
    }
  }

  return null;
}

function isEdgeInRoute(a, b, routeSteps){
  for(const step of routeSteps){
    if(step.type !== "normal") continue;

    if((step.from === a && step.to === b) || (step.from === b && step.to === a)){
      return true;
    }
  }

  return false;
}

function highlightRoute(routeData){
  currentRoute = [...routeData.nodes];
  currentRouteSteps = [...routeData.steps];
  clearConnectionLabels();
  selectedNodeId = null;
  Object.values(nodeRefs).forEach(el => el.classList.remove("selected"));

  dimLines();

  lineRefs.forEach(ref => {
    if(isEdgeInRoute(ref.a, ref.b, routeData.steps)){
      ref.el.style.opacity = 1;
      ref.el.style.stroke = "#ff2a2a";
      ref.el.style.strokeWidth = "5";
    }
  });

  routeData.steps.forEach(step => {
    if(step.type === "flu"){
      const fromEl = nodeRefs[step.from];
      const toEl = nodeRefs[step.to];

      if(fromEl) fromEl.classList.add("selected");
      if(toEl) toEl.classList.add("selected");
    }
  });

  routeData.steps.forEach(step => {
    if(step.type === "flu"){
      fluLineRefs.forEach(ref => {
        if(
          (ref.a === step.from && ref.b === step.to) ||
          (ref.a === step.to && ref.b === step.from)
        ){
          ref.el.classList.add("active");
          ref.el.style.opacity = 1;
        }
      });
    }
  });

  const routeText = [];
  routeText.push(`${routeData.nodes[0]} - ${nodes[routeData.nodes[0]]}`);

  routeData.steps.forEach(step => {
    if(step.type === "flu"){
      if(step.to === fluHub){
        routeText.push(`🔥 Red Flú Escolar`);
      } else {
        routeText.push(`🔥 "${step.word}"`);
      }
    }

    routeText.push(`${step.to} - ${nodes[step.to]}`);
  });

  routeResult.innerHTML = `
    <strong>Ruta encontrada:</strong><br>
    ${routeText.join(" → ")}
  `;
}

function clearRoute(){
  currentRoute = [];
  currentRouteSteps = [];
  routeResult.textContent = "Selecciona dos lugares para trazar la ruta.";
  resetLines();
  hideHoverPreview();
}

findRouteBtn.onclick = () => {
  const start = validateRoomInput(startInput);
  const end = validateRoomInput(endInput);

  if(start === null || end === null){
    routeResult.textContent = "Debes elegir origen y destino desde las sugerencias válidas.";
    return;
  }

  const routeData = findShortestPath(start, end);

  if(!routeData || routeData.nodes.length === 0){
    routeResult.textContent = "No se encontró una ruta válida.";
    return;
  }

  highlightRoute(routeData);
  openRouteModal(routeData);
};

clearRouteBtn.onclick = () => {
  clearRoute();
  clearSelection();
  routeModal.classList.remove("active");
  startInput.classList.remove("invalid");
  endInput.classList.remove("invalid");
};

let scale = 1;
let offsetX = 0;
let offsetY = 0;
let dragging = false;
let lastX, lastY;

const viewport = document.getElementById("viewport");

function updateTransform(){
  map.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

viewport.addEventListener("wheel", (e) => {
  e.preventDefault();

  const zoomFactor = 1.1;
  const rect = viewport.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const worldX = (mouseX - offsetX) / scale;
  const worldY = (mouseY - offsetY) / scale;

  if (e.deltaY < 0) {
    scale *= zoomFactor;
  } else {
    scale /= zoomFactor;
  }

  scale = Math.min(Math.max(0.5, scale), 2.5);

  offsetX = mouseX - worldX * scale;
  offsetY = mouseY - worldY * scale;

  updateTransform();
});

viewport.addEventListener("mousedown", (e) => {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => dragging = false);

window.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  offsetX += e.clientX - lastX;
  offsetY += e.clientY - lastY;

  lastX = e.clientX;
  lastY = e.clientY;

  updateTransform();
});

window.onload = () => {
  offsetX = window.innerWidth / 2 - 1350;
  offsetY = window.innerHeight / 2 - 950;
  updateTransform();
};
