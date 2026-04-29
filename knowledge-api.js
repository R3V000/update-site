(function () {
  const DEFAULT_FALLBACK =
    "Ta informacja nie jest dostępna w obecnej bazie wiedzy serwera.";

  const STOP_WORDS = new Set([
    "a",
    "aby",
    "ale",
    "albo",
    "bo",
    "byc",
    "bylo",
    "byla",
    "byly",
    "co",
    "czy",
    "czym",
    "dla",
    "do",
    "gdzie",
    "i",
    "ile",
    "jak",
    "jaka",
    "jakie",
    "jaki",
    "jest",
    "ktory",
    "ktora",
    "ktore",
    "ma",
    "mam",
    "mi",
    "na",
    "nie",
    "o",
    "od",
    "oraz",
    "po",
    "pod",
    "przy",
    "sie",
    "to",
    "u",
    "w",
    "we",
    "z",
    "za"
  ]);

  const NORMALIZE_CHAR_MAP = {
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ż: "Z",
    Ź: "Z",
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ż: "z",
    ź: "z",
    "—": " ",
    "–": " "
  };

  function normalizeText(value) {
    return String(value ?? "")
      .replace(/[ĄĆĘŁŃÓŚŻŹąćęłńóśżź—–]/g, (char) => NORMALIZE_CHAR_MAP[char] ?? char)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(value) {
    return normalizeText(value)
      .split(" ")
      .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
  }

  function toSet(values) {
    return new Set(values.filter(Boolean));
  }

  function formatCountLabel(countValue) {
    const count = Number.parseInt(String(countValue ?? "").replace(/[^\d]/g, ""), 10);

    if (!Number.isFinite(count)) {
      return `${countValue} sztuk`;
    }

    if (count === 1) {
      return "1 sztuka";
    }

    const mod10 = count % 10;
    const mod100 = count % 100;
    const useFewForm = mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14);

    return useFewForm ? `${count} sztuki` : `${count} sztuk`;
  }

  function buildLocationKnowledgeEntries(locationCardsData) {
    if (!locationCardsData || typeof locationCardsData !== "object") {
      return [];
    }

    const entityMap = new Map();

    Object.values(locationCardsData).forEach((location) => {
      const title = location?.title ?? "";
      const requiredLevel = String(location?.requiredLevel ?? "").trim();

      [
        { key: "metins", type: "metin" },
        { key: "bosses", type: "boss" }
      ].forEach(({ key, type }) => {
        const entries = Array.isArray(location?.[key]) ? location[key] : [];

        entries.forEach((entity) => {
          const displayName = String(entity?.name ?? "").trim();

          if (!displayName) {
            return;
          }

          const normalizedName = normalizeText(displayName);

          if (!entityMap.has(normalizedName)) {
            entityMap.set(normalizedName, {
              displayName,
              type,
              occurrences: []
            });
          }

          entityMap.get(normalizedName).occurrences.push({
            locationTitle: title,
            requiredLevel,
            count: entity?.count ?? "",
            respawn: entity?.respawn ?? ""
          });
        });
      });
    });

    return [...entityMap.values()]
      .sort((left, right) => left.displayName.localeCompare(right.displayName, "pl"))
      .map((entity) => {
        const typeLabel = entity.type === "metin" ? "Metin" : "Boss";
        const normalizedDisplayName = normalizeText(entity.displayName);
        const subject = normalizedDisplayName.startsWith("metin ")
          ? entity.displayName
          : `${typeLabel} ${entity.displayName}`;

        const questions = [
          entity.displayName,
          `Gdzie respi sie ${entity.displayName}?`,
          `Gdzie jest ${entity.displayName}?`,
          `Ile jest ${entity.displayName}?`,
          `Co ile respawn ${entity.displayName}?`
        ];

        const keywordSet = new Set([
          ...tokenize(entity.displayName),
          entity.type,
          "respawn",
          "lokacja",
          "mapa"
        ]);

        const details = entity.occurrences.map((occurrence) => {
          tokenize(occurrence.locationTitle).forEach((token) => keywordSet.add(token));

          const levelText = /\d/.test(occurrence.requiredLevel)
            ? `wymagany poziom ${occurrence.requiredLevel}`
            : "bez wymaganego poziomu wejscia";

          return `${occurrence.locationTitle} (${levelText}, ${formatCountLabel(
            occurrence.count
          )}, respawn ${occurrence.respawn})`;
        });

        return {
          id: `location-entity-${normalizedDisplayName.replace(/\s+/g, "-")}`,
          title: entity.displayName,
          questions,
          keywords: [...keywordSet],
          answer: `${subject} wystepuje w ${details.join("; ")}.`
        };
      });
  }

  function enrichEntry(entry, source) {
    const questions = Array.isArray(entry.questions) ? entry.questions : [];
    const keywords = Array.isArray(entry.keywords) ? entry.keywords : [];
    const aliases = Array.isArray(entry.aliases) ? entry.aliases : [];
    const title = entry.title ?? "";

    const questionTerms = tokenize(questions.join(" "));
    const keywordTerms = tokenize(keywords.join(" "));
    const titleTerms = tokenize(title);
    const categoryTerms = tokenize(source.title ?? source.id ?? "");

    return {
      ...entry,
      sourceId: source.id,
      sourceTitle: source.title,
      normalizedQuestions: questions.map(normalizeText),
      normalizedAliases: aliases.map(normalizeText),
      normalizedTitle: normalizeText(title),
      questionTerms: toSet(questionTerms),
      keywordTerms: toSet(keywordTerms),
      titleTerms: toSet(titleTerms),
      categoryTerms: toSet(categoryTerms)
    };
  }

  async function loadKnowledgeBase(basePath) {
    const base = (basePath ?? "data/knowledge").replace(/\/$/, "");
    const manifestResponse = await fetch(`${base}/manifest.json`, {
      cache: "no-store"
    });

    if (!manifestResponse.ok) {
      throw new Error("Nie udało się wczytać manifestu bazy wiedzy.");
    }

    const manifest = await manifestResponse.json();
    const sources = Array.isArray(manifest.sources) ? manifest.sources : [];

    const sourcePayloads = await Promise.all(
      sources.map(async (source) => {
        const response = await fetch(`${base}/${source.path}`, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`Nie udało się wczytać pliku ${source.path}.`);
        }

        const data = await response.json();
        const entries = Array.isArray(data.entries) ? data.entries : [];

        return entries.map((entry) => enrichEntry(entry, source));
      })
    );

    const dynamicEntries = buildLocationKnowledgeEntries(
      window.ServerLocationCardsData
    ).map((entry) =>
      enrichEntry(entry, {
        id: "locations",
        title: "Lokacje"
      })
    );

    return {
      locale: manifest.locale ?? "pl",
      fallbackMessage: manifest.fallbackMessage ?? DEFAULT_FALLBACK,
      entries: [...sourcePayloads.flat(), ...dynamicEntries]
    };
  }

  function scoreEntry(entry, normalizedQuery, queryTokens) {
    let score = 0;
    let overlap = 0;
    let strongPhraseMatch = false;
    let exactKeywordMatch = false;
    let exactTitleMatch = false;
    let exactQuestionTokenMatch = false;
    let hasStrongSingleTokenMatch = false;

    const phraseCandidates = [
      entry.normalizedTitle,
      ...entry.normalizedQuestions,
      ...entry.normalizedAliases
    ].filter(Boolean);

    phraseCandidates.forEach((candidate) => {
      if (candidate === normalizedQuery) {
        strongPhraseMatch = true;
        score += 30;
        return;
      }

      if (
        candidate.length >= 4 &&
        (candidate.includes(normalizedQuery) || normalizedQuery.includes(candidate))
      ) {
        strongPhraseMatch = true;
        score += 16;
      }
    });

    queryTokens.forEach((token) => {
      let tokenMatched = false;

      if (entry.keywordTerms.has(token)) {
        score += 6;
        tokenMatched = true;
        exactKeywordMatch = true;
      }

      if (entry.titleTerms.has(token)) {
        score += 5;
        tokenMatched = true;
        exactTitleMatch = true;
      }

      if (entry.questionTerms.has(token)) {
        score += 4;
        tokenMatched = true;
        exactQuestionTokenMatch = true;
      }

      if (entry.categoryTerms.has(token)) {
        score += 2;
        tokenMatched = true;
      }

      if (tokenMatched) {
        overlap += 1;
      }
    });

    if (!strongPhraseMatch && overlap < 2) {
      hasStrongSingleTokenMatch =
        overlap === 1 &&
        queryTokens.length <= 2 &&
        (exactKeywordMatch || exactTitleMatch || exactQuestionTokenMatch) &&
        score >= 4;

      if (!hasStrongSingleTokenMatch) {
        return 0;
      }
    }

    if (!strongPhraseMatch && !hasStrongSingleTokenMatch && score < 10) {
      return 0;
    }

    return score;
  }

  function findAnswer(query, knowledgeBase) {
    const normalizedQuery = normalizeText(query);
    const queryTokens = tokenize(query);

    if (!normalizedQuery || !knowledgeBase?.entries?.length) {
      return {
        found: false,
        answer: knowledgeBase?.fallbackMessage ?? DEFAULT_FALLBACK
      };
    }

    const rankedEntries = knowledgeBase.entries
      .map((entry) => ({
        entry,
        score: scoreEntry(entry, normalizedQuery, queryTokens)
      }))
      .filter((result) => result.score > 0)
      .sort((left, right) => right.score - left.score);

    const bestMatch = rankedEntries[0];

    if (!bestMatch) {
      return {
        found: false,
        answer: knowledgeBase.fallbackMessage ?? DEFAULT_FALLBACK
      };
    }

    return {
      found: true,
      answer: bestMatch.entry.answer,
      sourceTitle: bestMatch.entry.sourceTitle,
      entryId: bestMatch.entry.id
    };
  }

  window.ServerKnowledgeBase = {
    findAnswer,
    loadKnowledgeBase,
    normalizeText
  };
})();
