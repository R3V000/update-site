/*
  Crafting u Uriela
  Uzupełniaj głównie tablicę URIEL_CRAFTING_RECIPES.

  Szablon receptury:
  {
    id: "unikalny-id",
    shortTitle: "Krótka nazwa na zakładce",
    title: "Pełna nazwa przedmiotu",
    result: {
      img: "https://...",
      name: "Pełna nazwa rezultatu",
      desc: "Opis rezultatu craftingu.",
      count: 1
    },
    materials: [
      { img: "https://...", count: 1, name: "Przedmiot", desc: "Opis przedmiotu." },
      { img: "https://...", count: 20, name: "Materiał", desc: "Opis materiału." }
    ]
  }
*/

const URIEL_CRAFTING_RECIPES = [
  {
    id: "Mikstura Ducha",
    shortTitle: "Mikstura Ducha",
    title: "Mikstura Ducha",
    result: {
      img: "https://img.m2icondb.com/27125.png",
      name: "Mikstura Ducha",
      desc: "Dzięki tej mikstrurze w ciągu 30 minut gry, będiesz otrzymywał dodatkowe 30% doświadczenia.",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/72049.png",
        count: 15,
        name: "Pierścień Doświadczenia (1h)",
        desc: "Zdobywasz 50% więcej doświadczenia w ciągu 60 minut."
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "750k",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  },
  {
    id: "Mikstura Ducha 2",
    shortTitle: "Mikstura Ducha",
    title: "Mikstura Ducha",
    result: {
      img: "https://img.m2icondb.com/27125.png",
      name: "Mikstura Ducha",
      desc: "Dzięki tej mikstrurze w ciągu 30 minut gry, będiesz otrzymywał dodatkowe 30% doświadczenia.",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/72049.png",
        count: 20,
        name: "Pierścień Doświadczenia (30min)",
        desc: "Zdobywasz 30% więcej doświadczenia w ciągu 30 minut."
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "750k",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  },
  {
    id: "Złota Perła",
    shortTitle: "Złota Perła",
    title: "Złota Perła",
    result: {
      img: "https://pub-87b7ce98277d41f298ced742dab42b8c.r2.dev/30555.png",
      name: "Złota Perła",
      desc: "Drogocenna perła wytwarzana z różnych pereł.",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/27992.png",
        count: 1,
        name: "Biała Perła",
        desc: "Idealnie biała perła. Kobiety ją kochają."
      },
      {
        img: "https://img.m2icondb.com/27993.png",
        count: 1,
        name: "Niebieska Perła",
        desc: "Niebieska perła. Kobiety ją kochają."
      },
      {
        img: "https://img.m2icondb.com/27994.png",
        count: 1,
        name: "Czerwona Perła",
        desc: "Krwawo-czerwona perła. Kobiety ją kochają."
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "750k",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  },
  {
    id: "Peleryna Męstwa+",
    shortTitle: "Peleryna Męstwa+",
    title: "Peleryna Męstwa+",
    result: {
      img: "https://pub-87b7ce98277d41f298ced742dab42b8c.r2.dev/peleplus.png",
      name: "Peleryna Męstwa+",
      desc: "Posiada zwiększony zasięg. Nie działa na bossy.",
      count: 100
    },
    materials: [
      {
        img: "https://img.m2icondb.com/70038.png",
        count: 200,
        name: "Peleryna Męstwa",
        desc: "Za pomocą tej peleryny wojownicy niegdyś dowodzili swej odwagi, ponieważ jej jaskrawe kolory zwabiają wszystkie potwory z okolic. Nie działa na bossy."
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "750k",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  },
  {
    id: "Wzmocnienie Przedmiotu",
    shortTitle: "Wzmocnienie Przedmiotu",
    title: "Wzmocnienie Przedmiotu",
    result: {
      img: "https://img.m2icondb.com/71085.png",
      name: "Wzmocnienie Przedmiotu",
      desc: "Z odrobiną szczęścia dodaje do jednego z twoich przedmiotów nowy bonus. (maks. 4 bonusy).",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/71084.png",
        count: 4,
        name: "Zaczarowanie Przedmiotu",
        desc: "Usuwa bonusy z twojego przedmiotu, po czym dodaje nowe. Dotyczy tylko bonusów 1-5."
      }
    ]
  },
  {
    id: "Zaczarowanie Przedmiotu",
    shortTitle: "Zaczarowanie Przedmiotu",
    title: "Zaczarowanie Przedmiotu",
    result: {
        img: "https://img.m2icondb.com/71084.png",
        name: "Zaczarowanie Przedmiotu",
        desc: "Usuwa bonusy z twojego przedmiotu, po czym dodaje nowe. Dotyczy tylko bonusów 1-5.",
        count: 1
    },
    materials: [
      {
      img: "https://img.m2icondb.com/71085.png",
      name: "Wzmocnienie Przedmiotu",
      count: 2,
      desc: "Z odrobiną szczęścia dodaje do jednego z twoich przedmiotów nowy bonus. (maks. 4 bonusy)."
      }
    ]
  },
  {
    id: "Zaczarowanie Przedmiotu2",
    shortTitle: "Zaczarowanie Przedmiotu",
    title: "Zaczarowanie Przedmiotu",
    result: {
        img: "https://img.m2icondb.com/71084.png",
        name: "Zaczarowanie Przedmiotu",
        desc: "Usuwa bonusy z twojego przedmiotu, po czym dodaje nowe. Dotyczy tylko bonusów 1-5.",
        count: 3
    },
    materials: [
      {
      img: "https://img.m2icondb.com/70024.png",
      name: "Marmur Błogosławieństwa",
      count: 1,
      desc: "Legendarny, błogosławiony marmur. Jeżeli przedmiot ma 4 atrybuty, dodaje kolejny atrybut."
      }
    ]
  },
{
    id: "Zielony Czar",
    shortTitle: "Zielony Czar",
    title: "Zielony Czar",
    result: {
        img: "https://img.m2icondb.com/71151.png",
        name: "Zielony Czar",
        desc: "Usuwa bonusy z twojego przedmiotu, po czym dodaje nowe. Dotyczy tylko bonusów 1-5. Maksymalny poziom ekwipunku 40. Dotyczy tylko broni i zbroi.",
        count: 1
    },
    materials: [
      {
      img: "https://img.m2icondb.com/71152.png",
      name: "Zielona Siła",
      count: 2,
      desc: "Z odrobiną szczęścia dodaje do jednego z twoich przedmiotów nowy bonus. (maks. 4 bonusy). Maksymalny poziom ekwipunku 40. Dotyczy tylko broni i zbroi."
      }
    ]
  },
{
    id: "Zielona Siła",
    shortTitle: "Zielona Siła",
    title: "Zielona Siła",
    result: {
        img: "https://img.m2icondb.com/71152.png",
        name: "Zielona Siła",
        desc: "Z odrobiną szczęścia dodaje do jednego z twoich przedmiotów nowy bonus. (maks. 4 bonusy). Maksymalny poziom ekwipunku 40. Dotyczy tylko broni i zbroi.",
        count: 1
    },
    materials: [
      {
      img: "https://img.m2icondb.com/71151.png",
      name: "Zielony Czar",
      count: 2,
      desc: "Usuwa bonusy z twojego przedmiotu, po czym dodaje nowe. Dotyczy tylko bonusów 1-5. Maksymalny poziom ekwipunku 40. Dotyczy tylko broni i zbroi."
      }
    ]
  },
];

const KOWAL_CRAFTING_RECIPES = [
  {
    id: "Zwój Boga Smoków",
    shortTitle: "Zwój Boga Smoków",
    title: "Zwój Boga Smoków",
    result: {
      img: "https://img.m2icondb.com/71032.png",
      name: "Zwój Boga Smoków",
      desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu. Dodatkowa szansa na ulepszenie +5%.",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/25040.png",
        count: 6,
        name: "Zwój Błogoslawieństwa",
        desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu."
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "200k",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  },
  {
    id: "Podręcznik Kowala",
    shortTitle: "Podręcznik Kowala",
    title: "Podręcznik Kowala",
    result: {
      img: "https://img.m2icondb.com/70039.png",
      name: "Podręcznik Kowala",
      desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu. Dodatkowa szansa na ulepszenie +10%.",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/71032.png",
        count: 5,
        name: "Zwój Boga Smoków",
        desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu. Dodatkowa szansa na ulepszenie +5%."
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "500k",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  },
  {
    id: "Kamień Księżycowy",
    shortTitle: "Kamień Księżycowy",
    title: "Kamień Księżycowy",
    result: {
      img: "https://img.m2icondb.com/30618.png",
      name: "Kamień Księżycowy",
      desc: "Magiczny Kamień zwiększający szansę na ulepszenie przedmiotu. Niepowedzenie nie cofa ulepszenia! Dodatkowa szansa na ulepszenie +5%.",
      count: 1
    },
    materials: [
      {
        img: "https://img.m2icondb.com/25040.png",
        count: 20,
        name: "Zwój Błogoslawieństwa",
        desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu."
      },
      {
        img: "https://img.m2icondb.com/71032.png",
        count: 10,
        name: "Zwój Boga Smoków",
        desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu. Dodatkowa szansa na ulepszenie +5%."
      },
      {
        img: "https://img.m2icondb.com/70039.png",
        count: 5,
        name: "Podręcznik Kowala",
        desc: "Pozwala bezpiecznie ulepszać przedmiot bez ryzyka jego zniszczenia przy niepowodzeniu. Dodatkowa szansa na ulepszenie +10%."
      },
      {
        img: "https://img.m2icondb.com/30064.png",
        count: 2,
        name: "Magiczny Kamień",
        desc: "Magiczny Kamień dzięki któremu możesz ulepszać przedmioty. Niepowodzenie nie cofa ulepszenia!"
      },
      {
        img: "https://img.m2icondb.com/money.png",
        count: "2kk",
        name: "Yang",
        desc: "Koszt potrzebny do wytworzenia przedmiotu."
      }
    ]
  }
];

function initCraftingSection(config) {
  const {
    recipes,
    tabsId,
    inventoryId,
    previewId,
    nameTooltipId,
    descTooltipId
  } = config;

  const tabsContainer = document.getElementById(tabsId);
  const inventory = document.getElementById(inventoryId);
  const preview = document.getElementById(previewId);
  const nameTooltip = document.getElementById(nameTooltipId);
  const descTooltip = document.getElementById(descTooltipId);

  if (!tabsContainer || !inventory || !preview || !nameTooltip || !descTooltip) {
    return;
  }

  if (!recipes.length) {
    tabsContainer.innerHTML = "";
    inventory.innerHTML = "";
    return;
  }

  function makeSlot(item) {
    const slot = document.createElement("div");
    slot.className = "soulforge__material-slot belt-frame item-slot";

    if (item.name || item.desc) {
      slot.tabIndex = 0;
    }

    slot.innerHTML = `
      <img src="${item.img}" alt="${item.name ?? "Przedmiot"}">
      <span class="soulforge__count">${item.count ?? ""}</span>
      ${item.name || item.desc ? `
        <div class="item-tooltip soulforge__material-tooltip">
          <h4>${item.name ?? "Przedmiot"}</h4>
          ${item.desc ? `<p>${item.desc}</p>` : ""}
        </div>` : ""
      }
    `;

    return slot;
  }

  function renderRecipe(recipe) {
    inventory.innerHTML = "";
    recipe.materials.forEach((item) => inventory.appendChild(makeSlot(item)));

    preview.src = recipe.result.img;
    preview.alt = recipe.result.name;
    nameTooltip.textContent = recipe.result.name;
    descTooltip.textContent = recipe.result.desc;

    const resultSlot = preview.parentElement;
    const existingCount = resultSlot?.querySelector(".soulforge__count");
    if (existingCount) {
      existingCount.remove();
    }

    if (recipe.result.count !== undefined && recipe.result.count !== null && recipe.result.count !== "") {
      const countNode = document.createElement("span");
      countNode.className = "soulforge__count";
      countNode.textContent = recipe.result.count;
      resultSlot?.appendChild(countNode);
    }
  }

  function setActiveRecipe(recipeId) {
    const activeRecipe = recipes.find((recipe) => recipe.id === recipeId) ?? recipes[0];

    tabsContainer.querySelectorAll(".soulforge__tab").forEach((button) => {
      const isActive = button.dataset.recipeId === activeRecipe.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    renderRecipe(activeRecipe);
  }

  tabsContainer.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "soulforge__tab";
    button.dataset.recipeId = recipe.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.innerHTML = `
      <img src="${recipe.result.img}" alt="">
      <span>${recipe.shortTitle || recipe.title}</span>
    `;

    button.addEventListener("click", () => {
      setActiveRecipe(recipe.id);
    });

    tabsContainer.appendChild(button);
  });

  setActiveRecipe(recipes[0].id);
}

initCraftingSection({
  recipes: URIEL_CRAFTING_RECIPES,
  tabsId: "urielForgeTabs",
  inventoryId: "urielForgeInventory",
  previewId: "urielForgePreview",
  nameTooltipId: "urielForgeNameTooltip",
  descTooltipId: "urielForgeDescTooltip"
});

initCraftingSection({
  recipes: KOWAL_CRAFTING_RECIPES,
  tabsId: "kowalForgeTabs",
  inventoryId: "kowalForgeInventory",
  previewId: "kowalForgePreview",
  nameTooltipId: "kowalForgeNameTooltip",
  descTooltipId: "kowalForgeDescTooltip"
});
