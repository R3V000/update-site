(function () {
  const categories = [
    {
      id: "vip",
      name: "VIP",
      items: [
        {
          name: "Pakiet VIP 7 dni",
          price: 210,
          icon: "itemshop/38003.png",
          desc: "Aktywuje konto VIP na 7 dni.",
          tooltip: {
            title: "VIP (7 dni)",
            lead: "Pakiet VIP na 7 dni:",
            variant: "vip",
            items: [
              "Bonus doświadczenia +50%",
              "Bonus do przedmiotów +50%",
              "Bonus do yang +50%",
              "Większa szansa na wydobycie +5%",
              "Większa szansa na wyłowienie +5%"
            ]
          }
        },
        {
          name: "Pakiet VIP 14 dni",
          price: 350,
          icon: "itemshop/38002.png",
          desc: "Aktywuje konto VIP na 14 dni.",
          tooltip: {
            title: "VIP (14 dni)",
            lead: "Pakiet VIP na 14 dni:",
            variant: "vip",
            items: [
              "Bonus doświadczenia +50%",
              "Bonus do przedmiotów +50%",
              "Bonus do yang +50%",
              "Większa szansa na wydobycie +5%",
              "Większa szansa na wyłowienie +5%"
            ]
          }
        },
        {
          name: "Pakiet VIP 30 dni",
          price: 600,
          icon: "itemshop/38001.png",
          desc: "Aktywuje konto VIP na 30 dni.",
          tooltip: {
            title: "VIP (30 dni)",
            lead: "Pakiet VIP na 30 dni:",
            variant: "vip",
            items: [
              "Bonus doświadczenia +50%",
              "Bonus do przedmiotów +50%",
              "Bonus do yang +50%",
              "Większa szansa na wydobycie +5%",
              "Większa szansa na wyłowienie +5%"
            ]
          }
        }
      ]
    },
    {
      id: "packages",
      name: "Pakiety",
      items: [
        {
          name: "Pakiet PREMIUM Yin-Yang",
          price: 2800,
          icon: "https://img.m2icondb.com/50286.png",
          tooltip: {
            title: "Pakiet PREMIUM Yin-Yang",
            variant: "premium",
            items: [
              "VIP (30d)",
              "Manu Monastyru (30d)",
              "Wiedźma (30d)",
              "Ubranie Yin-Yang (30d)",
              "Kapel. Yin-Yang (30d)",
              "Nakładka do wyboru (30d)"
            ]
          },
          desc: "Pakiet Premium zawierający Item-Shop PVP + PVE"
        },
        {
          name: "Pakiet Premium Pustynny",
          price: 2800,
          icon: "https://img.m2icondb.com/50286.png",
          desc: "Pakiet Premium zawierający Item-Shop PVP + PVE",
          tooltip: {
            title: "Pakiet PREMIUM Pustynny",
            variant: "premium",
            items: [
              "VIP (30d)",
              "Manu Monastyru (30d)",
              "Wiewiór (30d)",
              "Ubranie Pustyni (30d)",
              "Kapel. Pustyni (30d)",
              "Nakładka do wyboru (30d)"
            ]
          },
        },
        {
          name: "Pakiet EXP (m)",
          price: 1300,
          icon: "https://img.m2icondb.com/50285.png",
          desc: "Pakiet Standardowy zawierający Item-Shop PVE",
          tooltip: {
            title: "Pakiet podstawowy (m)",
            variant: "premium",
            items: [
              "VIP (30d)",
              "Dzik (30d)",
              "Boczuś (30d)",
              "Pustynny Bojowiec (30d)",
              "Czarny Turban (30d)",
              "Nakładka do wyboru (30d)"
            ]
          },
        },
        {
          name: "Pakiet EXP (k)",
          price: 1300,
          icon: "https://img.m2icondb.com/50285.png",
          desc: "Pakiet Standardowy zawierający Item-Shop PVE",
          tooltip: {
            title: "Pakiet podstawowy (k)",
            variant: "premium",
            items: [
              "VIP (30d)",
              "Dzik (30d)",
              "Boczuś (30d)",
              "Pustynna Bojowniczka (30d)",
              "Czarny Turban (30d)",
              "Nakładka do wyboru (30d)"
            ]
          }
        }
      ]
    },
    {
      id: "mounts",
      name: "Wierzchowce",
      items: [
        {
          name: "Manu Monastyru",
          price: 799,
          icon: "https://img.m2icondb.com/71225.png",
          desc: "Wierzchowiec czasowy. Czas trwania: 30d.",
          tooltip: {
            title: "Manu Monastyru (30 dni)",
            variant: "vip",
            lead: "Dostępny od poziomu: 1.",
            items: [
              "Silny Przeciwko Potworom +15%",
              "Szansa na cios krytyczny +10%"
            ]
          }
        },
        {
          name: "Pieczęć Dzika Wojennego",
          price: 499,
          icon: "https://img.m2icondb.com/71125.png",
          desc: "Okiełznanie złych duchów wymaga nie lada odwagi. Czas trwania: 30d.",
          tooltip: {
            title: "Pieczęć Dzika Wojennego (30 dni)",
            variant: "vip",
            lead: "Dostępny od poziomu: 1.",
            items: [
              "Silny Przeciwko Potworom +15%"
            ]
          }
        },
        {
          name: "Biały Lew",
          price: 499,
          icon: "https://img.m2icondb.com/71121.png",
          desc: "Rzadki wierzchowiec o jasnym umaszczeniu. Czas trwania: 30d.",
          tooltip: {
            title: "Biały Lew (30 dni)",
            variant: "vip",
            lead: "Dostępny od poziomu: 1.",
            items: [
              "Punkty Doświadczenia +25%"
            ]
          }
        }
      ]
    },
    {
      id: "pets",
      name: "Pety",
      items: [
        {
          name: "Wiewiór",
          price: 799,
          icon: "https://img.m2icondb.com/53001.png",
          desc: "Pet czasowy dla graczy lubiących bojowy styl. Czas trwania: 30d.",
          tooltip: {
            title: "Wiewiór (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +1200"
            ]
          }
        },
        {
          name: "Wiedźma",
          price: 799,
          icon: "https://img.m2icondb.com/53001.png",
          desc: "Pet czasowy dla graczy lubiących bojowy styl. Czas trwania: 30d.",
          tooltip: {
            title: "Wiedźma (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +1200"
            ]
          }
        },
        {
          name: "Pieczęć Boczusia",
          price: 499,
          icon: "https://img.m2icondb.com/53008.png",
          desc: "Efektowny pet. Czas trwania: 30d.",
          tooltip: {
            title: "Pieczęć Boczusia (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Pieczęć Rufusa",
          price: 499,
          icon: "https://img.m2icondb.com/53008.png",
          desc: "Efektowny pet. Czas trwania: 30d.",
          tooltip: {
            title: "Pieczęć Rufusa (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Max. HP +800"
            ]
          }
        }
      ]
    },
    {
      id: "weapon-skins",
      name: "Nakładki",
      items: [
        {
          name: "Przykładowa Nakładka",
          price: 299,
          icon: "itemshop/qs.png",
          desc: "Kosmetyczny wygląd broni. Czas trwania: 30d.",
          tooltip: {
            title: "Przykładowa Nakładka (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Wartość Ataku +50"
            ]
          }
        }
      ]
    },
    {
      id: "costumes",
      name: "Kostiumy",
      items: [
        {
          name: "Ubranie pustyni",
          price: 299,
          icon: "itemshop/qs.png",
          desc: "Kostium postaci premium. Czas trwania: 30d.",
          tooltip: {
            title: "Ubranie Pustyni (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Ubranie Yin-Yang",
          price: 299,
          icon: "itemshop/qs.png",
          desc: "Kostium postaci premium. Czas trwania: 30d.",
          tooltip: {
            title: "Ubranie Yin-Yang (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Pustynny Bojownik",
          price: 199,
          icon: "https://img.m2icondb.com/41003.png",
          desc: "Kostium standardowwy. Czas trwania: 30d.",
          tooltip: {
            title: "Pustynny Bojownik (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Pustynna Bojowniczka",
          price: 199,
          icon: "https://img.m2icondb.com/41004.png",
          desc: "Kostium standardowwy. Czas trwania: 30d.",
          tooltip: {
            title: "Pustynna Bojowniczka (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Pustynny Bojownik Czarny",
          price: 199,
          icon: "https://img.m2icondb.com/41311.png",
          desc: "Kostium standardowwy. Czas trwania: 30d.",
          tooltip: {
            title: "Pustynny Bojownik Czarny (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Pustynny Bojownik Czarny",
          price: 199,
          icon: "https://img.m2icondb.com/41312.png",
          desc: "Kostium standardowwy. Czas trwania: 30d.",
          tooltip: {
            title: "Pustynny Bojownik Czarny (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        }
      ]
    },
    {
      id: "hair",
      name: "Fryzury",
      items: [
        {
          name: "Kapel. Pustyni",
          price: 299,
          icon: "itemshop/qs.png",
          desc: "Fryzura Premium. Czas trwania: 30d.",
          tooltip: {
            title: "Kapel. Pustyni (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Kapel. YinYang",
          price: 299,
          icon: "itemshop/qs.png",
          desc: "Fryzura Premium. Czas trwania: 30d.",
          tooltip: {
            title: "Kapel. Yin-Yang (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Czarny Turban (m)",
          price: 199,
          icon: "https://img.m2icondb.com/45143.png",
          desc: "Fryzura standardowa. Czas trwania: 30d.",
          tooltip: {
            title: "Czarny Turban (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Czarny Turban (k)",
          price: 199,
          icon: "https://img.m2icondb.com/45144.png",
          desc: "Fryzura standardowa. Czas trwania: 30d.",
          tooltip: {
            title: "Czarny Turban (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Potworom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Kok Salsa",
          price: 199,
          icon: "https://img.m2icondb.com/45056.png",
          desc: "Fryzura standardowa. Czas trwania: 30d.",
          tooltip: {
            title: "Kok Salsa (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        },
        {
          name: "Mini-irokez",
          price: 199,
          icon: "https://img.m2icondb.com/45055.png",
          desc: "Fryzura standardowa. Czas trwania: 30d.",
          tooltip: {
            title: "Mini-irokez (30 dni)",
            variant: "vip",
            items: [
              "Silny Przeciwko Ludziom +10%",
              "Max. HP +800"
            ]
          }
        }
      ]
    },
    {
      id: "boosters",
      name: "Wspomagacze",
      items: [
        {
          name: "Atak Boga Smoków x10",
          price: 129,
          icon: "https://img.m2icondb.com/71028.png",
          desc: "Zwiększa zadawane obrażenia o 15% przez 30 minut.",
          tooltip: null
        },
        {
          name: "Obrona Boga Smoków x10",
          price: 129,
          icon: "https://img.m2icondb.com/71030.png",
          desc: "Zmniejsza otrzymywane obrażenia o 15% przez 30 minut.",
          tooltip: null
        },
        {
          name: "Życie Boga Smoków x10",
          price: 129,
          icon: "https://img.m2icondb.com/71027.png",
          desc: "Zwiększa maksymalne punkty życia o 20% przez 30 minut.",
          tooltip: null
        },
        {
          name: "Int. Boga Smoków x10",
          price: 129,
          icon: "https://img.m2icondb.com/71029.png",
          desc: "Zwiększa obrażenia magiczne o 15% przez 30 minut.",
          tooltip: null
        },
        {
          name: "Dłoń Krytyka x10",
          price: 49,
          icon: "https://img.m2icondb.com/71044.png",
          desc: "Zwiększa szansę na obrażenia krytyczne o 20% przez 10 minut.",
          tooltip: null
        },
        {
          name: "Dłoń Przebicia x10",
          price: 49,
          icon: "https://img.m2icondb.com/71045.png",
          desc: "Zwiększa szansę na przeszycie o 20% przez 10 minut.",
          tooltip: null
        },
        {
          name: "Fioletowa Mikstura (D) x10",
          price: 49,
          icon: "https://img.m2icondb.com/27105.png",
          desc: "Szybkość Ruchu +40 przez 10 minut.",
          tooltip: null
        },
        {
          name: "Zielona Mikstura (D) x10",
          price: 49,
          icon: "https://img.m2icondb.com/27102.png",
          desc: "Szybkość Ataku +30 przez 10 minut.",
          tooltip: null
        },
        {
          name: "Peleryna Męstwa x200",
          price: 59,
          icon: "https://img.m2icondb.com/70038.png",
          desc: "Zwabia potwory z okolicy. Nie działa na bossy.",
          tooltip: null
        },
        {
          name: "Peleryna Nieagresji (30d)",
          price: 499,
          icon: "https://img.m2icondb.com/31033.png",
          desc: "Potwory cie nie atakują.",
          tooltip: null
        },
        {
          name: "Buty Wiatru (7d)",
          price: 219,
          icon: "https://img.m2icondb.com/72701.png",
          desc: "Zwiększa szybkość ruchu o 30%.",
          tooltip: null
        },
        {
          name: "Eliksir Słońca",
          price: 129,
          icon: "https://img.m2icondb.com/72726.png",
          desc: "Regeneruje 10 000 000 HP.",
          tooltip: null
        },
        {
          name: "Eliksir Księżyca",
          price: 129,
          icon: "https://img.m2icondb.com/72730.png",
          desc: "Regeneruje 1 000 000 PE.",
          tooltip: null
        },
        {
          name: "Wykrywacz Kamieni Metin",
          price: 49,
          icon: "https://img.m2icondb.com/27989.png",
          desc: "Wykrywa Kamienie Metin w okolicy - 6 użyć.",
          tooltip: null
        },
        {
          name: "Medal Szczęścia",
          price: 59,
          icon: "https://img.m2icondb.com/71017.png",
          desc: "Podwaja szansę na zdobywane Yang przez 30 minut.",
          tooltip: null
        }
      ]
    },
    {
      id: "progress",
      name: "Rozwój",
      items: [
        {
          name: "Rada Pusetlnika x5",
          price: 249,
          icon: "https://img.m2icondb.com/71094.png",
          desc: "Podnosi szansę na pomyślne przeczytanie księgi.",
          tooltip: null
        },
        {
          name: "Rada Pustelnika x10",
          price: 399,
          icon: "https://img.m2icondb.com/71094.png",
          desc: "Podnosi szansę na pomyślne przeczytanie księgi.",
          tooltip: null
        },
        {
          name: "Zwój Egzorcyzmu x5",
          price: 249,
          icon: "https://img.m2icondb.com/71001.png",
          desc: "Resetuje czas do następnego szkolenia.",
          tooltip: null
        },
        {
          name: "Zwój Egzorcyzmu x10",
          price: 399,
          icon: "https://img.m2icondb.com/71001.png",
          desc: "Resetuje czas do następnego szkolenia.",
          tooltip: null
        }
      ]
    },
    {
      id: "modyfikacja",
      name: "Modyfikacja",
      items: [
        {
          name: "Zwój Redystrybucji (ZRĘ)",
          price: 199,
          icon: "https://img.m2icondb.com/71106.png",
          desc: "Resetuje twoje punkty Zręczności do 1 punktu.",
          tooltip: null
        },
        {
          name: "Zwój Redystrybucji (WIT)",
          price: 199,
          icon: "https://img.m2icondb.com/71104.png",
          desc: "Resetuje twoje punkty Witalności do 1 punktu.",
          tooltip: null
        },
        {
          name: "Zwój Redystrybucji (SIŁ)",
          price: 199,
          icon: "https://img.m2icondb.com/71105.png",
          desc: "Resetuje twoje punkty Siły do 1 punktu.",
          tooltip: null
        },
        {
          name: "Zwój Redystrybucji (INT)",
          price: 199,
          icon: "https://img.m2icondb.com/71103.png",
          desc: "Resetuje twoje punkty Inteligencji do 1 punktu.",
          tooltip: null
        },
        {
          name: "Olejek Nazwy",
          price: 899,
          icon: "https://img.m2icondb.com/71055.png",
          desc: "zmienia nazwę postaci.",
          tooltip: null
        },
        {
          name: "Zwój Powrotu Umiejętności",
          price: 199,
          icon: "https://img.m2icondb.com/71003.png",
          desc: "Resetuje punkty umiejętności.",
          tooltip: null
        },
        {
          name: "Olejek Wygnania",
          price: 499,
          icon: "https://img.m2icondb.com/71054.png",
          desc: "Pozwala zmienić królestwo.",
          tooltip: null
        },
        {
          name: "Księga Obróbki Kamienia",
          price: 59,
          icon: "https://img.m2icondb.com/71083.png",
          desc: "Usuwa zepsute kamienie w wyposażeniu.",
          tooltip: null
        },
        {
          name: "Pierścień Zastępstwa",
          price: 1999,
          icon: "https://img.m2icondb.com/80009.png",
          desc: "Pozwala zmienić Lidera Gildii.",
          tooltip: null
        },
        {
          name: "Zwój Zmiany Profesji",
          price: 1999,
          icon: "https://img.m2icondb.com/71100.png",
          desc: "Przedmiot ten umożliwia zmianę profesji postaci. Działa od 31 do 74 poziomu postaci.",
          tooltip: null
        },
        {
          name: "Zaklęcie Modyfikacji",
          price: 399,
          icon: "https://img.m2icondb.com/71048.png",
          desc: "Przedmiot ten pozwala zmienić płeć twojej postaci.",
          tooltip: null
        },
        {
          name: "Zwój Korekcji",
          price: 149,
          icon: "https://img.m2icondb.com/71109.png",
          desc: "Zwój ten umożliwia usunięcie ostatnio pomyślnie dodanego KD.",
          tooltip: null
        },
      ]
    },
    {
      id: "alchemy",
      name: "Alchemia",
      items: [
        {
          name: "Cor Draconis Surowy",
          price: 8,
          icon: "https://img.m2icondb.com/50255.png",
          desc: "Podstawowy przedmiot związany z rozwojem smoczej alchemii.",
          tooltip: null
        },
        {
          name: "Niebieska Smocza Fasola x10",
          price: 119,
          icon: "https://img.m2icondb.com/100400.png",
          desc: "Zwiększa szansę na ulepszenie Smoczego Kamienia o jeden poziom.",
          tooltip: null
        },
        {
          name: "Smocze Cęgi 100%",
          price: 899,
          icon: "https://img.m2icondb.com/100101.png",
          desc: "Gwarantują pomyślne wyciągnięcie Kamienia Alchemicznego z koła.",
          tooltip: null
        }
      ]
    },
    {
      id: "przepustki",
      name: "Przepustki",
      items: [
        {
          name: "Przepustka Potępionych",
          price: 89,
          icon: "https://img.m2icondb.com/72359.png",
          desc: "Umożliwiwa wejście do wąwozu śmierci.",
          tooltip: null
        },
        {
          name: "Przepustka",
          price: 49,
          icon: "https://img.m2icondb.com/71095.png",
          desc: "Umożliwia wejście do lochu pająków v2.",
          tooltip: null
        },
        {
          name: "Krwisty Kamień",
          price: 69,
          icon: "https://img.m2icondb.com/30190.png",
          desc: "Umożliwia wejście do groty wygnańców.",
          tooltip: null
        }
      ]
    },
    {
      id: "kupony",
      name: "Kupony SM",
      items: [
        {
          name: "Kupony SM (1000)",
          price: 1015,
          icon: "https://img.m2icondb.com/80016.png",
          desc: "Kupon SM (1000). Czas trwania: 14d.",
          tooltip: null
        },
        {
          name: "Kupony SM (500)",
          price: 510,
          icon: "https://img.m2icondb.com/80014.png",
          desc: "Kupon SM (500). Czas trwania: 14d.",
          tooltip: null
        },
        {
          name: "Kupony SM (100)",
          price: 105,
          icon: "https://img.m2icondb.com/80015.png",
          desc: "Kupon SM (100). Czas trwania: 14d.",
          tooltip: null
        },
        {
          name: "Kupony SM (50)",
          price: 55,
          icon: "https://img.m2icondb.com/80017.png",
          desc: "Kupon SM (50). Czas trwania: 14d.",
          tooltip: null
        },
        
      ]
    }
  ];

  const coinOffers = [
    { pln: "20PLN", sm: "220SM", ratio: "11SM : 1PLN" },
    { pln: "50PLN", sm: "600SM", ratio: "12SM : 1PLN" },
    { pln: "100PLN", sm: "1300SM", ratio: "13SM : 1PLN" },
    { pln: "200PLN", sm: "2800SM", ratio: "14SM : 1PLN" },
    { pln: "500PLN", sm: "7500SM", ratio: "15SM : 1PLN" },
    { pln: "1000PLN", sm: "16500SM", ratio: "16.5SM : 1PLN" }
  ];

  function el(tagName, className, text) {
    const node = document.createElement(tagName);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  function renderItem(item) {
    const card = el("article", "item-shop-item");

    const iconBox = el("div", "item-shop-item__icon-box");
    const icon = el("img", "item-shop-item__icon");
    icon.src = item.icon;
    icon.alt = item.name;
    icon.loading = "lazy";
    iconBox.appendChild(icon);

    if (hasTooltip(item.tooltip)) {
      iconBox.tabIndex = 0;
      iconBox.appendChild(renderTooltip(item.tooltip));
    }

    const body = el("div", "item-shop-item__body");
    const top = el("div", "item-shop-item__top");
    top.appendChild(el("h3", "item-shop-item__name", item.name));
    top.appendChild(el("span", "item-shop-item__price", `${item.price} SM`));

    const desc = el("p", "item-shop-item__desc", item.desc);

    body.appendChild(top);
    body.appendChild(desc);
    card.appendChild(iconBox);
    card.appendChild(body);

    return card;
  }

  function hasTooltip(tooltip) {
    return Boolean(
      tooltip &&
      tooltip.title &&
      Array.isArray(tooltip.items) &&
      tooltip.items.length
    );
  }

  function renderTooltip(data) {
    const variant = data.variant ? ` item-shop-tooltip--${data.variant}` : "";
    const tooltip = el("div", `item-shop-tooltip${variant}`);
    tooltip.appendChild(el("strong", "item-shop-tooltip__title", data.title));

    if (data.lead) {
      tooltip.appendChild(el("span", "item-shop-tooltip__lead", data.lead));
    }

    const list = el("ul", "item-shop-tooltip__list");
    data.items.forEach((text) => {
      list.appendChild(el("li", null, text));
    });

    tooltip.appendChild(list);
    return tooltip;
  }

  function initItemShop() {
    const mount = document.querySelector("[data-item-shop]");

    if (!mount) {
      return;
    }

    mount.innerHTML = "";

    const windowNode = el("div", "item-shop-window");
    const categoryShell = el("div", "item-shop-categories-shell");
    const categoryList = el("div", "item-shop-categories");
    const scrollbar = el("div", "item-shop-scrollbar");
    scrollbar.setAttribute("aria-hidden", "true");
    scrollbar.innerHTML = '<span class="item-shop-scrollbar__top"></span><span class="item-shop-scrollbar__middle"></span><span class="item-shop-scrollbar__bottom"></span><span class="item-shop-scrollbar__thumb"></span>';
    const scrollbarThumb = scrollbar.querySelector(".item-shop-scrollbar__thumb");

    const itemPanel = el("div", "item-shop-items-panel");
    const itemList = el("div", "item-shop-items");
    const coinsButton = el("button", "item-shop-coins-button", "DOŁADUJ SM");
    coinsButton.type = "button";
    coinsButton.setAttribute("aria-label", "Doładuj SM");
    coinsButton.setAttribute("aria-pressed", "false");

    function setActiveCategory(category) {
      coinsButton.classList.remove("is-active");
      coinsButton.setAttribute("aria-pressed", "false");
      itemList.classList.remove("is-coins-view");

      categoryList.querySelectorAll(".item-shop-category").forEach((button) => {
        const isActive = button.dataset.categoryId === category.id;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      itemList.innerHTML = "";
      category.items.forEach((item) => {
        itemList.appendChild(renderItem(item));
      });
    }

    function renderCoinsView() {
      categoryList.querySelectorAll(".item-shop-category").forEach((button) => {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      });

      coinsButton.classList.add("is-active");
      coinsButton.setAttribute("aria-pressed", "true");
      itemList.classList.add("is-coins-view");
      itemList.innerHTML = "";

      const coinsView = el("div", "item-shop-coins-view");
      const title = el("h3", "req-title", "Rozpiska SM");
      const rows = el("div", "item-shop-coins-view__rows");

      coinOffers.forEach((offer) => {
        const row = el("div", "item-shop-coins-view__row");
        row.appendChild(el("span", "item-shop-coins-view__pln", offer.pln));
        row.appendChild(el("strong", "item-shop-coins-view__sm", offer.sm));
        row.appendChild(el("span", "item-shop-coins-view__ratio", `// ${offer.ratio}`));
        rows.appendChild(row);
      });

      coinsView.appendChild(title);
      coinsView.appendChild(rows);
      itemList.appendChild(coinsView);
    }

    function updateCategoryScrollbar() {
      if (!scrollbarThumb) {
        return;
      }

      const maxScroll = categoryList.scrollHeight - categoryList.clientHeight;
      const maxTop = scrollbar.clientHeight - scrollbarThumb.offsetHeight;

      if (maxScroll <= 0 || maxTop <= 0) {
        scrollbarThumb.hidden = true;
        return;
      }

      scrollbarThumb.hidden = false;
      scrollbarThumb.style.top = `${(categoryList.scrollTop / maxScroll) * maxTop}px`;
    }

    categories.forEach((category, index) => {
      const button = el("button", "item-shop-category", category.name);
      button.type = "button";
      button.dataset.categoryId = category.id;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      button.addEventListener("click", () => setActiveCategory(category));
      categoryList.appendChild(button);
    });

    categoryShell.appendChild(categoryList);
    categoryShell.appendChild(scrollbar);
    coinsButton.addEventListener("click", renderCoinsView);
    itemPanel.appendChild(itemList);
    windowNode.appendChild(categoryShell);
    windowNode.appendChild(coinsButton);
    windowNode.appendChild(itemPanel);
    mount.appendChild(windowNode);

    categoryList.addEventListener("scroll", updateCategoryScrollbar);
    window.addEventListener("resize", updateCategoryScrollbar);

    setActiveCategory(categories[0]);
    updateCategoryScrollbar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initItemShop);
  } else {
    initItemShop();
  }
})();
