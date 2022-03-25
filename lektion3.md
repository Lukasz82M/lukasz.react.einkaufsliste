# React
Hinweise zur Bearbeitung:
- Achte auf einen sauberen Quellcode, insbesondere Einrückungen sind wichtig!
- Beim erstellen von Funktionen, nutze `name = (parameter) => {code}` statt der üblichen Schreibweise. Diese Schreibweise ermöglicht es mit `this` immer die 
Komponente anzusprechen in der die Methode steht, statt die in der sie tatsächlich ausgeführt wird. Das ist wichtig wenn wir Funktionen als props an andere Komponenten geben.
---
## Lektion 3

1.) Füge die css und fonts Ordner in dein Projekt ein. In deinem HTML Dokument, füge die folgenden Links ein:
-    `<link rel="stylesheet" href="css/fonts.css">`
-    `<link rel="stylesheet" href="css/material-components-web.min.css">`
-    `<link rel="stylesheet" href="css/styles.css">`

2.) In `ShoppingTag.js` erstelle eine Methode `setAktiveGruppe` mit einem Parameter `gruppenID`. Diese Methode soll die `aktiveGruppe` des `App` Objekts auf die mitgegebene `gruppenID` setzen. Gebe diese Methode als property an die gruppenTags weiter. Gebe der property einen angemessenen Namen(z.B. `aktiveGruppeHandler)

4.) In `GruppenTag.js` programmiere das `onClick` Attribut des `<dt>` Tags so, dass die mitgegebene Funktion `setAktiveGruppe` mit der ID der Gruppe des GruppenTags als Parameter aufgerufen wird(Nutze hierfür eine Pfeilfunktion). Optional: Soll die angeklickte Gruppe auch ausgewählt werden wenn man in der "erledigt" Sektion auf die Gruppe klickt? Wenn nein, nutze den Fragezeichen Operator im `onClick` Attribut um diesen Fall auszuschließen.

Du solltest jetzt deinen code mithilfe der Javascript-Konsole(⌥+⌘+J im Browser) testen können. Schreibst du `App.aktiveGruppe` in die Konsole wird dir der entsprechende Wert ausgegeben.
Dieser sollte sich ändern wenn du die verschiedenen Gruppen in deiner App anklickst.

5.) In `ShoppingTag.js` erstelle einen Konstruktor und füge dem state einen parameter `aktiveGruppe` hinzu. Dieser sollte im Konstruktor noch `null` sein.  In der `setAktiveGruppe` Methode, nutze `setState` um auch im state die `aktiveGruppe` auf die gruppenID zu setzen.

6.) In `ShoppingTag.js` gebe den GruppenTags eine weitere property `aktiv` mit. Diese sollte `true` sein wenn die entsprechende Gruppe die momentane aktive Gruppe ist. In `GruppenTag.js` gebe dem `<dt>` tag einen `className` Parameter. Dieser sollte `"aktiv"` sein, wenn die `erledigt` property `false` und die `aktiv` property `true` ist und `"inaktiv"` sonst. Diese Klassennamen sorgen mithilfe der css Dateien für die Einfärbung.



---

## Endergebnis

Das Endergebnis sollte ungefähr so aussehen:
>![Lektion 3](lektion3.png)