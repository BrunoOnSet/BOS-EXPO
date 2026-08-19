BRUNO ONSET / EXPOSURE — V3.24

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


V3.24
- ISO : ajout des valeurs intermédiaires courantes sur les boîtiers/appareils actuels.
- TIPS : ajout d’un tableau ND avec densité optique, indice filtre, transmittance et équivalence en stops.
- Version visible : v3.24


V3.24
- Panneau MÉTHODE compacté.
- Suppression de la saisie manuelle de cadence.
- Sélecteur 50 Hz / 60 Hz.
- 50 Hz : 25 / 50 / 100 / 200 fps.
- 60 Hz : 23,98 / 24 / 29,97 / 30 / 60 / 120 / 240 fps.
- Tableau ND : "Transmittance" remplacé par "Transmission lumineuse".
- Version visible : v3.24


V3.24
- Suppression du sélecteur f/ / T dans MÉTHODE.
- Ouverture affichée simplement comme "f/ ou T".
- Bloc MÉTHODE encore plus compact.
- Aucun changement dans le calcul d’exposition.
- Version visible : v3.24


V3.24 — Compensation liée
- Refonte du calculateur : suppression du comparateur DÉPART / NOUVEAU en colonnes.
- Une exposition RÉFÉRENCE est définie : ouverture, ISO, shutter, ND.
- Si l’ouverture du nouveau réglage est modifiée, l’ISO passe en AUTO et compense immédiatement.
- Si l’ISO est modifié, l’ouverture passe en AUTO et compense immédiatement.
- Le dernier des deux paramètres touché devient MANUEL.
- Les modifications de shutter ou de ND sont intégrées automatiquement à la compensation.
- Méthode 50 Hz / 60 Hz et shutter vitesse / angle conservée.
- Page TIPS et tableau ND conservés.
- Version visible : v3.24


V3.24
- ND de référence exprimé directement en stops.
- ND du nouveau réglage exprimé directement en stops pour garder une logique cohérente.
- Choix rapides ND : 0 à 8 stops.
- Suppression du grand tableau ND dans TIPS, peu adapté à l'écran téléphone.
- ND QUICK enrichi avec les appellations ND2 / ND4 / ND8 / ND16 / ND32 / ND64 / ND128 / ND256.
- Calcul ND adapté : la valeur saisie est désormais directement le nombre de stops.
- Version visible : v3.24


V3.24
- Ajout de choix rapides cliquables sous Ouverture dans RÉFÉRENCE.
- Ajout des ISO intermédiaires en choix rapides sous ISO dans RÉFÉRENCE.
- Ajout de choix rapides sous Shutter dans RÉFÉRENCE.
- Les choix Shutter suivent automatiquement le mode Vitesse / Angle.
- Aucun changement dans les calculs.
- Version visible : v3.24


V3.24
- ND QUICK étendu sur 3 lignes / 12 valeurs.
- Ajout : 2.7 / ND512 / 9 stops.
- Ajout : 3.0 / ND1024 / 10 stops.
- Ajout : 3.3 / ND2048 / 11 stops.
- Ajout : 3.6 / ND4096 / 12 stops.
- Version visible : v3.24


V3.24
- Ouverture : raccourcis limités aux valeurs principales (stops entiers).
- ISO : raccourcis limités aux valeurs principales (stops entiers).
- Ajout de boutons −⅓ / +⅓ sous Ouverture et ISO, dans RÉFÉRENCE et NOUVEAU RÉGLAGE.
- L'AUTO arrondit désormais vers une vraie valeur standard de 1/3 de stop.
- ISO AUTO utilise la séquence courante : 100 / 125 / 160 / 200 / ...
- Ouverture AUTO utilise la séquence courante : 2.8 / 3.2 / 3.5 / 4 / ...
- Si l'arrondi au tiers génère un petit écart résiduel, l'app l'indique.
- Version visible : v3.24


V3.24
- Correction du calcul des ouvertures normalisées.
- Les valeurs photographiques arrondies sont désormais traitées comme de vrais crans de 1/3 stop.
- Exemple : f/5.6 -> f/4 est considéré comme exactement +1 stop.
- Référence f/5.6 + ISO 800, puis ISO 400 => ouverture AUTO f/4 (et non f/3.96).
- Le calcul brut reste disponible en repli pour une valeur manuelle hors série standard.
- Version visible : v3.24


V3.24
- Correctif desktop : la molette de souris permet désormais de faire défiler horizontalement les lignes de valeurs.
- Le comportement tactile sur téléphone reste inchangé.
- Version visible : v3.24


V3.24
- Correctif desktop : vrai glisser horizontal à la souris sur les lignes de valeurs.
- Cliquer + maintenir + déplacer permet maintenant de parcourir les ISO, diaphragmes, etc.
- La molette reste également active pour le défilement horizontal.
- Le comportement tactile mobile reste inchangé.
- Version visible : v3.24


V3.24
- Les lignes de valeurs ISO et Ouverture se recentrent automatiquement sur la valeur sélectionnée.
- Fonctionne dans RÉFÉRENCE et NOUVEAU RÉGLAGE.
- Pour une valeur intermédiaire au 1/3 stop, la ligne se centre sur la valeur principale la plus proche.
- Le drag souris / tactile reste disponible.
- Version visible : v3.24


V3.24
- Plage ISO étendue jusqu’à 51 200.
- Ajout des valeurs principales : 12 800 / 25 600 / 51 200.
- Ajout des valeurs intermédiaires 1/3 stop : 8 000 / 10 000 / 12 800 / 16 000 / 20 000 / 25 600 / 32 000 / 40 000 / 51 200.
- L'AUTO peut maintenant proposer des ISO jusqu’à 51 200.
- Recentrage automatique conservé.
- Version visible : v3.24


V3.24
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
- Version visible : v3.24


V3.24
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
- Version visible : v3.24


V3.24
- TIPS n°2 : suppression de la phrase jugée trop peu claire sur la comparaison f/ / T.
- Aucun autre changement.
- Version visible : v3.24


V3.24
- TIPS n°6 : suppression de la phrase supplémentaire sur les modes sans Base ISO explicitement définie.
- Aucun autre changement.
- Version visible : v3.24


V3.24
- Les ISO natifs / Lo-Hi ont maintenant un contour bleu renforcé autour de toute la bulle.
- Lorsqu'un ISO natif est sélectionné, la bulle reste pleine en bleu.
- Le point bleu existant est conservé comme repère secondaire.
- Version visible : v3.24


V3.24
- Correction desktop : les bulles ISO / diaph sont de nouveau pleinement cliquables.
- Suppression du drag souris qui interceptait les clics.
- La molette horizontale reste active.
- Le recentrage automatique sur la valeur sélectionnée reste actif.
- Aucun changement sur mobile.
- Version visible : v3.24


V3.24
- Rétablissement du recentrage automatique des valeurs ISO / Gain / Ouverture.
- Les bulles restent entièrement cliquables à la souris.
- Aucun drag souris n'est réintroduit.
- Après un clic ou un ajustement +/- 1/3, la valeur choisie se replace au centre.
- Recentrage également après changement caméra / gamma / mode ISO-Gain.
- Version visible : v3.24


V3.24
- Ajout des vitesses shutter 1/400 s et 1/800 s dans les choix rapides.
- Ajout dans RÉFÉRENCE et NOUVEAU RÉGLAGE.
- Recentrage automatique ISO / Gain / Ouverture conservé.
- Clic direct sur les bulles conservé.
- Version visible : v3.24


V3.24
- Correction complète du recentrage ISO / Gain / Ouverture.
- Le centrage utilise maintenant la position réelle de la bulle dans la ligne.
- Ajout d'espace invisible aux extrémités pour permettre aux premières et dernières valeurs d'être réellement centrées.
- Recentrage après clic, +/- 1/3 stop, changement caméra/gamma et compensation AUTO.
- Les bulles restent pleinement cliquables.
- Shutter 400 / 800 conservés.
- Version visible : v3.24


V3.24
- Dans le gros résultat COMPENSATION, suppression de "(f/ ou T)".
- L'ouverture compensée s'affiche désormais simplement sous la forme f/4, f/5.6, etc.
- Aucun autre changement.
- Version visible : v3.24


V3.24
- Réglage fin du Gain modifié de ±2 dB à ±1 dB.
- Les repères principaux restent espacés de 6 dB = 1 stop.
- Les TIPS indiquent désormais qu'un pas de 1 dB correspond à environ 1/6 de stop.
- Version visible : v3.24


V3.24
- Retour au réglage fin Gain par pas de ±2 dB.
- 6 dB = 1 stop, donc 2 dB ≈ 1/3 de stop.
- Cohérence avec les ajustements fins ±1/3 stop du diaph et des ISO.
- Version visible : v3.24


V3.24
- Réglage fin du Gain repassé à ±1 dB pour plus de flexibilité en tournage.
- Les repères principaux restent espacés de 6 dB = 1 stop.
- 1 dB ≈ 1/6 stop ; 2 dB ≈ 1/3 stop.
- TIPS mis à jour avec cette logique.
- Version visible : v3.24


V3.24
- Les choix de MÉTHODE sont sauvegardés localement sur l'appareil.
- Mémorisation : caméra, gamma, ISO/Gain, shutter Vitesse/Angle, réseau 50/60 Hz et cadence fps.
- Les préférences sont restaurées automatiquement après fermeture/réouverture de l'application.
- Le bouton RESET rétablit les valeurs par défaut et les enregistre comme nouvelles préférences.
- Les données restent locales dans le navigateur/PWA ; aucun compte ni connexion internet nécessaire.
- Version visible : v3.24


V3.24
- "MÉTHODE" devient "RÉGLAGES CAMÉRA".
- La section Réglages caméra est maintenant repliée par défaut au lancement.
- Un clic sur l'en-tête déplie / replie la section.
- Les choix internes restent mémorisés comme en V3.24.
- Version visible : v3.24


V3.24
- Suppression des longues rangées permanentes de valeurs dans l'écran principal.
- Ouverture / ISO-Gain / Shutter / ND sont désormais affichés sous forme d'une seule valeur cliquable.
- Un clic ouvre un panneau de sélection avec toutes les valeurs disponibles.
- ISO natifs / Lo-Hi restent repérés par un contour bleu dans le panneau.
- Gain : choix complet par pas de 1 dB.
- ISO : choix jusqu'à 51 200.
- Ouverture : tous les tiers de stop disponibles.
- ND : 0 à 8 stops.
- Shutter : vitesses 1/25 à 1/800 ou angles selon le mode.
- Suppression complète du choix 50/60 Hz d'EXPOSURE.
- La cadence fps n'est affichée que si le shutter est en Angle.
- Les réglages caméra restent mémorisés après fermeture de l'app.
- Réglages caméra reste replié par défaut.
- Version visible : v3.24


V3.24
- ND QUICK retiré de l'écran principal.
- ND QUICK déplacé tel quel dans la page TIPS.
- Les 12 valeurs ND et leurs appellations restent inchangées.
- Version visible : v3.24


V3.24
- Icône de l'app Exposure alignée sur la DA de l'app DOF.
- Titre d'icône passé à EXPO pour matcher DOF.
- Typo, tailles et structure visuelle harmonisées entre les deux apps.
- Cache versionné en v3.24 pour forcer la mise à jour de l'icône.

V3.24 — FAMILY ICON SYSTEM
- Nom utilisateur harmonisé : EXPO (et non EXPOSURE) dans toute l'identité de l'app.
- short_name : EXPO · BRUNO, sur le même modèle que DOF · BRUNO.
- Nouvelle icône basée directement sur le master DOF :
  même fond, même position verticale, même cadre central,
  même taille de titre, et bloc BRUNO / SET TOOLS strictement identique.
- Icônes 512 px et 192 px générées depuis le même master.
- Cache PWA : v3.24

V3.24
- short_name PWA raccourci en "EXPO - BST" pour un affichage plus lisible sous l’icône.
- Nom harmonisé avec DOF.
- Cache PWA mis à jour en v3.24.


V3.28 — BOS Camera DB
- EXPO lit maintenant la même base centrale `BOS-CAMERA-DB/cameras.json` que FRAME, DOF et MEDIA.
- La liste des caméras et des profils gamma est construite depuis le bloc `expo` de la base.
- Les ISO natifs / Lo-Hi sont lus depuis la base et surlignés dans le picker ISO.
- En passant ISO → Gain, EXPO choisit automatiquement la base native la plus proche de l’ISO de référence et exprime le gain relativement à cette base (0 dB = base native).
- Pour une caméra dual/multi-base, une ligne “Base gain” permet de changer d’ancrage sans modifier l’exposition équivalente.
- Si aucune base native n’est renseignée pour un profil, le passage en Gain n’est pas effectué.
- Cache local de la DB + fallback embarqué pour le hors-ligne.


V3.29 — BOS Camera DB V1.2 / EXPO automatique
- EXPO accepte maintenant le schéma central `exposure` de BOS_CAMERA_DB V1.2, tout en restant compatible avec l'ancien bloc `expo`.
- Les 11 caméras réelles de la DB V1.2 apparaissent automatiquement ; les entrées capteur génériques sans exposition restent exclues.
- Conversion automatique de `baseValues` vers les repères natifs utilisés par l'interface EXPO.
- ARRI est affiché en EI (Base EI) au lieu d'être présenté abusivement comme ISO.
- RED ISO 800 reste un ISO de référence, affiché sans surlignage bleu de valeur native.
- Le mode Gain est réservé aux profils dont la DB indique `gain.type = cameraSpecific`; il n'est pas proposé pour ARRI EI ni pour l'ISO métadonnée RED.
- Cache DB passé en v2 pour éviter qu'une ancienne liste de 4 Sony masque la nouvelle base.
- Fallback hors-ligne remplacé par la BOS_CAMERA_DB V1.2 complète.
- Cache PWA/version : v3.29.

IMPORTANT — BASE CENTRALE
- Pour que les futures modifications de BOS_CAMERA_DB arrivent dans EXPO sans republier l'app, le fichier `cameras.json` V1.2 (ou supérieur) doit être publié dans le dépôt central BOS-CAMERA-DB utilisé par CAMERA_DB_URL.
- EXPO V3.29 refuse volontairement une base distante plus ancienne que sa base embarquée afin de ne pas perdre des caméras.


V3.30 — Sélection caméra par marque
- Le choix des caméras se fait désormais en deux étapes : MARQUE puis CAMÉRA.
- La marque active est déduite de la caméra sélectionnée et les modèles affichés sont filtrés par marque.
- En changeant de marque, EXPO sélectionne le premier modèle disponible de cette marque, puis permet de choisir un autre modèle.
- Les données d'exposition restent entièrement lues depuis BOS Camera DB.
- Cache PWA/version : v3.30.


V3.31 — Sélection caméra compacte
- Conservation du choix de marque sous forme de boutons.
- Remplacement des longues rangées de modèles par un menu déroulant pleine largeur.
- Le menu n'affiche que les caméras de la marque active.
- La marque n'est pas répétée dans le nom du modèle.
- Mémorisation de la dernière caméra choisie pour chaque marque.
- Interface adaptée aux noms longs (notamment Blackmagic), sans débordement horizontal.
- Cache PWA/version : v3.31.


V3.32 — COMPACT + SCÈNES
- Réglages caméra repliés : le nom de la caméra choisie reste visible dans le titre, comme dans DOF.
- Référence et Nouveau réglage réunis dans un seul workflow compact.
- Shutter et ND du nouveau réglage intégrés au même bloc, suppression de la séparation « Autres changements ».
- Compensation transformée en récapitulatif compact : résultat + détail des stops par paramètre.
- Nouvelle section SCÈNES : saisie d’un écart de lumière relatif à la référence et proposition de réglage en conservant la logique MANUEL/AUTO.
- Les scènes sont mémorisées localement.
- Prépare l’arrivée future d’une cellule téléphone : la mesure pourra alimenter automatiquement l’écart de lumière.


V3.33 — COMPENSATION SIMPLE M/A + LIMITES ISO
- Interface principale alignée sur le module EXPO de BrunoOnSet : une ligne par Diaph / ISO / Shutter / ND avec bascule M/A.
- Ajout ISO MIN et ISO MAX en haut du bloc.
- ISO MIN prend par défaut la base native la plus basse du profil choisi ; l’utilisateur peut la modifier (utile notamment pour verrouiller une seconde base native).
- ISO MAX prend par défaut la valeur maximale disponible et reste modifiable.
- Assombrir : ISO descend jusqu’à ISO MIN, puis ND monte, puis Shutter, puis Diaph si celui-ci est aussi en AUTO.
- Éclaircir : ND descend d’abord jusqu’à 0, puis ISO monte jusqu’à ISO MAX, puis Shutter, puis Diaph si AUTO.
- Un réglage en MANUEL est toujours ignoré par la compensation automatique.
- Récapitulatif direct des stops appliqués.
- SCÈNES utilise la même logique de priorité.


V3.34 — CALCULER + ND CLAIR
- La compensation n’est plus appliquée au fil des changements.
- Tous les réglages restent modifiables, y compris ceux marqués AUTO.
- Nouveau bouton CALCULER : les paramètres AUTO compensent uniquement au clic.
- Suppression du cadre « RÉCAP COMPENSATION / PRÊT ».
- Résumé de calcul affiché en une ligne sans bulle.
- Nomenclature ND clarifiée : ex. 1 stop · ND2 · 0,3.
- ISO MIN / ISO MAX et ordre de priorité AUTO conservés.


V3.37 — RÉFÉRENCE EXPLICITE
- Ajout d’un bloc RÉFÉRENCE compact dans la compensation simplifiée.
- L’utilisateur définit explicitement Diaph / ISO / Shutter / ND de départ.
- Le NOUVEAU RÉGLAGE est séparé visuellement de la référence.
- M = valeur imposée ; A = paramètre autorisé à compenser.
- CALCULER compare le nouveau réglage à la référence et applique uniquement les paramètres en A.
- Bouton = ACTUEL pour mémoriser rapidement le réglage courant comme nouvelle référence.
