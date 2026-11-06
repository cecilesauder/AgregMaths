# Titre 2 — Groupes

> **Statut : guide de révision, à travailler, ne remplace pas un cours.** Ce document organise les notions du programme officiel et propose des repères, exemples et méthodes de révision. Il ne prétend ni fournir les démonstrations complètes de tous les résultats cités ni couvrir davantage que les points vérifiés dans le texte officiel.

Le programme de la session 2027 donne à l’unité **2 Groupes** quatre sous-parties, notées (a) à (d). Il indique expressément que les notions de théorie des groupes des paragraphes concernés sont à illustrer et à appliquer dans des situations géométriques. La sous-partie (a) nomme en particulier l’application à la détermination des groupes d’isométries d’un polytope régulier en dimensions deux et trois. Les intitulés ci-dessous suivent ceux du PDF ; les explications et exemples sont des repères de travail, pas des intitulés supplémentaires du programme. [1]

> **Pour avancer pas à pas :** [jouer au Gardien des groupes](../01-algebre/groupes/gardien-des-groupes.html) — 11 missions, 27 questions corrigées et un laboratoire de symétries. C’est un socle guidé pour démêler les premières structures, pas un remplacement du guide ni une couverture complète du titre 2.

## (a) Groupes, actions et géométrie des isométries

### Notions à savoir

Le texte officiel énumère dans cette sous-partie : **groupes et morphismes de groupes ; produit direct de groupes ; sous-groupes ; sous-groupe engendré par une partie ; ordre d’un élément ; sous-groupes distingués (ou normaux) et groupes quotients ; action d’un groupe sur un ensemble ; stabilisateur d’un point, orbites et espace quotient ; formule des classes ; classes de conjugaison ; application à la détermination des groupes d’isométries d’un polytope régulier en dimension deux et trois.** [1]

Un **groupe** est un ensemble muni d’une loi associative, possédant un élément neutre et dans lequel chaque élément possède un inverse. Il est **abélien** si la loi est commutative. Un **morphisme de groupes** (ou homomorphisme) `φ : G → H` respecte la loi : `φ(xy)=φ(x)φ(y)` pour tout `x,y∈G`. Son noyau est `ker φ={x∈G : φ(x)=e_H}` et son image est `im φ={φ(x):x∈G}`. Le noyau est normal dans G ; le morphisme est injectif si et seulement si son noyau est réduit à l’élément neutre. **Exemple.** Le déterminant définit un morphisme `det:GL_n(K)→K^×` lorsque K est un corps commutatif ; son noyau est `SL_n(K)`.

Un **sous-groupe** H de G est une partie contenant l’élément neutre et stable par produit et passage à l’inverse. La condition pratique ` x,y∈H⇒xy^{-1}∈H` suffit à vérifier qu’une partie non vide est un sous-groupe. Pour `S⊂G`, le **sous-groupe engendré** `⟨S⟩` est le plus petit sous-groupe contenant S ; il contient tous les produits finis d’éléments de S et de leurs inverses. **Exemple.** Dans `(ℤ,+)`, `⟨m⟩=mℤ`. Dans un groupe cyclique, un seul élément peut engendrer tout le groupe.

Le **produit direct** `G×H` est muni de la loi `(g,h)(g',h')=(gg',hh')`. Pour des groupes finis, `|G×H|=|G||H|`. **Exemple.** Le groupe de Klein `C_2×C_2` a quatre éléments ; il n’est pas cyclique, car aucun élément n’a l’ordre 4.

L’**ordre** d’un élément g est le plus petit entier positif n tel que `g^n=e`, s’il existe ; sinon, g est d’ordre infini. Pour g d’ordre fini n, les puissances de g forment le sous-groupe cyclique `⟨g⟩` d’ordre n. Dans un groupe fini, le théorème de Lagrange donne `|H|∣|G|` pour tout sous-groupe H, et donc l’ordre de tout élément divise `|G|`. **Exemple.** Dans `ℤ/12ℤ`, l’élément 8 (pour l’addition) a ordre 3, car `3·8=0 mod 12` et aucun entier positif plus petit ne l’annule.

Un sous-groupe `N≤G` est **normal** (ou distingué), noté `N◁G`, si `gNg^{-1}=N` pour tout `g∈G`. Cette hypothèse permet de définir le **groupe quotient** `G/N` dont les éléments sont les classes `gN` et dont la loi est `(gN)(hN)=ghN`. Pour tout morphisme `φ:G→H`, le premier théorème d’isomorphisme identifie `G/ker φ` à `im φ`. **Exemple.** Le morphisme `ℤ→ℤ/nℤ` de réduction modulo n a pour noyau `nℤ` et le premier théorème d’isomorphisme identifie le quotient `ℤ/nℤ` à son image.

Une **action** de G sur un ensemble X est une application `G×X→X`, `(g,x)↦g·x`, telle que `e·x=x` et `(gh)·x=g·(h·x)`. Le **stabilisateur** de x est `G_x={g∈G:g·x=x}`, un sous-groupe de G. L’**orbite** de x est `G·x={g·x:g∈G}`. L’ensemble des orbites est l’**espace quotient** `X/G`. Si G est fini, l’orbite-stabilisateur donne `|G·x|=[G:G_x]=|G|/|G_x|`. L’action induit aussi un morphisme `G→Sym(X)` ; son noyau est constitué des éléments qui fixent chaque point. **Exemple.** Les rotations d’un polygone régulier agissent sur ses sommets ; l’action est transitive et le stabilisateur d’un sommet permet de retrouver le nombre de rotations.

Pour une action d’un groupe fini sur un ensemble fini X, les orbites partitionnent X et `|X|=∑_{x∈R}|G·x|`, où R contient un représentant de chaque orbite. C’est la **formule des classes** pour une action. L’action de G sur lui-même par conjugaison, `g·x=gxg^{-1}`, donne les **classes de conjugaison**. Pour un groupe fini, la formule des classes s’écrit

`|G|=|Z(G)|+∑_{i}[G:C_G(x_i)]`,

où les `x_i` représentent les classes non centrales, `Z(G)` est le centre et `C_G(x)={g∈G:gx=xg}` le centralisateur. **Exemple/usage.** Dans `S_3`, les classes de conjugaison sont l’identité, les trois transpositions et les deux cycles de longueur 3 ; leurs tailles somment à 6.

### Application géométrique : polygones et polyèdres réguliers

Une isométrie d’un polygone ou d’un polyèdre régulier est une isométrie euclidienne qui le préserve. Les isométries forment un groupe par composition. Pour un polygone régulier à n sommets, le groupe complet des symétries est le groupe diédral `D_n`, de cardinal `2n` : n rotations et n réflexions. Attention, certaines conventions nomment `D_n` le groupe de cardinal n ; il faut annoncer la convention utilisée. Les rotations seules forment le groupe cyclique `C_n`.

En dimension trois, les cinq polyèdres réguliers convexes fournissent des exemples de groupes finis d’isométries. Les groupes des isométries préservant l’orientation sont respectivement isomorphes à `A_4` pour le tétraèdre, `S_4` pour le cube et l’octaèdre, et `A_5` pour le dodécaèdre et l’icosaèdre. Les groupes complets ont respectivement 24, 48 et 120 éléments. Ces identifications sont des exemples utiles de révision ; la formulation officielle exige l’application à la détermination de groupes d’isométries en dimensions deux et trois, sans énumérer ces cinq cas ni fixer dans cette ligne la profondeur de classification attendue. [1]

**Méthode de détermination.** Faire agir le groupe sur les sommets, les arêtes ou les faces ; déterminer les orbites et un stabilisateur ; établir que l’action est fidèle si l’on veut obtenir une représentation comme sous-groupe d’un groupe de permutations ; compter les éléments par orbite-stabilisateur ou en distinguant rotations et réflexions. Pour identifier le groupe, les seules cardinalités ne suffisent pas toujours : comparer aussi les ordres des éléments, leurs relations et la structure des stabilisateurs.

#### Exemples résolus : carré et tétraèdre régulier

Pour un carré dont les sommets sont numérotés dans l’ordre cyclique, la rotation d’un quart de tour \(r=(1234)\) et la réflexion d’axe passant par les sommets 1 et 3, \(s=(24)\), engendrent les symétries. Elles vérifient \(r^4=s^2=1\) et \(srs=r^{-1}\). Il y a au plus \(4\cdot2=8\) symétries, car l’image du sommet 1 a quatre choix et celle d’un sommet adjacent deux choix ; les quatre rotations et les quatre réflexions existent. Le groupe est donc diédral d’ordre 8, et son action sur les sommets est fidèle.

Pour un tétraèdre régulier, les quatre sommets sont affinement indépendants et toutes les distances entre deux sommets sont égales. Toute permutation des quatre sommets préserve donc les distances et s’étend de façon unique en une isométrie affine ; inversement, une isométrie est déterminée par l’image des sommets. Le groupe complet est ainsi \(S_4\), d’ordre 24. Les isométries qui préservent l’orientation correspondent aux permutations paires, donc forment \(A_4\), d’ordre 12.

## (b) Groupes cycliques, groupes abéliens finis et racines de l’unité

### Notions à savoir

Le programme énumère : **groupes cycliques ; groupes abéliens finis ; groupe des racines complexes n-ièmes de l’unité ; racines primitives.** [1]

Un groupe G est **cyclique** s’il existe g tel que `G=⟨g⟩`. Un groupe cyclique fini d’ordre n est isomorphe à `ℤ/nℤ`. Dans `ℤ/nℤ`, la classe de k engendre le groupe si et seulement si `pgcd(k,n)=1`. Plus généralement, dans un groupe cyclique d’ordre n, l’ordre de `g^k` vaut `n/pgcd(n,k)`. **Exemple.** Dans `ℤ/12ℤ`, les classes 1, 5, 7 et 11 sont génératrices, tandis que 4 engendre un sous-groupe d’ordre 3.

Un groupe est **abélien fini** s’il est fini et commutatif. Le théorème de structure affirme qu’un groupe abélien fini est isomorphe à un produit de groupes cycliques finis ; on peut choisir une décomposition en facteurs d’ordres puissances de nombres premiers, ou en facteurs invariants avec divisibilité successive. La décomposition n’est pas toujours unique sous toutes les formes d’écriture, mais les invariants appropriés déterminent le groupe à isomorphisme près. **Exemple.** `C_2×C_2` est abélien fini mais non cyclique, alors que `C_2×C_3≅C_6`.

Les racines n-ièmes complexes de l’unité forment le groupe

`μ_n={z∈ℂ:z^n=1}={e^{2πik/n}:k=0,…,n−1}.`

Il est cyclique d’ordre n, engendré par `e^{2πi/n}`. Une racine `e^{2πik/n}` est **primitive** si elle engendre `μ_n`, ce qui équivaut à `pgcd(k,n)=1`. Il y a donc `φ(n)` racines primitives, où `φ` est l’indicatrice d’Euler. **Exemple/usage.** Les racines primitives d’ordre 8 sont `e^{2πik/8}` pour k égal à 1, 3, 5 ou 7 ; chacune a ordre 8. Pour n=1, `μ_1={1}`.

**Méthodes à maîtriser.** Calculer l’ordre d’une classe modulo n par le pgcd ; déterminer si un groupe cyclique donné est engendré par un élément ; reconnaître les décompositions de groupes abéliens finis ; identifier les racines primitives à partir de leurs exposants. Ne pas confondre « racine n-ième » et « racine primitive n-ième » : la seconde a exactement l’ordre n.

## (c) Permutations, signature, groupe alterné et déterminants

### Notions à savoir

Le programme énumère : **groupe des permutations d’un ensemble fini ; décomposition en produit de transpositions ; décomposition en produit de cycles à supports disjoints ; signature ; groupe alterné ; application aux déterminants.** [1]

Pour un ensemble fini E, le groupe des permutations est `Sym(E)` ; si `|E|=n`, il est noté `S_n` et a `n!` éléments. Une **transposition** échange deux éléments et fixe tous les autres. Toute permutation est produit de transpositions. Une décomposition n’est pas unique, mais la parité du nombre de transpositions l’est : elle définit la **signature** `sgn(σ)∈{−1,+1}`, morphisme de groupes. **Exemple.** Un cycle de longueur r est produit de `r−1` transpositions, donc sa signature est `(−1)^{r−1}`.

Toute permutation se décompose en cycles à supports deux à deux disjoints, et cette décomposition est unique à l’ordre des cycles près. Des cycles disjoints commutent. L’ordre d’une permutation est le ppcm des longueurs de ses cycles disjoints. **Exemple/calcul.** Si `σ=(1 2 3)(4 5)`, alors son ordre est `lcm(3,2)=6` et sa signature vaut `(+1)(−1)=−1`.

Le **groupe alterné** `A_n` est le noyau de la signature ; il est constitué des permutations paires. Pour n≥2, la signature est surjective, donc `|A_n|=n!/2`. **Exemple.** Les cycles de longueur 3 sont pairs et engendrent `A_n` pour n≥3.

Le lien avec les déterminants apparaît à deux niveaux. D’abord, la matrice de permutation `P_σ` a pour déterminant `sgn(σ)`. Ensuite, l’expression du déterminant d’une matrice carrée `A=(a_{ij})∈M_n(K)`, sur un corps commutatif K, est

`det(A)=∑_{σ∈S_n}sgn(σ)∏_{i=1}^n a_{i,σ(i)}.`

La signature fournit ainsi le signe de chaque terme de la formule de Leibniz. **Usage.** Elle permet aussi de vérifier qu’un échange de deux lignes change le signe du déterminant, tandis qu’une permutation paire de lignes le conserve.

**Méthodes à maîtriser.** Mettre une permutation en cycles disjoints ; la décomposer en transpositions ; calculer son ordre et sa signature de plusieurs façons ; décider si elle appartient à `A_n` ; relier ces calculs aux matrices de permutation et aux propriétés du déterminant. Vérifier la convention de composition et l’ordre dans lequel les facteurs s’appliquent avant de calculer un produit de permutations.

## (d) Groupes classiques d’automorphismes d’un espace vectoriel de dimension finie

### Notions à savoir

Le programme demande la **définition** des groupes classiques suivants : **groupe général linéaire ; groupe spécial linéaire ; groupe orthogonal ; groupe spécial orthogonal ; groupe unitaire ; groupe spécial unitaire.** [1]

Soit E un espace vectoriel de dimension finie sur un corps K. Le **groupe général linéaire** `GL(E)` est le groupe des automorphismes linéaires de E. Après choix d’une base, il s’identifie à `GL_n(K)`, les matrices inversibles. Le **groupe spécial linéaire** `SL(E)`, ou `SL_n(K)` en coordonnées, est le noyau du déterminant : les automorphismes de déterminant 1. La définition requiert le déterminant, donc un corps de base et une dimension finie.

Dans un espace euclidien réel muni d’un produit scalaire, le **groupe orthogonal** `O(E)` est l’ensemble des automorphismes qui préservent le produit scalaire. En base orthonormée, `O_n(ℝ)={A:A^T A=I}`. Le **groupe spécial orthogonal** `SO(E)` est le sous-groupe des éléments de déterminant 1 ; il correspond aux isométries linéaires préservant l’orientation. Pour A orthogonale, `(det A)^2=1`, donc `det A∈{−1,1}`.

Dans un espace hermitien complexe de dimension finie, le **groupe unitaire** `U(E)` est l’ensemble des automorphismes qui préservent le produit hermitien ; en base orthonormée, `U_n={A:A^*A=I}`, où `A^*` est la transposée conjuguée. Le **groupe spécial unitaire** `SU(E)` est son sous-groupe constitué des matrices unitaires de déterminant 1. Les déterminants des matrices unitaires sont de module 1.

**Exemples et usages.** `GL_n(K)` modélise les changements de coordonnées inversibles ; `SL_n(K)` préserve la forme volume associée à une base, c’est-à-dire l’élément de volume choisi. Lorsque `K=ℝ`, cela implique la préservation de l’orientation. `O_2(ℝ)` contient les rotations et réflexions du plan, tandis que `SO_2(ℝ)` contient les rotations ; les groupes unitaires décrivent les transformations linéaires conservant une norme hermitienne. Comparer ces groupes à ceux de la sous-partie (a) aide à identifier les transformations d’un polygone ou d’un polyèdre, tout en distinguant les isométries linéaires fixant l’origine des isométries affines générales.

**À savoir faire.** Donner les définitions sans confondre espace euclidien réel et espace hermitien complexe ; vérifier les équations matricielles dans une base orthonormée ; utiliser `SL_n(K)=ker(det)` ; distinguer `O_n` de `SO_n`, puis `U_n` de `SU_n`. Le programme cité demande les définitions de ces groupes ; cette ligne ne précise pas un théorème de classification de leurs sous-groupes ni une étude détaillée de leurs représentations. [1]

## Checklist de révision

Coche chaque item lorsque tu peux le faire sans t’appuyer sur une fiche, puis vérifie-le sur des exemples différents.

- [ ] **Définitions :** énoncer les axiomes de groupe, reconnaître un sous-groupe et construire `⟨S⟩` ; illustrer par un exemple fini et un exemple infini.
- [ ] **Morphismes et quotients :** calculer noyau et image, établir la normalité du noyau, vérifier la condition de normalité avant de former un quotient.
- [ ] **Ordres et produits :** calculer les ordres d’éléments et de produits directs ; utiliser Lagrange en indiquant que le groupe est fini.
- [ ] **Actions :** vérifier les axiomes d’une action, calculer une orbite et un stabilisateur, appliquer orbite-stabilisateur et décrire l’espace quotient.
- [ ] **Formule des classes :** partitionner un ensemble en orbites ; calculer des classes de conjugaison et des centralisateurs dans un groupe fini de petit ordre.
- [ ] **Géométrie :** retrouver le groupe diédral d’un polygone, distinguer rotations et symétries complètes, décrire une action sur sommets/arêtes/faces d’un polyèdre régulier.
- [ ] **Groupes cycliques :** décider si un élément engendre `ℤ/nℤ` et calculer son ordre par le pgcd.
- [ ] **Abéliens finis et racines :** interpréter une décomposition en produits cycliques ; déterminer les racines primitives d’ordre n à partir de `pgcd(k,n)=1`.
- [ ] **Permutations :** calculer cycles disjoints, facteurs transpositions, ordre et signature ; justifier l’appartenance à `A_n`.
- [ ] **Déterminants :** relier signature et déterminant d’une matrice de permutation ; expliquer le signe dans la formule de Leibniz.
- [ ] **Groupes classiques :** écrire les définitions matricielles de `GL,SL,O,SO,U,SU` et vérifier les hypothèses sur le corps et la forme préservée.
- [ ] **Preuves et rédaction :** savoir démontrer une normalité, une identité d’ordre ou un comptage d’orbites en explicitant les hypothèses de finitude et les conventions utilisées.
- [ ] **Exercices et exemples :** refaire des calculs sur `S_3`, `ℤ/nℤ`, `C_2×C_2`, les polygones réguliers et au moins un polyèdre régulier ; expliquer chaque choix de méthode.

## Lacunes à combler et exigences de maîtrise

Cette fiche pose des définitions et rappelle des énoncés centraux, mais elle ne remplace pas leurs démonstrations, les exercices progressifs, ni les entraînements de concours. Les détails à approfondir en cours ou dans un manuel comprennent notamment les preuves des théorèmes d’orbite-stabilisateur et de Lagrange, la construction et les propriétés des quotients, la preuve de la formule des classes, la classification des groupes abéliens finis et les démonstrations des groupes d’isométries des polyèdres. Le programme officiel demande que les notions soient maîtrisées et illustrées ; ce guide ne constitue pas une preuve que chaque développement possible ou chaque niveau de détail attendu en épreuve est couvert. [1]

Le PDF ne précise pas dans cette unité une liste exhaustive des polyèdres à traiter, les identifications abstraites à connaître par cœur, ni la profondeur attendue pour chacune. Les exemples de groupes associés aux solides ci-dessus sont des illustrations de révision, pas une liste que le document officiel désigne explicitement comme obligatoire. En cas d’incertitude sur une attente de cours ou de jury, compléter par les cours, exercices corrigés, sujets et annales du concours.

**Exigence de travail :** ce support doit être complété par un cours, des exercices et des annales. Il sert à organiser la révision et à repérer les acquis à vérifier, pas à s’y substituer.

## Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Concours externe spécial de l’agrégation du second degré, section mathématiques — Programme de la session 2027, unité 2 Groupes"
