# Titre 12 — Méthodes numériques

> **Statut : guide de révision, à travailler, ne remplace pas un cours.** Ce support organise les notions explicitement inscrites au programme officiel de la session 2027. Il rappelle des définitions, résultats et méthodes usuels, sans prétendre fournir leurs démonstrations ni garantir une exhaustivité au-delà des points vérifiés dans le texte officiel. Il doit être complété par le cours, des exercices corrigés, des calculs personnels et des annales.

Le programme précise que les connaissances doivent être maîtrisées et illustrées. Il donne parfois des exemples à titre indicatif. Le périmètre ci-dessous suit les cinq sous-parties officielles **12.1 à 12.5** ; les listes de notions en précisent les attendus de révision sans ajouter de nouvelles rubriques au programme [1].

## 12.1 Résolution de systèmes d’équations linéaires

### Notions à savoir

- **Conditionnement** : sens de la sensibilité d’un problème linéaire aux perturbations des données ; conditionnement d’une matrice inversible dans une norme subordonnée ; distinction entre conditionnement du problème et stabilité d’un algorithme.
- **Théorème de Gershgorin-Hadamard** : disques de Gershgorin, localisation des valeurs propres et critère de non-singularité par dominance diagonale stricte.
- **Pivot de Gauss et décomposition LU** : élimination, choix d’un pivot, permutations de lignes, résolution par substitutions avant et arrière, lien entre pivotage et factorisation.
- **Méthodes itératives**, notamment Jacobi et Gauss-Seidel : décomposition de la matrice, construction de l’itération, matrice d’itération et étude de convergence.
- **Normes subordonnées et rayon spectral** : définitions et rôle dans les critères de convergence des itérations linéaires.
- **Décomposition en valeurs singulières (SVD)** : valeurs singulières, rang, conditionnement euclidien et interprétation comme dilatations principales.
- **Exemple du laplacien en dimension un discrétisé par différences finies** : matrice tridiagonale, rôle du pas de grille et illustration sur un problème aux limites.

### Définitions et résultats centraux

Pour un système inversible \(Ax=b\), le conditionnement relatif de \(A\) dans une norme subordonnée est \(\kappa(A)=\|A\|\,\|A^{-1}\|\). Si seul le second membre est perturbé de \(\delta b\), alors
\[
\frac{\|\delta x\|}{\|x\|}\leq \kappa(A)\frac{\|\delta b\|}{\|b\|},\qquad x=A^{-1}b,\quad b\ne0.
\]
Un grand conditionnement indique que de petites perturbations peuvent produire une forte variation de la solution ; il ne démontre pas à lui seul qu’un algorithme donné est instable.

Pour une matrice carrée complexe \(A=(a_{ij})\), le disque de Gershgorin de la ligne \(i\) est
\[
D_i=\{z\in\mathbb C:|z-a_{ii}|\leq \sum_{j\ne i}|a_{ij}|\}.
\]
Toute valeur propre de \(A\) appartient à l’union des disques. En particulier, si \(A\) est strictement à diagonale dominante par lignes, c’est-à-dire \(|a_{ii}|>\sum_{j\ne i}|a_{ij}|\) pour tout \(i\), alors \(A\) est inversible. **Usage** : ce critère donne une vérification simple de non-singularité sans calculer le déterminant.

L’élimination de Gauss transforme le système par opérations élémentaires sur les lignes. Sous un pivotage adapté, on peut écrire \(PA=LU\), où \(P\) est une matrice de permutation, \(L\) triangulaire inférieure et \(U\) triangulaire supérieure. On résout alors \(Ly=Pb\), puis \(Ux=y\). Sans permutation, la factorisation LU par élimination existe notamment si les pivots successifs sont non nuls ; une condition suffisante usuelle est la non-nullité de tous les mineurs principaux dominants. Le pivotage partiel choisit un pivot de module maximal dans la colonne active pour limiter les divisions par de petites valeurs, mais ne constitue pas à lui seul une preuve générale de stabilité numérique.

Écrivons \(A=D+L+U\), avec \(D\) diagonale, \(L\) strictement inférieure et \(U\) strictement supérieure. Jacobi s’écrit
\[
x^{(k+1)}=D^{-1}\bigl(b-(L+U)x^{(k)}\bigr),
\]
et Gauss-Seidel utilise les composantes déjà mises à jour, soit la matrice d’itération \(T_{GS}=-(D+L)^{-1}U\) avec cette convention de signe pour \(L,U\). Pour une itération affine \(x^{(k+1)}=Tx^{(k)}+c\), la convergence vers son point fixe pour toute donnée initiale équivaut à \(\rho(T)<1\), où \(\rho\) est le rayon spectral. Une condition suffisante est \(\|T\|<1\) pour une norme subordonnée. La dominance diagonale stricte fournit une condition suffisante classique pour Jacobi et Gauss-Seidel ; pour Gauss-Seidel, la symétrie définie positive de \(A\) est également une hypothèse suffisante classique.

Toute matrice réelle ou complexe \(m\times n\) admet une SVD \(A=U\Sigma V^*\), avec \(U,V\) unitaires et \(\Sigma\) diagonale rectangulaire à coefficients diagonaux non négatifs. Ces coefficients sont les valeurs singulières ; leur nombre strictement positif est le rang. Si \(A\) est carrée inversible, \(\kappa_2(A)=\sigma_{\max}(A)/\sigma_{\min}(A)\). **Usage** : la SVD révèle les directions où la transformation amplifie ou atténue le plus les erreurs et aide à diagnostiquer un système mal conditionné.

Exemple de discrétisation : pour \(-u''=f\) sur \((0,1)\), avec conditions de Dirichlet homogènes et \(n\) points intérieurs régulièrement espacés, le pas est \(h=1/(n+1)\). Le schéma centré conduit à la matrice
\[
A_h=\frac1{h^2}\begin{pmatrix}2&-1&&0\\-1&2&\ddots&\\&\ddots&\ddots&-1\\0&&-1&2\end{pmatrix}.
\]
Elle est symétrique définie positive. Ses valeurs propres sont \(\frac4{h^2}\sin^2\!\bigl(\frac{k\pi}{2(n+1)}\bigr)\), pour \(k=1,\ldots,n\). **Usage** : cet exemple relie le problème différentiel, la discrétisation et les propriétés spectrales du système linéaire obtenu.

> **Précision de portée :** le programme officiel cite l’exemple du laplacien discrétisé en dimension un, sans fixer dans son libellé le domaine, le type de conditions aux limites, le signe de l’opérateur, ni le schéma ou le maillage. Le calcul ci-dessus est un exemple canonique avec convention explicitée, non une prétention à une spécification officielle unique.

## 12.2 Méthodes itératives de résolution approchée d’équations réelles et vectorielles

### Notions à savoir

- **Systèmes linéaires** : réinvestir les méthodes itératives de 12.1 dans le cadre de la résolution approchée et évaluer leur convergence.
- **Recherche d’éléments propres** : méthode de la puissance, hypothèses de convergence, estimation de la valeur propre dominante.
- **Optimisation convexe en dimension finie** : convexité, minimiseur, méthode du gradient à pas constant et rôle du pas.
- **Moindres carrés** : formulation, équations normales, existence et unicité selon le rang, précautions numériques.
- **Problèmes non linéaires réels et vectoriels** : dichotomie, méthode de Picard (itération de point fixe), méthode de Newton ; conditions d’application et estimation de l’erreur.
- **Vitesse de convergence et estimation de l’erreur** : convergence linéaire, superlinéaire et d’ordre \(p\), erreurs a priori ou a posteriori selon la méthode.

### Définitions et résultats centraux

Pour calculer une valeur propre dominante, la méthode de la puissance forme \(x_{k+1}=Ax_k/\|Ax_k\|\), si \(Ax_k\ne0\). Si \(A\) admet une valeur propre simple \(\lambda_1\) telle que \(|\lambda_1|>|\lambda_2|\), et si le vecteur initial possède une composante non nulle dans la direction propre dominante, les directions itérées convergent vers cette direction propre sous les hypothèses usuelles de décomposition spectrale. Le quotient de Rayleigh ou les quotients \(\|Ax_k\|/\|x_k\|\) servent à estimer la valeur propre dominante. Le facteur asymptotique usuel dépend du rapport \(|\lambda_2/\lambda_1|\) ; en cas de valeurs propres dominantes de même module, la convergence n’est pas garantie de cette façon. **Exemple** : pour une matrice diagonale \(\operatorname{diag}(5,2)\) et un vecteur initial ayant une première composante non nulle, la normalisation fait dominer progressivement la première direction.

Une fonction \(f:\mathbb R^d\to\mathbb R\) est convexe si \(f(tx+(1-t)y)\leq tf(x)+(1-t)f(y)\) pour \(t\in[0,1]\). Le gradient à pas constant produit \(x_{k+1}=x_k-\alpha\nabla f(x_k)\), où \(\alpha>0\). Un énoncé classique de convergence linéaire suppose que \(f\) est \(\mu\)-fortement convexe et différentiable, que son gradient est \(L\)-Lipschitz et que \(0<\alpha<2/L\) ; alors les itérés convergent vers l’unique minimiseur, avec un facteur de contraction dépendant des constantes et du pas. La convexité seule ne garantit pas ces hypothèses ni une convergence linéaire. **Exemple** : minimiser \(f(x)=\tfrac12\|Bx-c\|_2^2\) revient à appliquer le gradient à une fonction quadratique convexe, strictement convexe si \(B\) est de rang colonne plein.

Le problème des moindres carrés consiste à minimiser \(\|Ax-b\|_2^2\). Un minimiseur vérifie les équations normales \(A^*Ax=A^*b\) ; dans le cas réel, \(A^*=A^T\). Un minimiseur existe en dimension finie ; il est unique lorsque \(A\) est de rang colonne plein. Les équations normales peuvent aggraver le conditionnement : si \(A\) est de rang colonne plein, \(\kappa_2(A^*A)=\kappa_2(A)^2\). **Usage** : choisir une factorisation QR ou une SVD peut être préférable en calcul numérique à la résolution directe des équations normales.

Pour la dichotomie, si \(f\) est continue sur \([a_0,b_0]\) et \(f(a_0)f(b_0)<0\), le théorème des valeurs intermédiaires garantit une racine dans l’intervalle. On conserve à chaque étape une moitié dont les extrémités encadrent encore un changement de signe. Après \(n\) étapes, la longueur de l’intervalle est \((b_0-a_0)/2^n\) ; son milieu est à une distance au plus \((b_0-a_0)/2^{n+1}\) d’une racine située dans cet intervalle. **Exemple** : encadrer \(\sqrt 2\) en appliquant la méthode à \(f(x)=x^2-2\) sur \([1,2]\).

La méthode de Picard réécrit un problème comme \(x=G(x)\), puis calcule \(x_{k+1}=G(x_k)\). Si \(G\) envoie un fermé complet dans lui-même et y est une contraction de rapport \(q<1\), le théorème du point fixe assure un unique point fixe et la convergence depuis tout point initial du fermé. On a notamment \(\|x_k-x^*\|\leq \frac{q}{1-q}\|x_k-x_{k-1}\|\) pour \(k\geq1\). **Exemple** : pour résoudre \(x=\cos x\) sur \([0,1]\), \(G(x)=\cos x\) y envoie l’intervalle dans lui-même et est contractante puisque \(|G'(x)|=|\sin x|\leq\sin(1)<1\).

La méthode de Newton pour \(F(x)=0\) s’écrit, lorsque le jacobien est inversible,
\[
x_{k+1}=x_k-J_F(x_k)^{-1}F(x_k).
\]
En dimension un, cela devient \(x_{k+1}=x_k-f(x_k)/f'(x_k)\), avec \(f'(x_k)\ne0\). Si \(F\) est de classe \(C^2\) au voisinage d’une racine \(x^*\), si \(J_F(x^*)\) est inversible et si l’itéré initial est suffisamment proche, Newton converge localement de façon quadratique : il existe localement \(C>0\) tel que \(\|e_{k+1}\|\leq C\|e_k\|^2\), où \(e_k=x_k-x^*\). Ces hypothèses locales n’assurent pas que tout départ converge. **Exemple** : Newton appliqué à \(x^2-2=0\) donne \(x_{k+1}=(x_k+2/x_k)/2\) pour \(x_k\ne0\).

Pour une suite d’itérés convergeant vers \(x^*\), on note \(e_k=\|x_k-x^*\|\). Une convergence est d’ordre \(p\) si, dans les conditions usuelles, \(e_{k+1}/e_k^p\to C\) avec \(0<C<\infty\). L’ordre 1 avec facteur asymptotique strictement inférieur à 1 correspond à une convergence linéaire ; un rapport \(e_{k+1}/e_k\to0\) correspond à une convergence superlinéaire. Une estimation pratique de l’erreur (par exemple intervalle de dichotomie, résidu ou borne de point fixe) n’est pas automatiquement égale à l’erreur réelle : il faut justifier le lien.

## 12.3 Intégration numérique

### Notions à savoir

- **Méthode des rectangles** : somme pondérée de valeurs de la fonction ; rôle du pas et distinction entre erreur globale et erreur locale.
- **Estimation de l’erreur** : hypothèses de régularité ; dépendance de la borne en fonction de la longueur de l’intervalle et du pas.
- **Méthode de Monte-Carlo** : estimateur aléatoire d’une intégrale, absence de biais dans le cadre usuel, variance et vitesse de convergence probabiliste.
- **Intégrales multiples** : transformation en espérance sur un domaine de volume fini et application de l’échantillonnage.

### Définitions et résultats centraux

Sur \([a,b]\), une quadrature par rectangles remplace l’intégrale par une somme de valeurs de \(f\) multipliées par les largeurs des sous-intervalles. La formule d’erreur dépend de la variante choisie. Pour la somme composite à gauche sur un maillage uniforme de pas \(h=(b-a)/N\), si \(f\in C^1([a,b])\), une borne classique est
\[
\left|\int_a^b f(x)\,dx-h\sum_{j=0}^{N-1}f(a+jh)\right|\leq \frac{(b-a)h}{2}\max_{[a,b]}|f'|.
\]
Pour la règle composite du point milieu, sous l’hypothèse plus forte \(f\in C^2([a,b])\), la borne classique est \((b-a)h^2\max|f''|/24\). **Exemple** : ces bornes donnent une majoration de l’erreur avant calcul pour intégrer \(e^x\) sur un segment, à partir du maximum de sa dérivée ou de sa dérivée seconde.

> **Réserve de couverture :** le texte officiel dit « méthode des rectangles » au singulier générique, sans préciser rectangles à gauche, à droite ou au milieu, ni la convention exacte d’erreur. Les deux bornes ci-dessus sont explicitement rattachées aux variantes correspondantes ; elles ne doivent pas être attribuées indifféremment à toutes les règles des rectangles.

Pour une intégrale sur un domaine mesurable \(D\subset\mathbb R^d\) de volume fini \(|D|>0\), si \(X_1,\ldots,X_N\) sont indépendantes et uniformes sur \(D\), alors
\[
\widehat I_N=\frac{|D|}{N}\sum_{j=1}^{N}f(X_j)
\]
est un estimateur sans biais de \(I=\int_D f(x)\,dx\), lorsque \(f\) est intégrable et que la variance est finie. Sa variance vaut \(|D|^2\operatorname{Var}(f(X_1))/N\), et son erreur quadratique moyenne vaut \(|D|\sigma/\sqrt N\), avec \(\sigma^2=\operatorname{Var}(f(X_1))\). La vitesse typique est donc en \(N^{-1/2}\) en erreur quadratique moyenne ; elle est probabiliste et n’est pas une borne déterministe pour chaque tirage. **Exemple** : pour intégrer \(x+y\) sur le carré unité, on tire des points uniformes du carré et on moyenne les valeurs \(x_j+y_j\). La même construction s’applique à une intégrale multiple en dimension plus grande, en échantillonnant le domaine (ou un domaine englobant avec indicatrice).

## 12.4 Approximation de fonctions numériques

### Notions à savoir

- **Interpolation de Lagrange** d’une fonction en \(n+1\) points : nœuds distincts, polynôme interpolateur de degré au plus \(n\), polynômes de base et unicité.
- **Estimation de l’erreur** : formule du reste avec hypothèse de dérivabilité suffisante et produit des distances aux nœuds.
- **Illustration** : vérifier l’interpolation exacte des polynômes de degré au plus \(n\), et interpréter les facteurs d’erreur.

### Définitions et résultats centraux

Soient des nœuds deux à deux distincts \(x_0,\ldots,x_n\). Les polynômes de base de Lagrange sont
\[
L_i(x)=\prod_{\substack{0\leq j\leq n\\j\ne i}}\frac{x-x_j}{x_i-x_j}.
\]
Le polynôme interpolateur de degré au plus \(n\) est
\[
P_n(x)=\sum_{i=0}^n f(x_i)L_i(x),
\]
et c’est l’unique polynôme de degré au plus \(n\) qui prend les valeurs \(f(x_i)\) aux nœuds. Si \(f\in C^{n+1}([a,b])\) et si les nœuds et \(x\) appartiennent à \([a,b]\), alors il existe, pour chaque \(x\) distinct des nœuds, un \(\xi_x\in[a,b]\) tel que
\[
f(x)-P_n(x)=\frac{f^{(n+1)}(\xi_x)}{(n+1)!}\prod_{i=0}^n(x-x_i).
\]
Aux nœuds, l’erreur est nulle. **Exemple** : l’interpolation de \(f(x)=x^2\) en trois nœuds distincts restitue exactement \(x^2\), puisque le degré de \(f\) ne dépasse pas 2.

> La formule donne une estimation de l’erreur sous hypothèse de régularité. Elle ne garantit pas à elle seule une bonne approximation uniforme lorsque le nombre ou la disposition des nœuds varie ; la stabilité et le choix des nœuds requièrent une étude distincte.

## 12.5 Équations différentielles ordinaires

### Notions à savoir

- **Aspects numériques du problème de Cauchy** : problème initial, discrétisation temporelle et schéma d’Euler explicite.
- **Consistance** : adéquation locale du schéma à l’équation différentielle quand le pas tend vers zéro.
- **Stabilité** : contrôle de la propagation des perturbations ; bien distinguer cette notion des seules valeurs de solution calculées.
- **Convergence** : rapprochement des valeurs numériques et de la solution exacte sur un intervalle fixé.
- **Ordre** : ordre d’erreur locale et ordre global, avec convention précisée.

### Définitions et résultats centraux

Pour le problème de Cauchy \(y'(t)=f(t,y(t))\), \(y(t_0)=y_0\), le schéma d’Euler explicite de pas \(h\) est
\[
t_{n+1}=t_n+h,\qquad y_{n+1}=y_n+h f(t_n,y_n).
\]
Il évalue le champ au début du pas. **Exemple** : pour \(y'=\lambda y\), \(y(0)=1\), il donne \(y_n=(1+h\lambda)^n\), ce qui permet de comparer directement l’amplification numérique à la solution exacte \(e^{\lambda t_n}\).

Si \(f\) est suffisamment régulière, le développement de Taylor de la solution exacte montre que l’écart effectué en un pas à partir de la valeur exacte est d’ordre \(O(h^2)\) : Euler explicite a une erreur locale non normalisée d’ordre 2, et un ordre global 1, c’est-à-dire une erreur \(O(h)\) sur un intervalle de temps fixé sous des hypothèses de stabilité appropriées. Certains cours définissent le défaut local après division par \(h\) ; il est alors d’ordre 1. Toujours préciser la convention utilisée.

La **consistance** signifie que le défaut local normalisé tend vers zéro lorsque \(h\to0\). La **stabilité** exprime que de petites perturbations du calcul ou des données ne sont pas amplifiées sans contrôle sur l’intervalle étudié. Dans la convention de stabilité absolue testée sur \(y'=\lambda y\), Euler explicite est stable au sens \(|1+h\lambda|\leq1\). Pour \(\lambda<0\) réel, cela exige \(0\leq h|\lambda|\leq2\) ; la condition est propre à ce test et à cette notion de stabilité. Sous des hypothèses usuelles de régularité et de Lipschitz sur \(f\), la consistance et le contrôle de stabilité conduisent à la convergence d’Euler sur un intervalle fini. **Usage** : pour des équations raides, la restriction sur \(h\) peut rendre Euler explicite inefficace ou instable malgré la décroissance de la solution exacte.

> **Précision de portée :** le programme officiel cite consistance, stabilité, convergence et ordre sans imposer dans son libellé une définition unique de stabilité ni un théorème général particulier. Les explications ci-dessus distinguent une interprétation usuelle de stabilité sur les problèmes de Cauchy et la stabilité absolue sur l’équation test. Les cours peuvent présenter des cadres plus précis (schémas à un pas ou multipas) : reprendre leurs conventions et hypothèses dans une démonstration.

## Checklist de révision à cocher

### Compétences

- [ ] Je sais définir le conditionnement d’une matrice inversible dans une norme choisie et expliquer ce qu’il mesure — **12.1**.
- [ ] Je sais appliquer le critère de Gershgorin-Hadamard et vérifier les hypothèses de dominance diagonale stricte — **12.1**.
- [ ] Je sais effectuer un pivot de Gauss, reconnaître les effets du pivotage et résoudre avec une factorisation \(PA=LU\) — **12.1**.
- [ ] Je sais écrire les itérations de Jacobi et Gauss-Seidel et calculer leurs matrices d’itération — **12.1–12.2**.
- [ ] Je sais utiliser normes subordonnées et rayon spectral pour justifier ou exclure la convergence d’une itération linéaire — **12.1–12.2**.
- [ ] Je sais lire une SVD, identifier les valeurs singulières et relier la plus petite à la sensibilité d’un problème inversible — **12.1**.
- [ ] Je sais établir la matrice tridiagonale d’une discrétisation 1D par différences finies et préciser ma convention de signe et mes conditions aux limites — **12.1**.
- [ ] Je sais expliquer les hypothèses d’application de la méthode de la puissance et reconnaître les situations où la convergence dominante n’est pas garantie — **12.2**.
- [ ] Je sais formuler un problème convexe, calculer un pas de gradient constant et énoncer les hypothèses d’un résultat de convergence — **12.2**.
- [ ] Je sais formuler un problème de moindres carrés, dériver les équations normales et expliquer le cas d’unicité — **12.2**.
- [ ] Je sais exécuter une dichotomie, quantifier la largeur de l’intervalle et distinguer encadrement et approximation — **12.2**.
- [ ] Je sais reconnaître une contraction de Picard, établir l’existence-unicité et produire une borne d’erreur — **12.2**.
- [ ] Je sais appliquer une itération de Newton et énoncer les conditions locales de convergence quadratique — **12.2**.
- [ ] Je sais distinguer convergence linéaire, superlinéaire et d’ordre supérieur ; je sais relier résidu, erreur et vitesse sans les confondre — **12.2**.
- [ ] Je sais écrire au moins une règle des rectangles, préciser sa variante et utiliser la borne d’erreur adaptée — **12.3**.
- [ ] Je sais construire un estimateur de Monte-Carlo pour une intégrale multiple et interpréter son erreur en \(N^{-1/2}\) — **12.3**.
- [ ] Je sais construire le polynôme de Lagrange, vérifier l’unicité et appliquer la formule du reste avec ses hypothèses — **12.4**.
- [ ] Je sais écrire Euler explicite et distinguer consistance, stabilité, convergence, erreur locale et ordre global — **12.5**.

### Preuves, méthodes et calculs à refaire

- [ ] Refaire une majoration de perturbation \(\delta x\) et un test de Gershgorin sans sauter les hypothèses.
- [ ] Résoudre un système avec pivotage, puis réutiliser la factorisation pour plusieurs seconds membres.
- [ ] Calculer \(\rho(T)\) dans un exemple de Jacobi ou Gauss-Seidel et confronter le résultat à une borne par norme.
- [ ] Vérifier la formule spectrale du laplacien discret sur une petite matrice ou en calculant ses valeurs propres.
- [ ] Décomposer un vecteur initial sur les directions propres dans un exemple de puissance ; étudier le cas où sa composante dominante est nulle.
- [ ] Dériver les équations normales et comparer, dans un petit exemple, la solution exacte et les résidus des moindres carrés.
- [ ] Calculer le nombre d’itérations de dichotomie requis pour une tolérance d’intervalle donnée.
- [ ] Prouver qu’une application est contractante sur un intervalle ou un fermé donné avant d’utiliser Picard.
- [ ] Calculer deux ou trois itérations de Newton et estimer l’erreur à partir d’une borne justifiée, pas seulement de la variation observée.
- [ ] Comparer une borne d’erreur de rectangle à gauche et une borne du point milieu en vérifiant les régularités requises.
- [ ] Calculer l’espérance et la variance de l’estimateur Monte-Carlo dans un exemple simple.
- [ ] Refaire une interpolation à trois nœuds et identifier chaque facteur de la formule du reste.
- [ ] Appliquer Euler à une équation scalaire, calculer l’amplification de l’équation test et distinguer l’erreur sur un pas de l’erreur accumulée.

### Exemples et exercices

- [ ] Traiter des systèmes bien et mal conditionnés ; expliquer pourquoi le nombre de chiffres fiables dépend aussi de la précision des données.
- [ ] Construire un exemple où Jacobi diverge et un autre où une hypothèse suffisante garantit la convergence.
- [ ] Comparer dichotomie et Newton sur une même racine : robustesse, vitesse et hypothèses.
- [ ] Étudier un minimiseur quadratique par gradient avec plusieurs pas constants, et repérer une divergence causée par un pas excessif.
- [ ] Approximer une intégrale unidimensionnelle par rectangles, puis une intégrale multiple par Monte-Carlo ; commenter l’incertitude.
- [ ] Comparer l’interpolation pour différentes fonctions et nœuds, sans déduire une stabilité générale de la seule formule du reste.
- [ ] Résoudre un problème de Cauchy par Euler avec plusieurs pas et examiner séparément consistance, stabilité et convergence.
- [ ] Faire des exercices d’annales couvrant chacune des sous-parties 12.1 à 12.5 et rédiger les hypothèses avant chaque théorème utilisé.

## Lacunes et exigences de maîtrise

Cette fiche ne remplace ni une présentation complète des démonstrations ni l’entraînement à des problèmes nouveaux. Il reste notamment à maîtriser les preuves détaillées des critères de convergence, les variantes d’algorithmes étudiées en cours, le choix de normes et de pas, les calculs d’erreur adaptés aux hypothèses exactes, ainsi que les conventions précises de stabilité des schémas différentiels enseignées dans le cours. Le programme officiel ne spécifie pas davantage la variante de la méthode des rectangles ni un cadre unique de stabilité pour Euler ; les réserves correspondantes figurent dans les sections concernées. **Compléter impérativement par le cours, des exercices gradués, des calculs personnels et des annales de concours.** Ne revendiquer la maîtrise d’un résultat qu’après savoir énoncer toutes ses hypothèses, l’appliquer et justifier la méthode retenue.

## Source officielle

[1] Programme de la session 2027 du concours externe spécial de l’agrégation du second degré, section mathématiques, Titre 12 « Méthodes numériques », sous-parties 12.1–12.5, pages 7–8 du PDF officiel : https://www.devenirenseignant.gouv.fr/media/20323/download
