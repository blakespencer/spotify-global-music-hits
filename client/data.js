const countryCode = {
  global: 'Global',
  us: 'United States',
  gb: 'Great Britain',
  ad: 'Andorra',
  ar: 'Argentina',
  at: 'Austria',
  au: 'Australia',
  be: 'Belgium',
  bg: 'Bulgaria',
  bo: 'Bolivia',
  br: 'Brazil',
  ca: 'Canada',
  ch: 'Switzerland',
  cl: 'Chile',
  co: 'Columbia',
  cr: 'Costa Rica',
  cy: 'Cyprus',
  cz: 'Czech Republic',
  de: 'Germany',
  dk: 'Denmark',
  do: 'Dominican Republic',
  ec: 'Equador',
  ee: 'Estonia',
  es: 'Spain',
  fi: 'Finland',
  fr: 'France',
  gr: 'Greece',
  gt: 'Guatemala',
  hk: 'Hong Kong',
  hn: 'Honduras',
  hu: 'Hungary',
  id: 'Indonesia',
  ie: 'Ireland',
  il: 'Isreal',
  is: 'Iceland',
  it: 'Italy',
  jp: 'Japan',
  lt: 'Lithuania',
  lu: 'Luxembourg',
  lv: 'Latvia',
  mc: 'Monaco',
  mt: 'Malta',
  mx: 'Mexico',
  my: 'Malaysia',
  ni: 'Nicoragua',
  nl: 'Netherlands',
  no: 'Norway',
  nz: 'New Zealand',
  pa: 'Panama',
  pe: 'Peru',
  ph: 'Philippines',
  pl: 'Poland',
  pt: 'Portugal',
  py: 'Paraguay',
  ro: 'Romania',
  se: 'Sweden',
  sg: 'Singapore',
  sk: 'Slovakia',
  sv: 'El Salvador',
  th: 'Thailand',
  tr: 'Turkey',
  tw: 'Taiwan',
  uy: 'Uraguay',
  vn: 'Viet Nam',
  za: 'South Africa',
};

const preload = {
  global: {
    songKey: 'Travis Scottgoosebumps',
    weekDiff: 66.49230769230769,
  },
  us: { songKey: 'J. ColeNo Role Modelz', weekDiff: 70.66153846153846 },
  gb: { songKey: 'The KooksNaive', weekDiff: 89.0923076923077 },
  ad: { songKey: 'C. TanganaMala Mujer', weekDiff: 1.523076923076923 },
  ar: { songKey: 'Gustavo CeratiCrimen', weekDiff: 91.56923076923077 },
  at: {
    songKey: 'Bonez MCPalmen aus Plastik',
    weekDiff: 90.66153846153846,
  },
  au: { songKey: 'Kanye WestGold Digger', weekDiff: 86.83076923076923 },
  be: { songKey: "Lil' KleineKrantenwijk", weekDiff: 60.98461538461538 },
  bg: {
    songKey: 'Arctic MonkeysDo I Wanna Know?',
    weekDiff: 77.93846153846154,
  },
  bo: { songKey: 'BacilosCaraluna', weekDiff: 74.81538461538462 },
  br: { songKey: 'ANAVITÓRIATrevo (Tu)', weekDiff: 84.84615384615384 },
  ca: {
    songKey: 'Sam HuntBody Like A Back Road',
    weekDiff: 74.73846153846154,
  },
  ch: { songKey: 'Bonez MCOhne mein Team', weekDiff: 81.46153846153847 },
  cl: {
    songKey: 'Villa CariñoSerenata cruel',
    weekDiff: 91.56923076923077,
  },
  co: {
    songKey: 'Manuel MedranoUna y Otra Vez',
    weekDiff: 89.43076923076923,
  },
  cr: { songKey: 'Vybz KartelFever', weekDiff: 91.41538461538461 },
  cy: { songKey: 'Cardi BBodak Yellow', weekDiff: 42.95384615384616 },
  cz: { songKey: 'Imagine DragonsDemons', weekDiff: 87.26153846153846 },
  de: { songKey: 'Bonez MCOhne mein Team', weekDiff: 88.46153846153847 },
  dk: { songKey: 'PhlakeAngel Zoo', weekDiff: 81.72307692307692 },
  do: {
    songKey: 'OzunaDile Que Tu Me Quieres',
    weekDiff: 76.86153846153846,
  },
  ec: {
    songKey: 'Manuel MedranoBajo El Agua',
    weekDiff: 88.44615384615385,
  },
  ee: { songKey: 'ReketKöievedu', weekDiff: 86.64615384615385 },
  es: { songKey: 'TabureteSirenas', weekDiff: 90.58461538461539 },
  fi: { songKey: 'Reino NordinAntaudun', weekDiff: 83.6923076923077 },
  fr: {
    songKey: "PNLJusqu'au dernier gramme",
    weekDiff: 83.44615384615385,
  },
  gr: {
    songKey: 'Arctic MonkeysDo I Wanna Know?',
    weekDiff: 74.93846153846154,
  },
  gt: { songKey: 'Ricardo ArjonaElla', weekDiff: 77.92307692307692 },
  hk: { songKey: 'Jason Chan你瞞我瞞', weekDiff: 92.55384615384615 },
  hn: {
    songKey: 'Banda Sinaloense MS de Sergio LizárragaMe Vas a Extrañar',
    weekDiff: 88.52307692307693,
  },
  hu: { songKey: 'Punnany MassifÉlvezd', weekDiff: 90.58461538461539 },
  id: { songKey: 'Sheila On 7Dan...', weekDiff: 92.55384615384615 },
  ie: {
    songKey: 'Picture ThisTake My Hand',
    weekDiff: 87.63076923076923,
  },
  il: { songKey: 'Omer Adamשני משוגעים', weekDiff: 33.47692307692308 },
  is: { songKey: 'KaleoVor í Vaglaskógi', weekDiff: 92.55384615384615 },
  it: { songKey: 'MadmanVeleno 6', weekDiff: 91.56923076923077 },
  jp: {
    songKey: 'Motohiro Hataひまわりの約束',
    weekDiff: 71.87692307692308,
  },
  lt: {
    songKey: 'Arctic MonkeysDo I Wanna Know?',
    weekDiff: 72.93846153846154,
  },
  lu: { songKey: 'Bonez MCOhne mein Team', weekDiff: 79.46153846153847 },
  lv: {
    songKey: 'Prāta VētraDebesis iekrita tevī',
    weekDiff: 90.58461538461539,
  },
  mt: {
    songKey: 'OasisWonderwall - Remastered',
    weekDiff: 61.46153846153846,
  },
  mx: { songKey: 'León LarreguiLocos', weekDiff: 91.56923076923077 },
  my: {
    songKey: 'AdeleMake You Feel My Love',
    weekDiff: 88.50769230769231,
  },
  ni: { songKey: 'Jarabe De PaloLa flaca', weekDiff: 84.01538461538462 },
  nl: { songKey: 'André Hazes Jr.Leef', weekDiff: 84.64615384615385 },
  no: { songKey: 'Freddy KalasJovial', weekDiff: 88.49230769230769 },
  nz: { songKey: 'J. ColeNo Role Modelz', weekDiff: 87.66153846153846 },
  pa: {
    songKey:
      'Anuel AaSola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]',
    weekDiff: 69.47692307692307,
  },
  pe: {
    songKey: 'Los 4Cuando Acaba el Placer',
    weekDiff: 87.63076923076923,
  },
  ph: { songKey: 'Up Dharma DownTadhana', weekDiff: 92.55384615384615 },
  pl: {
    songKey: 'Dawid PodsiadłoW Dobra Strone',
    weekDiff: 79.75384615384615,
  },
  pt: { songKey: 'DillazMo Boy', weekDiff: 91.56923076923077 },
  py: {
    songKey: 'KchiporrosCada Dia (feat. Emiliano Brancciari)',
    weekDiff: 75.81538461538462,
  },
  ro: { songKey: 'EminemRap God', weekDiff: 31.676923076923078 },
  se: {
    songKey: "JourneyDon't Stop Believin'",
    weekDiff: 81.03076923076924,
  },
  sg: { songKey: 'Hebe Tien小幸運', weekDiff: 91.53846153846153 },
  sk: {
    songKey: 'Nerieš10 Minút (feat. Dms)',
    weekDiff: 87.63076923076923,
  },
  sv: { songKey: 'BacilosCaraluna', weekDiff: 71.81538461538462 },
  th: { songKey: 'PORTRAITเจ็บจนไม่เข้าใจ', weekDiff: 61.04615384615385 },
  tr: { songKey: 'Müslüm GürsesAffet', weekDiff: 92.55384615384615 },
  tw: { songKey: 'LaLa Hsu失落沙洲', weekDiff: 91.2 },
  uy: { songKey: 'Dame 5Piel a Piel', weekDiff: 89.50769230769231 },
  vn: {
    songKey: 'My TamNguoi Hay Quen Em DI',
    weekDiff: 20.676923076923078,
  },
  za: { songKey: 'Lady ZamarCollide', weekDiff: 30.523076923076925 },
};

const countriesUniqueSongNotSorted = [];
Object.keys(preload).forEach(key => {
  countriesUniqueSongNotSorted.push({
    country: key,
    song: preload[key].songKey,
    weekDiff: preload[key].weekDiff,
  });
});

const countriesUniqueSong = countriesUniqueSongNotSorted
  .sort((a, b) => a.weekDiff - b.weekDiff)
  .map((data, i) => ({ key: i, value: data }));
