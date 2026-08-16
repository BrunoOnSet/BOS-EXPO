BOS LIGHT — V0.3
================

Pivot du prototype : BOS Light ne simule plus le rendu d'un visage.
Il devient un calculateur photométrique de préparation de tournage.

Fonctions
---------
- amaran Halo 60x / 100x / 200x / 300x / 600x
- Nu / Réflecteur / Softbox 60 ou 90 selon le modèle
- 2700 / 3200 / 4300 / 5600 / 6500 K
- Intensité 0–100 %
- ISO max / shutter / diaphragme
- Calcul de distance maximale
- Test d'une distance donnée : lux, ISO requis, diaph possible, marge en stops
- Indication claire interpolation / extrapolation

Données photométriques
----------------------
Sources constructeur officielles :
https://help.amarancreators.com/en/amaran-halo-60x-100x/specifications
https://help.amarancreators.com/en/amaran-halo-200x-300x-600x/specifications

Les valeurs 100 % passent exactement par les points de mesure Aputure Lab.
Entre deux points, l'app fait une interpolation logarithmique (loi de puissance locale).
Hors de la plage de mesure, elle extrapole la pente locale et le signale.

Dimmer
------
Aucune table constructeur complète par pourcentage n'est publiée dans les pages utilisées.
Sous 100 %, la V0.3 suppose donc une variation linéaire des lux avec le pourcentage.
Le résultat est explicitement marqué "DIMMER ESTIMÉ".

Exposition
----------
Relation posemètre incident utilisée : E = C * N² / (ISO * t), avec C = 250.
Cette relation permet de convertir l'éclairement en exposition théorique.
Les EI réels des caméras, les tolérances des projecteurs et les méthodes de mesure peuvent créer un écart pratique.

Plan Feu
--------
Les placements Paramount / Loop / Rembrandt / Split et la construction de schémas lumière sont volontairement retirés de LIGHT.
Ils sont réservés à l'application séparée "Plan Feu".
