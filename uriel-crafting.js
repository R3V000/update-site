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

function initUrielCrafting() {
  const tabsContainer = document.getElementById("urielForgeTabs");
  const inventory = document.getElementById("urielForgeInventory");
  const preview = document.getElementById("urielForgePreview");
  const nameTooltip = document.getElementById("urielForgeNameTooltip");
  const descTooltip = document.getElementById("urielForgeDescTooltip");

  if (!tabsContainer || !inventory || !preview || !nameTooltip || !descTooltip) {
    return;
  }

  if (!URIEL_CRAFTING_RECIPES.length) {
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
    const activeRecipe = URIEL_CRAFTING_RECIPES.find((recipe) => recipe.id === recipeId) ?? URIEL_CRAFTING_RECIPES[0];

    tabsContainer.querySelectorAll(".soulforge__tab").forEach((button) => {
      const isActive = button.dataset.recipeId === activeRecipe.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    renderRecipe(activeRecipe);
  }

  tabsContainer.innerHTML = "";

  URIEL_CRAFTING_RECIPES.forEach((recipe, index) => {
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

  setActiveRecipe(URIEL_CRAFTING_RECIPES[0].id);
}

initUrielCrafting();
