/* ======================================================
   STATIC MASTER DATA
   REGION – AREA – KABUPATEN
   ====================================================== */

const REGION_DETAIL_DATA = {
  "Region 2 - Pekanbaru": {
    type: "REGION",
    identitas: {
      nama: "Region 2 - Pekanbaru",
      wilayah: "Riau",
      deskripsi: "Wilayah kerja Regional Pekanbaru",
    },
    kinerja: {
      total_kc: 25,
      total_unit: 120,
      total_atm: 430,
    },
  },
};

/* ====================================================== */

const AREA_DETAIL_DATA = {
  "Area Dumai": {
    type: "AREA",
    identitas: {
      nama: "Area Dumai",
      region: "Region 2 - Pekanbaru",
      provinsi: "Riau",
    },
    kinerja: {
      total_kc: 4,
      total_unit: 18,
      total_atm: 76,
    },
  },

  "Area Siak": {
    type: "AREA",
    identitas: {
      nama: "Area Siak",
      region: "Region 2 - Pekanbaru",
      provinsi: "Riau",
    },
    kinerja: {
      total_kc: 3,
      total_unit: 12,
      total_atm: 55,
    },
  },
};

/* ====================================================== */

const KAB_DETAIL_DATA = {
  Kampar: {
    type: "KAB",
    identitas: {
      nama_kab: "Kabupaten Kampar",
      area: "Area Dumai",
      provinsi: "Riau",
    },
    demografi: {
      populasi: "850.000",
      bank_pesaing: 7,
    },
  },

  Siak: {
    type: "KAB",
    identitas: {
      nama_kab: "Kabupaten Siak",
      area: "Area Siak",
      provinsi: "Riau",
    },
    demografi: {
      populasi: "480.000",
      bank_pesaing: 5,
    },
  },
};
