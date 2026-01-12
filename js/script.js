// 1. Config & Data
const map = L.map("map").setView([0.79, 102.02], 10);

// 🔥 WAJIB: PANE untuk mengatur Z-Index Layer
map.createPane("polygonRegion");
map.getPane("polygonRegion").style.zIndex = 300;

map.createPane("polygonArea");
map.getPane("polygonArea").style.zIndex = 250;

map.createPane("polygonKab");
map.getPane("polygonKab").style.zIndex = 650;

map.createPane("pinpointKC");
map.getPane("pinpointKC").style.zIndex = 700;

let pinpointKC = null;
let polygonRegion = null;
let polygonArea = null;
let polygonKab = null;

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

// Data Pinpoint (Statis & Dinamis)
const branchData = [
  {
    name: "KC Siak",
    code: "1190",
    region: "Region 2 – Pekanbaru",
    type: "Kantor Cabang",
    address: "Jl. Raja Kecik RT.12 RW.4",
    pos: [0.798317, 102.049247],
    color: "#1e3a8a",
  },
  {
    name: "KC Perawang",
    code: "1234",
    region: "Region 2 – Pekanbaru",
    type: "Kantor Cabang",
    address: "Jl. Raya Perawang No. 10",
    pos: [0.68, 101.62],
    color: "#1e3a8a",
  },
  {
    name: "KC Tambusai",
    code: "5566",
    region: "Region 2 – Pekanbaru",
    type: "Kantor Cabang",
    address: "Jl. Tuanku Tambusai",
    pos: [0.65, 101.45],
    color: "#1e3a8a",
  },
  {
    name: "KC Dumai",
    code: "7788",
    region: "Region 2 – Pekanbaru",
    type: "Kantor Cabang",
    address: "Jl. Jend. Sudirman Dumai",
    pos: [1.67, 101.44],
    color: "#1e3a8a",
  },
];

// 2. Fungsi Mapping Data ke Modal (Semua Tab)
function populateModalData(code) {
  const data = KC_DETAIL_DATA[code];
  if (!data) return;

  // --- TAB INFORMASI ---
  const id = data.identitas;
  document.getElementById("m-name").innerText = id.nama_unit_kerja;
  document.getElementById("m-code").innerText = id.branch_code;
  document.getElementById("m-kelas").innerText = ": " + id.kelas;
  document.getElementById("m-klasifikasi").innerText =
    ": " + id.klasifikasi_wilayah;
  document.getElementById("m-type").innerText = ": " + id.branch_type;
  document.getElementById("m-supervisi").innerText = ": " + id.kc_supervisi;
  document.getElementById("m-region").innerText = ": " + id.region;
  document.getElementById("m-area").innerText = ": " + id.area;
  document.getElementById("m-koordinat").innerText = ": " + id.koordinat;
  document.getElementById("m-alamat").innerText = ": " + id.alamat;

  // Format Branch List
  const formatList = document.getElementById("m-format-list");
  formatList.innerHTML = "";
  Object.entries(data.format_branch).forEach(([key, val]) => {
    const status = val ? "check_circle" : "cancel";
    const color = val ? "text-green-500" : "text-red-400";
    formatList.innerHTML += `
      <div class="flex items-center gap-2">
        <span class="material-icons ${color} text-sm">${status}</span>
        <span class="capitalize">${key.replace("_", " ")}</span>
      </div>`;
  });

  // Gedung
  document.getElementById("m-gedung-jenis").innerText =
    data.kepemilikan_gedung.jenis;
  document.getElementById("m-gedung-harga").innerText =
    data.kepemilikan_gedung.harga;
  document.getElementById("m-gedung-tempo").innerText =
    data.kepemilikan_gedung.jatuh_tempo;

  // --- TAB E-CHANNEL ---
  const ecContainer = document.getElementById("echannel-container");
  ecContainer.innerHTML = "";
  const ecKeys = ["atm", "crm", "edc", "qris", "brilink"];
  ecKeys.forEach((key) => {
    const item = data[key];
    ecContainer.innerHTML += `
      <div class="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
        <p class="text-xs font-bold text-gray-400 uppercase">${key}</p>
        <p class="text-2xl font-bold">${
          item.onatm ||
          item.onedc ||
          item.onqris ||
          item.onbrilink ||
          item.oncrm
        } Unit</p>
        <div class="mt-2 text-[10px] text-gray-500">Rel: ${
          item["rel" + key] || "100%"
        } | Prd: ${item["prd" + key] || "100%"}</div>
      </div>`;
  });

  // --- TAB PERFORMANCE ---
  document.getElementById("m-perf-kpi").innerText =
    data.performance_potensi.kpi.score;
  document.getElementById("m-perf-dpk").innerText =
    data.performance_potensi.total_dpk.market_share_total + "%";
  document.getElementById("m-perf-npl").innerText =
    data.performance_potensi.kredit.npl.current_value;

  // --- TAB HC ---
  const hcTable = document.getElementById("m-hc-table");
  hcTable.innerHTML = "";
  data.human_capital.detail_formasi.forEach((row) => {
    hcTable.innerHTML += `
      <tr class="border-b">
        <td class="px-4 py-2">${row.jabatan}</td>
        <td class="px-4 py-2 text-center">${row.formasi}</td>
        <td class="px-4 py-2 text-center">${row.pemenuhan}</td>
        <td class="px-4 py-2 text-center text-red-600 font-bold">${row.gap}</td>
      </tr>`;
  });

  // --- TAB CUSTOMER ---
  document.getElementById("m-cust-total").innerText =
    data.customer.total_cif.total.toLocaleString();
  const genContainer = document.getElementById("m-cust-gen");
  genContainer.innerHTML = "";
  data.customer.demographic_generation.forEach((g) => {
    genContainer.innerHTML += `
      <div class="flex justify-between border-b pb-1">
        <span>${g.label}</span>
        <span class="font-bold">${g.value.toLocaleString()}</span>
      </div>`;
  });
}

// 3. Functions UI
function openModal(name, code) {
  document.getElementById("modalBranchName").innerText = name;

  // Panggil fungsi pengisi data
  populateModalData(code);

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("detailModal").classList.add("hidden");
}

// 4. Markers Inisialisasi
branchData.forEach((item) => {
  const marker = L.circleMarker(item.pos, {
    radius: 8,
    fillColor: item.color,
    color: "#fff",
    weight: 2,
    fillOpacity: 1,
  }).addTo(map);

  const popupContent = `
        <table class="esri-table">
            <tbody>
                <tr><th>Region</th><td>${item.region}</td></tr>
                <tr><th>Kode Uker</th><td>${item.code}</td></tr>
                <tr><th>Nama Uker</th><td>${item.name}</td></tr>
                <tr><th>Alamat</th><td>${item.address}</td></tr>
            </tbody>
        </table>
        <div class="popup-footer">
            <button class="popup-btn" onclick="openModal('${item.name}', '${item.code}')">
                MORE INFO
            </button>
        </div>
    `;
  marker.bindPopup(popupContent);
});

// 5. Event Listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// TAB MODAL HANDLER
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tabTarget;
    tabButtons.forEach((b) => {
      b.classList.remove("tab-active");
      b.classList.add("text-gray-600");
    });
    tabContents.forEach((c) => c.classList.add("hidden"));
    btn.classList.add("tab-active");
    btn.classList.remove("text-gray-600");
    document.querySelector(`[data-tab="${target}"]`).classList.remove("hidden");
  });
});

// 6. Layer GeoJSON Loaders
function loadPinpointKC() {
  fetch("geojson/point.geojson")
    .then((res) => res.json())
    .then((data) => {
      if (pinpointKC) map.removeLayer(pinpointKC);
      pinpointKC = L.geoJSON(data, {
        pane: "pinpointKC",
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#1e3a8a",
            color: "#fff",
            weight: 2,
            fillOpacity: 1,
          });
        },
        onEachFeature: (feature, layer) => {
          const p = feature.properties;
          const popupContent = `
            <table class="esri-table">
              <tr><th>Region</th><td>${p["Region"]}</td></tr>
              <tr><th>Kode Uker</th><td>${p["Kode Uker"]}</td></tr>
              <tr><th>Nama Uker</th><td>${p["Nama Uker"]}</td></tr>
              <tr><th>Alamat</th><td>${p["Alamat"]}</td></tr>
            </table>
            <div class="popup-footer">
              <button class="popup-btn" onclick="openModal('${p["Nama Uker"]}', '${p["Kode Uker"]}')">
                MORE INFO
              </button>
            </div>`;
          layer.bindPopup(popupContent);
          layer.bindTooltip(p["Nama Uker"], { direction: "top" });
        },
      }).addTo(map);
    })
    .catch((err) => console.error("Branch GeoJSON error:", err));
}

function loadPolygonRegion(fileName) {
  fetch(`geojson/${fileName}`)
    .then((res) => res.json())
    .then((data) => {
      if (polygonRegion) map.removeLayer(polygonRegion);
      polygonRegion = L.geoJSON(data, {
        pane: "polygonRegion",
        style: {
          color: "#2563eb",
          weight: 2,
          fillColor: "#3b82f6",
          fillOpacity: 0.25,
        },
        onEachFeature: (feature, layer) => {
          const title = feature.properties?.["Region"] || "Region 2";
          layer.bindTooltip(title, { sticky: true });
          layer.on("click", () => openModal(title, "1190")); // Default Siak Data
        },
      }).addTo(map);
    });
}

function loadPolygonArea(fileName) {
  fetch(`geojson/${fileName}`)
    .then((res) => res.json())
    .then((data) => {
      if (polygonArea) map.removeLayer(polygonArea);
      polygonArea = L.geoJSON(data, {
        pane: "polygonArea",
        style: {
          color: "#2563eb",
          weight: 2,
          fillColor: "#3b82f6",
          fillOpacity: 0.25,
        },
        onEachFeature: (feature, layer) => {
          const title = feature.properties?.["Nama Claster Baru"] || "Area";
          layer.bindTooltip(title, { sticky: true });
          layer.on("click", () => openModal(title, "1190"));
        },
      }).addTo(map);
    });
}

function loadPolygonKab(fileName) {
  fetch(`geojson/${fileName}`)
    .then((res) => res.json())
    .then((data) => {
      if (polygonKab) map.removeLayer(polygonKab);
      polygonKab = L.geoJSON(data, {
        pane: "polygonKab",
        style: {
          color: "#2563eb",
          weight: 2,
          fillColor: "#3b82f6",
          fillOpacity: 0.25,
        },
        onEachFeature: (feature, layer) => {
          const title = feature.properties?.["WADMKK"] || "Kabupaten";
          layer.bindTooltip(title, { sticky: true });
          layer.on("click", () => openModal(title, "1190"));
        },
      }).addTo(map);
    });
}

// TOGGLES
function togglePolygonRegion() {
  if (polygonRegion)
    map.hasLayer(polygonRegion)
      ? map.removeLayer(polygonRegion)
      : polygonRegion.addTo(map);
}
function togglePolygonArea() {
  if (polygonArea)
    map.hasLayer(polygonArea)
      ? map.removeLayer(polygonArea)
      : polygonArea.addTo(map);
}
function togglePolygonKab() {
  if (polygonKab)
    map.hasLayer(polygonKab)
      ? map.removeLayer(polygonKab)
      : polygonKab.addTo(map);
}
function toggleMarker() {
  if (pinpointKC)
    map.hasLayer(pinpointKC)
      ? map.removeLayer(pinpointKC)
      : pinpointKC.addTo(map);
}

// AUTO LOAD
loadPolygonArea("pekanbaru.geojson");
loadPolygonKab("KabRiau.geojson");
loadPolygonRegion("Region_Riau.geojson");
loadPinpointKC();
