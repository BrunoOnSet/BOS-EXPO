BOS EXPO — CELLULE RELATIVE — PROTOTYPE V0.2

BUT
Tester si la caméra d'un téléphone peut mesurer de façon répétable un écart de luminance en stops entre deux zones, sans prétendre donner une exposition absolue.

MODE LIVE (PRIORITAIRE)
1. L'app ouvre la caméra arrière.
2. L'utilisateur vise une zone et presse « DÉFINIR COMME RÉF. ».
3. Le prototype laisse brièvement l'auto-exposition se stabiliser.
4. Il tente de passer exposureMode en manual et de conserver ISO / exposureTime courants quand le navigateur expose ces contrôles.
5. Le verrouillage est vérifié via getSettings()/getConstraints().
6. Seulement si le verrouillage est confirmé, le prototype mémorise la luminance centrale et affiche ensuite log2(L2/L1) en stops.
7. Si le verrouillage n'est pas vérifiable, aucun chiffre live n'est affiché.

MODE 2 PHOTOS (FALLBACK EXPERIMENTAL)
- ImageCapture.takePhoto() prend Photo A puis Photo B.
- Un parseur EXIF minimal cherche ExposureTime, FNumber et ISO.
- Si les métadonnées sont disponibles, l'écart est calculé comme différence d'EV100.
- Sur smartphone, HDR / multi-frame / tone mapping peuvent rendre ce mode approximatif : il sert uniquement au test.

IMPORTANT
- La caméra web nécessite HTTPS (ou localhost). Ouvrir index.html directement en file:// ne suffit généralement pas sur téléphone.
- Ce prototype ne doit pas être utilisé comme posemètre absolu.
- La mesure live dépend du traitement vidéo du téléphone. Le critère de validation est la répétabilité face à des écarts connus.

PROTOCOLE CONSEILLÉ
- Tester plusieurs fois la même paire de zones.
- Tester si possible la même surface sous deux niveaux de lumière connus.
- Comparer avec une cellule / un spotmètre / une caméra de référence.
- Noter modèle de téléphone + navigateur + résultat affiché dans COMPATIBILITÉ / DIAGNOSTIC.


V0.2 : PLAN B · 2 PHOTOS remonté directement sous la mesure caméra. Les commandes REDÉFINIR / EFFACER RÉF. sont supprimées ; le bouton initial DÉFINIR COMME RÉF. disparaît après prise de référence live.
