document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serverChatbotForm");
  const input = document.getElementById("serverChatbotInput");
  const messages = document.getElementById("serverChatbotMessages");
  const status = document.getElementById("serverChatbotStatus");
  const suggestionButtons = Array.from(
    document.querySelectorAll("[data-chatbot-question]")
  );

  if (!form || !input || !messages || !window.ServerKnowledgeBase) {
    return;
  }

  let knowledgeBase = null;
  let introMessageShown = false;

  function addMessage(role, text, meta) {
    const message = document.createElement("article");
    message.className = `server-chatbot__message server-chatbot__message--${role}`;

    const bubble = document.createElement("div");
    bubble.className = "server-chatbot__bubble";
    bubble.textContent = text;
    message.appendChild(bubble);

    if (meta) {
      const metaElement = document.createElement("div");
      metaElement.className = "server-chatbot__meta";
      metaElement.textContent = meta;
      message.appendChild(metaElement);
    }

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function clearConversation() {
    messages.innerHTML = "";
  }

  function setStatus(text, tone) {
    if (!status) {
      return;
    }

    status.textContent = text;
    status.dataset.tone = tone;
  }

  function answerQuestion(question) {
    clearConversation();
    addMessage("user", question);

    const result = window.ServerKnowledgeBase.findAnswer(question, knowledgeBase);

    if (!result.found) {
      addMessage("bot", result.answer, "Źródło: lokalna baza wiedzy");
      return;
    }

    addMessage(
      "bot",
      result.answer,
      `Źródło: ${result.sourceTitle}`
    );
  }

  async function initChatbot() {
    setStatus("Ładowanie bazy wiedzy...", "loading");
    input.disabled = true;

    try {
      knowledgeBase = await window.ServerKnowledgeBase.loadKnowledgeBase(
        "data/knowledge"
      );

      input.disabled = false;
      setStatus("Gotowy. Odpowiadam tylko z bazy wiedzy.", "ready");
      if (!introMessageShown) {
        addMessage(
          "bot",
          "Cześć. Zadaj pytanie o serwer. Odpowiem tylko na podstawie lokalnej bazy wiedzy. Jeśli czegoś tam nie ma, powiem o tym wprost."
        );
        introMessageShown = true;
      }
      input.focus();
    } catch (error) {
      console.error(error);
      setStatus("Baza wiedzy niedostępna.", "error");
      addMessage(
        "bot",
        "Nie udało się wczytać lokalnej bazy wiedzy, więc chatbot jest chwilowo niedostępny."
      );
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!knowledgeBase) {
      return;
    }

    const question = input.value.trim();
    if (!question) {
      return;
    }

    answerQuestion(question);
    input.value = "";
  });

  suggestionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!knowledgeBase) {
        return;
      }

      const question = button.dataset.chatbotQuestion?.trim();
      if (!question) {
        return;
      }

      input.value = question;
      answerQuestion(question);
      input.value = "";
    });
  });

  initChatbot();
});
