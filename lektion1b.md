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
---

2.) Importiere die Like_Button.js Datei 
mit einem `<script>`-Tag.
---

4.) Füge `<script>`-Tags des Types `"text/babel"` 
innerhalb des `<body>`-Tags des hinzu. 
---

5.) Nutze nun `ReactDOM.render()` innerhalb der `<script>`-Tags um den Like-Button mithilfe von React anzuzeigen.
<br>**Hinweis**: Diese Methode nimmt zwei Argumente, HTML-code und ein HTML-Element, in welchem der Code angezeigt wird.
<br>Der HTML-code ist in diesem Beispiel die Klasse `<Like_Button/>` und das HTML-Element kann über die ID `'#root'` bekommen werden.
<br>(Mit Hilfe der Funktion `querySelector()`).
---

6.) Gehe nun zur Datei [Like_Button.js](js/lektion1/Like_Button.js).  
Füge den fehlenden Ausdruck hinter `extends` der Like_Button.js Datei hinzu.
<br>**TIP**: Dieser Ausdruck wird benötigt, um in dieser Datei React Code schreiben zu können.
<br> Entferen außerdem die Kommentar Zeichen oberhalb der Klassendeklaration und am Ende der Datei.
Diese sehen so aus: `/*` und `*/`
---

7.)  Füge nach dem `if`-Audruck einen return-Wert hinzu, der angezeigt wird, wenn sich der `state` ändert. 
Dieser soll z.B. "Dir gefällt das." zurück geben.
---

8.) Schreibe an der passenden Stelle HTML Code. Dieser beinhalter einen `div`-Tag. 
Dieser beinhaltet wiederum als einziges Element einen button mit dem Eventlistener `onClick`.
<br> Dieser Eventlistener führt folgenden Code aus: `{() => this.setState({ liked: true }) }`
---



## Endergebnis

Das Endergebnis sollte ungefähr so aussehen:  
> ![Lektion 1](img/lektion1b.png)  

Durch Klicken auf den "Gefällt Mir"-Button, soll der Button verschwinden und eine andere Nachricht angezeigt werden.


