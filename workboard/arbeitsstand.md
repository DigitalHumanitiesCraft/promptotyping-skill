# Promptotyping-Skill, Version 2

Arbeitsstand für die gemeinsame Fassung des Skills. Abgehakt ist, was entschieden ist. Offen ist, was wir noch klären.

## Was Promptotyping ist

Promptotyping ist eine Arbeitspraxis, die Forschungsdaten und ihre Kontexte mit Frontier-LLM-Agenten in Forschungsartefakte übersetzt, die zu den Zwecken und Arbeitsweisen der Forschenden passen. Der Prototyp ist dabei ein Mittel der Erkenntnis, an ihm zeigt sich, was die Daten tragen.

- [x] Promptotyping heißt Arbeitspraxis, Version 1 sagt Methodik.
- [x] Die vier Arbeitsformen Preparation, Exploration, Distillation und Implementation kehren wieder und sind keine Phasen mit fester Abfolge.
- [x] Maß sind die Quellen und der Forschungszweck. Die Wissensdokumente leiten die Arbeit und können sich über das Material irren.
  Der Leitsatz von Version 1, Dokumente als Quelle der Wahrheit, entfällt in dieser Form.
- [x] Eine Iteration endet mit einem Promptotype, dem Prototyp zusammen mit Wissensbasis und Forschungsdaten.
- [ ] Der Kern des Skills nennt die drei Prüfarten Verification, Agentic Review und Scholarly Validation.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Der Kern des Skills nennt die drei Status Vorschlag, bezweifelt und bestätigt.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Der Kern des Skills stellt jedem Promptotype die drei Fragen: Tut er, was er vorgibt? Ist er von den Quellen gedeckt? Ist er dem Zweck angemessen?
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.

## Die fünf Subcommands

Ein Subcommand steht für einen Moment, in dem man ihn wirklich aufruft. Es sind fünf Momente: Die Sitzung beginnt, es gibt neues Material, aus Befunden soll die Arbeitsgrundlage werden, etwas in den Dokumenten ist zu prüfen, die Sitzung endet.

- [x] Version 2 hat fünf Subcommands: `orient`, `explore`, `distill`, `curate` und `handoff`.
- [x] `orient` stellt fest, wo das Projekt steht, bevor der Agent etwas tut. Es ändert keine Datei und nennt den nächsten Schritt.
- [x] `explore` stellt fest, was die Daten tragen und wo sie enden. Es schreibt Skripte, Profil und Wissen über die Daten.
  Es ist vorerst fertig, wenn die Forschenden die Beschreibung an dem geprüft haben, was sie über ihr Material wissen, und nichts Wesentliches fehlt oder falsch ist.
- [x] `distill` modelliert die Befunde als Wissensdokumente, aus denen gebaut wird. Es reduziert und schärft: Was der Zweck nicht braucht, bleibt im Material, und was dort nur implizit steckt, wird ausdrücklich.
- [x] `curate` pflegt die vorhandenen Wissensdokumente: korrigieren, aktualisieren, konkretisieren, straffen und entfernen, was nicht mehr gilt.
- [x] `curate` hat drei Arten, und der Agent wählt selbst, welche die Lage verlangt.
  Gegen das Projekt selbst, also Daten, Code und Stand. Als `ground` gegen Wissen außerhalb, also Web, Literatur oder ein Vault. Als `review` mit frischem Kontext, der das Ganze kritisch in Frage stellt.
- [x] `handoff` beendet eine Sitzung kontrolliert und ist das Gegenstück zu `orient`.

## Was keinen Subcommand hat

- [x] Preparation hat keinen Subcommand. Die Forschenden tragen Material und Kontext zusammen, der Agent richtet ein, fragt nach und macht das Material zugänglich.
- [x] Implementation hat keinen Subcommand. Bauen ist die normale Arbeit des Agenten zwischen `orient` und `handoff`.
  Die Regeln dafür stehen im Kern des Skills und gelten immer: in kleinen, ansehbaren Schritten bauen, das Ergebnis zeigen, Befunde zuerst ins Wissen schreiben und dann in den Code, Regeln vor LLM, Rohausgabe bewahren.
- [x] User Stories und Epics entstehen in `distill`. Einen eigenen Aufruf wie `specify` gibt es nicht.
  `distill` schreibt zwei Dinge: was über das Material gilt und was das Artefakt für die Forschenden leisten soll.
- [x] `ground` und `review` sind keine eigenen Subcommands, sondern Arten von `curate`.
- [x] Refactoring gehört nicht in diesen Skill. `curate` lässt die Menge der Dokumente, wie sie ist.
- [x] `prune` und `synthesise` aus dem Skill der Spezifikation entfallen. Das Entfernen gehört zu `curate`.
- [x] `check` und `verify` aus Version 1 bleiben als alte Aufrufe gültig und führen zu `curate`.
  `check` führt zur Art Review und berichtet nur, `verify` führt zum Grounding.
- [ ] `distill` schreibt sich mit zwei l wie in Version 1, und `distil` wird als gleichwertiger Aufruf angenommen.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] `distill` erhebt User Stories nach dem Scholar-Centred Design der Dissertation: Persona, Epic, User Story in der Form „As a …, I want to …, so that I can …“, am Material mit den Forschenden.
  Dazu kommt je Story ein Kriterium, das die Forschenden am laufenden Artefakt entscheiden können. Das Kriterium steht nicht in der Dissertation.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] `curate` nennt am Ende, auf welche Arten es nicht geprüft hat.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.

## Sitzung und Journal

`orient` und `handoff` sind Gegenstücke. `orient` nimmt Kontext auf, `handoff` gibt ihn kontrolliert ab, an die nächste Sitzung oder an einen anderen Agenten oder Menschen. Was `handoff` schreibt, liest das nächste `orient`.

- [x] `handoff` committet und pusht nicht. Das Pushen bleibt bei den Forschenden.
- [x] Das Journal ist das Arbeitstagebuch und trägt auch den Blick nach vorn. `handoff.md` entfällt, weil das Journal diese Funktion übernimmt.
- [ ] Der schnelle `handoff` läuft am Ende jeder Sitzung: committen, Journaleintrag schreiben, Offenes festhalten.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Der tiefe `handoff` läuft vor einer längeren Pause oder einer Übergabe an andere: zusätzlich `curate` in allen drei Arten und das Verdichten des Journals.
  Vorschlag ist ein Aufruf mit zwei Tiefen statt zweier Befehle.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Das Offene steht im Journal an einer festen Stelle.
  Zur Wahl stehen ein Abschnitt Offen am Anfang von `journal.md`, den jeder `handoff` neu schreibt, und eine Liste am Ende des jüngsten Eintrags, die jeder `handoff` fortschreibt.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Die Übergabe eines Arbeitsschritts an einen anderen Agenten ist derselbe `handoff` mit benanntem Empfänger.
  Er schreibt die Übergabe in das Offene im Journal des Empfängers.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] `plan.md` trägt angenommene Arbeit, die noch nicht begonnen ist. Das Offene im Journal trägt, was die nächste Sitzung braucht, um Angefangenes fortzusetzen.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Das Verdichten des Journals ist Teil des tiefen `handoff` und hat keinen eigenen Aufruf. `compact` aus Version 1 führt dorthin.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Beim Verdichten geht keine Information verloren. Die vollständige Historie liegt in `journal-archive.md`, in Git oder in beidem.
  Die Spezifikation schließt das Archiv seit dem 21.08.2026 aus. Vorschlag ist das Archiv als Regelfall, nur angehängt und bei `orient` nicht gelesen.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Feste Schwellen und das Fenster der jüngsten Einträge aus Version 1 gelten weiter oder entfallen.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.

## Bestand und Auslieferung

- [ ] `orient` erkennt Projekte aus Version 1 mit `docs/` und ohne Action Layer.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Projekte aus Version 1 werden geführt umgestellt oder dürfen in ihrer Form bleiben.
  In Version 2.0 so umgesetzt, von euch noch nicht bestätigt.
- [ ] Ein Repository ist die Quelle des Skills, das andere wird Spiegel, Zeiger oder archiviert.
- [ ] Die Lizenz ist MIT oder CC BY 4.0.
- [ ] README, CITATION.cff und Metadaten nennen die Urheber der ersten Fassungen.
- [ ] Version 2.0.0 erscheint mit Änderungsprotokoll und Umstiegstabelle.

## Umsetzen

- [x] `orient` und `explore` stehen im Skill der Spezifikation.
- [x] Das README dieses Repositorys beschreibt den Stand von Version 2.
- [x] Version 2.0 des Skills steht in diesem Repository, mit README und Änderungsprotokoll, von zwei unabhängigen Lesern geprüft.
- [ ] Der Tag `v2.0.0` ist gesetzt.
- [ ] Der Skill der Spezifikation geht von acht Operationen auf die fünf Subcommands.
- [ ] `handoff.md` ist in den bestehenden Repositories aufgelöst und sein Inhalt im Journal aufgegangen.
  Betroffen sind rund 45 Repositories. Vorlage, Konvention und Skill ziehen zuerst nach.
- [ ] Skill und Konvention im Vault ziehen nach.
- [ ] Das Paper erhält die These zur Exploration: Je mehr man über seine Domäne weiß, desto besser kann man explorieren.
- [ ] Das Paper sagt, dass Distillation als Modellieren reduziert und schärft.
- [ ] Das Paper nennt den Skill in ein bis zwei Sätzen.
