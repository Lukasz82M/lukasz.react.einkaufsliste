# React

Hinweise zur Bearbeitung:

- Dies ist eine Übungsaufgabe und dient nur als **Zusatzaufgabe**. Das Bearbeiten der
  **Einkaufslistenapp** ist das jeweilige Ziel der einzelnen Lektionen und sollte als Priorität angesehen werden.
- Achte auf einen sauberen Quellcode, insbesondere Einrückungen sind wichtig!

---

## Lektion 5a - Übungsaufgaben

1. Zum Einstieg schaue dir einmal den Code in dieser Aufgabe an. Vertausche an der geforderten Stelle
`false` und `true` und beobachte, wie sich die Ausgabe verändert. Gute Neuigkeiten: Wenn du verstanden hast,
warum sich die Ausgabe ändert, dann hast du bereits das Grundprinzip der gesamten Lektion verstanden!

>![Lektion 5a - Aufgabe 1 - false](img/lektion5a-2.png)
>![Lektion 5a - Aufgabe 1 - true](img/lektion5a-3.png)
---

2. Weiterführend benutzen wir nun if und else, um nicht manuell im Code zwischen true und false wechseln zu müssen.
Dazu programmiere innerhalb der `Funktion Gruesse2` eine `if-else Abfrage`, welche entweder die `Funktion NutzerGruss2` 
oder `GastGruss2` zurückgeben soll. Zuletzt solltest du dann in Chrome einen Button haben, welcher dich einloggt und wieder
ausloggt.

>![Lektion 5a - Aufgabe 2 - vor Login](img/lektion5a-4.png)
>![Lektion 5a - Aufgabe 2 - vor Logout](img/lektion5a-5.png)
___

3. Als Nächstes benutzen wir den && Operator. In diesem Code wird ein System geschrieben, was es uns erlaubt, die Anzahl
von Nachrichten in einer Mailbox wiederzugeben. Der `&& Operator` erlaubt es uns, nur eine Nachricht auszugeben, wenn wir 
auch wirklich Nachrichten vorliegen haben.  
**Hinweis:** Wenn du Zeit hast, spiele mal ein wenig mit dem `Nachrichtenarray` herum. Schau mal, was passiert, 
wenn du Nachrichten hinzufügst, wegnimmst und wenn überhaupt keine Nachrichten im Array vorhanden sind!

>![Lektion 5a - Aufgabe 3 - 3 Nachrichten](img/lektion5a-6.png)
---

4. Zu guter Letzt benutzten wir nun noch einmal den sogenannten ternären Operator (`Aussage ? Option 1 : Option 2`). Benutze 
diesen in der noch fehlenden `render Funktion`. Wenn der aktuelle `state von isLoggedIn` wahr ist, soll `Willkommen zurück!` ausgegeben
werden. Andernfalls soll `Bitte registrieren Sie sich.` ausgegeben werden.  
Um zu schauen, ob dein Code richtig ist, vertausche wie in der ersten Aufgabe true und false.

>![Lektion 5a - Aufgabe 4 - false](img/lektion5a-8.png)
>![Lektion 5a - Aufgabe 4 - true](img/lektion5a-7.png)
---

##Endergebnis
Am Ende sollte das Ganze ungefähr so aussehen:  
>![Lektion 5a - Gesamt](img/lektion5a-1.png)  
