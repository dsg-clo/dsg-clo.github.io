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
      total_dpk: {
        market_share_total: 73,
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [65, 68, 70, 72, 75, 73],
      },
      kredit: {
        npl: { current_value: "2.6%" },
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [100, 110, 105, 120, 130, 125],
      },
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
        { label: "Gen Z", value: 45000 },
        { label: "Millennials", value: 45000 },
        { label: "Gen Alpha", value: 45000 },
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
      kpi: { score: 98.2, trend: 2.1 },
      total_dpk: {
        market_share_total: 62,
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [50, 55, 52, 58, 60, 62],
      },
      kredit: {
        npl: { current_value: "3.1%" },
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [80, 85, 90, 95, 100, 110],
      },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Pimpinan Cabang", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "RM FT", formasi: 5, pemenuhan: 4, gap: 1 },
        { jabatan: "Security", formasi: 10, pemenuhan: 8, gap: 2 },
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
      total_dpk: {
        market_share_total: 73,
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [70, 72, 71, 74, 73, 73],
      },
      kredit: {
        npl: { current_value: "2.6%" },
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [500, 520, 510, 540, 550, 560],
      },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Mantri", formasi: 1000, pemenuhan: 950, gap: 50 },
        { jabatan: "Pimpinan Cabang", formasi: 123, pemenuhan: 1, gap: 0 },
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
    demografi: {
      populasi_penduduk: "457.940",
      pertumbuhan_ekonomi: "4.5%",
      jumlah_bank_pesaing: "12",
      jumlah_penduduk_usia_produktif: "310.000",
    },
    uko_supervisi: {
      kantor_cabang: {
        jumlah: 2,
        list: [
          { nama: "KC Siak", alamat: "Jl. Raja Kecik RT.12 RW.4" },
          { nama: "KC Perawang", alamat: "Jl. Raya Perawang No. 12" },
        ],
      },
      kantor_cabang_pembantu: {
        jumlah: 5,
        list: [
          { nama: "KCP Minas", alamat: "Jl. Yos Sudarso KM 28" },
          { nama: "KCP Kandis", alamat: "Jl. Raya Kandis KM 72" },
          { nama: "KCP Sungai Apit", alamat: "Jl. Hang Tuah No. 5" },
          { nama: "KCP Kerinci Kanan", alamat: "Jl. Poros Utama" },
          { nama: "KCP Tualang", alamat: "Jl. Raya Tualang" },
        ],
      },
      bri_unit: {
        jumlah: 18,
        list: [
          { nama: "Unit Dayun", alamat: "Jl. Lintas Siak-Buatan" },
          { nama: "Unit Lubuk Dalam", alamat: "Jl. Pertamina" },
          { nama: "Unit Koto Gasib", alamat: "Jl. Raya Buatan" },
        ],
      },
      terras_bri: {
        jumlah: 4,
        list: [{ nama: "Teras Pasar Siak", alamat: "Jl. Sultan Ismail" }],
      },
      e_buzz: {
        jumlah: 1,
        list: [{ nama: "E-Buzz Siak Mobile", alamat: "Area Publik Siak" }],
      },
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
      total_dpk: {
        market_share_total: 65.4,
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [60, 62, 63, 65, 64, 65],
      },
      kredit: {
        npl: { current_value: "1.8%" },
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [200, 210, 220, 230, 240, 250],
      },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Mantri", formasi: 250, pemenuhan: 245, gap: -5 },
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
      total_dpk: {
        market_share_total: 73,
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [70, 71, 72, 73, 74, 73],
      },
      kredit: {
        npl: { current_value: "2.6%" },
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [300, 310, 320, 315, 330, 340],
      },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Area Head", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Pimpinan Cabang", formasi: 100, pemenuhan: 100, gap: 0 },
        { jabatan: "Mantri", formasi: 500, pemenuhan: 490, gap: 10 },
        { jabatan: "Security", formasi: 500, pemenuhan: 490, gap: 10 },
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
      total_dpk: {
        market_share_total: 73,
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [10, 15, 12, 18, 20, 22],
      },
      kredit: {
        npl: { current_value: "2.6%" },
        trend_labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        trend_values: [5, 10, 8, 12, 15, 18],
      },
    },
    human_capital: {
      detail_formasi: [
        { jabatan: "Kaunit", formasi: 1, pemenuhan: 1, gap: 0 },
        { jabatan: "Mantri", formasi: 4, pemenuhan: 4, gap: 0 },
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

// --- PROSES CLONING & OVERWRITE ---
KC_DETAIL_DATA["5566"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["5566"].identitas.nama_unit_kerja = "KC Tambusai";
KC_DETAIL_DATA["5566"].identitas.branch_code = "5566";

KC_DETAIL_DATA["7788"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["7788"].identitas.nama_unit_kerja = "KC Dumai";
KC_DETAIL_DATA["7788"].identitas.branch_code = "7788";

KC_DETAIL_DATA["268"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["268"].identitas.nama_unit_kerja = "KC Bangkinang";
KC_DETAIL_DATA["268"].identitas.branch_code = "268";

// --- LOGIKA HELPER GRAFIK GLOBAL ---
function initLineChartGlobal(id, labels, data, color, fill = false) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          borderColor: color,
          backgroundColor: color + "33",
          fill: fill,
          tension: 0.4,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { display: true }, y: { display: true } },
    },
  });
}
