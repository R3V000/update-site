# Baza wiedzy chatbota

Chatbot korzysta tylko z plików z tego folderu. Nie używa modelu AI ani zewnętrznych danych, więc jeśli czegoś nie wpiszesz tutaj, bot powinien odpowiedzieć, że nie ma tej informacji.

## Struktura

- `manifest.json` wskazuje, które pliki są ładowane.
- Każdy plik kategorii ma tablicę `entries`.
- Każdy wpis może mieć:
  - `id`
  - `title`
  - `questions` - przykładowe pytania użytkowników
  - `keywords` - słowa pomocne przy dopasowaniu
  - `answer` - finalna odpowiedź, którą bot pokaże graczowi

## Jak aktualizować

1. Otwórz odpowiedni plik JSON, np. `faq.json` albo `systems.json`.
2. Dodaj nowy obiekt do `entries`.
3. Uzupełnij `questions`, `keywords` i krótkie `answer`.
4. Zapisz plik. Po odświeżeniu strony chatbot wczyta nowe dane.

## Wskazówki

- Pisz odpowiedzi krótko i konkretnie.
- Nie wpisuj przypuszczeń ani planów bez potwierdzenia.
- Jeśli jakaś kategoria nie jest jeszcze gotowa, możesz zostawić pustą tablicę `entries`.

## Przykład wpisu

```json
{
  "id": "example-drop",
  "title": "Drop z bossa",
  "questions": [
    "Co leci z bossa X?",
    "Jaki drop ma boss X?"
  ],
  "keywords": [
    "boss",
    "drop",
    "x"
  ],
  "answer": "Boss X dropi przedmiot Y i Z."
}
```
