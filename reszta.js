  const IMG_PATH = "ikonki/";
  const ICONS = {
    ikonka: "prez/close.png",
    piasek: "https://img.m2icondb.com/30195.png",
    medal: "https://img.m2icondb.com/50050.png",
    bodzio: "https://img.m2icondb.com/25040.png",
    owoc: "https://img.m2icondb.com/71107.png",
    metal: "https://img.m2icondb.com/30064.png",
    fasolka: "https://img.m2icondb.com/70102.png",
    zmianka: "https://img.m2icondb.com/71084.png",
    maczuga: "https://img.m2icondb.com/30194.png",
    kosci: "https://img.m2icondb.com/30193.png",
    egzo: "https://img.m2icondb.com/71001.png",
    rada: "https://img.m2icondb.com/71094.png",
    kamol: "https://img.m2icondb.com/50513.png",
    kdwoj: "https://img.m2icondb.com/28003.png",
    kdninja: "https://img.m2icondb.com/28004.png",
    kdsura: "https://img.m2icondb.com/28005.png",
    kdszaman: "https://img.m2icondb.com/28006.png",
    kdpotwora: "https://img.m2icondb.com/28007.png",
    kduchylenia: "https://img.m2icondb.com/28008.png",
    kduniku: "https://img.m2icondb.com/28009.png",
    kdmagii: "https://img.m2icondb.com/28010.png",
    kdpowtorki: "https://img.m2icondb.com/28002.png",
    kdwita: "https://img.m2icondb.com/28011.png",
    kdsmierci: "https://img.m2icondb.com/28001.png",
    kdpenetry: "https://img.m2icondb.com/28000.png",
    kdobrony: "https://img.m2icondb.com/28012.png",
    kdspeeda: "https://img.m2icondb.com/28013.png",

  };

    const przetopImages = [
    "https://img.m2icondb.com/50628.png", 
    "https://img.m2icondb.com/50629.png", 
    "https://img.m2icondb.com/50630.png", 
    "https://img.m2icondb.com/50631.png",
    "https://img.m2icondb.com/50627.png", 
    "https://img.m2icondb.com/50626.png", 
    "https://img.m2icondb.com/50625.png", 
    "https://img.m2icondb.com/50624.png",
    "https://img.m2icondb.com/50623.png", 
    "https://img.m2icondb.com/50621.png", 
    "https://img.m2icondb.com/50632.png", 
    "https://img.m2icondb.com/50633.png",
    "https://img.m2icondb.com/50634.png",
    "https://img.m2icondb.com/50636.png"
  ];

  const craftImages = [
    "https://img.m2icondb.com/50608.png",
    "https://img.m2icondb.com/50609.png",
    "https://img.m2icondb.com/50610.png",
    "https://img.m2icondb.com/50611.png",
    "https://img.m2icondb.com/50607.png",
    "https://img.m2icondb.com/50606.png",
    "https://img.m2icondb.com/50605.png",
    "https://img.m2icondb.com/50604.png",
    "https://img.m2icondb.com/50603.png",
    "https://img.m2icondb.com/50601.png",
    "https://img.m2icondb.com/50612.png",
    "https://img.m2icondb.com/50613.png",
    "https://img.m2icondb.com/50614.png",
    "https://img.m2icondb.com/50616.png"
  ];

  const sharedMaterialInfo = {
    rada: {
      name: "Rada Pustelnika",
      desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności."
    },
    egzo: {
      name: "Zwój Egzorcyzmu",
      desc: "Uwalnia Cię od klątwy złego ducha."
    },
    kamol: {
      name: "Kamień Duchowy",
      desc: "Legendarny kamień używany do treningu wewnętrznego."
    },
    bodzio: {
      name: "Zwój Błogosławieństwa",
      desc: "Usuwa ryzyko zniszczenia przedmiotu podczas jego ulepszania."
    }
  };

  const przetopNames = [
    "Ruda Ebonitu",
    "Kawałek Perły",
    "Ruda Białego Złota",
    "Ruda Kryształu",
    "Ruda Jadeitu",
    "Ruda Złota",
    "Ruda Srebra",
    "Ruda Miedzi",
    "Skamieniałe Drewno",
    "Diamentowy Kamień",
    "Ruda Ametystu",
    "Ruda Niebiańskich Łez",
    "Ruda Kryształu Duszy"
    , "Ruda Granatu"
  ];

  const przetopProductNames = [
    "Ebonit",
    "Perła",
    "Białe Złoto",
    "Kryształ",
    "Jadeit",
    "Złoto",
    "Srebro",
    "Miedz",
    "Skamieniałe Drewno",
    "Diament",
    "Ametyst",
    "Niebiańskie Łzy",
    "Kryształ Duszy"
    , "Granat"
  ];

  const przetopRecipes = przetopImages.map((sourceImg, index) => ({
    id: `przetop-${index}`,
    sourceImg,
    resultImg: craftImages[index],
    title: przetopProductNames[index] ?? `Przetop ${index + 1}`,
    materials: [
      { img: craftImages[index], count: 100, name: przetopNames[index] ?? `Przetop ${index + 1}`, desc: "Można użyć do produkcji przedmiotów." },
      { img: ICONS.rada, count: index === przetopImages.length - 1 ? 5 : 2, ...sharedMaterialInfo.rada },
      { img: ICONS.egzo, count: index === przetopImages.length - 1 ? 5 : 2, ...sharedMaterialInfo.egzo },
      { img: ICONS.kamol, count: 5, ...sharedMaterialInfo.kamol },
      { img: ICONS.bodzio, count: 5, ...sharedMaterialInfo.bodzio }
    ]
  }));

  const essenceRecipeName = "Esencja Przetopu";
  const essenceRecipeDesc = "Drogocenna esencja potrzebna do wytwarzania pasów. Zdobędziesz ją od Deokbae!";
  const essenceRecipes = craftImages.map((oreImg, index) => ({
    id: `essence-${index}`,
    sourceImg: oreImg,
    sourceName: przetopNames[index] ?? `Ruda ${index + 1}`,
    sourceDesc: "Można użyć do produkcji przedmiotów.",
    resultImg: "https://img.m2icondb.com/31270.png",
    resultName: essenceRecipeName,
    resultDesc: essenceRecipeDesc,
    materials: [
      {
        img: oreImg,
        count: 200,
        name: przetopNames[index] ?? `Ruda ${index + 1}`,
        desc: "Można użyć do produkcji przedmiotów."
      }
    ]
  }));


  const items = [
    {
      img: ICONS.kdwoj, count: 1,
      name: "Kamień Duszy Wojownika +5",
      bonuses: ["Silny przeciwko Wojownikom +30%"]
    },
    { img: ICONS.kdwoj, count: 15, name: "Kamień Duszy Wojownika +4" },
    { img: ICONS.piasek, count: 50, name: "Piasek Kwarcowy", desc: "Wygląda na to, że ten piasek służy kamiennym kreaturom z pustyni jako krew." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdninja, count: 1,
      name: "Kamień Duszy Ninjy +5",
      bonuses: ["Silny przeciwko Ninja +30%"]
    },
    { img: ICONS.kdninja, count: 15, name: "Kamień Duszy Ninji +4" },
    { img: ICONS.kosci, count: 100, name: "Kość Palca", desc: "Wszystko, co zostało po poległym bohaterze." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdsura, count: 1,
      name: "Kamień Duszy Sury +5",
      bonuses: ["Silny przeciwko Sura +30%"]
    },
    { img: ICONS.kdsura, count: 15, name: "Kamień Duszy Sury +4" },
    { img: ICONS.maczuga, count: 50, name: "Orkowa Maczuga", desc: "Brzydka broń ze stabilnymi kolcami." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdszaman, count: 1,
      name: "Kamień Duszy Szamana +5",
      bonuses: ["Silny przeciwko Szamanom +30%"]
    },
    { img: ICONS.kdszaman, count: 15, name: "Kamień Duszy Szamana +4" },
    { img: ICONS.medal, count: 100, name: "Medal Konny", desc: "Stajenny potrzebuje tego Medalu, aby wpisać wynik testów kwalifikacyjnych." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdpotwora, count: 1,
      name: "Kamień Duszy Potwora +5",
      bonuses: ["Silny przeciwko Potworom +15%"]
    },
    { img: ICONS.kdpotwora, count: 15, name: "Kamień Duszy Potwora +4" },
    { img: ICONS.metal, count: 10, name: "Magiczny Kamień", desc: "Bryła legendarnego metalu zapewniającego najlepsze wyniki podczas ulepszania przedmiotów." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kduchylenia, count: 1,
      name: "Kamień Duszy Uchylenia +5",
      bonuses: ["Szansa na blok ciosu +12%"]
    },
    { img: ICONS.kduchylenia, count: 15, name: "Kamień Duszy Uchylenia +4" },
    { img: ICONS.bodzio, count: 200, name: "Zwój Błogosławieństwa", desc: "Usuwa ryzyko zniszczenia przedmiotu podczas jego ulepszania." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kduniku, count: 1,
      name: "Kamień Duszy Uniku +5",
      bonuses: ["Szansa na uniknięcie strzał +12%"]
    },
    { img: ICONS.kduniku, count: 15, name: "Kamień Duszy Uniku +4" },
    { img: ICONS.zmianka, count: 1000, name: "Zaczarowanie Przedmiotu", desc: "Usuwa bonusy z twojego przedmiotu, po czym dodaje nowe. Dotyczy tylko bonusów 1-5." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdmagii, count: 1,
      name: "Kamień Duszy Magii +5",
      bonuses: ["Inteligencja +8"]
    },
    { img: ICONS.kdmagii, count: 15, name: "Kamień Duszy Magii +4" },
    { img: ICONS.fasolka, count: 150, name: "Fasolka Zen", desc: "Zmniejsza przynależność do zła. Zwiększa przynależność do dobra." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdpowtorki, count: 1,
      name: "Kamień Duszy Powtórki +5",
      bonuses: ["Szybkość Zaklęć +30%"]
    },
    { img: ICONS.kdpowtorki, count: 15, name: "Kamień Duszy Powtórki +4" },
    { img: ICONS.owoc, count: 100, name: "Owoc Życia", desc: "Zwiększa Punkty Rangi." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    {
      img: ICONS.kdwita, count: 1,
      name: "Kamień Duszy Witalności +5",
      bonuses: ["Max. HP + 1000"]
    },
    { img: ICONS.kdwita, count: 15, name: "Kamień Duszy Witalności +4" },
    { img: ICONS.kamol, count: 200, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdsmierci, count: 1,
      name: "Kamień Duszy Śmierci +5",
      bonuses: ["Szansa na cios krytyczny +15%"]
    },
    { img: ICONS.kdsmierci, count: 15, name: "Kamień Duszy Śmierci +4" },
    { img: ICONS.egzo, count: 200, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdpenetry, count: 1,
      name: "Kamień Duszy Penetracji +5",
      bonuses: ["Szansa na przyszywający cios +15%"]
    },
    { img: ICONS.kdpenetry, count: 15, name: "Kamień Duszy Penetracji +4" },
    { img: ICONS.rada, count: 200, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdobrony, count: 1,
      name: "Kamień Duszy Obrony +5",
      bonuses: ["Obrona +50"]
    },
    { img: ICONS.kdobrony, count: 15, name: "Kamień Duszy Obrony +4" },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    { img: ICONS.ikonka, count: 0 },
    {
      img: ICONS.kdspeeda, count: 1,
      name: "Kamień Duszy Przyśpieszenia +5",
      bonuses: ["Szybkość ruchu +35%"]
    },
    { img: ICONS.kdspeeda, count: 15, name: "Kamień Duszy Przyśpieszenia +4" },
    { img: ICONS.egzo, count: 20, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
    { img: ICONS.rada, count: 20, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
    { img: ICONS.kamol, count: 20, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." },
    { img: ICONS.ikonka, count: 0 },

  ];

  const soulStoneShard = {
    img: "https://img.m2icondb.com/28044.png",
    count: 20,
    name: "Odłamek Kamienia",
    desc: "Drogocenny odłamek potrzebny do wytwarzania kamieni dusz +5! Zdobędziesz go od Jae-Seon-Kim!"
  };

  const soulStoneRecipes = [
    { img: ICONS.kdwoj, title: "Kamień Duszy Wojownika +5", baseName: "Kamień Duszy Wojownika +4", bonus: "Silny przeciwko Wojownikom +40%" },
    { img: ICONS.kdninja, title: "Kamień Duszy Ninji +5", baseName: "Kamień Duszy Ninji +4", bonus: "Silny przeciwko Ninja +40%" },
    { img: ICONS.kdsura, title: "Kamień Duszy Sury +5", baseName: "Kamień Duszy Sury +4", bonus: "Silny przeciwko Sura +40%" },
    { img: ICONS.kdszaman, title: "Kamień Duszy Szamana +5", baseName: "Kamień Duszy Szamana +4", bonus: "Silny przeciwko Szamanom +40%" },
    { img: ICONS.kdpotwora, title: "Kamień Duszy Potwora +5", baseName: "Kamień Duszy Potwora +4", bonus: "Silny przeciwko Potworom +15%" },
    { img: ICONS.kduchylenia, title: "Kamień Duszy Uchylenia +5", baseName: "Kamień Duszy Uchylenia +4", bonus: "Szansa na blok ciosu +12%" },
    { img: ICONS.kduniku, title: "Kamień Duszy Uniku +5", baseName: "Kamień Duszy Uniku +4", bonus: "Szansa na uniknięcie strzał +12%" },
    { img: ICONS.kdmagii, title: "Kamień Duszy Magii +5", baseName: "Kamień Duszy Magii +4", bonus: "Inteligencja +10" },
    { img: ICONS.kdpowtorki, title: "Kamień Duszy Powtórki +5", baseName: "Kamień Duszy Powtórki +4", bonus: "Szybkość Zaklęć +35%" },
    { img: ICONS.kdwita, title: "Kamień Duszy Witalności +5", baseName: "Kamień Duszy Witalności +4", bonus: "Max. HP + 2000" },
    { img: ICONS.kdsmierci, title: "Kamień Duszy Śmierci +5", baseName: "Kamień Duszy Śmierci +4", bonus: "Szansa na cios krytyczny +15%" },
    { img: ICONS.kdpenetry, title: "Kamień Duszy Penetracji +5", baseName: "Kamień Duszy Penetracji +4", bonus: "Szansa na przeszywający cios +15%" },
    { img: ICONS.kdobrony, title: "Kamień Duszy Obrony +5", baseName: "Kamień Duszy Obrony +4", bonus: "Obrona +80" },
    { img: ICONS.kdspeeda, title: "Kamień Duszy Przyśpieszenia +5", baseName: "Kamień Duszy Przyśpieszenia +4", bonus: "Szybkość ruchu +45%" }
  ];

  items.splice(
    0,
    items.length,
    ...soulStoneRecipes.flatMap((recipe) => ([
      {
        img: recipe.img,
        count: 1,
        name: recipe.title,
        bonuses: [recipe.bonus]
      },
      { img: soulStoneShard.img, count: soulStoneShard.count, name: soulStoneShard.name, desc: soulStoneShard.desc },
      { img: recipe.img, count: 5, name: recipe.baseName },
      { img: ICONS.egzo, count: 5, name: "Zwój Egzorcyzmu", desc: "Uwalnia Cię od klątwy złego ducha." },
      { img: ICONS.rada, count: 5, name: "Rada Pustelnika", desc: "Podnosi szansę na pomyślne przeczytanie następnej Księgi Umiejętności." },
      { img: ICONS.kamol, count: 5, name: "Kamień Duchowy", desc: "Legendarny kamień używany do treningu wewnętrznego." }
    ]))
  );

  /*
  const container = document.getElementById("inventory");

  items.forEach((it) => {
    const slot = document.createElement("div");
    slot.className = "inv-slot";
    slot.innerHTML = `
      <img src="${it.img}" alt="">
      <span class="inv-count">${it.count ?? ""}</span>
      ${it.bonuses ? `
        <div class="inv-tip">
          <h4>${it.name ?? "Przedmiot"}</h4>
          <ul>${it.bonuses.map(b => `<li>${b}</li>`).join("")}</ul>
        </div>
      ` : "" }
    `;
    container.appendChild(slot);
  });


*/

const container = document.getElementById("inventory");
const tabsContainer = document.getElementById("inventoryTabs");
const soulStonePreview = document.getElementById("soulStonePreview");
const soulStoneNameTooltip = document.getElementById("soulStoneNameTooltip");
const soulStoneBonusTooltip = document.getElementById("soulStoneBonusTooltip");
const soulStoneTooltipType = document.getElementById("soulStoneTooltipType");

const weaponSoulStoneKeywords = [
  "Wojownika",
  "Ninji",
  "Sury",
  "Szamana",
  "Potwora",
  "Powtórki",
  "Śmierci",
  "Penetracji"
];

const blocks = Array.from({ length: items.length / 6 }, (_, index) => {
  const blockItems = items.slice(index * 6, index * 6 + 6);
  const resultItem = blockItems[0];

  return {
    id: `stone-${index}`,
    title: resultItem?.name ?? `Kamień Duszy ${index + 1}`,
    shortTitle: (resultItem?.name ?? `Kamień Duszy ${index + 1}`)
      .split(" ")
      .slice(2, -1)
      .join(" "),
    bonus: resultItem?.bonuses?.[0] ?? "",
    typeLabel: weaponSoulStoneKeywords.some((keyword) => (resultItem?.name ?? "").includes(keyword)) ? "Broń" : "Zbroja",
    icon: resultItem?.img ?? "",
    items: blockItems
  };
});

function makeSlot(it){
  const slot = document.createElement("div");
  slot.className = "soulforge__material-slot belt-frame item-slot";

  if (it.name || it.desc) {
    slot.tabIndex = 0;
  }

  slot.innerHTML = `
    <img src="${it.img}" alt="${it.name ?? "Przedmiot"}">
    <span class="soulforge__count">${it.count ?? ""}</span>
    ${it.name || it.desc ? `
      <div class="item-tooltip soulforge__material-tooltip">
        <h4>${it.name ?? "Przedmiot"}</h4>
        ${it.desc ? `<p>${it.desc}</p>` : ""}
      </div>` : ""
    }
  `;
  return slot;
}

function renderInventory(container, block){
  if (!container || !block) {
    return;
  }

  container.innerHTML = "";
  block.items.slice(1).forEach((it) => container.appendChild(makeSlot(it)));
}

function updateSoulStonePreview(block) {
  if (!block) {
    return;
  }

  if (soulStonePreview) {
    soulStonePreview.src = block.icon;
    soulStonePreview.alt = block.title;
  }

  if (soulStoneNameTooltip) {
    soulStoneNameTooltip.textContent = block.title;
  }

  if (soulStoneBonusTooltip) {
    soulStoneBonusTooltip.textContent = block.bonus;
  }

  if (soulStoneTooltipType) {
    soulStoneTooltipType.textContent = block.typeLabel;
  }
}

function setActiveSoulStone(blockId) {
  const activeBlock = blocks.find((block) => block.id === blockId) ?? blocks[0];
  if (!activeBlock) {
    return;
  }

  if (tabsContainer) {
    tabsContainer.querySelectorAll(".soulforge__tab").forEach((button) => {
      const isActive = button.dataset.blockId === activeBlock.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  renderInventory(container, activeBlock);
  updateSoulStonePreview(activeBlock);
}

function initSoulforge() {
  if (!container || !tabsContainer || !blocks.length) {
    return;
  }

  tabsContainer.innerHTML = "";

  blocks.forEach((block, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "soulforge__tab";
    button.dataset.blockId = block.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.innerHTML = `
      <img src="${block.icon}" alt="">
      <span>${block.shortTitle}</span>
    `;

    button.addEventListener("click", () => {
      setActiveSoulStone(block.id);
    });

    tabsContainer.appendChild(button);
  });

  setActiveSoulStone(blocks[0].id);
}

initSoulforge();

function initKamienieSlider() {
  const slider = document.querySelector("[data-slider]");

  if (!slider) {
    return;
  }

  const track = slider.querySelector(".kamienie__track");
  const prevButton = slider.querySelector(".kamienie__arrow--prev");
  const nextButton = slider.querySelector(".kamienie__arrow--next");

  if (!track || !prevButton || !nextButton) {
    return;
  }

  const originalSlides = Array.from(track.querySelectorAll(".kamienie__slide"));
  if (!originalSlides.length) {
    return;
  }

  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
  firstClone.setAttribute("aria-hidden", "true");
  lastClone.setAttribute("aria-hidden", "true");
  track.insertBefore(lastClone, originalSlides[0]);
  track.appendChild(firstClone);

  const slides = Array.from(track.querySelectorAll(".kamienie__slide"));
  let currentIndex = 1;

  function updateActiveSlide() {
    slides.forEach((slide) => slide.classList.remove("is-active"));
    if (slides[currentIndex]) {
      slides[currentIndex].classList.add("is-active");
    }
  }

  function jumpTo(index) {
    track.classList.add("kamienie__track--no-transition");
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveSlide();

    requestAnimationFrame(() => {
      track.classList.remove("kamienie__track--no-transition");
    });
  }

  function moveSlides(step) {
    if (currentIndex === slides.length - 1) {
      jumpTo(1);
    } else if (currentIndex === 0) {
      jumpTo(slides.length - 2);
    }

    requestAnimationFrame(() => {
      currentIndex += step;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateActiveSlide();
    });
  }

  track.addEventListener("transitionend", () => {
    if (currentIndex === slides.length - 1) {
      jumpTo(1);
    } else if (currentIndex === 0) {
      jumpTo(slides.length - 2);
    }
  });

  prevButton.addEventListener("click", () => moveSlides(-1));
  nextButton.addEventListener("click", () => moveSlides(1));

  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      moveSlides(-1);
    }

    if (event.key === "ArrowRight") {
      moveSlides(1);
    }
  });

  jumpTo(currentIndex);
}

initKamienieSlider();

function initAdminSlider() {
  const slider = document.querySelector("[data-admin-slider]");

  if (!slider) {
    return;
  }

  const track = slider.querySelector(".admin-slider__track");
  const slides = Array.from(slider.querySelectorAll(".admin-member--slide"));
  const prevButton = slider.querySelector(".admin-slider__arrow--prev");
  const nextButton = slider.querySelector(".admin-slider__arrow--next");

  if (!track || !slides.length || !prevButton || !nextButton) {
    return;
  }

  let currentIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (currentIndex < 0) {
    currentIndex = 0;
    slides[0].classList.add("is-active");
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === currentIndex);
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }

    if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }
  });

  updateSlider();
}

initAdminSlider();

function initOptiShowcase() {
  const showcase = document.querySelector("[data-opti-showcase]");

  if (!showcase) {
    return;
  }

  const tabs = Array.from(showcase.querySelectorAll("[data-opti-tab]"));
  const title = document.getElementById("optiShowcaseTitle");
  const desc = document.getElementById("optiShowcaseDesc");
  const media = document.getElementById("optiShowcaseMedia");
  const empty = showcase.querySelector(".opti-showcase__empty");

  if (!tabs.length || !title || !desc || !media || !empty) {
    return;
  }

  function setActiveTab(tab) {
    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    title.textContent = tab.dataset.title || "";
    desc.textContent = tab.dataset.desc || "";

    const mediaSrc = tab.dataset.media || "";
    if (mediaSrc) {
      media.src = mediaSrc;
      media.alt = tab.dataset.title || "Podgląd funkcji optymalizacji";
      media.hidden = false;
      empty.hidden = true;
    } else {
      media.src = "";
      media.alt = "";
      media.hidden = true;
      empty.hidden = false;
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab));
  });

  setActiveTab(tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0]);
}

function initShopOfflinePreview() {
  const popup = document.getElementById("shopPreviewPopup");
  const popupImage = document.getElementById("shopPreviewPopupImage");
  const triggers = Array.from(document.querySelectorAll("[data-shop-preview]"));

  if (!popup || !popupImage || !triggers.length) {
    return;
  }

  const closeButton = popup.querySelector(".shop-preview-popup__close");
  let activeTrigger = null;

  function closePopup() {
    popup.hidden = true;
    popupImage.src = "";
    popupImage.alt = "";
    popup.classList.remove("shop-preview-popup--large");
    popup.classList.remove("shop-preview-popup--small");
    popup.classList.remove("shop-preview-popup--xlarge");
    popup.classList.remove("shop-preview-popup--centered");
    activeTrigger = null;
  }

  function openPopup(trigger) {
    const imageSrc = trigger.dataset.shopPreview;
    const imageAlt = trigger.dataset.shopPreviewAlt;
    const previewSize = trigger.dataset.shopPreviewSize;
    popupImage.src = imageSrc;
    popupImage.alt = imageAlt || "";
    popup.classList.toggle("shop-preview-popup--large", previewSize === "large");
    popup.classList.toggle("shop-preview-popup--small", previewSize === "small");
    popup.classList.toggle("shop-preview-popup--xlarge", previewSize === "xlarge");
    popup.classList.add("shop-preview-popup--centered");
    popup.hidden = false;
    activeTrigger = trigger;
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();

      if (!popup.hidden && activeTrigger === trigger) {
        closePopup();
        return;
      }

      openPopup(trigger);
    });
  });

  closeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePopup();
  });

  popup.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (!popup.hidden) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popup.hidden) {
      closePopup();
    }
  });
}

initShopOfflinePreview();

function initSidepanelPreview() {
  const popup = document.getElementById("sidepanelPreviewPopup");
  const popupImage = document.getElementById("sidepanelPreviewPopupImage");
  const previewTriggers = Array.from(document.querySelectorAll("[data-sidepanel-preview]"));
  const scrollTriggers = Array.from(document.querySelectorAll("[data-sidepanel-scroll]"));

  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetSelector = trigger.dataset.sidepanelScroll;
      const target = targetSelector ? document.querySelector(targetSelector) : null;

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (!popup || !popupImage || !previewTriggers.length) {
    return;
  }

  const closeButton = popup.querySelector(".shop-preview-popup__close");
  let activeTrigger = null;

  function closePopup() {
    popup.hidden = true;
    popupImage.src = "";
    popupImage.alt = "";
    popup.classList.remove("shop-preview-popup--large");
    popup.classList.remove("shop-preview-popup--small");
    popup.classList.remove("shop-preview-popup--xlarge");
    popup.classList.remove("shop-preview-popup--centered");
    activeTrigger = null;
  }

  function openPopup(trigger) {
    const imageSrc = trigger.dataset.sidepanelPreview;
    const imageAlt = trigger.dataset.sidepanelPreviewAlt;
    const previewSize = trigger.dataset.sidepanelPreviewSize;
    popupImage.src = imageSrc;
    popupImage.alt = imageAlt || "";
    popup.classList.toggle("shop-preview-popup--large", previewSize === "large");
    popup.classList.toggle("shop-preview-popup--small", previewSize === "small");
    popup.classList.toggle("shop-preview-popup--xlarge", previewSize === "xlarge");
    popup.classList.add("shop-preview-popup--centered");
    popup.hidden = false;
    activeTrigger = trigger;
  }

  previewTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();

      if (!popup.hidden && activeTrigger === trigger) {
        closePopup();
        return;
      }

      openPopup(trigger);
    });
  });

  closeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePopup();
  });

  popup.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (!popup.hidden) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popup.hidden) {
      closePopup();
    }
  });
}

initSidepanelPreview();

function initQolPreview() {
  const popup = document.getElementById("qolPreviewPopup");
  const popupImage = document.getElementById("qolPreviewPopupImage");
  const popupVideo = document.getElementById("qolPreviewPopupVideo");
  const triggers = Array.from(document.querySelectorAll(".qol-item__trigger"));

  if (!popup || !popupImage || !popupVideo || !triggers.length) {
    return;
  }

  const closeButton = popup.querySelector(".shop-preview-popup__close");
  let activeTrigger = null;

  function closePopup() {
    popup.hidden = true;
    popupImage.src = "";
    popupImage.alt = "";
    popupImage.hidden = true;
    popupVideo.pause();
    popupVideo.currentTime = 0;
    popupVideo.removeAttribute("src");
    popupVideo.load();
    popupVideo.hidden = true;
    popup.classList.remove("shop-preview-popup--large");
    popup.classList.remove("shop-preview-popup--small");
    popup.classList.remove("shop-preview-popup--xlarge");
    popup.classList.remove("shop-preview-popup--centered");
    activeTrigger = null;
  }

  function openPopup(trigger) {
    const previewSrc = trigger.dataset.qolPreview;
    const previewAlt = trigger.dataset.qolPreviewAlt || trigger.dataset.qolTitle || "";
    const previewSize = trigger.dataset.qolPreviewSize;

    if (!previewSrc) {
      return;
    }

    const isVideo = /\.mp4($|\?)/i.test(previewSrc);

    popupImage.hidden = true;
    popupVideo.hidden = true;

    if (isVideo) {
      popupVideo.src = previewSrc;
      popupVideo.loop = true;
      popupVideo.hidden = false;
      popupVideo.currentTime = 0;
      popupVideo.play().catch(() => {});
    } else {
      popupImage.src = previewSrc;
      popupImage.alt = previewAlt;
      popupImage.hidden = false;
    }

    popup.classList.toggle("shop-preview-popup--large", previewSize === "large");
    popup.classList.toggle("shop-preview-popup--small", previewSize === "small");
    popup.classList.toggle("shop-preview-popup--xlarge", previewSize === "xlarge");
    popup.classList.add("shop-preview-popup--centered");
    popup.hidden = false;
    activeTrigger = trigger;
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();

      if (!trigger.dataset.qolPreview) {
        return;
      }

      if (!popup.hidden && activeTrigger === trigger) {
        closePopup();
        return;
      }

      openPopup(trigger);
    });
  });

  closeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    closePopup();
  });

  popup.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (!popup.hidden) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popup.hidden) {
      closePopup();
    }
  });
}

initQolPreview();

function initChoiceSliders() {
  const sliders = document.querySelectorAll("[data-choice-slider]");

  sliders.forEach((slider) => {
    const items = Array.from(slider.querySelectorAll(".choice-list li"));

    if (!items.length) {
      return;
    }

    let currentIndex = items.findIndex((item) => item.classList.contains("is-active"));
    if (currentIndex < 0) {
      currentIndex = 0;
      items[0].classList.add("is-active");
    }

    window.setInterval(() => {
      items[currentIndex].classList.remove("is-active");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("is-active");
    }, 2000);
  });
}

initChoiceSliders();

function initBeltCraftDetails() {
  const detailBlocks = Array.from(document.querySelectorAll(".belt-craft-details"));

  if (detailBlocks.length < 2) {
    return;
  }

  let isSyncing = false;

  detailBlocks.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (isSyncing) {
        return;
      }

      isSyncing = true;
      const shouldOpen = details.open;

      detailBlocks.forEach((block) => {
        block.open = shouldOpen;
      });

      isSyncing = false;
    });
  });
}

initBeltCraftDetails();

const whetstoneToggle = document.getElementById("whetstoneToggle");
const whetstonePanels = {
  "75": document.getElementById("whetstonePanel75"),
  "55": document.getElementById("whetstonePanel55")
};
const whetstone55Menu = document.getElementById("whetstone55Menu");
const whetstone55Materials = document.getElementById("whetstone55Materials");
const whetstone55Preview = document.getElementById("whetstone55Preview");
const whetstone55Name = document.getElementById("whetstone55Name");
const whetstone55Desc = document.getElementById("whetstone55Desc");

const whetstone55Recipes = [
  { id: "mgl", img: "https://img.m2icondb.com/00120.png", name: "Miecz Lat. Maga +6" },
  { id: "oz", img: "https://img.m2icondb.com/03110.png", name: "Ostrze Zbawienia +6" },
  { id: "zn", img: "https://img.m2icondb.com/02110.png", name: "Łuk Jednorożca +6" },
  { id: "lj", img: "https://img.m2icondb.com/05070.png", name: "Złoty Robaczy Dzwon +6" },
  { id: "bw", img: "https://img.m2icondb.com/07110.png", name: "Brwisty Wachlarz +6" },
  { id: "zrd", img: "https://img.m2icondb.com/01080.png", name: "Żebrowy Nóż +6" }
];

function makeWhetstone55Material(item) {
  return `
    <div class="material belt-frame item-slot">
      <img src="${item.img}" alt="${item.name}">
      <span class="soulforge__count">${item.count}</span>
      <div class="item-tooltip soulforge__material-tooltip">
        <h4>${item.name}</h4>
        ${item.desc ? `<p>${item.desc}</p>` : ""}
      </div>
    </div>
  `;
}

function setActiveWhetstonePanel(panelId) {
  Object.entries(whetstonePanels).forEach(([key, panel]) => {
    if (!panel) {
      return;
    }

    const isActive = key === panelId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (whetstoneToggle) {
    whetstoneToggle.querySelectorAll(".whetstone-toggle__button").forEach((button) => {
      const isActive = button.dataset.whetstonePanel === panelId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
}

function setActiveWhetstone55(recipeId) {
  const recipe = whetstone55Recipes.find((entry) => entry.id === recipeId) ?? whetstone55Recipes[0];
  if (!recipe) {
    return;
  }

  if (whetstone55Preview) {
    whetstone55Preview.src = "/img/30528.tga";
    whetstone55Preview.alt = "Osełka 55";
  }

  if (whetstone55Name) {
    whetstone55Name.textContent = "Osełka 55";
  }

  if (whetstone55Desc) {
    whetstone55Desc.textContent = "Osełka dzięki której możesz dodać bonus silny przeciwko potworom do broni na 55 poziom!";
  }

  if (whetstone55Materials) {
    whetstone55Materials.innerHTML = [
      { img: recipe.img, count: 1, name: recipe.name },
      { img: "/img/30266.tga", count: 1, name: "Kieł Wodza", desc: "Drogocenny ulepszacz do broni na 55 poziom." },
      { img: "https://img.m2icondb.com/money.png", count: "500k", name: "Yang", desc: "Opłata potrzebna do wytworzenia osełki 55." }
    ].map((item) => makeWhetstone55Material(item)).join("");
  }

  if (whetstone55Menu) {
    whetstone55Menu.querySelectorAll(".whetstone55-menu__button").forEach((button) => {
      const isActive = button.dataset.recipeId === recipe.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
}

function initWhetstones() {
  if (whetstoneToggle) {
    whetstoneToggle.querySelectorAll(".whetstone-toggle__button").forEach((button) => {
      button.addEventListener("click", () => {
        setActiveWhetstonePanel(button.dataset.whetstonePanel);
      });
    });
  }

  if (whetstone55Menu) {
    whetstone55Menu.innerHTML = "";

    whetstone55Recipes.forEach((recipe, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "whetstone55-menu__button belt-frame";
      button.dataset.recipeId = recipe.id;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      button.innerHTML = `<img src="${recipe.img}" alt="${recipe.name}">`;
      button.addEventListener("click", () => {
        setActiveWhetstone55(recipe.id);
      });
      whetstone55Menu.appendChild(button);
    });

    setActiveWhetstone55(whetstone55Recipes[0].id);
  }

  setActiveWhetstonePanel("75");
}

initWhetstones();

function initOselkiSwitcher() {
  const switcher = document.querySelector("[data-oselki-switcher]");
  const buttons = Array.from(document.querySelectorAll("[data-oselka-card]"));
  const title = document.getElementById("oselkiCraftingTitle");
  const text = document.getElementById("oselkiCraftingText");

  if (!switcher || !buttons.length || !title || !text) {
    return;
  }

  const contentById = {
    "75": {
      title: "Crafting osełki do broni 75",
      text: "Tu pojawi się crafting dla osełki do broni 75."
    },
    "55": {
      title: "Crafting osełki do broni 55",
      text: "Tu pojawi się crafting dla osełki do broni 55."
    }
  };

  function setActive(id) {
    buttons.forEach((button) => {
      const isActive = button.dataset.oselkaId === id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const content = contentById[id] ?? contentById["75"];
    title.textContent = content.title;
    text.textContent = content.text;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setActive(button.dataset.oselkaId);
    });
  });

  setActive("75");
}

initOselkiSwitcher();

function initOselkiCraftingShowcase() {
  const switcher = document.querySelector("[data-oselki-switcher]");
  const buttons = Array.from(document.querySelectorAll("[data-oselka-card]"));
  const title = document.getElementById("oselkiCraftingTitle");
  const result = document.getElementById("oselkiCraftingResult");
  const resultName = document.getElementById("oselkiResultName");
  const resultDesc = document.getElementById("oselkiResultDesc");
  const materials = document.getElementById("oselkiCraftingMaterials");
  const prevButton = document.getElementById("oselkiCraftingPrev");
  const nextButton = document.getElementById("oselkiCraftingNext");

  if (!switcher || !buttons.length || !title || !result || !resultName || !resultDesc || !materials || !prevButton || !nextButton) {
    return;
  }

  const recipeGroups = {
    "75": {
      title: "Crafting osełki do broni 75",
      result: {
        name: "Osełka do broni 75",
        desc: "Osełka dzięki której możesz dodać bonus silny przeciwko potworom do broni 75 poziom!",
        img: "img/30529.tga"
      },
      recipes: [
        {
          id: "bambusowy-dzwon",
          materials: [
            {
              name: "Bambusowy Dzwon +6",
              levelLine: "Od Poziomu: 75",
              bonusLines: [
                "Wartość Ataku: 135 - 171",
                "Wartość Magicznego Ataku: 133 - 143",
                "Szybkość Ataku +23%"
              ],
              equip: "Szaman",
              img: "https://img.m2icondb.com/05120.png",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["1kk Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "skrzydla-demona-chakr",
          materials: [
            {
              name: "Skrzydła Demona Chakr. +6",
              levelLine: "Od Poziomu: 75",
              bonusLines: [
                "Wartość Ataku: 146 - 155",
                "Szybkość Ataku +23%"
              ],
              equip: "Ninja",
              img: "https://img.m2icondb.com/01130.png",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["1kk Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "lwi-miecz",
          materials: [
            {
              name: "Lwi Miecz +6",
              levelLine: "Od Poziomu: 75",
              bonusLines: [
                "Wartość Ataku: 138 - 178",
                "Wartość Magicznego Ataku: 153 - 173",
                "Szybkość Ataku +23%"
              ],
              equip: "Sura",
              img: "https://img.m2icondb.com/00190.png",
              slots: 2
            },
            {
              name: "Yang",
              bonusLines: ["1kk Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "zatruty-miecz",
          materials: [
            {
              name: "Zatruty Miecz +6",
              levelLine: "Od Poziomu: 75",
              bonusLines: [
                "Wartość Ataku: 163 - 203",
                "Szybkość Ataku +23%"
              ],
              equip: "Wojownik, Ninja, Sura",
              img: "https://img.m2icondb.com/00180.png",
              slots: 2
            },
            {
              name: "Yang",
              bonusLines: ["1kk Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "stalowy-luk-kruka",
          materials: [
            {
              name: "Stalowy Łuk Kruka +6",
              levelLine: "Od Poziomu: 75",
              bonusLines: [
                "Wartość Ataku: 241 - 341",
                "Szybkość Ataku +23%"
              ],
              equip: "Ninja",
              img: "https://img.m2icondb.com/02170.png",
              slots: 2
            },
            {
              name: "Yang",
              bonusLines: ["1kk Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "miecz-zalu",
          materials: [
            {
              name: "Miecz Żalu +6",
              levelLine: "Od Poziomu: 75",
              bonusLines: [
                "Wartość Ataku: 196 - 244",
                "Szybkość Ataku +23%"
              ],
              equip: "Wojownik",
              img: "https://img.m2icondb.com/03160.png",
              slots: 3
            },
            {
              name: "Yang",
              bonusLines: ["1kk Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        }
      ]
    },
    "55": {
      title: "Crafting osełki do broni 55",
      result: {
        name: "Osełka do broni 55",
        desc: "Osełka dzięki której możesz dodać bonus silny przeciwko potworom do broni 55 poziom!",
        img: "img/30528.tga"
      },
      recipes: [
        {
          id: "zloty-robaczy-dzwon",
          materials: [
            {
              name: "Złoty Robaczy Dzwon +6",
              levelLine: "Od Poziomu: 55",
              bonusLines: [
                "Wartość Ataku: 113 - 135",
                "Wartość Magicznego Ataku: 92 - 122",
                "Szybkość Ataku +23%"
              ],
              equip: "Szaman",
              img: "https://img.m2icondb.com/05070.png",
              slots: 1
            },
            {
              name: "Kieł Wodza",
              bonusLines: ["Drogocenny ulepszacz do broni na 55 poziom."],
              img: "img/30266.tga",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["500k Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "brwisty-wachlarz",
          materials: [
            {
              name: "Brwisty Wachlarz +6",
              levelLine: "Od Poziomu: 55",
              bonusLines: [
                "Wartość Magicznego Ataku: 105 - 145",
                "Wartość Ataku: 87 - 113",
                "Szybkość Ataku +19%"
              ],
              equip: "Szaman",
              img: "https://img.m2icondb.com/07110.png",
              slots: 1
            },
            {
              name: "Kieł Wodza",
              bonusLines: ["Drogocenny ulepszacz do broni na 55 poziom."],
              img: "img/30266.tga",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["500k Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "zebrowy-noz",
          materials: [
            {
              name: "Żebrowy Nóż +6",
              levelLine: "Od Poziomu: 55",
              bonusLines: [
                "Wartość Ataku: 118 - 138",
                "Szybkość Ataku +15%"
              ],
              equip: "Ninja",
              img: "https://img.m2icondb.com/01080.png",
              slots: 1
            },
            {
              name: "Kieł Wodza",
              bonusLines: ["Drogocenny ulepszacz do broni na 55 poziom."],
              img: "img/30266.tga",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["500k Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "luk-jednorozca",
          materials: [
            {
              name: "Łuk Jednorożca +6",
              levelLine: "Od Poziomu: 55",
              bonusLines: [
                "Wartość Ataku: 180 - 254",
                "Szybkość Ataku +19%"
              ],
              equip: "Ninja",
              img: "https://img.m2icondb.com/02110.png",
              slots: 2
            },
            {
              name: "Kieł Wodza",
              bonusLines: ["Drogocenny ulepszacz do broni na 55 poziom."],
              img: "img/30266.tga",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["500k Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "miecz-lat-maga",
          materials: [
            {
              name: "Miecz Łat. Maga +6",
              levelLine: "Od Poziomu: 55",
              bonusLines: [
                "Wartość Ataku: 109 - 150",
                "Wartość Magicznego Ataku: 107 - 143",
                "Szybkość Ataku +17%"
              ],
              equip: "Wojownik, Ninja, Sura",
              img: "https://img.m2icondb.com/00120.png",
              slots: 2
            },
            {
              name: "Kieł Wodza",
              bonusLines: ["Drogocenny ulepszacz do broni na 55 poziom."],
              img: "img/30266.tga",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["500k Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        },
        {
          id: "ostrze-zbawienia",
          materials: [
            {
              name: "Ostrze Zbawienia +6",
              levelLine: "Od Poziomu: 55",
              bonusLines: [
                "Wartość Ataku: 121 - 189",
                "Szybkość Ataku +20%"
              ],
              equip: "Wojownik",
              img: "https://img.m2icondb.com/03110.png",
              slots: 3
            },
            {
              name: "Kieł Wodza",
              bonusLines: ["Drogocenny ulepszacz do broni na 55 poziom."],
              img: "img/30266.tga",
              slots: 1
            },
            {
              name: "Yang",
              bonusLines: ["500k Yang"],
              img: "https://img.m2icondb.com/money.png",
              slots: 1
            }
          ]
        }
      ]
    }
  };

  const totalSlots = 12;
  let activeGroupId = "75";
  let activeRecipeIndex = 0;

  function renderResult(group) {
    result.innerHTML = `
      <div class="belt-frame item-slot oselki-crafting__result-slot">
        <img src="${group.result.img}" alt="${group.result.name}">
      </div>
      <div class="belt-frame item-slot"></div>
      <div class="belt-frame item-slot"></div>
    `;

    resultName.textContent = group.result.name;
    resultDesc.textContent = group.result.desc;
  }

  function buildMaterialTooltip(item) {
    const bonusLines = (item.bonusLines || []).map((line) => `<li>${line}</li>`).join("");
    const levelLine = item.levelLine ? `<p>${item.levelLine}</p>` : "";
    const equipLine = item.equip
      ? `<p class="tytan-weapon__tooltip-equip">[Przeznaczone dla]</p><p>${item.equip}</p>`
      : "";
    const shouldWrapTooltip = !item.levelLine && !item.equip && (item.bonusLines || []).some((line) => line.length > 30);
    const tooltipClass = shouldWrapTooltip ? " tytan-weapon__tooltip--wrap" : "";

    return `
      <div class="tytan-weapon__tooltip${tooltipClass}">
        <h4>${item.name}</h4>
        ${levelLine}
        ${bonusLines ? `<ul>${bonusLines}</ul>` : ""}
        ${equipLine}
      </div>
    `;
  }

  function getMaterialCountLabel(item) {
    if (item.countLabel) {
      return item.countLabel;
    }

    if (item.name === "Yang") {
      return "";
    }

    return "1";
  }

  function renderMaterials(recipe) {
    if (!recipe) {
      materials.innerHTML = Array.from({ length: totalSlots }, () => `<div class="belt-frame item-slot"></div>`).join("");
      return;
    }

    const usedSlots = recipe.materials.reduce((sum, item) => sum + (item.slots || 1), 0);
    const emptySlots = Math.max(0, totalSlots - usedSlots);

    materials.innerHTML = [
      ...recipe.materials.map((item) => `
        <div class="oselki-crafting__material oselki-crafting__material--slots-${item.slots || 1}">
          ${Array.from({ length: item.slots || 1 }, () => `<div class="belt-frame item-slot"></div>`).join("")}
          <img src="${item.img}" alt="${item.name}">
          <span class="oselki-crafting__material-count">${getMaterialCountLabel(item)}</span>
          ${buildMaterialTooltip(item)}
        </div>
      `),
      ...Array.from({ length: emptySlots }, () => `<div class="belt-frame item-slot"></div>`)
    ].join("");
  }

  function updateArrows(group) {
    const disabled = group.recipes.length <= 1;
    prevButton.disabled = disabled;
    nextButton.disabled = disabled;
  }

  function setActiveGroup(id) {
    buttons.forEach((button) => {
      const isActive = button.dataset.oselkaId === id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    activeGroupId = id;
    activeRecipeIndex = 0;

    const group = recipeGroups[id] ?? recipeGroups["75"];
    title.textContent = group.title;
    renderResult(group);
    renderMaterials(group.recipes[activeRecipeIndex]);
    updateArrows(group);
  }

  function moveRecipe(direction) {
    const group = recipeGroups[activeGroupId] ?? recipeGroups["75"];

    if (!group.recipes.length) {
      return;
    }

    activeRecipeIndex = (activeRecipeIndex + direction + group.recipes.length) % group.recipes.length;
    renderMaterials(group.recipes[activeRecipeIndex]);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveGroup(button.dataset.oselkaId);
    });
  });

  prevButton.addEventListener("click", () => moveRecipe(-1));
  nextButton.addEventListener("click", () => moveRecipe(1));

  setActiveGroup("75");
}

initOselkiCraftingShowcase();




const przetopImg = document.getElementById("przetopImg");
const przetopMenu = document.getElementById("przetopMenu");
const przetopMaterials = document.getElementById("przetopMaterials");
const przetopName = document.getElementById("przetopName");
const przetopDesc = document.getElementById("przetopDesc");
const essenceMenu = document.getElementById("essenceMenu");
const essenceMaterials = document.getElementById("essenceMaterials");
const essencePreview = document.getElementById("essencePreview");
const essenceName = document.getElementById("essenceName");
const essenceDesc = document.getElementById("essenceDesc");

function makePrzetopMaterial(item) {
  return `
    <div class="material belt-frame item-slot">
      <img src="${item.img}" alt="${item.name}">
      <span class="soulforge__count">${item.count}</span>
      ${item.name || item.desc ? `
        <div class="item-tooltip soulforge__material-tooltip">
          <h4>${item.name ?? "Przedmiot"}</h4>
          ${item.desc ? `<p>${item.desc}</p>` : ""}
        </div>` : ""
      }
    </div>
  `;
}

function makeEssenceMaterial(item) {
  return `
    <div class="material belt-frame item-slot">
      <img src="${item.img}" alt="${item.name}">
      <span class="soulforge__count">${item.count}</span>
      <div class="item-tooltip soulforge__material-tooltip">
        <h4>${item.name}</h4>
        ${item.desc ? `<p>${item.desc}</p>` : ""}
      </div>
    </div>
  `;
}

function setActivePrzetop(recipeId) {
  const recipe = przetopRecipes.find((entry) => entry.id === recipeId) ?? przetopRecipes[0];
  if (!recipe) {
    return;
  }

  if (przetopImg) {
    przetopImg.src = recipe.sourceImg;
    przetopImg.alt = recipe.title;
  }

  if (przetopName) {
    przetopName.textContent = recipe.title;
  }

  if (przetopDesc) {
    przetopDesc.textContent = "Możesz je przymocować do odpowiadających akcesoriów.";
  }

  if (przetopMaterials) {
    przetopMaterials.innerHTML = recipe.materials.map((item) => makePrzetopMaterial(item)).join("");
  }

  if (przetopMenu) {
    przetopMenu.querySelectorAll(".przetop-menu__button").forEach((button) => {
      const isActive = button.dataset.recipeId === recipe.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
}

function initPrzetopy() {
  if (!przetopMenu || !przetopMaterials || !przetopRecipes.length) {
    return;
  }

  przetopMenu.innerHTML = "";

  przetopRecipes.forEach((recipe, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "przetop-menu__button belt-frame";
    button.dataset.recipeId = recipe.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.innerHTML = `<img src="${recipe.sourceImg}" alt="${recipe.title}">`;
    button.addEventListener("click", () => {
      setActivePrzetop(recipe.id);
    });
    przetopMenu.appendChild(button);
  });

  setActivePrzetop(przetopRecipes[0].id);
}

initPrzetopy();

function setActiveEssence(recipeId) {
  const recipe = essenceRecipes.find((entry) => entry.id === recipeId) ?? essenceRecipes[0];
  if (!recipe) {
    return;
  }

  if (essencePreview) {
    essencePreview.src = recipe.resultImg;
    essencePreview.alt = recipe.resultName;
  }

  if (essenceName) {
    essenceName.textContent = recipe.resultName;
  }

  if (essenceDesc) {
    essenceDesc.textContent = recipe.resultDesc;
  }

  if (essenceMaterials) {
    essenceMaterials.innerHTML = recipe.materials.map((item) => makeEssenceMaterial(item)).join("");
  }

  if (essenceMenu) {
    essenceMenu.querySelectorAll(".essence-menu__button").forEach((button) => {
      const isActive = button.dataset.recipeId === recipe.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
}

function initEssenceCraft() {
  if (!essenceMenu || !essenceMaterials || !essenceRecipes.length) {
    return;
  }

  essenceMenu.innerHTML = "";

  essenceRecipes.forEach((recipe, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "essence-menu__button belt-frame";
    button.dataset.recipeId = recipe.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.innerHTML = `<img src="${recipe.sourceImg}" alt="${recipe.sourceName}">`;
    button.addEventListener("click", () => {
      setActiveEssence(recipe.id);
    });
    essenceMenu.appendChild(button);
  });

  setActiveEssence(essenceRecipes[0].id);
}

initEssenceCraft();

function initTytanArmor() {
  const root = document.querySelector("[data-tytan-armor]");
  const menu = document.getElementById("tytanArmorMenu");
  const modelButton = document.getElementById("tytanArmorModelButton");
  const modal = document.getElementById("tytanArmorModal");
  const modalMedia = document.getElementById("tytanArmorModalMedia");
  const modalVideo = document.getElementById("tytanArmorModalVideo");
  const modalEmpty = document.getElementById("tytanArmorModalEmpty");
  const sharedTytanModel = "https://pub-87b7ce98277d41f298ced742dab42b8c.r2.dev/Nowy%20projekt.mp4";

  if (!root || !menu || !modelButton || !modal || !modalMedia || !modalVideo || !modalEmpty) {
    return;
  }

  const closeButton = modal.querySelector(".tytan-armor-modal__close");
  const backdrop = modal.querySelector(".tytan-armor-modal__backdrop");

  const armors = [
    {
      id: "zbroja",
      name: "Zbroja Tytana +9",
      shortName: "Zbroja Tytana",
      img: "sets/20760.png",
      level: "Od Poziomu: 100",
      stats: ["Obrona 314", "Maks. PŻ +10%", "Średnie Obrażenia: 5%", "Silny przeciwko Potworom +20%"],
      className: "Wojownik",
      model: sharedTytanModel
    },
    {
      id: "ubranie",
      name: "Ubranie Tytana +9",
      shortName: "Ubranie Tytana",
      img: "sets/20770.png",
      level: "Od Poziomu: 100",
      stats: ["Obrona 314", "Maks. PŻ +10%", "Średnie Obrażenia: 5%", "Silny przeciwko Potworom +20%"],
      className: "Ninja",
      model: sharedTytanModel
    },
    {
      id: "pancerz",
      name: "Pancerz Tytana +9",
      shortName: "Pancerz Tytana",
      img: "sets/20780.png",
      level: "Od Poziomu: 100",
      stats: ["Obrona 314", "Maks. PŻ +10%", "Średnie Obrażenia: 5%", "Silny przeciwko Potworom +20%"],
      className: "Sura",
      model: sharedTytanModel
    },
    {
      id: "szata",
      name: "Szata Tytana +9",
      shortName: "Szata Tytana",
      img: "sets/20790.png",
      level: "Od Poziomu: 100",
      stats: ["Obrona 314", "Maks. PŻ +10%", "Średnie Obrażenia: 5%", "Silny przeciwko Potworom +20%"],
      className: "Szaman",
      model: sharedTytanModel
    }
  ];

  let activeArmor = armors[0];

  function closeModal() {
    modal.hidden = true;
    modalMedia.src = "";
    modalMedia.alt = "";
    modalMedia.hidden = true;
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.hidden = true;
    modalEmpty.hidden = true;
    document.body.classList.remove("scroll_block");
  }

  function openModal() {
    if (activeArmor.model) {
      const isVideo = /\.mp4($|\?)/i.test(activeArmor.model);
      if (isVideo) {
        modalVideo.src = activeArmor.model;
        modalVideo.loop = true;
        modalVideo.hidden = false;
        modalMedia.src = "";
        modalMedia.alt = "";
        modalMedia.hidden = true;
      } else {
        modalMedia.src = activeArmor.model;
        modalMedia.alt = activeArmor.name;
        modalMedia.hidden = false;
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = "";
        modalVideo.hidden = true;
      }
      modalEmpty.hidden = true;
    } else {
      modalMedia.src = "";
      modalMedia.alt = "";
      modalMedia.hidden = true;
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = "";
      modalVideo.hidden = true;
      modalEmpty.hidden = true;
    }

    modal.hidden = false;
    document.body.classList.add("scroll_block");
    if (!modalVideo.hidden) {
      modalVideo.currentTime = 0;
      const playPromise = modalVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }

  function renderArmor(armor) {
    activeArmor = armor;

    Array.from(menu.querySelectorAll(".tytan-armor__menu-button")).forEach((button) => {
      const isActive = button.dataset.armorId === armor.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  armors.forEach((armor, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tytan-armor__menu-button${index === 0 ? " is-active" : ""}`;
    button.dataset.armorId = armor.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.setAttribute("aria-label", armor.shortName);
    button.innerHTML = `
      <span class="tytan-armor__menu-stack">
        <span class="belt-frame item-slot" aria-hidden="true"></span>
        <span class="belt-frame item-slot" aria-hidden="true"></span>
        <img src="${armor.img}" alt="${armor.shortName}">
        <div class="tytan-armor__tooltip">
          <h4>${armor.name}</h4>
          <p>${armor.level}</p>
          <ul>${armor.stats.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="tytan-armor__tooltip-equip">[Przeznaczone dla]</p>
          <p>${armor.className}</p>
        </div>
      </span>
    `;
    button.addEventListener("click", () => renderArmor(armor));
    menu.appendChild(button);
  });

  modelButton.addEventListener("click", openModal);
  closeButton?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  renderArmor(activeArmor);
}

initTytanArmor();

function initHwangArmor() {
  const root = document.querySelector("[data-hwang-armor]");
  const menu = document.getElementById("hwangArmorMenu");

  if (!root || !menu) {
    return;
  }

  const armors = [
    {
      id: "wojownik",
      name: "Kostium Hwang",
      shortName: "Kostium Hwang",
      img: "https://img.m2icondb.com/11971.png",
      className: "Wojownik"
    },
    {
      id: "sura",
      name: "Kostium Hwang",
      shortName: "Kostium Hwang",
      img: "https://img.m2icondb.com/11973.png",
      className: "Sura"
    },
    {
      id: "szaman",
      name: "Kostium Hwang",
      shortName: "Kostium Hwang",
      img: "https://img.m2icondb.com/11974.png",
      className: "Szaman"
    },
    {
      id: "ninja",
      name: "Kostium Hwang",
      shortName: "Kostium Hwang",
      img: "https://img.m2icondb.com/11972.png",
      className: "Ninja"
    }
  ];

  function renderArmor(activeId) {
    Array.from(menu.querySelectorAll(".tytan-armor__menu-button")).forEach((button) => {
      const isActive = button.dataset.armorId === activeId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  armors.forEach((armor, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tytan-armor__menu-button${index === 0 ? " is-active" : ""}`;
    button.dataset.armorId = armor.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.setAttribute("aria-label", `${armor.shortName} - ${armor.className}`);
    button.innerHTML = `
      <span class="tytan-armor__menu-stack">
        <span class="belt-frame item-slot" aria-hidden="true"></span>
        <span class="belt-frame item-slot" aria-hidden="true"></span>
        <img src="${armor.img}" alt="${armor.shortName}">
        <div class="tytan-armor__tooltip">
          <h4>${armor.name}</h4>
          <ul>
            <li>Max. PŻ +1000</li>
            <li>Silny przeciwko ludziom +15%</li>
            <li>Silny przeciwko potworom +15%</li>
          </ul>
          <p class="tytan-armor__tooltip-equip">[Przeznaczone dla]</p>
          <p>${armor.className}</p>
        </div>
      </span>
    `;
    button.addEventListener("click", () => renderArmor(armor.id));
    menu.appendChild(button);
  });
}

initHwangArmor();

function initTytanWeapon() {
  const root = document.querySelector("[data-tytan-weapon]");
  const menu = document.getElementById("tytanWeaponMenu");
  const modelButton = document.getElementById("tytanWeaponModelButton");
  const modal = document.getElementById("tytanWeaponModal");
  const modalMedia = document.getElementById("tytanWeaponModalMedia");
  const modalVideo = document.getElementById("tytanWeaponModalVideo");
  const modalEmpty = document.getElementById("tytanWeaponModalEmpty");
  const sharedTytanModel = "https://pub-87b7ce98277d41f298ced742dab42b8c.r2.dev/Nowy%20projekt.mp4";

  if (!root || !menu || !modelButton || !modal || !modalMedia || !modalVideo || !modalEmpty) {
    return;
  }

  const closeButton = modal.querySelector(".tytan-weapon-modal__close");
  const backdrop = modal.querySelector(".tytan-weapon-modal__backdrop");

  const weapons = [
    {
      id: "sztylety",
      name: "Sztylety Tytana",
      img: "sets/chakryv1.png",
      frames: 1,
      level: "Od Poziomu: 95",
      stats: ["Wartość Ataku: 275 - 286", "Szybkość Ataku +26%", "Silny przeciwko Potworom +5%", "Silny przeciwko Metinom +5%"],
      className: "Ninja",
      model: sharedTytanModel
    },
    {
      id: "dzwon",
      name: "Dzwon Tytana",
      img: "sets/bambusv1.png",
      frames: 1,
      level: "Od Poziomu: 95",
      stats: ["Wartość Ataku: 261 - 306", "Wartość Magicznego Ataku: 258 - 271", "Szybkość Ataku +26%", "Silny przeciwko Potworom +5%", "Silny przeciwko Metinom +5%"],
      className: "Szaman",
      model: sharedTytanModel
    },
    {
      id: "miecz",
      name: "Miecz Tytana",
      img: "sets/trutav1.png",
      frames: 2,
      level: "Od Poziomu: 95",
      stats: ["Wartość Ataku: 296 - 346", "Szybkość Ataku +26%", "Silny przeciwko Potworom +5%", "Silny przeciwko Metinom +5%"],
      className: "Wojownik, Ninja, Sura",
      model: sharedTytanModel
    },
    {
      id: "klinga",
      name: "Klinga Tytana",
      img: "sets/lwiv1.png",
      frames: 2,
      level: "Od Poziomu: 95",
      stats: ["Wartość Ataku: 265 - 306", "Wartość Magicznego Ataku: 256 - 283", "Szybkość Ataku +26%", "Silny przeciwko Potworom +5%", "Silny przeciwko Metinom +5%"],
      className: "Sura",
      model: sharedTytanModel
    },
    {
      id: "luk",
      name: "Łuk Tytana",
      img: "sets/krukv1.png",
      frames: 2,
      level: "Od Poziomu: 95",
      stats: ["Wartość Ataku: 350 - 475", "Szybkość Ataku +26%", "Silny przeciwko Potworom +5%", "Silny przeciwko Metinom +5%"],
      className: "Ninja",
      model: sharedTytanModel
    },
    {
      id: "ostrze",
      name: "Ostrze Tytana",
      img: "sets/zalv1.png",
      frames: 3,
      level: "Od Poziomu: 95",
      stats: ["Wartość Ataku: 312 - 372", "Szybkość Ataku +16%", "Silny przeciwko Potworom +5%", "Silny przeciwko Metinom +5%"],
      className: "Wojownik",
      model: sharedTytanModel
    }
  ];

  let activeWeapon = weapons[0];

  function closeModal() {
    modal.hidden = true;
    modalMedia.src = "";
    modalMedia.alt = "";
    modalMedia.hidden = true;
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.hidden = true;
    modalEmpty.hidden = true;
    document.body.classList.remove("scroll_block");
  }

  function openModal() {
    if (activeWeapon.model) {
      const isVideo = /\.mp4($|\?)/i.test(activeWeapon.model);
      if (isVideo) {
        modalVideo.src = activeWeapon.model;
        modalVideo.loop = true;
        modalVideo.hidden = false;
        modalMedia.src = "";
        modalMedia.alt = "";
        modalMedia.hidden = true;
      } else {
        modalMedia.src = activeWeapon.model;
        modalMedia.alt = activeWeapon.name;
        modalMedia.hidden = false;
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = "";
        modalVideo.hidden = true;
      }
      modalEmpty.hidden = true;
    } else {
      modalMedia.src = "";
      modalMedia.alt = "";
      modalMedia.hidden = true;
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = "";
      modalVideo.hidden = true;
      modalEmpty.hidden = true;
    }

    modal.hidden = false;
    document.body.classList.add("scroll_block");
    if (!modalVideo.hidden) {
      modalVideo.currentTime = 0;
      const playPromise = modalVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }

  function renderWeapon(weapon) {
    activeWeapon = weapon;

    Array.from(menu.querySelectorAll(".tytan-weapon__menu-button")).forEach((button) => {
      const isActive = button.dataset.weaponId === weapon.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  weapons.forEach((weapon, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tytan-weapon__menu-button${index === 0 ? " is-active" : ""}`;
    button.dataset.weaponId = weapon.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.setAttribute("aria-label", weapon.name);

    const framesMarkup = Array.from({ length: weapon.frames }, () => `<span class="belt-frame item-slot" aria-hidden="true"></span>`).join("");

    button.innerHTML = `
      <span class="tytan-weapon__menu-stack tytan-weapon__stack--${weapon.frames}">
        ${framesMarkup}
        <img src="${weapon.img}" alt="${weapon.name}">
        <div class="tytan-weapon__tooltip">
          <h4>${weapon.name}</h4>
          <p>${weapon.level}</p>
          <ul>${weapon.stats.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="tytan-weapon__tooltip-equip">[Przeznaczone dla]</p>
          <p>${weapon.className}</p>
        </div>
      </span>
    `;
    button.addEventListener("click", () => renderWeapon(weapon));
    menu.appendChild(button);
  });

  modelButton.addEventListener("click", openModal);
  closeButton?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  renderWeapon(activeWeapon);
}

initTytanWeapon();

function initPvpArmor() {
  const root = document.querySelector("[data-pvp-armor]");
  const menu = document.getElementById("pvpArmorMenu");
  const modelButton = document.getElementById("pvpArmorModelButton");
  const modal = document.getElementById("pvpArmorModal");
  const modalMedia = document.getElementById("pvpArmorModalMedia");
  const modalVideo = document.getElementById("pvpArmorModalVideo");
  const modalEmpty = document.getElementById("pvpArmorModalEmpty");
  const sharedPvpArmorModel = "https://pub-87b7ce98277d41f298ced742dab42b8c.r2.dev/Nowy%20projekt%20(2).mp4";

  if (!root || !menu || !modelButton || !modal || !modalMedia || !modalVideo || !modalEmpty) {
    return;
  }

  const closeButton = modal.querySelector(".pvp-armor-modal__close");
  const backdrop = modal.querySelector(".pvp-armor-modal__backdrop");

  const armors = [
    {
      id: "wojownik",
      name: "Pancerz Diabel. Rogu +9",
      shortName: "Pancerz Diabel. Rogu",
      img: "https://img.m2icondb.com/20000.png",
      level: "Od Poziomu: 105",
      stats: ["Obrona 320", "Odporność na Magię -25%", "Maks. PŻ +15%"],
      className: "Wojownik",
      model: sharedPvpArmorModel
    },
    {
      id: "ninja",
      name: "Szata Smoczego Jeźdźca +9",
      shortName: "Szata Smoczego Jeźdźca",
      img: "https://img.m2icondb.com/20250.png",
      level: "Od Poziomu: 105",
      stats: ["Obrona 320", "Odporność na Magię -25%", "Maks. PŻ +15%"],
      className: "Ninja",
      model: sharedPvpArmorModel
    },
    {
      id: "szaman",
      name: "Złote Ubranie +9",
      shortName: "Złote Ubranie",
      img: "https://img.m2icondb.com/20750.png",
      level: "Od Poziomu: 105",
      stats: ["Obrona 320", "Odporność na Magię -25%", "Maks. PŻ +15%"],
      className: "Szaman",
      model: sharedPvpArmorModel
    },
    {
      id: "sura",
      name: "Pancerz Kościopłytowy +9",
      shortName: "Pancerz Kościopłytowy",
      img: "https://img.m2icondb.com/20500.png",
      level: "Od Poziomu: 105",
      stats: ["Obrona 320", "Odporność na Magię -25%", "Maks. PŻ +15%"],
      className: "Sura",
      model: sharedPvpArmorModel
    }
  ];

  let activeArmor = armors[0];

  function closeModal() {
    modal.hidden = true;
    modalMedia.src = "";
    modalMedia.alt = "";
    modalMedia.hidden = true;
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.hidden = true;
    modalEmpty.hidden = true;
    document.body.classList.remove("scroll_block");
  }

  function openModal() {
    if (activeArmor.model) {
      const isVideo = /\.mp4($|\?)/i.test(activeArmor.model);
      if (isVideo) {
        modalVideo.src = activeArmor.model;
        modalVideo.loop = true;
        modalVideo.hidden = false;
        modalMedia.src = "";
        modalMedia.alt = "";
        modalMedia.hidden = true;
      } else {
        modalMedia.src = activeArmor.model;
        modalMedia.alt = activeArmor.name;
        modalMedia.hidden = false;
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = "";
        modalVideo.hidden = true;
      }
      modalEmpty.hidden = true;
    } else {
      modalMedia.src = "";
      modalMedia.alt = "";
      modalMedia.hidden = true;
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = "";
      modalVideo.hidden = true;
      modalEmpty.hidden = true;
    }

    modal.hidden = false;
    document.body.classList.add("scroll_block");
    if (!modalVideo.hidden) {
      modalVideo.currentTime = 0;
      const playPromise = modalVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }

  function renderArmor(armor) {
    activeArmor = armor;

    Array.from(menu.querySelectorAll(".pvp-armor__menu-button")).forEach((button) => {
      const isActive = button.dataset.armorId === armor.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  armors.forEach((armor, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pvp-armor__menu-button${index === 0 ? " is-active" : ""}`;
    button.dataset.armorId = armor.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.setAttribute("aria-label", armor.shortName);
    button.innerHTML = `
      <span class="pvp-armor__menu-stack">
        <span class="belt-frame item-slot" aria-hidden="true"></span>
        <span class="belt-frame item-slot" aria-hidden="true"></span>
        <img src="${armor.img}" alt="${armor.shortName}">
        <div class="pvp-armor__tooltip">
          <h4>${armor.name}</h4>
          <p>${armor.level}</p>
          <ul>${armor.stats.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="pvp-armor__tooltip-equip">[Przeznaczone dla]</p>
          <p>${armor.className}</p>
        </div>
      </span>
    `;
    button.addEventListener("click", () => renderArmor(armor));
    menu.appendChild(button);
  });

  modelButton.addEventListener("click", openModal);
  closeButton?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  renderArmor(activeArmor);
}

initPvpArmor();

function initPvpWeapon() {
  const root = document.querySelector("[data-pvp-weapon]");
  const menu = document.getElementById("pvpWeaponMenu");
  const modelButton = document.getElementById("pvpWeaponModelButton");
  const modal = document.getElementById("pvpWeaponModal");
  const modalMedia = document.getElementById("pvpWeaponModalMedia");
  const modalVideo = document.getElementById("pvpWeaponModalVideo");
  const modalEmpty = document.getElementById("pvpWeaponModalEmpty");
  const sharedPvpWeaponModel = "https://pub-87b7ce98277d41f298ced742dab42b8c.r2.dev/Nowy%20projekt%20(2).mp4";

  if (!root || !menu || !modelButton || !modal || !modalMedia || !modalVideo || !modalEmpty) {
    return;
  }

  const closeButton = modal.querySelector(".pvp-weapon-modal__close");
  const backdrop = modal.querySelector(".pvp-weapon-modal__backdrop");

  const weapons = [
    {
      id: "kolec",
      name: "Kolec Pięciu Elementów +9",
      img: "https://img.m2icondb.com/01340.png",
      frames: 1,
      level: "Od Poziomu: 105",
      stats: ["Wartość Ataku: 440 - 465", "Szybkość Ataku +15%", "Silny przeciwko Ludziom +20%"],
      className: "Ninja",
      model: sharedPvpWeaponModel
    },
    {
      id: "wachlarz",
      name: "Wachlarz Leżąc. Smoka +9",
      img: "https://img.m2icondb.com/07370.png",
      frames: 1,
      level: "Od Poziomu: 105",
      stats: ["Wartość Magicznego Ataku: 365 - 448", "Wartość Ataku: 325 - 383", "Szybkość Ataku +15%", "Silny przeciwko Ludziom +20%"],
      className: "Szaman",
      model: sharedPvpWeaponModel
    },
    {
      id: "dzwon",
      name: "Dzwon Smoczego Ducha +9",
      img: "https://img.m2icondb.com/05340.png",
      frames: 1,
      level: "Od Poziomu: 105",
      stats: ["Wartość Ataku: 407 - 431", "Wartość Magicznego Ataku: 335 - 342", "Szybkość Ataku +26%", "Silny przeciwko Ludziom +20%"],
      className: "Szaman",
      model: sharedPvpWeaponModel
    },
    {
      id: "luk",
      name: "Łuk Feniksa +9",
      img: "https://img.m2icondb.com/02370.png",
      frames: 2,
      level: "Od Poziomu: 105",
      stats: ["Wartość Ataku: 487 - 687", "Szybkość Ataku +15%", "Silny przeciwko Ludziom +20%"],
      className: "Ninja",
      model: sharedPvpWeaponModel
    },
    {
      id: "runiczny",
      name: "Runiczny Miecz +9",
      img: "https://img.m2icondb.com/00460.png",
      frames: 2,
      level: "Od Poziomu: 105",
      stats: ["Wartość Ataku: 404 - 457", "Wartość Magicznego Ataku: 369 - 411", "Szybkość Ataku +15%", "Silny przeciwko Ludziom +20%"],
      className: "Wojownik, Ninja, Sura",
      model: sharedPvpWeaponModel
    },
    {
      id: "klinga",
      name: "Klinga Smoczego Kła +9",
      img: "https://img.m2icondb.com/00470.png",
      frames: 2,
      level: "Od Poziomu: 105",
      stats: ["Wartość Ataku: 366 - 414", "Wartość Magicznego Ataku: 424 - 471", "Szybkość Ataku +15%", "Silny przeciwko Ludziom +20%"],
      className: "Sura",
      model: sharedPvpWeaponModel
    },
    {
      id: "ostrze",
      name: "Ostrze Słońca +9",
      img: "https://img.m2icondb.com/03190.png",
      frames: 3,
      level: "Od Poziomu: 105",
      stats: ["Wartość Ataku: 417 - 498", "Szybkość Ataku +15%", "Silny przeciwko Ludziom +20%"],
      className: "Wojownik",
      model: sharedPvpWeaponModel
    }
  ];

  let activeWeapon = weapons[0];

  function closeModal() {
    modal.hidden = true;
    modalMedia.src = "";
    modalMedia.alt = "";
    modalMedia.hidden = true;
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.hidden = true;
    modalEmpty.hidden = true;
    document.body.classList.remove("scroll_block");
  }

  function openModal() {
    if (activeWeapon.model) {
      const isVideo = /\.mp4($|\?)/i.test(activeWeapon.model);
      if (isVideo) {
        modalVideo.src = activeWeapon.model;
        modalVideo.loop = true;
        modalVideo.hidden = false;
        modalMedia.src = "";
        modalMedia.alt = "";
        modalMedia.hidden = true;
      } else {
        modalMedia.src = activeWeapon.model;
        modalMedia.alt = activeWeapon.name;
        modalMedia.hidden = false;
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = "";
        modalVideo.hidden = true;
      }
      modalEmpty.hidden = true;
    } else {
      modalMedia.src = "";
      modalMedia.alt = "";
      modalMedia.hidden = true;
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = "";
      modalVideo.hidden = true;
      modalEmpty.hidden = true;
    }

    modal.hidden = false;
    document.body.classList.add("scroll_block");
    if (!modalVideo.hidden) {
      modalVideo.currentTime = 0;
      const playPromise = modalVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }

  function renderWeapon(weapon) {
    activeWeapon = weapon;

    Array.from(menu.querySelectorAll(".pvp-weapon__menu-button")).forEach((button) => {
      const isActive = button.dataset.weaponId === weapon.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  weapons.forEach((weapon, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pvp-weapon__menu-button${index === 0 ? " is-active" : ""}`;
    button.dataset.weaponId = weapon.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.setAttribute("aria-label", weapon.name);

    const framesMarkup = Array.from({ length: weapon.frames }, () => `<span class="belt-frame item-slot" aria-hidden="true"></span>`).join("");

    button.innerHTML = `
      <span class="pvp-weapon__menu-stack pvp-weapon__stack--${weapon.frames}">
        ${framesMarkup}
        <img src="${weapon.img}" alt="${weapon.name}">
        <div class="pvp-weapon__tooltip">
          <h4>${weapon.name}</h4>
          <p>${weapon.level}</p>
          <ul>${weapon.stats.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="pvp-weapon__tooltip-equip">[Przeznaczone dla]</p>
          <p>${weapon.className}</p>
        </div>
      </span>
    `;
    button.addEventListener("click", () => renderWeapon(weapon));
    menu.appendChild(button);
  });

  modelButton.addEventListener("click", openModal);
  closeButton?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  renderWeapon(activeWeapon);
}

initPvpWeapon();

function initMissionSwitch() {
  const root = document.querySelector("[data-mission-switch]");
  if (!root) {
    return;
  }

  const tabs = Array.from(root.querySelectorAll("[data-mission-tab]"));
  const panels = Array.from(root.querySelectorAll("[data-mission-panel]"));

  if (!tabs.length || !panels.length) {
    return;
  }

  function setActiveTab(targetId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.missionTab === targetId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.missionPanel === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab.dataset.missionTab);
    });
  });

  setActiveTab("biolog");
}

initMissionSwitch();

function initPvpHelmetRotation() {
  const image = document.getElementById("pvpHelmetImg");
  const title = document.getElementById("pvpHelmetTitle");
  const classes = document.getElementById("pvpHelmetClasses");

  if (!image || !title || !classes) {
    return;
  }

  const helmets = [
    {
      name: "Hełm Mistrza Wojny +9",
      img: "https://img.m2icondb.com/12280.png",
      alt: "Hełm Mistrza Wojny",
      className: "Wojownik"
    },
    {
      name: "Pajęczy Kaptur +9",
      img: "https://img.m2icondb.com/12540.png",
      alt: "Pajęczy Kaptur",
      className: "Ninja"
    },
    {
      name: "Kapelusz Duszy +9",
      img: "https://img.m2icondb.com/12680.png",
      alt: "Kapelusz Duszy",
      className: "Szaman"
    },
    {
      name: "Magiczny Hełm +9",
      img: "https://img.m2icondb.com/12400.png",
      alt: "Magiczny Hełm",
      className: "Sura"
    }
  ];

  let currentIndex = 0;

  function renderHelmet(index) {
    const helmet = helmets[index];
    image.src = helmet.img;
    image.alt = helmet.alt;
    title.textContent = helmet.name;
    classes.textContent = helmet.className;
  }

  renderHelmet(currentIndex);

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % helmets.length;
    renderHelmet(currentIndex);
  }, 2000);
}

initPvpHelmetRotation();

function initTytanShieldLink() {
  const shieldImage = document.getElementById("Tarcza-TytanĂłw") || document.getElementById("Tarcza-Tytanów");
  if (!shieldImage) {
    return;
  }

  const slot = shieldImage.closest(".item-slot");
  const tooltip = slot?.querySelector(".item-tooltip");
  const targetSection = document.getElementById("section_21");

  if (slot) {
    slot.classList.add("item-slot--link");
    slot.tabIndex = 0;
    slot.setAttribute("role", "link");
    slot.setAttribute("aria-label", "Przejdź do sekcji Sety Itemów");

    const goToSection = () => {
      if (!targetSection) {
        return;
      }

      window.scrollTo({
        top: targetSection.offsetTop - 120,
        behavior: "smooth",
      });
    };

    slot.addEventListener("click", goToSection);
    slot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goToSection();
      }
    });
  }

  if (tooltip) {
    tooltip.className = "item-tooltip soulforge__material-tooltip item-link-tooltip";
    tooltip.innerHTML = `
      <h4>Tarcza Tytanów</h4>
      <p>Kliknij, aby przenieść się do odpowiedniej sekcji.</p>
    `;
  }
}

initTytanShieldLink();

function initBossJewelryLinks() {
  const targetSection = document.getElementById("section_21");
  const jewelryIcons = Array.from(document.querySelectorAll("[data-item-link-title]"));
  if (!jewelryIcons.length) {
    return;
  }

  jewelryIcons.forEach((icon) => {
    icon.removeAttribute("data-tip");
    icon.classList.add("item-slot--link");
    icon.setAttribute("role", "link");
    icon.setAttribute("aria-label", "Przejdź do sekcji Sety Itemów");

    const goToSection = () => {
      if (!targetSection) {
        return;
      }

      window.scrollTo({
        top: targetSection.offsetTop - 120,
        behavior: "smooth",
      });
    };

    icon.addEventListener("click", goToSection);
    icon.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goToSection();
      }
    });

    const existingTooltip = icon.querySelector(".item-link-tooltip");
    if (existingTooltip) {
      existingTooltip.remove();
    }

    const tooltip = document.createElement("div");
    tooltip.className = "item-tooltip soulforge__material-tooltip item-link-tooltip";
    tooltip.innerHTML = `
      <h4>${icon.dataset.itemLinkTitle ?? "Przedmiot"}</h4>
      <p>Kliknij, aby przenieść się do odpowiedniej sekcji.</p>
    `;
    icon.appendChild(tooltip);
  });
}

initBossJewelryLinks();

function initMoneyRain() {
  const target = document.querySelector("[data-money-rain]");
  if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "money-rain";
  overlay.hidden = true;
  document.body.appendChild(overlay);

  const symbols = [
    { text: "$", cls: "money-rain__item--cash" },
    { text: "$", cls: "money-rain__item--cash" },
    { text: "●", cls: "money-rain__item--gold" },
    { text: "◎", cls: "money-rain__item--gold" }
  ];

  let timer = null;

  function spawnParticle() {
    const particle = document.createElement("span");
    const pick = symbols[Math.floor(Math.random() * symbols.length)];
    const size = Math.floor(16 + Math.random() * 16);
    const left = Math.random() * 100;
    const drift = Math.round((Math.random() - 0.5) * 120);
    const spin = Math.round((Math.random() - 0.5) * 360);
    const duration = (3.6 + Math.random() * 2.2).toFixed(2);

    particle.className = `money-rain__item ${pick.cls}`;
    particle.textContent = pick.text;
    particle.style.left = `${left}vw`;
    particle.style.fontSize = `${size}px`;
    particle.style.setProperty("--drift", `${drift}px`);
    particle.style.setProperty("--spin", `${spin}deg`);
    particle.style.animationDuration = `${duration}s`;
    overlay.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    }, { once: true });
  }

  function startRain() {
    if (timer) {
      return;
    }
    overlay.hidden = false;
    timer = window.setInterval(() => {
      spawnParticle();
      if (Math.random() > 0.45) {
        spawnParticle();
      }
    }, 220);
  }

  function stopRain() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
    overlay.hidden = true;
    overlay.innerHTML = "";
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startRain();
      } else {
        stopRain();
      }
    });
  }, { threshold: 0.35 });

  observer.observe(target);
}

initMoneyRain();

  (function(){
    const buttons = document.querySelectorAll('.package-card');
    const details = document.querySelectorAll('.package-detail');

    function showPackage(id){
      details.forEach(d => {
        const isTarget = d.id === id;
        d.classList.toggle('is-visible', isTarget);
        d.toggleAttribute('hidden', !isTarget);
      });
      buttons.forEach(b => {
        const active = b.getAttribute('data-target') === id;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-expanded', active ? 'true' : 'false');
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-target');
        const targetEl = document.getElementById(id);
        // toggle: kliknięcie w aktywny chowa, w inny – pokazuje
        const willShow = !(targetEl && targetEl.classList.contains('is-visible'));
        details.forEach(d => { d.classList.remove('is-visible'); d.hidden = true; });
        buttons.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-expanded','false'); });

        if(willShow){
          targetEl.hidden = false;
          requestAnimationFrame(() => {
            targetEl.classList.add('is-visible');
            btn.classList.add('is-active');
            btn.setAttribute('aria-expanded','true');
          });
        }
      });
    });
  })();
