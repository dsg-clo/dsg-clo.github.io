function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

function populatePage(code) {
  const data = KC_DETAIL_DATA[code];
  if (!data) return;

  document.getElementById("pageBranchName").innerText =
    data.identitas.nama_unit_kerja;

  document.getElementById("m-name").innerText = data.identitas.nama_unit_kerja;
  document.getElementById("m-code").innerText = data.identitas.branch_code;
  document.getElementById("m-kelas").innerText = data.identitas.kelas;
  document.getElementById("m-klasifikasi").innerText =
    data.identitas.klasifikasi_wilayah;
  document.getElementById("m-type").innerText = data.identitas.branch_type;
  document.getElementById("m-region").innerText = data.identitas.region;
  document.getElementById("m-area").innerText = data.identitas.area;
  document.getElementById("m-alamat").innerText = data.identitas.alamat;

  // Format branch
  const formatList = document.getElementById("m-format-list");
  Object.entries(data.format_branch).forEach(([k, v]) => {
    formatList.innerHTML += `
      <div class="flex gap-2">
        <span class="material-icons ${v ? "text-green-500" : "text-red-500"}">
          ${v ? "check_circle" : "cancel"}
        </span>
        ${k.replace("_", " ")}
      </div>`;
  });

  // E-channel
  const ec = document.getElementById("echannel-container");
  ["atm", "crm", "edc", "qris", "brilink"].forEach((k) => {
    ec.innerHTML += `
      <div class="bg-white p-4 rounded shadow">
        <p class="font-bold uppercase">${k}</p>
        <p>${data[k].jml} Unit</p>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const code = getQueryParam("code");
  if (code) populatePage(code);
});

// TAB
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.onclick = () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("tab-active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.add("hidden"));
    btn.classList.add("tab-active");
    document
      .querySelector(`[data-tab="${btn.dataset.tabTarget}"]`)
      .classList.remove("hidden");
  };
});
