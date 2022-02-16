interface IRegion {
  psgcCode: string;
  regionName: string;
  regionCode: string;
  numOfProvinces: number;
  numOfCities: number;
  numOfMunicipalities: number;
  numOfBrgys: number;
}

const regions: IRegion[] = [
  {
    psgcCode: "010000000",
    regionName: "Region I (Ilocos Region)",
    regionCode: "I",
    numOfProvinces: 4,
    numOfCities: 9,
    numOfMunicipalities: 116,
    numOfBrgys: 3267,
  },
  {
    psgcCode: "020000000",
    regionName: "Region II (Cagayan Valley)",
    regionCode: "II",
    numOfProvinces: 5,
    numOfCities: 4,
    numOfMunicipalities: 89,
    numOfBrgys: 2311,
  },
  {
    psgcCode: "030000000",
    regionName: "Region III (Central Luzon)",
    regionCode: "III",
    numOfProvinces: 7,
    numOfCities: 14,
    numOfMunicipalities: 116,
    numOfBrgys: 3102,
  },
  {
    psgcCode: "040000000",
    regionName: "Region IV-A (CALABARZON)",
    regionCode: "IV-A",
    numOfProvinces: 5,
    numOfCities: 20,
    numOfMunicipalities: 122,
    numOfBrgys: 4019,
  },
  {
    psgcCode: "170000000",
    regionName: "Region IV-B (MIMAROPA)",
    regionCode: "Mimaropa",
    numOfProvinces: 5,
    numOfCities: 2,
    numOfMunicipalities: 71,
    numOfBrgys: 1460,
  },
  {
    psgcCode: "050000000",
    regionName: "Region V (Bicol Region)",
    regionCode: "V",
    numOfProvinces: 6,
    numOfCities: 7,
    numOfMunicipalities: 107,
    numOfBrgys: 3471,
  },
  {
    psgcCode: "060000000",
    regionName: "Region VI (Western Visayas)",
    regionCode: "VI",
    numOfProvinces: 6,
    numOfCities: 16,
    numOfMunicipalities: 117,
    numOfBrgys: 4051,
  },
  {
    psgcCode: "070000000",
    regionName: "Region VII (Central Visayas)",
    regionCode: "VII",
    numOfProvinces: 4,
    numOfCities: 16,
    numOfMunicipalities: 116,
    numOfBrgys: 3003,
  },
  {
    psgcCode: "080000000",
    regionName: "Region VIII (Eastern Visayas)",
    regionCode: "VIII",
    numOfProvinces: 6,
    numOfCities: 7,
    numOfMunicipalities: 136,
    numOfBrgys: 4390,
  },
  {
    psgcCode: "090000000",
    regionName: "Region IX (Zamboanga Peninzula)",
    regionCode: "IX",
    numOfProvinces: 3,
    numOfCities: 5,
    numOfMunicipalities: 67,
    numOfBrgys: 1904,
  },
  {
    psgcCode: "100000000",
    regionName: "Region X (Northern Mindanao)",
    regionCode: "X",
    numOfProvinces: 5,
    numOfCities: 9,
    numOfMunicipalities: 84,
    numOfBrgys: 2022,
  },
  {
    psgcCode: "110000000",
    regionName: "Region XI (Davao Region)",
    regionCode: "XI",
    numOfProvinces: 5,
    numOfCities: 6,
    numOfMunicipalities: 43,
    numOfBrgys: 1162,
  },
  {
    psgcCode: "120000000",
    regionName: "Region XII (SOCCSKSARGEN)",
    regionCode: "XII",
    numOfProvinces: 4,
    numOfCities: 6,
    numOfMunicipalities: 45,
    numOfBrgys: 1195,
  },
  {
    psgcCode: "130000000",
    regionName: "National Capital Region (NCR)",
    regionCode: "NCR",
    numOfProvinces: 0,
    numOfCities: 16,
    numOfMunicipalities: 1,
    numOfBrgys: 1311,
  },
  {
    psgcCode: "140000000",
    regionName: "Cordillera Administrative Region (CAR)",
    regionCode: "CAR",
    numOfProvinces: 6,
    numOfCities: 2,
    numOfMunicipalities: 75,
    numOfBrgys: 1178,
  },
  {
    psgcCode: "150000000",
    regionName: "Bangsamoro Autonomous Region in Muslim Mindanao",
    regionCode: "BARMM",
    numOfProvinces: 5,
    numOfCities: 2,
    numOfMunicipalities: 116,
    numOfBrgys: 2499,
  },
  {
    psgcCode: "160000000",
    regionName: "Region XIII (Caraga)",
    regionCode: "XIII",
    numOfProvinces: 5,
    numOfCities: 6,
    numOfMunicipalities: 67,
    numOfBrgys: 1311,
  },
];

export default regions;
