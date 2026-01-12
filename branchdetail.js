// Data penunjang kalkulasi (Opsional jika ingin digunakan di logika lain)
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
  // =====================================================
  // DATA KC SIAK (1190) - ORIGINAL
  // =====================================================
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
        labels: [
          "1 Oct",
          "3 Oct",
          "7 Oct",
          "10 Oct",
          "14 Oct",
          "20 Oct",
          "23 Oct",
          "27 Oct",
          "30 Oct",
        ],
        series: [2000, 2800, 2100, 2900, 3800, 2200, 1500, 2100, 3900],
      },
      kredit: {
        npl: { current_value: "2.6%" },
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
        { label: "Gen X", value: 45000 },
        { label: "Gen Y", value: 45000 },
      ],
    },
  },
};

// =====================================================
// PENAMBAHAN DATA DINAMIS (PENGGUNAAN COPY DARI SIAK)
// =====================================================

// 1. KC Perawang (1234)
KC_DETAIL_DATA["1234"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["1234"].identitas.nama_unit_kerja = "KC Perawang";
KC_DETAIL_DATA["1234"].identitas.branch_code = "1234";
KC_DETAIL_DATA["1234"].identitas.alamat = "Jl. Raya Perawang No. 10";

// 2. KC Tambusai (5566)
KC_DETAIL_DATA["5566"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["5566"].identitas.nama_unit_kerja = "KC Tambusai";
KC_DETAIL_DATA["5566"].identitas.branch_code = "5566";
KC_DETAIL_DATA["5566"].identitas.alamat = "Jl. Tuanku Tambusai No. 88";

// 3. KC Dumai (7788)
KC_DETAIL_DATA["7788"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1190"]));
KC_DETAIL_DATA["7788"].identitas.nama_unit_kerja = "KC Dumai";
KC_DETAIL_DATA["7788"].identitas.branch_code = "7788";
KC_DETAIL_DATA["7788"].identitas.alamat = "Jl. Jend. Sudirman No. 1, Dumai";

// =========================
// REGION, AREA & KAB DATA
// =========================
const REGION_DETAIL_DATA = {
  "Region 2 – Pekanbaru": {
    type: "REGION",
    nama: "Region 2 – Pekanbaru",
    keterangan: "Wilayah kerja Regional Pekanbaru",
  },
};

const AREA_DETAIL_DATA = {
  "Area Siak": {
    type: "AREA",
    nama: "Area Siak",
    keterangan: "Area operasional KC Siak",
  },
};

const KAB_DETAIL_DATA = {
  "Kabupaten Siak": {
    type: "KAB",
    nama: "Kabupaten Siak",
    identitas: {
      nama_kota_kab: "Kabupaten Siak",
      klasifikasi_wilayah: "Urban",
      area: "Area Siak",
      provinsi: "Riau",
      region_supervisi: "Region 2 – Pekanbaru",
    },
    demografi: {
      bank_pesaing: "7 UKO",
      populasi: "1.000 Jiwa",
    },
    uko_supervisi: {
      kantor_cabang: { jumlah: 25 },
      unit: { jumlah: 34 },
    },
  },
};
