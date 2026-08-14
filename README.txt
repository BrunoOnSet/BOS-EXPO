BRUNO SET TOOLS / EXPOSURE — V1.0

Fonctions
- Comparaison de deux réglages : ouverture, ISO, shutter, ND.
- Résultat en stops : plus clair / plus sombre.
- Détail de la contribution de chaque paramètre.
- Compensation rapide par un seul paramètre.
- Shutter en vitesse ou en angle, avec conversion selon les fps.
- Ouverture en f/ ou T.
- ND QUICK : 0.3 = 1 stop, etc.
- Mode Light / Dark mémorisé.
- Page TIPS pédagogique.
- Liens vers brunoguillard.com dans l'identité et le footer.
- Fonctionnement PWA / hors connexion.

Convention
- ND calculé selon la convention plateau 0.3 = 1 stop.
- Le calcul ISO est une équivalence de réglage et non une mesure de photons captés.
- Le shutter angle utilise : temps = angle / (360 × fps).

Installation
1. Créer un dépôt GitHub dédié, par exemple BRUNO-SET-TOOLS-EXPOSURE.
2. Déposer tous les fichiers du ZIP à la racine.
3. Activer GitHub Pages sur main / root.
4. Ouvrir l'URL sur Android Chrome puis Installer l'application.


V1.1
- ISO : ajout des valeurs intermédiaires courantes sur les boîtiers/appareils actuels.
- TIPS : ajout d’un tableau ND avec densité optique, indice filtre, transmittance et équivalence en stops.
- Version visible : v1.1


V1.2
- Panneau MÉTHODE compacté.
- Suppression de la saisie manuelle de cadence.
- Sélecteur 50 Hz / 60 Hz.
- 50 Hz : 25 / 50 / 100 / 200 fps.
- 60 Hz : 23,98 / 24 / 29,97 / 30 / 60 / 120 / 240 fps.
- Tableau ND : "Transmittance" remplacé par "Transmission lumineuse".
- Version visible : v1.2


V1.3
- Suppression du sélecteur f/ / T dans MÉTHODE.
- Ouverture affichée simplement comme "f/ ou T".
- Bloc MÉTHODE encore plus compact.
- Aucun changement dans le calcul d’exposition.
- Version visible : v1.3


V2.0 — Compensation liée
- Refonte du calculateur : suppression du comparateur DÉPART / NOUVEAU en colonnes.
- Une exposition RÉFÉRENCE est définie : ouverture, ISO, shutter, ND.
- Si l’ouverture du nouveau réglage est modifiée, l’ISO passe en AUTO et compense immédiatement.
- Si l’ISO est modifié, l’ouverture passe en AUTO et compense immédiatement.
- Le dernier des deux paramètres touché devient MANUEL.
- Les modifications de shutter ou de ND sont intégrées automatiquement à la compensation.
- Méthode 50 Hz / 60 Hz et shutter vitesse / angle conservée.
- Page TIPS et tableau ND conservés.
- Version visible : v2.0
