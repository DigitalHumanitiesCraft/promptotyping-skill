# Verify – External Validation

Validate factual claims, references, and external information against the real world using web search.

## What to verify

1. **URLs and links.** Do they resolve? Is the content still what we expect?
2. **Bibliographic references.** Correct authors, titles, years, DOIs? Do the cited works exist?
3. **Institutional claims.** Correct affiliations, project names, funding bodies, roles?
4. **Technical facts.** API endpoints, library versions, standard specifications – are they current?
5. **Dates and timelines.** Event dates, release dates, deadlines – are they accurate?
6. **Named entities.** People, organizations, projects – correctly spelled and attributed?

## Process

- Use web search to verify each claim.
- Report: verified (with source), unverifiable (no source found), incorrect (with correction).
- For incorrect items, provide the corrected version ready to paste into the relevant doc.
- If web search is unavailable, list which claims need external verification and suggest the user check them manually.

## Scope

If `$ARGUMENTS` is provided, verify only that specific doc or topic: $ARGUMENTS

Otherwise, verify all Promptotyping Documents in the project.
