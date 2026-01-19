// --- DATA PENUNJANG KALKULASI ASLI ---
const onatm = 46,
  offatm = 20;
const oncrm = 46,
  offcrm = 20;
const onedc = 46,
  offedc = 20;
const onqris = 46,
  offqris = 20;
const onbrilink = 46,
  offbrilink = 20;

const KC_DETAIL_DATA = {
  1190: {
    type: "KC",
    identitas: {
      nama_unit_kerja: "KC Siak",
      branch_code: "1190",
      kelas: "IIA",
      klasifikasi_wilayah: "Urban",
      branch_type: "Kantor Cabang",
      kc_supervisi: "KC Siak",
      region: "Region 2 – Pekanbaru",
      area: "Area Siak",
      koordinat: "0.798317, 102.049247",
      alamat: "Jl. Raja Kecik RT.12 RW.4",
      desa: "Kampung Dalam",
      kecamatan: "Kec. Siak",
      kota_kab: "Kab. Siak",
      provinsi: "Riau",
      foto_url: "images/siak.webp",
    },
    format_branch: {
      konvensional: false,
      senyum: false,
      pnm: false,
      pegadaian: false,
      hybrid: true,
      qms: false,
      digital_cs: true,
      community_branch: false,
      briwork: false,
      bricafe: false,
      digital_branch: true,
    },
    kepemilikan_gedung: {
      jenis: "Sewa",
      harga: "Rp 180.000.000",
      jatuh_tempo: "Februari 2030",
    },
    atm: { jml: 66, onatm: "46", offatm: "20", prdatm: "101%", relatm: "101%" },
    crm: { jml: 66, oncrm: "46", offcrm: "20", prdcrm: "101%", relcrm: "101%" },
    edc: { jml: 66, onedc: "46", offedc: "20", prdedc: "101%", reledc: "101%" },
    qris: {
      jml: 66,
      onqris: "46",
      offqris: "20",
      prdqris: "101%",
      relqris: "101%",
    },
    brilink: {
      jml: 66,
      onbrilink: "46",
      offbrilink: "20",
      prdbrilink: "101%",
      relbrilink: "101%",
    },
    performance_potensi: {
      kpi: { score: 104.6, trend: -1.5 },
      total_dpk: { market_share_total: 73 },
      kredit: { npl: { current_value: "2.6%" } },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Pimpinan Cabang", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Manager Operasional", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Small Business Manager", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "RM SME", formasi: 3, pemenuhan: 3, gap: 0 },
        { jabatan: "RM FT", formasi: 5, pemenuhan: 4, gap: 1 },
        { jabatan: "Teller", formasi: 3, pemenuhan: 2, gap: 1 },
      ],
    },
    customer: {
      total_cif: { total: 123000 },
      demographic_generation: [
        { label: "Boomers", value: 33000 },
        { label: "Gen X", value: 45000 },
        { label: "Gen Y", value: 45000 },
      ],
    },
  },
  1234: {
    type: "KC",
    identitas: {
      nama_unit_kerja: "KC Perawang",
      branch_code: "1234",
      kelas: "IIA",
      klasifikasi_wilayah: "Urban",
      branch_type: "Kantor Cabang",
      kc_supervisi: "KC Perawang",
      region: "Region 2 – Pekanbaru",
      area: "Area Siak",
      koordinat: "0.798317, 102.049247",
      alamat: "Jl. Raja Kecik RT.12 RW.4",
      desa: "Kampung Dalam",
      kecamatan: "Kec. Siak",
      kota_kab: "Kab. Siak",
      provinsi: "Riau",
      foto_url: "images/kc-perawang.jpg",
    },
    format_branch: {
      konvensional: false,
      senyum: false,
      pnm: false,
      pegadaian: false,
      hybrid: true,
      qms: false,
      digital_cs: true,
      community_branch: false,
      briwork: false,
      bricafe: false,
      digital_branch: true,
    },
    kepemilikan_gedung: {
      jenis: "Sewa",
      harga: "Rp 180.000.000",
      jatuh_tempo: "Februari 2030",
    },
    atm: { jml: 66, onatm: "46", offatm: "20", prdatm: "101%", relatm: "101%" },
    crm: { jml: 66, oncrm: "46", offcrm: "20", prdcrm: "101%", relcrm: "101%" },
    edc: { jml: 66, onedc: "46", offedc: "20", prdedc: "101%", reledc: "101%" },
    qris: {
      jml: 66,
      onqris: "46",
      offqris: "20",
      prdqris: "101%",
      relqris: "101%",
    },
    brilink: {
      jml: 66,
      onbrilink: "46",
      offbrilink: "20",
      prdbrilink: "101%",
      relbrilink: "101%",
    },
    performance_potensi: {
      kpi: { score: 104.6, trend: -1.5 },
      total_dpk: { market_share_total: 73 },
      kredit: { npl: { current_value: "2.6%" } },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Pimpinan Cabang", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "RM FT", formasi: 5, pemenuhan: 4, gap: 1 },
        { jabatan: "Security", formasi: 9999, pemenuhan: 599, gap: 598 },
      ],
    },
    customer: {
      total_cif: { total: 123000 },
      demographic_generation: [
        { label: "Boomers", value: 33000 },
        { label: "Gen X", value: 45000 },
        { label: "Gen Y", value: 45000 },
      ],
    },
  },
};

const REGION_DETAIL_DATA = {
  2: {
    type: "REGION",
    identreg: {
      nama_unit_kerja: "REGION 2 Pekanbaru",
      branch_code: "2",
      kelas: "-",
      klasifikasi_wilayah: "Urban",
      branch_type: "-",
      kc_supervisi: "-",
      region: "-",
      area: "-",
      koordinat: "-",
      alamat: "-",
      desa: "-",
      kecamatan: "-",
      kota_kab: "Siak",
      provinsi: "Riau",
      foto_url: "images/region.jpg",
    },
    format_branch: {
      konvensional: false,
      senyum: false,
      pnm: false,
      pegadaian: false,
      hybrid: true,
      qms: false,
      digital_cs: true,
      community_branch: false,
      briwork: false,
      bricafe: false,
      digital_branch: true,
    },
    kepemilikan_gedung: {
      jenis: "Sewa",
      harga: "Rp 180.000.000",
      jatuh_tempo: "Februari 2030",
    },
    atm: { jml: 66, onatm: "46", offatm: "20", prdatm: "101%", relatm: "101%" },
    crm: { jml: 66, oncrm: "46", offcrm: "20", prdcrm: "101%", relcrm: "101%" },
    edc: { jml: 66, onedc: "46", offedc: "20", prdedc: "101%", reledc: "101%" },
    qris: {
      jml: 66,
      onqris: "46",
      offqris: "20",
      prdqris: "101%",
      relqris: "101%",
    },
    brilink: {
      jml: 66,
      onbrilink: "46",
      offbrilink: "20",
      prdbrilink: "101%",
      relbrilink: "101%",
    },
    performance_potensi: {
      kpi: { score: 104.6, trend: -1.5 },
      total_dpk: { market_share_total: 73 },
      kredit: { npl: { current_value: "2.6%" } },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Pimpinan Cabang", formasi: 123, pemenuhan: 1, gap: 0 },
        { jabatan: "Manager Operasional", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Small Business Manager", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "RM SME", formasi: 3, pemenuhan: 3, gap: 0 },
        { jabatan: "RM FT", formasi: 5, pemenuhan: 4, gap: 1 },
        { jabatan: "Teller", formasi: 3, pemenuhan: 2, gap: 1 },
      ],
    },
    customer: {
      total_cif: { total: 123000 },
      demographic_generation: [
        { label: "Boomers", value: 33000 },
        { label: "Gen X", value: 45000 },
        { label: "Gen Y", value: 45000 },
      ],
    },
  },
};

const KOKAB_DETAIL_DATA = {
  1: {
    type: "KOKAB",
    identkab: {
      nama_kab: "Kabupaten Siak",
      branch_code: "ABCD",
      kelas: "-",
      klasifikasi_wilayah: "Urban",
      branch_type: "-",
      kc_supervisi: "-",
      region_supervisi: "Region 2 - Pekanbaru",
      area: "Area Siak",
      koordinat: "-",
      alamat: "-",
      desa: "-",
      kecamatan: "-",
      kota_kab: "Siak",
      provinsi: "Riau",
      foto_url: "images/kab-siak.jpg",
    },
    // DATA DEMOGRAFI (Yang tadinya kosong)
    demografi: {
      populasi_penduduk: "457.940",
      pertumbuhan_ekonomi: "4.5%",
      jumlah_bank_pesaing: "12",
      jumlah_penduduk_usia_produktif: "310.000",
    },
    // DATA UKO SUPERVISI (Yang tadinya kosong)
    uko_supervisi: {
      kantor_cabang: { jumlah: 2 },
      kantor_cabang_pembantu: { jumlah: 5 },
      bri_unit: { jumlah: 18 },
      terras_bri: { jumlah: 4 },
      e_buzz: { jumlah: 1 },
    },
    format_branch: {
      konvensional: true,
      senyum: true,
      pnm: true,
      pegadaian: true,
      hybrid: true,
      qms: true,
      digital_cs: true,
    },
    atm: { jml: 45, onatm: 30, offatm: 15, prdatm: "98%", relatm: "99%" },
    crm: { jml: 20, oncrm: 15, offcrm: 5, prdcrm: "95%", relcrm: "97%" },
    edc: { jml: 150, onedc: 150, offedc: 0, prdedc: "88%", reledc: "92%" },
    qris: {
      jml: 1200,
      onqris: 1200,
      offqris: 0,
      prdqris: "100%",
      relqris: "100%",
    },
    brilink: {
      jml: 850,
      onbrilink: 850,
      offbrilink: 0,
      prdbrilink: "92%",
      relbrilink: "95%",
    },
    performance_potensi: {
      kpi: { score: 102.5, trend: 1.2 },
      total_dpk: { market_share_total: 65.4 },
      kredit: { npl: { current_value: "1.8%" } },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Total Staff", formasi: 250, pemenuhan: 245, gap: -5 },
        { jabatan: "RM Kredit", formasi: 45, pemenuhan: 40, gap: -5 },
        { jabatan: "Teller/CS", formasi: 60, pemenuhan: 60, gap: 0 },
      ],
    },
    customer: {
      total_cif: { total: 458000 },
      demographic_generation: [
        { label: "Gen Z", value: 150000 },
        { label: "Millennials", value: 180000 },
        { label: "Gen X", value: 90000 },
        { label: "Boomers", value: 38000 },
      ],
    },
  },
};

const AREA_DETAIL_DATA = {
  1: {
    type: "AREA",
    identAREA: {
      nama_area: "AREA SIAK",
      area_code: "1",
      area_cakupan: "-",
      klasifikasi_wilayah: "Urban",
      branch_type: "-",
      kc_supervisi: "-",
      region: "-",
      area: "-",
      koordinat: "-",
      alamat: "-",
      desa: "-",
      kecamatan: "-",
      kota_kab: "Siak",
      provinsi: "Riau",
      foto_url: "images/area-siak.jpg",
    },
    format_branch: {
      konvensional: false,
      senyum: false,
      pnm: false,
      pegadaian: false,
      hybrid: true,
      qms: false,
      digital_cs: true,
      community_branch: false,
      briwork: false,
      bricafe: false,
      digital_branch: true,
    },
    kepemilikan_gedung: {
      jenis: "Sewa",
      harga: "Rp 180.000.000",
      jatuh_tempo: "Februari 2030",
    },
    atm: { jml: 66, onatm: "46", offatm: "20", prdatm: "101%", relatm: "101%" },
    crm: { jml: 20, oncrm: 15, offcrm: 5, prdcrm: "95%", relcrm: "97%" },
    edc: { jml: 150, onedc: 150, offedc: 0, prdedc: "88%", reledc: "92%" },
    qris: {
      jml: 1200,
      onqris: 1200,
      offqris: 0,
      prdqris: "100%",
      relqris: "100%",
    },
    brilink: {
      jml: 850,
      onbrilink: 850,
      offbrilink: 0,
      prdbrilink: "92%",
      relbrilink: "95%",
    },
    performance_potensi: {
      kpi: { score: 104.6, trend: -1.5 },
      total_dpk: { market_share_total: 73 },
      kredit: { npl: { current_value: "2.6%" } },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Pimpinan Cabang", formasi: 99999, pemenuhan: 1, gap: 0 },
        { jabatan: "Manager Operasional", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Small Business Manager", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "RM SME", formasi: 3, pemenuhan: 3, gap: 0 },
        { jabatan: "RM FT", formasi: 5, pemenuhan: 4, gap: 1 },
        { jabatan: "Teller", formasi: 3, pemenuhan: 2, gap: 1 },
      ],
    },
    customer: {
      total_cif: { total: 123000 },
      demographic_generation: [{ label: "Boomers", value: 33000 }],
    },
  },
};

const UKER_DETAIL_DATA = {
  U1: {
    type: "UNIT KERJA OPERASIONAL",
    identUKER: {
      nama_unit_kerja: "BRI UNIT Dayun",
      branch_code: "2222",
      kelas: "IIIA",
      klasifikasi_wilayah: "Urban",
      branch_type: "BRI UNIT",
      kc_supervisi: "-",
      region: "-",
      area: "-",
      koordinat: "-",
      alamat: "-",
      desa: "-",
      kecamatan: "-",
      kota_kab: "Siak",
      provinsi: "Riau",
      foto_url: "images/uker.jpg",
    },
    format_branch: {
      konvensional: false,
      senyum: false,
      pnm: false,
      pegadaian: false,
      hybrid: true,
      qms: false,
      digital_cs: true,
      community_branch: false,
      briwork: false,
      bricafe: false,
      digital_branch: true,
    },
    kepemilikan_gedung: {
      jenis: "Sewa",
      harga: "Rp 180.000.000",
      jatuh_tempo: "Februari 2030",
    },
    atm: { jml: 66, onatm: "46", offatm: "20", prdatm: "101%", relatm: "101%" },
    crm: { jml: 66, oncrm: "46", offcrm: "20", prdcrm: "101%", relcrm: "101%" },
    edc: { jml: 66, onedc: "46", offedc: "20", prdedc: "101%", reledc: "101%" },
    qris: {
      jml: 66,
      onqris: "46",
      offqris: "20",
      prdqris: "101%",
      relqris: "101%",
    },
    brilink: {
      jml: 66,
      onbrilink: "46",
      offbrilink: "20",
      prdbrilink: "101%",
      relbrilink: "101%",
    },
    performance_potensi: {
      kpi: { score: 104.6, trend: -1.5 },
      total_dpk: { market_share_total: 73 },
      kredit: { npl: { current_value: "2.6%" } },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Pimpinan Cabang", formasi: 123, pemenuhan: 1, gap: 0 },
        { jabatan: "Manager Operasional", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Small Business Manager", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "RM SME", formasi: 3, pemenuhan: 3, gap: 0 },
        { jabatan: "RM FT", formasi: 5, pemenuhan: 4, gap: 1 },
        { jabatan: "Teller", formasi: 3, pemenuhan: 2, gap: 1 },
      ],
    },
    customer: {
      total_cif: { total: 123000 },
      demographic_generation: [
        { label: "Boomers", value: 33000 },
        { label: "Gen X", value: 45000 },
        { label: "Gen Y", value: 45000 },
      ],
    },
  },
};

// --- PROSES CLONING & OVERWRITE ASLI ---
KC_DETAIL_DATA["1234"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1234"]));
KC_DETAIL_DATA["1234"].identitas.nama_unit_kerja = "KC Perawang";
KC_DETAIL_DATA["1234"].identitas.branch_code = "1234";

KC_DETAIL_DATA["5566"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["5566"].identitas.nama_unit_kerja = "KC Tambusai";
KC_DETAIL_DATA["5566"].identitas.branch_code = "5566";

KC_DETAIL_DATA["7788"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["7788"].identitas.nama_unit_kerja = "KC Dumai";
KC_DETAIL_DATA["7788"].identitas.branch_code = "7788";

KC_DETAIL_DATA["268"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["268"].identitas.nama_unit_kerja = "KC Bangkinang";
KC_DETAIL_DATA["268"].identitas.branch_code = "268";

REGION_DETAIL_DATA["2"] = JSON.parse(JSON.stringify(REGION_DETAIL_DATA["2"]));
REGION_DETAIL_DATA["2"].identreg.nama_unit_kerja = "REGION 2";

KOKAB_DETAIL_DATA["1"] = JSON.parse(JSON.stringify(KOKAB_DETAIL_DATA["1"]));
KOKAB_DETAIL_DATA["1"].identkab.nama_kab = "Kabupaten Siak";

AREA_DETAIL_DATA["1"] = JSON.parse(JSON.stringify(AREA_DETAIL_DATA["1"]));
AREA_DETAIL_DATA["1"].identAREA.nama_area = "AREA SIAK";

UKER_DETAIL_DATA["U1"] = JSON.parse(JSON.stringify(AREA_DETAIL_DATA["U1"]));
UKER_DETAIL_DATA["U1"].identUKER.nama_unit_kerja = "BRI UNIT Dayun";
// --- LOGIKA RENDER DASHBOARD (TAMBAHAN UNTUK GRAFIK) ---
function initLineChart(id, data, color, fill = false) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: data,
          borderColor: color,
          backgroundColor: color + "33",
          fill: fill,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
    },
  });
}
