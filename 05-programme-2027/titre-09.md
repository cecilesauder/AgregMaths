# Titre 9 — Calcul différentiel

> **Statut : guide de révision, à travailler, ne remplace pas un cours.**
>
> Le programme officiel intitule le titre **« 9 Calcul différentiel »**. Il comprend les unités **9.1 Fonctions différentiables**, **9.2 Équations différentielles** et **9.3 Géométrie différentielle**. Ainsi, « EDO et géométrie différentielle » décrit bien deux parties du titre, mais ne figure pas dans son intitulé officiel. Les lettres et sous-items reproduits ci-dessous suivent le PDF de la session 2027 [1].

Ce guide rappelle les définitions, les résultats à savoir énoncer avec leurs hypothèses et quelques usages typiques. Il ne constitue ni un cours complet ni un recueil de preuves. Les rappels sont ciblés : il faut vérifier les formulations et conventions enseignées dans son cours, refaire les démonstrations exigibles et s’entraîner sur des exercices de niveaux variés.

## 9.1 Fonctions différentiables

### (a) Applications différentiables sur un ouvert de Rⁿ. Différentielle (application linéaire tangente). Dérivée selon un vecteur.

Soient U un ouvert de Rⁿ, f: U → Rᵐ et a ∈ U. La fonction f est **différentiable** en a s’il existe une application linéaire L: Rⁿ → Rᵐ telle que

`f(a+h) = f(a) + L(h) + o(‖h‖)` lorsque h → 0.

Cette application L, unique, est la **différentielle** `df(a)` (ou `D f(a)`), appelée aussi application linéaire tangente. Il s’agit d’une approximation linéaire de f au premier ordre, et non de la fonction elle-même. Pour un vecteur v, la dérivée selon v est `D_v f(a) = df(a)(v)`; elle représente la variation au premier ordre dans la direction v. Une dérivée directionnelle existant pour chaque direction ne suffit pas, à elle seule, à garantir la différentiabilité.

**Usage / exemple.** Pour `f(x,y)=x²y`, `df(a,b)(h,k)=2ab h+a² k`. Cette formule permet d’approximer `f(a+h,b+k)` et de calculer la dérivée dans toute direction sans confondre direction et coordonnée.

### (b) Dérivées partielles. Matrice jacobienne, vecteur gradient. Composition. Théorème des accroissements finis. Applications de classe C¹.

Les **dérivées partielles** mesurent les variations dans les directions coordonnées. Si les dérivées partielles premières existent et sont continues dans un voisinage de a, alors f est différentiable en a. La matrice de `df(a)` dans les bases canoniques est la **matrice jacobienne** `J_f(a)`. Pour une fonction scalaire f: Rⁿ → R, le **gradient** `∇f(a)` est le vecteur des dérivées partielles et `df(a)(h)=∇f(a)·h`. Une fonction est de classe **C¹** sur U si ses dérivées partielles premières existent et sont continues sur U.

**Règle de chaîne.** Si f: U → V et g: V → Rᵖ sont différentiables, avec V ouvert et f(U) ⊂ V, alors `d(g∘f)(a)=dg(f(a))∘df(a)`; en matrices, `J_(g∘f)(a)=J_g(f(a))J_f(a)`.

**Accroissements finis.** Sur un segment `[x,y]` inclus dans U, si f est C¹, alors
`f(y)-f(x)=∫₀¹ df(x+t(y-x))(y-x) dt`.
En particulier, si `‖df(z)‖≤M` sur le segment, `‖f(y)-f(x)‖≤M‖y-x‖`. Pour une fonction réelle d’une variable, le théorème classique donne aussi un point intermédiaire où le taux d’accroissement est égal à la dérivée.

**Usage / exemple.** Pour `F(x,y)=(x²+y,xy)`, construire `J_F` permet de linéariser F et de calculer la jacobienne d’une composition; une borne de `‖J_F‖` sur un convexe donne une estimation lipschitzienne sur ce convexe.

### (c) Applications de classe Cᵏ. Dérivées partielles d’ordre k. Interversion de l’ordre des dérivations. Hessienne. Taylor-Young et Taylor avec reste intégral (Taylor-Laplace).

Une application est **Cᵏ** si toutes ses dérivées partielles jusqu’à l’ordre k existent et sont continues. Si les dérivées mixtes concernées sont continues dans un voisinage, le théorème de Schwarz permet d’en intervertir l’ordre. Pour f scalaire, la **hessienne** `H_f(a)` est la matrice des dérivées secondes; sous ces hypothèses, elle est symétrique.

Pour f de classe Cᵏ au voisinage de a, Taylor-Young s’écrit
`f(a+h)= Σ_(j=0)^k (1/j!) dʲf(a)[h,…,h] + o(‖h‖ᵏ)`.
À l’ordre 2, le terme quadratique vaut `½ hᵀH_f(a)h`. Si f est Cᵏ⁺¹ le long du segment entre a et a+h, la formule avec reste intégral exprime le reste d’ordre k comme une intégrale de la dérivée d’ordre k+1 le long du segment; elle donne notamment des majorations du reste. Le programme nomme cette formule « Taylor avec reste intégral (Taylor-Laplace) » [1].

**Usage / exemple.** Pour `f(x,y)=eˣ cos y` près de (0,0), les dérivées premières et secondes fournissent le développement quadratique `1+x+(x²-y²)/2+o(x²+y²)`, utile pour comparer f à 1 près de l’origine.

### (d) Étude locale des applications à valeurs dans R. Développements limités. Recherche des extrema locaux.

Un **développement limité** décrit une fonction scalaire près d’un point par un polynôme et un reste d’ordre supérieur. Il s’obtient, sous les hypothèses adaptées, par Taylor. Pour une fonction différentiable ayant un extremum local en un point intérieur a, le **théorème de Fermat** donne `df(a)=0`, donc `∇f(a)=0`.

Si f est C², un minimum local impose une hessienne positive semi-définie et un maximum local une hessienne négative semi-définie. Une hessienne définie positive (respectivement négative) en un point critique garantit un minimum (respectivement maximum) local strict. Une hessienne indéfinie indique un point selle. Si elle est dégénérée, le test d’ordre 2 ne conclut généralement pas : il faut examiner les termes suivants, le reste ou directement les variations.

**Usage / exemple.** Pour `f(x,y)=x²+3y²`, l’origine est un minimum strict puisque le gradient y est nul et la hessienne `diag(2,6)` est définie positive. En revanche, `x²-y²` a une hessienne indéfinie à l’origine.

### (e) Fonctions convexes de plusieurs variables. Caractérisation pour les fonctions C¹ et C² sur un ouvert convexe de Rⁿ.

Sur un ensemble convexe C, f est **convexe** si, pour tous x,y ∈ C et tout `t∈[0,1]`,
`f((1-t)x+ty) ≤ (1-t)f(x)+tf(y)`.
Pour une fonction C¹ sur un ouvert convexe, la convexité équivaut à
`f(y) ≥ f(x)+∇f(x)·(y-x)` pour tous x,y de l’ouvert. Pour une fonction C² sur cet ouvert, elle équivaut à la positivité semi-définie de `H_f(x)` en tout point. Ces critères supposent bien la convexité du domaine; ils ne se transposent pas tels quels à un domaine arbitraire non convexe.

**Usage / exemple.** La hessienne de `f(x,y)=x²+xy+y²` est définie positive, donc f est convexe sur R². L’inégalité de support donne une borne inférieure affine en tout point d’appui.

### (f) Difféomorphismes. Théorème d’inversion locale. Théorème des fonctions implicites.

Un **difféomorphisme** de classe Cᵏ est une bijection entre ouverts dont l’application et l’inverse sont Cᵏ. Le **théorème d’inversion locale** affirme que si f: U → Rⁿ est Cᵏ (`k≥1`) et si `df(a)` est inversible, alors il existe des voisinages de a et f(a) entre lesquels f est un difféomorphisme Cᵏ. La dérivée de l’inverse en f(a) est `[df(a)]⁻¹`. La condition porte sur la différentielle au point; elle n’affirme pas que f est globalement injective.

Pour le **théorème des fonctions implicites**, soit `F: U×V → Rᵖ` de classe Cᵏ et `F(a,b)=0`, avec `D_yF(a,b)` inversible (donc `dim V=p`). Alors, localement près de (a,b), les solutions de `F(x,y)=0` sont exactement le graphe d’une unique fonction `y=φ(x)` de classe Cᵏ. Sa différentielle vérifie `Dφ(x)=-[D_yF(x,φ(x))]⁻¹D_xF(x,φ(x))` lorsque les matrices restent inversibles.

**Usage / exemple.** Comme `∂(x²+y²-1)/∂y=2y` est non nul près de (0,1), le cercle s’y exprime localement sous la forme `y=√(1-x²)`. Ce résultat est local, pas une représentation unique du cercle entier par un seul graphe.

## 9.2 Équations différentielles

### (a) Équations `X′=f(t,X)` sur `I×Ω`. Cauchy-Lipschitz. Solutions maximales. Grönwall. Théorème de sortie de tout compact (« des bouts »).

Ici I est un intervalle ouvert de R, Ω un ouvert de Rⁿ, et f: `I×Ω→Rⁿ`. Une solution est une fonction dérivable X définie sur un intervalle, à valeurs dans Ω, qui vérifie l’équation. Sous les hypothèses usuelles du théorème de **Cauchy-Lipschitz** — notamment continuité de f et caractère localement lipschitzien en X, localement uniformément dans t — pour toute donnée initiale `(t₀,X₀)∈I×Ω`, il existe une solution locale et elle est unique. Une solution est **maximale** si elle ne se prolonge pas comme solution dans le domaine de l’équation; son intervalle maximal dépend de la donnée et du domaine.

Le **lemme de Grönwall** contrôle les écarts : si `u(t)≤A+L∫_(t₀)^t u(s)ds` avec A,L≥0 et u continue positive, alors `u(t)≤A e^{L(t-t₀)}` pour t≥t₀. Les versions adaptées au sens du temps s’utilisent de même. Le **théorème de sortie de tout compact** (théorème des bouts) dit qu’une solution maximale qui atteint une extrémité finie de son intervalle ne peut rester dans un compact de `I×Ω` lorsque le temps tend vers cette extrémité; autrement elle se prolongerait.

**Prudence sur la dépendance.** Le PDF ne nomme pas la « dépendance » comme sous-item autonome. Grönwall sert souvent à établir des estimations de dépendance par rapport aux données initiales ou à des paramètres sous des hypothèses adaptées; à réviser avec le cours, mais sans présenter ce point comme une rubrique distincte explicitement énumérée dans le document officiel.

**Usage / exemple.** Pour `x′=x`, `x(0)=x₀`, la solution `x(t)=x₀eᵗ` est unique et globale. Pour `x′=x²`, `x(0)=1`, `x(t)=1/(1-t)` est maximale sur `(-∞,1)` : elle ne peut rester bornée à l’approche de 1, conformément au critère de continuation.

### (b) Équations autonomes. Portrait de phase, comportement qualitatif. Stabilité des équilibres (théorème de linéarisation).

Une équation **autonome** s’écrit `X′=f(X)`, sans dépendance explicite en t. Un **point d’équilibre** `X*` vérifie `f(X*)=0`. Le **portrait de phase** représente les trajectoires dans l’espace des états et aide à décrire leur comportement qualitatif sans nécessairement résoudre l’équation. Un équilibre est stable au sens de Lyapunov si les solutions initialement assez proches restent proches pour tous les temps futurs; il est asymptotiquement stable s’il est stable et si les solutions assez proches convergent vers lui.

Pour f C¹ près de X*, le système linéarisé est `Y′=Df(X*)Y`. Le théorème de linéarisation (cas hyperbolique) permet de déduire le comportement local lorsque Df(X*) n’a aucune valeur propre de partie réelle nulle : si toutes ont une partie réelle strictement négative, l’équilibre est localement asymptotiquement stable; s’il y en a une de partie réelle positive, l’équilibre est instable. Le cas avec des valeurs propres de partie réelle nulle n’est pas décidé par ce critère linéaire seul.

**Usage / exemple.** Pour `x′=-x`, l’équilibre 0 est asymptotiquement stable; les trajectoires `x(t)=x₀e⁻ᵗ` convergent vers 0. Pour `x′=x`, il est instable.

### (c) Systèmes différentiels linéaires. Variation des constantes (formule de Duhamel). Coefficients constants. Équations linéaires d’ordre supérieur à 1.

Pour `X′(t)=A(t)X(t)+b(t)`, soit Φ(t) une matrice fondamentale inversible du système homogène `X′=A(t)X`. La **variation des constantes** donne
`X(t)=Φ(t)[c+∫_(t₀)^t Φ(s)⁻¹b(s)ds]`,
avec la constante c fixée par la donnée initiale. En posant le propagateur `U(t,s)=Φ(t)Φ(s)⁻¹`, on obtient la **formule de Duhamel** :
`X(t)=U(t,t₀)X(t₀)+∫_(t₀)^t U(t,s)b(s)ds`.

Si A est constante, `U(t,s)=e^{(t-s)A}` et la solution homogène s’exprime à l’aide de l’exponentielle matricielle. Une équation linéaire scalaire d’ordre supérieur à 1 se réécrit en système du premier ordre en prenant comme inconnues la fonction et ses dérivées successives; la méthode des systèmes s’applique alors.

**Usage / exemple.** Pour `x′=ax+g(t)`, on obtient `x(t)=e^{a(t-t₀)}x(t₀)+∫_(t₀)^t e^{a(t-s)}g(s)ds`, formule utile pour une force extérieure g ou pour calculer l’effet d’un terme source.

## 9.3 Géométrie différentielle

### (a) Sous-variétés de Rⁿ. Graphe local, paramétrisation locale, équation locale. Espace tangent, gradient. Surfaces de R³ et plan tangent.

Une **sous-variété** de dimension k de Rⁿ est localement décrite par des coordonnées régulières de dimension k. Le programme mentionne les descriptions équivalentes par **graphe local**, **paramétrisation locale** et **équation locale**. Une paramétrisation `φ: W⊂Rᵏ→Rⁿ` doit avoir rang k et décrire localement la partie considérée. Une équation régulière `F(x)=0` pour `F: Rⁿ→Rⁿ⁻ᵏ` exige un rang `n-k` : le théorème des fonctions implicites fournit les représentations locales en graphe.

L’**espace tangent** en un point paramétré `p=φ(u)` est l’image de `dφ(u)`. Si la sous-variété est définie par une équation régulière `F=0`, alors `T_pM=ker dF(p)`. Pour une hypersurface `F=0`, le gradient `∇F(p)` est normal au tangent lorsqu’il est non nul. Sur une surface de R³, le **plan tangent** en p est `p+T_pM`; les signes de F près de ce plan peuvent aussi situer localement la surface de part et d’autre.

**Usage / exemple.** La sphère unité est définie par `F(x,y,z)=x²+y²+z²-1=0`. Au point p=(0,0,1), le gradient (0,0,2) est normal et le plan tangent a pour équation `z=1`.

### (b) Courbes planes définies par une représentation paramétrique. Abscisse curviligne et longueur d’un arc C¹.

Une courbe paramétrée plane est donnée par `γ(t)=(x(t),y(t))`. Son étude consiste notamment à déterminer son image, ses variations, les points singuliers (`γ′(t)=0`), les tangentes quand elles sont définies et d’éventuelles auto-intersections. Si γ est C¹ sur `[a,b]`, la **longueur** de l’arc paramétré est
`L=∫ₐᵇ ‖γ′(t)‖dt`.
L’**abscisse curviligne** depuis a est `s(t)=∫ₐᵗ ‖γ′(u)‖du`; lorsque la courbe est régulière (`γ′≠0`), s croît strictement et peut servir de paramètre, avec une vitesse unitaire pour la représentation reparamétrée. Si des portions sont parcourues plusieurs fois, la longueur paramétrée compte chaque parcours.

**Usage / exemple.** Pour le cercle `γ(t)=(R cos t,R sin t)`, `‖γ′(t)‖=R`; un tour de `0` à `2π` a longueur `2πR`, et s(t)=Rt.

### (c) Extrema liés, multiplicateurs de Lagrange.

On cherche un extremum de f sous une contrainte `g(x)=c`. Si f et g sont différentiables, si x₀ est un extremum local contraint et si `∇g(x₀)≠0`, alors il existe λ tel que
`∇f(x₀)=λ∇g(x₀)` et `g(x₀)=c`.
Pour plusieurs contraintes `g_i(x)=c_i`, la version régulière demande l’indépendance des gradients des contraintes; le gradient de f appartient alors à leur espace engendré. Ces équations donnent des candidats, pas à elles seules la nature de l’extremum : il faut comparer les valeurs, vérifier les contraintes et, selon le problème, examiner les cas singuliers ou le bord.

**Usage / exemple.** Pour optimiser `f(x,y)=xy` sur le cercle unité `x²+y²=1`, résoudre `(y,x)=λ(2x,2y)` avec la contrainte fournit les candidats; on compare ensuite les valeurs pour distinguer maxima et minima.

## Checklist de révision

Cocher les items après avoir réalisé l’action indiquée, et non après simple lecture.

- [ ] **9.1(a), définitions et calculs :** écrire la définition `f(a+h)=f(a)+Lh+o(‖h‖)`, déterminer une différentielle et calculer une dérivée selon un vecteur.
- [ ] **9.1(b), méthodes :** construire jacobienne et gradient; appliquer la règle de chaîne dans le bon ordre; utiliser une borne des dérivées sur un segment pour obtenir une estimation des accroissements.
- [ ] **9.1(c), énoncés et calculs :** énoncer les hypothèses d’interversion des dérivées; calculer une hessienne; appliquer Taylor-Young et estimer un reste intégral.
- [ ] **9.1(d), étude locale :** trouver les points critiques, utiliser Fermat et le test de hessienne, et reconnaître explicitement les cas où ce test ne conclut pas.
- [ ] **9.1(e), convexité :** vérifier le domaine convexe; établir ou utiliser le critère de support C¹ ou le critère de hessienne C² sur un exemple.
- [ ] **9.1(f), preuves/méthodes :** vérifier l’inversibilité de la différentielle ou du bloc pertinent; formuler la conclusion locale de l’inversion ou des fonctions implicites; calculer la dérivée de la fonction implicite.
- [ ] **9.2(a), existence et contrôle :** vérifier continuité et lipschitzianité locale en l’état; identifier solution maximale; utiliser Grönwall pour une estimation et le théorème des bouts pour discuter le prolongement.
- [ ] **9.2(b), qualitatif :** trouver équilibres et valeurs propres du système linéarisé; tracer ou décrire un portrait de phase simple; préciser quand la linéarisation est inconclusive.
- [ ] **9.2(c), résolutions :** résoudre un système linéaire avec variation des constantes/Duhamel; calculer un exponentiel matriciel dans un cas accessible; transformer une EDO d’ordre supérieur en système.
- [ ] **9.3(a), géométrie :** passer d’une équation régulière à un tangent, un normal et un plan tangent; calculer un exemple de surface de R³ par une méthode locale.
- [ ] **9.3(b), courbes :** étudier une représentation paramétrique, repérer les points singuliers et calculer abscisse curviligne et longueur d’un arc C¹.
- [ ] **9.3(c), extrema liés :** mettre en place les équations de Lagrange sous hypothèses régulières; comparer les candidats et traiter séparément les cas singuliers/bords.
- [ ] **Exemples et exercices :** refaire sans notes au moins un exemple de chaque sous-item (9.1a–f, 9.2a–c, 9.3a–c), puis traiter des exercices où il faut choisir la méthode plutôt que l’appliquer mécaniquement.
- [ ] **Preuves et rédaction :** savoir justifier les hypothèses avant d’invoquer chaque théorème, préciser les conclusions locales/globales, et rédiger une démonstration ou une justification complète sur des résultats sélectionnés avec le cours.

## Lacunes à combler et exigences de maîtrise

Cette fiche donne des repères, pas des démonstrations complètes et ne garantit pas l’exhaustivité au-delà des intitulés et sous-items explicitement relevés dans le PDF officiel. En particulier, le PDF ne liste pas expressément une sous-partie autonome « dépendance des solutions » : les estimations de dépendance peuvent être abordées dans le cours à partir de Grönwall, mais leur niveau et leurs formulations doivent être vérifiés dans les ressources du concours et de la préparation. Les conventions précises des théorèmes (régularité minimale, intervalles de temps, formes du reste, version du théorème de linéarisation) doivent également être reprises du cours.

Il reste indispensable de compléter ce support par **un cours**, des **exercices corrigés et non corrigés**, des **preuves travaillées** et des **annales**. Il faut notamment s’exercer à vérifier les hypothèses avant l’application d’un résultat, à distinguer conclusion locale et globale, et à analyser les cas dégénérés que les critères simples ne tranchent pas.

### Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel de l’agrégation externe spéciale de mathématiques, session 2027"
