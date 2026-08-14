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


V2.1
- ND de référence exprimé directement en stops.
- ND du nouveau réglage exprimé directement en stops pour garder une logique cohérente.
- Choix rapides ND : 0 à 8 stops.
- Suppression du grand tableau ND dans TIPS, peu adapté à l'écran téléphone.
- ND QUICK enrichi avec les appellations ND2 / ND4 / ND8 / ND16 / ND32 / ND64 / ND128 / ND256.
- Calcul ND adapté : la valeur saisie est désormais directement le nombre de stops.
- Version visible : v2.1


V2.2
- Ajout de choix rapides cliquables sous Ouverture dans RÉFÉRENCE.
- Ajout des ISO intermédiaires en choix rapides sous ISO dans RÉFÉRENCE.
- Ajout de choix rapides sous Shutter dans RÉFÉRENCE.
- Les choix Shutter suivent automatiquement le mode Vitesse / Angle.
- Aucun changement dans les calculs.
- Version visible : v2.2


V2.3
- ND QUICK étendu sur 3 lignes / 12 valeurs.
- Ajout : 2.7 / ND512 / 9 stops.
- Ajout : 3.0 / ND1024 / 10 stops.
- Ajout : 3.3 / ND2048 / 11 stops.
- Ajout : 3.6 / ND4096 / 12 stops.
- Version visible : v2.3


V2.4
- Ouverture : raccourcis limités aux valeurs principales (stops entiers).
- ISO : raccourcis limités aux valeurs principales (stops entiers).
- Ajout de boutons −⅓ / +⅓ sous Ouverture et ISO, dans RÉFÉRENCE et NOUVEAU RÉGLAGE.
- L'AUTO arrondit désormais vers une vraie valeur standard de 1/3 de stop.
- ISO AUTO utilise la séquence courante : 100 / 125 / 160 / 200 / ...
- Ouverture AUTO utilise la séquence courante : 2.8 / 3.2 / 3.5 / 4 / ...
- Si l'arrondi au tiers génère un petit écart résiduel, l'app l'indique.
- Version visible : v2.4


V2.5
- Correction du calcul des ouvertures normalisées.
- Les valeurs photographiques arrondies sont désormais traitées comme de vrais crans de 1/3 stop.
- Exemple : f/5.6 -> f/4 est considéré comme exactement +1 stop.
- Référence f/5.6 + ISO 800, puis ISO 400 => ouverture AUTO f/4 (et non f/3.96).
- Le calcul brut reste disponible en repli pour une valeur manuelle hors série standard.
- Version visible : v2.5


V2.6
- Correctif desktop : la molette de souris permet désormais de faire défiler horizontalement les lignes de valeurs.
- Le comportement tactile sur téléphone reste inchangé.
- Version visible : v2.6


V2.7
- Correctif desktop : vrai glisser horizontal à la souris sur les lignes de valeurs.
- Cliquer + maintenir + déplacer permet maintenant de parcourir les ISO, diaphragmes, etc.
- La molette reste également active pour le défilement horizontal.
- Le comportement tactile mobile reste inchangé.
- Version visible : v2.7


V2.8
- Les lignes de valeurs ISO et Ouverture se recentrent automatiquement sur la valeur sélectionnée.
- Fonctionne dans RÉFÉRENCE et NOUVEAU RÉGLAGE.
- Pour une valeur intermédiaire au 1/3 stop, la ligne se centre sur la valeur principale la plus proche.
- Le drag souris / tactile reste disponible.
- Version visible : v2.8


V2.9
- Plage ISO étendue jusqu’à 51 200.
- Ajout des valeurs principales : 12 800 / 25 600 / 51 200.
- Ajout des valeurs intermédiaires 1/3 stop : 8 000 / 10 000 / 12 800 / 16 000 / 20 000 / 25 600 / 32 000 / 40 000 / 51 200.
- L'AUTO peut maintenant proposer des ISO jusqu’à 51 200.
- Recentrage automatique conservé.
- Version visible : v2.9


V3.0
- MÉTHODE : ajout du choix Sensibilité ISO / Gain.
- Gain : +6 dB = +1 stop ; réglage fin par pas de 2 dB.
- MÉTHODE : ajout du choix caméra FX3 / FX5 / FX30 / FX6.
- MÉTHODE : ajout du choix gamma S-Cinetone / S-Log3.
- En mode ISO, les Base ISO documentées par Sony sont affichées dans la couleur bleue de la DA.
- Les Base ISO spécifiques sont injectées dans les raccourcis même si elles ne correspondent pas à un stop entier (ex. 2500, 4000, 5000).
- FX3 S-Log3 : 800 / 12800.
- FX30 S-Log3 : 800 / 2500.
- FX6 S-Log3 : 800 / 12800.
- FX6 S-Cinetone : 320 / 5000.
- FX5 : 800 / 4000 / 12800.
- FX3 et FX30 en S-Cinetone : aucune seconde Base ISO n'est inventée ; l'app indique que Sony ne la définit pas explicitement comme Base ISO.
- ISO jusqu'à 51200 conservé.
- Version visible : v3.0


V3.1
- Ordre caméras : FX30 / FX3 / FX5 / FX6.
- Caméra par défaut : FX30.
- S-Cinetone FX30 : repères Lo/Hi 125 / 400.
- S-Cinetone FX3 : repères Lo/Hi 100 / 2000.
- S-Cinetone FX6 : repères Lo/Hi 320 / 5000.
- S-Log3 FX30 : 800 / 2500.
- S-Log3 FX3 : 800 / 12800.
- S-Log3 FX5 : 800 / 4000 / 12800.
- S-Log3 FX6 : 800 / 12800.
- FX5 S-Cinetone : laissé non renseigné tant qu'un repère Lo/Hi fiable n'est pas retenu.
- L'indication "Base ISO Sony" devient "ISO natifs / Lo-Hi".
- Les valeurs correspondantes restent mises en bleu dans l'interface.
- Version visible : v3.1


V3.2
- TIPS n°2 : suppression de la phrase jugée trop peu claire sur la comparaison f/ / T.
- Aucun autre changement.
- Version visible : v3.2


V3.3
- TIPS n°6 : suppression de la phrase supplémentaire sur les modes sans Base ISO explicitement définie.
- Aucun autre changement.
- Version visible : v3.3
