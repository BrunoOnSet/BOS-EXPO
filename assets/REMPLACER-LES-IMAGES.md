# Remplacer les illustrations des fiches techniques d’EXPO

Les fiches techniques utilisent désormais uniquement des **JPG** dans le dossier `assets/`.

| Fiche | Fichier à remplacer |
| --- | --- |
| 01 — Triangle d’exposition | `triangle-exposition.jpg` |
| 02 — Filtre ND | `fiche-filtres-nd.jpg` |

## Depuis GitHub

1. Ouvrir le dossier `assets/` du dépôt `BrunoOnSet/BOS-EXPO` (branche `main`).
2. Cliquer sur **Add file → Upload files**.
3. Importer ton nouveau **JPG**, portant **exactement le nom indiqué** ci-dessus.
4. Vérifier que le changement remplace l’ancien fichier, puis cliquer sur **Commit changes**.

Les dimensions sont libres ; pour obtenir une fiche lisible sur mobile, privilégier une image nette, avec un texte suffisamment grand et une mise en page proportionnée. Les images originales mesurent respectivement **1200 × 920 px** et **1448 × 1086 px**.

**Ne change pas les noms et n’édite aucun fichier HTML, JS ou CSS.** L’application affiche le nouveau JPG et utilise une lecture réseau prioritaire pour détecter un remplacement, même lorsque la PWA est installée. En l’absence d’Internet, la dernière version mise en cache reste disponible.

Les anciens formats SVG ne sont plus utilisés par les fiches.
