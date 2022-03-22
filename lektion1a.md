# React

Hinweise zur Bearbeitung:

- Dies ist eine Übungsaufgabe und dient nur als **Zusatzaufgaben**. Das Bearbeiten der
  **Einkaufslistenapp** ist das jeweilige Ziel der einzelnen Lektionen und sollte als Priorität angesehen werden.
- Achte auf einen sauberen Quellcode, insbesondere Einrückungen sind wichtig!

---

## Lektion 1

1.) Nutze `<script>`-Tags um die folgenden Skripte zu importieren:

- `react.development.js`
- `react-dom.development.js`
- `babel.min.js`
  <br><br>Dies hat jeweils die
  Form <br>`<script src="https://unpkg.com/react@latest/umd/react.development.js"></script>`.
---

2.) Füge im `<body>`-Tag einen `<script>`-Tag hinzu mit dem `type` `"text/babel"`. Zusammen sollte dies also
so aussehen: `<script type="text/babel">`
**Hinweis**: Innerhalb dieser `<script>`-Tags kannst du nun JavaScript-Code schreiben.
---

3.) Füge nun dem `<script>`-Tag die auskommentierte Funktion `tick()` hinzu. Verändere sie außerdem so, dass sie dich
mit deiner liebsten Begrüßung und deinem Namen begrüßt.
---

4.) Nutze nun `ReactDOM.render()` um den Timer mithilfe von React anzuzeigen.
<br>**Hinweis**: Diese Methode nimmt zwei Argumente, HTML-code und ein HTML-Element, in welchem der Code angezeigt wird.
<br>Der HTML-code ist in diesem Beispiel `element` und das HTML-Element kann über die ID `'root'` bekommen werden.
<br>(Mit Hilfe der Funktion `getElementById()`).
---


## Endergebnis

Das Endergebnis sollte ungefähr so aussehen:
> ![Lektion 1](img/lektion1a.png)



