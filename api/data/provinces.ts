interface IProvince {
  provinceCode: string;
  provinceName: string;
  psgcCode: string;
  regionCode: string;
}

const provinces: IProvince[] = [
  {
    provinceCode: "0128",
    provinceName: "Ilocos Norte",
    psgcCode: "012800000",
    regionCode: "I",
  },
  {
    provinceCode: "0129",
    provinceName: "Ilocos Sur",
    psgcCode: "012900000",
    regionCode: "I",
  },
  {
    provinceCode: "0133",
    provinceName: "La Union",
    psgcCode: "013300000",
    regionCode: "I",
  },
  {
    provinceCode: "0155",
    provinceName: "Pangasinan",
    psgcCode: "015500000",
    regionCode: "I",
  },
  {
    provinceCode: "0209",
    provinceName: "Batanes",
    psgcCode: "020900000",
    regionCode: "II",
  },
  {
    provinceCode: "0215",
    provinceName: "Cagayan",
    psgcCode: "021500000",
    regionCode: "II",
  },
  {
    provinceCode: "0231",
    provinceName: "Isabela",
    psgcCode: "023100000",
    regionCode: "II",
  },
  {
    provinceCode: "0250",
    provinceName: "Nueva Vizcaya",
    psgcCode: "025000000",
    regionCode: "II",
  },
  {
    provinceCode: "0257",
    provinceName: "Quirino",
    psgcCode: "025700000",
    regionCode: "II",
  },
  {
    provinceCode: "0308",
    provinceName: "Bataan",
    psgcCode: "030800000",
    regionCode: "III",
  },
  {
    provinceCode: "0314",
    provinceName: "Bulacan",
    psgcCode: "031400000",
    regionCode: "III",
  },
  {
    provinceCode: "0349",
    provinceName: "Nueva Ecija",
    psgcCode: "034900000",
    regionCode: "III",
  },
  {
    provinceCode: "0354",
    provinceName: "Pampanga",
    psgcCode: "035400000",
    regionCode: "III",
  },
  {
    provinceCode: "0369",
    provinceName: "Tarlac",
    psgcCode: "036900000",
    regionCode: "III",
  },
  {
    provinceCode: "0371",
    provinceName: "Zambales",
    psgcCode: "037100000",
    regionCode: "III",
  },
  {
    provinceCode: "0377",
    provinceName: "Aurora",
    psgcCode: "037700000",
    regionCode: "III",
  },
  {
    provinceCode: "0410",
    provinceName: "Batangas",
    psgcCode: "041000000",
    regionCode: "IV-A",
  },
  {
    provinceCode: "0421",
    provinceName: "Cavite",
    psgcCode: "042100000",
    regionCode: "IV-A",
  },
  {
    provinceCode: "0434",
    provinceName: "Laguna",
    psgcCode: "043400000",
    regionCode: "IV-A",
  },
  {
    provinceCode: "0456",
    provinceName: "Quezon",
    psgcCode: "045600000",
    regionCode: "IV-A",
  },
  {
    provinceCode: "0458",
    provinceName: "Rizal",
    psgcCode: "045800000",
    regionCode: "IV-A",
  },
  {
    provinceCode: "1740",
    provinceName: "Marinduque",
    psgcCode: "174000000",
    regionCode: "Mimaropa",
  },
  {
    provinceCode: "1751",
    provinceName: "Occidental Mindoro",
    psgcCode: "175100000",
    regionCode: "Mimaropa",
  },
  {
    provinceCode: "1752",
    provinceName: "Oriental Mindoro",
    psgcCode: "175200000",
    regionCode: "Mimaropa",
  },
  {
    provinceCode: "1753",
    provinceName: "Palawan",
    psgcCode: "175300000",
    regionCode: "Mimaropa",
  },
  {
    provinceCode: "1759",
    provinceName: "Romblon",
    psgcCode: "175900000",
    regionCode: "Mimaropa",
  },
  {
    provinceCode: "0505",
    provinceName: "Albay",
    psgcCode: "050500000",
    regionCode: "V",
  },
  {
    provinceCode: "0516",
    provinceName: "Camarines Norte",
    psgcCode: "051600000",
    regionCode: "V",
  },
  {
    provinceCode: "0517",
    provinceName: "Camarines Sur",
    psgcCode: "051700000",
    regionCode: "V",
  },
  {
    provinceCode: "0520",
    provinceName: "Catanduanes",
    psgcCode: "052000000",
    regionCode: "V",
  },
  {
    provinceCode: "0541",
    provinceName: "Masbate",
    psgcCode: "054100000",
    regionCode: "V",
  },
  {
    provinceCode: "0562",
    provinceName: "Sorsogon",
    psgcCode: "056200000",
    regionCode: "V",
  },
  {
    provinceCode: "0604",
    provinceName: "Aklan",
    psgcCode: "060400000",
    regionCode: "VI",
  },
  {
    provinceCode: "0606",
    provinceName: "Antique",
    psgcCode: "060600000",
    regionCode: "VI",
  },
  {
    provinceCode: "0619",
    provinceName: "Capiz",
    psgcCode: "061900000",
    regionCode: "VI",
  },
  {
    provinceCode: "0630",
    provinceName: "Iloilo",
    psgcCode: "063000000",
    regionCode: "VI",
  },
  {
    provinceCode: "0645",
    provinceName: "Negros Occidental",
    psgcCode: "064500000",
    regionCode: "VI",
  },
  {
    provinceCode: "0679",
    provinceName: "Guimaras",
    psgcCode: "067900000",
    regionCode: "VI",
  },
  {
    provinceCode: "0712",
    provinceName: "Bohol",
    psgcCode: "071200000",
    regionCode: "VII",
  },
  {
    provinceCode: "0722",
    provinceName: "Cebu",
    psgcCode: "072200000",
    regionCode: "VII",
  },
  {
    provinceCode: "0746",
    provinceName: "Negros Oriental",
    psgcCode: "074600000",
    regionCode: "VII",
  },
  {
    provinceCode: "0761",
    provinceName: "Siquijor",
    psgcCode: "076100000",
    regionCode: "VII",
  },
  {
    provinceCode: "0826",
    provinceName: "Eastern Samar",
    psgcCode: "082600000",
    regionCode: "VIII",
  },
  {
    provinceCode: "0837",
    provinceName: "Leyte",
    psgcCode: "083700000",
    regionCode: "VIII",
  },
  {
    provinceCode: "0848",
    provinceName: "Northern Samar",
    psgcCode: "084800000",
    regionCode: "VIII",
  },
  {
    provinceCode: "0860",
    provinceName: "Samar (Western Samar)",
    psgcCode: "086000000",
    regionCode: "VIII",
  },
  {
    provinceCode: "0864",
    provinceName: "Southern Leyte",
    psgcCode: "086400000",
    regionCode: "VIII",
  },
  {
    provinceCode: "0878",
    provinceName: "Biliran",
    psgcCode: "087800000",
    regionCode: "VIII",
  },
  {
    provinceCode: "0972",
    provinceName: "Zamboanga Del Norte",
    psgcCode: "097200000",
    regionCode: "IX",
  },
  {
    provinceCode: "0973",
    provinceName: "Zamboanga Del Sur",
    psgcCode: "097300000",
    regionCode: "IX",
  },
  {
    provinceCode: "0983",
    provinceName: "Zamboanga Sibugay",
    psgcCode: "098300000",
    regionCode: "IX",
  },
  {
    provinceCode: "0997",
    provinceName: "City Of Isabela",
    psgcCode: "099700000",
    regionCode: "IX",
  },
  {
    provinceCode: "1013",
    provinceName: "Bukidnon",
    psgcCode: "101300000",
    regionCode: "X",
  },
  {
    provinceCode: "1018",
    provinceName: "Camiguin",
    psgcCode: "101800000",
    regionCode: "X",
  },
  {
    provinceCode: "1035",
    provinceName: "Lanao Del Norte",
    psgcCode: "103500000",
    regionCode: "X",
  },
  {
    provinceCode: "1042",
    provinceName: "Misamis Occidental",
    psgcCode: "104200000",
    regionCode: "X",
  },
  {
    provinceCode: "1043",
    provinceName: "Misamis Oriental",
    psgcCode: "104300000",
    regionCode: "X",
  },
  {
    provinceCode: "1123",
    provinceName: "Davao Del Norte",
    psgcCode: "112300000",
    regionCode: "XI",
  },
  {
    provinceCode: "1124",
    provinceName: "Davao Del Sur",
    psgcCode: "112400000",
    regionCode: "XI",
  },
  {
    provinceCode: "1125",
    provinceName: "Davao Oriental",
    psgcCode: "112500000",
    regionCode: "XI",
  },
  {
    provinceCode: "1182",
    provinceName: "Compostela Valley",
    psgcCode: "118200000",
    regionCode: "XI",
  },
  {
    provinceCode: "1186",
    provinceName: "Davao Occidental",
    psgcCode: "118600000",
    regionCode: "XI",
  },
  {
    provinceCode: "1247",
    provinceName: "Cotabato (North Cotabato)",
    psgcCode: "124700000",
    regionCode: "XII",
  },
  {
    provinceCode: "1263",
    provinceName: "South Cotabato",
    psgcCode: "126300000",
    regionCode: "XII",
  },
  {
    provinceCode: "1265",
    provinceName: "Sultan Kudarat",
    psgcCode: "126500000",
    regionCode: "XII",
  },
  {
    provinceCode: "1280",
    provinceName: "Sarangani",
    psgcCode: "128000000",
    regionCode: "XII",
  },
  {
    provinceCode: "1298",
    provinceName: "Cotabato City",
    psgcCode: "129800000",
    regionCode: "XII",
  },
  {
    provinceCode: "1339",
    provinceName: "NCR, City Of Manila, First District",
    psgcCode: "133900000",
    regionCode: "NCR",
  },
  {
    provinceCode: "1339",
    provinceName: "City Of Manila",
    psgcCode: "133900000",
    regionCode: "NCR",
  },
  {
    provinceCode: "1374",
    provinceName: "NCR, Second District",
    psgcCode: "137400000",
    regionCode: "NCR",
  },
  {
    provinceCode: "1375",
    provinceName: "NCR, Third District",
    psgcCode: "137500000",
    regionCode: "NCR",
  },
  {
    provinceCode: "1376",
    provinceName: "NCR, Fourth District",
    psgcCode: "137600000",
    regionCode: "NCR",
  },
  {
    provinceCode: "1401",
    provinceName: "Abra",
    psgcCode: "140100000",
    regionCode: "CAR",
  },
  {
    provinceCode: "1411",
    provinceName: "Benguet",
    psgcCode: "141100000",
    regionCode: "CAR",
  },
  {
    provinceCode: "1427",
    provinceName: "Ifugao",
    psgcCode: "142700000",
    regionCode: "CAR",
  },
  {
    provinceCode: "1432",
    provinceName: "Kalinga",
    psgcCode: "143200000",
    regionCode: "CAR",
  },
  {
    provinceCode: "1444",
    provinceName: "Mountain Province",
    psgcCode: "144400000",
    regionCode: "CAR",
  },
  {
    provinceCode: "1481",
    provinceName: "Apayao",
    psgcCode: "148100000",
    regionCode: "CAR",
  },
  {
    provinceCode: "1507",
    provinceName: "Basilan",
    psgcCode: "150700000",
    regionCode: "BARMM",
  },
  {
    provinceCode: "1536",
    provinceName: "Lanao Del Sur",
    psgcCode: "153600000",
    regionCode: "BARMM",
  },
  {
    provinceCode: "1538",
    provinceName: "Maguindanao",
    psgcCode: "153800000",
    regionCode: "BARMM",
  },
  {
    provinceCode: "1566",
    provinceName: "Sulu",
    psgcCode: "156600000",
    regionCode: "BARMM",
  },
  {
    provinceCode: "1570",
    provinceName: "Tawi-tawi",
    psgcCode: "157000000",
    regionCode: "BARMM",
  },
  {
    provinceCode: "1602",
    provinceName: "Agusan Del Norte",
    psgcCode: "160200000",
    regionCode: "XIII",
  },
  {
    provinceCode: "1603",
    provinceName: "Agusan Del Sur",
    psgcCode: "160300000",
    regionCode: "XIII",
  },
  {
    provinceCode: "1667",
    provinceName: "Surigao Del Norte",
    psgcCode: "166700000",
    regionCode: "XIII",
  },
  {
    provinceCode: "1668",
    provinceName: "Surigao Del Sur",
    psgcCode: "166800000",
    regionCode: "XIII",
  },
  {
    provinceCode: "1685",
    provinceName: "Dinagat Islands",
    psgcCode: "168500000",
    regionCode: "XIII",
  },
];

export default provinces;