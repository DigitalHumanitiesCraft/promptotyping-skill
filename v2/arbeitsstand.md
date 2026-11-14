# Promptotyping-Skill, Version 2

Arbeitsstand für die gemeinsame Fassung des Skills. Abgehakt ist, was entschieden ist. Offen ist, was wir noch klären.

## Was Promptotyping ist

Promptotyping ist eine Arbeitspraxis, die Forschungsdaten und ihre Kontexte mit Frontier-LLM-Agenten in Forschungsartefakte übersetzt, die zu den Zwecken und Arbeitsweisen der Forschenden passen. Der Prototyp ist dabei ein Mittel der Erkenntnis, an ihm zeigt sich, was die Daten tragen.

- [x] Promptotyping heißt Arbeitspraxis, Version 1 sagt Methodik.
- [x] Die vier Arbeitsformen Preparation, Exploration, Distillation und Implementation kehren wieder und sind keine Phasen mit fester Abfolge.
- [x] Maß sind die Quellen und der Forschungszweck. Die Wissensdokumente leiten die Arbeit und können sich über das Material irren.
  Der Leitsatz von Version 1, Dokumente als Quelle der Wahrheit, entfällt in dieser Form.
- [x] Eine Iteration endet mit einem Promptotype, dem Prototyp zusammen mit Wissensbasis und Forschungsdaten.
- [ ] Der Skill kennt die drei Prüfarten Verification, Agentic Review und Scholarly Validation.
  Im Skill der Spezifikation stehen sie schon, in Version 1 fehlen sie.
- [ ] Der Skill kennt die drei Status Vorschlag, bezweifelt und bestätigt.
- [ ] Der Skill stellt jedem Promptotype die drei Fragen: Tut er, was er vorgibt? Ist er von den Quellen gedeckt? Ist er dem Zweck angemessen?

## Arbeitsformen und Subcommands

Die Arbeitsformen sind Arten von Arbeit. Die Subcommands sind das, was man im Harness vom Agenten verlangt. Beides deckt sich nicht eins zu eins.

- [x] `orient` stellt fest, wo das Projekt steht, bevor der Agent etwas tut. Es ändert keine Datei und nennt den nächsten Schritt.
- [x] `explore` stellt fest, was die Daten tragen und wo sie enden. Es schreibt Skripte, Profil und Wissen über die Daten und endet, wenn die Forschenden ihr Material wiedererkennen.
- [x] Preparation hat keinen Subcommand. Die Forschenden tragen Material und Kontext zusammen, der Agent richtet ein, fragt nach und macht das Material zugänglich.
- [ ] Distillation hat den Subcommand `distil`.
  Version 1 schreibt `distill`. Zu klären ist die Schreibweise und ob der alte Aufruf weiter angenommen wird.
- [ ] Implementation hat den Subcommand `implement`.
  Version 1 hat dafür keinen Aufruf.
- [ ] Die Kuration des Wissens hat die Subcommands `curate`, `synthesise` und `prune`.
  Das Paper nennt nur Knowledge Curation. Die drei Namen stammen aus dem Skill der Spezifikation.
- [ ] `check` und `verify` aus Version 1 bleiben eigene Aufrufe oder gehen in `curate` auf.

## Sitzung und Journal

- [ ] Das Sitzungsende hat einen eigenen Subcommand mit eigenem Namen.
  Version 1 beendet jede Sitzung mit `handoff`. In der Spezifikation ist `handoff` der Eingangskorb.
- [ ] Offene Punkte und nächste Schritte vom Sitzungsende haben einen festen Ort.
  Zur Wahl stehen `plan.md` und `handoff.md`. Die Journal-Vorlage schließt sie aus.
- [ ] Das Verdichten des Journals hat einen neuen Namen.
  `compact` ist im Harness schon belegt. Vorschlag ist `condense`.
- [ ] Beim Verdichten geht keine Information verloren. Die vollständige Historie liegt in `journal-archive.md`, in Git oder in beidem.
  Die Spezifikation schließt das Archiv seit dem 21.08.2026 aus. Vorschlag ist das Archiv als Regelfall, nur angehängt und bei `orient` nicht gelesen.
- [ ] Feste Schwellen und das Fenster der jüngsten Einträge aus Version 1 gelten weiter oder entfallen.

## Bestand und Auslieferung

- [ ] `orient` erkennt Projekte aus Version 1 mit `docs/` und ohne Action Layer.
- [ ] Projekte aus Version 1 werden geführt umgestellt oder dürfen in ihrer Form bleiben.
- [ ] Die alten Aufrufe `check`, `verify` und `compact` werden angenommen und umgeleitet.
- [ ] Ein Repository ist die Quelle des Skills, das andere wird Spiegel, Zeiger oder archiviert.
- [ ] Die Lizenz ist MIT oder CC BY 4.0.
- [ ] README, CITATION.cff und Metadaten nennen die Urheber der ersten Fassungen.
- [ ] Version 2.0.0 erscheint mit Änderungsprotokoll und Umstiegstabelle.

## Umsetzen

- [x] `orient` und `explore` stehen im Skill der Spezifikation.
- [x] Das README dieses Repositorys beschreibt den Stand von Version 2.
- [ ] `explore` kommt als Reference-Datei in die ausgelieferte Version 1.
  Das wäre Version 1.1.0 und ändert keinen bestehenden Aufruf.
- [ ] Skill und Konvention im Vault ziehen nach.
- [ ] Das Paper erhält die These zur Exploration: Je mehr man über seine Domäne weiß, desto besser kann man explorieren.
- [ ] Das Paper nennt den Skill in ein bis zwei Sätzen.
