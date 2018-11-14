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


  const uniqueSongsCountryInGlobal = [
    {
      "country": "global",
      "song": "goosebumpsTravis Scott",
      "weekDiff": 66.125
    },
    {
      "country": "us",
      "song": "No Role ModelzJ. Cole",
      "weekDiff": 70.5625
    },
    {
      "country": "gb",
      "song": "Mr. BrightsideThe Killers",
      "weekDiff": 84.578125
    },
    {
      "country": "ad",
      "song": "I'm the OneDJ Khaled",
      "weekDiff": 0.09375
    },
    {
      "country": "ar",
      "song": "The ScientistColdplay",
      "weekDiff": 64.109375
    },
    {
      "country": "at",
      "song": "Was Du Liebe nennstBausa",
      "weekDiff": 53.390625
    },
    {
      "country": "au",
      "song": "Mr. BrightsideThe Killers",
      "weekDiff": 84.578125
    },
    {
      "country": "be",
      "song": "Wonderwall - RemasteredOasis",
      "weekDiff": 51.125
    },
    {
      "country": "bg",
      "song": "'Till I CollapseEminem",
      "weekDiff": 72.734375
    },
    {
      "country": "bo",
      "song": "Me Llamas (feat. Maluma) - RemixPiso 21",
      "weekDiff": 71.09375
    },
    {
      "country": "br",
      "song": "Hear Me NowAlok",
      "weekDiff": 71.34375
    },
    {
      "country": "ca",
      "song": "Body Like A Back RoadSam Hunt",
      "weekDiff": 74.578125
    },
    {
      "country": "ch",
      "song": "Was Du Liebe nennstBausa",
      "weekDiff": 49.390625
    },
    {
      "country": "cl",
      "song": "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]Anuel Aa",
      "weekDiff": 69.109375
    },
    {
      "country": "co",
      "song": "Te Quiero Pa´MiDon Omar",
      "weekDiff": 75.5
    },
    {
      "country": "cr",
      "song": "Bohemian Rhapsody - Remastered 2011Queen",
      "weekDiff": 76.4375
    },
    {
      "country": "cy",
      "song": "Bodak YellowCardi B",
      "weekDiff": 42.640625
    },
    {
      "country": "cz",
      "song": "HumanRag'n'Bone Man",
      "weekDiff": 73.53125
    },
    {
      "country": "de",
      "song": "Millionär187 Strassenbande",
      "weekDiff": 59.59375
    },
    {
      "country": "dk",
      "song": "Dancing On My OwnCalum Scott",
      "weekDiff": 54.296875
    },
    {
      "country": "do",
      "song": "Dile Que Tu Me QuieresOzuna",
      "weekDiff": 76.609375
    },
    {
      "country": "ec",
      "song": "TraicioneraSebastian Yatra",
      "weekDiff": 70.90625
    },
    {
      "country": "ee",
      "song": "Go FlexPost Malone",
      "weekDiff": 72.59375
    },
    {
      "country": "es",
      "song": "Me RehúsoDanny Ocean",
      "weekDiff": 50.46875
    },
    {
      "country": "fi",
      "song": "Summer AirItaloBrothers",
      "weekDiff": 53.140625
    },
    {
      "country": "fr",
      "song": "Sunset LoverPetit Biscuit",
      "weekDiff": 39.296875
    },
    {
      "country": "gr",
      "song": "'Till I CollapseEminem",
      "weekDiff": 72.734375
    },
    {
      "country": "gt",
      "song": "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]Anuel Aa",
      "weekDiff": 69.109375
    },
    {
      "country": "hk",
      "song": "Let Her GoPassenger",
      "weekDiff": 61.296875
    },
    {
      "country": "hn",
      "song": "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]Anuel Aa",
      "weekDiff": 69.109375
    },
    {
      "country": "hu",
      "song": "In The EndLinkin Park",
      "weekDiff": 74.234375
    },
    {
      "country": "id",
      "song": "Versace On The FloorBruno Mars",
      "weekDiff": 80.984375
    },
    {
      "country": "ie",
      "song": "Mr. BrightsideThe Killers",
      "weekDiff": 84.578125
    },
    {
      "country": "il",
      "song": "Take Me to ChurchHozier",
      "weekDiff": 29.6875
    },
    {
      "country": "is",
      "song": "Way Down We GoKaleo",
      "weekDiff": 83.984375
    },
    {
      "country": "it",
      "song": "Ricchi x SempreSfera Ebbasta",
      "weekDiff": 40.28125
    },
    {
      "country": "jp",
      "song": "Shake It OffTaylor Swift",
      "weekDiff": 55.15625
    },
    {
      "country": "lt",
      "song": "RedboneChildish Gambino",
      "weekDiff": 71.15625
    },
    {
      "country": "lu",
      "song": "goosebumpsTravis Scott",
      "weekDiff": 54.125
    },
    {
      "country": "lv",
      "song": "No Role ModelzJ. Cole",
      "weekDiff": 67.5625
    },
    {
      "country": "mt",
      "song": "Wonderwall - RemasteredOasis",
      "weekDiff": 61.125
    },
    {
      "country": "mx",
      "song": "Bohemian Rhapsody - Remastered 2011Queen",
      "weekDiff": 80.4375
    },
    {
      "country": "my",
      "song": "I'm Not The Only OneSam Smith",
      "weekDiff": 83.28125
    },
    {
      "country": "ni",
      "song": "MiddleDJ Snake",
      "weekDiff": 82.28125
    },
    {
      "country": "nl",
      "song": "HabibaBoef",
      "weekDiff": 47.4375
    },
    {
      "country": "no",
      "song": "Dancing On My OwnCalum Scott",
      "weekDiff": 66.296875
    },
    {
      "country": "nz",
      "song": "No Role ModelzJ. Cole",
      "weekDiff": 87.5625
    },
    {
      "country": "pa",
      "song": "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]Anuel Aa",
      "weekDiff": 69.109375
    },
    {
      "country": "pe",
      "song": "Andas En Mi CabezaChino & Nacho",
      "weekDiff": 75.140625
    },
    {
      "country": "ph",
      "song": "I'm Not The Only OneSam Smith",
      "weekDiff": 85.28125
    },
    {
      "country": "pl",
      "song": "Be MineOfenbach",
      "weekDiff": 71.390625
    },
    {
      "country": "pt",
      "song": "goosebumpsTravis Scott",
      "weekDiff": 53.125
    },
    {
      "country": "py",
      "song": "Te Quiero Pa´MiDon Omar",
      "weekDiff": 73.5
    },
    {
      "country": "ro",
      "song": "PICK IT UP (feat. A$AP Rocky)Famous Dex",
      "weekDiff": 22.75
    },
    {
      "country": "se",
      "song": "Don't Stop Believin'Journey",
      "weekDiff": 80.90625
    },
    {
      "country": "sg",
      "song": "I'm Not The Only OneSam Smith",
      "weekDiff": 80.28125
    },
    {
      "country": "sk",
      "song": "'Till I CollapseEminem",
      "weekDiff": 67.734375
    },
    {
      "country": "sv",
      "song": "MiddleDJ Snake",
      "weekDiff": 71.28125
    },
    {
      "country": "th",
      "song": "As If It's Your LastBLACKPINK",
      "weekDiff": 54.671875
    },
    {
      "country": "tr",
      "song": "Ciao AdiosAnne-Marie",
      "weekDiff": 59.59375
    },
    {
      "country": "tw",
      "song": "FadedAlan Walker",
      "weekDiff": 56.765625
    },
    {
      "country": "uy",
      "song": "Otra Vez (feat. J Balvin)Zion & Lennox",
      "weekDiff": 60.875
    },
    {
      "country": "vn",
      "song": "Intro: SingularityBTS",
      "weekDiff": 16.84375
    },
    {
      "country": "za",
      "song": "Don't Stop Believin'Journey",
      "weekDiff": 24.90625
    }
  ]

 const globalSongs = {
    "Taki Taki (with Selena Gomez, Ozuna & Cardi B)DJ Snake": {
      "artist": "DJ Snake",
      "song": "Taki Taki (with Selena Gomez, Ozuna & Cardi B)",
      "rank": "1",
      "streams": "29542152",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Taki Taki (with Selena Gomez, Ozuna & Cardi B)DJ Snake"
    },
    "MIA (feat. Drake)Bad Bunny": {
      "artist": "Bad Bunny",
      "song": "MIA (feat. Drake)",
      "rank": "1",
      "streams": "39639615",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "MIA (feat. Drake)Bad Bunny"
    },
    "Arms Around You (feat. Maluma & Swae Lee)XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Arms Around You (feat. Maluma & Swae Lee)",
      "rank": "3",
      "streams": "26157297",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Arms Around You (feat. Maluma & Swae Lee)XXXTENTACION"
    },
    "HappierMarshmello": {
      "artist": "Marshmello",
      "song": "Happier",
      "rank": "32",
      "streams": "11967789",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "HappierMarshmello"
    },
    "Sunflower - Spider-Man: Into the Spider-VersePost Malone": {
      "artist": "Post Malone",
      "song": "Sunflower - Spider-Man: Into the Spider-Verse",
      "rank": "5",
      "streams": "25233843",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Sunflower - Spider-Man: Into the Spider-VersePost Malone"
    },
    "ShallowLady Gaga": {
      "artist": "Lady Gaga",
      "song": "Shallow",
      "rank": "69",
      "streams": "8198600",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "ShallowLady Gaga"
    },
    "ZEZE (feat. Travis Scott & Offset)Kodak Black": {
      "artist": "Kodak Black",
      "song": "ZEZE (feat. Travis Scott & Offset)",
      "rank": "3",
      "streams": "29095302",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "ZEZE (feat. Travis Scott & Offset)Kodak Black"
    },
    "Without MeHalsey": {
      "artist": "Halsey",
      "song": "Without Me",
      "rank": "11",
      "streams": "17190271",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Without MeHalsey"
    },
    "SICKO MODETravis Scott": {
      "artist": "Travis Scott",
      "song": "SICKO MODE",
      "rank": "2",
      "streams": "33399542",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "SICKO MODETravis Scott"
    },
    "BetterKhalid": {
      "artist": "Khalid",
      "song": "Better",
      "rank": "21",
      "streams": "14474728",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "BetterKhalid"
    },
    "Promises (with Sam Smith)Calvin Harris": {
      "artist": "Calvin Harris",
      "song": "Promises (with Sam Smith)",
      "rank": "17",
      "streams": "17121509",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Promises (with Sam Smith)Calvin Harris"
    },
    "Mo BambaSheck Wes": {
      "artist": "Sheck Wes",
      "song": "Mo Bamba",
      "rank": "153",
      "streams": "4505135",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Mo BambaSheck Wes"
    },
    "when the party's overBillie Eilish": {
      "artist": "Billie Eilish",
      "song": "when the party's over",
      "rank": "18",
      "streams": "15651708",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "when the party's overBillie Eilish"
    },
    "Eastside (with Halsey & Khalid)benny blanco": {
      "artist": "benny blanco",
      "song": "Eastside (with Halsey & Khalid)",
      "rank": "34",
      "streams": "12037645",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Eastside (with Halsey & Khalid)benny blanco"
    },
    "In My MindDynoro": {
      "artist": "Dynoro",
      "song": "In My Mind",
      "rank": "121",
      "streams": "5574816",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "In My MindDynoro"
    },
    "Girls Like You (feat. Cardi B)Maroon 5": {
      "artist": "Maroon 5",
      "song": "Girls Like You (feat. Cardi B)",
      "rank": "22",
      "streams": "16103275",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Girls Like You (feat. Cardi B)Maroon 5"
    },
    "Kiss and Make UpDua Lipa": {
      "artist": "Dua Lipa",
      "song": "Kiss and Make Up",
      "rank": "16",
      "streams": "15971199",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Kiss and Make UpDua Lipa"
    },
    "Lucid DreamsJuice WRLD": {
      "artist": "Juice WRLD",
      "song": "Lucid Dreams",
      "rank": "125",
      "streams": "5274078",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Lucid DreamsJuice WRLD"
    },
    "I Love It (& Lil Pump)Kanye West": {
      "artist": "Kanye West",
      "song": "I Love It (& Lil Pump)",
      "rank": "1",
      "streams": "28516766",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "I Love It (& Lil Pump)Kanye West"
    },
    "Falling DownLil Peep": {
      "artist": "Lil Peep",
      "song": "Falling Down",
      "rank": "55",
      "streams": "8795605",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Falling DownLil Peep"
    },
    "Be AlrightDean Lewis": {
      "artist": "Dean Lewis",
      "song": "Be Alright",
      "rank": "136",
      "streams": "4764492",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "Be AlrightDean Lewis"
    },
    "Drip Too Hard (Lil Baby & Gunna)Lil Baby": {
      "artist": "Lil Baby",
      "song": "Drip Too Hard (Lil Baby & Gunna)",
      "rank": "13",
      "streams": "16365307",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Drip Too Hard (Lil Baby & Gunna)Lil Baby"
    },
    "SAD!XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "SAD!",
      "rank": "12",
      "streams": "18220827",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "SAD!XXXTENTACION"
    },
    "MoonlightXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Moonlight",
      "rank": "14",
      "streams": "16547753",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "MoonlightXXXTENTACION"
    },
    "In My FeelingsDrake": {
      "artist": "Drake",
      "song": "In My Feelings",
      "rank": "5",
      "streams": "30123256",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "In My FeelingsDrake"
    },
    "Woman Like Me (feat. Nicki Minaj)Little Mix": {
      "artist": "Little Mix",
      "song": "Woman Like Me (feat. Nicki Minaj)",
      "rank": "41",
      "streams": "10449909",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "Woman Like Me (feat. Nicki Minaj)Little Mix"
    },
    "Better NowPost Malone": {
      "artist": "Post Malone",
      "song": "Better Now",
      "rank": "1",
      "streams": "40788286",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Better NowPost Malone"
    },
    "Vaina LocaOzuna": {
      "artist": "Ozuna",
      "song": "Vaina Loca",
      "rank": "116",
      "streams": "5832230",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Vaina LocaOzuna"
    },
    "Sweet but PsychoAva Max": {
      "artist": "Ava Max",
      "song": "Sweet but Psycho",
      "rank": "115",
      "streams": "5963849",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Sweet but PsychoAva Max"
    },
    "Let You Love MeRita Ora": {
      "artist": "Rita Ora",
      "song": "Let You Love Me",
      "rank": "106",
      "streams": "5912403",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "Let You Love MeRita Ora"
    },
    "BEBE6ix9ine": {
      "artist": "6ix9ine",
      "song": "BEBE",
      "rank": "30",
      "streams": "14678790",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "BEBE6ix9ine"
    },
    "I Like ItCardi B": {
      "artist": "Cardi B",
      "song": "I Like It",
      "rank": "26",
      "streams": "12495810",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "I Like ItCardi B"
    },
    "Taste (feat. Offset)Tyga": {
      "artist": "Tyga",
      "song": "Taste (feat. Offset)",
      "rank": "132",
      "streams": "5077572",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Taste (feat. Offset)Tyga"
    },
    "No StylistFrench Montana": {
      "artist": "French Montana",
      "song": "No Stylist",
      "rank": "36",
      "streams": "11380668",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "No StylistFrench Montana"
    },
    "NaturalImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Natural",
      "rank": "56",
      "streams": "8361108",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "NaturalImagine Dragons"
    },
    "Youngblood5 Seconds of Summer": {
      "artist": "5 Seconds of Summer",
      "song": "Youngblood",
      "rank": "117",
      "streams": "5451577",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Youngblood5 Seconds of Summer"
    },
    "Suncity (feat. Empress Of)Khalid": {
      "artist": "Khalid",
      "song": "Suncity (feat. Empress Of)",
      "rank": "26",
      "streams": "13693043",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Suncity (feat. Empress Of)Khalid"
    },
    "Te Boté - RemixNio Garcia": {
      "artist": "Nio Garcia",
      "song": "Te Boté - Remix",
      "rank": "76",
      "streams": "7002517",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Te Boté - RemixNio Garcia"
    },
    "Electricity (with Dua Lipa)Silk City": {
      "artist": "Silk City",
      "song": "Electricity (with Dua Lipa)",
      "rank": "19",
      "streams": "15553196",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Electricity (with Dua Lipa)Silk City"
    },
    "FEFE (feat. Nicki Minaj & Murda Beatz)6ix9ine": {
      "artist": "6ix9ine",
      "song": "FEFE (feat. Nicki Minaj & Murda Beatz)",
      "rank": "15",
      "streams": "17986153",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "FEFE (feat. Nicki Minaj & Murda Beatz)6ix9ine"
    },
    "Fine ChinaFuture": {
      "artist": "Future",
      "song": "Fine China",
      "rank": "21",
      "streams": "14436312",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Fine ChinaFuture"
    },
    "rockstar (feat. 21 Savage)Post Malone": {
      "artist": "Post Malone",
      "song": "rockstar (feat. 21 Savage)",
      "rank": "8",
      "streams": "26920146",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "rockstar (feat. 21 Savage)Post Malone"
    },
    "Beautiful (feat. Camila Cabello)Bazzi": {
      "artist": "Bazzi",
      "song": "Beautiful (feat. Camila Cabello)",
      "rank": "63",
      "streams": "8500661",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Beautiful (feat. Camila Cabello)Bazzi"
    },
    "High HopesPanic! At The Disco": {
      "artist": "Panic! At The Disco",
      "song": "High Hopes",
      "rank": "85",
      "streams": "6424192",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "High HopesPanic! At The Disco"
    },
    "Quiere BeberAnuel Aa": {
      "artist": "Anuel Aa",
      "song": "Quiere Beber",
      "rank": "170",
      "streams": "4244495",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Quiere BeberAnuel Aa"
    },
    "MoneyCardi B": {
      "artist": "Cardi B",
      "song": "Money",
      "rank": "46",
      "streams": "9714415",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "MoneyCardi B"
    },
    "Cuando Te BeséBecky G": {
      "artist": "Becky G",
      "song": "Cuando Te Besé",
      "rank": "100",
      "streams": "6306341",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Cuando Te BeséBecky G"
    },
    "NonstopDrake": {
      "artist": "Drake",
      "song": "Nonstop",
      "rank": "1",
      "streams": "43697135",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "NonstopDrake"
    },
    "This Feeling (feat. Kelsea Ballerini)The Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "This Feeling (feat. Kelsea Ballerini)",
      "rank": "57",
      "streams": "8945403",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "This Feeling (feat. Kelsea Ballerini)The Chainsmokers"
    },
    "Always Remember Us This WayLady Gaga": {
      "artist": "Lady Gaga",
      "song": "Always Remember Us This Way",
      "rank": "68",
      "streams": "7880969",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "Always Remember Us This WayLady Gaga"
    },
    "Jocelyn FloresXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Jocelyn Flores",
      "rank": "25",
      "streams": "13967227",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Jocelyn FloresXXXTENTACION"
    },
    "Waste It On Me (feat. BTS)Steve Aoki": {
      "artist": "Steve Aoki",
      "song": "Waste It On Me (feat. BTS)",
      "rank": "52",
      "streams": "9262210",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Waste It On Me (feat. BTS)Steve Aoki"
    },
    "Love SomeoneLukas Graham": {
      "artist": "Lukas Graham",
      "song": "Love Someone",
      "rank": "169",
      "streams": "4230082",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Love SomeoneLukas Graham"
    },
    "Ruin My LifeZara Larsson": {
      "artist": "Zara Larsson",
      "song": "Ruin My Life",
      "rank": "56",
      "streams": "8778779",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Ruin My LifeZara Larsson"
    },
    "RiseJonas Blue": {
      "artist": "Jonas Blue",
      "song": "Rise",
      "rank": "200",
      "streams": "3957803",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "RiseJonas Blue"
    },
    "Lucky You (feat. Joyner Lucas)Eminem": {
      "artist": "Eminem",
      "song": "Lucky You (feat. Joyner Lucas)",
      "rank": "1",
      "streams": "34874403",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Lucky You (feat. Joyner Lucas)Eminem"
    },
    "Wake Up in the SkyGucci Mane": {
      "artist": "Gucci Mane",
      "song": "Wake Up in the Sky",
      "rank": "26",
      "streams": "13354462",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Wake Up in the SkyGucci Mane"
    },
    "No Es JustoJ Balvin": {
      "artist": "J Balvin",
      "song": "No Es Justo",
      "rank": "97",
      "streams": "6058055",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "No Es JustoJ Balvin"
    },
    "changesXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "changes",
      "rank": "56",
      "streams": "8137908",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "changesXXXTENTACION"
    },
    "Close To Me (with Diplo) (feat. Swae Lee)Ellie Goulding": {
      "artist": "Ellie Goulding",
      "song": "Close To Me (with Diplo) (feat. Swae Lee)",
      "rank": "60",
      "streams": "8356398",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Close To Me (with Diplo) (feat. Swae Lee)Ellie Goulding"
    },
    "Body (feat. brando)Loud Luxury": {
      "artist": "Loud Luxury",
      "song": "Body (feat. brando)",
      "rank": "23",
      "streams": "15043981",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Body (feat. brando)Loud Luxury"
    },
    "One Kiss (with Dua Lipa)Calvin Harris": {
      "artist": "Calvin Harris",
      "song": "One Kiss (with Dua Lipa)",
      "rank": "13",
      "streams": "19302911",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "One Kiss (with Dua Lipa)Calvin Harris"
    },
    "God's PlanDrake": {
      "artist": "Drake",
      "song": "God's Plan",
      "rank": "1",
      "streams": "45168581",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "God's PlanDrake"
    },
    "Solo (feat. Demi Lovato)Clean Bandit": {
      "artist": "Clean Bandit",
      "song": "Solo (feat. Demi Lovato)",
      "rank": "34",
      "streams": "10799993",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Solo (feat. Demi Lovato)Clean Bandit"
    },
    "NoticedLil Mosey": {
      "artist": "Lil Mosey",
      "song": "Noticed",
      "rank": "153",
      "streams": "4471816",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "NoticedLil Mosey"
    },
    "ShotgunGeorge Ezra": {
      "artist": "George Ezra",
      "song": "Shotgun",
      "rank": "158",
      "streams": "4329970",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "ShotgunGeorge Ezra"
    },
    "Never Recover (Lil Baby & Gunna, Drake)Lil Baby": {
      "artist": "Lil Baby",
      "song": "Never Recover (Lil Baby & Gunna, Drake)",
      "rank": "27",
      "streams": "12999466",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Never Recover (Lil Baby & Gunna, Drake)Lil Baby"
    },
    "Venom - Music From The Motion PictureEminem": {
      "artist": "Eminem",
      "song": "Venom - Music From The Motion Picture",
      "rank": "34",
      "streams": "13202544",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Venom - Music From The Motion PictureEminem"
    },
    "Amigos Con DerechosReik": {
      "artist": "Reik",
      "song": "Amigos Con Derechos",
      "rank": "133",
      "streams": "4852695",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Amigos Con DerechosReik"
    },
    "2002Anne-Marie": {
      "artist": "Anne-Marie",
      "song": "2002",
      "rank": "76",
      "streams": "8455286",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "2002Anne-Marie"
    },
    "lovely (with Khalid)Billie Eilish": {
      "artist": "Billie Eilish",
      "song": "lovely (with Khalid)",
      "rank": "138",
      "streams": "5188209",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "lovely (with Khalid)Billie Eilish"
    },
    "Mala MíaMaluma": {
      "artist": "Maluma",
      "song": "Mala Mía",
      "rank": "80",
      "streams": "6528721",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Mala MíaMaluma"
    },
    "Happy Now (feat. Sandro Cavazza)Kygo": {
      "artist": "Kygo",
      "song": "Happy Now (feat. Sandro Cavazza)",
      "rank": "73",
      "streams": "7457196",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Happy Now (feat. Sandro Cavazza)Kygo"
    },
    "Sin PijamaBecky G": {
      "artist": "Becky G",
      "song": "Sin Pijama",
      "rank": "123",
      "streams": "5386051",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Sin PijamaBecky G"
    },
    "Shape of YouEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Shape of You",
      "rank": "1",
      "streams": "51095759",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "Shape of YouEd Sheeran"
    },
    "Psycho (feat. Ty Dolla $ign)Post Malone": {
      "artist": "Post Malone",
      "song": "Psycho (feat. Ty Dolla $ign)",
      "rank": "2",
      "streams": "45142484",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "Psycho (feat. Ty Dolla $ign)Post Malone"
    },
    "ImposibleLuis Fonsi": {
      "artist": "Luis Fonsi",
      "song": "Imposible",
      "rank": "101",
      "streams": "6119459",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "ImposibleLuis Fonsi"
    },
    "God is a womanAriana Grande": {
      "artist": "Ariana Grande",
      "song": "God is a woman",
      "rank": "2",
      "streams": "29847494",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "God is a womanAriana Grande"
    },
    "no tears left to cryAriana Grande": {
      "artist": "Ariana Grande",
      "song": "no tears left to cry",
      "rank": "2",
      "streams": "38925971",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "no tears left to cryAriana Grande"
    },
    "Ya No Tiene NovioSebastian Yatra": {
      "artist": "Sebastian Yatra",
      "song": "Ya No Tiene Novio",
      "rank": "155",
      "streams": "4436755",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Ya No Tiene NovioSebastian Yatra"
    },
    "BelieverImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Believer",
      "rank": "73",
      "streams": "5621695",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "BelieverImagine Dragons"
    },
    "Fuck Love (feat. Trippie Redd)XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Fuck Love (feat. Trippie Redd)",
      "rank": "41",
      "streams": "10302103",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Fuck Love (feat. Trippie Redd)XXXTENTACION"
    },
    "breathinAriana Grande": {
      "artist": "Ariana Grande",
      "song": "breathin",
      "rank": "2",
      "streams": "25997814",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "breathinAriana Grande"
    },
    "Thunderclouds (with Sia, Diplo & Labrinth)Sia": {
      "artist": "Sia",
      "song": "Thunderclouds (with Sia, Diplo & Labrinth)",
      "rank": "73",
      "streams": "6919450",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Thunderclouds (with Sia, Diplo & Labrinth)Sia"
    },
    "Jackie ChanTiësto": {
      "artist": "Tiësto",
      "song": "Jackie Chan",
      "rank": "88",
      "streams": "6187577",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Jackie ChanTiësto"
    },
    "There's No Way (feat. Julia Michaels)Lauv": {
      "artist": "Lauv",
      "song": "There's No Way (feat. Julia Michaels)",
      "rank": "141",
      "streams": "5233152",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "There's No Way (feat. Julia Michaels)Lauv"
    },
    "Bohemian Rhapsody - Remastered 2011Queen": {
      "artist": "Queen",
      "song": "Bohemian Rhapsody - Remastered 2011",
      "rank": "183",
      "streams": "2684017",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Bohemian Rhapsody - Remastered 2011Queen"
    },
    "Leave Me AloneFlipp Dinero": {
      "artist": "Flipp Dinero",
      "song": "Leave Me Alone",
      "rank": "159",
      "streams": "4464413",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Leave Me AloneFlipp Dinero"
    },
    "CulpablesKarol G": {
      "artist": "Karol G",
      "song": "Culpables",
      "rank": "170",
      "streams": "4270973",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "CulpablesKarol G"
    },
    "STOOPID6ix9ine": {
      "artist": "6ix9ine",
      "song": "STOOPID",
      "rank": "18",
      "streams": "15135119",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "STOOPID6ix9ine"
    },
    "PerfectEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Perfect",
      "rank": "7",
      "streams": "24795623",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "PerfectEd Sheeran"
    },
    "HavanaCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Havana",
      "rank": "87",
      "streams": "5280396",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "HavanaCamila Cabello"
    },
    "IDGAFDua Lipa": {
      "artist": "Dua Lipa",
      "song": "IDGAF",
      "rank": "120",
      "streams": "4847913",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "IDGAFDua Lipa"
    },
    "Goodbye (feat. Nicki Minaj & Willy William)Jason Derulo": {
      "artist": "Jason Derulo",
      "song": "Goodbye (feat. Nicki Minaj & Willy William)",
      "rank": "110",
      "streams": "5361247",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Goodbye (feat. Nicki Minaj & Willy William)Jason Derulo"
    },
    "SLOW DANCING IN THE DARKJoji": {
      "artist": "Joji",
      "song": "SLOW DANCING IN THE DARK",
      "rank": "75",
      "streams": "7237051",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "SLOW DANCING IN THE DARKJoji"
    },
    "ThunderImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Thunder",
      "rank": "83",
      "streams": "6113081",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "ThunderImagine Dragons"
    },
    "Yes IndeedLil Baby": {
      "artist": "Lil Baby",
      "song": "Yes Indeed",
      "rank": "115",
      "streams": "5580381",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Yes IndeedLil Baby"
    },
    "IbizaOzuna": {
      "artist": "Ozuna",
      "song": "Ibiza",
      "rank": "133",
      "streams": "4624759",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "IbizaOzuna"
    },
    "New RulesDua Lipa": {
      "artist": "Dua Lipa",
      "song": "New Rules",
      "rank": "152",
      "streams": "3670110",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "New RulesDua Lipa"
    },
    "The MiddleZedd": {
      "artist": "Zedd",
      "song": "The Middle",
      "rank": "28",
      "streams": "12200748",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "The MiddleZedd"
    },
    "Saturday NightsKhalid": {
      "artist": "Khalid",
      "song": "Saturday Nights",
      "rank": "66",
      "streams": "8103764",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Saturday NightsKhalid"
    },
    "Back To You - From 13 Reasons Why – Season 2 SoundtrackSelena Gomez": {
      "artist": "Selena Gomez",
      "song": "Back To You - From 13 Reasons Why – Season 2 Soundtrack",
      "rank": "19",
      "streams": "14575836",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Back To You - From 13 Reasons Why – Season 2 SoundtrackSelena Gomez"
    },
    "FRIENDSMarshmello": {
      "artist": "Marshmello",
      "song": "FRIENDS",
      "rank": "25",
      "streams": "12997516",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "FRIENDSMarshmello"
    },
    "Happy NowZedd": {
      "artist": "Zedd",
      "song": "Happy Now",
      "rank": "83",
      "streams": "6581159",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "Happy NowZedd"
    },
    "I Fall ApartPost Malone": {
      "artist": "Post Malone",
      "song": "I Fall Apart",
      "rank": "107",
      "streams": "5045788",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "I Fall ApartPost Malone"
    },
    "No BrainerDJ Khaled": {
      "artist": "DJ Khaled",
      "song": "No Brainer",
      "rank": "4",
      "streams": "26590758",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "No BrainerDJ Khaled"
    },
    "TripElla Mai": {
      "artist": "Ella Mai",
      "song": "Trip",
      "rank": "157",
      "streams": "4484184",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "TripElla Mai"
    },
    "CelosoLele Pons": {
      "artist": "Lele Pons",
      "song": "Celoso",
      "rank": "154",
      "streams": "4488610",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "CelosoLele Pons"
    },
    "AsesinaBrytiago": {
      "artist": "Brytiago",
      "song": "Asesina",
      "rank": "148",
      "streams": "4699052",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "AsesinaBrytiago"
    },
    "Toda - RemixAlex Rose": {
      "artist": "Alex Rose",
      "song": "Toda - Remix",
      "rank": "190",
      "streams": "3920103",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "Toda - RemixAlex Rose"
    },
    "Say My NameDavid Guetta": {
      "artist": "David Guetta",
      "song": "Say My Name",
      "rank": "68",
      "streams": "7603228",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Say My NameDavid Guetta"
    },
    "Everybody Dies In Their NightmaresXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Everybody Dies In Their Nightmares",
      "rank": "52",
      "streams": "8964126",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Everybody Dies In Their NightmaresXXXTENTACION"
    },
    "ThrillerMichael Jackson": {
      "artist": "Michael Jackson",
      "song": "Thriller",
      "rank": "132",
      "streams": "4210906",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "ThrillerMichael Jackson"
    },
    "I Like Me BetterLauv": {
      "artist": "Lauv",
      "song": "I Like Me Better",
      "rank": "105",
      "streams": "4897350",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "I Like Me BetterLauv"
    },
    "Mona Lisa (feat. Kendrick Lamar)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Mona Lisa (feat. Kendrick Lamar)",
      "rank": "4",
      "streams": "26547867",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Mona Lisa (feat. Kendrick Lamar)Lil Wayne"
    },
    "TopangaTrippie Redd": {
      "artist": "Trippie Redd",
      "song": "Topanga",
      "rank": "116",
      "streams": "5554071",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "TopangaTrippie Redd"
    },
    "Praise The Lord (Da Shine)A$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Praise The Lord (Da Shine)",
      "rank": "25",
      "streams": "13195161",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Praise The Lord (Da Shine)A$AP Rocky"
    },
    "KillshotEminem": {
      "artist": "Eminem",
      "song": "Killshot",
      "rank": "23",
      "streams": "13711262",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "KillshotEminem"
    },
    "All Girls Are The SameJuice WRLD": {
      "artist": "Juice WRLD",
      "song": "All Girls Are The Same",
      "rank": "135",
      "streams": "5060708",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "All Girls Are The SameJuice WRLD"
    },
    "ClandestinoShakira": {
      "artist": "Shakira",
      "song": "Clandestino",
      "rank": "93",
      "streams": "6077514",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "ClandestinoShakira"
    },
    "New PatekLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "New Patek",
      "rank": "82",
      "streams": "7022779",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "New PatekLil Uzi Vert"
    },
    "I'm a MessBebe Rexha": {
      "artist": "Bebe Rexha",
      "song": "I'm a Mess",
      "rank": "109",
      "streams": "5462817",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "I'm a MessBebe Rexha"
    },
    "Love Lies (with Normani)Khalid": {
      "artist": "Khalid",
      "song": "Love Lies (with Normani)",
      "rank": "25",
      "streams": "13554767",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "Love Lies (with Normani)Khalid"
    },
    "Diamond HeartAlan Walker": {
      "artist": "Alan Walker",
      "song": "Diamond Heart",
      "rank": "176",
      "streams": "4600915",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Diamond HeartAlan Walker"
    },
    "No Me AcuerdoThalía": {
      "artist": "Thalía",
      "song": "No Me Acuerdo",
      "rank": "138",
      "streams": "4720155",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "No Me AcuerdoThalía"
    },
    "XO TOUR Llif3Lil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "XO TOUR Llif3",
      "rank": "86",
      "streams": "6087902",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "XO TOUR Llif3Lil Uzi Vert"
    },
    "STARGAZINGTravis Scott": {
      "artist": "Travis Scott",
      "song": "STARGAZING",
      "rank": "3",
      "streams": "30434014",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "STARGAZINGTravis Scott"
    },
    "Checklist (with Calvin Harris) (feat. WizKid)Normani": {
      "artist": "Normani",
      "song": "Checklist (with Calvin Harris) (feat. WizKid)",
      "rank": "128",
      "streams": "5300328",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Checklist (with Calvin Harris) (feat. WizKid)Normani"
    },
    "Too Good At GoodbyesSam Smith": {
      "artist": "Sam Smith",
      "song": "Too Good At Goodbyes",
      "rank": "3",
      "streams": "25971398",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Too Good At GoodbyesSam Smith"
    },
    "Nice For WhatDrake": {
      "artist": "Drake",
      "song": "Nice For What",
      "rank": "2",
      "streams": "33683833",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Nice For WhatDrake"
    },
    "1999Charli XCX": {
      "artist": "Charli XCX",
      "song": "1999",
      "rank": "194",
      "streams": "4240854",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "1999Charli XCX"
    },
    "Look At Me!XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Look At Me!",
      "rank": "108",
      "streams": "4880978",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Look At Me!XXXTENTACION"
    },
    "Lean Wit MeJuice WRLD": {
      "artist": "Juice WRLD",
      "song": "Lean Wit Me",
      "rank": "164",
      "streams": "4351425",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Lean Wit MeJuice WRLD"
    },
    "Born To Be YoursKygo": {
      "artist": "Kygo",
      "song": "Born To Be Yours",
      "rank": "38",
      "streams": "11331670",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Born To Be YoursKygo"
    },
    "PPPKevin Roldan": {
      "artist": "Kevin Roldan",
      "song": "PPP",
      "rank": "132",
      "streams": "5111721",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "PPPKevin Roldan"
    },
    "Look Alive (feat. Drake)BlocBoy JB": {
      "artist": "BlocBoy JB",
      "song": "Look Alive (feat. Drake)",
      "rank": "11",
      "streams": "16902176",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Look Alive (feat. Drake)BlocBoy JB"
    },
    "CloserThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Closer",
      "rank": "2",
      "streams": "22047697",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "CloserThe Chainsmokers"
    },
    "Ocean (feat. Khalid)Martin Garrix": {
      "artist": "Martin Garrix",
      "song": "Ocean (feat. Khalid)",
      "rank": "23",
      "streams": "14129653",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Ocean (feat. Khalid)Martin Garrix"
    },
    "Say You Won't Let GoJames Arthur": {
      "artist": "James Arthur",
      "song": "Say You Won't Let Go",
      "rank": "10",
      "streams": "15571413",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Say You Won't Let GoJames Arthur"
    },
    "Last MemoryTakeoff": {
      "artist": "Takeoff",
      "song": "Last Memory",
      "rank": "140",
      "streams": "5065462",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Last MemoryTakeoff"
    },
    "Meant to Be (feat. Florida Georgia Line)Bebe Rexha": {
      "artist": "Bebe Rexha",
      "song": "Meant to Be (feat. Florida Georgia Line)",
      "rank": "130",
      "streams": "4327410",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Meant to Be (feat. Florida Georgia Line)Bebe Rexha"
    },
    "Lost In Japan - RemixShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Lost In Japan - Remix",
      "rank": "126",
      "streams": "5563562",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Lost In Japan - RemixShawn Mendes"
    },
    "CongratulationsPost Malone": {
      "artist": "Post Malone",
      "song": "Congratulations",
      "rank": "196",
      "streams": "2695783",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "CongratulationsPost Malone"
    },
    "REEL IT INAminé": {
      "artist": "Aminé",
      "song": "REEL IT IN",
      "rank": "184",
      "streams": "4080668",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "REEL IT INAminé"
    },
    "BIG BANK (feat. 2 Chainz, Big Sean, Nicki Minaj)YG": {
      "artist": "YG",
      "song": "BIG BANK (feat. 2 Chainz, Big Sean, Nicki Minaj)",
      "rank": "81",
      "streams": "7232158",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "BIG BANK (feat. 2 Chainz, Big Sean, Nicki Minaj)YG"
    },
    "NevermindDennis Lloyd": {
      "artist": "Dennis Lloyd",
      "song": "Nevermind",
      "rank": "128",
      "streams": "4992640",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "NevermindDennis Lloyd"
    },
    "Hard Work Pays OffFuture": {
      "artist": "Future",
      "song": "Hard Work Pays Off",
      "rank": "96",
      "streams": "6291947",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Hard Work Pays OffFuture"
    },
    "What Lovers Do (feat. SZA)Maroon 5": {
      "artist": "Maroon 5",
      "song": "What Lovers Do (feat. SZA)",
      "rank": "29",
      "streams": "13652351",
      "country": "global",
      "week": "2017-09-01--2017-09-08",
      "songArtist": "What Lovers Do (feat. SZA)Maroon 5"
    },
    "Don't Leave Me Alone (feat. Anne-Marie)David Guetta": {
      "artist": "David Guetta",
      "song": "Don't Leave Me Alone (feat. Anne-Marie)",
      "rank": "77",
      "streams": "6599011",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Don't Leave Me Alone (feat. Anne-Marie)David Guetta"
    },
    "Está RicoMarc Anthony": {
      "artist": "Marc Anthony",
      "song": "Está Rico",
      "rank": "170",
      "streams": "4387507",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "Está RicoMarc Anthony"
    },
    "HipócritaAnuel Aa": {
      "artist": "Anuel Aa",
      "song": "Hipócrita",
      "rank": "179",
      "streams": "3850951",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "HipócritaAnuel Aa"
    },
    "Highway to HellAC/DC": {
      "artist": "AC/DC",
      "song": "Highway to Hell",
      "rank": "152",
      "streams": "4699023",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Highway to HellAC/DC"
    },
    "HappierEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Happier",
      "rank": "10",
      "streams": "23574465",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "HappierEd Sheeran"
    },
    "Whenever (feat. Conor Maynard)Kris Kross Amsterdam": {
      "artist": "Kris Kross Amsterdam",
      "song": "Whenever (feat. Conor Maynard)",
      "rank": "200",
      "streams": "3690390",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Whenever (feat. Conor Maynard)Kris Kross Amsterdam"
    },
    "These Days (feat. Jess Glynne, Macklemore & Dan Caplen)Rudimental": {
      "artist": "Rudimental",
      "song": "These Days (feat. Jess Glynne, Macklemore & Dan Caplen)",
      "rank": "126",
      "streams": "5150409",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "These Days (feat. Jess Glynne, Macklemore & Dan Caplen)Rudimental"
    },
    "I'll Never Love Again - Film Version - Radio EditLady Gaga": {
      "artist": "Lady Gaga",
      "song": "I'll Never Love Again - Film Version - Radio Edit",
      "rank": "169",
      "streams": "4544688",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "I'll Never Love Again - Film Version - Radio EditLady Gaga"
    },
    "X - RemixNicky Jam": {
      "artist": "Nicky Jam",
      "song": "X - Remix",
      "rank": "97",
      "streams": "6645232",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "X - RemixNicky Jam"
    },
    "I'm YoursJason Mraz": {
      "artist": "Jason Mraz",
      "song": "I'm Yours",
      "rank": "183",
      "streams": "3907117",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "I'm YoursJason Mraz"
    },
    "WORKIN MEQuavo": {
      "artist": "Quavo",
      "song": "WORKIN ME",
      "rank": "114",
      "streams": "5446763",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "WORKIN MEQuavo"
    },
    "the remedy for a broken heart (why am I so in love)XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "the remedy for a broken heart (why am I so in love)",
      "rank": "41",
      "streams": "10570630",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "the remedy for a broken heart (why am I so in love)XXXTENTACION"
    },
    "Young Dumb & BrokeKhalid": {
      "artist": "Khalid",
      "song": "Young Dumb & Broke",
      "rank": "159",
      "streams": "3617316",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "Young Dumb & BrokeKhalid"
    },
    "In My BloodShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "In My Blood",
      "rank": "7",
      "streams": "21904395",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "In My BloodShawn Mendes"
    },
    "Thinking Out LoudEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Thinking Out Loud",
      "rank": "150",
      "streams": "3414937",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Thinking Out LoudEd Sheeran"
    },
    "HUMBLE.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "HUMBLE.",
      "rank": "5",
      "streams": "26184873",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "HUMBLE.Kendrick Lamar"
    },
    "REMEDYAlesso": {
      "artist": "Alesso",
      "song": "REMEDY",
      "rank": "149",
      "streams": "4523939",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "REMEDYAlesso"
    },
    "idontwannabeyouanymoreBillie Eilish": {
      "artist": "Billie Eilish",
      "song": "idontwannabeyouanymore",
      "rank": "198",
      "streams": "4009702",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "idontwannabeyouanymoreBillie Eilish"
    },
    "YOSEMITETravis Scott": {
      "artist": "Travis Scott",
      "song": "YOSEMITE",
      "rank": "24",
      "streams": "14805515",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "YOSEMITETravis Scott"
    },
    "MineBazzi": {
      "artist": "Bazzi",
      "song": "Mine",
      "rank": "134",
      "streams": "4960508",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "MineBazzi"
    },
    "Atrasadinha - Ao VivoFelipe Araújo": {
      "artist": "Felipe Araújo",
      "song": "Atrasadinha - Ao Vivo",
      "rank": "169",
      "streams": "4458757",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Atrasadinha - Ao VivoFelipe Araújo"
    },
    "Head Above WaterAvril Lavigne": {
      "artist": "Avril Lavigne",
      "song": "Head Above Water",
      "rank": "181",
      "streams": "4126472",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "Head Above WaterAvril Lavigne"
    },
    "AfricaToto": {
      "artist": "Toto",
      "song": "Africa",
      "rank": "192",
      "streams": "3833063",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "AfricaToto"
    },
    "goosebumpsTravis Scott": {
      "artist": "Travis Scott",
      "song": "goosebumps",
      "rank": "192",
      "streams": "2619064",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "goosebumpsTravis Scott"
    },
    "Wonderwall - RemasteredOasis": {
      "artist": "Oasis",
      "song": "Wonderwall - Remastered",
      "rank": "196",
      "streams": "2968304",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Wonderwall - RemasteredOasis"
    },
    "PhotographEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Photograph",
      "rank": "123",
      "streams": "3836919",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "PhotographEd Sheeran"
    },
    "PolaroidJonas Blue": {
      "artist": "Jonas Blue",
      "song": "Polaroid",
      "rank": "197",
      "streams": "3961697",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "PolaroidJonas Blue"
    },
    "SilenceMarshmello": {
      "artist": "Marshmello",
      "song": "Silence",
      "rank": "48",
      "streams": "8827338",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "SilenceMarshmello"
    },
    "Another One Bites The Dust - Remastered 2011Queen": {
      "artist": "Queen",
      "song": "Another One Bites The Dust - Remastered 2011",
      "rank": "177",
      "streams": "4294753",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Another One Bites The Dust - Remastered 2011Queen"
    },
    "HopeXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Hope",
      "rank": "70",
      "streams": "7343374",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "HopeXXXTENTACION"
    },
    "MiAMi (feat. Gunna)Tory Lanez": {
      "artist": "Tory Lanez",
      "song": "MiAMi (feat. Gunna)",
      "rank": "179",
      "streams": "4283784",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "MiAMi (feat. Gunna)Tory Lanez"
    },
    "High On Life (feat. Bonn)Martin Garrix": {
      "artist": "Martin Garrix",
      "song": "High On Life (feat. Bonn)",
      "rank": "119",
      "streams": "5418954",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "High On Life (feat. Bonn)Martin Garrix"
    },
    "Something Just Like ThisThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Something Just Like This",
      "rank": "132",
      "streams": "4164649",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Something Just Like ThisThe Chainsmokers"
    },
    "Consequences - orchestraCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Consequences - orchestra",
      "rank": "198",
      "streams": "3950998",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "Consequences - orchestraCamila Cabello"
    },
    "Standard (feat. Trettmann, Gringo, Ufo361 & Gzuz)KitschKrieg": {
      "artist": "KitschKrieg",
      "song": "Standard (feat. Trettmann, Gringo, Ufo361 & Gzuz)",
      "rank": "193",
      "streams": "4174519",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Standard (feat. Trettmann, Gringo, Ufo361 & Gzuz)KitschKrieg"
    },
    "Ric Flair Drip (& Metro Boomin)Offset": {
      "artist": "Offset",
      "song": "Ric Flair Drip (& Metro Boomin)",
      "rank": "148",
      "streams": "3940583",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "Ric Flair Drip (& Metro Boomin)Offset"
    },
    "DarksideAlan Walker": {
      "artist": "Alan Walker",
      "song": "Darkside",
      "rank": "111",
      "streams": "5229016",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "DarksideAlan Walker"
    },
    "Don't Stop Me Now - RemasteredQueen": {
      "artist": "Queen",
      "song": "Don't Stop Me Now - Remastered",
      "rank": "186",
      "streams": "4245049",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "Don't Stop Me Now - RemasteredQueen"
    },
    "UproarLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Uproar",
      "rank": "19",
      "streams": "15580003",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "UproarLil Wayne"
    },
    "La Player (Bandolera)Zion & Lennox": {
      "artist": "Zion & Lennox",
      "song": "La Player (Bandolera)",
      "rank": "190",
      "streams": "3882563",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "La Player (Bandolera)Zion & Lennox"
    },
    "FlamesDavid Guetta": {
      "artist": "David Guetta",
      "song": "Flames",
      "rank": "85",
      "streams": "6310339",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "FlamesDavid Guetta"
    },
    "MeerLuciano": {
      "artist": "Luciano",
      "song": "Meer",
      "rank": "190",
      "streams": "4156714",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "MeerLuciano"
    },
    "Mr. BrightsideThe Killers": {
      "artist": "The Killers",
      "song": "Mr. Brightside",
      "rank": "193",
      "streams": "2605389",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Mr. BrightsideThe Killers"
    },
    "SWISHTyga": {
      "artist": "Tyga",
      "song": "SWISH",
      "rank": "56",
      "streams": "7970077",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "SWISHTyga"
    },
    "Tanta FaltaBryant Myers": {
      "artist": "Bryant Myers",
      "song": "Tanta Falta",
      "rank": "168",
      "streams": "4394994",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "Tanta FaltaBryant Myers"
    },
    "WolvesSelena Gomez": {
      "artist": "Selena Gomez",
      "song": "Wolves",
      "rank": "152",
      "streams": "3954120",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "WolvesSelena Gomez"
    },
    "OTWKhalid": {
      "artist": "Khalid",
      "song": "OTW",
      "rank": "46",
      "streams": "11575060",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "OTWKhalid"
    },
    "YEAH RIGHTJoji": {
      "artist": "Joji",
      "song": "YEAH RIGHT",
      "rank": "196",
      "streams": "4080859",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "YEAH RIGHTJoji"
    },
    "GhostbustersRay Parker, Jr.": {
      "artist": "Ray Parker, Jr.",
      "song": "Ghostbusters",
      "rank": "197",
      "streams": "4072158",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "GhostbustersRay Parker, Jr."
    },
    "TEST DRIVEJoji": {
      "artist": "Joji",
      "song": "TEST DRIVE",
      "rank": "198",
      "streams": "4055928",
      "country": "global",
      "week": "2018-10-26--2018-11-02",
      "songArtist": "TEST DRIVEJoji"
    },
    "Me NiegoReik": {
      "artist": "Reik",
      "song": "Me Niego",
      "rank": "116",
      "streams": "5202066",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "Me NiegoReik"
    },
    "StarboyThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Starboy",
      "rank": "1",
      "streams": "25286465",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "StarboyThe Weeknd"
    },
    "VertigoKhalid": {
      "artist": "Khalid",
      "song": "Vertigo",
      "rank": "81",
      "streams": "7437136",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "VertigoKhalid"
    },
    "Jet Lag (feat. Young Scooter)Future": {
      "artist": "Future",
      "song": "Jet Lag (feat. Young Scooter)",
      "rank": "123",
      "streams": "5492731",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Jet Lag (feat. Young Scooter)Future"
    },
    "Get Dripped (feat. Playboi Carti)Lil Yachty": {
      "artist": "Lil Yachty",
      "song": "Get Dripped (feat. Playboi Carti)",
      "rank": "132",
      "streams": "5245232",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Get Dripped (feat. Playboi Carti)Lil Yachty"
    },
    "PASS OUT (feat. 21 Savage)Quavo": {
      "artist": "Quavo",
      "song": "PASS OUT (feat. 21 Savage)",
      "rank": "37",
      "streams": "10881651",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "PASS OUT (feat. 21 Savage)Quavo"
    },
    "MotionKhalid": {
      "artist": "Khalid",
      "song": "Motion",
      "rank": "141",
      "streams": "5003165",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "MotionKhalid"
    },
    "All I AmJess Glynne": {
      "artist": "Jess Glynne",
      "song": "All I Am",
      "rank": "171",
      "streams": "4222580",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "All I AmJess Glynne"
    },
    "My BloodTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "My Blood",
      "rank": "160",
      "streams": "4309737",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "My BloodTwenty One Pilots"
    },
    "The RingerEminem": {
      "artist": "Eminem",
      "song": "The Ringer",
      "rank": "3",
      "streams": "30918553",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "The RingerEminem"
    },
    "Look What I FoundLady Gaga": {
      "artist": "Lady Gaga",
      "song": "Look What I Found",
      "rank": "174",
      "streams": "4461695",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Look What I FoundLady Gaga"
    },
    "AstronautsFuture": {
      "artist": "Future",
      "song": "Astronauts",
      "rank": "175",
      "streams": "4442837",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "AstronautsFuture"
    },
    "Roli Glitzer Glitzer (feat. Luciano & Eno)Capital Bra": {
      "artist": "Capital Bra",
      "song": "Roli Glitzer Glitzer (feat. Luciano & Eno)",
      "rank": "180",
      "streams": "4361757",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Roli Glitzer Glitzer (feat. Luciano & Eno)Capital Bra"
    },
    "Cry AloneLil Peep": {
      "artist": "Lil Peep",
      "song": "Cry Alone",
      "rank": "181",
      "streams": "4345605",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Cry AloneLil Peep"
    },
    "Call Out My NameThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Call Out My Name",
      "rank": "1",
      "streams": "40628023",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Call Out My NameThe Weeknd"
    },
    "Don't Cry (feat. XXXTENTACION)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Don't Cry (feat. XXXTENTACION)",
      "rank": "6",
      "streams": "21438140",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Don't Cry (feat. XXXTENTACION)Lil Wayne"
    },
    "LocationKhalid": {
      "artist": "Khalid",
      "song": "Location",
      "rank": "182",
      "streams": "3030830",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "LocationKhalid"
    },
    "Yacht Club (feat. Juice WRLD)Lil Yachty": {
      "artist": "Lil Yachty",
      "song": "Yacht Club (feat. Juice WRLD)",
      "rank": "196",
      "streams": "4125479",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Yacht Club (feat. Juice WRLD)Lil Yachty"
    },
    "Make It BackJuice WRLD": {
      "artist": "Juice WRLD",
      "song": "Make It Back",
      "rank": "197",
      "streams": "4026639",
      "country": "global",
      "week": "2018-10-19--2018-10-26",
      "songArtist": "Make It BackJuice WRLD"
    },
    "FallEminem": {
      "artist": "Eminem",
      "song": "Fall",
      "rank": "14",
      "streams": "19527974",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "FallEminem"
    },
    "Let You DownNF": {
      "artist": "NF",
      "song": "Let You Down",
      "rank": "54",
      "streams": "8100866",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "Let You DownNF"
    },
    "FLIP THE SWITCH (feat. Drake)Quavo": {
      "artist": "Quavo",
      "song": "FLIP THE SWITCH (feat. Drake)",
      "rank": "80",
      "streams": "7013195",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "FLIP THE SWITCH (feat. Drake)Quavo"
    },
    "LOSE IT (feat. Lil Baby)Quavo": {
      "artist": "Quavo",
      "song": "LOSE IT (feat. Lil Baby)",
      "rank": "144",
      "streams": "4890527",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "LOSE IT (feat. Lil Baby)Quavo"
    },
    "Sin (feat. Jaden Smith)Young Thug": {
      "artist": "Young Thug",
      "song": "Sin (feat. Jaden Smith)",
      "rank": "138",
      "streams": "5310991",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Sin (feat. Jaden Smith)Young Thug"
    },
    "RERUN (feat. Travis Scott)Quavo": {
      "artist": "Quavo",
      "song": "RERUN (feat. Travis Scott)",
      "rank": "160",
      "streams": "4496094",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "RERUN (feat. Travis Scott)Quavo"
    },
    "BIGGEST ALLEY OOPQuavo": {
      "artist": "Quavo",
      "song": "BIGGEST ALLEY OOP",
      "rank": "161",
      "streams": "4476183",
      "country": "global",
      "week": "2018-10-12--2018-10-19",
      "songArtist": "BIGGEST ALLEY OOPQuavo"
    },
    "Let It Fly (feat. Travis Scott)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Let It Fly (feat. Travis Scott)",
      "rank": "13",
      "streams": "16925770",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Let It Fly (feat. Travis Scott)Lil Wayne"
    },
    "Wasted (feat. Lil Uzi Vert)Juice WRLD": {
      "artist": "Juice WRLD",
      "song": "Wasted (feat. Lil Uzi Vert)",
      "rank": "89",
      "streams": "6417691",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Wasted (feat. Lil Uzi Vert)Juice WRLD"
    },
    "Want ToDua Lipa": {
      "artist": "Dua Lipa",
      "song": "Want To",
      "rank": "134",
      "streams": "5009169",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Want ToDua Lipa"
    },
    "UnforgettableFrench Montana": {
      "artist": "French Montana",
      "song": "Unforgettable",
      "rank": "164",
      "streams": "3719959",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "UnforgettableFrench Montana"
    },
    "1, 2, 3 (feat. Jason Derulo & De La Ghetto)Sofia Reyes": {
      "artist": "Sofia Reyes",
      "song": "1, 2, 3 (feat. Jason Derulo & De La Ghetto)",
      "rank": "175",
      "streams": "4052789",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "1, 2, 3 (feat. Jason Derulo & De La Ghetto)Sofia Reyes"
    },
    "Don’t Matter To Me (with Michael Jackson)Drake": {
      "artist": "Drake",
      "song": "Don’t Matter To Me (with Michael Jackson)",
      "rank": "13",
      "streams": "20626760",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "Don’t Matter To Me (with Michael Jackson)Drake"
    },
    "MorphTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Morph",
      "rank": "63",
      "streams": "8522626",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "MorphTwenty One Pilots"
    },
    "Madura (feat. Bad Bunny)Cosculluela": {
      "artist": "Cosculluela",
      "song": "Madura (feat. Bad Bunny)",
      "rank": "177",
      "streams": "4153767",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Madura (feat. Bad Bunny)Cosculluela"
    },
    "XNicky Jam": {
      "artist": "Nicky Jam",
      "song": "X",
      "rank": "31",
      "streams": "12073809",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "XNicky Jam"
    },
    "ChlorineTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Chlorine",
      "rank": "78",
      "streams": "7289861",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "ChlorineTwenty One Pilots"
    },
    "Love No MoreLoud Luxury": {
      "artist": "Loud Luxury",
      "song": "Love No More",
      "rank": "170",
      "streams": "4545552",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Love No MoreLoud Luxury"
    },
    "UnicaOzuna": {
      "artist": "Ozuna",
      "song": "Unica",
      "rank": "179",
      "streams": "4418370",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "UnicaOzuna"
    },
    "Estamos BienBad Bunny": {
      "artist": "Bad Bunny",
      "song": "Estamos Bien",
      "rank": "103",
      "streams": "6171332",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Estamos BienBad Bunny"
    },
    "One DanceDrake": {
      "artist": "Drake",
      "song": "One Dance",
      "rank": "13",
      "streams": "13620191",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "One DanceDrake"
    },
    "Whatever It TakesImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Whatever It Takes",
      "rank": "100",
      "streams": "5426121",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Whatever It TakesImagine Dragons"
    },
    "Perfect Duet (Ed Sheeran & Beyoncé)Ed Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Perfect Duet (Ed Sheeran & Beyoncé)",
      "rank": "3",
      "streams": "26494583",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "Perfect Duet (Ed Sheeran & Beyoncé)Ed Sheeran"
    },
    "Blah Blah BlahArmin van Buuren": {
      "artist": "Armin van Buuren",
      "song": "Blah Blah Blah",
      "rank": "182",
      "streams": "4076518",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Blah Blah BlahArmin van Buuren"
    },
    "Lose Yourself - From \"8 Mile\" SoundtrackEminem": {
      "artist": "Eminem",
      "song": "Lose Yourself - From \"8 Mile\" Soundtrack",
      "rank": "151",
      "streams": "3974266",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "Lose Yourself - From \"8 Mile\" SoundtrackEminem"
    },
    "What About Me (feat. Sosamann)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "What About Me (feat. Sosamann)",
      "rank": "26",
      "streams": "13621668",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "What About Me (feat. Sosamann)Lil Wayne"
    },
    "JumpsuitTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Jumpsuit",
      "rank": "59",
      "streams": "7987373",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "JumpsuitTwenty One Pilots"
    },
    "Tints (feat. Kendrick Lamar)Anderson .Paak": {
      "artist": "Anderson .Paak",
      "song": "Tints (feat. Kendrick Lamar)",
      "rank": "121",
      "streams": "5600121",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Tints (feat. Kendrick Lamar)Anderson .Paak"
    },
    "Nico And The NinersTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Nico And The Niners",
      "rank": "79",
      "streams": "6899889",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Nico And The NinersTwenty One Pilots"
    },
    "DedicateLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Dedicate",
      "rank": "23",
      "streams": "14479665",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "DedicateLil Wayne"
    },
    "SmithereensTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Smithereens",
      "rank": "129",
      "streams": "5413737",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "SmithereensTwenty One Pilots"
    },
    "Neon GravestonesTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Neon Gravestones",
      "rank": "132",
      "streams": "5334061",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Neon GravestonesTwenty One Pilots"
    },
    "Off White VLONE (Lil Baby & Gunna feat. Lil Durk & NAV)Lil Baby": {
      "artist": "Lil Baby",
      "song": "Off White VLONE (Lil Baby & Gunna feat. Lil Durk & NAV)",
      "rank": "139",
      "streams": "5041350",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Off White VLONE (Lil Baby & Gunna feat. Lil Durk & NAV)Lil Baby"
    },
    "The HypeTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "The Hype",
      "rank": "145",
      "streams": "4969195",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "The HypeTwenty One Pilots"
    },
    "Close Friends (Lil Baby & Gunna)Lil Baby": {
      "artist": "Lil Baby",
      "song": "Close Friends (Lil Baby & Gunna)",
      "rank": "149",
      "streams": "4883003",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Close Friends (Lil Baby & Gunna)Lil Baby"
    },
    "500 PSBonez MC": {
      "artist": "Bonez MC",
      "song": "500 PS",
      "rank": "111",
      "streams": "5790397",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "500 PSBonez MC"
    },
    "Can't Be BrokenLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Can't Be Broken",
      "rank": "29",
      "streams": "13276963",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Can't Be BrokenLil Wayne"
    },
    "Multi Millionaire (feat. Lil Uzi Vert)Lil Pump": {
      "artist": "Lil Pump",
      "song": "Multi Millionaire (feat. Lil Uzi Vert)",
      "rank": "153",
      "streams": "4845475",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Multi Millionaire (feat. Lil Uzi Vert)Lil Pump"
    },
    "LevitateTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Levitate",
      "rank": "158",
      "streams": "4783834",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "LevitateTwenty One Pilots"
    },
    "Drew BarrymoreBryce Vine": {
      "artist": "Bryce Vine",
      "song": "Drew Barrymore",
      "rank": "189",
      "streams": "3957123",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Drew BarrymoreBryce Vine"
    },
    "KokainBonez MC": {
      "artist": "Bonez MC",
      "song": "Kokain",
      "rank": "91",
      "streams": "6492645",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "KokainBonez MC"
    },
    "BanditoTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Bandito",
      "rank": "171",
      "streams": "4527698",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "BanditoTwenty One Pilots"
    },
    "Cut My LipTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Cut My Lip",
      "rank": "172",
      "streams": "4513910",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Cut My LipTwenty One Pilots"
    },
    "Pet CheetahTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Pet Cheetah",
      "rank": "178",
      "streams": "4437434",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Pet CheetahTwenty One Pilots"
    },
    "Me DijeronOzuna": {
      "artist": "Ozuna",
      "song": "Me Dijeron",
      "rank": "111",
      "streams": "5282640",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Me DijeronOzuna"
    },
    "Nummer unterdrücktBonez MC": {
      "artist": "Bonez MC",
      "song": "Nummer unterdrückt",
      "rank": "186",
      "streams": "4342180",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Nummer unterdrücktBonez MC"
    },
    "Self CareMac Miller": {
      "artist": "Mac Miller",
      "song": "Self Care",
      "rank": "197",
      "streams": "3811028",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Self CareMac Miller"
    },
    "Business Is Business (Lil Baby & Gunna)Lil Baby": {
      "artist": "Lil Baby",
      "song": "Business Is Business (Lil Baby & Gunna)",
      "rank": "192",
      "streams": "4250843",
      "country": "global",
      "week": "2018-10-05--2018-10-12",
      "songArtist": "Business Is Business (Lil Baby & Gunna)Lil Baby"
    },
    "Not Alike (feat. Royce Da 5'9)Eminem": {
      "artist": "Eminem",
      "song": "Not Alike (feat. Royce Da 5'9)",
      "rank": "12",
      "streams": "19832972",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Not Alike (feat. Royce Da 5'9)Eminem"
    },
    "8 LettersWhy Don't We": {
      "artist": "Why Don't We",
      "song": "8 Letters",
      "rank": "120",
      "streams": "5330989",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "8 LettersWhy Don't We"
    },
    "Dark Side Of The Moon (feat. Nicki Minaj)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Dark Side Of The Moon (feat. Nicki Minaj)",
      "rank": "47",
      "streams": "10235942",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Dark Side Of The Moon (feat. Nicki Minaj)Lil Wayne"
    },
    "Drip Too HardLil Baby": {
      "artist": "Lil Baby",
      "song": "Drip Too Hard",
      "rank": "72",
      "streams": "7366534",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Drip Too HardLil Baby"
    },
    "Famous (feat. Reginae Carter)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Famous (feat. Reginae Carter)",
      "rank": "62",
      "streams": "9005862",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Famous (feat. Reginae Carter)Lil Wayne"
    },
    "Dope Niggaz (feat. Snoop Dogg)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Dope Niggaz (feat. Snoop Dogg)",
      "rank": "66",
      "streams": "8681211",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Dope Niggaz (feat. Snoop Dogg)Lil Wayne"
    },
    "Open LetterLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Open Letter",
      "rank": "68",
      "streams": "8298060",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Open LetterLil Wayne"
    },
    "ProblemsLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Problems",
      "rank": "79",
      "streams": "7240428",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "ProblemsLil Wayne"
    },
    "HittasLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Hittas",
      "rank": "89",
      "streams": "6844426",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "HittasLil Wayne"
    },
    "Open SafeLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Open Safe",
      "rank": "98",
      "streams": "6511628",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Open SafeLil Wayne"
    },
    "If I'm Lyin, I'm FlyinKodak Black": {
      "artist": "Kodak Black",
      "song": "If I'm Lyin, I'm Flyin",
      "rank": "104",
      "streams": "6324281",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "If I'm Lyin, I'm FlyinKodak Black"
    },
    "Took His TimeLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Took His Time",
      "rank": "105",
      "streams": "6302597",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Took His TimeLil Wayne"
    },
    "Let It All Work OutLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Let It All Work Out",
      "rank": "118",
      "streams": "5859639",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Let It All Work OutLil Wayne"
    },
    "I Love You DwayneLil Wayne": {
      "artist": "Lil Wayne",
      "song": "I Love You Dwayne",
      "rank": "127",
      "streams": "5553668",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "I Love You DwayneLil Wayne"
    },
    "MessLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Mess",
      "rank": "128",
      "streams": "5543367",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "MessLil Wayne"
    },
    "Used 2Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Used 2",
      "rank": "139",
      "streams": "5306289",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Used 2Lil Wayne"
    },
    "DemonLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Demon",
      "rank": "143",
      "streams": "5191797",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "DemonLil Wayne"
    },
    "Start This Shit Off Right (feat. Ashanti & Mack Maine)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Start This Shit Off Right (feat. Ashanti & Mack Maine)",
      "rank": "147",
      "streams": "5133296",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Start This Shit Off Right (feat. Ashanti & Mack Maine)Lil Wayne"
    },
    "Perfect StrangersLil Wayne": {
      "artist": "Lil Wayne",
      "song": "Perfect Strangers",
      "rank": "162",
      "streams": "4789881",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Perfect StrangersLil Wayne"
    },
    "RAP DEVILMachine Gun Kelly": {
      "artist": "Machine Gun Kelly",
      "song": "RAP DEVIL",
      "rank": "139",
      "streams": "4879445",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "RAP DEVILMachine Gun Kelly"
    },
    "ICONIC (ft. Jaden Smith)Logic": {
      "artist": "Logic",
      "song": "ICONIC (ft. Jaden Smith)",
      "rank": "177",
      "streams": "4589859",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "ICONIC (ft. Jaden Smith)Logic"
    },
    "Dope New Gospel (feat. Nivea)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Dope New Gospel (feat. Nivea)",
      "rank": "181",
      "streams": "4544978",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Dope New Gospel (feat. Nivea)Lil Wayne"
    },
    "GreatestEminem": {
      "artist": "Eminem",
      "song": "Greatest",
      "rank": "7",
      "streams": "21689170",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "GreatestEminem"
    },
    "Wu Tang Forever (ft. Ghostface Killah, Raekwon, RZA, Method Man, Inspectah Deck, Cappadonna, Jackpot Scotty Wotty, U-God, Masta Killa, GZA)Logic": {
      "artist": "Logic",
      "song": "Wu Tang Forever (ft. Ghostface Killah, Raekwon, RZA, Method Man, Inspectah Deck, Cappadonna, Jackpot Scotty Wotty, U-God, Masta Killa, GZA)",
      "rank": "192",
      "streams": "4285515",
      "country": "global",
      "week": "2018-09-28--2018-10-05",
      "songArtist": "Wu Tang Forever (ft. Ghostface Killah, Raekwon, RZA, Method Man, Inspectah Deck, Cappadonna, Jackpot Scotty Wotty, U-God, Masta Killa, GZA)Logic"
    },
    "Por PerroSebastian Yatra": {
      "artist": "Sebastian Yatra",
      "song": "Por Perro",
      "rank": "163",
      "streams": "4635203",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Por PerroSebastian Yatra"
    },
    "CulpablesManuel Turizo": {
      "artist": "Manuel Turizo",
      "song": "Culpables",
      "rank": "173",
      "streams": "4131944",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "CulpablesManuel Turizo"
    },
    "Hopeless Romantic (feat. Swae Lee)Wiz Khalifa": {
      "artist": "Wiz Khalifa",
      "song": "Hopeless Romantic (feat. Swae Lee)",
      "rank": "87",
      "streams": "6498571",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Hopeless Romantic (feat. Swae Lee)Wiz Khalifa"
    },
    "Mi Cama - RemixKarol G": {
      "artist": "Karol G",
      "song": "Mi Cama - Remix",
      "rank": "76",
      "streams": "6601932",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Mi Cama - RemixKarol G"
    },
    "SeptemberEarth, Wind & Fire": {
      "artist": "Earth, Wind & Fire",
      "song": "September",
      "rank": "195",
      "streams": "3476906",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "SeptemberEarth, Wind & Fire"
    },
    "KamikazeEminem": {
      "artist": "Eminem",
      "song": "Kamikaze",
      "rank": "16",
      "streams": "18412370",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "KamikazeEminem"
    },
    "90MINSalmo": {
      "artist": "Salmo",
      "song": "90MIN",
      "rank": "157",
      "streams": "4531697",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "90MINSalmo"
    },
    "Taking A WalkTrippie Redd": {
      "artist": "Trippie Redd",
      "song": "Taking A Walk",
      "rank": "42",
      "streams": "10014532",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Taking A WalkTrippie Redd"
    },
    "Ciumeira - Ao VivoMarília Mendonça": {
      "artist": "Marília Mendonça",
      "song": "Ciumeira - Ao Vivo",
      "rank": "187",
      "streams": "4034540",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Ciumeira - Ao VivoMarília Mendonça"
    },
    "INTERNATIONAL GANGSTASFarid Bang": {
      "artist": "Farid Bang",
      "song": "INTERNATIONAL GANGSTAS",
      "rank": "173",
      "streams": "4227364",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "INTERNATIONAL GANGSTASFarid Bang"
    },
    "Dura - RemixDaddy Yankee": {
      "artist": "Daddy Yankee",
      "song": "Dura - Remix",
      "rank": "150",
      "streams": "4813672",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Dura - RemixDaddy Yankee"
    },
    "Zero - From the Original Motion Picture \"Ralph Breaks The Internet\"Imagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Zero - From the Original Motion Picture \"Ralph Breaks The Internet\"",
      "rank": "178",
      "streams": "4157114",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "Zero - From the Original Motion Picture \"Ralph Breaks The Internet\"Imagine Dragons"
    },
    "Creep On MeGASHI": {
      "artist": "GASHI",
      "song": "Creep On Me",
      "rank": "179",
      "streams": "4154838",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "Creep On MeGASHI"
    },
    "Plug WalkRich The Kid": {
      "artist": "Rich The Kid",
      "song": "Plug Walk",
      "rank": "145",
      "streams": "4586692",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "Plug WalkRich The Kid"
    },
    "Remind Me to ForgetKygo": {
      "artist": "Kygo",
      "song": "Remind Me to Forget",
      "rank": "57",
      "streams": "8367090",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Remind Me to ForgetKygo"
    },
    "UFFVeysel": {
      "artist": "Veysel",
      "song": "UFF",
      "rank": "183",
      "streams": "4104415",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "UFFVeysel"
    },
    "Feel It StillPortugal. The Man": {
      "artist": "Portugal. The Man",
      "song": "Feel It Still",
      "rank": "99",
      "streams": "5160634",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Feel It StillPortugal. The Man"
    },
    "BONNIE & CLYDELoredana": {
      "artist": "Loredana",
      "song": "BONNIE & CLYDE",
      "rank": "136",
      "streams": "4975758",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "BONNIE & CLYDELoredana"
    },
    "All The Stars (with SZA)Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "All The Stars (with SZA)",
      "rank": "19",
      "streams": "14130083",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "All The Stars (with SZA)Kendrick Lamar"
    },
    "Chica ParanormalPaulo Londra": {
      "artist": "Paulo Londra",
      "song": "Chica Paranormal",
      "rank": "192",
      "streams": "3849695",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Chica ParanormalPaulo Londra"
    },
    "BUTTERFLY EFFECTTravis Scott": {
      "artist": "Travis Scott",
      "song": "BUTTERFLY EFFECT",
      "rank": "164",
      "streams": "3588126",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "BUTTERFLY EFFECTTravis Scott"
    },
    "Feels Like SummerChildish Gambino": {
      "artist": "Childish Gambino",
      "song": "Feels Like Summer",
      "rank": "169",
      "streams": "4339960",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Feels Like SummerChildish Gambino"
    },
    "LustLil Skies": {
      "artist": "Lil Skies",
      "song": "Lust",
      "rank": "196",
      "streams": "3947713",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "LustLil Skies"
    },
    "Fr Fr (feat. Lil Skies)Wiz Khalifa": {
      "artist": "Wiz Khalifa",
      "song": "Fr Fr (feat. Lil Skies)",
      "rank": "130",
      "streams": "5112027",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Fr Fr (feat. Lil Skies)Wiz Khalifa"
    },
    "Guiding LightMumford & Sons": {
      "artist": "Mumford & Sons",
      "song": "Guiding Light",
      "rank": "197",
      "streams": "3950404",
      "country": "global",
      "week": "2018-09-21--2018-09-28",
      "songArtist": "Guiding LightMumford & Sons"
    },
    "Walk It Talk ItMigos": {
      "artist": "Migos",
      "song": "Walk It Talk It",
      "rank": "30",
      "streams": "11871747",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Walk It Talk ItMigos"
    },
    "NormalEminem": {
      "artist": "Eminem",
      "song": "Normal",
      "rank": "23",
      "streams": "15954601",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "NormalEminem"
    },
    "Verleden TijdFrenna": {
      "artist": "Frenna",
      "song": "Verleden Tijd",
      "rank": "111",
      "streams": "5689674",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Verleden TijdFrenna"
    },
    "Stepping StoneEminem": {
      "artist": "Eminem",
      "song": "Stepping Stone",
      "rank": "28",
      "streams": "15085613",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Stepping StoneEminem"
    },
    "Pretty Little Fears (feat. J. Cole)6LACK": {
      "artist": "6LACK",
      "song": "Pretty Little Fears (feat. J. Cole)",
      "rank": "129",
      "streams": "5158068",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Pretty Little Fears (feat. J. Cole)6LACK"
    },
    "Burn Out (feat. Dewain Whitmore)Martin Garrix": {
      "artist": "Martin Garrix",
      "song": "Burn Out (feat. Dewain Whitmore)",
      "rank": "138",
      "streams": "4950269",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Burn Out (feat. Dewain Whitmore)Martin Garrix"
    },
    "Mariners Apartment ComplexLana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Mariners Apartment Complex",
      "rank": "141",
      "streams": "4899476",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Mariners Apartment ComplexLana Del Rey"
    },
    "MedicinaAnitta": {
      "artist": "Anitta",
      "song": "Medicina",
      "rank": "95",
      "streams": "5939648",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "MedicinaAnitta"
    },
    "Good Guy (feat. Jessie Reyez)Eminem": {
      "artist": "Eminem",
      "song": "Good Guy (feat. Jessie Reyez)",
      "rank": "39",
      "streams": "12257816",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Good Guy (feat. Jessie Reyez)Eminem"
    },
    "Side Effects (feat. Emily Warren)The Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Side Effects (feat. Emily Warren)",
      "rank": "105",
      "streams": "5459269",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Side Effects (feat. Emily Warren)The Chainsmokers"
    },
    "IDOLBTS": {
      "artist": "BTS",
      "song": "IDOL",
      "rank": "59",
      "streams": "7627670",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "IDOLBTS"
    },
    "Balenciaga Challenge (feat. Offset)6LACK": {
      "artist": "6LACK",
      "song": "Balenciaga Challenge (feat. Offset)",
      "rank": "176",
      "streams": "4193702",
      "country": "global",
      "week": "2018-09-14--2018-09-21",
      "songArtist": "Balenciaga Challenge (feat. Offset)6LACK"
    },
    "No Quiero Amarte (feat. Zion & Lennox)Justin Quiles": {
      "artist": "Justin Quiles",
      "song": "No Quiero Amarte (feat. Zion & Lennox)",
      "rank": "192",
      "streams": "3978617",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "No Quiero Amarte (feat. Zion & Lennox)Justin Quiles"
    },
    "I'm UpsetDrake": {
      "artist": "Drake",
      "song": "I'm Upset",
      "rank": "32",
      "streams": "11523957",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "I'm UpsetDrake"
    },
    "Wake Me UpAvicii": {
      "artist": "Avicii",
      "song": "Wake Me Up",
      "rank": "132",
      "streams": "5094205",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Wake Me UpAvicii"
    },
    "HaloBeyoncé": {
      "artist": "Beyoncé",
      "song": "Halo",
      "rank": "149",
      "streams": "3574193",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "HaloBeyoncé"
    },
    "sweetenerAriana Grande": {
      "artist": "Ariana Grande",
      "song": "sweetener",
      "rank": "29",
      "streams": "12485242",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "sweetenerAriana Grande"
    },
    "LaddersMac Miller": {
      "artist": "Mac Miller",
      "song": "Ladders",
      "rank": "82",
      "streams": "6867828",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "LaddersMac Miller"
    },
    "Hurt FeelingsMac Miller": {
      "artist": "Mac Miller",
      "song": "Hurt Feelings",
      "rank": "107",
      "streams": "5845682",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Hurt FeelingsMac Miller"
    },
    "Come Back to EarthMac Miller": {
      "artist": "Mac Miller",
      "song": "Come Back to Earth",
      "rank": "110",
      "streams": "5713873",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Come Back to EarthMac Miller"
    },
    "Nice Guy (with Jessie Reyez)Eminem": {
      "artist": "Eminem",
      "song": "Nice Guy (with Jessie Reyez)",
      "rank": "44",
      "streams": "11342755",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Nice Guy (with Jessie Reyez)Eminem"
    },
    "Paul - SkitPaul Rosenberg": {
      "artist": "Paul Rosenberg",
      "song": "Paul - Skit",
      "rank": "37",
      "streams": "12829836",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Paul - SkitPaul Rosenberg"
    },
    "Tie Me Down (with Elley Duhé)Gryffin": {
      "artist": "Gryffin",
      "song": "Tie Me Down (with Elley Duhé)",
      "rank": "161",
      "streams": "4378711",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Tie Me Down (with Elley Duhé)Gryffin"
    },
    "What's the Use?Mac Miller": {
      "artist": "Mac Miller",
      "song": "What's the Use?",
      "rank": "150",
      "streams": "4664654",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "What's the Use?Mac Miller"
    },
    "Donald TrumpMac Miller": {
      "artist": "Mac Miller",
      "song": "Donald Trump",
      "rank": "162",
      "streams": "4355164",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Donald TrumpMac Miller"
    },
    "Em Calls Paul - SkitEminem": {
      "artist": "Eminem",
      "song": "Em Calls Paul - Skit",
      "rank": "45",
      "streams": "11199609",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Em Calls Paul - SkitEminem"
    },
    "Mob TiesDrake": {
      "artist": "Drake",
      "song": "Mob Ties",
      "rank": "11",
      "streams": "25933856",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Mob TiesDrake"
    },
    "The Flute SongRuss": {
      "artist": "Russ",
      "song": "The Flute Song",
      "rank": "177",
      "streams": "4133199",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "The Flute SongRuss"
    },
    "Magic In The Hamptons (feat. Lil Yachty)Social House": {
      "artist": "Social House",
      "song": "Magic In The Hamptons (feat. Lil Yachty)",
      "rank": "191",
      "streams": "3948528",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Magic In The Hamptons (feat. Lil Yachty)Social House"
    },
    "La CinturaAlvaro Soler": {
      "artist": "Alvaro Soler",
      "song": "La Cintura",
      "rank": "172",
      "streams": "4381287",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "La CinturaAlvaro Soler"
    },
    "Ball For Me (feat. Nicki Minaj)Post Malone": {
      "artist": "Post Malone",
      "song": "Ball For Me (feat. Nicki Minaj)",
      "rank": "15",
      "streams": "21648376",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Ball For Me (feat. Nicki Minaj)Post Malone"
    },
    "All of MeJohn Legend": {
      "artist": "John Legend",
      "song": "All of Me",
      "rank": "197",
      "streams": "2568720",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "All of MeJohn Legend"
    },
    "Freaky Friday (feat. Chris Brown)Lil Dicky": {
      "artist": "Lil Dicky",
      "song": "Freaky Friday (feat. Chris Brown)",
      "rank": "26",
      "streams": "12068117",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Freaky Friday (feat. Chris Brown)Lil Dicky"
    },
    "Weekend (feat. Miguel)Mac Miller": {
      "artist": "Mac Miller",
      "song": "Weekend (feat. Miguel)",
      "rank": "198",
      "streams": "3932201",
      "country": "global",
      "week": "2018-09-07--2018-09-14",
      "songArtist": "Weekend (feat. Miguel)Mac Miller"
    },
    "Te AmoPiso 21": {
      "artist": "Piso 21",
      "song": "Te Amo",
      "rank": "147",
      "streams": "4529116",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "Te AmoPiso 21"
    },
    "Take Me to ChurchHozier": {
      "artist": "Hozier",
      "song": "Take Me to Church",
      "rank": "194",
      "streams": "3996559",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Take Me to ChurchHozier"
    },
    "everytimeAriana Grande": {
      "artist": "Ariana Grande",
      "song": "everytime",
      "rank": "28",
      "streams": "13262251",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "everytimeAriana Grande"
    },
    "'Till I CollapseEminem": {
      "artist": "Eminem",
      "song": "'Till I Collapse",
      "rank": "189",
      "streams": "2726518",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "'Till I CollapseEminem"
    },
    "Dance To This (feat. Ariana Grande)Troye Sivan": {
      "artist": "Troye Sivan",
      "song": "Dance To This (feat. Ariana Grande)",
      "rank": "75",
      "streams": "7123678",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Dance To This (feat. Ariana Grande)Troye Sivan"
    },
    "Bella - RemixWolfine": {
      "artist": "Wolfine",
      "song": "Bella - Remix",
      "rank": "178",
      "streams": "4413766",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Bella - RemixWolfine"
    },
    "River (feat. Ed Sheeran)Eminem": {
      "artist": "Eminem",
      "song": "River (feat. Ed Sheeran)",
      "rank": "2",
      "streams": "29880509",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "River (feat. Ed Sheeran)Eminem"
    },
    "Bed (feat. Ariana Grande)Nicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Bed (feat. Ariana Grande)",
      "rank": "29",
      "streams": "13297354",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Bed (feat. Ariana Grande)Nicki Minaj"
    },
    "Síguelo BailandoOzuna": {
      "artist": "Ozuna",
      "song": "Síguelo Bailando",
      "rank": "187",
      "streams": "3550311",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Síguelo BailandoOzuna"
    },
    "Only You (with Little Mix)Cheat Codes": {
      "artist": "Cheat Codes",
      "song": "Only You (with Little Mix)",
      "rank": "132",
      "streams": "4991715",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "Only You (with Little Mix)Cheat Codes"
    },
    "you should see me in a crownBillie Eilish": {
      "artist": "Billie Eilish",
      "song": "you should see me in a crown",
      "rank": "64",
      "streams": "7388055",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "you should see me in a crownBillie Eilish"
    },
    "Nephew (feat. Lil Pump)Smokepurpp": {
      "artist": "Smokepurpp",
      "song": "Nephew (feat. Lil Pump)",
      "rank": "183",
      "streams": "4062276",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Nephew (feat. Lil Pump)Smokepurpp"
    },
    "Candy PaintPost Malone": {
      "artist": "Post Malone",
      "song": "Candy Paint",
      "rank": "199",
      "streams": "3203086",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Candy PaintPost Malone"
    },
    "WAKE UPTravis Scott": {
      "artist": "Travis Scott",
      "song": "WAKE UP",
      "rank": "22",
      "streams": "15188082",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "WAKE UPTravis Scott"
    },
    "Lucky StrikeTroye Sivan": {
      "artist": "Troye Sivan",
      "song": "Lucky Strike",
      "rank": "194",
      "streams": "3926159",
      "country": "global",
      "week": "2018-08-31--2018-09-07",
      "songArtist": "Lucky StrikeTroye Sivan"
    },
    "Chanel (Go Get It) [feat. Gunna & Lil Baby]Young Thug": {
      "artist": "Young Thug",
      "song": "Chanel (Go Get It) [feat. Gunna & Lil Baby]",
      "rank": "155",
      "streams": "4474120",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Chanel (Go Get It) [feat. Gunna & Lil Baby]Young Thug"
    },
    "EuphoriaBTS": {
      "artist": "BTS",
      "song": "Euphoria",
      "rank": "119",
      "streams": "5032951",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "EuphoriaBTS"
    },
    "R.E.MAriana Grande": {
      "artist": "Ariana Grande",
      "song": "R.E.M",
      "rank": "45",
      "streams": "9833151",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "R.E.MAriana Grande"
    },
    "RisikoBonez MC": {
      "artist": "Bonez MC",
      "song": "Risiko",
      "rank": "127",
      "streams": "4811649",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "RisikoBonez MC"
    },
    "goodnight n goAriana Grande": {
      "artist": "Ariana Grande",
      "song": "goodnight n go",
      "rank": "51",
      "streams": "8917678",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "goodnight n goAriana Grande"
    },
    "I'm FineBTS": {
      "artist": "BTS",
      "song": "I'm Fine",
      "rank": "137",
      "streams": "4584909",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "I'm FineBTS"
    },
    "Barbie DreamsNicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Barbie Dreams",
      "rank": "48",
      "streams": "8941896",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Barbie DreamsNicki Minaj"
    },
    "ConnectionOneRepublic": {
      "artist": "OneRepublic",
      "song": "Connection",
      "rank": "164",
      "streams": "4365841",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "ConnectionOneRepublic"
    },
    "pete davidsonAriana Grande": {
      "artist": "Ariana Grande",
      "song": "pete davidson",
      "rank": "52",
      "streams": "8723515",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "pete davidsonAriana Grande"
    },
    "CalypsoLuis Fonsi": {
      "artist": "Luis Fonsi",
      "song": "Calypso",
      "rank": "127",
      "streams": "5218660",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "CalypsoLuis Fonsi"
    },
    "The ReturnLogic": {
      "artist": "Logic",
      "song": "The Return",
      "rank": "158",
      "streams": "4289914",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "The ReturnLogic"
    },
    "AuraOzuna": {
      "artist": "Ozuna",
      "song": "Aura",
      "rank": "160",
      "streams": "4275939",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "AuraOzuna"
    },
    "FAKE LOVEBTS": {
      "artist": "BTS",
      "song": "FAKE LOVE",
      "rank": "14",
      "streams": "16239554",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "FAKE LOVEBTS"
    },
    "Trivia 轉 : SeesawBTS": {
      "artist": "BTS",
      "song": "Trivia 轉 : Seesaw",
      "rank": "172",
      "streams": "4147512",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Trivia 轉 : SeesawBTS"
    },
    "CAROUSELTravis Scott": {
      "artist": "Travis Scott",
      "song": "CAROUSEL",
      "rank": "19",
      "streams": "17773943",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "CAROUSELTravis Scott"
    },
    "Melodien (feat. Juju)Capital Bra": {
      "artist": "Capital Bra",
      "song": "Melodien (feat. Juju)",
      "rank": "71",
      "streams": "7861980",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "Melodien (feat. Juju)Capital Bra"
    },
    "CAN'T SAYTravis Scott": {
      "artist": "Travis Scott",
      "song": "CAN'T SAY",
      "rank": "35",
      "streams": "12513474",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "CAN'T SAYTravis Scott"
    },
    "STOP TRYING TO BE GODTravis Scott": {
      "artist": "Travis Scott",
      "song": "STOP TRYING TO BE GOD",
      "rank": "27",
      "streams": "14263914",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "STOP TRYING TO BE GODTravis Scott"
    },
    "Trivia 起 : Just DanceBTS": {
      "artist": "BTS",
      "song": "Trivia 起 : Just Dance",
      "rank": "182",
      "streams": "3984039",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Trivia 起 : Just DanceBTS"
    },
    "APESHITThe Carters": {
      "artist": "The Carters",
      "song": "APESHIT",
      "rank": "61",
      "streams": "7820787",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "APESHITThe Carters"
    },
    "Serendipity (Full Length Edition)BTS": {
      "artist": "BTS",
      "song": "Serendipity (Full Length Edition)",
      "rank": "191",
      "streams": "3929171",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Serendipity (Full Length Edition)BTS"
    },
    "Never Be the SameCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Never Be the Same",
      "rank": "45",
      "streams": "9268520",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "Never Be the SameCamila Cabello"
    },
    "This Is AmericaChildish Gambino": {
      "artist": "Childish Gambino",
      "song": "This Is America",
      "rank": "8",
      "streams": "21599165",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "This Is AmericaChildish Gambino"
    },
    "Playinwitme (feat. Kehlani)KYLE": {
      "artist": "KYLE",
      "song": "Playinwitme (feat. Kehlani)",
      "rank": "110",
      "streams": "5459679",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Playinwitme (feat. Kehlani)KYLE"
    },
    "Right NowNick Jonas": {
      "artist": "Nick Jonas",
      "song": "Right Now",
      "rank": "199",
      "streams": "3821018",
      "country": "global",
      "week": "2018-08-24--2018-08-31",
      "songArtist": "Right NowNick Jonas"
    },
    "raindrops (an angel cried)Ariana Grande": {
      "artist": "Ariana Grande",
      "song": "raindrops (an angel cried)",
      "rank": "53",
      "streams": "8517134",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "raindrops (an angel cried)Ariana Grande"
    },
    "successfulAriana Grande": {
      "artist": "Ariana Grande",
      "song": "successful",
      "rank": "60",
      "streams": "7806439",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "successfulAriana Grande"
    },
    "the light is coming (feat. Nicki Minaj)Ariana Grande": {
      "artist": "Ariana Grande",
      "song": "the light is coming (feat. Nicki Minaj)",
      "rank": "80",
      "streams": "6619956",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "the light is coming (feat. Nicki Minaj)Ariana Grande"
    },
    "better offAriana Grande": {
      "artist": "Ariana Grande",
      "song": "better off",
      "rank": "68",
      "streams": "7427563",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "better offAriana Grande"
    },
    "blazed (feat. Pharrell Williams)Ariana Grande": {
      "artist": "Ariana Grande",
      "song": "blazed (feat. Pharrell Williams)",
      "rank": "70",
      "streams": "7323300",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "blazed (feat. Pharrell Williams)Ariana Grande"
    },
    "get well soonAriana Grande": {
      "artist": "Ariana Grande",
      "song": "get well soon",
      "rank": "77",
      "streams": "7012183",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "get well soonAriana Grande"
    },
    "borderline (feat. Missy Elliott)Ariana Grande": {
      "artist": "Ariana Grande",
      "song": "borderline (feat. Missy Elliott)",
      "rank": "91",
      "streams": "6455372",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "borderline (feat. Missy Elliott)Ariana Grande"
    },
    "TOOTIMETOOTIMETOOTIMEThe 1975": {
      "artist": "The 1975",
      "song": "TOOTIMETOOTIMETOOTIME",
      "rank": "167",
      "streams": "4262643",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "TOOTIMETOOTIMETOOTIMEThe 1975"
    },
    "DuraDaddy Yankee": {
      "artist": "Daddy Yankee",
      "song": "Dura",
      "rank": "127",
      "streams": "5101895",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "DuraDaddy Yankee"
    },
    "NO BYSTANDERSTravis Scott": {
      "artist": "Travis Scott",
      "song": "NO BYSTANDERS",
      "rank": "28",
      "streams": "14230565",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "NO BYSTANDERSTravis Scott"
    },
    "R.I.P. SCREWTravis Scott": {
      "artist": "Travis Scott",
      "song": "R.I.P. SCREW",
      "rank": "25",
      "streams": "14720921",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "R.I.P. SCREWTravis Scott"
    },
    "RespectAretha Franklin": {
      "artist": "Aretha Franklin",
      "song": "Respect",
      "rank": "185",
      "streams": "4027932",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "RespectAretha Franklin"
    },
    "DDU-DU DDU-DU - KR Ver.BLACKPINK": {
      "artist": "BLACKPINK",
      "song": "DDU-DU DDU-DU - KR Ver.",
      "rank": "107",
      "streams": "6003427",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "DDU-DU DDU-DU - KR Ver.BLACKPINK"
    },
    "If You're Over MeYears & Years": {
      "artist": "Years & Years",
      "song": "If You're Over Me",
      "rank": "188",
      "streams": "4112204",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "If You're Over MeYears & Years"
    },
    "FamiliarLiam Payne": {
      "artist": "Liam Payne",
      "song": "Familiar",
      "rank": "57",
      "streams": "10135185",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "FamiliarLiam Payne"
    },
    "Échame La CulpaLuis Fonsi": {
      "artist": "Luis Fonsi",
      "song": "Échame La Culpa",
      "rank": "13",
      "streams": "16183931",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Échame La CulpaLuis Fonsi"
    },
    "El PréstamoMaluma": {
      "artist": "Maluma",
      "song": "El Préstamo",
      "rank": "134",
      "streams": "4778105",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "El PréstamoMaluma"
    },
    "Duro y SuaveLeslie Grace": {
      "artist": "Leslie Grace",
      "song": "Duro y Suave",
      "rank": "195",
      "streams": "4067674",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Duro y SuaveLeslie Grace"
    },
    "Dior 2001RIN": {
      "artist": "RIN",
      "song": "Dior 2001",
      "rank": "194",
      "streams": "3905724",
      "country": "global",
      "week": "2018-08-17--2018-08-24",
      "songArtist": "Dior 2001RIN"
    },
    "Majesty (with Labrinth & feat. Eminem)Nicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Majesty (with Labrinth & feat. Eminem)",
      "rank": "111",
      "streams": "5633462",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Majesty (with Labrinth & feat. Eminem)Nicki Minaj"
    },
    "5% TINTTravis Scott": {
      "artist": "Travis Scott",
      "song": "5% TINT",
      "rank": "32",
      "streams": "12942391",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "5% TINTTravis Scott"
    },
    "La Cintura (feat. Flo Rida & TINI) - RemixAlvaro Soler": {
      "artist": "Alvaro Soler",
      "song": "La Cintura (feat. Flo Rida & TINI) - Remix",
      "rank": "130",
      "streams": "5043138",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "La Cintura (feat. Flo Rida & TINI) - RemixAlvaro Soler"
    },
    "Chun-LiNicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Chun-Li",
      "rank": "58",
      "streams": "8004520",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Chun-LiNicki Minaj"
    },
    "NC-17Travis Scott": {
      "artist": "Travis Scott",
      "song": "NC-17",
      "rank": "41",
      "streams": "12034748",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "NC-17Travis Scott"
    },
    "WHO? WHAT!Travis Scott": {
      "artist": "Travis Scott",
      "song": "WHO? WHAT!",
      "rank": "46",
      "streams": "11340465",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "WHO? WHAT!Travis Scott"
    },
    "Album of the Year - FreestyleJ. Cole": {
      "artist": "J. Cole",
      "song": "Album of the Year - Freestyle",
      "rank": "145",
      "streams": "4569872",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Album of the Year - FreestyleJ. Cole"
    },
    "HOUSTONFORNICATIONTravis Scott": {
      "artist": "Travis Scott",
      "song": "HOUSTONFORNICATION",
      "rank": "52",
      "streams": "10300311",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "HOUSTONFORNICATIONTravis Scott"
    },
    "Ganja BurnNicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Ganja Burn",
      "rank": "157",
      "streams": "4437818",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Ganja BurnNicki Minaj"
    },
    "ASTROTHUNDERTravis Scott": {
      "artist": "Travis Scott",
      "song": "ASTROTHUNDER",
      "rank": "47",
      "streams": "11169732",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "ASTROTHUNDERTravis Scott"
    },
    "I'll Be ThereJess Glynne": {
      "artist": "Jess Glynne",
      "song": "I'll Be There",
      "rank": "136",
      "streams": "4975175",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "I'll Be ThereJess Glynne"
    },
    "All MineKanye West": {
      "artist": "Kanye West",
      "song": "All Mine",
      "rank": "3",
      "streams": "27716117",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "All MineKanye West"
    },
    "91'sPNL": {
      "artist": "PNL",
      "song": "91's",
      "rank": "172",
      "streams": "4238492",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "91'sPNL"
    },
    "Shake It UpTrippie Redd": {
      "artist": "Trippie Redd",
      "song": "Shake It Up",
      "rank": "173",
      "streams": "4232996",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Shake It UpTrippie Redd"
    },
    "Rich Sex (feat. Lil Wayne)Nicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Rich Sex (feat. Lil Wayne)",
      "rank": "176",
      "streams": "4199291",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Rich Sex (feat. Lil Wayne)Nicki Minaj"
    },
    "SKELETONSTravis Scott": {
      "artist": "Travis Scott",
      "song": "SKELETONS",
      "rank": "43",
      "streams": "11747130",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "SKELETONSTravis Scott"
    },
    "SoberDemi Lovato": {
      "artist": "Demi Lovato",
      "song": "Sober",
      "rank": "95",
      "streams": "6171255",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "SoberDemi Lovato"
    },
    "Missing My IdolsTrippie Redd": {
      "artist": "Trippie Redd",
      "song": "Missing My Idols",
      "rank": "180",
      "streams": "4148322",
      "country": "global",
      "week": "2018-08-10--2018-08-17",
      "songArtist": "Missing My IdolsTrippie Redd"
    },
    "Boo'd UpElla Mai": {
      "artist": "Ella Mai",
      "song": "Boo'd Up",
      "rank": "184",
      "streams": "4036294",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Boo'd UpElla Mai"
    },
    "Mi CamaKarol G": {
      "artist": "Karol G",
      "song": "Mi Cama",
      "rank": "153",
      "streams": "4589975",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Mi CamaKarol G"
    },
    "Summertime MagicChildish Gambino": {
      "artist": "Childish Gambino",
      "song": "Summertime Magic",
      "rank": "191",
      "streams": "3983739",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "Summertime MagicChildish Gambino"
    },
    "Without You (feat. Sandro Cavazza)Avicii": {
      "artist": "Avicii",
      "song": "Without You (feat. Sandro Cavazza)",
      "rank": "26",
      "streams": "12395721",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "Without You (feat. Sandro Cavazza)Avicii"
    },
    "Mad LoveSean Paul": {
      "artist": "Sean Paul",
      "song": "Mad Love",
      "rank": "138",
      "streams": "4740936",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "Mad LoveSean Paul"
    },
    "COFFEE BEANTravis Scott": {
      "artist": "Travis Scott",
      "song": "COFFEE BEAN",
      "rank": "67",
      "streams": "8175977",
      "country": "global",
      "week": "2018-08-03--2018-08-10",
      "songArtist": "COFFEE BEANTravis Scott"
    },
    "One Day (feat. Ryan Tedder)Logic": {
      "artist": "Logic",
      "song": "One Day (feat. Ryan Tedder)",
      "rank": "66",
      "streams": "7421692",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "One Day (feat. Ryan Tedder)Logic"
    },
    "Thru These TearsLANY": {
      "artist": "LANY",
      "song": "Thru These Tears",
      "rank": "179",
      "streams": "3997439",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "Thru These TearsLANY"
    },
    "Déjala Que Vuelva (feat. Manuel Turizo)Piso 21": {
      "artist": "Piso 21",
      "song": "Déjala Que Vuelva (feat. Manuel Turizo)",
      "rank": "130",
      "streams": "4679494",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Déjala Que Vuelva (feat. Manuel Turizo)Piso 21"
    },
    "Audio - with Sia, Diplo & LabrinthSia": {
      "artist": "Sia",
      "song": "Audio - with Sia, Diplo & Labrinth",
      "rank": "119",
      "streams": "5443651",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Audio - with Sia, Diplo & LabrinthSia"
    },
    "JAPANFamous Dex": {
      "artist": "Famous Dex",
      "song": "JAPAN",
      "rank": "96",
      "streams": "5889451",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "JAPANFamous Dex"
    },
    "Sorry Not SorryDemi Lovato": {
      "artist": "Demi Lovato",
      "song": "Sorry Not Sorry",
      "rank": "122",
      "streams": "4168956",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Sorry Not SorryDemi Lovato"
    },
    "AmbienteJ Balvin": {
      "artist": "J Balvin",
      "song": "Ambiente",
      "rank": "109",
      "streams": "5654634",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "AmbienteJ Balvin"
    },
    "CriminalNatti Natasha": {
      "artist": "Natti Natasha",
      "song": "Criminal",
      "rank": "134",
      "streams": "4277352",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "CriminalNatti Natasha"
    },
    "That's What I LikeBruno Mars": {
      "artist": "Bruno Mars",
      "song": "That's What I Like",
      "rank": "172",
      "streams": "3118035",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "That's What I LikeBruno Mars"
    },
    "Don't Stop Believin'Journey": {
      "artist": "Journey",
      "song": "Don't Stop Believin'",
      "rank": "193",
      "streams": "3752576",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Don't Stop Believin'Journey"
    },
    "TELÉFONOAitana": {
      "artist": "Aitana",
      "song": "TELÉFONO",
      "rank": "141",
      "streams": "4436815",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "TELÉFONOAitana"
    },
    "BodyLoud Luxury": {
      "artist": "Loud Luxury",
      "song": "Body",
      "rank": "155",
      "streams": "4562745",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "BodyLoud Luxury"
    },
    "Estamos BienDon Khuma": {
      "artist": "Don Khuma",
      "song": "Estamos Bien",
      "rank": "88",
      "streams": "6269084",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Estamos BienDon Khuma"
    },
    "Big Bank feat. 2 Chainz, Big Sean, Nicki MinajYG": {
      "artist": "YG",
      "song": "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj",
      "rank": "177",
      "streams": "4162724",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Big Bank feat. 2 Chainz, Big Sean, Nicki MinajYG"
    },
    "Síguelo BailandoTropijazz": {
      "artist": "Tropijazz",
      "song": "Síguelo Bailando",
      "rank": "115",
      "streams": "5167593",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "Síguelo BailandoTropijazz"
    },
    "I Might Need SecurityChance the Rapper": {
      "artist": "Chance the Rapper",
      "song": "I Might Need Security",
      "rank": "58",
      "streams": "8221827",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "I Might Need SecurityChance the Rapper"
    },
    "EnemiesLauv": {
      "artist": "Lauv",
      "song": "Enemies",
      "rank": "107",
      "streams": "5489468",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "EnemiesLauv"
    },
    "LieNF": {
      "artist": "NF",
      "song": "Lie",
      "rank": "163",
      "streams": "4401900",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "LieNF"
    },
    "Live It Up - Official Song 2018 FIFA World Cup RussiaNicky Jam": {
      "artist": "Nicky Jam",
      "song": "Live It Up - Official Song 2018 FIFA World Cup Russia",
      "rank": "196",
      "streams": "4199428",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Live It Up - Official Song 2018 FIFA World Cup RussiaNicky Jam"
    },
    "New LightJohn Mayer": {
      "artist": "John Mayer",
      "song": "New Light",
      "rank": "139",
      "streams": "5009478",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "New LightJohn Mayer"
    },
    "Let Me Down SlowlyAlec Benjamin": {
      "artist": "Alec Benjamin",
      "song": "Let Me Down Slowly",
      "rank": "184",
      "streams": "4071714",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "Let Me Down SlowlyAlec Benjamin"
    },
    "EmotionlessDrake": {
      "artist": "Drake",
      "song": "Emotionless",
      "rank": "6",
      "streams": "29680801",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "EmotionlessDrake"
    },
    "SomebodyThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Somebody",
      "rank": "79",
      "streams": "7978667",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "SomebodyThe Chainsmokers"
    },
    "DembowDanny Ocean": {
      "artist": "Danny Ocean",
      "song": "Dembow",
      "rank": "180",
      "streams": "4030146",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "DembowDanny Ocean"
    },
    "CriminalTrío Los Josefinos": {
      "artist": "Trío Los Josefinos",
      "song": "Criminal",
      "rank": "177",
      "streams": "3856488",
      "country": "global",
      "week": "2018-07-27--2018-08-03",
      "songArtist": "CriminalTrío Los Josefinos"
    },
    "Let Me Live (feat. Anne-Marie & Mr Eazi)Rudimental": {
      "artist": "Rudimental",
      "song": "Let Me Live (feat. Anne-Marie & Mr Eazi)",
      "rank": "160",
      "streams": "4459041",
      "country": "global",
      "week": "2018-07-13--2018-07-20",
      "songArtist": "Let Me Live (feat. Anne-Marie & Mr Eazi)Rudimental"
    },
    "Powerglide (feat. Juicy J) - From SR3MMRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Powerglide (feat. Juicy J) - From SR3MM",
      "rank": "56",
      "streams": "9045615",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Powerglide (feat. Juicy J) - From SR3MMRae Sremmurd"
    },
    "More Than You KnowAxwell /\\ Ingrosso": {
      "artist": "Axwell /\\ Ingrosso",
      "song": "More Than You Know",
      "rank": "49",
      "streams": "9202134",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "More Than You KnowAxwell /\\ Ingrosso"
    },
    "Like I DoDavid Guetta": {
      "artist": "David Guetta",
      "song": "Like I Do",
      "rank": "99",
      "streams": "5890600",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "Like I DoDavid Guetta"
    },
    "Mi GenteJ Balvin": {
      "artist": "J Balvin",
      "song": "Mi Gente",
      "rank": "32",
      "streams": "12176209",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Mi GenteJ Balvin"
    },
    "This Is MeKeala Settle": {
      "artist": "Keala Settle",
      "song": "This Is Me",
      "rank": "130",
      "streams": "4598787",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "This Is MeKeala Settle"
    },
    "ElevateDrake": {
      "artist": "Drake",
      "song": "Elevate",
      "rank": "9",
      "streams": "26995718",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "ElevateDrake"
    },
    "NUMBXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "NUMB",
      "rank": "48",
      "streams": "9047162",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "NUMBXXXTENTACION"
    },
    "Bank Account21 Savage": {
      "artist": "21 Savage",
      "song": "Bank Account",
      "rank": "63",
      "streams": "6766245",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Bank Account21 Savage"
    },
    "TATI6ix9ine": {
      "artist": "6ix9ine",
      "song": "TATI",
      "rank": "100",
      "streams": "5917283",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "TATI6ix9ine"
    },
    "Better Not (feat. Wafia)Louis The Child": {
      "artist": "Louis The Child",
      "song": "Better Not (feat. Wafia)",
      "rank": "195",
      "streams": "4001885",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Better Not (feat. Wafia)Louis The Child"
    },
    "ocean eyesBillie Eilish": {
      "artist": "Billie Eilish",
      "song": "ocean eyes",
      "rank": "174",
      "streams": "4141927",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "ocean eyesBillie Eilish"
    },
    "1-800-273-8255Logic": {
      "artist": "Logic",
      "song": "1-800-273-8255",
      "rank": "89",
      "streams": "5887875",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "1-800-273-8255Logic"
    },
    "PabloRvssian": {
      "artist": "Rvssian",
      "song": "Pablo",
      "rank": "122",
      "streams": "5015564",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "PabloRvssian"
    },
    "Can’t Take A JokeDrake": {
      "artist": "Drake",
      "song": "Can’t Take A Joke",
      "rank": "19",
      "streams": "22191046",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Can’t Take A JokeDrake"
    },
    "65th & InglesideChance the Rapper": {
      "artist": "Chance the Rapper",
      "song": "65th & Ingleside",
      "rank": "148",
      "streams": "4499916",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "65th & InglesideChance the Rapper"
    },
    "Love It If We Made ItThe 1975": {
      "artist": "The 1975",
      "song": "Love It If We Made It",
      "rank": "157",
      "streams": "4316286",
      "country": "global",
      "week": "2018-07-20--2018-07-27",
      "songArtist": "Love It If We Made ItThe 1975"
    },
    "Drug AddictsLil Pump": {
      "artist": "Lil Pump",
      "song": "Drug Addicts",
      "rank": "102",
      "streams": "5938164",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "Drug AddictsLil Pump"
    },
    "Leave a Light OnTom Walker": {
      "artist": "Tom Walker",
      "song": "Leave a Light On",
      "rank": "185",
      "streams": "3864189",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "Leave a Light OnTom Walker"
    },
    "EsskeetitLil Pump": {
      "artist": "Lil Pump",
      "song": "Esskeetit",
      "rank": "51",
      "streams": "9300609",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "EsskeetitLil Pump"
    },
    "ParanoidPost Malone": {
      "artist": "Post Malone",
      "song": "Paranoid",
      "rank": "4",
      "streams": "31182644",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "ParanoidPost Malone"
    },
    "SolitaOzuna": {
      "artist": "Ozuna",
      "song": "Solita",
      "rank": "118",
      "streams": "5476103",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "SolitaOzuna"
    },
    "Ao Vivo E A CoresMatheus & Kauan": {
      "artist": "Matheus & Kauan",
      "song": "Ao Vivo E A Cores",
      "rank": "171",
      "streams": "4289412",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Ao Vivo E A CoresMatheus & Kauan"
    },
    "Let Her GoPassenger": {
      "artist": "Passenger",
      "song": "Let Her Go",
      "rank": "199",
      "streams": "2536282",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Let Her GoPassenger"
    },
    "Don’t Matter To MeDrake": {
      "artist": "Drake",
      "song": "Don’t Matter To Me",
      "rank": "2",
      "streams": "43314851",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Don’t Matter To MeDrake"
    },
    "Blue TintDrake": {
      "artist": "Drake",
      "song": "Blue Tint",
      "rank": "34",
      "streams": "15573446",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Blue TintDrake"
    },
    "After DarkDrake": {
      "artist": "Drake",
      "song": "After Dark",
      "rank": "40",
      "streams": "14263999",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "After DarkDrake"
    },
    "SurvivalDrake": {
      "artist": "Drake",
      "song": "Survival",
      "rank": "8",
      "streams": "27089507",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "SurvivalDrake"
    },
    "8 Out Of 10Drake": {
      "artist": "Drake",
      "song": "8 Out Of 10",
      "rank": "12",
      "streams": "25910256",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "8 Out Of 10Drake"
    },
    "Summer GamesDrake": {
      "artist": "Drake",
      "song": "Summer Games",
      "rank": "31",
      "streams": "17119220",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Summer GamesDrake"
    },
    "Talk UpDrake": {
      "artist": "Drake",
      "song": "Talk Up",
      "rank": "18",
      "streams": "23481853",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Talk UpDrake"
    },
    "Like To Be You feat. Julia MichaelsShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Like To Be You feat. Julia Michaels",
      "rank": "86",
      "streams": "6192127",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Like To Be You feat. Julia MichaelsShawn Mendes"
    },
    "That’s How You FeelDrake": {
      "artist": "Drake",
      "song": "That’s How You Feel",
      "rank": "39",
      "streams": "14357593",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "That’s How You FeelDrake"
    },
    "Sandra’s RoseDrake": {
      "artist": "Drake",
      "song": "Sandra’s Rose",
      "rank": "24",
      "streams": "18430122",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Sandra’s RoseDrake"
    },
    "Bigger Than You (feat. Drake & Quavo)2 Chainz": {
      "artist": "2 Chainz",
      "song": "Bigger Than You (feat. Drake & Quavo)",
      "rank": "71",
      "streams": "7351706",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Bigger Than You (feat. Drake & Quavo)2 Chainz"
    },
    "FinesseDrake": {
      "artist": "Drake",
      "song": "Finesse",
      "rank": "38",
      "streams": "14514123",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "FinesseDrake"
    },
    "SimpleFlorida Georgia Line": {
      "artist": "Florida Georgia Line",
      "song": "Simple",
      "rank": "142",
      "streams": "4536140",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "SimpleFlorida Georgia Line"
    },
    "Guatemala - From SwaecationRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Guatemala - From Swaecation",
      "rank": "123",
      "streams": "5418460",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Guatemala - From SwaecationRae Sremmurd"
    },
    "Für Euch alle (feat. Samra & Capital Bra)Bushido": {
      "artist": "Bushido",
      "song": "Für Euch alle (feat. Samra & Capital Bra)",
      "rank": "107",
      "streams": "5757525",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "Für Euch alle (feat. Samra & Capital Bra)Bushido"
    },
    "JadedDrake": {
      "artist": "Drake",
      "song": "Jaded",
      "rank": "35",
      "streams": "15159136",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "JadedDrake"
    },
    "Jump (with Trippie Redd)Julia Michaels": {
      "artist": "Julia Michaels",
      "song": "Jump (with Trippie Redd)",
      "rank": "197",
      "streams": "3947165",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Jump (with Trippie Redd)Julia Michaels"
    },
    "Back To YouSelena Gomez": {
      "artist": "Selena Gomez",
      "song": "Back To You",
      "rank": "13",
      "streams": "16545713",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Back To YouSelena Gomez"
    },
    "Start Again (feat. Logic)OneRepublic": {
      "artist": "OneRepublic",
      "song": "Start Again (feat. Logic)",
      "rank": "181",
      "streams": "4195945",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Start Again (feat. Logic)OneRepublic"
    },
    "Estamos BienStreet Rappers": {
      "artist": "Street Rappers",
      "song": "Estamos Bien",
      "rank": "97",
      "streams": "6082187",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "Estamos BienStreet Rappers"
    },
    "PeakDrake": {
      "artist": "Drake",
      "song": "Peak",
      "rank": "36",
      "streams": "15117184",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "PeakDrake"
    },
    "WIFI LITFuture": {
      "artist": "Future",
      "song": "WIFI LIT",
      "rank": "129",
      "streams": "5117516",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "WIFI LITFuture"
    },
    "Is There MoreDrake": {
      "artist": "Drake",
      "song": "Is There More",
      "rank": "37",
      "streams": "14967758",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Is There MoreDrake"
    },
    "SoulMateJustin Timberlake": {
      "artist": "Justin Timberlake",
      "song": "SoulMate",
      "rank": "147",
      "streams": "4694515",
      "country": "global",
      "week": "2018-07-06--2018-07-13",
      "songArtist": "SoulMateJustin Timberlake"
    },
    "Ratchet Happy BirthdayDrake": {
      "artist": "Drake",
      "song": "Ratchet Happy Birthday",
      "rank": "46",
      "streams": "12370043",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Ratchet Happy BirthdayDrake"
    },
    "Final FantasyDrake": {
      "artist": "Drake",
      "song": "Final Fantasy",
      "rank": "55",
      "streams": "10460366",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "Final FantasyDrake"
    },
    "Youth feat. KhalidShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Youth feat. Khalid",
      "rank": "21",
      "streams": "13833047",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Youth feat. KhalidShawn Mendes"
    },
    "March 14Drake": {
      "artist": "Drake",
      "song": "March 14",
      "rank": "54",
      "streams": "10659186",
      "country": "global",
      "week": "2018-06-29--2018-07-06",
      "songArtist": "March 14Drake"
    },
    "I Wanna Know (feat. Bea Miller)NOTD": {
      "artist": "NOTD",
      "song": "I Wanna Know (feat. Bea Miller)",
      "rank": "155",
      "streams": "4410321",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "I Wanna Know (feat. Bea Miller)NOTD"
    },
    "YikesKanye West": {
      "artist": "Kanye West",
      "song": "Yikes",
      "rank": "5",
      "streams": "23601268",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "YikesKanye West"
    },
    "Finesse (Remix) [feat. Cardi B]Bruno Mars": {
      "artist": "Bruno Mars",
      "song": "Finesse (Remix) [feat. Cardi B]",
      "rank": "6",
      "streams": "19454391",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "Finesse (Remix) [feat. Cardi B]Bruno Mars"
    },
    "Spoil My Night (feat. Swae Lee)Post Malone": {
      "artist": "Post Malone",
      "song": "Spoil My Night (feat. Swae Lee)",
      "rank": "9",
      "streams": "25175356",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Spoil My Night (feat. Swae Lee)Post Malone"
    },
    "StayPost Malone": {
      "artist": "Post Malone",
      "song": "Stay",
      "rank": "11",
      "streams": "23585361",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "StayPost Malone"
    },
    "Girls (feat. Cardi B, Bebe Rexha & Charli XCX)Rita Ora": {
      "artist": "Rita Ora",
      "song": "Girls (feat. Cardi B, Bebe Rexha & Charli XCX)",
      "rank": "52",
      "streams": "8480999",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Girls (feat. Cardi B, Bebe Rexha & Charli XCX)Rita Ora"
    },
    "Despacito - RemixLuis Fonsi": {
      "artist": "Luis Fonsi",
      "song": "Despacito - Remix",
      "rank": "17",
      "streams": "17440248",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Despacito - RemixLuis Fonsi"
    },
    "Humility (feat. George Benson)Gorillaz": {
      "artist": "Gorillaz",
      "song": "Humility (feat. George Benson)",
      "rank": "187",
      "streams": "4115165",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Humility (feat. George Benson)Gorillaz"
    },
    "RevengeXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Revenge",
      "rank": "63",
      "streams": "7415782",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "RevengeXXXTENTACION"
    },
    "CorazónMaluma": {
      "artist": "Maluma",
      "song": "Corazón",
      "rank": "107",
      "streams": "5056434",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "CorazónMaluma"
    },
    "Roll In Peace (feat. XXXTENTACION)Kodak Black": {
      "artist": "Kodak Black",
      "song": "Roll In Peace (feat. XXXTENTACION)",
      "rank": "179",
      "streams": "3255929",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "Roll In Peace (feat. XXXTENTACION)Kodak Black"
    },
    "Nena Maldicion (feat. Lenny Tavarez)Paulo Londra": {
      "artist": "Paulo Londra",
      "song": "Nena Maldicion (feat. Lenny Tavarez)",
      "rank": "191",
      "streams": "4081945",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Nena Maldicion (feat. Lenny Tavarez)Paulo Londra"
    },
    "Bodak YellowCardi B": {
      "artist": "Cardi B",
      "song": "Bodak Yellow",
      "rank": "138",
      "streams": "3720528",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Bodak YellowCardi B"
    },
    "DDU-DU DDU-DUBLACKPINK": {
      "artist": "BLACKPINK",
      "song": "DDU-DU DDU-DU",
      "rank": "47",
      "streams": "9349579",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "DDU-DU DDU-DUBLACKPINK"
    },
    "RebornKIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "Reborn",
      "rank": "21",
      "streams": "14166009",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "RebornKIDS SEE GHOSTS"
    },
    "Carry OnXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Carry On",
      "rank": "92",
      "streams": "5903372",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Carry OnXXXTENTACION"
    },
    "Wake Me Up - Radio EditAvicii": {
      "artist": "Avicii",
      "song": "Wake Me Up - Radio Edit",
      "rank": "13",
      "streams": "20549219",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Wake Me Up - Radio EditAvicii"
    },
    "Done For Me (feat. Kehlani)Charlie Puth": {
      "artist": "Charlie Puth",
      "song": "Done For Me (feat. Kehlani)",
      "rank": "120",
      "streams": "5231552",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Done For Me (feat. Kehlani)Charlie Puth"
    },
    "Say Amen (Saturday Night)Panic! At The Disco": {
      "artist": "Panic! At The Disco",
      "song": "Say Amen (Saturday Night)",
      "rank": "109",
      "streams": "5428071",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "Say Amen (Saturday Night)Panic! At The Disco"
    },
    "Hey Look Ma, I Made ItPanic! At The Disco": {
      "artist": "Panic! At The Disco",
      "song": "Hey Look Ma, I Made It",
      "rank": "145",
      "streams": "4551516",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "Hey Look Ma, I Made ItPanic! At The Disco"
    },
    "Growing PainsAlessia Cara": {
      "artist": "Alessia Cara",
      "song": "Growing Pains",
      "rank": "112",
      "streams": "5586774",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Growing PainsAlessia Cara"
    },
    "Rich & SadPost Malone": {
      "artist": "Post Malone",
      "song": "Rich & Sad",
      "rank": "10",
      "streams": "24285634",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Rich & SadPost Malone"
    },
    "Champion (feat. Travis Scott)NAV": {
      "artist": "NAV",
      "song": "Champion (feat. Travis Scott)",
      "rank": "158",
      "streams": "4576062",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Champion (feat. Travis Scott)NAV"
    },
    "Roaring 20sPanic! At The Disco": {
      "artist": "Panic! At The Disco",
      "song": "Roaring 20s",
      "rank": "163",
      "streams": "4306040",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "Roaring 20sPanic! At The Disco"
    },
    "Depression & ObsessionXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Depression & Obsession",
      "rank": "75",
      "streams": "6365715",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Depression & ObsessionXXXTENTACION"
    },
    "1950King Princess": {
      "artist": "King Princess",
      "song": "1950",
      "rank": "152",
      "streams": "4551661",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "1950King Princess"
    },
    "I Don't Wanna Do This AnymoreXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "I Don't Wanna Do This Anymore",
      "rank": "165",
      "streams": "4260598",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "I Don't Wanna Do This AnymoreXXXTENTACION"
    },
    "Dancing's Not A CrimePanic! At The Disco": {
      "artist": "Panic! At The Disco",
      "song": "Dancing's Not A Crime",
      "rank": "172",
      "streams": "4166609",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "Dancing's Not A CrimePanic! At The Disco"
    },
    "BetrayedLil Xan": {
      "artist": "Lil Xan",
      "song": "Betrayed",
      "rank": "124",
      "streams": "4759819",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "BetrayedLil Xan"
    },
    "DelicateTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Delicate",
      "rank": "183",
      "streams": "4023142",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "DelicateTaylor Swift"
    },
    "Let MeZAYN": {
      "artist": "ZAYN",
      "song": "Let Me",
      "rank": "28",
      "streams": "12786831",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Let MeZAYN"
    },
    "Shoota (feat. Lil Uzi Vert)Playboi Carti": {
      "artist": "Playboi Carti",
      "song": "Shoota (feat. Lil Uzi Vert)",
      "rank": "86",
      "streams": "6484798",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Shoota (feat. Lil Uzi Vert)Playboi Carti"
    },
    "LegendsJuice WRLD": {
      "artist": "Juice WRLD",
      "song": "Legends",
      "rank": "186",
      "streams": "4017628",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "LegendsJuice WRLD"
    },
    "King's Dead (with Kendrick Lamar, Future & James Blake)Jay Rock": {
      "artist": "Jay Rock",
      "song": "King's Dead (with Kendrick Lamar, Future & James Blake)",
      "rank": "131",
      "streams": "4936937",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "King's Dead (with Kendrick Lamar, Future & James Blake)Jay Rock"
    },
    "PICK IT UP (feat. A$AP Rocky)Famous Dex": {
      "artist": "Famous Dex",
      "song": "PICK IT UP (feat. A$AP Rocky)",
      "rank": "161",
      "streams": "3879723",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "PICK IT UP (feat. A$AP Rocky)Famous Dex"
    },
    "DowntownAnitta": {
      "artist": "Anitta",
      "song": "Downtown",
      "rank": "111",
      "streams": "5036588",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "DowntownAnitta"
    },
    "KODJ. Cole": {
      "artist": "J. Cole",
      "song": "KOD",
      "rank": "6",
      "streams": "25826342",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "KODJ. Cole"
    },
    "NervousShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Nervous",
      "rank": "30",
      "streams": "11870642",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "NervousShawn Mendes"
    },
    "A l'AmmoniaquePNL": {
      "artist": "PNL",
      "song": "A l'Ammoniaque",
      "rank": "198",
      "streams": "3885608",
      "country": "global",
      "week": "2018-06-22--2018-06-29",
      "songArtist": "A l'AmmoniaquePNL"
    },
    "Ghost TownKanye West": {
      "artist": "Kanye West",
      "song": "Ghost Town",
      "rank": "6",
      "streams": "23175643",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Ghost TownKanye West"
    },
    "4th DimensionKIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "4th Dimension",
      "rank": "40",
      "streams": "10673015",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "4th DimensionKIDS SEE GHOSTS"
    },
    "ALONE, PART 3XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "ALONE, PART 3",
      "rank": "89",
      "streams": "6379554",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "ALONE, PART 3XXXTENTACION"
    },
    "Forever YoungBLACKPINK": {
      "artist": "BLACKPINK",
      "song": "Forever Young",
      "rank": "138",
      "streams": "4593934",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Forever YoungBLACKPINK"
    },
    "Welcome to the Party (with French Montana & Lil Pump, feat. Zhavia Ward) - from Deadpool 2Diplo": {
      "artist": "Diplo",
      "song": "Welcome to the Party (with French Montana & Lil Pump, feat. Zhavia Ward) - from Deadpool 2",
      "rank": "123",
      "streams": "5372588",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Welcome to the Party (with French Montana & Lil Pump, feat. Zhavia Ward) - from Deadpool 2Diplo"
    },
    "Cops Shot The KidNas": {
      "artist": "Nas",
      "song": "Cops Shot The Kid",
      "rank": "158",
      "streams": "4353563",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Cops Shot The KidNas"
    },
    "Feel The LoveKIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "Feel The Love",
      "rank": "39",
      "streams": "10791284",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Feel The LoveKIDS SEE GHOSTS"
    },
    "infinity (888) - feat. Joey Bada$$XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "infinity (888) - feat. Joey Bada$$",
      "rank": "61",
      "streams": "8039353",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "infinity (888) - feat. Joey Bada$$XXXTENTACION"
    },
    "Valentine5 Seconds of Summer": {
      "artist": "5 Seconds of Summer",
      "song": "Valentine",
      "rank": "173",
      "streams": "4169324",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Valentine5 Seconds of Summer"
    },
    "Watch (feat. Lil Uzi Vert & Kanye West)Travis Scott": {
      "artist": "Travis Scott",
      "song": "Watch (feat. Lil Uzi Vert & Kanye West)",
      "rank": "27",
      "streams": "13476602",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Watch (feat. Lil Uzi Vert & Kanye West)Travis Scott"
    },
    "Over NowPost Malone": {
      "artist": "Post Malone",
      "song": "Over Now",
      "rank": "13",
      "streams": "22173263",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Over NowPost Malone"
    },
    "Dusk Till Dawn - Radio EditZAYN": {
      "artist": "ZAYN",
      "song": "Dusk Till Dawn - Radio Edit",
      "rank": "7",
      "streams": "21296996",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "Dusk Till Dawn - Radio EditZAYN"
    },
    "Save MeXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Save Me",
      "rank": "94",
      "streams": "5817192",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Save MeXXXTENTACION"
    },
    "92 ExplorerPost Malone": {
      "artist": "Post Malone",
      "song": "92 Explorer",
      "rank": "23",
      "streams": "17856059",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "92 ExplorerPost Malone"
    },
    "EverydayLogic": {
      "artist": "Logic",
      "song": "Everyday",
      "rank": "34",
      "streams": "11350020",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "EverydayLogic"
    },
    "Not For RadioNas": {
      "artist": "Nas",
      "song": "Not For Radio",
      "rank": "200",
      "streams": "3912138",
      "country": "global",
      "week": "2018-06-15--2018-06-22",
      "songArtist": "Not For RadioNas"
    },
    "FireKIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "Fire",
      "rank": "51",
      "streams": "8925211",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "FireKIDS SEE GHOSTS"
    },
    "Freeee (Ghost Town Pt. 2)KIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "Freeee (Ghost Town Pt. 2)",
      "rank": "52",
      "streams": "8762738",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Freeee (Ghost Town Pt. 2)KIDS SEE GHOSTS"
    },
    "Kids See GhostsKIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "Kids See Ghosts",
      "rank": "59",
      "streams": "7882877",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Kids See GhostsKIDS SEE GHOSTS"
    },
    "Cudi MontageKIDS SEE GHOSTS": {
      "artist": "KIDS SEE GHOSTS",
      "song": "Cudi Montage",
      "rank": "65",
      "streams": "7762996",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Cudi MontageKIDS SEE GHOSTS"
    },
    "Violent CrimesKanye West": {
      "artist": "Kanye West",
      "song": "Violent Crimes",
      "rank": "20",
      "streams": "16417107",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Violent CrimesKanye West"
    },
    "Wouldn't LeaveKanye West": {
      "artist": "Kanye West",
      "song": "Wouldn't Leave",
      "rank": "16",
      "streams": "17762451",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Wouldn't LeaveKanye West"
    },
    "I Thought About Killing YouKanye West": {
      "artist": "Kanye West",
      "song": "I Thought About Killing You",
      "rank": "18",
      "streams": "16851806",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "I Thought About Killing YouKanye West"
    },
    "Berlin lebtCapital Bra": {
      "artist": "Capital Bra",
      "song": "Berlin lebt",
      "rank": "117",
      "streams": "5338012",
      "country": "global",
      "week": "2018-06-08--2018-06-15",
      "songArtist": "Berlin lebtCapital Bra"
    },
    "No MistakesKanye West": {
      "artist": "Kanye West",
      "song": "No Mistakes",
      "rank": "23",
      "streams": "15447339",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "No MistakesKanye West"
    },
    "Lost In JapanShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Lost In Japan",
      "rank": "23",
      "streams": "13124790",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "Lost In JapanShawn Mendes"
    },
    "Say SomethingJustin Timberlake": {
      "artist": "Justin Timberlake",
      "song": "Say Something",
      "rank": "45",
      "streams": "10030315",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Say SomethingJustin Timberlake"
    },
    "Sangria WinePharrell Williams": {
      "artist": "Pharrell Williams",
      "song": "Sangria Wine",
      "rank": "51",
      "streams": "8822514",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Sangria WinePharrell Williams"
    },
    "AhoraJ Balvin": {
      "artist": "J Balvin",
      "song": "Ahora",
      "rank": "180",
      "streams": "3971392",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "AhoraJ Balvin"
    },
    "Pray For Me (with Kendrick Lamar)The Weeknd": {
      "artist": "The Weeknd",
      "song": "Pray For Me (with Kendrick Lamar)",
      "rank": "6",
      "streams": "19508953",
      "country": "global",
      "week": "2018-02-02--2018-02-09",
      "songArtist": "Pray For Me (with Kendrick Lamar)The Weeknd"
    },
    "Rewrite The StarsZac Efron": {
      "artist": "Zac Efron",
      "song": "Rewrite The Stars",
      "rank": "126",
      "streams": "4693532",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Rewrite The StarsZac Efron"
    },
    "Be CarefulCardi B": {
      "artist": "Cardi B",
      "song": "Be Careful",
      "rank": "89",
      "streams": "6053194",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Be CarefulCardi B"
    },
    "The Night We MetLord Huron": {
      "artist": "Lord Huron",
      "song": "The Night We Met",
      "rank": "181",
      "streams": "3467646",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "The Night We MetLord Huron"
    },
    "There's Nothing Holdin' Me BackShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "There's Nothing Holdin' Me Back",
      "rank": "21",
      "streams": "14752372",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "There's Nothing Holdin' Me BackShawn Mendes"
    },
    "SensualidadBad Bunny": {
      "artist": "Bad Bunny",
      "song": "Sensualidad",
      "rank": "45",
      "streams": "9221392",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "SensualidadBad Bunny"
    },
    "Me RehúsoDanny Ocean": {
      "artist": "Danny Ocean",
      "song": "Me Rehúso",
      "rank": "152",
      "streams": "3634707",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Me RehúsoDanny Ocean"
    },
    "Stir FryMigos": {
      "artist": "Migos",
      "song": "Stir Fry",
      "rank": "150",
      "streams": "4215012",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Stir FryMigos"
    },
    "AttentionCharlie Puth": {
      "artist": "Charlie Puth",
      "song": "Attention",
      "rank": "78",
      "streams": "6769441",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "AttentionCharlie Puth"
    },
    "Same Bitches (feat. G-Eazy & YG)Post Malone": {
      "artist": "Post Malone",
      "song": "Same Bitches (feat. G-Eazy & YG)",
      "rank": "18",
      "streams": "19969213",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Same Bitches (feat. G-Eazy & YG)Post Malone"
    },
    "Answerphone (feat. Yxng Bane)Banx & Ranx": {
      "artist": "Banx & Ranx",
      "song": "Answerphone (feat. Yxng Bane)",
      "rank": "152",
      "streams": "5004308",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Answerphone (feat. Yxng Bane)Banx & Ranx"
    },
    "AmorfodaBad Bunny": {
      "artist": "Bad Bunny",
      "song": "Amorfoda",
      "rank": "18",
      "streams": "14639577",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "AmorfodaBad Bunny"
    },
    "BellaWolfine": {
      "artist": "Wolfine",
      "song": "Bella",
      "rank": "174",
      "streams": "4429263",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "BellaWolfine"
    },
    "Zack And CodeinePost Malone": {
      "artist": "Post Malone",
      "song": "Zack And Codeine",
      "rank": "16",
      "streams": "21279106",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Zack And CodeinePost Malone"
    },
    "Give Yourself A TryThe 1975": {
      "artist": "The 1975",
      "song": "Give Yourself A Try",
      "rank": "113",
      "streams": "5439701",
      "country": "global",
      "week": "2018-06-01--2018-06-08",
      "songArtist": "Give Yourself A TryThe 1975"
    },
    "One Night StandCapital Bra": {
      "artist": "Capital Bra",
      "song": "One Night Stand",
      "rank": "87",
      "streams": "6127224",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "One Night StandCapital Bra"
    },
    "El Farsante - RemixOzuna": {
      "artist": "Ozuna",
      "song": "El Farsante - Remix",
      "rank": "179",
      "streams": "4014642",
      "country": "global",
      "week": "2018-02-02--2018-02-09",
      "songArtist": "El Farsante - RemixOzuna"
    },
    "Where Were You In The Morning?Shawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Where Were You In The Morning?",
      "rank": "126",
      "streams": "5294083",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Where Were You In The Morning?Shawn Mendes"
    },
    "Lonely Together (feat. Rita Ora)Avicii": {
      "artist": "Avicii",
      "song": "Lonely Together (feat. Rita Ora)",
      "rank": "49",
      "streams": "8727428",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "Lonely Together (feat. Rita Ora)Avicii"
    },
    "EntertainerZAYN": {
      "artist": "ZAYN",
      "song": "Entertainer",
      "rank": "137",
      "streams": "5019689",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "EntertainerZAYN"
    },
    "Takin' ShotsPost Malone": {
      "artist": "Post Malone",
      "song": "Takin' Shots",
      "rank": "19",
      "streams": "19954804",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Takin' ShotsPost Malone"
    },
    "I Miss You (feat. Julia Michaels)Clean Bandit": {
      "artist": "Clean Bandit",
      "song": "I Miss You (feat. Julia Michaels)",
      "rank": "74",
      "streams": "6543306",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "I Miss You (feat. Julia Michaels)Clean Bandit"
    },
    "To My Love - Tainy RemixBomba Estéreo": {
      "artist": "Bomba Estéreo",
      "song": "To My Love - Tainy Remix",
      "rank": "163",
      "streams": "4277529",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "To My Love - Tainy RemixBomba Estéreo"
    },
    "Let Me Go (with Alesso, Florida Georgia Line & watt)Hailee Steinfeld": {
      "artist": "Hailee Steinfeld",
      "song": "Let Me Go (with Alesso, Florida Georgia Line & watt)",
      "rank": "82",
      "streams": "5965203",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "Let Me Go (with Alesso, Florida Georgia Line & watt)Hailee Steinfeld"
    },
    "RedboneChildish Gambino": {
      "artist": "Childish Gambino",
      "song": "Redbone",
      "rank": "121",
      "streams": "3870641",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "RedboneChildish Gambino"
    },
    "EL BAÑOEnrique Iglesias": {
      "artist": "Enrique Iglesias",
      "song": "EL BAÑO",
      "rank": "51",
      "streams": "8933955",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "EL BAÑOEnrique Iglesias"
    },
    "A$AP Forever REMIXA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "A$AP Forever REMIX",
      "rank": "88",
      "streams": "6099486",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "A$AP Forever REMIXA$AP Rocky"
    },
    "Fallin' All In YouShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Fallin' All In You",
      "rank": "96",
      "streams": "5941368",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Fallin' All In YouShawn Mendes"
    },
    "If You Know You KnowPusha T": {
      "artist": "Pusha T",
      "song": "If You Know You Know",
      "rank": "116",
      "streams": "5513542",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "If You Know You KnowPusha T"
    },
    "Fukk SleepA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Fukk Sleep",
      "rank": "120",
      "streams": "5486769",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Fukk SleepA$AP Rocky"
    },
    "Because I Had YouShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Because I Had You",
      "rank": "133",
      "streams": "5053778",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Because I Had YouShawn Mendes"
    },
    "MutualShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Mutual",
      "rank": "135",
      "streams": "5053420",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "MutualShawn Mendes"
    },
    "Particular TasteShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Particular Taste",
      "rank": "138",
      "streams": "5012586",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Particular TasteShawn Mendes"
    },
    "WhyShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Why",
      "rank": "143",
      "streams": "4901095",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "WhyShawn Mendes"
    },
    "Perfectly WrongShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Perfectly Wrong",
      "rank": "150",
      "streams": "4799951",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Perfectly WrongShawn Mendes"
    },
    "Airplane pt.2BTS": {
      "artist": "BTS",
      "song": "Airplane pt.2",
      "rank": "82",
      "streams": "6348328",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Airplane pt.2BTS"
    },
    "QueenShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Queen",
      "rank": "168",
      "streams": "4586807",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "QueenShawn Mendes"
    },
    "What Would Meek Do?Pusha T": {
      "artist": "Pusha T",
      "song": "What Would Meek Do?",
      "rank": "170",
      "streams": "4564060",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "What Would Meek Do?Pusha T"
    },
    "Tony ToneA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Tony Tone",
      "rank": "172",
      "streams": "4541260",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Tony ToneA$AP Rocky"
    },
    "Buck ShotsA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Buck Shots",
      "rank": "176",
      "streams": "4479406",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Buck ShotsA$AP Rocky"
    },
    "The Truth UntoldBTS": {
      "artist": "BTS",
      "song": "The Truth Untold",
      "rank": "60",
      "streams": "7777219",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "The Truth UntoldBTS"
    },
    "Genius - with Sia, Diplo & LabrinthSia": {
      "artist": "Sia",
      "song": "Genius - with Sia, Diplo & Labrinth",
      "rank": "66",
      "streams": "7864103",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Genius - with Sia, Diplo & LabrinthSia"
    },
    "Distorted RecordsA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Distorted Records",
      "rank": "183",
      "streams": "4381163",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "Distorted RecordsA$AP Rocky"
    },
    "AnpanmanBTS": {
      "artist": "BTS",
      "song": "Anpanman",
      "rank": "107",
      "streams": "5652913",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "AnpanmanBTS"
    },
    "When You're ReadyShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "When You're Ready",
      "rank": "195",
      "streams": "4203767",
      "country": "global",
      "week": "2018-05-25--2018-06-01",
      "songArtist": "When You're ReadyShawn Mendes"
    },
    "BreatheJax Jones": {
      "artist": "Jax Jones",
      "song": "Breathe",
      "rank": "182",
      "streams": "3970105",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "BreatheJax Jones"
    },
    "Youth (feat. Khalid)Shawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Youth (feat. Khalid)",
      "rank": "28",
      "streams": "13442640",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Youth (feat. Khalid)Shawn Mendes"
    },
    "ParadiseBTS": {
      "artist": "BTS",
      "song": "Paradise",
      "rank": "114",
      "streams": "5560683",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "ParadiseBTS"
    },
    "Magic ShopBTS": {
      "artist": "BTS",
      "song": "Magic Shop",
      "rank": "117",
      "streams": "5487460",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Magic ShopBTS"
    },
    "Love MazeBTS": {
      "artist": "BTS",
      "song": "Love Maze",
      "rank": "119",
      "streams": "5462723",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Love MazeBTS"
    },
    "134340BTS": {
      "artist": "BTS",
      "song": "134340",
      "rank": "124",
      "streams": "5367758",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "134340BTS"
    },
    "Intro: SingularityBTS": {
      "artist": "BTS",
      "song": "Intro: Singularity",
      "rank": "131",
      "streams": "5084486",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Intro: SingularityBTS"
    },
    "OthersidePost Malone": {
      "artist": "Post Malone",
      "song": "Otherside",
      "rank": "25",
      "streams": "17392639",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "OthersidePost Malone"
    },
    "So WhatBTS": {
      "artist": "BTS",
      "song": "So What",
      "rank": "137",
      "streams": "4917683",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "So WhatBTS"
    },
    "Blame It On MePost Malone": {
      "artist": "Post Malone",
      "song": "Blame It On Me",
      "rank": "27",
      "streams": "16190661",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Blame It On MePost Malone"
    },
    "Outro: TearBTS": {
      "artist": "BTS",
      "song": "Outro: Tear",
      "rank": "170",
      "streams": "4360971",
      "country": "global",
      "week": "2018-05-18--2018-05-25",
      "songArtist": "Outro: TearBTS"
    },
    "Sugar WraithPost Malone": {
      "artist": "Post Malone",
      "song": "Sugar Wraith",
      "rank": "33",
      "streams": "13978538",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Sugar WraithPost Malone"
    },
    "1942G-Eazy": {
      "artist": "G-Eazy",
      "song": "1942",
      "rank": "108",
      "streams": "5645775",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "1942G-Eazy"
    },
    "How LongCharlie Puth": {
      "artist": "Charlie Puth",
      "song": "How Long",
      "rank": "45",
      "streams": "9818878",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "How LongCharlie Puth"
    },
    "No Hay Nadie MásSebastian Yatra": {
      "artist": "Sebastian Yatra",
      "song": "No Hay Nadie Más",
      "rank": "199",
      "streams": "3812830",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "No Hay Nadie MásSebastian Yatra"
    },
    "Him & I (with Halsey)G-Eazy": {
      "artist": "G-Eazy",
      "song": "Him & I (with Halsey)",
      "rank": "10",
      "streams": "18372506",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Him & I (with Halsey)G-Eazy"
    },
    "AnywhereRita Ora": {
      "artist": "Rita Ora",
      "song": "Anywhere",
      "rank": "130",
      "streams": "4350724",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "AnywhereRita Ora"
    },
    "Red Roses (feat. Landon Cube)Lil Skies": {
      "artist": "Lil Skies",
      "song": "Red Roses (feat. Landon Cube)",
      "rank": "198",
      "streams": "3636000",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "Red Roses (feat. Landon Cube)Lil Skies"
    },
    "Drink AboutSeeb": {
      "artist": "Seeb",
      "song": "Drink About",
      "rank": "151",
      "streams": "5025772",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Drink AboutSeeb"
    },
    "Four Out Of FiveArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "Four Out Of Five",
      "rank": "55",
      "streams": "8195898",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Four Out Of FiveArctic Monkeys"
    },
    "Star TreatmentArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "Star Treatment",
      "rank": "74",
      "streams": "6975933",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Star TreatmentArctic Monkeys"
    },
    "One Point PerspectiveArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "One Point Perspective",
      "rank": "91",
      "streams": "6301161",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "One Point PerspectiveArctic Monkeys"
    },
    "Tranquility Base Hotel & CasinoArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "Tranquility Base Hotel & Casino",
      "rank": "103",
      "streams": "5904665",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Tranquility Base Hotel & CasinoArctic Monkeys"
    },
    "American SportsArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "American Sports",
      "rank": "128",
      "streams": "5238316",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "American SportsArctic Monkeys"
    },
    "Kevin’s HeartJ. Cole": {
      "artist": "J. Cole",
      "song": "Kevin’s Heart",
      "rank": "16",
      "streams": "19155793",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Kevin’s HeartJ. Cole"
    },
    "ToyNetta": {
      "artist": "Netta",
      "song": "Toy",
      "rank": "138",
      "streams": "5017746",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "ToyNetta"
    },
    "Golden TrunksArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "Golden Trunks",
      "rank": "147",
      "streams": "4865399",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Golden TrunksArctic Monkeys"
    },
    "ATMJ. Cole": {
      "artist": "J. Cole",
      "song": "ATM",
      "rank": "12",
      "streams": "20927783",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "ATMJ. Cole"
    },
    "The World's First Ever Monster Truck Front FlipArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "The World's First Ever Monster Truck Front Flip",
      "rank": "169",
      "streams": "4442120",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "The World's First Ever Monster Truck Front FlipArctic Monkeys"
    },
    "FuegoEleni Foureira": {
      "artist": "Eleni Foureira",
      "song": "Fuego",
      "rank": "177",
      "streams": "4250022",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "FuegoEleni Foureira"
    },
    "EsperándoteManuel Turizo": {
      "artist": "Manuel Turizo",
      "song": "Esperándote",
      "rank": "200",
      "streams": "3749948",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "EsperándoteManuel Turizo"
    },
    "Levels - Radio EditAvicii": {
      "artist": "Avicii",
      "song": "Levels - Radio Edit",
      "rank": "25",
      "streams": "16265970",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Levels - Radio EditAvicii"
    },
    "Clout (feat. 21 Savage)Ty Dolla $ign": {
      "artist": "Ty Dolla $ign",
      "song": "Clout (feat. 21 Savage)",
      "rank": "180",
      "streams": "4203727",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Clout (feat. 21 Savage)Ty Dolla $ign"
    },
    "BarkingRamz": {
      "artist": "Ramz",
      "song": "Barking",
      "rank": "178",
      "streams": "4062192",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "BarkingRamz"
    },
    "Motiv8J. Cole": {
      "artist": "J. Cole",
      "song": "Motiv8",
      "rank": "17",
      "streams": "18991751",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Motiv8J. Cole"
    },
    "Sick BoyThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Sick Boy",
      "rank": "15",
      "streams": "14505810",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Sick BoyThe Chainsmokers"
    },
    "For You (Fifty Shades Freed) (& Rita Ora)Liam Payne": {
      "artist": "Liam Payne",
      "song": "For You (Fifty Shades Freed) (& Rita Ora)",
      "rank": "58",
      "streams": "7716698",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "For You (Fifty Shades Freed) (& Rita Ora)Liam Payne"
    },
    "Jettski Grizzley (feat. Lil Pump)Tee Grizzley": {
      "artist": "Tee Grizzley",
      "song": "Jettski Grizzley (feat. Lil Pump)",
      "rank": "194",
      "streams": "4067764",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Jettski Grizzley (feat. Lil Pump)Tee Grizzley"
    },
    "NeymarCapital Bra": {
      "artist": "Capital Bra",
      "song": "Neymar",
      "rank": "122",
      "streams": "5484425",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "NeymarCapital Bra"
    },
    "Science FictionArctic Monkeys": {
      "artist": "Arctic Monkeys",
      "song": "Science Fiction",
      "rank": "197",
      "streams": "4050311",
      "country": "global",
      "week": "2018-05-11--2018-05-18",
      "songArtist": "Science FictionArctic Monkeys"
    },
    "You Can CryMarshmello": {
      "artist": "Marshmello",
      "song": "You Can Cry",
      "rank": "150",
      "streams": "4790339",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "You Can CryMarshmello"
    },
    "Peace & LoveCharlie Charles": {
      "artist": "Charlie Charles",
      "song": "Peace & Love",
      "rank": "78",
      "streams": "6947126",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "Peace & LoveCharlie Charles"
    },
    "CLOSE (feat. Travis Scott) - From SR3MMRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "CLOSE (feat. Travis Scott) - From SR3MM",
      "rank": "183",
      "streams": "4428903",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "CLOSE (feat. Travis Scott) - From SR3MMRae Sremmurd"
    },
    "Lift YourselfKanye West": {
      "artist": "Kanye West",
      "song": "Lift Yourself",
      "rank": "170",
      "streams": "4447429",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Lift YourselfKanye West"
    },
    "FamousMason Ramsey": {
      "artist": "Mason Ramsey",
      "song": "Famous",
      "rank": "85",
      "streams": "7240523",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "FamousMason Ramsey"
    },
    "Jonestown (Interlude)Post Malone": {
      "artist": "Post Malone",
      "song": "Jonestown (Interlude)",
      "rank": "49",
      "streams": "11226977",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Jonestown (Interlude)Post Malone"
    },
    "Bum Bum Tam TamMC Fioti": {
      "artist": "MC Fioti",
      "song": "Bum Bum Tam Tam",
      "rank": "168",
      "streams": "4569620",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Bum Bum Tam TamMC Fioti"
    },
    "Waiting For LoveAvicii": {
      "artist": "Avicii",
      "song": "Waiting For Love",
      "rank": "26",
      "streams": "15652092",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Waiting For LoveAvicii"
    },
    "1985 - Intro to “The Fall Off”J. Cole": {
      "artist": "J. Cole",
      "song": "1985 - Intro to “The Fall Off”",
      "rank": "23",
      "streams": "16759063",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "1985 - Intro to “The Fall Off”J. Cole"
    },
    "HungerFlorence + The Machine": {
      "artist": "Florence + The Machine",
      "song": "Hunger",
      "rank": "165",
      "streams": "4592269",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "HungerFlorence + The Machine"
    },
    "BeautifulBazzi": {
      "artist": "Bazzi",
      "song": "Beautiful",
      "rank": "181",
      "streams": "3960984",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "BeautifulBazzi"
    },
    "ParadiseGeorge Ezra": {
      "artist": "George Ezra",
      "song": "Paradise",
      "rank": "162",
      "streams": "4244694",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "ParadiseGeorge Ezra"
    },
    "BloomTroye Sivan": {
      "artist": "Troye Sivan",
      "song": "Bloom",
      "rank": "181",
      "streams": "4392718",
      "country": "global",
      "week": "2018-05-04--2018-05-11",
      "songArtist": "BloomTroye Sivan"
    },
    "Drip (feat. Migos)Cardi B": {
      "artist": "Cardi B",
      "song": "Drip (feat. Migos)",
      "rank": "47",
      "streams": "9443535",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Drip (feat. Migos)Cardi B"
    },
    "Bartier Cardi (feat. 21 Savage)Cardi B": {
      "artist": "Cardi B",
      "song": "Bartier Cardi (feat. 21 Savage)",
      "rank": "54",
      "streams": "8885727",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Bartier Cardi (feat. 21 Savage)Cardi B"
    },
    "Plain JaneA$AP Ferg": {
      "artist": "A$AP Ferg",
      "song": "Plain Jane",
      "rank": "194",
      "streams": "3314993",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Plain JaneA$AP Ferg"
    },
    "Chasing FireLauv": {
      "artist": "Lauv",
      "song": "Chasing Fire",
      "rank": "199",
      "streams": "3592475",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Chasing FireLauv"
    },
    "Symphony (feat. Zara Larsson)Clean Bandit": {
      "artist": "Clean Bandit",
      "song": "Symphony (feat. Zara Larsson)",
      "rank": "47",
      "streams": "10852755",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Symphony (feat. Zara Larsson)Clean Bandit"
    },
    "Se PreparóOzuna": {
      "artist": "Ozuna",
      "song": "Se Preparó",
      "rank": "150",
      "streams": "4128852",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Se PreparóOzuna"
    },
    "Powerglide (feat. Juicy J)Rae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Powerglide (feat. Juicy J)",
      "rank": "110",
      "streams": "5491839",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "Powerglide (feat. Juicy J)Rae Sremmurd"
    },
    "PhotographJ. Cole": {
      "artist": "J. Cole",
      "song": "Photograph",
      "rank": "18",
      "streams": "17839200",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "PhotographJ. Cole"
    },
    "The NightsAvicii": {
      "artist": "Avicii",
      "song": "The Nights",
      "rank": "44",
      "streams": "11612203",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "The NightsAvicii"
    },
    "Hey BrotherAvicii": {
      "artist": "Avicii",
      "song": "Hey Brother",
      "rank": "37",
      "streams": "13532381",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Hey BrotherAvicii"
    },
    "Wasted TimesThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Wasted Times",
      "rank": "8",
      "streams": "21345197",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Wasted TimesThe Weeknd"
    },
    "BRACKETSJ. Cole": {
      "artist": "J. Cole",
      "song": "BRACKETS",
      "rank": "36",
      "streams": "13603598",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "BRACKETSJ. Cole"
    },
    "The Cut Off (feat. kiLL edward)J. Cole": {
      "artist": "J. Cole",
      "song": "The Cut Off (feat. kiLL edward)",
      "rank": "30",
      "streams": "14209638",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "The Cut Off (feat. kiLL edward)J. Cole"
    },
    "Ye vs. the People (starring TI as the People)Kanye West": {
      "artist": "Kanye West",
      "song": "Ye vs. the People (starring TI as the People)",
      "rank": "171",
      "streams": "4422052",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Ye vs. the People (starring TI as the People)Kanye West"
    },
    "GOTTI6ix9ine": {
      "artist": "6ix9ine",
      "song": "GOTTI",
      "rank": "135",
      "streams": "4842730",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "GOTTI6ix9ine"
    },
    "Window Pain - OutroJ. Cole": {
      "artist": "J. Cole",
      "song": "Window Pain - Outro",
      "rank": "45",
      "streams": "11602946",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Window Pain - OutroJ. Cole"
    },
    "Só Quer VrauMC MM": {
      "artist": "MC MM",
      "song": "Só Quer Vrau",
      "rank": "183",
      "streams": "4291810",
      "country": "global",
      "week": "2018-04-27--2018-05-04",
      "songArtist": "Só Quer VrauMC MM"
    },
    "I Do (feat. SZA)Cardi B": {
      "artist": "Cardi B",
      "song": "I Do (feat. SZA)",
      "rank": "51",
      "streams": "9073607",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "I Do (feat. SZA)Cardi B"
    },
    "Go FlexPost Malone": {
      "artist": "Post Malone",
      "song": "Go Flex",
      "rank": "191",
      "streams": "3150917",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Go FlexPost Malone"
    },
    "HeavenJulia Michaels": {
      "artist": "Julia Michaels",
      "song": "Heaven",
      "rank": "82",
      "streams": "6595626",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "HeavenJulia Michaels"
    },
    "Nowadays (feat. Landon Cube)Lil Skies": {
      "artist": "Lil Skies",
      "song": "Nowadays (feat. Landon Cube)",
      "rank": "155",
      "streams": "4262251",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "Nowadays (feat. Landon Cube)Lil Skies"
    },
    "All Falls Down (feat. Juliander)Alan Walker": {
      "artist": "Alan Walker",
      "song": "All Falls Down (feat. Juliander)",
      "rank": "106",
      "streams": "5037367",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "All Falls Down (feat. Juliander)Alan Walker"
    },
    "Try MeThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Try Me",
      "rank": "6",
      "streams": "24189356",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Try MeThe Weeknd"
    },
    "rockstarPost Malone": {
      "artist": "Post Malone",
      "song": "rockstar",
      "rank": "1",
      "streams": "35821535",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "rockstarPost Malone"
    },
    "FRIENDS (feat. kiLL edward)J. Cole": {
      "artist": "J. Cole",
      "song": "FRIENDS (feat. kiLL edward)",
      "rank": "47",
      "streams": "11471773",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "FRIENDS (feat. kiLL edward)J. Cole"
    },
    "Once an Addict - InterludeJ. Cole": {
      "artist": "J. Cole",
      "song": "Once an Addict - Interlude",
      "rank": "51",
      "streams": "10944009",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Once an Addict - InterludeJ. Cole"
    },
    "IntroJ. Cole": {
      "artist": "J. Cole",
      "song": "Intro",
      "rank": "67",
      "streams": "9049612",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "IntroJ. Cole"
    },
    "Broken ArrowsAvicii": {
      "artist": "Avicii",
      "song": "Broken Arrows",
      "rank": "110",
      "streams": "5843204",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Broken ArrowsAvicii"
    },
    "For A Better DayAvicii": {
      "artist": "Avicii",
      "song": "For A Better Day",
      "rank": "117",
      "streams": "5691014",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "For A Better DayAvicii"
    },
    "You Make MeAvicii": {
      "artist": "Avicii",
      "song": "You Make Me",
      "rank": "120",
      "streams": "5634599",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "You Make MeAvicii"
    },
    "Barbie TingzNicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "Barbie Tingz",
      "rank": "45",
      "streams": "9712770",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Barbie TingzNicki Minaj"
    },
    "You Be Love (feat. Billy Raffoul)Avicii": {
      "artist": "Avicii",
      "song": "You Be Love (feat. Billy Raffoul)",
      "rank": "149",
      "streams": "3655614",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "You Be Love (feat. Billy Raffoul)Avicii"
    },
    "Guatemala (feat. Slim Jxmmi) - From SwaecationRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Guatemala (feat. Slim Jxmmi) - From Swaecation",
      "rank": "111",
      "streams": "5580749",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Guatemala (feat. Slim Jxmmi) - From SwaecationRae Sremmurd"
    },
    "The DaysAvicii": {
      "artist": "Avicii",
      "song": "The Days",
      "rank": "149",
      "streams": "5040774",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "The DaysAvicii"
    },
    "Everybody Hates MeThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Everybody Hates Me",
      "rank": "56",
      "streams": "8406890",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Everybody Hates MeThe Chainsmokers"
    },
    "A$AP ForeverA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "A$AP Forever",
      "rank": "70",
      "streams": "7384296",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "A$AP ForeverA$AP Rocky"
    },
    "Capital LettersHailee Steinfeld": {
      "artist": "Hailee Steinfeld",
      "song": "Capital Letters",
      "rank": "150",
      "streams": "4692261",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Capital LettersHailee Steinfeld"
    },
    "You Are The ReasonCalum Scott": {
      "artist": "Calum Scott",
      "song": "You Are The Reason",
      "rank": "165",
      "streams": "4003085",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "You Are The ReasonCalum Scott"
    },
    "I Could Be The One (Avicii Vs. Nicky Romero) - Nicktim / Radio EditAvicii": {
      "artist": "Avicii",
      "song": "I Could Be The One (Avicii Vs. Nicky Romero) - Nicktim / Radio Edit",
      "rank": "168",
      "streams": "4661739",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "I Could Be The One (Avicii Vs. Nicky Romero) - Nicktim / Radio EditAvicii"
    },
    "Addicted To YouAvicii": {
      "artist": "Avicii",
      "song": "Addicted To You",
      "rank": "171",
      "streams": "4591421",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Addicted To YouAvicii"
    },
    "Tip Toe (feat. French Montana)Jason Derulo": {
      "artist": "Jason Derulo",
      "song": "Tip Toe (feat. French Montana)",
      "rank": "113",
      "streams": "4943508",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Tip Toe (feat. French Montana)Jason Derulo"
    },
    "Home With YouMadison Beer": {
      "artist": "Madison Beer",
      "song": "Home With You",
      "rank": "162",
      "streams": "4388702",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Home With YouMadison Beer"
    },
    "TequilaDan + Shay": {
      "artist": "Dan + Shay",
      "song": "Tequila",
      "rank": "179",
      "streams": "3833887",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "TequilaDan + Shay"
    },
    "New Freezer (feat. Kendrick Lamar)Rich The Kid": {
      "artist": "Rich The Kid",
      "song": "New Freezer (feat. Kendrick Lamar)",
      "rank": "195",
      "streams": "3307700",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "New Freezer (feat. Kendrick Lamar)Rich The Kid"
    },
    "AlienSabrina Carpenter": {
      "artist": "Sabrina Carpenter",
      "song": "Alien",
      "rank": "196",
      "streams": "3597952",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "AlienSabrina Carpenter"
    },
    "MachikaJ Balvin": {
      "artist": "J Balvin",
      "song": "Machika",
      "rank": "78",
      "streams": "6889912",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "MachikaJ Balvin"
    },
    "No LimitG-Eazy": {
      "artist": "G-Eazy",
      "song": "No Limit",
      "rank": "173",
      "streams": "3438833",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "No LimitG-Eazy"
    },
    "Silhouettes - Original Radio EditAvicii": {
      "artist": "Avicii",
      "song": "Silhouettes - Original Radio Edit",
      "rank": "193",
      "streams": "4263880",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Silhouettes - Original Radio EditAvicii"
    },
    "LOVE. FEAT. ZACARI.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "LOVE. FEAT. ZACARI.",
      "rank": "14",
      "streams": "18251093",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "LOVE. FEAT. ZACARI.Kendrick Lamar"
    },
    "Tesla (feat. Sfera Ebbasta & DrefGold)Capo Plaza": {
      "artist": "Capo Plaza",
      "song": "Tesla (feat. Sfera Ebbasta & DrefGold)",
      "rank": "198",
      "streams": "4169823",
      "country": "global",
      "week": "2018-04-20--2018-04-27",
      "songArtist": "Tesla (feat. Sfera Ebbasta & DrefGold)Capo Plaza"
    },
    "Ring (feat. Kehlani)Cardi B": {
      "artist": "Cardi B",
      "song": "Ring (feat. Kehlani)",
      "rank": "77",
      "streams": "7213273",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Ring (feat. Kehlani)Cardi B"
    },
    "Lemon - Drake RemixN.E.R.D": {
      "artist": "N.E.R.D",
      "song": "Lemon - Drake Remix",
      "rank": "71",
      "streams": "7312899",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "Lemon - Drake RemixN.E.R.D"
    },
    "Hurt YouThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Hurt You",
      "rank": "16",
      "streams": "17639162",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Hurt YouThe Weeknd"
    },
    "I Was Never ThereThe Weeknd": {
      "artist": "The Weeknd",
      "song": "I Was Never There",
      "rank": "17",
      "streams": "17597962",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "I Was Never ThereThe Weeknd"
    },
    "Best Life (feat. Chance The Rapper)Cardi B": {
      "artist": "Cardi B",
      "song": "Best Life (feat. Chance The Rapper)",
      "rank": "75",
      "streams": "7241438",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Best Life (feat. Chance The Rapper)Cardi B"
    },
    "BickenheadCardi B": {
      "artist": "Cardi B",
      "song": "Bickenhead",
      "rank": "78",
      "streams": "7135110",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "BickenheadCardi B"
    },
    "Báilame - RemixNacho": {
      "artist": "Nacho",
      "song": "Báilame - Remix",
      "rank": "141",
      "streams": "3967557",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "Báilame - RemixNacho"
    },
    "PrivilegeThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Privilege",
      "rank": "21",
      "streams": "15068329",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "PrivilegeThe Weeknd"
    },
    "Quiero RepetirOzuna": {
      "artist": "Ozuna",
      "song": "Quiero Repetir",
      "rank": "184",
      "streams": "3596188",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Quiero RepetirOzuna"
    },
    "PassionfruitDrake": {
      "artist": "Drake",
      "song": "Passionfruit",
      "rank": "4",
      "streams": "26728771",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "PassionfruitDrake"
    },
    "MotorSportMigos": {
      "artist": "Migos",
      "song": "MotorSport",
      "rank": "45",
      "streams": "9541096",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "MotorSportMigos"
    },
    "El ClavoPrince Royce": {
      "artist": "Prince Royce",
      "song": "El Clavo",
      "rank": "148",
      "streams": "4485498",
      "country": "global",
      "week": "2018-03-23--2018-03-30",
      "songArtist": "El ClavoPrince Royce"
    },
    "So Far Away (feat. Jamie Scott & Romy Dya)Martin Garrix": {
      "artist": "Martin Garrix",
      "song": "So Far Away (feat. Jamie Scott & Romy Dya)",
      "rank": "62",
      "streams": "7389963",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "So Far Away (feat. Jamie Scott & Romy Dya)Martin Garrix"
    },
    "Gucci GangLil Pump": {
      "artist": "Lil Pump",
      "song": "Gucci Gang",
      "rank": "166",
      "streams": "3554344",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "Gucci GangLil Pump"
    },
    "Get Up 10Cardi B": {
      "artist": "Cardi B",
      "song": "Get Up 10",
      "rank": "66",
      "streams": "7531048",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Get Up 10Cardi B"
    },
    "Bounce Out With ThatYBN Nahmir": {
      "artist": "YBN Nahmir",
      "song": "Bounce Out With That",
      "rank": "191",
      "streams": "3830395",
      "country": "global",
      "week": "2018-02-02--2018-02-09",
      "songArtist": "Bounce Out With ThatYBN Nahmir"
    },
    "PineappleKarol G": {
      "artist": "Karol G",
      "song": "Pineapple",
      "rank": "187",
      "streams": "4019705",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "PineappleKarol G"
    },
    "Marry MeThomas Rhett": {
      "artist": "Thomas Rhett",
      "song": "Marry Me",
      "rank": "189",
      "streams": "3959792",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "Marry MeThomas Rhett"
    },
    "Déjate LlevarJuan Magán": {
      "artist": "Juan Magán",
      "song": "Déjate Llevar",
      "rank": "199",
      "streams": "3445360",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Déjate LlevarJuan Magán"
    },
    "44 MoreLogic": {
      "artist": "Logic",
      "song": "44 More",
      "rank": "40",
      "streams": "10807964",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "44 MoreLogic"
    },
    "StargazingKygo": {
      "artist": "Kygo",
      "song": "Stargazing",
      "rank": "71",
      "streams": "6804955",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "StargazingKygo"
    },
    "LullabySigala": {
      "artist": "Sigala",
      "song": "Lullaby",
      "rank": "196",
      "streams": "3843346",
      "country": "global",
      "week": "2018-04-13--2018-04-20",
      "songArtist": "LullabySigala"
    },
    "IndecenteAnitta": {
      "artist": "Anitta",
      "song": "Indecente",
      "rank": "147",
      "streams": "4343129",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "IndecenteAnitta"
    },
    "Hard 2 Face RealityPoo Bear": {
      "artist": "Poo Bear",
      "song": "Hard 2 Face Reality",
      "rank": "161",
      "streams": "4312328",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Hard 2 Face RealityPoo Bear"
    },
    "I'm the One (feat. Justin Bieber, Quavo, Chance the Rapper & Lil Wayne)DJ Khaled": {
      "artist": "DJ Khaled",
      "song": "I'm the One (feat. Justin Bieber, Quavo, Chance the Rapper & Lil Wayne)",
      "rank": "3",
      "streams": "35518012",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "I'm the One (feat. Justin Bieber, Quavo, Chance the Rapper & Lil Wayne)DJ Khaled"
    },
    "Thru Your PhoneCardi B": {
      "artist": "Cardi B",
      "song": "Thru Your Phone",
      "rank": "113",
      "streams": "5410782",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Thru Your PhoneCardi B"
    },
    "Money BagCardi B": {
      "artist": "Cardi B",
      "song": "Money Bag",
      "rank": "117",
      "streams": "5329555",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "Money BagCardi B"
    },
    "She BadCardi B": {
      "artist": "Cardi B",
      "song": "She Bad",
      "rank": "129",
      "streams": "5045035",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "She BadCardi B"
    },
    "Bad CompanyA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Bad Company",
      "rank": "107",
      "streams": "5211831",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Bad CompanyA$AP Rocky"
    },
    "MayoresBecky G": {
      "artist": "Becky G",
      "song": "Mayores",
      "rank": "135",
      "streams": "3917416",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "MayoresBecky G"
    },
    "66Lil Yachty": {
      "artist": "Lil Yachty",
      "song": "66",
      "rank": "74",
      "streams": "6800496",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "66Lil Yachty"
    },
    "Loca RemixKhea": {
      "artist": "Khea",
      "song": "Loca Remix",
      "rank": "175",
      "streams": "4087350",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Loca RemixKhea"
    },
    "IssuesJulia Michaels": {
      "artist": "Julia Michaels",
      "song": "Issues",
      "rank": "188",
      "streams": "2832224",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "IssuesJulia Michaels"
    },
    "Sky WalkerMiguel": {
      "artist": "Miguel",
      "song": "Sky Walker",
      "rank": "185",
      "streams": "3416878",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Sky WalkerMiguel"
    },
    "Strip That DownLiam Payne": {
      "artist": "Liam Payne",
      "song": "Strip That Down",
      "rank": "30",
      "streams": "13467979",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "Strip That DownLiam Payne"
    },
    "Galway GirlEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Galway Girl",
      "rank": "2",
      "streams": "31104147",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Galway GirlEd Sheeran"
    },
    "The Greatest ShowHugh Jackman": {
      "artist": "Hugh Jackman",
      "song": "The Greatest Show",
      "rank": "163",
      "streams": "4068016",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "The Greatest ShowHugh Jackman"
    },
    "Suena El DembowJoey Montana": {
      "artist": "Joey Montana",
      "song": "Suena El Dembow",
      "rank": "153",
      "streams": "3928364",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Suena El DembowJoey Montana"
    },
    "Pineapple (feat. Gucci Mane & Quavo)Ty Dolla $ign": {
      "artist": "Ty Dolla $ign",
      "song": "Pineapple (feat. Gucci Mane & Quavo)",
      "rank": "155",
      "streams": "4218652",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "Pineapple (feat. Gucci Mane & Quavo)Ty Dolla $ign"
    },
    "SUTRASebastian Yatra": {
      "artist": "Sebastian Yatra",
      "song": "SUTRA",
      "rank": "167",
      "streams": "3564470",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "SUTRASebastian Yatra"
    },
    "5 Songs in einer NachtCapital Bra": {
      "artist": "Capital Bra",
      "song": "5 Songs in einer Nacht",
      "rank": "200",
      "streams": "3692260",
      "country": "global",
      "week": "2018-04-06--2018-04-13",
      "songArtist": "5 Songs in einer NachtCapital Bra"
    },
    "NarcosMigos": {
      "artist": "Migos",
      "song": "Narcos",
      "rank": "24",
      "streams": "12517414",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "NarcosMigos"
    },
    "OKRATyler, The Creator": {
      "artist": "Tyler, The Creator",
      "song": "OKRA",
      "rank": "138",
      "streams": "4523203",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "OKRATyler, The Creator"
    },
    "Que VaAlex Sensation": {
      "artist": "Alex Sensation",
      "song": "Que Va",
      "rank": "183",
      "streams": "3556589",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Que VaAlex Sensation"
    },
    "X (with 2 Chainz & Saudi)ScHoolboy Q": {
      "artist": "ScHoolboy Q",
      "song": "X (with 2 Chainz & Saudi)",
      "rank": "28",
      "streams": "12092598",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "X (with 2 Chainz & Saudi)ScHoolboy Q"
    },
    "going down!XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "going down!",
      "rank": "55",
      "streams": "8440971",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "going down!XXXTENTACION"
    },
    "BILLY6ix9ine": {
      "artist": "6ix9ine",
      "song": "BILLY",
      "rank": "86",
      "streams": "6347537",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "BILLY6ix9ine"
    },
    "End Of Discussion (feat. Lil Wayne)Rich The Kid": {
      "artist": "Rich The Kid",
      "song": "End Of Discussion (feat. Lil Wayne)",
      "rank": "188",
      "streams": "3674205",
      "country": "global",
      "week": "2018-03-30--2018-04-06",
      "songArtist": "End Of Discussion (feat. Lil Wayne)Rich The Kid"
    },
    "I Don’t Wanna Live Forever (Fifty Shades Darker) - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"ZAYN": {
      "artist": "ZAYN",
      "song": "I Don’t Wanna Live Forever (Fifty Shades Darker) - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"",
      "rank": "7",
      "streams": "16797090",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "I Don’t Wanna Live Forever (Fifty Shades Darker) - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"ZAYN"
    },
    "I Feel It ComingThe Weeknd": {
      "artist": "The Weeknd",
      "song": "I Feel It Coming",
      "rank": "12",
      "streams": "14845976",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "I Feel It ComingThe Weeknd"
    },
    "Despacito (Featuring Daddy Yankee)Luis Fonsi": {
      "artist": "Luis Fonsi",
      "song": "Despacito (Featuring Daddy Yankee)",
      "rank": "50",
      "streams": "7404438",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Despacito (Featuring Daddy Yankee)Luis Fonsi"
    },
    "Robarte un BesoCarlos Vives": {
      "artist": "Carlos Vives",
      "song": "Robarte un Beso",
      "rank": "146",
      "streams": "3610798",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "Robarte un BesoCarlos Vives"
    },
    "What About UsP!nk": {
      "artist": "P!nk",
      "song": "What About Us",
      "rank": "67",
      "streams": "6742242",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "What About UsP!nk"
    },
    "WaitMaroon 5": {
      "artist": "Maroon 5",
      "song": "Wait",
      "rank": "95",
      "streams": "5660515",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "WaitMaroon 5"
    },
    "I don’t even speak spanish lol - feat. Rio Santana, Judah, Carlos AndrezXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "I don’t even speak spanish lol - feat. Rio Santana, Judah, Carlos Andrez",
      "rank": "63",
      "streams": "7887553",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "I don’t even speak spanish lol - feat. Rio Santana, Judah, Carlos AndrezXXXTENTACION"
    },
    "Getting Over YouLauv": {
      "artist": "Lauv",
      "song": "Getting Over You",
      "rank": "152",
      "streams": "4352561",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "Getting Over YouLauv"
    },
    "MamitaCNCO": {
      "artist": "CNCO",
      "song": "Mamita",
      "rank": "195",
      "streams": "3750803",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "MamitaCNCO"
    },
    "NakedJames Arthur": {
      "artist": "James Arthur",
      "song": "Naked",
      "rank": "89",
      "streams": "5758771",
      "country": "global",
      "week": "2017-11-24--2017-12-01",
      "songArtist": "NakedJames Arthur"
    },
    "DreamerAxwell /\\ Ingrosso": {
      "artist": "Axwell /\\ Ingrosso",
      "song": "Dreamer",
      "rank": "187",
      "streams": "3890940",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "DreamerAxwell /\\ Ingrosso"
    },
    "ContraLogic": {
      "artist": "Logic",
      "song": "Contra",
      "rank": "45",
      "streams": "9642641",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "ContraLogic"
    },
    "Codeine Dreaming (feat. Lil Wayne)Kodak Black": {
      "artist": "Kodak Black",
      "song": "Codeine Dreaming (feat. Lil Wayne)",
      "rank": "170",
      "streams": "3720892",
      "country": "global",
      "week": "2017-11-24--2017-12-01",
      "songArtist": "Codeine Dreaming (feat. Lil Wayne)Kodak Black"
    },
    "Want You Back5 Seconds of Summer": {
      "artist": "5 Seconds of Summer",
      "song": "Want You Back",
      "rank": "51",
      "streams": "8842580",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "Want You Back5 Seconds of Summer"
    },
    "Mask OffFuture": {
      "artist": "Future",
      "song": "Mask Off",
      "rank": "69",
      "streams": "5939010",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Mask OffFuture"
    },
    "I Get The Bag (feat. Migos)Gucci Mane": {
      "artist": "Gucci Mane",
      "song": "I Get The Bag (feat. Migos)",
      "rank": "92",
      "streams": "5161839",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "I Get The Bag (feat. Migos)Gucci Mane"
    },
    "White IversonPost Malone": {
      "artist": "Post Malone",
      "song": "White Iverson",
      "rank": "195",
      "streams": "2598038",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "White IversonPost Malone"
    },
    "StayZedd": {
      "artist": "Zedd",
      "song": "Stay",
      "rank": "114",
      "streams": "5107347",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "StayZedd"
    },
    "Wild Thoughts (feat. Rihanna & Bryson Tiller)DJ Khaled": {
      "artist": "DJ Khaled",
      "song": "Wild Thoughts (feat. Rihanna & Bryson Tiller)",
      "rank": "5",
      "streams": "25477718",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Wild Thoughts (feat. Rihanna & Bryson Tiller)DJ Khaled"
    },
    "$$$ - with Matt OxXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "$$$ - with Matt Ox",
      "rank": "87",
      "streams": "6443057",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "$$$ - with Matt OxXXXTENTACION"
    },
    "She Loves ControlCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "She Loves Control",
      "rank": "53",
      "streams": "8725084",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "She Loves ControlCamila Cabello"
    },
    "Floor 555XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Floor 555",
      "rank": "113",
      "streams": "5368121",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Floor 555XXXTENTACION"
    },
    "SMASH! - feat. PnB RockXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "SMASH! - feat. PnB Rock",
      "rank": "124",
      "streams": "5079564",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "SMASH! - feat. PnB RockXXXTENTACION"
    },
    "before I close my eyesXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "before I close my eyes",
      "rank": "126",
      "streams": "5025420",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "before I close my eyesXXXTENTACION"
    },
    "Pain = BESTFRIEND - feat. Travis BarkerXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Pain = BESTFRIEND - feat. Travis Barker",
      "rank": "141",
      "streams": "4680669",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "Pain = BESTFRIEND - feat. Travis BarkerXXXTENTACION"
    },
    "Miss You (with Major Lazer & Tory Lanez)Cashmere Cat": {
      "artist": "Cashmere Cat",
      "song": "Miss You (with Major Lazer & Tory Lanez)",
      "rank": "194",
      "streams": "3806790",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Miss You (with Major Lazer & Tory Lanez)Cashmere Cat"
    },
    "love yourself (interlude)XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "love yourself (interlude)",
      "rank": "168",
      "streams": "4292822",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "love yourself (interlude)XXXTENTACION"
    },
    "MidnightLogic": {
      "artist": "Logic",
      "song": "Midnight",
      "rank": "66",
      "streams": "7257929",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "MidnightLogic"
    },
    "Top OffDJ Khaled": {
      "artist": "DJ Khaled",
      "song": "Top Off",
      "rank": "60",
      "streams": "7898874",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "Top OffDJ Khaled"
    },
    "Escápate Conmigo (feat. Ozuna)Wisin": {
      "artist": "Wisin",
      "song": "Escápate Conmigo (feat. Ozuna)",
      "rank": "87",
      "streams": "6329467",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "Escápate Conmigo (feat. Ozuna)Wisin"
    },
    "You Owe MeThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "You Owe Me",
      "rank": "70",
      "streams": "7077874",
      "country": "global",
      "week": "2018-02-16--2018-02-23",
      "songArtist": "You Owe MeThe Chainsmokers"
    },
    "OvernightLogic": {
      "artist": "Logic",
      "song": "Overnight",
      "rank": "58",
      "streams": "7712064",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "OvernightLogic"
    },
    "schizophreniaXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "schizophrenia",
      "rank": "197",
      "streams": "3800373",
      "country": "global",
      "week": "2018-03-16--2018-03-23",
      "songArtist": "schizophreniaXXXTENTACION"
    },
    "Indica BaduLogic": {
      "artist": "Logic",
      "song": "Indica Badu",
      "rank": "62",
      "streams": "7396106",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "Indica BaduLogic"
    },
    "WassupLogic": {
      "artist": "Logic",
      "song": "Wassup",
      "rank": "76",
      "streams": "6744472",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "WassupLogic"
    },
    "YuckLogic": {
      "artist": "Logic",
      "song": "Yuck",
      "rank": "78",
      "streams": "6510396",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "YuckLogic"
    },
    "BoomTrap ProtocolLogic": {
      "artist": "Logic",
      "song": "BoomTrap Protocol",
      "rank": "85",
      "streams": "6259796",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "BoomTrap ProtocolLogic"
    },
    "Warm It UpLogic": {
      "artist": "Logic",
      "song": "Warm It Up",
      "rank": "87",
      "streams": "6176786",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "Warm It UpLogic"
    },
    "Wizard Of OzLogic": {
      "artist": "Logic",
      "song": "Wizard Of Oz",
      "rank": "91",
      "streams": "6090443",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "Wizard Of OzLogic"
    },
    "State Of EmergencyLogic": {
      "artist": "Logic",
      "song": "State Of Emergency",
      "rank": "111",
      "streams": "5479510",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "State Of EmergencyLogic"
    },
    "Bounce Out With That FT. YBN NahmirDJ A1": {
      "artist": "DJ A1",
      "song": "Bounce Out With That FT. YBN Nahmir",
      "rank": "130",
      "streams": "4913180",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "Bounce Out With That FT. YBN NahmirDJ A1"
    },
    "VuelveDaddy Yankee": {
      "artist": "Daddy Yankee",
      "song": "Vuelve",
      "rank": "147",
      "streams": "3913782",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "VuelveDaddy Yankee"
    },
    "The Ways (with Swae Lee)Khalid": {
      "artist": "Khalid",
      "song": "The Ways (with Swae Lee)",
      "rank": "38",
      "streams": "10728502",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "The Ways (with Swae Lee)Khalid"
    },
    "Grandpa's Space ShipLogic": {
      "artist": "Logic",
      "song": "Grandpa's Space Ship",
      "rank": "167",
      "streams": "4248642",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "Grandpa's Space ShipLogic"
    },
    "Felices los 4Maluma": {
      "artist": "Maluma",
      "song": "Felices los 4",
      "rank": "68",
      "streams": "7635424",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "Felices los 4Maluma"
    },
    "Never EnoughLoren Allred": {
      "artist": "Loren Allred",
      "song": "Never Enough",
      "rank": "176",
      "streams": "3711418",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Never EnoughLoren Allred"
    },
    "A Million DreamsZiv Zaifman": {
      "artist": "Ziv Zaifman",
      "song": "A Million Dreams",
      "rank": "192",
      "streams": "3514340",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "A Million DreamsZiv Zaifman"
    },
    "Bella y SensualRomeo Santos": {
      "artist": "Romeo Santos",
      "song": "Bella y Sensual",
      "rank": "153",
      "streams": "3539913",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Bella y SensualRomeo Santos"
    },
    "Tell Me You Love MeDemi Lovato": {
      "artist": "Demi Lovato",
      "song": "Tell Me You Love Me",
      "rank": "146",
      "streams": "4189111",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Tell Me You Love MeDemi Lovato"
    },
    "MamaJonas Blue": {
      "artist": "Jonas Blue",
      "song": "Mama",
      "rank": "162",
      "streams": "3642233",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "MamaJonas Blue"
    },
    "Friends (with BloodPop®)Justin Bieber": {
      "artist": "Justin Bieber",
      "song": "Friends (with BloodPop®)",
      "rank": "2",
      "streams": "26564864",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "Friends (with BloodPop®)Justin Bieber"
    },
    "SanctifyYears & Years": {
      "artist": "Years & Years",
      "song": "Sanctify",
      "rank": "193",
      "streams": "3825064",
      "country": "global",
      "week": "2018-03-09--2018-03-16",
      "songArtist": "SanctifyYears & Years"
    },
    "The Weekend - Funk Wav RemixSZA": {
      "artist": "SZA",
      "song": "The Weekend - Funk Wav Remix",
      "rank": "197",
      "streams": "3461444",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "The Weekend - Funk Wav RemixSZA"
    },
    "Paramedic!SOB X RBE": {
      "artist": "SOB X RBE",
      "song": "Paramedic!",
      "rank": "62",
      "streams": "8048104",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Paramedic!SOB X RBE"
    },
    "Big Shot (with Travis Scott)Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "Big Shot (with Travis Scott)",
      "rank": "51",
      "streams": "9123170",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Big Shot (with Travis Scott)Kendrick Lamar"
    },
    "Glorious (feat. Skylar Grey)Macklemore": {
      "artist": "Macklemore",
      "song": "Glorious (feat. Skylar Grey)",
      "rank": "138",
      "streams": "3821955",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Glorious (feat. Skylar Grey)Macklemore"
    },
    "Dime Si Te AcuerdasBad Bunny": {
      "artist": "Bad Bunny",
      "song": "Dime Si Te Acuerdas",
      "rank": "153",
      "streams": "4494278",
      "country": "global",
      "week": "2018-03-02--2018-03-09",
      "songArtist": "Dime Si Te AcuerdasBad Bunny"
    },
    "Havana - RemixCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Havana - Remix",
      "rank": "56",
      "streams": "7579385",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Havana - RemixCamila Cabello"
    },
    "KEKE6ix9ine": {
      "artist": "6ix9ine",
      "song": "KEKE",
      "rank": "112",
      "streams": "5550012",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "KEKE6ix9ine"
    },
    "DNA.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "DNA.",
      "rank": "3",
      "streams": "31011843",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "DNA.Kendrick Lamar"
    },
    "Perro Fiel (feat. Nicky Jam)Shakira": {
      "artist": "Shakira",
      "song": "Perro Fiel (feat. Nicky Jam)",
      "rank": "113",
      "streams": "4860513",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "Perro Fiel (feat. Nicky Jam)Shakira"
    },
    "GUMMO6ix9ine": {
      "artist": "6ix9ine",
      "song": "GUMMO",
      "rank": "196",
      "streams": "3342375",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "GUMMO6ix9ine"
    },
    "It Ain't Me (with Selena Gomez)Kygo": {
      "artist": "Kygo",
      "song": "It Ain't Me (with Selena Gomez)",
      "rank": "3",
      "streams": "29318031",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "It Ain't Me (with Selena Gomez)Kygo"
    },
    "Notice MeMigos": {
      "artist": "Migos",
      "song": "Notice Me",
      "rank": "60",
      "streams": "8327068",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Notice MeMigos"
    },
    "FeelsCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Feels",
      "rank": "28",
      "streams": "14335836",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "FeelsCalvin Harris"
    },
    "Scared to Be LonelyMartin Garrix": {
      "artist": "Martin Garrix",
      "song": "Scared to Be Lonely",
      "rank": "19",
      "streams": "14012414",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Scared to Be LonelyMartin Garrix"
    },
    "Swalla (feat. Nicki Minaj & Ty Dolla $ign)Jason Derulo": {
      "artist": "Jason Derulo",
      "song": "Swalla (feat. Nicki Minaj & Ty Dolla $ign)",
      "rank": "130",
      "streams": "4140498",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Swalla (feat. Nicki Minaj & Ty Dolla $ign)Jason Derulo"
    },
    "Next To MeImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Next To Me",
      "rank": "122",
      "streams": "5213958",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "Next To MeImagine Dragons"
    },
    "Vai malandra (feat. Tropkillaz & DJ Yuri Martins)Anitta": {
      "artist": "Anitta",
      "song": "Vai malandra (feat. Tropkillaz & DJ Yuri Martins)",
      "rank": "54",
      "streams": "8404501",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Vai malandra (feat. Tropkillaz & DJ Yuri Martins)Anitta"
    },
    "RONDO6ix9ine": {
      "artist": "6ix9ine",
      "song": "RONDO",
      "rank": "90",
      "streams": "6122294",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "RONDO6ix9ine"
    },
    "Wanted You (feat. Lil Uzi Vert)NAV": {
      "artist": "NAV",
      "song": "Wanted You (feat. Lil Uzi Vert)",
      "rank": "105",
      "streams": "5139572",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Wanted You (feat. Lil Uzi Vert)NAV"
    },
    "Opps (with Yugen Blakrok)Vince Staples": {
      "artist": "Vince Staples",
      "song": "Opps (with Yugen Blakrok)",
      "rank": "76",
      "streams": "6817930",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Opps (with Yugen Blakrok)Vince Staples"
    },
    "My My My!Troye Sivan": {
      "artist": "Troye Sivan",
      "song": "My My My!",
      "rank": "31",
      "streams": "11670886",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "My My My!Troye Sivan"
    },
    "Black PantherKendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "Black Panther",
      "rank": "47",
      "streams": "9589477",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Black PantherKendrick Lamar"
    },
    "CockyA$AP Rocky": {
      "artist": "A$AP Rocky",
      "song": "Cocky",
      "rank": "190",
      "streams": "3823251",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "CockyA$AP Rocky"
    },
    "Wait (feat. A Boogie Wit da Hoodie)Maroon 5": {
      "artist": "Maroon 5",
      "song": "Wait (feat. A Boogie Wit da Hoodie)",
      "rank": "192",
      "streams": "3797718",
      "country": "global",
      "week": "2018-02-23--2018-03-02",
      "songArtist": "Wait (feat. A Boogie Wit da Hoodie)Maroon 5"
    },
    "Una Lady Como TúManuel Turizo": {
      "artist": "Manuel Turizo",
      "song": "Una Lady Como Tú",
      "rank": "138",
      "streams": "4051683",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Una Lady Como TúManuel Turizo"
    },
    "End GameTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "End Game",
      "rank": "129",
      "streams": "4974045",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "End GameTaylor Swift"
    },
    "The Other SideHugh Jackman": {
      "artist": "Hugh Jackman",
      "song": "The Other Side",
      "rank": "116",
      "streams": "5186093",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "The Other SideHugh Jackman"
    },
    "La ModeloOzuna": {
      "artist": "Ozuna",
      "song": "La Modelo",
      "rank": "196",
      "streams": "3475428",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "La ModeloOzuna"
    },
    "I AmJorja Smith": {
      "artist": "Jorja Smith",
      "song": "I Am",
      "rank": "90",
      "streams": "6353371",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "I AmJorja Smith"
    },
    "Home (with Machine Gun Kelly, X Ambassadors & Bebe Rexha)Machine Gun Kelly": {
      "artist": "Machine Gun Kelly",
      "song": "Home (with Machine Gun Kelly, X Ambassadors & Bebe Rexha)",
      "rank": "113",
      "streams": "4883705",
      "country": "global",
      "week": "2017-11-24--2017-12-01",
      "songArtist": "Home (with Machine Gun Kelly, X Ambassadors & Bebe Rexha)Machine Gun Kelly"
    },
    "Real FriendsCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Real Friends",
      "rank": "116",
      "streams": "5313279",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "Real FriendsCamila Cabello"
    },
    "Redemption (with Babes Wodumo)Zacari": {
      "artist": "Zacari",
      "song": "Redemption (with Babes Wodumo)",
      "rank": "153",
      "streams": "4581693",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Redemption (with Babes Wodumo)Zacari"
    },
    "Bloody Waters (with Anderson .Paak & James Blake)Ab-Soul": {
      "artist": "Ab-Soul",
      "song": "Bloody Waters (with Anderson .Paak & James Blake)",
      "rank": "114",
      "streams": "5333802",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Bloody Waters (with Anderson .Paak & James Blake)Ab-Soul"
    },
    "Back to You (feat. Bebe Rexha & Digital Farm Animals)Louis Tomlinson": {
      "artist": "Louis Tomlinson",
      "song": "Back to You (feat. Bebe Rexha & Digital Farm Animals)",
      "rank": "35",
      "streams": "11593498",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Back to You (feat. Bebe Rexha & Digital Farm Animals)Louis Tomlinson"
    },
    "Bad At LoveHalsey": {
      "artist": "Halsey",
      "song": "Bad At Love",
      "rank": "128",
      "streams": "4247585",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Bad At LoveHalsey"
    },
    "Diplomatic ImmunityDrake": {
      "artist": "Drake",
      "song": "Diplomatic Immunity",
      "rank": "19",
      "streams": "14166956",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Diplomatic ImmunityDrake"
    },
    "Nuh Ready Nuh ReadyCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Nuh Ready Nuh Ready",
      "rank": "134",
      "streams": "4972965",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Nuh Ready Nuh ReadyCalvin Harris"
    },
    "Scooby Doo Pa PaDj Kass": {
      "artist": "Dj Kass",
      "song": "Scooby Doo Pa Pa",
      "rank": "141",
      "streams": "4932545",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Scooby Doo Pa PaDj Kass"
    },
    "FilthyJustin Timberlake": {
      "artist": "Justin Timberlake",
      "song": "Filthy",
      "rank": "25",
      "streams": "12412065",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "FilthyJustin Timberlake"
    },
    "Seasons (with Sjava & Reason)Mozzy": {
      "artist": "Mozzy",
      "song": "Seasons (with Sjava & Reason)",
      "rank": "185",
      "streams": "4010800",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Seasons (with Sjava & Reason)Mozzy"
    },
    "Stay With MeSam Smith": {
      "artist": "Sam Smith",
      "song": "Stay With Me",
      "rank": "198",
      "streams": "2652008",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "Stay With MeSam Smith"
    },
    "BonitaJ Balvin": {
      "artist": "J Balvin",
      "song": "Bonita",
      "rank": "134",
      "streams": "4137285",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "BonitaJ Balvin"
    },
    "Man's Not HotBig Shaq": {
      "artist": "Big Shaq",
      "song": "Man's Not Hot",
      "rank": "178",
      "streams": "3585108",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "Man's Not HotBig Shaq"
    },
    "EnvolvimentoMC Loma e As Gêmeas Lacração": {
      "artist": "MC Loma e As Gêmeas Lacração",
      "song": "Envolvimento",
      "rank": "197",
      "streams": "3854154",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "EnvolvimentoMC Loma e As Gêmeas Lacração"
    },
    "Come AliveHugh Jackman": {
      "artist": "Hugh Jackman",
      "song": "Come Alive",
      "rank": "154",
      "streams": "4265528",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "Come AliveHugh Jackman"
    },
    "Redemption InterludeZacari": {
      "artist": "Zacari",
      "song": "Redemption Interlude",
      "rank": "199",
      "streams": "3821752",
      "country": "global",
      "week": "2018-02-09--2018-02-16",
      "songArtist": "Redemption InterludeZacari"
    },
    "Man of the WoodsJustin Timberlake": {
      "artist": "Justin Timberlake",
      "song": "Man of the Woods",
      "rank": "115",
      "streams": "5517667",
      "country": "global",
      "week": "2018-02-02--2018-02-09",
      "songArtist": "Man of the WoodsJustin Timberlake"
    },
    "SuppliesJustin Timberlake": {
      "artist": "Justin Timberlake",
      "song": "Supplies",
      "rank": "121",
      "streams": "5286969",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "SuppliesJustin Timberlake"
    },
    "BBO (Bad Bitches Only)Migos": {
      "artist": "Migos",
      "song": "BBO (Bad Bitches Only)",
      "rank": "55",
      "streams": "9035628",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "BBO (Bad Bitches Only)Migos"
    },
    "Gang GangMigos": {
      "artist": "Migos",
      "song": "Gang Gang",
      "rank": "80",
      "streams": "6973684",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Gang GangMigos"
    },
    "From Now OnHugh Jackman": {
      "artist": "Hugh Jackman",
      "song": "From Now On",
      "rank": "160",
      "streams": "4193033",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "From Now OnHugh Jackman"
    },
    "24K MagicBruno Mars": {
      "artist": "Bruno Mars",
      "song": "24K Magic",
      "rank": "9",
      "streams": "16023066",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "24K MagicBruno Mars"
    },
    "Pretty Girl - Cheat Codes X CADE RemixMaggie Lindemann": {
      "artist": "Maggie Lindemann",
      "song": "Pretty Girl - Cheat Codes X CADE Remix",
      "rank": "196",
      "streams": "3205277",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "Pretty Girl - Cheat Codes X CADE RemixMaggie Lindemann"
    },
    "Look What You Made Me DoTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Look What You Made Me Do",
      "rank": "1",
      "streams": "44480002",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Look What You Made Me DoTaylor Swift"
    },
    "Slippery (feat. Gucci Mane)Migos": {
      "artist": "Migos",
      "song": "Slippery (feat. Gucci Mane)",
      "rank": "117",
      "streams": "4190897",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Slippery (feat. Gucci Mane)Migos"
    },
    "SpotlightMarshmello": {
      "artist": "Marshmello",
      "song": "Spotlight",
      "rank": "86",
      "streams": "6402322",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "SpotlightMarshmello"
    },
    "CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")Justin Timberlake": {
      "artist": "Justin Timberlake",
      "song": "CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")",
      "rank": "35",
      "streams": "7734734",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")Justin Timberlake"
    },
    "Slow HandsNiall Horan": {
      "artist": "Niall Horan",
      "song": "Slow Hands",
      "rank": "50",
      "streams": "9348980",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "Slow HandsNiall Horan"
    },
    "The Way Life Goes (feat. Oh Wonder)Lil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "The Way Life Goes (feat. Oh Wonder)",
      "rank": "53",
      "streams": "8911295",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "The Way Life Goes (feat. Oh Wonder)Lil Uzi Vert"
    },
    "Dirty Sexy Money (feat. Charli XCX & French Montana)David Guetta": {
      "artist": "David Guetta",
      "song": "Dirty Sexy Money (feat. Charli XCX & French Montana)",
      "rank": "104",
      "streams": "5167474",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Dirty Sexy Money (feat. Charli XCX & French Montana)David Guetta"
    },
    "Rockabye (feat. Sean Paul & Anne-Marie)Clean Bandit": {
      "artist": "Clean Bandit",
      "song": "Rockabye (feat. Sean Paul & Anne-Marie)",
      "rank": "3",
      "streams": "19794482",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Rockabye (feat. Sean Paul & Anne-Marie)Clean Bandit"
    },
    "SupastarsMigos": {
      "artist": "Migos",
      "song": "Supastars",
      "rank": "81",
      "streams": "6939524",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "SupastarsMigos"
    },
    "White SandMigos": {
      "artist": "Migos",
      "song": "White Sand",
      "rank": "92",
      "streams": "6513207",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "White SandMigos"
    },
    "Emoji A ChainMigos": {
      "artist": "Migos",
      "song": "Emoji A Chain",
      "rank": "122",
      "streams": "5354839",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Emoji A ChainMigos"
    },
    "Higher We Go - IntroMigos": {
      "artist": "Migos",
      "song": "Higher We Go - Intro",
      "rank": "130",
      "streams": "5211916",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Higher We Go - IntroMigos"
    },
    "Auto PilotMigos": {
      "artist": "Migos",
      "song": "Auto Pilot",
      "rank": "152",
      "streams": "4789518",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Auto PilotMigos"
    },
    "CCMigos": {
      "artist": "Migos",
      "song": "CC",
      "rank": "159",
      "streams": "4647065",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "CCMigos"
    },
    "Too Much JewelryMigos": {
      "artist": "Migos",
      "song": "Too Much Jewelry",
      "rank": "182",
      "streams": "4241959",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Too Much JewelryMigos"
    },
    "Cara ItaliaGhali": {
      "artist": "Ghali",
      "song": "Cara Italia",
      "rank": "188",
      "streams": "4187081",
      "country": "global",
      "week": "2018-01-26--2018-02-02",
      "songArtist": "Cara ItaliaGhali"
    },
    "Cupido (feat. Quavo)Sfera Ebbasta": {
      "artist": "Sfera Ebbasta",
      "song": "Cupido (feat. Quavo)",
      "rank": "116",
      "streams": "5440414",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Cupido (feat. Quavo)Sfera Ebbasta"
    },
    "Castle on the HillEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Castle on the Hill",
      "rank": "2",
      "streams": "35168298",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "Castle on the HillEd Sheeran"
    },
    "Explícale (feat. Bad Bunny)Yandel": {
      "artist": "Yandel",
      "song": "Explícale (feat. Bad Bunny)",
      "rank": "129",
      "streams": "4213731",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "Explícale (feat. Bad Bunny)Yandel"
    },
    "RockstarSfera Ebbasta": {
      "artist": "Sfera Ebbasta",
      "song": "Rockstar",
      "rank": "132",
      "streams": "4984823",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "RockstarSfera Ebbasta"
    },
    "Sciroppo (feat. DrefGold)Sfera Ebbasta": {
      "artist": "Sfera Ebbasta",
      "song": "Sciroppo (feat. DrefGold)",
      "rank": "164",
      "streams": "4385906",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Sciroppo (feat. DrefGold)Sfera Ebbasta"
    },
    "MIC Drop (feat. Desiigner) [Steve Aoki Remix]BTS": {
      "artist": "BTS",
      "song": "MIC Drop (feat. Desiigner) [Steve Aoki Remix]",
      "rank": "71",
      "streams": "6627272",
      "country": "global",
      "week": "2017-11-24--2017-12-01",
      "songArtist": "MIC Drop (feat. Desiigner) [Steve Aoki Remix]BTS"
    },
    "i ShyneCarnage": {
      "artist": "Carnage",
      "song": "i Shyne",
      "rank": "175",
      "streams": "4154936",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "i ShyneCarnage"
    },
    "Too Much To AskNiall Horan": {
      "artist": "Niall Horan",
      "song": "Too Much To Ask",
      "rank": "40",
      "streams": "10795050",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Too Much To AskNiall Horan"
    },
    "La ModeloLean Trap": {
      "artist": "Lean Trap",
      "song": "La Modelo",
      "rank": "166",
      "streams": "4193036",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "La ModeloLean Trap"
    },
    "Ahora DiceChris Jeday": {
      "artist": "Chris Jeday",
      "song": "Ahora Dice",
      "rank": "161",
      "streams": "3807655",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Ahora DiceChris Jeday"
    },
    "3 A.M.Jesse & Joy": {
      "artist": "Jesse & Joy",
      "song": "3 A.M.",
      "rank": "188",
      "streams": "3433109",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "3 A.M.Jesse & Joy"
    },
    "Your SongRita Ora": {
      "artist": "Rita Ora",
      "song": "Your Song",
      "rank": "43",
      "streams": "10630950",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Your SongRita Ora"
    },
    "Sucker for YouMatt Terry": {
      "artist": "Matt Terry",
      "song": "Sucker for You",
      "rank": "176",
      "streams": "3886564",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "Sucker for YouMatt Terry"
    },
    "TightropeMichelle Williams": {
      "artist": "Michelle Williams",
      "song": "Tightrope",
      "rank": "189",
      "streams": "3645885",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "TightropeMichelle Williams"
    },
    "A Different Way (with Lauv)DJ Snake": {
      "artist": "DJ Snake",
      "song": "A Different Way (with Lauv)",
      "rank": "90",
      "streams": "5659117",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "A Different Way (with Lauv)DJ Snake"
    },
    "Scooby Doo Papa!Lean Trap": {
      "artist": "Lean Trap",
      "song": "Scooby Doo Papa!",
      "rank": "193",
      "streams": "3824938",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Scooby Doo Papa!Lean Trap"
    },
    "Ghostface Killers21 Savage": {
      "artist": "21 Savage",
      "song": "Ghostface Killers",
      "rank": "86",
      "streams": "5872556",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "Ghostface Killers21 Savage"
    },
    "Ricchi x SempreSfera Ebbasta": {
      "artist": "Sfera Ebbasta",
      "song": "Ricchi x Sempre",
      "rank": "197",
      "streams": "3774345",
      "country": "global",
      "week": "2018-01-19--2018-01-26",
      "songArtist": "Ricchi x SempreSfera Ebbasta"
    },
    "All These YearsCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "All These Years",
      "rank": "103",
      "streams": "5700595",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "All These YearsCamila Cabello"
    },
    "ConsequencesCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Consequences",
      "rank": "109",
      "streams": "5470405",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "ConsequencesCamila Cabello"
    },
    "In the DarkCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "In the Dark",
      "rank": "119",
      "streams": "5220504",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "In the DarkCamila Cabello"
    },
    "Into ItCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Into It",
      "rank": "134",
      "streams": "4874604",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "Into ItCamila Cabello"
    },
    "ZombieThe Cranberries": {
      "artist": "The Cranberries",
      "song": "Zombie",
      "rank": "136",
      "streams": "4861271",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "ZombieThe Cranberries"
    },
    "Something's Gotta GiveCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Something's Gotta Give",
      "rank": "138",
      "streams": "4783614",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "Something's Gotta GiveCamila Cabello"
    },
    "Inside OutCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Inside Out",
      "rank": "146",
      "streams": "4644803",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "Inside OutCamila Cabello"
    },
    "DesignerLil Pump": {
      "artist": "Lil Pump",
      "song": "Designer",
      "rank": "166",
      "streams": "4091086",
      "country": "global",
      "week": "2018-01-05--2018-01-12",
      "songArtist": "DesignerLil Pump"
    },
    "SoberG-Eazy": {
      "artist": "G-Eazy",
      "song": "Sober",
      "rank": "111",
      "streams": "5936542",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "SoberG-Eazy"
    },
    "2U (feat. Justin Bieber)David Guetta": {
      "artist": "David Guetta",
      "song": "2U (feat. Justin Bieber)",
      "rank": "3",
      "streams": "30412190",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "2U (feat. Justin Bieber)David Guetta"
    },
    "No Promises (feat. Demi Lovato)Cheat Codes": {
      "artist": "Cheat Codes",
      "song": "No Promises (feat. Demi Lovato)",
      "rank": "104",
      "streams": "5024188",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "No Promises (feat. Demi Lovato)Cheat Codes"
    },
    "SaintHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Saint",
      "rank": "117",
      "streams": "5591945",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "SaintHuncho Jack"
    },
    "Good Old Days (feat. Kesha)Macklemore": {
      "artist": "Macklemore",
      "song": "Good Old Days (feat. Kesha)",
      "rank": "81",
      "streams": "6023508",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "Good Old Days (feat. Kesha)Macklemore"
    },
    "Sign of the TimesHarry Styles": {
      "artist": "Harry Styles",
      "song": "Sign of the Times",
      "rank": "14",
      "streams": "18044087",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Sign of the TimesHarry Styles"
    },
    "...Ready For It?Taylor Swift": {
      "artist": "Taylor Swift",
      "song": "...Ready For It?",
      "rank": "13",
      "streams": "17583532",
      "country": "global",
      "week": "2017-09-01--2017-09-08",
      "songArtist": "...Ready For It?Taylor Swift"
    },
    "Reggaetón Lento (Remix)CNCO": {
      "artist": "CNCO",
      "song": "Reggaetón Lento (Remix)",
      "rank": "94",
      "streams": "5074059",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "Reggaetón Lento (Remix)CNCO"
    },
    "ParisThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Paris",
      "rank": "3",
      "streams": "24678177",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "ParisThe Chainsmokers"
    },
    "LingerThe Cranberries": {
      "artist": "The Cranberries",
      "song": "Linger",
      "rank": "200",
      "streams": "3639673",
      "country": "global",
      "week": "2018-01-12--2018-01-19",
      "songArtist": "LingerThe Cranberries"
    },
    "Tú FotoOzuna": {
      "artist": "Ozuna",
      "song": "Tú Foto",
      "rank": "73",
      "streams": "6466640",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Tú FotoOzuna"
    },
    "El FarsanteOzuna": {
      "artist": "Ozuna",
      "song": "El Farsante",
      "rank": "165",
      "streams": "3424880",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "El FarsanteOzuna"
    },
    "Walk On Water (feat. Beyoncé)Eminem": {
      "artist": "Eminem",
      "song": "Walk On Water (feat. Beyoncé)",
      "rank": "13",
      "streams": "16925764",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Walk On Water (feat. Beyoncé)Eminem"
    },
    "Mi Gente (feat. Beyoncé)J Balvin": {
      "artist": "J Balvin",
      "song": "Mi Gente (feat. Beyoncé)",
      "rank": "15",
      "streams": "15823808",
      "country": "global",
      "week": "2017-09-29--2017-10-06",
      "songArtist": "Mi Gente (feat. Beyoncé)J Balvin"
    },
    "There for YouMartin Garrix": {
      "artist": "Martin Garrix",
      "song": "There for You",
      "rank": "19",
      "streams": "16281619",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "There for YouMartin Garrix"
    },
    "Dubai ShitHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Dubai Shit",
      "rank": "105",
      "streams": "5923537",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Dubai ShitHuncho Jack"
    },
    "Rubbin Off The PaintYBN Nahmir": {
      "artist": "YBN Nahmir",
      "song": "Rubbin Off The Paint",
      "rank": "197",
      "streams": "3327761",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Rubbin Off The PaintYBN Nahmir"
    },
    "Bad and Boujee (feat. Lil Uzi Vert)Migos": {
      "artist": "Migos",
      "song": "Bad and Boujee (feat. Lil Uzi Vert)",
      "rank": "23",
      "streams": "10635390",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Bad and Boujee (feat. Lil Uzi Vert)Migos"
    },
    "Drowning (feat. Kodak Black)A Boogie Wit da Hoodie": {
      "artist": "A Boogie Wit da Hoodie",
      "song": "Drowning (feat. Kodak Black)",
      "rank": "143",
      "streams": "3896440",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Drowning (feat. Kodak Black)A Boogie Wit da Hoodie"
    },
    "Loco EnamoradoAbraham Mateo": {
      "artist": "Abraham Mateo",
      "song": "Loco Enamorado",
      "rank": "183",
      "streams": "3134155",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "Loco EnamoradoAbraham Mateo"
    },
    "We Don't Talk Anymore (feat. Selena Gomez)Charlie Puth": {
      "artist": "Charlie Puth",
      "song": "We Don't Talk Anymore (feat. Selena Gomez)",
      "rank": "39",
      "streams": "7596658",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "We Don't Talk Anymore (feat. Selena Gomez)Charlie Puth"
    },
    "ChambeaBad Bunny": {
      "artist": "Bad Bunny",
      "song": "Chambea",
      "rank": "160",
      "streams": "4347649",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "ChambeaBad Bunny"
    },
    "Billie JeanMichael Jackson": {
      "artist": "Michael Jackson",
      "song": "Billie Jean",
      "rank": "140",
      "streams": "4317606",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Billie JeanMichael Jackson"
    },
    "Don't Let Me DownThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Don't Let Me Down",
      "rank": "29",
      "streams": "9267559",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Don't Let Me DownThe Chainsmokers"
    },
    "Can't Hold Us - feat. Ray DaltonMacklemore & Ryan Lewis": {
      "artist": "Macklemore & Ryan Lewis",
      "song": "Can't Hold Us - feat. Ray Dalton",
      "rank": "190",
      "streams": "2632407",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Can't Hold Us - feat. Ray DaltonMacklemore & Ryan Lewis"
    },
    "SlideCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Slide",
      "rank": "17",
      "streams": "15378889",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "SlideCalvin Harris"
    },
    "Cheap ThrillsSia": {
      "artist": "Sia",
      "song": "Cheap Thrills",
      "rank": "46",
      "streams": "7218935",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Cheap ThrillsSia"
    },
    "Olha a ExplosãoMC Kevinho": {
      "artist": "MC Kevinho",
      "song": "Olha a Explosão",
      "rank": "169",
      "streams": "3840017",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Olha a ExplosãoMC Kevinho"
    },
    "Pumped Up KicksFoster The People": {
      "artist": "Foster The People",
      "song": "Pumped Up Kicks",
      "rank": "182",
      "streams": "2698924",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Pumped Up KicksFoster The People"
    },
    "Hey Ya! - Radio Mix / Club MixOutKast": {
      "artist": "OutKast",
      "song": "Hey Ya! - Radio Mix / Club Mix",
      "rank": "180",
      "streams": "3635414",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Hey Ya! - Radio Mix / Club MixOutKast"
    },
    "Hey DJCNCO": {
      "artist": "CNCO",
      "song": "Hey DJ",
      "rank": "187",
      "streams": "3221430",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "Hey DJCNCO"
    },
    "Was Du Liebe nennstBausa": {
      "artist": "Bausa",
      "song": "Was Du Liebe nennst",
      "rank": "112",
      "streams": "4758361",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "Was Du Liebe nennstBausa"
    },
    "Let Me Love YouDJ Snake": {
      "artist": "DJ Snake",
      "song": "Let Me Love You",
      "rank": "4",
      "streams": "17965723",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Let Me Love YouDJ Snake"
    },
    "Agora Vai SentarMC's Jhowzinho & Kadinho": {
      "artist": "MC's Jhowzinho & Kadinho",
      "song": "Agora Vai Sentar",
      "rank": "198",
      "streams": "3457583",
      "country": "global",
      "week": "2017-12-29--2018-01-05",
      "songArtist": "Agora Vai SentarMC's Jhowzinho & Kadinho"
    },
    "All I Want for Christmas Is YouMariah Carey": {
      "artist": "Mariah Carey",
      "song": "All I Want for Christmas Is You",
      "rank": "11",
      "streams": "15094760",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "All I Want for Christmas Is YouMariah Carey"
    },
    "Last ChristmasWham!": {
      "artist": "Wham!",
      "song": "Last Christmas",
      "rank": "21",
      "streams": "11724752",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Last ChristmasWham!"
    },
    "Do They Know It's Christmas? - 1984 VersionBand Aid": {
      "artist": "Band Aid",
      "song": "Do They Know It's Christmas? - 1984 Version",
      "rank": "70",
      "streams": "5360185",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Do They Know It's Christmas? - 1984 VersionBand Aid"
    },
    "It's Beginning To Look A Lot Like ChristmasMichael Bublé": {
      "artist": "Michael Bublé",
      "song": "It's Beginning To Look A Lot Like Christmas",
      "rank": "41",
      "streams": "7493998",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "It's Beginning To Look A Lot Like ChristmasMichael Bublé"
    },
    "Santa Tell MeAriana Grande": {
      "artist": "Ariana Grande",
      "song": "Santa Tell Me",
      "rank": "84",
      "streams": "4899973",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Santa Tell MeAriana Grande"
    },
    "Rockin' Around The Christmas Tree - Single VersionBrenda Lee": {
      "artist": "Brenda Lee",
      "song": "Rockin' Around The Christmas Tree - Single Version",
      "rank": "66",
      "streams": "5553147",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Rockin' Around The Christmas Tree - Single VersionBrenda Lee"
    },
    "Happy Xmas (War Is Over) - RemasteredJohn Lennon": {
      "artist": "John Lennon",
      "song": "Happy Xmas (War Is Over) - Remastered",
      "rank": "87",
      "streams": "4885251",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Happy Xmas (War Is Over) - RemasteredJohn Lennon"
    },
    "It's the Most Wonderful Time of the YearAndy Williams": {
      "artist": "Andy Williams",
      "song": "It's the Most Wonderful Time of the Year",
      "rank": "45",
      "streams": "7232257",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "It's the Most Wonderful Time of the YearAndy Williams"
    },
    "Driving Home For ChristmasChris Rea": {
      "artist": "Chris Rea",
      "song": "Driving Home For Christmas",
      "rank": "141",
      "streams": "4750671",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "Driving Home For ChristmasChris Rea"
    },
    "White ChristmasBing Crosby": {
      "artist": "Bing Crosby",
      "song": "White Christmas",
      "rank": "60",
      "streams": "5949789",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "White ChristmasBing Crosby"
    },
    "Jingle Bell RockBobby Helms": {
      "artist": "Bobby Helms",
      "song": "Jingle Bell Rock",
      "rank": "51",
      "streams": "7055550",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Jingle Bell RockBobby Helms"
    },
    "Feliz NavidadJosé Feliciano": {
      "artist": "José Feliciano",
      "song": "Feliz Navidad",
      "rank": "68",
      "streams": "5503666",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Feliz NavidadJosé Feliciano"
    },
    "Let It Snow! Let It Snow! Let It Snow! (with The B. Swanson Quartet)Frank Sinatra": {
      "artist": "Frank Sinatra",
      "song": "Let It Snow! Let It Snow! Let It Snow! (with The B. Swanson Quartet)",
      "rank": "59",
      "streams": "5981969",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Let It Snow! Let It Snow! Let It Snow! (with The B. Swanson Quartet)Frank Sinatra"
    },
    "MistletoeJustin Bieber": {
      "artist": "Justin Bieber",
      "song": "Mistletoe",
      "rank": "90",
      "streams": "4817146",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "MistletoeJustin Bieber"
    },
    "Wonderful Christmastime - Remastered 2011 / Edited VersionPaul McCartney": {
      "artist": "Paul McCartney",
      "song": "Wonderful Christmastime - Remastered 2011 / Edited Version",
      "rank": "136",
      "streams": "3607798",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Wonderful Christmastime - Remastered 2011 / Edited VersionPaul McCartney"
    },
    "Fairytale of New York (feat. Kirsty MacColl)The Pogues": {
      "artist": "The Pogues",
      "song": "Fairytale of New York (feat. Kirsty MacColl)",
      "rank": "110",
      "streams": "4245077",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Fairytale of New York (feat. Kirsty MacColl)The Pogues"
    },
    "The Christmas Song (Merry Christmas To You)Nat King Cole": {
      "artist": "Nat King Cole",
      "song": "The Christmas Song (Merry Christmas To You)",
      "rank": "99",
      "streams": "4534872",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "The Christmas Song (Merry Christmas To You)Nat King Cole"
    },
    "Have Yourself A Merry Little ChristmasSam Smith": {
      "artist": "Sam Smith",
      "song": "Have Yourself A Merry Little Christmas",
      "rank": "169",
      "streams": "3152235",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Have Yourself A Merry Little ChristmasSam Smith"
    },
    "Blue ChristmasElvis Presley": {
      "artist": "Elvis Presley",
      "song": "Blue Christmas",
      "rank": "77",
      "streams": "5185497",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Blue ChristmasElvis Presley"
    },
    "Holly Jolly ChristmasMichael Bublé": {
      "artist": "Michael Bublé",
      "song": "Holly Jolly Christmas",
      "rank": "156",
      "streams": "3354418",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Holly Jolly ChristmasMichael Bublé"
    },
    "Merry Christmas Everyone - RemasteredShakin' Stevens": {
      "artist": "Shakin' Stevens",
      "song": "Merry Christmas Everyone - Remastered",
      "rank": "82",
      "streams": "4997993",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Merry Christmas Everyone - RemasteredShakin' Stevens"
    },
    "Santa's Coming For UsSia": {
      "artist": "Sia",
      "song": "Santa's Coming For Us",
      "rank": "190",
      "streams": "3882073",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "Santa's Coming For UsSia"
    },
    "A Holly Jolly Christmas - Single VersionBurl Ives": {
      "artist": "Burl Ives",
      "song": "A Holly Jolly Christmas - Single Version",
      "rank": "140",
      "streams": "3545756",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "A Holly Jolly Christmas - Single VersionBurl Ives"
    },
    "Christmas LightsColdplay": {
      "artist": "Coldplay",
      "song": "Christmas Lights",
      "rank": "188",
      "streams": "2974733",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Christmas LightsColdplay"
    },
    "Step Into ChristmasElton John": {
      "artist": "Elton John",
      "song": "Step Into Christmas",
      "rank": "152",
      "streams": "3392730",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Step Into ChristmasElton John"
    },
    "Modern SlaveryHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Modern Slavery",
      "rank": "97",
      "streams": "6243472",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Modern SlaveryHuncho Jack"
    },
    "Santa Baby (with Henri René & His Orchestra)Eartha Kitt": {
      "artist": "Eartha Kitt",
      "song": "Santa Baby (with Henri René & His Orchestra)",
      "rank": "162",
      "streams": "3254640",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Santa Baby (with Henri René & His Orchestra)Eartha Kitt"
    },
    "Carol of the BellsMykola Dmytrovych Leontovych": {
      "artist": "Mykola Dmytrovych Leontovych",
      "song": "Carol of the Bells",
      "rank": "171",
      "streams": "3123441",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Carol of the BellsMykola Dmytrovych Leontovych"
    },
    "Black & ChineseHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Black & Chinese",
      "rank": "106",
      "streams": "5850227",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Black & ChineseHuncho Jack"
    },
    "White Christmas (Duet With Shania Twain)Michael Bublé": {
      "artist": "Michael Bublé",
      "song": "White Christmas (Duet With Shania Twain)",
      "rank": "142",
      "streams": "3512996",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "White Christmas (Duet With Shania Twain)Michael Bublé"
    },
    "It's Beginning to Look a Lot Like Christmas (with Mitchell Ayres & His Orchestra)Perry Como": {
      "artist": "Perry Como",
      "song": "It's Beginning to Look a Lot Like Christmas (with Mitchell Ayres & His Orchestra)",
      "rank": "139",
      "streams": "3556525",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "It's Beginning to Look a Lot Like Christmas (with Mitchell Ayres & His Orchestra)Perry Como"
    },
    "Underneath the TreeKelly Clarkson": {
      "artist": "Kelly Clarkson",
      "song": "Underneath the Tree",
      "rank": "116",
      "streams": "5609910",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Underneath the TreeKelly Clarkson"
    },
    "HallelujahPentatonix": {
      "artist": "Pentatonix",
      "song": "Hallelujah",
      "rank": "111",
      "streams": "4164977",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "HallelujahPentatonix"
    },
    "Eye 2 EyeHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Eye 2 Eye",
      "rank": "120",
      "streams": "5542140",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Eye 2 EyeHuncho Jack"
    },
    "My Only Wish (This Year)Britney Spears": {
      "artist": "Britney Spears",
      "song": "My Only Wish (This Year)",
      "rank": "185",
      "streams": "2982674",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "My Only Wish (This Year)Britney Spears"
    },
    "Christmas Time Is Here - VocalVince Guaraldi Trio": {
      "artist": "Vince Guaraldi Trio",
      "song": "Christmas Time Is Here - Vocal",
      "rank": "127",
      "streams": "5457722",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Christmas Time Is Here - VocalVince Guaraldi Trio"
    },
    "Winter WonderlandBing Crosby": {
      "artist": "Bing Crosby",
      "song": "Winter Wonderland",
      "rank": "131",
      "streams": "5380466",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Winter WonderlandBing Crosby"
    },
    "Run Rudolph Run - Single VersionChuck Berry": {
      "artist": "Chuck Berry",
      "song": "Run Rudolph Run - Single Version",
      "rank": "138",
      "streams": "3585299",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Run Rudolph Run - Single VersionChuck Berry"
    },
    "Jingle Bell Rock - Daryl's VersionDaryl Hall & John Oates": {
      "artist": "Daryl Hall & John Oates",
      "song": "Jingle Bell Rock - Daryl's Version",
      "rank": "145",
      "streams": "5082246",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Jingle Bell Rock - Daryl's VersionDaryl Hall & John Oates"
    },
    "Motorcycle PatchesHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Motorcycle Patches",
      "rank": "150",
      "streams": "4954148",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Motorcycle PatchesHuncho Jack"
    },
    "Santa BabyKylie Minogue": {
      "artist": "Kylie Minogue",
      "song": "Santa Baby",
      "rank": "154",
      "streams": "4855076",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Santa BabyKylie Minogue"
    },
    "Jingle Bells (feat. The Puppini Sisters)Michael Bublé": {
      "artist": "Michael Bublé",
      "song": "Jingle Bells (feat. The Puppini Sisters)",
      "rank": "173",
      "streams": "3094942",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Jingle Bells (feat. The Puppini Sisters)Michael Bublé"
    },
    "Little Saint Nick - 1991 RemixThe Beach Boys": {
      "artist": "The Beach Boys",
      "song": "Little Saint Nick - 1991 Remix",
      "rank": "160",
      "streams": "4771292",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Little Saint Nick - 1991 RemixThe Beach Boys"
    },
    "I'll Be HomeMeghan Trainor": {
      "artist": "Meghan Trainor",
      "song": "I'll Be Home",
      "rank": "161",
      "streams": "4725864",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "I'll Be HomeMeghan Trainor"
    },
    "Sleigh RideThe Ronettes": {
      "artist": "The Ronettes",
      "song": "Sleigh Ride",
      "rank": "162",
      "streams": "4712421",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Sleigh RideThe Ronettes"
    },
    "Huncho JackHuncho Jack": {
      "artist": "Huncho Jack",
      "song": "Huncho Jack",
      "rank": "167",
      "streams": "4597569",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Huncho JackHuncho Jack"
    },
    "Santa Claus Is Coming To TownMichael Bublé": {
      "artist": "Michael Bublé",
      "song": "Santa Claus Is Coming To Town",
      "rank": "166",
      "streams": "3194315",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Santa Claus Is Coming To TownMichael Bublé"
    },
    "Santa Claus Is Coming To TownThe Jackson 5": {
      "artist": "The Jackson 5",
      "song": "Santa Claus Is Coming To Town",
      "rank": "177",
      "streams": "4346028",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Santa Claus Is Coming To TownThe Jackson 5"
    },
    "Thank God It's Christmas - Non-Album SingleQueen": {
      "artist": "Queen",
      "song": "Thank God It's Christmas - Non-Album Single",
      "rank": "178",
      "streams": "4345690",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Thank God It's Christmas - Non-Album SingleQueen"
    },
    "Stay (with Alessia Cara)Zedd": {
      "artist": "Zedd",
      "song": "Stay (with Alessia Cara)",
      "rank": "22",
      "streams": "14217182",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Stay (with Alessia Cara)Zedd"
    },
    "Santa Claus Is Comin' to Town - Live at C.W. Post College, Greenvale, NY - December 1975Bruce Springsteen": {
      "artist": "Bruce Springsteen",
      "song": "Santa Claus Is Comin' to Town - Live at C.W. Post College, Greenvale, NY - December 1975",
      "rank": "159",
      "streams": "3271383",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Santa Claus Is Comin' to Town - Live at C.W. Post College, Greenvale, NY - December 1975Bruce Springsteen"
    },
    "Cold December NightMichael Bublé": {
      "artist": "Michael Bublé",
      "song": "Cold December Night",
      "rank": "190",
      "streams": "4140063",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Cold December NightMichael Bublé"
    },
    "Mary's Boy Child / Oh My LordBoney M.": {
      "artist": "Boney M.",
      "song": "Mary's Boy Child / Oh My Lord",
      "rank": "176",
      "streams": "3052833",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Mary's Boy Child / Oh My LordBoney M."
    },
    "Merry Christmas, Happy Holidays*NSYNC": {
      "artist": "*NSYNC",
      "song": "Merry Christmas, Happy Holidays",
      "rank": "200",
      "streams": "4012601",
      "country": "global",
      "week": "2017-12-22--2017-12-29",
      "songArtist": "Merry Christmas, Happy Holidays*NSYNC"
    },
    "BelieveEminem": {
      "artist": "Eminem",
      "song": "Believe",
      "rank": "37",
      "streams": "10428950",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "BelieveEminem"
    },
    "Like Home (feat. Alicia Keys)Eminem": {
      "artist": "Eminem",
      "song": "Like Home (feat. Alicia Keys)",
      "rank": "60",
      "streams": "8028606",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Like Home (feat. Alicia Keys)Eminem"
    },
    "Remind MeEminem": {
      "artist": "Eminem",
      "song": "Remind Me",
      "rank": "61",
      "streams": "7834978",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Remind MeEminem"
    },
    "Bad Husband (feat. X Ambassadors)Eminem": {
      "artist": "Eminem",
      "song": "Bad Husband (feat. X Ambassadors)",
      "rank": "74",
      "streams": "7127136",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Bad Husband (feat. X Ambassadors)Eminem"
    },
    "UntouchableEminem": {
      "artist": "Eminem",
      "song": "Untouchable",
      "rank": "159",
      "streams": "4435448",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "UntouchableEminem"
    },
    "Tragic Endings (feat. Skylar Grey)Eminem": {
      "artist": "Eminem",
      "song": "Tragic Endings (feat. Skylar Grey)",
      "rank": "92",
      "streams": "6377224",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Tragic Endings (feat. Skylar Grey)Eminem"
    },
    "Chloraseptic (feat. Phresher)Eminem": {
      "artist": "Eminem",
      "song": "Chloraseptic (feat. Phresher)",
      "rank": "98",
      "streams": "6216207",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Chloraseptic (feat. Phresher)Eminem"
    },
    "Nowhere Fast (feat. Kehlani)Eminem": {
      "artist": "Eminem",
      "song": "Nowhere Fast (feat. Kehlani)",
      "rank": "109",
      "streams": "5959793",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Nowhere Fast (feat. Kehlani)Eminem"
    },
    "FramedEminem": {
      "artist": "Eminem",
      "song": "Framed",
      "rank": "137",
      "streams": "5151530",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "FramedEminem"
    },
    "Revival (Interlude)Eminem": {
      "artist": "Eminem",
      "song": "Revival (Interlude)",
      "rank": "138",
      "streams": "5124354",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Revival (Interlude)Eminem"
    },
    "In Your HeadEminem": {
      "artist": "Eminem",
      "song": "In Your Head",
      "rank": "141",
      "streams": "5080606",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "In Your HeadEminem"
    },
    "OffendedEminem": {
      "artist": "Eminem",
      "song": "Offended",
      "rank": "150",
      "streams": "4992915",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "OffendedEminem"
    },
    "Need Me (feat. Pink)Eminem": {
      "artist": "Eminem",
      "song": "Need Me (feat. Pink)",
      "rank": "154",
      "streams": "4946549",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Need Me (feat. Pink)Eminem"
    },
    "CastleEminem": {
      "artist": "Eminem",
      "song": "Castle",
      "rank": "155",
      "streams": "4931650",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "CastleEminem"
    },
    "HeatEminem": {
      "artist": "Eminem",
      "song": "Heat",
      "rank": "157",
      "streams": "4821679",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "HeatEminem"
    },
    "AroseEminem": {
      "artist": "Eminem",
      "song": "Arose",
      "rank": "169",
      "streams": "4568268",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "AroseEminem"
    },
    "Go Legend (& Metro Boomin)Big Sean": {
      "artist": "Big Sean",
      "song": "Go Legend (& Metro Boomin)",
      "rank": "84",
      "streams": "6327785",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "Go Legend (& Metro Boomin)Big Sean"
    },
    "Perfect Symphony (Ed Sheeran & Andrea Bocelli)Ed Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Perfect Symphony (Ed Sheeran & Andrea Bocelli)",
      "rank": "191",
      "streams": "4220954",
      "country": "global",
      "week": "2017-12-15--2017-12-22",
      "songArtist": "Perfect Symphony (Ed Sheeran & Andrea Bocelli)Ed Sheeran"
    },
    "Him & IG-Eazy": {
      "artist": "G-Eazy",
      "song": "Him & I",
      "rank": "22",
      "streams": "12997274",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "Him & IG-Eazy"
    },
    "Jingle Bell RockAnita Kerr Singers": {
      "artist": "Anita Kerr Singers",
      "song": "Jingle Bell Rock",
      "rank": "179",
      "streams": "3546967",
      "country": "global",
      "week": "2017-11-24--2017-12-01",
      "songArtist": "Jingle Bell RockAnita Kerr Singers"
    },
    "Pull Up N Wreck (& Metro Boomin)Big Sean": {
      "artist": "Big Sean",
      "song": "Pull Up N Wreck (& Metro Boomin)",
      "rank": "166",
      "streams": "4277967",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "Pull Up N Wreck (& Metro Boomin)Big Sean"
    },
    "GorgeousTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Gorgeous",
      "rank": "11",
      "streams": "16903463",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "GorgeousTaylor Swift"
    },
    "Homemade Dynamite - REMIXLorde": {
      "artist": "Lorde",
      "song": "Homemade Dynamite - REMIX",
      "rank": "101",
      "streams": "5274326",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Homemade Dynamite - REMIXLorde"
    },
    "Feels Great (feat. Fetty Wap & CVBZ)Cheat Codes": {
      "artist": "Cheat Codes",
      "song": "Feels Great (feat. Fetty Wap & CVBZ)",
      "rank": "153",
      "streams": "3916839",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "Feels Great (feat. Fetty Wap & CVBZ)Cheat Codes"
    },
    "So Good (& Metro Boomin)Big Sean": {
      "artist": "Big Sean",
      "song": "So Good (& Metro Boomin)",
      "rank": "199",
      "streams": "3752647",
      "country": "global",
      "week": "2017-12-08--2017-12-15",
      "songArtist": "So Good (& Metro Boomin)Big Sean"
    },
    "QuestionsChris Brown": {
      "artist": "Chris Brown",
      "song": "Questions",
      "rank": "81",
      "streams": "5876563",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "QuestionsChris Brown"
    },
    "Bedroom FloorLiam Payne": {
      "artist": "Liam Payne",
      "song": "Bedroom Floor",
      "rank": "71",
      "streams": "7092315",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "Bedroom FloorLiam Payne"
    },
    "I Did Something BadTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "I Did Something Bad",
      "rank": "157",
      "streams": "4352536",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "I Did Something BadTaylor Swift"
    },
    "Get It Right (feat. MØ)Diplo": {
      "artist": "Diplo",
      "song": "Get It Right (feat. MØ)",
      "rank": "187",
      "streams": "3408403",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Get It Right (feat. MØ)Diplo"
    },
    "Miss YouLouis Tomlinson": {
      "artist": "Louis Tomlinson",
      "song": "Miss You",
      "rank": "165",
      "streams": "4280976",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "Miss YouLouis Tomlinson"
    },
    "NewDaya": {
      "artist": "Daya",
      "song": "New",
      "rank": "144",
      "streams": "4102295",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "NewDaya"
    },
    "PraySam Smith": {
      "artist": "Sam Smith",
      "song": "Pray",
      "rank": "46",
      "streams": "9335237",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "PraySam Smith"
    },
    "Don’t Blame MeTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Don’t Blame Me",
      "rank": "175",
      "streams": "4109768",
      "country": "global",
      "week": "2017-12-01--2017-12-08",
      "songArtist": "Don’t Blame MeTaylor Swift"
    },
    "Stranger ThingsKygo": {
      "artist": "Kygo",
      "song": "Stranger Things",
      "rank": "146",
      "streams": "4307641",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Stranger ThingsKygo"
    },
    "Call It What You WantTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Call It What You Want",
      "rank": "88",
      "streams": "5888671",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Call It What You WantTaylor Swift"
    },
    "Save That ShitLil Peep": {
      "artist": "Lil Peep",
      "song": "Save That Shit",
      "rank": "97",
      "streams": "5407284",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Save That ShitLil Peep"
    },
    "Como Antes (feat. Wisin)Yandel": {
      "artist": "Yandel",
      "song": "Como Antes (feat. Wisin)",
      "rank": "191",
      "streams": "3387012",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Como Antes (feat. Wisin)Yandel"
    },
    "Escápate ConmigoWisin": {
      "artist": "Wisin",
      "song": "Escápate Conmigo",
      "rank": "113",
      "streams": "4645135",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Escápate ConmigoWisin"
    },
    "LemonN.E.R.D": {
      "artist": "N.E.R.D",
      "song": "Lemon",
      "rank": "117",
      "streams": "4862512",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "LemonN.E.R.D"
    },
    "Rake It UpYo Gotti": {
      "artist": "Yo Gotti",
      "song": "Rake It Up",
      "rank": "159",
      "streams": "3470634",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Rake It UpYo Gotti"
    },
    "GPSMaluma": {
      "artist": "Maluma",
      "song": "GPS",
      "rank": "165",
      "streams": "3781901",
      "country": "global",
      "week": "2017-11-24--2017-12-01",
      "songArtist": "GPSMaluma"
    },
    "Fetish (feat. Gucci Mane)Selena Gomez": {
      "artist": "Selena Gomez",
      "song": "Fetish (feat. Gucci Mane)",
      "rank": "16",
      "streams": "15364403",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Fetish (feat. Gucci Mane)Selena Gomez"
    },
    "All NightSteve Aoki": {
      "artist": "Steve Aoki",
      "song": "All Night",
      "rank": "178",
      "streams": "3462507",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "All NightSteve Aoki"
    },
    "The ScientistColdplay": {
      "artist": "Coldplay",
      "song": "The Scientist",
      "rank": "200",
      "streams": "2632233",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "The ScientistColdplay"
    },
    "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]Anuel Aa": {
      "artist": "Anuel Aa",
      "song": "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]",
      "rank": "150",
      "streams": "3490814",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Sola (Remix) [feat. Daddy Yankee, Wisin, Farruko, Zion & Lennox]Anuel Aa"
    },
    "The RaceTay-K": {
      "artist": "Tay-K",
      "song": "The Race",
      "rank": "175",
      "streams": "3434002",
      "country": "global",
      "week": "2017-09-01--2017-09-08",
      "songArtist": "The RaceTay-K"
    },
    "Pills & AutomobilesChris Brown": {
      "artist": "Chris Brown",
      "song": "Pills & Automobiles",
      "rank": "173",
      "streams": "3522917",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "Pills & AutomobilesChris Brown"
    },
    "La Formula (feat. Chris Jeday)De La Ghetto": {
      "artist": "De La Ghetto",
      "song": "La Formula (feat. Chris Jeday)",
      "rank": "180",
      "streams": "3507855",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "La Formula (feat. Chris Jeday)De La Ghetto"
    },
    "Love YourselfJustin Bieber": {
      "artist": "Justin Bieber",
      "song": "Love Yourself",
      "rank": "74",
      "streams": "5262534",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Love YourselfJustin Bieber"
    },
    "The Way Life Goes (feat. Nicki Minaj & Oh Wonder) - RemixLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "The Way Life Goes (feat. Nicki Minaj & Oh Wonder) - Remix",
      "rank": "158",
      "streams": "3916937",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "The Way Life Goes (feat. Nicki Minaj & Oh Wonder) - RemixLil Uzi Vert"
    },
    "MagnoliaPlayboi Carti": {
      "artist": "Playboi Carti",
      "song": "Magnolia",
      "rank": "165",
      "streams": "3618266",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "MagnoliaPlayboi Carti"
    },
    "OKRobin Schulz": {
      "artist": "Robin Schulz",
      "song": "OK",
      "rank": "125",
      "streams": "4495771",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "OKRobin Schulz"
    },
    "Benz Truck - геликLil Peep": {
      "artist": "Lil Peep",
      "song": "Benz Truck - гелик",
      "rank": "142",
      "streams": "4348390",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Benz Truck - геликLil Peep"
    },
    "Awful ThingsLil Peep": {
      "artist": "Lil Peep",
      "song": "Awful Things",
      "rank": "158",
      "streams": "3925527",
      "country": "global",
      "week": "2017-11-17--2017-11-24",
      "songArtist": "Awful ThingsLil Peep"
    },
    "Body Like A Back RoadSam Hunt": {
      "artist": "Sam Hunt",
      "song": "Body Like A Back Road",
      "rank": "148",
      "streams": "3632630",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Body Like A Back RoadSam Hunt"
    },
    "BurningSam Smith": {
      "artist": "Sam Smith",
      "song": "Burning",
      "rank": "143",
      "streams": "3996711",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "BurningSam Smith"
    },
    "The Race22 Savage": {
      "artist": "22 Savage",
      "song": "The Race",
      "rank": "200",
      "streams": "3283936",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "The Race22 Savage"
    },
    "If I'm LuckyJason Derulo": {
      "artist": "Jason Derulo",
      "song": "If I'm Lucky",
      "rank": "82",
      "streams": "5984377",
      "country": "global",
      "week": "2017-09-01--2017-09-08",
      "songArtist": "If I'm LuckyJason Derulo"
    },
    "Relationship (feat. Future)Young Thug": {
      "artist": "Young Thug",
      "song": "Relationship (feat. Future)",
      "rank": "198",
      "streams": "3152442",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Relationship (feat. Future)Young Thug"
    },
    "Krippy KushFarruko": {
      "artist": "Farruko",
      "song": "Krippy Kush",
      "rank": "94",
      "streams": "5056734",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "Krippy KushFarruko"
    },
    "Most GirlsHailee Steinfeld": {
      "artist": "Hailee Steinfeld",
      "song": "Most Girls",
      "rank": "173",
      "streams": "3351560",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "Most GirlsHailee Steinfeld"
    },
    "Treat You BetterShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Treat You Better",
      "rank": "30",
      "streams": "9168864",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Treat You BetterShawn Mendes"
    },
    "PrayingKesha": {
      "artist": "Kesha",
      "song": "Praying",
      "rank": "49",
      "streams": "8961260",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "PrayingKesha"
    },
    "iSpy (feat. Lil Yachty)KYLE": {
      "artist": "KYLE",
      "song": "iSpy (feat. Lil Yachty)",
      "rank": "186",
      "streams": "2979074",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "iSpy (feat. Lil Yachty)KYLE"
    },
    "Si Tú La VesNicky Jam": {
      "artist": "Nicky Jam",
      "song": "Si Tú La Ves",
      "rank": "196",
      "streams": "3142274",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "Si Tú La VesNicky Jam"
    },
    "MalibuMiley Cyrus": {
      "artist": "Miley Cyrus",
      "song": "Malibu",
      "rank": "9",
      "streams": "21377349",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "MalibuMiley Cyrus"
    },
    "Homemade Dynamite (Feat. Khalid, Post Malone & SZA) - REMIXLorde": {
      "artist": "Lorde",
      "song": "Homemade Dynamite (Feat. Khalid, Post Malone & SZA) - REMIX",
      "rank": "62",
      "streams": "7349843",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Homemade Dynamite (Feat. Khalid, Post Malone & SZA) - REMIXLorde"
    },
    "One Last SongSam Smith": {
      "artist": "Sam Smith",
      "song": "One Last Song",
      "rank": "149",
      "streams": "4233214",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "One Last SongSam Smith"
    },
    "Say It FirstSam Smith": {
      "artist": "Sam Smith",
      "song": "Say It First",
      "rank": "166",
      "streams": "3719226",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Say It FirstSam Smith"
    },
    "Sauce It UpLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "Sauce It Up",
      "rank": "83",
      "streams": "6157406",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Sauce It UpLil Uzi Vert"
    },
    "I'm Not The Only OneSam Smith": {
      "artist": "Sam Smith",
      "song": "I'm Not The Only One",
      "rank": "188",
      "streams": "3198663",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "I'm Not The Only OneSam Smith"
    },
    "Love Galore (feat. Travis Scott)SZA": {
      "artist": "SZA",
      "song": "Love Galore (feat. Travis Scott)",
      "rank": "177",
      "streams": "3413202",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Love Galore (feat. Travis Scott)SZA"
    },
    "No PeaceSam Smith": {
      "artist": "Sam Smith",
      "song": "No Peace",
      "rank": "191",
      "streams": "3360643",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "No PeaceSam Smith"
    },
    "Rich Love (with Seeb)OneRepublic": {
      "artist": "OneRepublic",
      "song": "Rich Love (with Seeb)",
      "rank": "75",
      "streams": "6439691",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Rich Love (with Seeb)OneRepublic"
    },
    "Otra Vez (feat. J Balvin)Zion & Lennox": {
      "artist": "Zion & Lennox",
      "song": "Otra Vez (feat. J Balvin)",
      "rank": "53",
      "streams": "6449470",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Otra Vez (feat. J Balvin)Zion & Lennox"
    },
    "Pull Up N Wreck (With Metro Boomin)Big Sean": {
      "artist": "Big Sean",
      "song": "Pull Up N Wreck (With Metro Boomin)",
      "rank": "196",
      "streams": "3317469",
      "country": "global",
      "week": "2017-11-10--2017-11-17",
      "songArtist": "Pull Up N Wreck (With Metro Boomin)Big Sean"
    },
    "It's A Vibe2 Chainz": {
      "artist": "2 Chainz",
      "song": "It's A Vibe",
      "rank": "123",
      "streams": "4528111",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "It's A Vibe2 Chainz"
    },
    "Too Good At Goodbyes - EditSam Smith": {
      "artist": "Sam Smith",
      "song": "Too Good At Goodbyes - Edit",
      "rank": "1",
      "streams": "30706135",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "Too Good At Goodbyes - EditSam Smith"
    },
    "Kids in LoveKygo": {
      "artist": "Kygo",
      "song": "Kids in Love",
      "rank": "61",
      "streams": "7677360",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "Kids in LoveKygo"
    },
    "Help Me Out (with Julia Michaels)Maroon 5": {
      "artist": "Maroon 5",
      "song": "Help Me Out (with Julia Michaels)",
      "rank": "88",
      "streams": "5727868",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "Help Me Out (with Julia Michaels)Maroon 5"
    },
    "Transportin'Kodak Black": {
      "artist": "Kodak Black",
      "song": "Transportin'",
      "rank": "185",
      "streams": "3263129",
      "country": "global",
      "week": "2017-09-08--2017-09-15",
      "songArtist": "Transportin'Kodak Black"
    },
    "do re mi (feat. Gucci Mane)Blackbear": {
      "artist": "Blackbear",
      "song": "do re mi (feat. Gucci Mane)",
      "rank": "179",
      "streams": "3159780",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "do re mi (feat. Gucci Mane)Blackbear"
    },
    "Patek WaterFuture": {
      "artist": "Future",
      "song": "Patek Water",
      "rank": "83",
      "streams": "6120267",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "Patek WaterFuture"
    },
    "Swish SwishKaty Perry": {
      "artist": "Katy Perry",
      "song": "Swish Swish",
      "rank": "53",
      "streams": "8698559",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "Swish SwishKaty Perry"
    },
    "Is That For MeAlesso": {
      "artist": "Alesso",
      "song": "Is That For Me",
      "rank": "121",
      "streams": "4562946",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "Is That For MeAlesso"
    },
    "What IfsKane Brown": {
      "artist": "Kane Brown",
      "song": "What Ifs",
      "rank": "174",
      "streams": "3614088",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "What IfsKane Brown"
    },
    "Know No Better (feat. Travis Scott, Camila Cabello & Quavo)Major Lazer": {
      "artist": "Major Lazer",
      "song": "Know No Better (feat. Travis Scott, Camila Cabello & Quavo)",
      "rank": "32",
      "streams": "12565784",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Know No Better (feat. Travis Scott, Camila Cabello & Quavo)Major Lazer"
    },
    "I Just Can'tR3HAB": {
      "artist": "R3HAB",
      "song": "I Just Can't",
      "rank": "175",
      "streams": "3577937",
      "country": "global",
      "week": "2017-09-29--2017-10-06",
      "songArtist": "I Just Can'tR3HAB"
    },
    "Crying in the ClubCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "Crying in the Club",
      "rank": "44",
      "streams": "10277382",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "Crying in the ClubCamila Cabello"
    },
    "Easy LoveLauv": {
      "artist": "Lauv",
      "song": "Easy Love",
      "rank": "136",
      "streams": "4189508",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "Easy LoveLauv"
    },
    "Ahora Me LlamaKarol G": {
      "artist": "Karol G",
      "song": "Ahora Me Llama",
      "rank": "199",
      "streams": "2971762",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "Ahora Me LlamaKarol G"
    },
    "Rap Saved Me21 Savage": {
      "artist": "21 Savage",
      "song": "Rap Saved Me",
      "rank": "192",
      "streams": "3365677",
      "country": "global",
      "week": "2017-10-27--2017-11-03",
      "songArtist": "Rap Saved Me21 Savage"
    },
    "Would You EverSkrillex": {
      "artist": "Skrillex",
      "song": "Would You Ever",
      "rank": "109",
      "streams": "4576424",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Would You EverSkrillex"
    },
    "LOYALTY. FEAT. RIHANNA.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "LOYALTY. FEAT. RIHANNA.",
      "rank": "8",
      "streams": "22640313",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "LOYALTY. FEAT. RIHANNA.Kendrick Lamar"
    },
    "Me Llamas (feat. Maluma) - RemixPiso 21": {
      "artist": "Piso 21",
      "song": "Me Llamas (feat. Maluma) - Remix",
      "rank": "189",
      "streams": "2974609",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Me Llamas (feat. Maluma) - RemixPiso 21"
    },
    "Solo DanceMartin Jensen": {
      "artist": "Martin Jensen",
      "song": "Solo Dance",
      "rank": "79",
      "streams": "5126414",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Solo DanceMartin Jensen"
    },
    "Feed Me DopeFuture": {
      "artist": "Future",
      "song": "Feed Me Dope",
      "rank": "121",
      "streams": "4592085",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "Feed Me DopeFuture"
    },
    "This TownNiall Horan": {
      "artist": "Niall Horan",
      "song": "This Town",
      "rank": "127",
      "streams": "3804828",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "This TownNiall Horan"
    },
    "DNABTS": {
      "artist": "BTS",
      "song": "DNA",
      "rank": "70",
      "streams": "6688783",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "DNABTS"
    },
    "Curve (feat. The Weeknd)Gucci Mane": {
      "artist": "Gucci Mane",
      "song": "Curve (feat. The Weeknd)",
      "rank": "87",
      "streams": "5743057",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Curve (feat. The Weeknd)Gucci Mane"
    },
    "Whiskey (feat. A$AP Rocky)Maroon 5": {
      "artist": "Maroon 5",
      "song": "Whiskey (feat. A$AP Rocky)",
      "rank": "172",
      "streams": "3675218",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "Whiskey (feat. A$AP Rocky)Maroon 5"
    },
    "La Rompe CorazonesDaddy Yankee": {
      "artist": "Daddy Yankee",
      "song": "La Rompe Corazones",
      "rank": "172",
      "streams": "3173183",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "La Rompe CorazonesDaddy Yankee"
    },
    "On The LooseNiall Horan": {
      "artist": "Niall Horan",
      "song": "On The Loose",
      "rank": "181",
      "streams": "3571602",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "On The LooseNiall Horan"
    },
    "Sigo ExtrañándoteJ Balvin": {
      "artist": "J Balvin",
      "song": "Sigo Extrañándote",
      "rank": "166",
      "streams": "3535958",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Sigo ExtrañándoteJ Balvin"
    },
    "StarvingHailee Steinfeld": {
      "artist": "Hailee Steinfeld",
      "song": "Starving",
      "rank": "22",
      "streams": "10932500",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "StarvingHailee Steinfeld"
    },
    "No CapFuture": {
      "artist": "Future",
      "song": "No Cap",
      "rank": "199",
      "streams": "3345887",
      "country": "global",
      "week": "2017-10-20--2017-10-27",
      "songArtist": "No CapFuture"
    },
    "RevengeP!nk": {
      "artist": "P!nk",
      "song": "Revenge",
      "rank": "125",
      "streams": "4476100",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "RevengeP!nk"
    },
    "Beautiful TraumaP!nk": {
      "artist": "P!nk",
      "song": "Beautiful Trauma",
      "rank": "154",
      "streams": "3909916",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "Beautiful TraumaP!nk"
    },
    "The Last Of The Real OnesFall Out Boy": {
      "artist": "Fall Out Boy",
      "song": "The Last Of The Real Ones",
      "rank": "195",
      "streams": "3403589",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "The Last Of The Real OnesFall Out Boy"
    },
    "AgainNoah Cyrus": {
      "artist": "Noah Cyrus",
      "song": "Again",
      "rank": "185",
      "streams": "3508716",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "AgainNoah Cyrus"
    },
    "In The EndLinkin Park": {
      "artist": "Linkin Park",
      "song": "In The End",
      "rank": "22",
      "streams": "13819298",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "In The EndLinkin Park"
    },
    "High EndChris Brown": {
      "artist": "Chris Brown",
      "song": "High End",
      "rank": "193",
      "streams": "3336413",
      "country": "global",
      "week": "2017-10-13--2017-10-20",
      "songArtist": "High EndChris Brown"
    },
    "wokeuplikethis*Playboi Carti": {
      "artist": "Playboi Carti",
      "song": "wokeuplikethis*",
      "rank": "173",
      "streams": "3481729",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "wokeuplikethis*Playboi Carti"
    },
    "Now Or NeverHalsey": {
      "artist": "Halsey",
      "song": "Now Or Never",
      "rank": "50",
      "streams": "9090097",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Now Or NeverHalsey"
    },
    "SignsDrake": {
      "artist": "Drake",
      "song": "Signs",
      "rank": "26",
      "streams": "13782201",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "SignsDrake"
    },
    "The SpectreAlan Walker": {
      "artist": "Alan Walker",
      "song": "The Spectre",
      "rank": "187",
      "streams": "3468880",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "The SpectreAlan Walker"
    },
    "First TimeKygo": {
      "artist": "Kygo",
      "song": "First Time",
      "rank": "31",
      "streams": "11953548",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "First TimeKygo"
    },
    "OMGCamila Cabello": {
      "artist": "Camila Cabello",
      "song": "OMG",
      "rank": "90",
      "streams": "5159156",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "OMGCamila Cabello"
    },
    "Lose Yourself - Soundtrack VersionEminem": {
      "artist": "Eminem",
      "song": "Lose Yourself - Soundtrack Version",
      "rank": "171",
      "streams": "2926239",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Lose Yourself - Soundtrack VersionEminem"
    },
    "BossLil Pump": {
      "artist": "Lil Pump",
      "song": "Boss",
      "rank": "177",
      "streams": "3592368",
      "country": "global",
      "week": "2017-10-06--2017-10-13",
      "songArtist": "BossLil Pump"
    },
    "InstructionJax Jones": {
      "artist": "Jax Jones",
      "song": "Instruction",
      "rank": "128",
      "streams": "4338223",
      "country": "global",
      "week": "2017-09-29--2017-10-06",
      "songArtist": "InstructionJax Jones"
    },
    "Me EnamoréShakira": {
      "artist": "Shakira",
      "song": "Me Enamoré",
      "rank": "145",
      "streams": "3884494",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Me EnamoréShakira"
    },
    "Chantaje (feat. Maluma)Shakira": {
      "artist": "Shakira",
      "song": "Chantaje (feat. Maluma)",
      "rank": "18",
      "streams": "12104974",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Chantaje (feat. Maluma)Shakira"
    },
    "Bad LiarSelena Gomez": {
      "artist": "Selena Gomez",
      "song": "Bad Liar",
      "rank": "185",
      "streams": "3343123",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Bad LiarSelena Gomez"
    },
    "Perplexing PegasusRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Perplexing Pegasus",
      "rank": "84",
      "streams": "5368147",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "Perplexing PegasusRae Sremmurd"
    },
    "UnforgettableThomas Rhett": {
      "artist": "Thomas Rhett",
      "song": "Unforgettable",
      "rank": "159",
      "streams": "3601976",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "UnforgettableThomas Rhett"
    },
    "Younger NowMiley Cyrus": {
      "artist": "Miley Cyrus",
      "song": "Younger Now",
      "rank": "121",
      "streams": "4464559",
      "country": "global",
      "week": "2017-08-18--2017-08-25",
      "songArtist": "Younger NowMiley Cyrus"
    },
    "Sua Cara (feat. Anitta & Pabllo Vittar)Major Lazer": {
      "artist": "Major Lazer",
      "song": "Sua Cara (feat. Anitta & Pabllo Vittar)",
      "rank": "108",
      "streams": "4638339",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Sua Cara (feat. Anitta & Pabllo Vittar)Major Lazer"
    },
    "Came Here for LoveSigala": {
      "artist": "Sigala",
      "song": "Came Here for Love",
      "rank": "194",
      "streams": "3137110",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Came Here for LoveSigala"
    },
    "MercyShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Mercy",
      "rank": "25",
      "streams": "10507024",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "MercyShawn Mendes"
    },
    "El AmanteNicky Jam": {
      "artist": "Nicky Jam",
      "song": "El Amante",
      "rank": "70",
      "streams": "5429512",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "El AmanteNicky Jam"
    },
    "Tunnel VisionKodak Black": {
      "artist": "Kodak Black",
      "song": "Tunnel Vision",
      "rank": "102",
      "streams": "4773972",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Tunnel VisionKodak Black"
    },
    "Free Fallin'Tom Petty": {
      "artist": "Tom Petty",
      "song": "Free Fallin'",
      "rank": "197",
      "streams": "3273724",
      "country": "global",
      "week": "2017-09-29--2017-10-06",
      "songArtist": "Free Fallin'Tom Petty"
    },
    "Bounce BackBig Sean": {
      "artist": "Big Sean",
      "song": "Bounce Back",
      "rank": "63",
      "streams": "5581496",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Bounce BackBig Sean"
    },
    "RainThe Script": {
      "artist": "The Script",
      "song": "Rain",
      "rank": "159",
      "streams": "3801890",
      "country": "global",
      "week": "2017-09-01--2017-09-08",
      "songArtist": "RainThe Script"
    },
    "Super FarLANY": {
      "artist": "LANY",
      "song": "Super Far",
      "rank": "148",
      "streams": "3932715",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Super FarLANY"
    },
    "Instruction (feat. Demi Lovato & Stefflon Don)Jax Jones": {
      "artist": "Jax Jones",
      "song": "Instruction (feat. Demi Lovato & Stefflon Don)",
      "rank": "173",
      "streams": "3527903",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Instruction (feat. Demi Lovato & Stefflon Don)Jax Jones"
    },
    "Go GoBTS": {
      "artist": "BTS",
      "song": "Go Go",
      "rank": "150",
      "streams": "3953532",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "Go GoBTS"
    },
    "Best Of MeBTS": {
      "artist": "BTS",
      "song": "Best Of Me",
      "rank": "161",
      "streams": "3757153",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "Best Of MeBTS"
    },
    "Marmalade (feat. Lil Yachty)Macklemore": {
      "artist": "Macklemore",
      "song": "Marmalade (feat. Lil Yachty)",
      "rank": "176",
      "streams": "3191737",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "Marmalade (feat. Lil Yachty)Macklemore"
    },
    "MIC DropBTS": {
      "artist": "BTS",
      "song": "MIC Drop",
      "rank": "185",
      "streams": "3482941",
      "country": "global",
      "week": "2017-09-22--2017-09-29",
      "songArtist": "MIC DropBTS"
    },
    "Get Low (with Liam Payne)Zedd": {
      "artist": "Zedd",
      "song": "Get Low (with Liam Payne)",
      "rank": "51",
      "streams": "8886245",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Get Low (with Liam Payne)Zedd"
    },
    "Summer AirItaloBrothers": {
      "artist": "ItaloBrothers",
      "song": "Summer Air",
      "rank": "173",
      "streams": "3416785",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Summer AirItaloBrothers"
    },
    "Call On Me - Ryan Riback Extended RemixStarley": {
      "artist": "Starley",
      "song": "Call On Me - Ryan Riback Extended Remix",
      "rank": "17",
      "streams": "12309223",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Call On Me - Ryan Riback Extended RemixStarley"
    },
    "SUBEME LA RADIOEnrique Iglesias": {
      "artist": "Enrique Iglesias",
      "song": "SUBEME LA RADIO",
      "rank": "58",
      "streams": "6806240",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "SUBEME LA RADIOEnrique Iglesias"
    },
    "Think Before I TalkAstrid S": {
      "artist": "Astrid S",
      "song": "Think Before I Talk",
      "rank": "190",
      "streams": "3387382",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Think Before I TalkAstrid S"
    },
    "Complicated (feat. Kiiara)Dimitri Vegas & Like Mike": {
      "artist": "Dimitri Vegas & Like Mike",
      "song": "Complicated (feat. Kiiara)",
      "rank": "140",
      "streams": "3682933",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Complicated (feat. Kiiara)Dimitri Vegas & Like Mike"
    },
    "BesándotePiso 21": {
      "artist": "Piso 21",
      "song": "Besándote",
      "rank": "198",
      "streams": "3072322",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "BesándotePiso 21"
    },
    "WhySabrina Carpenter": {
      "artist": "Sabrina Carpenter",
      "song": "Why",
      "rank": "175",
      "streams": "3213467",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "WhySabrina Carpenter"
    },
    "No ComplaintsMetro Boomin": {
      "artist": "Metro Boomin",
      "song": "No Complaints",
      "rank": "96",
      "streams": "5230323",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "No ComplaintsMetro Boomin"
    },
    "Side To SideAriana Grande": {
      "artist": "Ariana Grande",
      "song": "Side To Side",
      "rank": "19",
      "streams": "11964458",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Side To SideAriana Grande"
    },
    "Fake LoveDrake": {
      "artist": "Drake",
      "song": "Fake Love",
      "rank": "8",
      "streams": "16629189",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Fake LoveDrake"
    },
    "dimpleBTS": {
      "artist": "BTS",
      "song": "dimple",
      "rank": "197",
      "streams": "3258938",
      "country": "global",
      "week": "2017-09-15--2017-09-22",
      "songArtist": "dimpleBTS"
    },
    "T-ShirtMigos": {
      "artist": "Migos",
      "song": "T-Shirt",
      "rank": "138",
      "streams": "3593218",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "T-ShirtMigos"
    },
    "DownFifth Harmony": {
      "artist": "Fifth Harmony",
      "song": "Down",
      "rank": "56",
      "streams": "7689791",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "DownFifth Harmony"
    },
    "Hey Ma (with Pitbull & J Balvin feat. Camila Cabello) - Spanish VersionPitbull": {
      "artist": "Pitbull",
      "song": "Hey Ma (with Pitbull & J Balvin feat. Camila Cabello) - Spanish Version",
      "rank": "155",
      "streams": "3742417",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "Hey Ma (with Pitbull & J Balvin feat. Camila Cabello) - Spanish VersionPitbull"
    },
    "In the Name of LoveMartin Garrix": {
      "artist": "Martin Garrix",
      "song": "In the Name of Love",
      "rank": "16",
      "streams": "12854288",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "In the Name of LoveMartin Garrix"
    },
    "do re miBlackbear": {
      "artist": "Blackbear",
      "song": "do re mi",
      "rank": "175",
      "streams": "3544617",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "do re miBlackbear"
    },
    "FadedAlan Walker": {
      "artist": "Alan Walker",
      "song": "Faded",
      "rank": "72",
      "streams": "5324718",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "FadedAlan Walker"
    },
    "You Don't Know Me - Radio EditJax Jones": {
      "artist": "Jax Jones",
      "song": "You Don't Know Me - Radio Edit",
      "rank": "192",
      "streams": "2672408",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "You Don't Know Me - Radio EditJax Jones"
    },
    "Loca (feat. Cali Y El Dandee)Maite Perroni": {
      "artist": "Maite Perroni",
      "song": "Loca (feat. Cali Y El Dandee)",
      "rank": "194",
      "streams": "3072434",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Loca (feat. Cali Y El Dandee)Maite Perroni"
    },
    "Cold Water (feat. Justin Bieber & MØ)Major Lazer": {
      "artist": "Major Lazer",
      "song": "Cold Water (feat. Justin Bieber & MØ)",
      "rank": "14",
      "streams": "13143341",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Cold Water (feat. Justin Bieber & MØ)Major Lazer"
    },
    "XLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "X",
      "rank": "103",
      "streams": "5437998",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "XLil Uzi Vert"
    },
    "444+222Lil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "444+222",
      "rank": "88",
      "streams": "5940470",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "444+222Lil Uzi Vert"
    },
    "BáilameNacho": {
      "artist": "Nacho",
      "song": "Báilame",
      "rank": "184",
      "streams": "3369777",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "BáilameNacho"
    },
    "Reggaetón Lento (Bailemos)CNCO": {
      "artist": "CNCO",
      "song": "Reggaetón Lento (Bailemos)",
      "rank": "32",
      "streams": "8223181",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Reggaetón Lento (Bailemos)CNCO"
    },
    "RollinCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Rollin",
      "rank": "43",
      "streams": "9812166",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "RollinCalvin Harris"
    },
    "I Took A Pill In Ibiza - Seeb RemixMike Posner": {
      "artist": "Mike Posner",
      "song": "I Took A Pill In Ibiza - Seeb Remix",
      "rank": "49",
      "streams": "7093486",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "I Took A Pill In Ibiza - Seeb RemixMike Posner"
    },
    "TuesdayBurak Yeter": {
      "artist": "Burak Yeter",
      "song": "Tuesday",
      "rank": "197",
      "streams": "2935351",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "TuesdayBurak Yeter"
    },
    "Bebe (feat. Anuel AA)Ozuna": {
      "artist": "Ozuna",
      "song": "Bebe (feat. Anuel AA)",
      "rank": "188",
      "streams": "3110765",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "Bebe (feat. Anuel AA)Ozuna"
    },
    "ExplícaleYandel": {
      "artist": "Yandel",
      "song": "Explícale",
      "rank": "197",
      "streams": "3100361",
      "country": "global",
      "week": "2017-09-01--2017-09-08",
      "songArtist": "ExplícaleYandel"
    },
    "OrlandoXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Orlando",
      "rank": "121",
      "streams": "4648148",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "OrlandoXXXTENTACION"
    },
    "He Like ThatFifth Harmony": {
      "artist": "Fifth Harmony",
      "song": "He Like That",
      "rank": "126",
      "streams": "4569816",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "He Like ThatFifth Harmony"
    },
    "Dead Inside (Interlude)XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Dead Inside (Interlude)",
      "rank": "129",
      "streams": "4496232",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Dead Inside (Interlude)XXXTENTACION"
    },
    "UnFazed (feat. The Weeknd)Lil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "UnFazed (feat. The Weeknd)",
      "rank": "133",
      "streams": "4443320",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "UnFazed (feat. The Weeknd)Lil Uzi Vert"
    },
    "Two®Lil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "Two®",
      "rank": "137",
      "streams": "4364462",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Two®Lil Uzi Vert"
    },
    "All My Love (feat. Conor Maynard)Cash Cash": {
      "artist": "Cash Cash",
      "song": "All My Love (feat. Conor Maynard)",
      "rank": "161",
      "streams": "3658048",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "All My Love (feat. Conor Maynard)Cash Cash"
    },
    "For RealLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "For Real",
      "rank": "155",
      "streams": "3996651",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "For RealLil Uzi Vert"
    },
    "Neon Guts (feat. Pharrell Williams)Lil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "Neon Guts (feat. Pharrell Williams)",
      "rank": "160",
      "streams": "3946801",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Neon Guts (feat. Pharrell Williams)Lil Uzi Vert"
    },
    "No Sleep LeakLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "No Sleep Leak",
      "rank": "173",
      "streams": "3729844",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "No Sleep LeakLil Uzi Vert"
    },
    "Ayala (Outro)XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Ayala (Outro)",
      "rank": "176",
      "streams": "3706781",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Ayala (Outro)XXXTENTACION"
    },
    "Two HighMoon Taxi": {
      "artist": "Moon Taxi",
      "song": "Two High",
      "rank": "181",
      "streams": "3271862",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "Two HighMoon Taxi"
    },
    "Dark QueenLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "Dark Queen",
      "rank": "180",
      "streams": "3635405",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Dark QueenLil Uzi Vert"
    },
    "Feelings MutualLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "Feelings Mutual",
      "rank": "195",
      "streams": "3323082",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Feelings MutualLil Uzi Vert"
    },
    "Walk On WaterThirty Seconds To Mars": {
      "artist": "Thirty Seconds To Mars",
      "song": "Walk On Water",
      "rank": "199",
      "streams": "3278983",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "Walk On WaterThirty Seconds To Mars"
    },
    "The ExplanationXXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "The Explanation",
      "rank": "200",
      "streams": "3275927",
      "country": "global",
      "week": "2017-08-25--2017-09-01",
      "songArtist": "The ExplanationXXXTENTACION"
    },
    "Tu FotoOzuna": {
      "artist": "Ozuna",
      "song": "Tu Foto",
      "rank": "189",
      "streams": "3204987",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "Tu FotoOzuna"
    },
    "4 AM2 Chainz": {
      "artist": "2 Chainz",
      "song": "4 AM",
      "rank": "146",
      "streams": "3856811",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "4 AM2 Chainz"
    },
    "Versace On The FloorBruno Mars": {
      "artist": "Bruno Mars",
      "song": "Versace On The Floor",
      "rank": "105",
      "streams": "4396780",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Versace On The FloorBruno Mars"
    },
    "SwangRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Swang",
      "rank": "197",
      "streams": "2900455",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SwangRae Sremmurd"
    },
    "Sun Comes Up (feat. James Arthur)Rudimental": {
      "artist": "Rudimental",
      "song": "Sun Comes Up (feat. James Arthur)",
      "rank": "195",
      "streams": "3045155",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Sun Comes Up (feat. James Arthur)Rudimental"
    },
    "BoysCharli XCX": {
      "artist": "Charli XCX",
      "song": "Boys",
      "rank": "113",
      "streams": "4286210",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "BoysCharli XCX"
    },
    "PortlandDrake": {
      "artist": "Drake",
      "song": "Portland",
      "rank": "13",
      "streams": "18483188",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "PortlandDrake"
    },
    "HeathensTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Heathens",
      "rank": "27",
      "streams": "10169963",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "HeathensTwenty One Pilots"
    },
    "The CureLady Gaga": {
      "artist": "Lady Gaga",
      "song": "The Cure",
      "rank": "74",
      "streams": "6937005",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "The CureLady Gaga"
    },
    "Ni Tú Ni Yo (feat. Gente de Zona)Jennifer Lopez": {
      "artist": "Jennifer Lopez",
      "song": "Ni Tú Ni Yo (feat. Gente de Zona)",
      "rank": "187",
      "streams": "3116210",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Ni Tú Ni Yo (feat. Gente de Zona)Jennifer Lopez"
    },
    "No VacancyOneRepublic": {
      "artist": "OneRepublic",
      "song": "No Vacancy",
      "rank": "176",
      "streams": "3345854",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "No VacancyOneRepublic"
    },
    "TiredAlan Walker": {
      "artist": "Alan Walker",
      "song": "Tired",
      "rank": "117",
      "streams": "4733356",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "TiredAlan Walker"
    },
    "Be MineOfenbach": {
      "artist": "Ofenbach",
      "song": "Be Mine",
      "rank": "189",
      "streams": "3185467",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "Be MineOfenbach"
    },
    "Stressed OutTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Stressed Out",
      "rank": "65",
      "streams": "5561301",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Stressed OutTwenty One Pilots"
    },
    "NumbLinkin Park": {
      "artist": "Linkin Park",
      "song": "Numb",
      "rank": "34",
      "streams": "11641834",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "NumbLinkin Park"
    },
    "ImitadoraRomeo Santos": {
      "artist": "Romeo Santos",
      "song": "Imitadora",
      "rank": "158",
      "streams": "3682558",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "ImitadoraRomeo Santos"
    },
    "AngelFifth Harmony": {
      "artist": "Fifth Harmony",
      "song": "Angel",
      "rank": "154",
      "streams": "3580700",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "AngelFifth Harmony"
    },
    "Friend Of Mine (feat. Vargas & Lagola)Avicii": {
      "artist": "Avicii",
      "song": "Friend Of Mine (feat. Vargas & Lagola)",
      "rank": "163",
      "streams": "3382486",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "Friend Of Mine (feat. Vargas & Lagola)Avicii"
    },
    "HunterGalantis": {
      "artist": "Galantis",
      "song": "Hunter",
      "rank": "196",
      "streams": "3164288",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "HunterGalantis"
    },
    "Alguien RoboSebastian Yatra": {
      "artist": "Sebastian Yatra",
      "song": "Alguien Robo",
      "rank": "164",
      "streams": "3572201",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "Alguien RoboSebastian Yatra"
    },
    "Heavy (feat. Kiiara)Linkin Park": {
      "artist": "Linkin Park",
      "song": "Heavy (feat. Kiiara)",
      "rank": "92",
      "streams": "5028269",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Heavy (feat. Kiiara)Linkin Park"
    },
    "El FarsanteDJ Jonathan": {
      "artist": "DJ Jonathan",
      "song": "El Farsante",
      "rank": "184",
      "streams": "3127801",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "El FarsanteDJ Jonathan"
    },
    "One Last TimeAriana Grande": {
      "artist": "Ariana Grande",
      "song": "One Last Time",
      "rank": "103",
      "streams": "5016232",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "One Last TimeAriana Grande"
    },
    "Reminder - RemixThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Reminder - Remix",
      "rank": "132",
      "streams": "3938878",
      "country": "global",
      "week": "2017-08-04--2017-08-11",
      "songArtist": "Reminder - RemixThe Weeknd"
    },
    "Hear Me NowAlok": {
      "artist": "Alok",
      "song": "Hear Me Now",
      "rank": "57",
      "streams": "6269293",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Hear Me NowAlok"
    },
    "What Would I Change It To (feat. AlunaGeorge)Avicii": {
      "artist": "Avicii",
      "song": "What Would I Change It To (feat. AlunaGeorge)",
      "rank": "197",
      "streams": "3025532",
      "country": "global",
      "week": "2017-08-11--2017-08-18",
      "songArtist": "What Would I Change It To (feat. AlunaGeorge)Avicii"
    },
    "ColdMaroon 5": {
      "artist": "Maroon 5",
      "song": "Cold",
      "rank": "29",
      "streams": "11487524",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "ColdMaroon 5"
    },
    "ParadinhaAnitta": {
      "artist": "Anitta",
      "song": "Paradinha",
      "rank": "153",
      "streams": "3729167",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "ParadinhaAnitta"
    },
    "How Far I'll Go - From \"Moana\"Alessia Cara": {
      "artist": "Alessia Cara",
      "song": "How Far I'll Go - From \"Moana\"",
      "rank": "56",
      "streams": "6273292",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "How Far I'll Go - From \"Moana\"Alessia Cara"
    },
    "Hot2TouchFelix Jaehn": {
      "artist": "Felix Jaehn",
      "song": "Hot2Touch",
      "rank": "149",
      "streams": "3774355",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Hot2TouchFelix Jaehn"
    },
    "WeakAJR": {
      "artist": "AJR",
      "song": "Weak",
      "rank": "146",
      "streams": "3465629",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "WeakAJR"
    },
    "Chained To The RhythmKaty Perry": {
      "artist": "Katy Perry",
      "song": "Chained To The Rhythm",
      "rank": "7",
      "streams": "20121568",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Chained To The RhythmKaty Perry"
    },
    "RideTwenty One Pilots": {
      "artist": "Twenty One Pilots",
      "song": "Ride",
      "rank": "54",
      "streams": "6394724",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "RideTwenty One Pilots"
    },
    "SafariJ Balvin": {
      "artist": "J Balvin",
      "song": "Safari",
      "rank": "44",
      "streams": "7286559",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SafariJ Balvin"
    },
    "RolexAyo & Teo": {
      "artist": "Ayo & Teo",
      "song": "Rolex",
      "rank": "153",
      "streams": "3806214",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "RolexAyo & Teo"
    },
    "Vente Pa' CaRicky Martin": {
      "artist": "Ricky Martin",
      "song": "Vente Pa' Ca",
      "rank": "52",
      "streams": "6588326",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Vente Pa' CaRicky Martin"
    },
    "ELEMENT.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "ELEMENT.",
      "rank": "10",
      "streams": "21911673",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "ELEMENT.Kendrick Lamar"
    },
    "Work from HomeFifth Harmony": {
      "artist": "Fifth Harmony",
      "song": "Work from Home",
      "rank": "69",
      "streams": "5426035",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Work from HomeFifth Harmony"
    },
    "What I've DoneLinkin Park": {
      "artist": "Linkin Park",
      "song": "What I've Done",
      "rank": "62",
      "streams": "7302737",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "What I've DoneLinkin Park"
    },
    "Learn To Let GoKesha": {
      "artist": "Kesha",
      "song": "Learn To Let Go",
      "rank": "176",
      "streams": "3211380",
      "country": "global",
      "week": "2017-07-28--2017-08-04",
      "songArtist": "Learn To Let GoKesha"
    },
    "One More LightLinkin Park": {
      "artist": "Linkin Park",
      "song": "One More Light",
      "rank": "89",
      "streams": "5511424",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "One More LightLinkin Park"
    },
    "Who Dat BoyTyler, The Creator": {
      "artist": "Tyler, The Creator",
      "song": "Who Dat Boy",
      "rank": "169",
      "streams": "3424032",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Who Dat BoyTyler, The Creator"
    },
    "Lust For Life (with The Weeknd)Lana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Lust For Life (with The Weeknd)",
      "rank": "105",
      "streams": "4935659",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Lust For Life (with The Weeknd)Lana Del Rey"
    },
    "Bon appétitKaty Perry": {
      "artist": "Katy Perry",
      "song": "Bon appétit",
      "rank": "54",
      "streams": "8898902",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "Bon appétitKaty Perry"
    },
    "SorryJustin Bieber": {
      "artist": "Justin Bieber",
      "song": "Sorry",
      "rank": "76",
      "streams": "5191994",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SorryJustin Bieber"
    },
    "DiveEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Dive",
      "rank": "11",
      "streams": "22553712",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "DiveEd Sheeran"
    },
    "TraicioneraSebastian Yatra": {
      "artist": "Sebastian Yatra",
      "song": "Traicionera",
      "rank": "91",
      "streams": "4805621",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "TraicioneraSebastian Yatra"
    },
    "Craving YouThomas Rhett": {
      "artist": "Thomas Rhett",
      "song": "Craving You",
      "rank": "199",
      "streams": "3018667",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Craving YouThomas Rhett"
    },
    "Numb / EncoreJAY Z": {
      "artist": "JAY Z",
      "song": "Numb / Encore",
      "rank": "87",
      "streams": "5602548",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Numb / EncoreJAY Z"
    },
    "Summer Bummer (feat. A$AP Rocky & Playboi Carti)Lana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Summer Bummer (feat. A$AP Rocky & Playboi Carti)",
      "rank": "100",
      "streams": "5156621",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Summer Bummer (feat. A$AP Rocky & Playboi Carti)Lana Del Rey"
    },
    "One Step CloserLinkin Park": {
      "artist": "Linkin Park",
      "song": "One Step Closer",
      "rank": "104",
      "streams": "5029123",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "One Step CloserLinkin Park"
    },
    "Good Goodbye (feat. Pusha T and Stormzy)Linkin Park": {
      "artist": "Linkin Park",
      "song": "Good Goodbye (feat. Pusha T and Stormzy)",
      "rank": "109",
      "streams": "4879064",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Good Goodbye (feat. Pusha T and Stormzy)Linkin Park"
    },
    "CrawlingLinkin Park": {
      "artist": "Linkin Park",
      "song": "Crawling",
      "rank": "116",
      "streams": "4541242",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "CrawlingLinkin Park"
    },
    "Battle SymphonyLinkin Park": {
      "artist": "Linkin Park",
      "song": "Battle Symphony",
      "rank": "119",
      "streams": "4460984",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Battle SymphonyLinkin Park"
    },
    "13 BeachesLana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "13 Beaches",
      "rank": "125",
      "streams": "4239120",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "13 BeachesLana Del Rey"
    },
    "Bleed It OutLinkin Park": {
      "artist": "Linkin Park",
      "song": "Bleed It Out",
      "rank": "130",
      "streams": "4181519",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Bleed It OutLinkin Park"
    },
    "LoveLana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Love",
      "rank": "62",
      "streams": "6326802",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "LoveLana Del Rey"
    },
    "Somewhere I BelongLinkin Park": {
      "artist": "Linkin Park",
      "song": "Somewhere I Belong",
      "rank": "138",
      "streams": "4067269",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Somewhere I BelongLinkin Park"
    },
    "Talking to MyselfLinkin Park": {
      "artist": "Linkin Park",
      "song": "Talking to Myself",
      "rank": "140",
      "streams": "4021487",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Talking to MyselfLinkin Park"
    },
    "FaintLinkin Park": {
      "artist": "Linkin Park",
      "song": "Faint",
      "rank": "142",
      "streams": "3999505",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "FaintLinkin Park"
    },
    "See You AgainTyler, The Creator": {
      "artist": "Tyler, The Creator",
      "song": "See You Again",
      "rank": "144",
      "streams": "3995852",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "See You AgainTyler, The Creator"
    },
    "CherryLana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Cherry",
      "rank": "145",
      "streams": "3992595",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "CherryLana Del Rey"
    },
    "PapercutLinkin Park": {
      "artist": "Linkin Park",
      "song": "Papercut",
      "rank": "149",
      "streams": "3929870",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "PapercutLinkin Park"
    },
    "Groupie Love (feat. A$AP Rocky)Lana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Groupie Love (feat. A$AP Rocky)",
      "rank": "157",
      "streams": "3685086",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Groupie Love (feat. A$AP Rocky)Lana Del Rey"
    },
    "911 / Mr. LonelyTyler, The Creator": {
      "artist": "Tyler, The Creator",
      "song": "911 / Mr. Lonely",
      "rank": "162",
      "streams": "3532557",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "911 / Mr. LonelyTyler, The Creator"
    },
    "Leave Out All The RestLinkin Park": {
      "artist": "Linkin Park",
      "song": "Leave Out All The Rest",
      "rank": "164",
      "streams": "3642188",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Leave Out All The RestLinkin Park"
    },
    "BURN IT DOWNLinkin Park": {
      "artist": "Linkin Park",
      "song": "BURN IT DOWN",
      "rank": "177",
      "streams": "3448519",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "BURN IT DOWNLinkin Park"
    },
    "Breaking The HabitLinkin Park": {
      "artist": "Linkin Park",
      "song": "Breaking The Habit",
      "rank": "178",
      "streams": "3440595",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Breaking The HabitLinkin Park"
    },
    "White MustangLana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "White Mustang",
      "rank": "179",
      "streams": "3413387",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "White MustangLana Del Rey"
    },
    "BoredomTyler, The Creator": {
      "artist": "Tyler, The Creator",
      "song": "Boredom",
      "rank": "180",
      "streams": "3396784",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "BoredomTyler, The Creator"
    },
    "Millionär187 Strassenbande": {
      "artist": "187 Strassenbande",
      "song": "Millionär",
      "rank": "192",
      "streams": "3282104",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Millionär187 Strassenbande"
    },
    "Nobody Can Save MeLinkin Park": {
      "artist": "Linkin Park",
      "song": "Nobody Can Save Me",
      "rank": "194",
      "streams": "3274964",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Nobody Can Save MeLinkin Park"
    },
    "Beautiful People Beautiful Problems (feat. Stevie Nicks)Lana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Beautiful People Beautiful Problems (feat. Stevie Nicks)",
      "rank": "198",
      "streams": "3236589",
      "country": "global",
      "week": "2017-07-21--2017-07-28",
      "songArtist": "Beautiful People Beautiful Problems (feat. Stevie Nicks)Lana Del Rey"
    },
    "Numb21 Savage": {
      "artist": "21 Savage",
      "song": "Numb",
      "rank": "118",
      "streams": "4259985",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Numb21 Savage"
    },
    "Reminding MeShawn Hook": {
      "artist": "Shawn Hook",
      "song": "Reminding Me",
      "rank": "111",
      "streams": "4706204",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Reminding MeShawn Hook"
    },
    "Homemade DynamiteLorde": {
      "artist": "Lorde",
      "song": "Homemade Dynamite",
      "rank": "91",
      "streams": "5607945",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Homemade DynamiteLorde"
    },
    "Nights With YouMØ": {
      "artist": "MØ",
      "song": "Nights With You",
      "rank": "178",
      "streams": "3327751",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "Nights With YouMØ"
    },
    "Good Life (with G-Eazy & Kehlani)G-Eazy": {
      "artist": "G-Eazy",
      "song": "Good Life (with G-Eazy & Kehlani)",
      "rank": "197",
      "streams": "3296438",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Good Life (with G-Eazy & Kehlani)G-Eazy"
    },
    "The Way I Are (Dance With Somebody) [feat. Lil Wayne]Bebe Rexha": {
      "artist": "Bebe Rexha",
      "song": "The Way I Are (Dance With Somebody) [feat. Lil Wayne]",
      "rank": "139",
      "streams": "4037502",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "The Way I Are (Dance With Somebody) [feat. Lil Wayne]Bebe Rexha"
    },
    "Can I Be HimJames Arthur": {
      "artist": "James Arthur",
      "song": "Can I Be Him",
      "rank": "159",
      "streams": "3636823",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Can I Be HimJames Arthur"
    },
    "Green LightLorde": {
      "artist": "Lorde",
      "song": "Green Light",
      "rank": "27",
      "streams": "15831659",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Green LightLorde"
    },
    "This Is What You Came ForCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "This Is What You Came For",
      "rank": "62",
      "streams": "5682904",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "This Is What You Came ForCalvin Harris"
    },
    "Te Quiero Pa´MiDon Omar": {
      "artist": "Don Omar",
      "song": "Te Quiero Pa´Mi",
      "rank": "195",
      "streams": "2763227",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Te Quiero Pa´MiDon Omar"
    },
    "Famous21 Savage": {
      "artist": "21 Savage",
      "song": "Famous",
      "rank": "179",
      "streams": "3214643",
      "country": "global",
      "week": "2017-07-07--2017-07-14",
      "songArtist": "Famous21 Savage"
    },
    "Don't Wanna KnowMaroon 5": {
      "artist": "Maroon 5",
      "song": "Don't Wanna Know",
      "rank": "5",
      "streams": "16966668",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Don't Wanna KnowMaroon 5"
    },
    "Still Got TimeZAYN": {
      "artist": "ZAYN",
      "song": "Still Got Time",
      "rank": "46",
      "streams": "10037227",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Still Got TimeZAYN"
    },
    "Si Tu Novio Te Deja SolaJ Balvin": {
      "artist": "J Balvin",
      "song": "Si Tu Novio Te Deja Sola",
      "rank": "187",
      "streams": "3163562",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Si Tu Novio Te Deja SolaJ Balvin"
    },
    "September SongJP Cooper": {
      "artist": "JP Cooper",
      "song": "September Song",
      "rank": "169",
      "streams": "2970487",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "September SongJP Cooper"
    },
    "Perfect StrangersJonas Blue": {
      "artist": "Jonas Blue",
      "song": "Perfect Strangers",
      "rank": "61",
      "streams": "5874412",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Perfect StrangersJonas Blue"
    },
    "Lean On (feat. MØ & DJ Snake)Major Lazer": {
      "artist": "Major Lazer",
      "song": "Lean On (feat. MØ & DJ Snake)",
      "rank": "135",
      "streams": "3631857",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Lean On (feat. MØ & DJ Snake)Major Lazer"
    },
    "No LieSean Paul": {
      "artist": "Sean Paul",
      "song": "No Lie",
      "rank": "142",
      "streams": "3424555",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "No LieSean Paul"
    },
    "PandaDesiigner": {
      "artist": "Desiigner",
      "song": "Panda",
      "rank": "73",
      "streams": "5286319",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "PandaDesiigner"
    },
    "VacacionesWisin": {
      "artist": "Wisin",
      "song": "Vacaciones",
      "rank": "178",
      "streams": "3051423",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "VacacionesWisin"
    },
    "Love On The BrainRihanna": {
      "artist": "Rihanna",
      "song": "Love On The Brain",
      "rank": "161",
      "streams": "3259649",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Love On The BrainRihanna"
    },
    "GyalchesterDrake": {
      "artist": "Drake",
      "song": "Gyalchester",
      "rank": "23",
      "streams": "15030117",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "GyalchesterDrake"
    },
    "Broccoli (feat. Lil Yachty)DRAM": {
      "artist": "DRAM",
      "song": "Broccoli (feat. Lil Yachty)",
      "rank": "48",
      "streams": "7143405",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Broccoli (feat. Lil Yachty)DRAM"
    },
    "Cash OutCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Cash Out",
      "rank": "110",
      "streams": "4412014",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Cash OutCalvin Harris"
    },
    "Don't Quit (feat. Travis Scott & Jeremih)DJ Khaled": {
      "artist": "DJ Khaled",
      "song": "Don't Quit (feat. Travis Scott & Jeremih)",
      "rank": "58",
      "streams": "7335678",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "Don't Quit (feat. Travis Scott & Jeremih)DJ Khaled"
    },
    "Prayers UpCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Prayers Up",
      "rank": "120",
      "streams": "4213019",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Prayers UpCalvin Harris"
    },
    "HeatstrokeCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Heatstroke",
      "rank": "64",
      "streams": "6825624",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "HeatstrokeCalvin Harris"
    },
    "Faking ItCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Faking It",
      "rank": "150",
      "streams": "3709561",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Faking ItCalvin Harris"
    },
    "Skrt On MeCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "Skrt On Me",
      "rank": "161",
      "streams": "3597699",
      "country": "global",
      "week": "2017-06-30--2017-07-07",
      "songArtist": "Skrt On MeCalvin Harris"
    },
    "Light It Up (feat. Nyla & Fuse ODG) - RemixMajor Lazer": {
      "artist": "Major Lazer",
      "song": "Light It Up (feat. Nyla & Fuse ODG) - Remix",
      "rank": "102",
      "streams": "4420554",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Light It Up (feat. Nyla & Fuse ODG) - RemixMajor Lazer"
    },
    "Ciao AdiosAnne-Marie": {
      "artist": "Anne-Marie",
      "song": "Ciao Adios",
      "rank": "188",
      "streams": "3462516",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Ciao AdiosAnne-Marie"
    },
    "Uh HuhJulia Michaels": {
      "artist": "Julia Michaels",
      "song": "Uh Huh",
      "rank": "182",
      "streams": "3267757",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Uh HuhJulia Michaels"
    },
    "TouchLittle Mix": {
      "artist": "Little Mix",
      "song": "Touch",
      "rank": "159",
      "streams": "3060671",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "TouchLittle Mix"
    },
    "Black BeatlesRae Sremmurd": {
      "artist": "Rae Sremmurd",
      "song": "Black Beatles",
      "rank": "6",
      "streams": "16831609",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Black BeatlesRae Sremmurd"
    },
    "Power (feat. Stormzy)Little Mix": {
      "artist": "Little Mix",
      "song": "Power (feat. Stormzy)",
      "rank": "193",
      "streams": "3227363",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Power (feat. Stormzy)Little Mix"
    },
    "I Don’t Know WhyImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "I Don’t Know Why",
      "rank": "94",
      "streams": "5429820",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "I Don’t Know WhyImagine Dragons"
    },
    "Walking The WireImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Walking The Wire",
      "rank": "153",
      "streams": "3827208",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Walking The WireImagine Dragons"
    },
    "I’ll Make It Up To YouImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "I’ll Make It Up To You",
      "rank": "137",
      "streams": "3971712",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "I’ll Make It Up To YouImagine Dragons"
    },
    "Rise UpImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Rise Up",
      "rank": "140",
      "streams": "3940263",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "Rise UpImagine Dragons"
    },
    "Quit (feat. Ariana Grande)Cashmere Cat": {
      "artist": "Cashmere Cat",
      "song": "Quit (feat. Ariana Grande)",
      "rank": "161",
      "streams": "3666492",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "Quit (feat. Ariana Grande)Cashmere Cat"
    },
    "Perfect PlacesLorde": {
      "artist": "Lorde",
      "song": "Perfect Places",
      "rank": "93",
      "streams": "5391134",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Perfect PlacesLorde"
    },
    "Start OverImagine Dragons": {
      "artist": "Imagine Dragons",
      "song": "Start Over",
      "rank": "168",
      "streams": "3384626",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "Start OverImagine Dragons"
    },
    "As If It's Your LastBLACKPINK": {
      "artist": "BLACKPINK",
      "song": "As If It's Your Last",
      "rank": "182",
      "streams": "3259742",
      "country": "global",
      "week": "2017-06-23--2017-06-30",
      "songArtist": "As If It's Your LastBLACKPINK"
    },
    "Shining (feat. Beyoncé & Jay-Z)DJ Khaled": {
      "artist": "DJ Khaled",
      "song": "Shining (feat. Beyoncé & Jay-Z)",
      "rank": "198",
      "streams": "3036355",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Shining (feat. Beyoncé & Jay-Z)DJ Khaled"
    },
    "Ay Mi Dios (feat. Pitbull, Yandel & Chacal)IAmChino": {
      "artist": "IAmChino",
      "song": "Ay Mi Dios (feat. Pitbull, Yandel & Chacal)",
      "rank": "128",
      "streams": "3804156",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Ay Mi Dios (feat. Pitbull, Yandel & Chacal)IAmChino"
    },
    "SelfishFuture": {
      "artist": "Future",
      "song": "Selfish",
      "rank": "70",
      "streams": "6043804",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "SelfishFuture"
    },
    "LumbraCali Y El Dandee": {
      "artist": "Cali Y El Dandee",
      "song": "Lumbra",
      "rank": "192",
      "streams": "3332273",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "LumbraCali Y El Dandee"
    },
    "SoberLorde": {
      "artist": "Lorde",
      "song": "Sober",
      "rank": "100",
      "streams": "5131062",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "SoberLorde"
    },
    "SupercutLorde": {
      "artist": "Lorde",
      "song": "Supercut",
      "rank": "113",
      "streams": "4729490",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "SupercutLorde"
    },
    "The LouvreLorde": {
      "artist": "Lorde",
      "song": "The Louvre",
      "rank": "114",
      "streams": "4703385",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "The LouvreLorde"
    },
    "LiabilityLorde": {
      "artist": "Lorde",
      "song": "Liability",
      "rank": "94",
      "streams": "5338899",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "LiabilityLorde"
    },
    "Hard Feelings/LovelessLorde": {
      "artist": "Lorde",
      "song": "Hard Feelings/Loveless",
      "rank": "156",
      "streams": "3799078",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Hard Feelings/LovelessLorde"
    },
    "Writer In The DarkLorde": {
      "artist": "Lorde",
      "song": "Writer In The Dark",
      "rank": "165",
      "streams": "3534516",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Writer In The DarkLorde"
    },
    "Sober II (Melodrama)Lorde": {
      "artist": "Lorde",
      "song": "Sober II (Melodrama)",
      "rank": "182",
      "streams": "3394752",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Sober II (Melodrama)Lorde"
    },
    "Run Up (feat. PARTYNEXTDOOR & Nicki Minaj)Major Lazer": {
      "artist": "Major Lazer",
      "song": "Run Up (feat. PARTYNEXTDOOR & Nicki Minaj)",
      "rank": "30",
      "streams": "10853287",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Run Up (feat. PARTYNEXTDOOR & Nicki Minaj)Major Lazer"
    },
    "All NightThe Vamps": {
      "artist": "The Vamps",
      "song": "All Night",
      "rank": "34",
      "streams": "7749405",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "All NightThe Vamps"
    },
    "Good Drank2 Chainz": {
      "artist": "2 Chainz",
      "song": "Good Drank",
      "rank": "195",
      "streams": "3221363",
      "country": "global",
      "week": "2017-06-16--2017-06-23",
      "songArtist": "Good Drank2 Chainz"
    },
    "My WayCalvin Harris": {
      "artist": "Calvin Harris",
      "song": "My Way",
      "rank": "26",
      "streams": "10330481",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "My WayCalvin Harris"
    },
    "I'm the OneDJ Khaled": {
      "artist": "DJ Khaled",
      "song": "I'm the One",
      "rank": "2",
      "streams": "33067187",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "I'm the OneDJ Khaled"
    },
    "To the MaxDJ Khaled": {
      "artist": "DJ Khaled",
      "song": "To the Max",
      "rank": "54",
      "streams": "7875553",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "To the MaxDJ Khaled"
    },
    "Mask Off - RemixFuture": {
      "artist": "Future",
      "song": "Mask Off - Remix",
      "rank": "135",
      "streams": "4099633",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Mask Off - RemixFuture"
    },
    "Shake It OffTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Shake It Off",
      "rank": "143",
      "streams": "3920018",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Shake It OffTaylor Swift"
    },
    "Blank SpaceTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Blank Space",
      "rank": "147",
      "streams": "3805516",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Blank SpaceTaylor Swift"
    },
    "Sweet CreatureHarry Styles": {
      "artist": "Harry Styles",
      "song": "Sweet Creature",
      "rank": "98",
      "streams": "5389432",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "Sweet CreatureHarry Styles"
    },
    "Into YouAriana Grande": {
      "artist": "Ariana Grande",
      "song": "Into You",
      "rank": "115",
      "streams": "4112003",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Into YouAriana Grande"
    },
    "The OneThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "The One",
      "rank": "51",
      "streams": "8727204",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "The OneThe Chainsmokers"
    },
    "Met Gala (feat. Offset)Gucci Mane": {
      "artist": "Gucci Mane",
      "song": "Met Gala (feat. Offset)",
      "rank": "190",
      "streams": "3165679",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Met Gala (feat. Offset)Gucci Mane"
    },
    "Whippin (feat. Felix Snow)Kiiara": {
      "artist": "Kiiara",
      "song": "Whippin (feat. Felix Snow)",
      "rank": "109",
      "streams": "4920127",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "Whippin (feat. Felix Snow)Kiiara"
    },
    "Bad BloodTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Bad Blood",
      "rank": "197",
      "streams": "3093718",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Bad BloodTaylor Swift"
    },
    "Sucker For Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors)Lil Wayne": {
      "artist": "Lil Wayne",
      "song": "Sucker For Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors)",
      "rank": "78",
      "streams": "5183750",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Sucker For Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors)Lil Wayne"
    },
    "Wildest DreamsTaylor Swift": {
      "artist": "Taylor Swift",
      "song": "Wildest Dreams",
      "rank": "200",
      "streams": "3064401",
      "country": "global",
      "week": "2017-06-09--2017-06-16",
      "songArtist": "Wildest DreamsTaylor Swift"
    },
    "Bad Bitch (feat. Ty Dolla $ign)Bebe Rexha": {
      "artist": "Bebe Rexha",
      "song": "Bad Bitch (feat. Ty Dolla $ign)",
      "rank": "152",
      "streams": "3790183",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Bad Bitch (feat. Ty Dolla $ign)Bebe Rexha"
    },
    "KiwiHarry Styles": {
      "artist": "Harry Styles",
      "song": "Kiwi",
      "rank": "119",
      "streams": "4763336",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "KiwiHarry Styles"
    },
    "Hard TimesParamore": {
      "artist": "Paramore",
      "song": "Hard Times",
      "rank": "87",
      "streams": "6236075",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "Hard TimesParamore"
    },
    "Obsession (feat. Jon Bellion)Vice": {
      "artist": "Vice",
      "song": "Obsession (feat. Jon Bellion)",
      "rank": "165",
      "streams": "3657862",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Obsession (feat. Jon Bellion)Vice"
    },
    "SwitchIggy Azalea": {
      "artist": "Iggy Azalea",
      "song": "Switch",
      "rank": "141",
      "streams": "3934056",
      "country": "global",
      "week": "2017-05-19--2017-05-26",
      "songArtist": "SwitchIggy Azalea"
    },
    "EverybodyLogic": {
      "artist": "Logic",
      "song": "Everybody",
      "rank": "90",
      "streams": "5547886",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "EverybodyLogic"
    },
    "Break Up Every NightThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Break Up Every Night",
      "rank": "55",
      "streams": "7891972",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Break Up Every NightThe Chainsmokers"
    },
    "CarolinaHarry Styles": {
      "artist": "Harry Styles",
      "song": "Carolina",
      "rank": "75",
      "streams": "6578467",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "CarolinaHarry Styles"
    },
    "At My Best (feat. Hailee Steinfeld)Machine Gun Kelly": {
      "artist": "Machine Gun Kelly",
      "song": "At My Best (feat. Hailee Steinfeld)",
      "rank": "175",
      "streams": "3619523",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "At My Best (feat. Hailee Steinfeld)Machine Gun Kelly"
    },
    "All Time LowJon Bellion": {
      "artist": "Jon Bellion",
      "song": "All Time Low",
      "rank": "129",
      "streams": "3787799",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "All Time LowJon Bellion"
    },
    "What Do I Know?Ed Sheeran": {
      "artist": "Ed Sheeran",
      "song": "What Do I Know?",
      "rank": "14",
      "streams": "20447566",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "What Do I Know?Ed Sheeran"
    },
    "HumanRag'n'Bone Man": {
      "artist": "Rag'n'Bone Man",
      "song": "Human",
      "rank": "71",
      "streams": "5332630",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "HumanRag'n'Bone Man"
    },
    "Just Hold OnSteve Aoki": {
      "artist": "Steve Aoki",
      "song": "Just Hold On",
      "rank": "20",
      "streams": "11735194",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Just Hold OnSteve Aoki"
    },
    "Bad Things (with Camila Cabello)Machine Gun Kelly": {
      "artist": "Machine Gun Kelly",
      "song": "Bad Things (with Camila Cabello)",
      "rank": "24",
      "streams": "10620238",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Bad Things (with Camila Cabello)Machine Gun Kelly"
    },
    "SkinRag'n'Bone Man": {
      "artist": "Rag'n'Bone Man",
      "song": "Skin",
      "rank": "155",
      "streams": "3499093",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "SkinRag'n'Bone Man"
    },
    "XXX. FEAT. U2.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "XXX. FEAT. U2.",
      "rank": "20",
      "streams": "16559640",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "XXX. FEAT. U2.Kendrick Lamar"
    },
    "Scars To Your BeautifulAlessia Cara": {
      "artist": "Alessia Cara",
      "song": "Scars To Your Beautiful",
      "rank": "31",
      "streams": "8583889",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Scars To Your BeautifulAlessia Cara"
    },
    "TG4MZara Larsson": {
      "artist": "Zara Larsson",
      "song": "TG4M",
      "rank": "166",
      "streams": "3664380",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "TG4MZara Larsson"
    },
    "Two GhostsHarry Styles": {
      "artist": "Harry Styles",
      "song": "Two Ghosts",
      "rank": "106",
      "streams": "5248006",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Two GhostsHarry Styles"
    },
    "Get Right WitchaMigos": {
      "artist": "Migos",
      "song": "Get Right Witcha",
      "rank": "118",
      "streams": "4158758",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Get Right WitchaMigos"
    },
    "Lust for Life (with The Weeknd)Lana Del Rey": {
      "artist": "Lana Del Rey",
      "song": "Lust for Life (with The Weeknd)",
      "rank": "50",
      "streams": "9273187",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "Lust for Life (with The Weeknd)Lana Del Rey"
    },
    "No More Sad SongsLittle Mix": {
      "artist": "Little Mix",
      "song": "No More Sad Songs",
      "rank": "193",
      "streams": "3174762",
      "country": "global",
      "week": "2017-04-28--2017-05-05",
      "songArtist": "No More Sad SongsLittle Mix"
    },
    "7 YearsLukas Graham": {
      "artist": "Lukas Graham",
      "song": "7 Years",
      "rank": "104",
      "streams": "4397591",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "7 YearsLukas Graham"
    },
    "Cake By The OceanDNCE": {
      "artist": "DNCE",
      "song": "Cake By The Ocean",
      "rank": "103",
      "streams": "4408356",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Cake By The OceanDNCE"
    },
    "La BicicletaCarlos Vives": {
      "artist": "Carlos Vives",
      "song": "La Bicicleta",
      "rank": "85",
      "streams": "4896546",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "La BicicletaCarlos Vives"
    },
    "BlemDrake": {
      "artist": "Drake",
      "song": "Blem",
      "rank": "19",
      "streams": "15863243",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "BlemDrake"
    },
    "This Girl (Kungs Vs. Cookin' On 3 Burners) - Kungs Vs. Cookin' On 3 BurnersKungs": {
      "artist": "Kungs",
      "song": "This Girl (Kungs Vs. Cookin' On 3 Burners) - Kungs Vs. Cookin' On 3 Burners",
      "rank": "116",
      "streams": "4060819",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "This Girl (Kungs Vs. Cookin' On 3 Burners) - Kungs Vs. Cookin' On 3 BurnersKungs"
    },
    "Meet Me in the HallwayHarry Styles": {
      "artist": "Harry Styles",
      "song": "Meet Me in the Hallway",
      "rank": "105",
      "streams": "5257961",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Meet Me in the HallwayHarry Styles"
    },
    "Ever Since New YorkHarry Styles": {
      "artist": "Harry Styles",
      "song": "Ever Since New York",
      "rank": "123",
      "streams": "4571856",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Ever Since New YorkHarry Styles"
    },
    "WomanHarry Styles": {
      "artist": "Harry Styles",
      "song": "Woman",
      "rank": "127",
      "streams": "4466510",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "WomanHarry Styles"
    },
    "Only AngelHarry Styles": {
      "artist": "Harry Styles",
      "song": "Only Angel",
      "rank": "129",
      "streams": "4412401",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Only AngelHarry Styles"
    },
    "From the Dining TableHarry Styles": {
      "artist": "Harry Styles",
      "song": "From the Dining Table",
      "rank": "139",
      "streams": "4141985",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "From the Dining TableHarry Styles"
    },
    "YAH.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "YAH.",
      "rank": "18",
      "streams": "17282761",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "YAH.Kendrick Lamar"
    },
    "LUST.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "LUST.",
      "rank": "27",
      "streams": "14584222",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "LUST.Kendrick Lamar"
    },
    "PRIDE.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "PRIDE.",
      "rank": "24",
      "streams": "15753309",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "PRIDE.Kendrick Lamar"
    },
    "Told You SoParamore": {
      "artist": "Paramore",
      "song": "Told You So",
      "rank": "189",
      "streams": "3239177",
      "country": "global",
      "week": "2017-05-12--2017-05-19",
      "songArtist": "Told You SoParamore"
    },
    "FEEL.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "FEEL.",
      "rank": "21",
      "streams": "16512330",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "FEEL.Kendrick Lamar"
    },
    "CarolineAminé": {
      "artist": "Aminé",
      "song": "Caroline",
      "rank": "50",
      "streams": "7091625",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "CarolineAminé"
    },
    "UpNAV": {
      "artist": "NAV",
      "song": "Up",
      "rank": "190",
      "streams": "3191345",
      "country": "global",
      "week": "2017-04-21--2017-04-28",
      "songArtist": "UpNAV"
    },
    "New ManEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "New Man",
      "rank": "12",
      "streams": "21770023",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "New ManEd Sheeran"
    },
    "Black SpiderManLogic": {
      "artist": "Logic",
      "song": "Black SpiderMan",
      "rank": "167",
      "streams": "3507230",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Black SpiderManLogic"
    },
    "Killing SpreeLogic": {
      "artist": "Logic",
      "song": "Killing Spree",
      "rank": "156",
      "streams": "3726948",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "Killing SpreeLogic"
    },
    "ConfessLogic": {
      "artist": "Logic",
      "song": "Confess",
      "rank": "161",
      "streams": "3651458",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "ConfessLogic"
    },
    "Take It BackLogic": {
      "artist": "Logic",
      "song": "Take It Back",
      "rank": "169",
      "streams": "3557778",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "Take It BackLogic"
    },
    "AmericaLogic": {
      "artist": "Logic",
      "song": "America",
      "rank": "178",
      "streams": "3372475",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "AmericaLogic"
    },
    "GOD.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "GOD.",
      "rank": "39",
      "streams": "11228614",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "GOD.Kendrick Lamar"
    },
    "FEAR.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "FEAR.",
      "rank": "36",
      "streams": "12336669",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "FEAR.Kendrick Lamar"
    },
    "Supermarket FlowersEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Supermarket Flowers",
      "rank": "21",
      "streams": "17530459",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Supermarket FlowersEd Sheeran"
    },
    "Eyes ClosedHalsey": {
      "artist": "Halsey",
      "song": "Eyes Closed",
      "rank": "186",
      "streams": "3277630",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "Eyes ClosedHalsey"
    },
    "HallelujahLogic": {
      "artist": "Logic",
      "song": "Hallelujah",
      "rank": "187",
      "streams": "3274144",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "HallelujahLogic"
    },
    "Ink BlotLogic": {
      "artist": "Logic",
      "song": "Ink Blot",
      "rank": "190",
      "streams": "3245431",
      "country": "global",
      "week": "2017-05-05--2017-05-12",
      "songArtist": "Ink BlotLogic"
    },
    "BarcelonaEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Barcelona",
      "rank": "22",
      "streams": "17244400",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "BarcelonaEd Sheeran"
    },
    "EverydayAriana Grande": {
      "artist": "Ariana Grande",
      "song": "Everyday",
      "rank": "162",
      "streams": "3576664",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "EverydayAriana Grande"
    },
    "Saturnz Barz (feat. Popcaan)Gorillaz": {
      "artist": "Gorillaz",
      "song": "Saturnz Barz (feat. Popcaan)",
      "rank": "119",
      "streams": "4930842",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Saturnz Barz (feat. Popcaan)Gorillaz"
    },
    "DUCKWORTH.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "DUCKWORTH.",
      "rank": "42",
      "streams": "10971334",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "DUCKWORTH.Kendrick Lamar"
    },
    "BLOOD.Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "BLOOD.",
      "rank": "30",
      "streams": "13390306",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "BLOOD.Kendrick Lamar"
    },
    "Ascension (feat. Vince Staples)Gorillaz": {
      "artist": "Gorillaz",
      "song": "Ascension (feat. Vince Staples)",
      "rank": "171",
      "streams": "3763762",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Ascension (feat. Vince Staples)Gorillaz"
    },
    "Lights Down LowMAX": {
      "artist": "MAX",
      "song": "Lights Down Low",
      "rank": "199",
      "streams": "2977306",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Lights Down LowMAX"
    },
    "Andromeda (feat. DRAM)Gorillaz": {
      "artist": "Gorillaz",
      "song": "Andromeda (feat. DRAM)",
      "rank": "136",
      "streams": "4506558",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Andromeda (feat. DRAM)Gorillaz"
    },
    "HistoryOlivia Holt": {
      "artist": "Olivia Holt",
      "song": "History",
      "rank": "153",
      "streams": "3234109",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "HistoryOlivia Holt"
    },
    "Shed a LightRobin Schulz": {
      "artist": "Robin Schulz",
      "song": "Shed a Light",
      "rank": "55",
      "streams": "6295040",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Shed a LightRobin Schulz"
    },
    "Teenage FeverDrake": {
      "artist": "Drake",
      "song": "Teenage Fever",
      "rank": "36",
      "streams": "12809756",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Teenage FeverDrake"
    },
    "Don't LeaveSnakehips": {
      "artist": "Snakehips",
      "song": "Don't Leave",
      "rank": "79",
      "streams": "4886452",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "Don't LeaveSnakehips"
    },
    "Dile Que Tu Me QuieresOzuna": {
      "artist": "Ozuna",
      "song": "Dile Que Tu Me Quieres",
      "rank": "133",
      "streams": "3682124",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Dile Que Tu Me QuieresOzuna"
    },
    "I Got YouBebe Rexha": {
      "artist": "Bebe Rexha",
      "song": "I Got You",
      "rank": "122",
      "streams": "3863605",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "I Got YouBebe Rexha"
    },
    "No Problem (feat. Lil Wayne & 2 Chainz)Chance the Rapper": {
      "artist": "Chance the Rapper",
      "song": "No Problem (feat. Lil Wayne & 2 Chainz)",
      "rank": "168",
      "streams": "3153421",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "No Problem (feat. Lil Wayne & 2 Chainz)Chance the Rapper"
    },
    "MovesBig Sean": {
      "artist": "Big Sean",
      "song": "Moves",
      "rank": "178",
      "streams": "2854638",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "MovesBig Sean"
    },
    "Free SmokeDrake": {
      "artist": "Drake",
      "song": "Free Smoke",
      "rank": "16",
      "streams": "17122268",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Free SmokeDrake"
    },
    "Get It TogetherDrake": {
      "artist": "Drake",
      "song": "Get It Together",
      "rank": "28",
      "streams": "14469397",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Get It TogetherDrake"
    },
    "All We KnowThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "All We Know",
      "rank": "28",
      "streams": "10163696",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "All We KnowThe Chainsmokers"
    },
    "How Would You Feel (Paean)Ed Sheeran": {
      "artist": "Ed Sheeran",
      "song": "How Would You Feel (Paean)",
      "rank": "34",
      "streams": "11027495",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "How Would You Feel (Paean)Ed Sheeran"
    },
    "Sunset LoverPetit Biscuit": {
      "artist": "Petit Biscuit",
      "song": "Sunset Lover",
      "rank": "106",
      "streams": "4385053",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Sunset LoverPetit Biscuit"
    },
    "Water Under the BridgeAdele": {
      "artist": "Adele",
      "song": "Water Under the Bridge",
      "rank": "93",
      "streams": "4765744",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Water Under the BridgeAdele"
    },
    "Million ReasonsLady Gaga": {
      "artist": "Lady Gaga",
      "song": "Million Reasons",
      "rank": "177",
      "streams": "2783891",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Million ReasonsLady Gaga"
    },
    "By Your SideJonas Blue": {
      "artist": "Jonas Blue",
      "song": "By Your Side",
      "rank": "38",
      "streams": "7669293",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "By Your SideJonas Blue"
    },
    "AloneAlan Walker": {
      "artist": "Alan Walker",
      "song": "Alone",
      "rank": "40",
      "streams": "7584237",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "AloneAlan Walker"
    },
    "i hate u, i love u (feat. olivia o'brien)gnash": {
      "artist": "gnash",
      "song": "i hate u, i love u (feat. olivia o'brien)",
      "rank": "67",
      "streams": "5529838",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "i hate u, i love u (feat. olivia o'brien)gnash"
    },
    "Deja vuPrince Royce": {
      "artist": "Prince Royce",
      "song": "Deja vu",
      "rank": "171",
      "streams": "3577999",
      "country": "global",
      "week": "2017-03-31--2017-04-07",
      "songArtist": "Deja vuPrince Royce"
    },
    "Do Not DisturbDrake": {
      "artist": "Drake",
      "song": "Do Not Disturb",
      "rank": "62",
      "streams": "9604297",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Do Not DisturbDrake"
    },
    "Be The OneDua Lipa": {
      "artist": "Dua Lipa",
      "song": "Be The One",
      "rank": "136",
      "streams": "3859511",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Be The OneDua Lipa"
    },
    "Party MonsterThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Party Monster",
      "rank": "43",
      "streams": "7431097",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Party MonsterThe Weeknd"
    },
    "All Night (feat. Knox Fortune)Chance the Rapper": {
      "artist": "Chance the Rapper",
      "song": "All Night (feat. Knox Fortune)",
      "rank": "199",
      "streams": "3087823",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "All Night (feat. Knox Fortune)Chance the Rapper"
    },
    "The OtherLauv": {
      "artist": "Lauv",
      "song": "The Other",
      "rank": "176",
      "streams": "2972160",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "The OtherLauv"
    },
    "Nancy MulliganEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Nancy Mulligan",
      "rank": "26",
      "streams": "15959194",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Nancy MulliganEd Sheeran"
    },
    "KMTDrake": {
      "artist": "Drake",
      "song": "KMT",
      "rank": "37",
      "streams": "12768627",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "KMTDrake"
    },
    "Peek A BooLil Yachty": {
      "artist": "Lil Yachty",
      "song": "Peek A Boo",
      "rank": "190",
      "streams": "3186794",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Peek A BooLil Yachty"
    },
    "DownMarian Hill": {
      "artist": "Marian Hill",
      "song": "Down",
      "rank": "181",
      "streams": "3133345",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "DownMarian Hill"
    },
    "Gang Up (with Young Thug, 2 Chainz & Wiz Khalifa feat. PnB Rock)Young Thug": {
      "artist": "Young Thug",
      "song": "Gang Up (with Young Thug, 2 Chainz & Wiz Khalifa feat. PnB Rock)",
      "rank": "194",
      "streams": "3085640",
      "country": "global",
      "week": "2017-04-14--2017-04-21",
      "songArtist": "Gang Up (with Young Thug, 2 Chainz & Wiz Khalifa feat. PnB Rock)Young Thug"
    },
    "Madiba RiddimDrake": {
      "artist": "Drake",
      "song": "Madiba Riddim",
      "rank": "34",
      "streams": "13138405",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Madiba RiddimDrake"
    },
    "Hearts Don't Break Around HereEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Hearts Don't Break Around Here",
      "rank": "23",
      "streams": "16884912",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Hearts Don't Break Around HereEd Sheeran"
    },
    "SacrificesDrake": {
      "artist": "Drake",
      "song": "Sacrifices",
      "rank": "35",
      "streams": "12831961",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "SacrificesDrake"
    },
    "BloodstreamThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Bloodstream",
      "rank": "83",
      "streams": "5564008",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "BloodstreamThe Chainsmokers"
    },
    "Don't SayThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Don't Say",
      "rank": "90",
      "streams": "5417637",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Don't SayThe Chainsmokers"
    },
    "HonestThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Honest",
      "rank": "95",
      "streams": "5195372",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "HonestThe Chainsmokers"
    },
    "My TypeThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "My Type",
      "rank": "101",
      "streams": "4919402",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "My TypeThe Chainsmokers"
    },
    "It Won't Kill YaThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "It Won't Kill Ya",
      "rank": "114",
      "streams": "4629114",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "It Won't Kill YaThe Chainsmokers"
    },
    "YoungThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Young",
      "rank": "122",
      "streams": "4472953",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "YoungThe Chainsmokers"
    },
    "Last Day AliveThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Last Day Alive",
      "rank": "139",
      "streams": "4114232",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Last Day AliveThe Chainsmokers"
    },
    "The Heart Part 4Kendrick Lamar": {
      "artist": "Kendrick Lamar",
      "song": "The Heart Part 4",
      "rank": "41",
      "streams": "10856173",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "The Heart Part 4Kendrick Lamar"
    },
    "Wake Up AloneThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Wake Up Alone",
      "rank": "153",
      "streams": "4002713",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "Wake Up AloneThe Chainsmokers"
    },
    "No Long TalkDrake": {
      "artist": "Drake",
      "song": "No Long Talk",
      "rank": "27",
      "streams": "14713218",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "No Long TalkDrake"
    },
    "4422Drake": {
      "artist": "Drake",
      "song": "4422",
      "rank": "41",
      "streams": "12436045",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "4422Drake"
    },
    "Jorja InterludeDrake": {
      "artist": "Drake",
      "song": "Jorja Interlude",
      "rank": "38",
      "streams": "12685902",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Jorja InterludeDrake"
    },
    "X (feat. Future)21 Savage": {
      "artist": "21 Savage",
      "song": "X (feat. Future)",
      "rank": "100",
      "streams": "4508475",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "X (feat. Future)21 Savage"
    },
    "DEVASTATEDJoey Bada$$": {
      "artist": "Joey Bada$$",
      "song": "DEVASTATED",
      "rank": "193",
      "streams": "3306862",
      "country": "global",
      "week": "2017-04-07--2017-04-14",
      "songArtist": "DEVASTATEDJoey Bada$$"
    },
    "美女と野獣Ariana Grande": {
      "artist": "Ariana Grande",
      "song": "美女と野獣",
      "rank": "171",
      "streams": "3522279",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "美女と野獣Ariana Grande"
    },
    "EraserEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Eraser",
      "rank": "20",
      "streams": "17804253",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "EraserEd Sheeran"
    },
    "I Love YouAxwell /\\ Ingrosso": {
      "artist": "Axwell /\\ Ingrosso",
      "song": "I Love You",
      "rank": "171",
      "streams": "3305503",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "I Love YouAxwell /\\ Ingrosso"
    },
    "Ice MeltsDrake": {
      "artist": "Drake",
      "song": "Ice Melts",
      "rank": "66",
      "streams": "8863164",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Ice MeltsDrake"
    },
    "Too GoodDrake": {
      "artist": "Drake",
      "song": "Too Good",
      "rank": "64",
      "streams": "5568347",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Too GoodDrake"
    },
    "Sooner Or LaterAaron Carter": {
      "artist": "Aaron Carter",
      "song": "Sooner Or Later",
      "rank": "164",
      "streams": "3368804",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Sooner Or LaterAaron Carter"
    },
    "Bibia Be Ye YeEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Bibia Be Ye Ye",
      "rank": "32",
      "streams": "14593615",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Bibia Be Ye YeEd Sheeran"
    },
    "ThumbsSabrina Carpenter": {
      "artist": "Sabrina Carpenter",
      "song": "Thumbs",
      "rank": "190",
      "streams": "3039572",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "ThumbsSabrina Carpenter"
    },
    "Skepta InterludeDrake": {
      "artist": "Drake",
      "song": "Skepta Interlude",
      "rank": "51",
      "streams": "10296945",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Skepta InterludeDrake"
    },
    "Gyal You A Party Animal - RemixCharly Black": {
      "artist": "Charly Black",
      "song": "Gyal You A Party Animal - Remix",
      "rank": "190",
      "streams": "2962885",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Gyal You A Party Animal - RemixCharly Black"
    },
    "Save MyselfEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Save Myself",
      "rank": "37",
      "streams": "13630733",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "Save MyselfEd Sheeran"
    },
    "Can't Have EverythingDrake": {
      "artist": "Drake",
      "song": "Can't Have Everything",
      "rank": "58",
      "streams": "9681885",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Can't Have EverythingDrake"
    },
    "Lush LifeZara Larsson": {
      "artist": "Zara Larsson",
      "song": "Lush Life",
      "rank": "158",
      "streams": "3278059",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Lush LifeZara Larsson"
    },
    "Nothings Into SomethingsDrake": {
      "artist": "Drake",
      "song": "Nothings Into Somethings",
      "rank": "59",
      "streams": "9673382",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Nothings Into SomethingsDrake"
    },
    "GlowDrake": {
      "artist": "Drake",
      "song": "Glow",
      "rank": "53",
      "streams": "10145265",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "GlowDrake"
    },
    "Light My Body Up (feat. Nicki Minaj & Lil Wayne)David Guetta": {
      "artist": "David Guetta",
      "song": "Light My Body Up (feat. Nicki Minaj & Lil Wayne)",
      "rank": "120",
      "streams": "4927676",
      "country": "global",
      "week": "2017-03-24--2017-03-31",
      "songArtist": "Light My Body Up (feat. Nicki Minaj & Lil Wayne)David Guetta"
    },
    "I Would LikeZara Larsson": {
      "artist": "Zara Larsson",
      "song": "I Would Like",
      "rank": "42",
      "streams": "7461568",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "I Would LikeZara Larsson"
    },
    "Andas En Mi CabezaChino & Nacho": {
      "artist": "Chino & Nacho",
      "song": "Andas En Mi Cabeza",
      "rank": "153",
      "streams": "3388786",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Andas En Mi CabezaChino & Nacho"
    },
    "ControllaDrake": {
      "artist": "Drake",
      "song": "Controlla",
      "rank": "92",
      "streams": "4781312",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "ControllaDrake"
    },
    "Lose YouDrake": {
      "artist": "Drake",
      "song": "Lose You",
      "rank": "61",
      "streams": "9612795",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Lose YouDrake"
    },
    "WorkRihanna": {
      "artist": "Rihanna",
      "song": "Work",
      "rank": "75",
      "streams": "5193349",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "WorkRihanna"
    },
    "Now and LaterSage The Gemini": {
      "artist": "Sage The Gemini",
      "song": "Now and Later",
      "rank": "36",
      "streams": "7724332",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Now and LaterSage The Gemini"
    },
    "Since Way BackDrake": {
      "artist": "Drake",
      "song": "Since Way Back",
      "rank": "71",
      "streams": "8496526",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Since Way BackDrake"
    },
    "CakeFlo Rida": {
      "artist": "Flo Rida",
      "song": "Cake",
      "rank": "162",
      "streams": "3048562",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "CakeFlo Rida"
    },
    "No FraudsNicki Minaj": {
      "artist": "Nicki Minaj",
      "song": "No Frauds",
      "rank": "62",
      "streams": "7704623",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "No FraudsNicki Minaj"
    },
    "Both (feat. Drake)Gucci Mane": {
      "artist": "Gucci Mane",
      "song": "Both (feat. Drake)",
      "rank": "163",
      "streams": "3091348",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "Both (feat. Drake)Gucci Mane"
    },
    "ChanelFrank Ocean": {
      "artist": "Frank Ocean",
      "song": "Chanel",
      "rank": "92",
      "streams": "5370133",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "ChanelFrank Ocean"
    },
    "Love Me NowJohn Legend": {
      "artist": "John Legend",
      "song": "Love Me Now",
      "rank": "33",
      "streams": "8203210",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Love Me NowJohn Legend"
    },
    "The GreatestSia": {
      "artist": "Sia",
      "song": "The Greatest",
      "rank": "15",
      "streams": "13074479",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "The GreatestSia"
    },
    "It's Gotta Be YouIsaiah": {
      "artist": "Isaiah",
      "song": "It's Gotta Be You",
      "rank": "140",
      "streams": "3427331",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "It's Gotta Be YouIsaiah"
    },
    "Oceans AwayA R I Z O N A": {
      "artist": "A R I Z O N A",
      "song": "Oceans Away",
      "rank": "141",
      "streams": "3510064",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Oceans AwayA R I Z O N A"
    },
    "Sneakin’Drake": {
      "artist": "Drake",
      "song": "Sneakin’",
      "rank": "107",
      "streams": "4283490",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Sneakin’Drake"
    },
    "Shooting StarsBag Raiders": {
      "artist": "Bag Raiders",
      "song": "Shooting Stars",
      "rank": "163",
      "streams": "3461348",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Shooting StarsBag Raiders"
    },
    "Comin Out StrongFuture": {
      "artist": "Future",
      "song": "Comin Out Strong",
      "rank": "66",
      "streams": "6205335",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Comin Out StrongFuture"
    },
    "HabibaBoef": {
      "artist": "Boef",
      "song": "Habiba",
      "rank": "193",
      "streams": "3376698",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "HabibaBoef"
    },
    "Lot to LearnLuke Christopher": {
      "artist": "Luke Christopher",
      "song": "Lot to Learn",
      "rank": "89",
      "streams": "4833942",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Lot to LearnLuke Christopher"
    },
    "JumpmanDrake": {
      "artist": "Drake",
      "song": "Jumpman",
      "rank": "182",
      "streams": "3019544",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "JumpmanDrake"
    },
    "Only YouZara Larsson": {
      "artist": "Zara Larsson",
      "song": "Only You",
      "rank": "200",
      "streams": "3260019",
      "country": "global",
      "week": "2017-03-17--2017-03-24",
      "songArtist": "Only YouZara Larsson"
    },
    "Romantic - NOTD RemixStanaj": {
      "artist": "Stanaj",
      "song": "Romantic - NOTD Remix",
      "rank": "170",
      "streams": "3011862",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Romantic - NOTD RemixStanaj"
    },
    "Make Me (Cry)Noah Cyrus": {
      "artist": "Noah Cyrus",
      "song": "Make Me (Cry)",
      "rank": "83",
      "streams": "4926962",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Make Me (Cry)Noah Cyrus"
    },
    "WaterfallStargate": {
      "artist": "Stargate",
      "song": "Waterfall",
      "rank": "148",
      "streams": "3896269",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "WaterfallStargate"
    },
    "ReminderThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Reminder",
      "rank": "132",
      "streams": "3766577",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "ReminderThe Weeknd"
    },
    "SexualNEIKED": {
      "artist": "NEIKED",
      "song": "Sexual",
      "rank": "58",
      "streams": "6070351",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SexualNEIKED"
    },
    "No Heart21 Savage": {
      "artist": "21 Savage",
      "song": "No Heart",
      "rank": "109",
      "streams": "4257945",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "No Heart21 Savage"
    },
    "Way Down We GoKaleo": {
      "artist": "Kaleo",
      "song": "Way Down We Go",
      "rank": "200",
      "streams": "2969272",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Way Down We GoKaleo"
    },
    "Low LifeFuture": {
      "artist": "Future",
      "song": "Low Life",
      "rank": "194",
      "streams": "2916084",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Low LifeFuture"
    },
    "BreatheAstrid S": {
      "artist": "Astrid S",
      "song": "Breathe",
      "rank": "177",
      "streams": "3430714",
      "country": "global",
      "week": "2017-03-10--2017-03-17",
      "songArtist": "BreatheAstrid S"
    },
    "CapsizeFRENSHIP": {
      "artist": "FRENSHIP",
      "song": "Capsize",
      "rank": "114",
      "streams": "4112369",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "CapsizeFRENSHIP"
    },
    "Needed MeRihanna": {
      "artist": "Rihanna",
      "song": "Needed Me",
      "rank": "96",
      "streams": "4583611",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Needed MeRihanna"
    },
    "PILLOWTALKZAYN": {
      "artist": "ZAYN",
      "song": "PILLOWTALK",
      "rank": "165",
      "streams": "3202717",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "PILLOWTALKZAYN"
    },
    "Fresh EyesAndy Grammer": {
      "artist": "Andy Grammer",
      "song": "Fresh Eyes",
      "rank": "119",
      "streams": "4008319",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Fresh EyesAndy Grammer"
    },
    "Chill BillRob $tone": {
      "artist": "Rob $tone",
      "song": "Chill Bill",
      "rank": "86",
      "streams": "4888031",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Chill BillRob $tone"
    },
    "pick up the phoneYoung Thug": {
      "artist": "Young Thug",
      "song": "pick up the phone",
      "rank": "167",
      "streams": "3161853",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "pick up the phoneYoung Thug"
    },
    "StitchesShawn Mendes": {
      "artist": "Shawn Mendes",
      "song": "Stitches",
      "rank": "149",
      "streams": "3434331",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "StitchesShawn Mendes"
    },
    "Let It GoJames Bay": {
      "artist": "James Bay",
      "song": "Let It Go",
      "rank": "163",
      "streams": "3026036",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Let It GoJames Bay"
    },
    "Send My Love (To Your New Lover)Adele": {
      "artist": "Adele",
      "song": "Send My Love (To Your New Lover)",
      "rank": "124",
      "streams": "3819479",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Send My Love (To Your New Lover)Adele"
    },
    "HelloAdele": {
      "artist": "Adele",
      "song": "Hello",
      "rank": "151",
      "streams": "3402213",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "HelloAdele"
    },
    "DUELE EL CORAZONEnrique Iglesias": {
      "artist": "Enrique Iglesias",
      "song": "DUELE EL CORAZON",
      "rank": "118",
      "streams": "4053683",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "DUELE EL CORAZONEnrique Iglesias"
    },
    "HypnotisedColdplay": {
      "artist": "Coldplay",
      "song": "Hypnotised",
      "rank": "157",
      "streams": "3658010",
      "country": "global",
      "week": "2017-03-03--2017-03-10",
      "songArtist": "HypnotisedColdplay"
    },
    "Shape of You - Stormzy RemixEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Shape of You - Stormzy Remix",
      "rank": "190",
      "streams": "3047032",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Shape of You - Stormzy RemixEd Sheeran"
    },
    "Deja VuJ. Cole": {
      "artist": "J. Cole",
      "song": "Deja Vu",
      "rank": "47",
      "streams": "7217628",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Deja VuJ. Cole"
    },
    "Big For Your BootsStormzy": {
      "artist": "Stormzy",
      "song": "Big For Your Boots",
      "rank": "129",
      "streams": "4145970",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Big For Your BootsStormzy"
    },
    "Helium - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"Sia": {
      "artist": "Sia",
      "song": "Helium - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"",
      "rank": "159",
      "streams": "3399859",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Helium - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"Sia"
    },
    "Shaky ShakyDaddy Yankee": {
      "artist": "Daddy Yankee",
      "song": "Shaky Shaky",
      "rank": "101",
      "streams": "4460038",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Shaky ShakyDaddy Yankee"
    },
    "Tenerife SeaEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Tenerife Sea",
      "rank": "160",
      "streams": "3079378",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "Tenerife SeaEd Sheeran"
    },
    "No FavorsBig Sean": {
      "artist": "Big Sean",
      "song": "No Favors",
      "rank": "42",
      "streams": "8921805",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "No FavorsBig Sean"
    },
    "I See Fire - From \"The Hobbit - The Desolation Of Smaug\"Ed Sheeran": {
      "artist": "Ed Sheeran",
      "song": "I See Fire - From \"The Hobbit - The Desolation Of Smaug\"",
      "rank": "135",
      "streams": "3539885",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "I See Fire - From \"The Hobbit - The Desolation Of Smaug\"Ed Sheeran"
    },
    "Don'tEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Don't",
      "rank": "156",
      "streams": "3141244",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "Don'tEd Sheeran"
    },
    "Shout Out to My ExLittle Mix": {
      "artist": "Little Mix",
      "song": "Shout Out to My Ex",
      "rank": "88",
      "streams": "4836418",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Shout Out to My ExLittle Mix"
    },
    "Fast CarJonas Blue": {
      "artist": "Jonas Blue",
      "song": "Fast Car",
      "rank": "130",
      "streams": "3783928",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Fast CarJonas Blue"
    },
    "Some Kind Of DrugG-Eazy": {
      "artist": "G-Eazy",
      "song": "Some Kind Of Drug",
      "rank": "183",
      "streams": "3005489",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Some Kind Of DrugG-Eazy"
    },
    "City Of Stars - From \"La La Land\" SoundtrackRyan Gosling": {
      "artist": "Ryan Gosling",
      "song": "City Of Stars - From \"La La Land\" Soundtrack",
      "rank": "155",
      "streams": "3227527",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "City Of Stars - From \"La La Land\" SoundtrackRyan Gosling"
    },
    "The MackNevada": {
      "artist": "Nevada",
      "song": "The Mack",
      "rank": "37",
      "streams": "7669735",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "The MackNevada"
    },
    "Shape of You (Major Lazer Remix) [feat. Nyla & Kranium]Ed Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Shape of You (Major Lazer Remix) [feat. Nyla & Kranium]",
      "rank": "174",
      "streams": "3223687",
      "country": "global",
      "week": "2017-02-24--2017-03-03",
      "songArtist": "Shape of You (Major Lazer Remix) [feat. Nyla & Kranium]Ed Sheeran"
    },
    "Some WayNAV": {
      "artist": "NAV",
      "song": "Some Way",
      "rank": "171",
      "streams": "3353225",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Some WayNAV"
    },
    "Chillax (feat. Ky-Mani Marley)Farruko": {
      "artist": "Farruko",
      "song": "Chillax (feat. Ky-Mani Marley)",
      "rank": "184",
      "streams": "2676819",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Chillax (feat. Ky-Mani Marley)Farruko"
    },
    "Borro CassetteMaluma": {
      "artist": "Maluma",
      "song": "Borro Cassette",
      "rank": "141",
      "streams": "3542282",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Borro CassetteMaluma"
    },
    "Rent MoneyFuture": {
      "artist": "Future",
      "song": "Rent Money",
      "rank": "84",
      "streams": "5334264",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Rent MoneyFuture"
    },
    "Lighthouse - Andrelli RemixHearts & Colors": {
      "artist": "Hearts & Colors",
      "song": "Lighthouse - Andrelli Remix",
      "rank": "143",
      "streams": "3500923",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Lighthouse - Andrelli RemixHearts & Colors"
    },
    "No Role ModelzJ. Cole": {
      "artist": "J. Cole",
      "song": "No Role Modelz",
      "rank": "196",
      "streams": "2900495",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "No Role ModelzJ. Cole"
    },
    "Not Going HomeDVBBS": {
      "artist": "DVBBS",
      "song": "Not Going Home",
      "rank": "174",
      "streams": "2909891",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Not Going HomeDVBBS"
    },
    "Hymn For The Weekend - Seeb RemixColdplay": {
      "artist": "Coldplay",
      "song": "Hymn For The Weekend - Seeb Remix",
      "rank": "95",
      "streams": "4590654",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Hymn For The Weekend - Seeb RemixColdplay"
    },
    "Bom Bidi Bom - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"Nick Jonas": {
      "artist": "Nick Jonas",
      "song": "Bom Bidi Bom - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"",
      "rank": "143",
      "streams": "3655988",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Bom Bidi Bom - From \"Fifty Shades Darker (Original Motion Picture Soundtrack)\"Nick Jonas"
    },
    "Steady 1234 (feat. Jasmine Thompson & Skizzy Mars)Vice": {
      "artist": "Vice",
      "song": "Steady 1234 (feat. Jasmine Thompson & Skizzy Mars)",
      "rank": "113",
      "streams": "4145668",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Steady 1234 (feat. Jasmine Thompson & Skizzy Mars)Vice"
    },
    "Final SongMØ": {
      "artist": "MØ",
      "song": "Final Song",
      "rank": "134",
      "streams": "3658284",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Final SongMØ"
    },
    "DracoFuture": {
      "artist": "Future",
      "song": "Draco",
      "rank": "95",
      "streams": "4891332",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "DracoFuture"
    },
    "Look at Me!XXXTENTACION": {
      "artist": "XXXTENTACION",
      "song": "Look at Me!",
      "rank": "144",
      "streams": "3618902",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Look at Me!XXXTENTACION"
    },
    "Love On MeGalantis": {
      "artist": "Galantis",
      "song": "Love On Me",
      "rank": "144",
      "streams": "3475690",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Love On MeGalantis"
    },
    "LightSan Holo": {
      "artist": "San Holo",
      "song": "Light",
      "rank": "184",
      "streams": "3004050",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "LightSan Holo"
    },
    "Love$ickMura Masa": {
      "artist": "Mura Masa",
      "song": "Love$ick",
      "rank": "180",
      "streams": "2715398",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Love$ickMura Masa"
    },
    "The Ocean (feat. Shy Martin)Mike Perry": {
      "artist": "Mike Perry",
      "song": "The Ocean (feat. Shy Martin)",
      "rank": "94",
      "streams": "4607088",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "The Ocean (feat. Shy Martin)Mike Perry"
    },
    "All I NeedJoakim Lundell": {
      "artist": "Joakim Lundell",
      "song": "All I Need",
      "rank": "187",
      "streams": "3125372",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "All I NeedJoakim Lundell"
    },
    "Super TrapperFuture": {
      "artist": "Future",
      "song": "Super Trapper",
      "rank": "189",
      "streams": "3104203",
      "country": "global",
      "week": "2017-02-17--2017-02-24",
      "songArtist": "Super TrapperFuture"
    },
    "Dancing On My OwnCalum Scott": {
      "artist": "Calum Scott",
      "song": "Dancing On My Own",
      "rank": "148",
      "streams": "3454666",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Dancing On My OwnCalum Scott"
    },
    "The HillsThe Weeknd": {
      "artist": "The Weeknd",
      "song": "The Hills",
      "rank": "180",
      "streams": "3039017",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "The HillsThe Weeknd"
    },
    "MagicThomas Gold": {
      "artist": "Thomas Gold",
      "song": "Magic",
      "rank": "193",
      "streams": "3007729",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "MagicThomas Gold"
    },
    "Same DrugsChance the Rapper": {
      "artist": "Chance the Rapper",
      "song": "Same Drugs",
      "rank": "191",
      "streams": "3026088",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "Same DrugsChance the Rapper"
    },
    "Setting FiresThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Setting Fires",
      "rank": "81",
      "streams": "5056330",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Setting FiresThe Chainsmokers"
    },
    "Kelly Price (feat. Travis Scott)Migos": {
      "artist": "Migos",
      "song": "Kelly Price (feat. Travis Scott)",
      "rank": "101",
      "streams": "4598755",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Kelly Price (feat. Travis Scott)Migos"
    },
    "Take Me To ChurchHozier": {
      "artist": "Hozier",
      "song": "Take Me To Church",
      "rank": "199",
      "streams": "2635814",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "Take Me To ChurchHozier"
    },
    "OutletDesiigner": {
      "artist": "Desiigner",
      "song": "Outlet",
      "rank": "173",
      "streams": "3262418",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "OutletDesiigner"
    },
    "Six Feet UnderThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Six Feet Under",
      "rank": "108",
      "streams": "4275228",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Six Feet UnderThe Weeknd"
    },
    "Never Be Like YouFlume": {
      "artist": "Flume",
      "song": "Never Be Like You",
      "rank": "128",
      "streams": "3684307",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Never Be Like YouFlume"
    },
    "MiddleDJ Snake": {
      "artist": "DJ Snake",
      "song": "Middle",
      "rank": "112",
      "streams": "4147726",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "MiddleDJ Snake"
    },
    "So Good (feat. Ty Dolla $ign)Zara Larsson": {
      "artist": "Zara Larsson",
      "song": "So Good (feat. Ty Dolla $ign)",
      "rank": "88",
      "streams": "4926973",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "So Good (feat. Ty Dolla $ign)Zara Larsson"
    },
    "Me, Myself & IG-Eazy": {
      "artist": "G-Eazy",
      "song": "Me, Myself & I",
      "rank": "126",
      "streams": "3812423",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Me, Myself & IG-Eazy"
    },
    "SacrificesBig Sean": {
      "artist": "Big Sean",
      "song": "Sacrifices",
      "rank": "109",
      "streams": "4495180",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "SacrificesBig Sean"
    },
    "When We Were YoungAdele": {
      "artist": "Adele",
      "song": "When We Were Young",
      "rank": "198",
      "streams": "2933368",
      "country": "global",
      "week": "2017-02-10--2017-02-17",
      "songArtist": "When We Were YoungAdele"
    },
    "SidewalksThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Sidewalks",
      "rank": "98",
      "streams": "4570153",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SidewalksThe Weeknd"
    },
    "Hotline BlingDrake": {
      "artist": "Drake",
      "song": "Hotline Bling",
      "rank": "174",
      "streams": "3088142",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Hotline BlingDrake"
    },
    "Halfway Off The BalconyBig Sean": {
      "artist": "Big Sean",
      "song": "Halfway Off The Balcony",
      "rank": "98",
      "streams": "4728672",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Halfway Off The BalconyBig Sean"
    },
    "Jump Out The WindowBig Sean": {
      "artist": "Big Sean",
      "song": "Jump Out The Window",
      "rank": "111",
      "streams": "4485894",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Jump Out The WindowBig Sean"
    },
    "Owe MeBig Sean": {
      "artist": "Big Sean",
      "song": "Owe Me",
      "rank": "137",
      "streams": "3793026",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Owe MeBig Sean"
    },
    "LightBig Sean": {
      "artist": "Big Sean",
      "song": "Light",
      "rank": "159",
      "streams": "3409899",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "LightBig Sean"
    },
    "Voices In My Head/Stick To The PlanBig Sean": {
      "artist": "Big Sean",
      "song": "Voices In My Head/Stick To The Plan",
      "rank": "163",
      "streams": "3370644",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Voices In My Head/Stick To The PlanBig Sean"
    },
    "Taped Up Heart (feat. Clara Mae)KREAM": {
      "artist": "KREAM",
      "song": "Taped Up Heart (feat. Clara Mae)",
      "rank": "198",
      "streams": "2871891",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Taped Up Heart (feat. Clara Mae)KREAM"
    },
    "Used to ThisFuture": {
      "artist": "Future",
      "song": "Used to This",
      "rank": "195",
      "streams": "2901747",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Used to ThisFuture"
    },
    "Call CastingMigos": {
      "artist": "Migos",
      "song": "Call Casting",
      "rank": "116",
      "streams": "4238619",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Call CastingMigos"
    },
    "You Was RightLil Uzi Vert": {
      "artist": "Lil Uzi Vert",
      "song": "You Was Right",
      "rank": "177",
      "streams": "3052662",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "You Was RightLil Uzi Vert"
    },
    "Bigger Than MeBig Sean": {
      "artist": "Big Sean",
      "song": "Bigger Than Me",
      "rank": "192",
      "streams": "2922341",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "Bigger Than MeBig Sean"
    },
    "Another Day Of Sun - From \"La La Land\" SoundtrackLa La Land Cast": {
      "artist": "La La Land Cast",
      "song": "Another Day Of Sun - From \"La La Land\" Soundtrack",
      "rank": "190",
      "streams": "2777451",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "Another Day Of Sun - From \"La La Land\" SoundtrackLa La Land Cast"
    },
    "I Miss YouGrey": {
      "artist": "Grey",
      "song": "I Miss You",
      "rank": "195",
      "streams": "2900036",
      "country": "global",
      "week": "2017-02-03--2017-02-10",
      "songArtist": "I Miss YouGrey"
    },
    "What Do You Mean?Justin Bieber": {
      "artist": "Justin Bieber",
      "song": "What Do You Mean?",
      "rank": "155",
      "streams": "3372990",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "What Do You Mean?Justin Bieber"
    },
    "SexCheat Codes": {
      "artist": "Cheat Codes",
      "song": "Sex",
      "rank": "160",
      "streams": "3264349",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SexCheat Codes"
    },
    "PartyChris Brown": {
      "artist": "Chris Brown",
      "song": "Party",
      "rank": "187",
      "streams": "2752112",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "PartyChris Brown"
    },
    "Trust Nobody (feat. Selena Gomez & Tory Lanez)Cashmere Cat": {
      "artist": "Cashmere Cat",
      "song": "Trust Nobody (feat. Selena Gomez & Tory Lanez)",
      "rank": "97",
      "streams": "4571592",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Trust Nobody (feat. Selena Gomez & Tory Lanez)Cashmere Cat"
    },
    "RosesThe Chainsmokers": {
      "artist": "The Chainsmokers",
      "song": "Roses",
      "rank": "154",
      "streams": "3373168",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "RosesThe Chainsmokers"
    },
    "CocoonMilky Chance": {
      "artist": "Milky Chance",
      "song": "Cocoon",
      "rank": "188",
      "streams": "2643532",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "CocoonMilky Chance"
    },
    "Cuatro BabysMaluma": {
      "artist": "Maluma",
      "song": "Cuatro Babys",
      "rank": "163",
      "streams": "3249429",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Cuatro BabysMaluma"
    },
    "Culture (feat. DJ Khaled)Migos": {
      "artist": "Migos",
      "song": "Culture (feat. DJ Khaled)",
      "rank": "182",
      "streams": "2968217",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Culture (feat. DJ Khaled)Migos"
    },
    "Juju On That Beat (TZ Anthem)Zay Hilfigerrr": {
      "artist": "Zay Hilfigerrr",
      "song": "Juju On That Beat (TZ Anthem)",
      "rank": "80",
      "streams": "5077939",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Juju On That Beat (TZ Anthem)Zay Hilfigerrr"
    },
    "Brown Paper BagMigos": {
      "artist": "Migos",
      "song": "Brown Paper Bag",
      "rank": "193",
      "streams": "2829619",
      "country": "global",
      "week": "2017-01-27--2017-02-03",
      "songArtist": "Brown Paper BagMigos"
    },
    "Ain't My FaultZara Larsson": {
      "artist": "Zara Larsson",
      "song": "Ain't My Fault",
      "rank": "157",
      "streams": "3315571",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Ain't My FaultZara Larsson"
    },
    "SelfishPnB Rock": {
      "artist": "PnB Rock",
      "song": "Selfish",
      "rank": "170",
      "streams": "2958265",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "SelfishPnB Rock"
    },
    "Moving On and Getting OverJohn Mayer": {
      "artist": "John Mayer",
      "song": "Moving On and Getting Over",
      "rank": "139",
      "streams": "3596116",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "Moving On and Getting OverJohn Mayer"
    },
    "Love on the WeekendJohn Mayer": {
      "artist": "John Mayer",
      "song": "Love on the Weekend",
      "rank": "164",
      "streams": "3079976",
      "country": "global",
      "week": "2017-01-20--2017-01-27",
      "songArtist": "Love on the WeekendJohn Mayer"
    },
    "Oh LordMiC LOWRY": {
      "artist": "MiC LOWRY",
      "song": "Oh Lord",
      "rank": "165",
      "streams": "2991349",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Oh LordMiC LOWRY"
    },
    "On HoldThe xx": {
      "artist": "The xx",
      "song": "On Hold",
      "rank": "103",
      "streams": "4391043",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "On HoldThe xx"
    },
    "Die For YouThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Die For You",
      "rank": "179",
      "streams": "3045375",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Die For YouThe Weeknd"
    },
    "Let Me Hold You (Turn Me On)Dante Klein": {
      "artist": "Dante Klein",
      "song": "Let Me Hold You (Turn Me On)",
      "rank": "193",
      "streams": "2925768",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Let Me Hold You (Turn Me On)Dante Klein"
    },
    "NeighborsJ. Cole": {
      "artist": "J. Cole",
      "song": "Neighbors",
      "rank": "120",
      "streams": "4005289",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "NeighborsJ. Cole"
    },
    "OOOUUUYoung M.A": {
      "artist": "Young M.A",
      "song": "OOOUUU",
      "rank": "125",
      "streams": "3813380",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "OOOUUUYoung M.A"
    },
    "Say Something LovingThe xx": {
      "artist": "The xx",
      "song": "Say Something Loving",
      "rank": "120",
      "streams": "3923573",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Say Something LovingThe xx"
    },
    "DangerousThe xx": {
      "artist": "The xx",
      "song": "Dangerous",
      "rank": "144",
      "streams": "3445230",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "DangerousThe xx"
    },
    "Deu OndaMC G15": {
      "artist": "MC G15",
      "song": "Deu Onda",
      "rank": "117",
      "streams": "4054555",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Deu OndaMC G15"
    },
    "On My WayTiësto": {
      "artist": "Tiësto",
      "song": "On My Way",
      "rank": "183",
      "streams": "2907354",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "On My WayTiësto"
    },
    "Dynamite (feat. Pretty Sister)Nause": {
      "artist": "Nause",
      "song": "Dynamite (feat. Pretty Sister)",
      "rank": "147",
      "streams": "3460528",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Dynamite (feat. Pretty Sister)Nause"
    },
    "Not Afraid AnymoreHalsey": {
      "artist": "Halsey",
      "song": "Not Afraid Anymore",
      "rank": "189",
      "streams": "2827992",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Not Afraid AnymoreHalsey"
    },
    "Rockin’The Weeknd": {
      "artist": "The Weeknd",
      "song": "Rockin’",
      "rank": "145",
      "streams": "3466167",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Rockin’The Weeknd"
    },
    "Somebody ElseVÉRITÉ": {
      "artist": "VÉRITÉ",
      "song": "Somebody Else",
      "rank": "196",
      "streams": "2753947",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "Somebody ElseVÉRITÉ"
    },
    "No MoneyGalantis": {
      "artist": "Galantis",
      "song": "No Money",
      "rank": "175",
      "streams": "3085962",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "No MoneyGalantis"
    },
    "LipsThe xx": {
      "artist": "The xx",
      "song": "Lips",
      "rank": "198",
      "streams": "2705104",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "LipsThe xx"
    },
    "Can't Feel My FaceThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Can't Feel My Face",
      "rank": "168",
      "streams": "2970917",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Can't Feel My FaceThe Weeknd"
    },
    "I Dare YouThe xx": {
      "artist": "The xx",
      "song": "I Dare You",
      "rank": "200",
      "streams": "2692337",
      "country": "global",
      "week": "2017-01-13--2017-01-20",
      "songArtist": "I Dare YouThe xx"
    },
    "The A TeamEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "The A Team",
      "rank": "102",
      "streams": "4292924",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "The A TeamEd Sheeran"
    },
    "Miss YouJames Hersey": {
      "artist": "James Hersey",
      "song": "Miss You",
      "rank": "181",
      "streams": "3028820",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Miss YouJames Hersey"
    },
    "Give Me LoveEd Sheeran": {
      "artist": "Ed Sheeran",
      "song": "Give Me Love",
      "rank": "168",
      "streams": "2968164",
      "country": "global",
      "week": "2017-01-06--2017-01-13",
      "songArtist": "Give Me LoveEd Sheeran"
    },
    "ImmortalJ. Cole": {
      "artist": "J. Cole",
      "song": "Immortal",
      "rank": "131",
      "streams": "3778441",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "ImmortalJ. Cole"
    },
    "Cool GirlTove Lo": {
      "artist": "Tove Lo",
      "song": "Cool Girl",
      "rank": "162",
      "streams": "3034502",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Cool GirlTove Lo"
    },
    "Wake Up Where You AreState of Sound": {
      "artist": "State of Sound",
      "song": "Wake Up Where You Are",
      "rank": "170",
      "streams": "3130502",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Wake Up Where You AreState of Sound"
    },
    "You & MeMarc E. Bassy": {
      "artist": "Marc E. Bassy",
      "song": "You & Me",
      "rank": "199",
      "streams": "2853532",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "You & MeMarc E. Bassy"
    },
    "Please Don't GoJoel Adams": {
      "artist": "Joel Adams",
      "song": "Please Don't Go",
      "rank": "167",
      "streams": "2975537",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Please Don't GoJoel Adams"
    },
    "GoldKiiara": {
      "artist": "Kiiara",
      "song": "Gold",
      "rank": "158",
      "streams": "3071101",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "GoldKiiara"
    },
    "Say It (feat. Tove Lo)Flume": {
      "artist": "Flume",
      "song": "Say It (feat. Tove Lo)",
      "rank": "175",
      "streams": "2895921",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Say It (feat. Tove Lo)Flume"
    },
    "Would I Lie To You - Radio EditDavid Guetta": {
      "artist": "David Guetta",
      "song": "Would I Lie To You - Radio Edit",
      "rank": "160",
      "streams": "3050982",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Would I Lie To You - Radio EditDavid Guetta"
    },
    "Hymn For The WeekendColdplay": {
      "artist": "Coldplay",
      "song": "Hymn For The Weekend",
      "rank": "200",
      "streams": "2847836",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Hymn For The WeekendColdplay"
    },
    "True ColorsThe Weeknd": {
      "artist": "The Weeknd",
      "song": "True Colors",
      "rank": "187",
      "streams": "2669838",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "True ColorsThe Weeknd"
    },
    "SecretsThe Weeknd": {
      "artist": "The Weeknd",
      "song": "Secrets",
      "rank": "191",
      "streams": "2956670",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "SecretsThe Weeknd"
    },
    "AlarmAnne-Marie": {
      "artist": "Anne-Marie",
      "song": "Alarm",
      "rank": "155",
      "streams": "3111623",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "AlarmAnne-Marie"
    },
    "Uptown FunkMark Ronson": {
      "artist": "Mark Ronson",
      "song": "Uptown Funk",
      "rank": "181",
      "streams": "2706799",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Uptown FunkMark Ronson"
    },
    "My HouseFlo Rida": {
      "artist": "Flo Rida",
      "song": "My House",
      "rank": "185",
      "streams": "2673597",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "My HouseFlo Rida"
    },
    "Sugar (feat. Francesco Yates)Robin Schulz": {
      "artist": "Robin Schulz",
      "song": "Sugar (feat. Francesco Yates)",
      "rank": "186",
      "streams": "2670842",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Sugar (feat. Francesco Yates)Robin Schulz"
    },
    "Adventure Of A LifetimeColdplay": {
      "artist": "Coldplay",
      "song": "Adventure Of A Lifetime",
      "rank": "189",
      "streams": "2638669",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Adventure Of A LifetimeColdplay"
    },
    "Hasta el AmanecerNicky Jam": {
      "artist": "Nicky Jam",
      "song": "Hasta el Amanecer",
      "rank": "191",
      "streams": "2630356",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Hasta el AmanecerNicky Jam"
    },
    "Stay (feat. Maty Noyes)Kygo": {
      "artist": "Kygo",
      "song": "Stay (feat. Maty Noyes)",
      "rank": "194",
      "streams": "2598170",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "Stay (feat. Maty Noyes)Kygo"
    },
    "FamousKanye West": {
      "artist": "Kanye West",
      "song": "Famous",
      "rank": "196",
      "streams": "2580512",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "FamousKanye West"
    },
    "SugarMaroon 5": {
      "artist": "Maroon 5",
      "song": "Sugar",
      "rank": "198",
      "streams": "2541963",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "SugarMaroon 5"
    },
    "BoboJ Balvin": {
      "artist": "J Balvin",
      "song": "Bobo",
      "rank": "200",
      "streams": "2525159",
      "country": "global",
      "week": "2016-12-30--2017-01-06",
      "songArtist": "BoboJ Balvin"
    },
    "Sleigh RidePhil Spector": {
      "artist": "Phil Spector",
      "song": "Sleigh Ride",
      "rank": "137",
      "streams": "3593955",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Sleigh RidePhil Spector"
    },
    "Careless WhisperGeorge Michael": {
      "artist": "George Michael",
      "song": "Careless Whisper",
      "rank": "164",
      "streams": "3224559",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Careless WhisperGeorge Michael"
    },
    "All I Want For Christmas Is YouMichael Bublé": {
      "artist": "Michael Bublé",
      "song": "All I Want For Christmas Is You",
      "rank": "187",
      "streams": "2978819",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "All I Want For Christmas Is YouMichael Bublé"
    },
    "Faith - RemasteredGeorge Michael": {
      "artist": "George Michael",
      "song": "Faith - Remastered",
      "rank": "192",
      "streams": "2934931",
      "country": "global",
      "week": "2016-12-23--2016-12-30",
      "songArtist": "Faith - RemasteredGeorge Michael"
    }
  }








