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

const REGION_DETAIL_DATA = {
  // =====================================================
  // DATA REGION
  // =====================================================
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

const KOKAB_DETAIL_DATA = {
  // =====================================================
  // DATA KABUPATEN SIAK - AREA SIAK (Berdasarkan Gambar)
  // =====================================================
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
    },
    demografi: {
      jumlah_bank_pesaing: 7,
      bca: 1,
      mandiri: 3,
      bni: 3,
      populasi: "banyak lah pookoknya",
    },
    uko_supervisi: {
      kantor_cabang: { jumlah: 25 },
      kantor_cabang_pembantu: { jumlah: 18 },
      unit: { jumlah: 34 },
      kantor_kas: { jumlah: 12 },
      teras: { jumlah: 25 },
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
        { label: "Gen Millenials", value: 45000 },
        { label: "Gen Z", value: 45000 },
      ],
    },
  },
};

const AREA_DETAIL_DATA = {
  // =====================================================
  // DATA REGION
  // =====================================================
  1: {
    type: "AREA",
    identAREA: {
      nama_area: "REGION 2 Pekanbaru",
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
// 1. KC Perawang (1234)
KC_DETAIL_DATA["1234"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["1234"]));
KC_DETAIL_DATA["1234"].identitas.nama_unit_kerja = "KC Perawang";
KC_DETAIL_DATA["1234"].identitas.branch_code = "1234";
KC_DETAIL_DATA["1234"].identitas.alamat = "Jl. Raya Perawang No. 10";

// 2. KC Tambusai (5566)
KC_DETAIL_DATA["5566"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["5566"]));
KC_DETAIL_DATA["5566"].identitas.nama_unit_kerja = "KC Tambusai";
KC_DETAIL_DATA["5566"].identitas.branch_code = "5566";
KC_DETAIL_DATA["5566"].identitas.alamat = "Jl. Tuanku Tambusai No. 88";

// 3. KC Dumai (7788)
KC_DETAIL_DATA["7788"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["7788"]));
KC_DETAIL_DATA["7788"].identitas.nama_unit_kerja = "KC Dumai";
KC_DETAIL_DATA["7788"].identitas.branch_code = "7788";
KC_DETAIL_DATA["7788"].identitas.alamat = "Jl. Jend. Sudirman No. 1, Dumai";

// 3. KC Bangkinang (268)
KC_DETAIL_DATA["268"] = JSON.parse(JSON.stringify(KC_DETAIL_DATA["268"]));
KC_DETAIL_DATA["268"].identitas.nama_unit_kerja = "KC Bangkinang";
KC_DETAIL_DATA["268"].identitas.branch_code = "268";
KC_DETAIL_DATA["268"].identitas.alamat = "Jl. Jend. Sudirman No. 61";

// =========================
// REGION, AREA & KAB DATA
// =========================

REGION_DETAIL_DATA["2"] = JSON.parse(JSON.stringify(REGION_DETAIL_DATA["2"]));
REGION_DETAIL_DATA["2"].identreg.nama_unit_kerja = "REGION 2";
REGION_DETAIL_DATA["2"].identreg.branch_code = "2";
REGION_DETAIL_DATA["2"].identreg.alamat = "Jl. Jend. Sudirman No. 1, Dumai";

KOKAB_DETAIL_DATA["1"] = JSON.parse(JSON.stringify(KOKAB_DETAIL_DATA["1"]));
KOKAB_DETAIL_DATA["1"].identkab.nama_kab = "REGION 2";
KOKAB_DETAIL_DATA["1"].identkab.branch_code = "2";
KOKAB_DETAIL_DATA["1"].identkab.alamat = "Jl. Jend. Sudirman No. 1, Dumai";

AREA_DETAIL_DATA["1"] = JSON.parse(JSON.stringify(AREA_DETAIL_DATA["1"]));
AREA_DETAIL_DATA["1"].identAREA.nama_area = "AREA 1";
AREA_DETAIL_DATA["1"].identAREA.area_code = "2";
AREA_DETAIL_DATA["1"].identAREA.area_cakupan =
  "Jl. Jend. Sudirman No. 1, Dumai";

// const AREA_DETAIL_DATA = {
//   "Area Siak": {
//     type: "AREA",
//     nama: "Area Siak",
//     keterangan: "Area operasional KC Siak",
//   },
// };

// const KAB_DETAIL_DATA = {
//   "Kabupaten Siak": {
//     type: "KAB",
//     nama: "Kabupaten Siak",
//     identitas: {
//       nama_kota_kab: "Kabupaten Siak",
//       klasifikasi_wilayah: "Urban",
//       area: "Area Siak",
//       provinsi: "Riau",
//       region_supervisi: "Region 2 – Pekanbaru",
//     },
//     demografi: {
//       bank_pesaing: "7 UKO",
//       populasi: "1.000 Jiwa",
//     },
//     uko_supervisi: {
//       kantor_cabang: { jumlah: 25 },
//       unit: { jumlah: 34 },
//     },
//   },
// };
