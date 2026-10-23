# Ressources de révision — Agrégation spéciale de mathématiques 2027

Ce dépôt rassemble des fiches, exercices corrigés, aides-mémoire, extraits de code et visualisations interactives pour préparer le concours externe spécial de l’agrégation de mathématiques. Les ressources sont **complémentaires et sélectives** : elles ne constituent ni un cours complet ni une couverture exhaustive du programme.

## Programme officiel et périmètre

Le [programme officiel 2027 du concours externe spécial de mathématiques](https://www.devenirenseignant.gouv.fr/media/20323/download) est la référence à suivre. Il prévoit deux compositions écrites dont le programme couvre les titres 1 à 12, puis trois épreuves orales : algèbre et géométrie, analyse et probabilités, et modélisation. L’option A concerne le programme spécifique de l’épreuve de modélisation ; elle ne remplace pas le programme commun des écrits et des deux premières épreuves orales. La [page ministérielle des programmes de la session 2027](https://www.devenirenseignant.gouv.fr/les-programmes-des-concours-d-enseignants-du-second-degre-de-la-session-2027-1836) permet de retrouver le document officiel.

Les fichiers ci-dessous ont fait l’objet d’une lecture d’audit comparée au programme 2027. Plusieurs contiennent des erreurs, des hypothèses incomplètes ou des raccourcis trop forts. **Ne pas apprendre une formule ou un énoncé avant d’en vérifier les hypothèses et les corrections signalées dans la liste de travail.** Une ressource décrite ici comme « fiche » ou « outil » n’est pas pour autant certifiée exacte ni complète.

## Inventaire des ressources pédagogiques

### Algèbre — groupes

- [`boite_outils_actions_groupe.html`](01-algebre/groupes/boite_outils_actions_groupe.html) — Fiche interactive sur les actions, orbites, stabilisateurs, formule des classes et conjugaison, avec exercices corrigés. Ajouter les hypothèses de finitude et compléter les preuves annoncées.
- [`boite_outils_morphismes-1.html`](01-algebre/groupes/boite_outils_morphismes-1.html) — Rappels sur noyau, image, injectivité et premier théorème d’isomorphisme. La preuve de l’équivalence entre injectivité et noyau trivial est incomplète.
- [`boite_outils_quotients-1.html`](01-algebre/groupes/boite_outils_quotients-1.html) — Sous-groupes distingués, quotients et exercices corrigés. Préciser la finitude quand une formule de cardinal est utilisée ; certaines assertions « type annales » ne sont pas référencées.
- [`demonstrations_groupes_cycliques-1.html`](01-algebre/groupes/demonstrations_groupes_cycliques-1.html) — Démonstrations de Lagrange, de l’ordre d’un élément et de critères de génération. Clarifier la notation additive ou multiplicative et reprendre l’argument d’une preuve d’unicité.
- [`groupes_cycliques_interactif-2.html`](01-algebre/groupes/groupes_cycliques_interactif-2.html) — Cours court, glossaire et exercices sur les groupes cycliques. L’exercice 6 comporte une hypothèse contradictoire avec sa conclusion.
- [`tour_de_crochet_groupes-1.html`](01-algebre/groupes/tour_de_crochet_groupes-1.html) — Visualisation des sous-groupes de \(\mathbb{Z}/n\mathbb{Z}\) par des déplacements circulaires. Illustration correcte dans son cadre, mais limitée aux groupes cycliques finis.

### Algèbre — anneaux, corps et polynômes

- [`boite_outils_anneaux.html`](01-algebre/anneaux-corps-polynomes/boite_outils_anneaux.html) — Rappels interactifs sur anneaux, idéaux, morphismes et corps. Expliciter les conventions d’anneau et corriger les cas limites \(n=1\) et \(n=-1\).
- [`boite_outils_anneaux_principaux.html`](01-algebre/anneaux-corps-polynomes/boite_outils_anneaux_principaux.html) — Anneaux principaux, extensions de corps et polynôme minimal, avec exercices. La généralisation « toujours irréductible sur un corps plus grand » est fausse et doit être corrigée.
- [`boite_outils_polynomes.html`](01-algebre/anneaux-corps-polynomes/boite_outils_polynomes.html) — Division euclidienne, racines, multiplicités, irréductibilité et relations coefficients-racines. Ajouter notamment les hypothèses de caractéristique pour la multiplicité par dérivées et la condition complète d’Eisenstein.

### Algèbre — réduction et formes

- [`boite_outils_reduction.html`](01-algebre/reduction/boite_outils_reduction.html) — Aide-mémoire sur polynôme caractéristique et minimal, Cayley–Hamilton, diagonalisation et nilpotence. Les hypothèses de dimension et de corps doivent être affichées ; corriger la caractérisation générale des endomorphismes nilpotents.
- [`boite_outils_jordan.html`](01-algebre/reduction/boite_outils_jordan.html) — Blocs de Jordan, sous-espaces caractéristiques et calcul de puissances. Corriger la convention de base d’un exercice et distinguer blocs de taille au moins \(k\) et blocs de taille exactement \(k\).
- [`boite_outils_formes_bilineaires.html`](01-algebre/formes-bilineaires/boite_outils_formes_bilineaires.html) — Formes quadratiques, polarisation, Cauchy–Schwarz, Gram–Schmidt et théorème spectral. Préciser les hypothèses sur le corps et le produit scalaire ; le contenu ne couvre qu’une petite partie de la géométrie du programme.
- [`fiches_algebre-1.html`](01-algebre/fiches-synthese/fiches_algebre-1.html) — Six fiches murales sur groupes, anneaux, arithmétique, réduction, formes et dualité. À traiter comme des résumés sélectifs ; plusieurs hypothèses et formulations demandent précision.

### Analyse — topologie et suites de fonctions

- [`boite_outils_topologie.html`](02-analyse/topologie/boite_outils_topologie.html) — Rappels sur complétude, Banach, compacité, Heine-Borel, Heine et connexité. Les résultats sont globalement justes sous leurs hypothèses usuelles, mais celles-ci doivent être explicitées et la couverture complétée.
- [`topologie_au_crochet.html`](02-analyse/topologie/topologie_au_crochet.html) — Introduction visuelle aux boules, ouverts, fermés et à la compacité. Les animations donnent une intuition, pas une vérification mathématique rigoureuse ; revoir notamment la simulation du recouvrement.
- [`boite_outils_suites_fonctions.html`](02-analyse/suites-series/boite_outils_suites_fonctions.html) — Convergences simple, uniforme et normale, théorèmes d’interversion et exemple \(x^n\). Nuancer le rôle de la convergence uniforme, qui n’est pas la seule voie pour intervertir une limite et une intégrale.

### Analyse — mesure, Hilbert, Fourier et fonctions holomorphes

- [`boite_outils_lebesgue.html`](02-analyse/mesure-integration/boite_outils_lebesgue.html) — Convergences monotone et dominée, Fatou, Tonelli–Fubini, Hölder et intégration à paramètres. Une correction affirme à tort qu’aucune domination intégrable n’existe dans un exemple ; c’est une priorité de correction.
- [`lebesgue_illustre.html`](02-analyse/mesure-integration/lebesgue_illustre.html) — Comparaison interactive entre une suite dominée et une suite de pics. Corriger la convergence au point \(0\), le dominateur annoncé et le graphique qui ne représente pas fidèlement la fonction décrite.
- [`boite_outils_hilbert.html`](02-analyse/hilbert/boite_outils_hilbert.html) — Projection, théorème de représentation de Riesz, bases hilbertiennes et Parseval. Les cadres réel/complexe et les hypothèses de convergence sont à préciser.
- [`boite_outils_fourier.html`](02-analyse/fourier/boite_outils_fourier.html) — Séries de Fourier, Dirichlet, Parseval et exercices. Harmoniser la convention du coefficient constant \(a_0\) et compléter avec Fejér, Riemann–Lebesgue et la transformée de Fourier.
- [`boite_outils_holomorphes.html`](02-analyse/analyse-complexe/boite_outils_holomorphes.html) — Séries entières, Cauchy–Riemann, formules de Cauchy et des résidus. Ajouter les hypothèses de domaine et d’orientation ; de nombreux éléments du programme complexe restent à traiter.
- [`fiches_analyse-1.html`](02-analyse/fiches-synthese/fiches_analyse-1.html) — Fiches murales sur topologie, séries de fonctions, Lebesgue, Hilbert, holomorphie et Fourier. Revoir notamment la formulation sur convergence simple/uniforme, puis compléter avec les pans du programme absents.

### Option A — probabilités, statistiques et préparation

- [`agregation_option_A-3.html`](03-option-A/preparation/agregation_option_A-3.html) — Planning, fiches, quiz et code Scilab pour l’option A. Plusieurs énoncés statistiques sont donnés sans hypothèses essentielles ; le planning ne doit pas laisser croire que le programme commun est couvert.
- [`Agrégation Mathématiques - Option A Assistant (3).html`](03-option-A/preparation/Agr%C3%A9gation%20Math%C3%A9matiques%20-%20Option%20A%20Assistant%20%283%29.html) — Cartes de révision et exemples de code R pour simulation et modélisation. Corriger entre autres l’intensité de Poisson parfois négative, les cas limites de code, la validation croisée avec fuite d’information et plusieurs hypothèses statistiques.

### Fiches transversales

- [`contenu_fiches_A5_agregation-1.md`](04-fiches-transversales/contenu_fiches_A5_agregation-1.md) — Contenu proposé pour 16 fiches A5 d’algèbre et d’analyse. Plusieurs énoncés sont trop condensés ou incomplets ; corriger avant toute recopie, en particulier les hypothèses et la distinction entre convergence uniforme et normale.

Les documents administratifs rangés dans `99-hors-revision/` ne font pas partie de l’inventaire pédagogique et ne sont pas nécessaires à la préparation mathématique.

## Cahier des charges — travail restant

Cette liste sert à piloter une préparation complète à partir du programme officiel. Une case ne devrait être cochée qu’après avoir su restituer les hypothèses, donner un exemple, traiter un exercice sans aide et expliquer une preuve ou une méthode.

### 1. Établir une carte de couverture du programme

- [ ] Reprendre tous les titres 1 à 12 du programme officiel et en faire une checklist détaillée de notions, théorèmes et méthodes.
- [ ] Pour chaque notion, noter séparément : cours compris, énoncé su avec hypothèses, preuve maîtrisée quand elle est exigible, exercices réussis, sujet d’annale traité.
- [ ] Marquer chaque ressource comme « à corriger », « à compléter » ou « relue après correction ». Ne pas employer « complet », « exhaustif » ou « conforme au programme » sans vérification exhaustive.

### 2. Corriger les erreurs avant de mémoriser

- [ ] **Option A — code et modélisation :** rendre l’intensité du processus de Poisson toujours non négative ; traiter le cas où aucun saut n’est simulé ; différencier majorant de rejet et maximum d’une densité ; corriger l’estimation d’extinction tronquée et refaire la sélection de variables/modèles à l’intérieur de chaque pli de validation croisée.
- [ ] **Option A — statistiques :** préciser la censure non informative pour Kaplan–Meier, les conditions du test de Kolmogorov–Smirnov quand des paramètres sont estimés, les hypothèses de Cramér–Rao et des intervalles de confiance, les conditions de BH et le critère différent contrôlé par Bonferroni ; ne pas promettre qu’EM atteint un maximum global ni converge en un nombre fixé d’itérations.
- [ ] **Lebesgue :** corriger les exemples de domination ; vérifier les valeurs en \(x=0\), le dominateur indépendant de \(n\), et la fidélité des graphes aux fonctions annoncées.
- [ ] **Algèbre et Fourier :** corriger la convention du terme constant de Fourier, les bases et formules de dénombrement de Jordan, les exercices contradictoires, ainsi que les énoncés algébriques formulés sans les hypothèses de corps, de caractéristique ou de finitude.
- [ ] **Analyse et topologie :** corriger les formulations trop générales sur convergence uniforme/normale, compacité et convergence des martingales ; ajouter orientation, domaine et autres hypothèses nécessaires aux formules de Cauchy et des résidus.
- [ ] Retirer ou sourcer les indications non vérifiées concernant les sujets « type annales », les tendances du jury et les affirmations « tombe souvent ».

### 3. Combler les principaux manques de programme

- [ ] **Algèbre linéaire et géométrie :** calcul matriciel, pivot de Gauss, rang, déterminants, systèmes, dualité et applications multilinéaires ; trigonalisation, polynôme minimal, sous-espaces caractéristiques, décomposition de Dunford et exponentielle des matrices ; formes alternées et hermitiennes, adjoints, valeurs singulières, décompositions polaire, géométrie affine/euclidienne, coniques et quadriques.
- [ ] **Groupes, anneaux et polynômes :** groupes abéliens finis, racines de l’unité, permutations et signature, groupes classiques et applications géométriques ; idéaux premiers/maximaux, théorème chinois, divisibilité et factorisation, corps finis et Frobenius, polynômes multivariés/symétriques, sommes de Newton, polynômes cyclotomiques et fractions rationnelles.
- [ ] **Analyse réelle et espaces normés :** séries numériques, fonctions usuelles, théorèmes de Rolle et des accroissements finis, Taylor et développements asymptotiques, intégrales généralisées, convexité, normes et espaces de Banach, applications linéaires continues, théorèmes de Riesz et d’Ascoli, calcul différentiel à plusieurs variables et équations différentielles.
- [ ] **Mesure, intégration et Fourier :** tribus et mesures, fonctions mesurables, espaces \(L^p\), Hölder, intégrales à paramètres, changements de variables, convolution et régularisation ; Fejér, Riemann–Lebesgue, transformée de Fourier sur \(L^1/L^2(\mathbb{R}^d)\), Plancherel et inversion.
- [ ] **Analyse complexe :** primitives et intégrales le long de chemins, logarithme complexe, indice, principe du maximum, séries de Laurent, singularités, fonctions méromorphes et convergence uniforme des fonctions holomorphes.

### 4. Compléter le programme spécifique de l’option A

- [ ] Chaînes de Markov : propriété forte, classification des états, récurrence/transience, irréductibilité, mesures stationnaires et conditions de convergence.
- [ ] Espérance conditionnelle, martingales et sous/sur-martingales, temps d’arrêt et théorèmes d’arrêt et de convergence.
- [ ] Processus de Poisson construit à partir de variables exponentielles et propriétés des accroissements.
- [ ] Statistique : fonctions empiriques, Slutsky, estimation paramétrique et maximum de vraisemblance, intervalles de confiance, vecteurs gaussiens, théorème de Cochran, TCL dans \(\mathbb{R}^n\), tests du \(\chi^2\) et de Kolmogorov–Smirnov.
- [ ] Pour chaque méthode de modélisation : justifier le modèle, expliquer ses hypothèses et limites, interpréter les résultats, vérifier la précision et commenter le coût des calculs.

### 5. Préparer explicitement les épreuves orales et l’écrit

- [ ] Constituer une banque de sujets couvrant l’ensemble du programme commun, avec plans, démonstrations courtes, exemples et exercices de relance.
- [ ] S’entraîner à présenter un plan clair, développer un résultat au tableau et répondre aux questions sans confondre récitation et justification.
- [ ] Pour la modélisation, préparer l’usage des logiciels exigés au programme officiel, vérifier les calculs numériques et savoir discuter les limites de la simulation et des algorithmes.
- [ ] Travailler sur des sujets et rapports du jury publiés par des sources officielles ; identifier les références de chaque sujet ou conseil avant de le reprendre dans une fiche.
- [ ] Prévoir des compositions blanches chronométrées, des oraux blancs et un carnet d’erreurs régulièrement repris.
- [ ] Faire une dernière passe de révision espacée : définitions et hypothèses, preuves fondamentales, exercices-types, puis sujets complets.

## Principe de mise à jour

Toute nouvelle ressource doit être rattachée à une rubrique précise du programme officiel et indiquer si elle est un cours, une fiche de mémorisation, un exercice, du code ou une visualisation. Toute correction mathématique importante doit être vérifiée avec ses hypothèses et, idéalement, illustrée par un exemple ou un contre-exemple. Les pièces administratives ou non pédagogiques doivent rester hors de l’index de révision et ne pas contenir de données personnelles dans ce README.
