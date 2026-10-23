# Exercices types corrigés — Titre 1 : Algèbre linéaire

> Recueil complémentaire au [guide de révision du titre 1](titre-01.md). Les six exercices sont originaux et construits pour couvrir les six sous-parties officielles 1.1 (a)–(b) et 1.2 (a)–(d) du programme 2027; ils ne sont pas des sujets officiels ni des extraits d’annales.

**Mode d’emploi.** Traiter d’abord chaque énoncé sans consulter le corrigé; rédiger les justifications, pas seulement les résultats. Comparer ensuite sa solution, refaire les calculs signalés dans « Vérifications rapides » et noter les hypothèses oubliées. Une série d’un exercice par sous-partie constitue une première base de travail, pas une banque exhaustive couvrant toutes les variantes et difficultés possibles.

## Carte de couverture

| Sous-partie | Intitulé | Notions entraînées |
|---|---|---|
| 1.1 (a) | Espaces vectoriels, applications linéaires, constructions, familles et bases | Application linéaire en dimension finie : noyau, image et rang<br>Théorème du rang<br>Quotient par le noyau et isomorphisme induit vers l’image<br>Somme directe et sous-espace supplémentaire<br>Test de liberté et de base par écriture unique des vecteurs |
| 1.1 (b) | Sous-espaces stables, valeurs propres, polynômes d’endomorphismes et lemme des noyaux | Stabilité d’un sous-espace par un endomorphisme explicite et stabilité des noyaux de polynômes en cet endomorphisme<br>Détermination sur ℝ des valeurs propres, vecteurs propres et sous-espaces propres<br>Calcul des noyaux de facteurs polynomiaux, vérification explicite de leur coprimalité et décomposition par le lemme des noyaux<br>Distinction entre le noyau du produit de facteurs simples et celui d’un polynôme annulateur utilisant le facteur répété |
| 1.2 (a) | Dimension, rang, dualité et orthogonalité | Rang, image, noyau et théorème du rang pour une application de ℝ⁴ dans ℝ³<br>Matrice de l’application duale dans les bases duales, avec image et noyau<br>Annihilateur du noyau et orthogonal pour une structure euclidienne précisée<br>Base duale et bidualité en dimension finie |
| 1.2 (b) | Applications multilinéaires, déterminant, orientation et groupe spécial linéaire | Multilinéarité et alternance du déterminant d’une famille ordonnée dans un espace de dimension 3<br>Caractérisation d’une base par la non-nullité du déterminant<br>Interprétation du signe du déterminant réel relativement à l’orientation canonique<br>Déterminant d’un endomorphisme réel, orientation et appartenance à SL₃(ℝ) |
| 1.2 (c) | Matrices sur un anneau ou un corps, pivot de Gauss et applications | Opérations élémentaires sur les lignes et pivot de Gauss sur le corps ℝ<br>Discussion de compatibilité, des rangs de la matrice des coefficients et de la matrice augmentée, et du nombre de solutions selon les paramètres<br>Calcul du déterminant en suivant l’effet des opérations élémentaires<br>Matrice sur ℤ/6ℤ dont le déterminant est non nul mais non inversible : distinction entre non-nul et unité dans un anneau |
| 1.2 (d) | Polynômes, Cayley–Hamilton, réduction des endomorphismes et exponentielle | Polynôme caractéristique et polynôme minimal<br>Cayley–Hamilton et réduction polynomiale<br>Diagonalisation et trigonalisation sur R<br>Sous-espaces caractéristiques et décomposition de Dunford<br>Exponentielle matricielle réelle |

## Exercice 1 — 1.1 (a) : Espaces vectoriels, applications linéaires, constructions, familles et bases

### Énoncé

On travaille sur ℝ. On considère l’application f : ℝ⁴ → ℝ³ définie par

 f(x₁,x₂,x₃,x₄) = (x₁+x₃, x₂+x₃, x₁+x₂+2x₃).

On note (e₁,e₂,e₃,e₄) la base canonique de ℝ⁴ et U = ker(f).

1. Vérifier que f est linéaire, puis déterminer U, Im(f) et rg(f). Vérifier le théorème du rang.
2. Décrire explicitement l’isomorphisme induit f̃ : ℝ⁴/U → Im(f), x+U ↦ f(x), ainsi que son inverse.
3. Poser V = Vect(e₁,e₂), k₁ = (−1,−1,1,0) et k₂ = e₄. Montrer que V est un supplémentaire de U dans ℝ⁴, puis déterminer si la famille B = (k₁,k₂,e₁,e₂) est une base de ℝ⁴. Justifier.

### Correction détaillée

#### 1. Linéarité, noyau, image et rang

Chaque coordonnée de f(x) est une combinaison linéaire des coordonnées de x, sans terme constant. Ainsi, pour x,y ∈ ℝ⁴ et λ ∈ ℝ, f(x+y)=f(x)+f(y) et f(λx)=λf(x) : f est linéaire. Sa matrice dans les bases canoniques est

```text
[1 0 1 0]
[0 1 1 0]
[1 1 2 0]
```

Calculons le noyau en résolvant f(x)=0 :

x₁+x₃=0,  x₂+x₃=0,  x₁+x₂+2x₃=0.

La troisième équation est la somme des deux premières et n’ajoute aucune contrainte. En posant t=x₃ et s=x₄, on obtient x₁=x₂=−t. Donc

U = ker(f) = { (−t,−t,t,s) : t,s ∈ ℝ } = Vect(k₁,k₂),

où k₁=(−1,−1,1,0) et k₂=(0,0,0,1). Ces deux vecteurs sont indépendants : si a k₁+b k₂=0, la troisième coordonnée donne a=0, puis la quatrième donne b=0. Ainsi dim(U)=2.

Pour l’image, posons u=x₁+x₃ et v=x₂+x₃. La troisième coordonnée de f(x) est u+v. Tout couple (u,v) est atteint en prenant x=(u,v,0,0). Par conséquent

Im(f) = { (u,v,u+v) : u,v ∈ ℝ } = Vect((1,0,1),(0,1,1)).

Les deux générateurs sont indépendants : a(1,0,1)+b(0,1,1)=0 implique a=b=0. Donc rg(f)=dim(Im(f))=2. Le domaine est de dimension 4, et le théorème du rang donne dim(ℝ⁴)=dim(ker(f))+rg(f)=2+2=4, comme attendu. Le théorème s’applique puisque le domaine de f est de dimension finie.

#### 2. Quotient par le noyau

On considère f̃ : ℝ⁴/U → Im(f), définie par f̃(x+U)=f(x). Elle est bien définie : si x+U=y+U, alors x−y∈U=ker(f), donc f(x)=f(y). Elle est linéaire. Elle est surjective par définition de Im(f). Enfin, f̃(x+U)=0 équivaut à f(x)=0, donc à x∈U, c’est-à-dire x+U=U, la classe nulle. Elle est donc injective et constitue un isomorphisme.

Explicitement,

f̃((x₁,x₂,x₃,x₄)+U) = (x₁+x₃, x₂+x₃, x₁+x₂+2x₃).

Pour tout (u,v,u+v) ∈ Im(f), un antécédent est (u,v,0,0)+U. Ainsi

f̃⁻¹(u,v,u+v) = (u,v,0,0)+U.

En effet, f(u,v,0,0)=(u,v,u+v). Tout autre antécédent diffère de (u,v,0,0) d’un élément de ker(f)=U, donc donne la même classe.

#### 3. Supplémentaire et test de base

On a V=Vect(e₁,e₂)={(a,b,0,0):a,b∈ℝ}. Pour tout x=(x₁,x₂,x₃,x₄)∈ℝ⁴,

x = (x₁+x₃,x₂+x₃,0,0) + (−x₃,−x₃,x₃,x₄).

Le premier terme appartient à V ; le second appartient à U, car il vaut x₃k₁+x₄k₂. Donc ℝ⁴=U+V. Si (a,b,0,0)∈U, les deux premières conditions du noyau donnent a=0 et b=0. Ainsi U∩V={0}, et ℝ⁴=U⊕V. Cette somme est directe, donc la décomposition de chaque vecteur en une composante de U et une composante de V est unique.

La famille (k₁,k₂) est une base de U, établie à la question 1, et (e₁,e₂) est une base de V. La réunion ordonnée de ces bases est donc une base de U⊕V=ℝ⁴. On peut aussi vérifier directement que tout x∈ℝ⁴ possède l’écriture unique

x = x₃k₁ + x₄k₂ + (x₁+x₃)e₁ + (x₂+x₃)e₂.

L’existence de cette écriture prouve que B engendre ℝ⁴ ; son unicité prouve que B est libre. Ainsi B=(k₁,k₂,e₁,e₂) est bien une base.

Convention : rg(f) désigne dim(Im(f)) et x+U la classe de x dans le quotient vectoriel ℝ⁴/U.

### Vérifications rapides

- La troisième ligne de la matrice de f est la somme des deux premières, qui sont indépendantes : le rang est 2, en accord avec l’image décrite.
- En calculant directement, f(k₁)=f(−1,−1,1,0)=(0,0,0) et f(k₂)=f(e₄)=(0,0,0), conformément à la description du noyau.
- Pour tous u,v∈ℝ, f(u,v,0,0)=(u,v,u+v), ce qui vérifie la formule donnée pour l’inverse de f̃.
- Le déterminant de la matrice dont les colonnes sont k₁,k₂,e₁,e₂ vaut 1 ; il est non nul et confirme indépendamment que B est une base.

---

## Exercice 2 — 1.1 (b) : Sous-espaces stables, valeurs propres, polynômes d’endomorphismes et lemme des noyaux

### Énoncé


On considère E = ℝ³, muni de sa base canonique (e₁,e₂,e₃), et l’endomorphisme u dont la matrice dans cette base est

A = [[2, 1, 0], [0, 2, 0], [0, 0, −1]].

Les vecteurs de ℝ³ sont écrits en colonnes. Pour P(X) = Σ aₖXᵏ ∈ ℝ[X], on pose P(u) = Σ aₖuᵏ, avec u⁰ = I.

1. Écrire u(x,y,z), puis déterminer si les sous-espaces F = Vect(e₁,e₂), G = Vect(e₃) et L = Vect(e₂) sont stables par u.
2. Déterminer toutes les valeurs propres réelles de u et calculer, pour chacune, le sous-espace propre correspondant.
3. Poser N = u − 2I et C = u + I. Calculer N(x,y,z), N²(x,y,z) et C(x,y,z), puis déterminer ker N, ker N² et ker C. En déduire une expression de ker((u − 2I)(u + I)).
4. Poser P(X) = (X − 2)² et Q(X) = X + 1. Vérifier que P et Q sont premiers entre eux en exhibant une identité de Bézout. Calculer P(u)Q(u), puis appliquer le lemme des noyaux pour donner une décomposition de E. Vérifier directement que la somme obtenue est directe et égale à E.
5. Expliquer pourquoi on ne peut pas appliquer le lemme des noyaux à X − 2 et X + 1 pour conclure que E = ker(u − 2I) ⊕ ker(u + I).

### Correction détaillée

#### 1. Action de u et stabilité

La lecture des colonnes de A donne u(e₁) = 2e₁, u(e₂) = e₁ + 2e₂ et u(e₃) = −e₃. Par linéarité, pour tout (x,y,z) ∈ ℝ³,

u(x,y,z) = (2x + y, 2y, −z).

Si (x,y,z) ∈ F, alors z = 0 et u(x,y,0) = (2x + y,2y,0) ∈ F : F est stable. Si (0,0,z) ∈ G, alors u(0,0,z) = (0,0,−z) ∈ G : G est stable. En revanche, u(e₂) = e₁ + 2e₂ n’appartient pas à L, car e₁ et e₂ sont linéairement indépendants et le coefficient de e₁ est non nul. Ainsi L n’est pas stable.

Plus généralement, pour tout polynôme R ∈ ℝ[X], le sous-espace ker R(u) est stable par u : si R(u)x = 0, alors R(u)(ux) = u(R(u)x) = 0. L’égalité R(u)u = uR(u) vient du fait que toute puissance de u commute avec u.

#### 2. Valeurs propres et sous-espaces propres

Un réel λ est valeur propre exactement lorsque le système u(x,y,z) = λ(x,y,z) admet une solution non nulle. Ce système s’écrit

(2 − λ)x + y = 0,   (2 − λ)y = 0,   (−1 − λ)z = 0.

Si λ n’est ni 2 ni −1, la deuxième équation impose y = 0, la troisième impose z = 0, puis la première donne x = 0. Il n’existe alors aucun vecteur propre non nul.

Pour λ = 2, les équations deviennent y = 0, −3z = 0, tandis que x est libre. Donc E₂ = ker(u − 2I) = Vect(e₁).

Pour λ = −1, elles deviennent 3x + y = 0, 3y = 0, tandis que z est libre. Elles imposent y = 0 puis x = 0. Donc E₋₁ = ker(u + I) = Vect(e₃).

Les seules valeurs propres réelles sont ainsi 2 et −1, et les sous-espaces propres correspondants sont les deux droites indiquées.

#### 3. Noyaux des polynômes

En appliquant les définitions de N et C, on obtient, pour tout (x,y,z),

N(x,y,z) = (y,0,−3z),    N²(x,y,z) = (0,0,9z),    C(x,y,z) = (3x + y,3y,0).

Les conditions N(x,y,z) = 0 sont y = 0 et z = 0, sans condition sur x. Ainsi ker N = Vect(e₁).

Les conditions N²(x,y,z) = 0 équivalent à z = 0, sans condition sur x ni y. Ainsi ker N² = Vect(e₁,e₂) = F.

Les conditions C(x,y,z) = 0 donnent 3y = 0, donc y = 0, puis 3x + y = 0, donc x = 0 ; z est libre. Ainsi ker C = Vect(e₃) = G.

Enfin, (u − 2I)(u + I)(x,y,z) = NC(x,y,z) = (3y,0,0). Par conséquent,

ker((u − 2I)(u + I)) = {(x,0,z) : x,z ∈ ℝ} = Vect(e₁,e₃).

Ce noyau n’est pas E : par exemple e₂ n’y appartient pas.

#### 4. Coprimalité et décomposition par le lemme des noyaux

On prend P(X) = (X − 2)² et Q(X) = X + 1. Une identité de Bézout explicite est

Q(X) [1/3 − (X − 2)/9] + P(X)/9 = 1.

En effet, en posant t = X − 2, le membre de gauche vaut (t + 3)(1/3 − t/9) + t²/9 = (1 − t²/9) + t²/9 = 1. Cette identité prouve que P et Q sont premiers entre eux dans ℝ[X]. La condition de coprimalité requise par le lemme est donc bien vérifiée.

De plus, P(u) = N² et Q(u) = C. Comme N²(x,y,z) = (0,0,9z) et C(0,0,9z) = (0,0,0), on a P(u)Q(u) = N²C = 0, c’est-à-dire ((PQ)(u)) = 0. (L’évaluation respecte le produit : (PQ)(u) = P(u)Q(u).)

Le lemme des noyaux, appliqué aux polynômes premiers entre eux P et Q, donne

ker((PQ)(u)) = ker(P(u)) ⊕ ker(Q(u)).

Le membre de gauche est E puisque (PQ)(u) = 0. Les calculs précédents fournissent donc

E = ker((u − 2I)²) ⊕ ker(u + I) = Vect(e₁,e₂) ⊕ Vect(e₃).

Vérification directe : tout (x,y,z) s’écrit (x,y,0) + (0,0,z), avec le premier terme dans Vect(e₁,e₂) et le second dans Vect(e₃), donc la somme vaut E. Si un vecteur appartient aux deux sous-espaces, ses troisième coordonnées et ses deux premières coordonnées sont toutes nulles ; l’intersection est donc {0}. La somme est bien directe.

#### 5. Pourquoi le facteur répété est nécessaire

Les polynômes X − 2 et X + 1 sont certes premiers entre eux, mais leur produit n’annule pas u : on a calculé que ker((u − 2I)(u + I)) = Vect(e₁,e₃), qui est strictement inclus dans E. Le lemme des noyaux donnerait seulement

ker((u − 2I)(u + I)) = ker(u − 2I) ⊕ ker(u + I) = Vect(e₁) ⊕ Vect(e₃),

et non une décomposition de E. Pour obtenir E comme noyau du polynôme évalué en u, il faut ici conserver le facteur répété : ((u − 2I)²(u + I)) = 0. La décomposition appropriée est celle de ker((u − 2I)²) et ker(u + I), et le premier de ces sous-espaces est un noyau de polynôme, pas le sous-espace propre E₂.

La convention utilisée partout est que ker(T) désigne l’ensemble des vecteurs envoyés sur 0 par l’application T ; les polynômes sont à coefficients réels et les valeurs propres recherchées sont celles dans le corps de base ℝ.

### Vérifications rapides

- Contrôle matriciel : les colonnes de A donnent u(e₁)=2e₁, u(e₂)=e₁+2e₂ et u(e₃)=−e₃, ce qui confirme l’action employée dans toute la correction.
- Contrôle des noyaux : N²(x,y,z)=(0,0,9z) a noyau exactement z=0, alors que C(x,y,z)=(3x+y,3y,0) a noyau exactement x=y=0.
- Contrôle de Bézout : en posant t=X−2, (t+3)(1/3−t/9)+t²/9=1 ; la coprimalité ne repose donc pas sur une simple affirmation.
- Contrôle de la décomposition : les espaces Vect(e₁,e₂) et Vect(e₃) ont intersection nulle et tout (x,y,z) s’écrit (x,y,0)+(0,0,z).

---

## Exercice 3 — 1.2 (a) : Dimension, rang, dualité et orthogonalité

### Énoncé


On considère E = ℝ⁴ et F = ℝ³, munis de leurs bases canoniques (e₁,e₂,e₃,e₄) et (u₁,u₂,u₃). Soit f : E → F l’application linéaire de matrice A = [[1, 2, −1, 0], [0, 1, 1, 1], [1, 3, 0, 1]]. On note (e¹,e²,e³,e⁴) et (u¹,u²,u³) les bases duales. Les colonnes d’une matrice sont les coordonnées des images des vecteurs de la base de départ.

1. Déterminer le rang et l’image de f, puis une base de son noyau. En déduire les dimensions et vérifier le théorème du rang.
2. Écrire la matrice de f* : F* → E*, définie par f*(ψ) = ψ ∘ f, dans les bases duales. Déterminer son image et son noyau.
3. Calculer l’annihilateur (ker f)° dans E* et vérifier son lien avec Im f*.
4. Calculer (ker f)⊥ en précisant la structure utilisée et son lien avec l’annihilateur.
5. Décrire l’application canonique de bidualité de E dans E** dans les bases considérées.

### Correction détaillée

#### 1. Rang, image et noyau

La troisième ligne de A est la somme des deux premières. Les deux premières lignes (1,2,−1,0) et (0,1,1,1) sont indépendantes : une combinaison nulle impose, par les première puis deuxième coordonnées, que ses deux coefficients soient nuls. Ainsi rg(f) = rg(A) = 2.

Les colonnes de A sont f(e₁)=(1,0,1), f(e₂)=(2,1,3), f(e₃)=(−1,1,0), f(e₄)=(0,1,1). Les deux premières sont indépendantes, car leurs deux premières coordonnées (1,0) et (2,1) sont indépendantes. Elles forment donc une base de l’image : Im(f)=Vect{(1,0,1),(2,1,3)} et dim(Im(f))=2.

Pour x=(x₁,x₂,x₃,x₄), Ax=0 équivaut au système x₁+2x₂−x₃=0, x₂+x₃+x₄=0, x₁+3x₂+x₄=0. La troisième équation est la somme des deux premières. Posons x₃=s et x₄=t. La deuxième donne x₂=−s−t, puis la première donne x₁=3s+2t. Par conséquent x=s(3,−1,1,0)+t(2,−1,0,1). Ces deux vecteurs sont indépendants, puisque leurs troisième et quatrième coordonnées forment respectivement (1,0) et (0,1). Donc ker(f)=Vect{(3,−1,1,0),(2,−1,0,1)} et dim(ker(f))=2. Le théorème du rang s’applique, E étant de dimension finie, et donne bien dim(E)=4=dim(ker(f))+rg(f)=2+2.

#### 2. Application duale et transposée

Écrivons ψ=a u¹+b u²+c u³. En évaluant ψ sur les colonnes de A, on obtient f*(ψ)=(a+c)e¹+(2a+b+3c)e²+(−a+b)e³+(b+c)e⁴. Ainsi f*(u¹)=e¹+2e²−e³, f*(u²)=e²+e³+e⁴ et f*(u³)=e¹+3e²+e⁴. Dans les bases duales, la matrice de f* est la transposée : Aᵀ = [[1,0,1],[2,1,3],[−1,1,0],[0,1,1]].

La troisième image de vecteur de base est la somme des deux premières, et les deux premières sont indépendantes ; donc Im(f*)=Vect{e¹+2e²−e³, e²+e³+e⁴} et rg(f*)=2. Pour déterminer le noyau, les coefficients de f*(ψ) doivent être nuls. Les première et troisième composantes donnent c=−a et b=a ; ces valeurs annulent aussi les deuxième et quatrième composantes. Ainsi ker(f*)=Vect{u¹+u²−u³}, de dimension 1. Contrôle par le théorème du rang : dim(F*)=3=1+2=dim(ker(f*))+rg(f*). On retrouve rg(f*)=rg(f)=2.

#### 3. Annihilateur du noyau

Par définition, (ker f)° est l’ensemble des formes linéaires de E* qui s’annulent sur tout vecteur de ker(f). Écrivons φ=p e¹+q e²+r e³+s e⁴. L’annulation sur les deux vecteurs de la base du noyau impose 3p−q+r=0 et 2p−q+s=0. Ainsi q=3p+r et s=p+r. Les paramètres p et r sont libres, et

φ=p(1,3,0,1)+r(0,1,1,1)=p(1,2,−1,0)+(p+r)(0,1,1,1),

les quadruplets étant les coordonnées dans la base (e¹,e²,e³,e⁴). Il en résulte (ker f)°=Vect{e¹+2e²−e³, e²+e³+e⁴}=Im(f*). Sa dimension vaut 2, égale à dim(E)−dim(ker(f))=4−2.

#### 4. Orthogonalité

On munit E de son produit scalaire euclidien standard, ⟨x,y⟩=Σᵢ xᵢyᵢ. Par définition, (ker f)⊥={x∈E : ⟨x,k⟩=0 pour tout k∈ker(f)}. Pour x=(x₁,x₂,x₃,x₄), l’orthogonalité aux deux générateurs du noyau impose 3x₁−x₂+x₃=0 et 2x₁−x₂+x₄=0. La résolution, identique à celle de l’annihilateur, donne (ker f)⊥=Vect{(1,2,−1,0),(0,1,1,1)} et dim((ker f)⊥)=2.

L’annihilateur est un sous-espace de E*, l’orthogonal un sous-espace de E. On peut comparer leurs coordonnées ici grâce à l’isomorphisme E → E*, x ↦ ⟨x,·⟩, fourni par le produit scalaire standard. Les vecteurs générateurs de l’orthogonal ont précisément les coordonnées des formes génératrices de l’annihilateur. L’orthogonal calculé est également l’espace engendré par les lignes de A.

#### 5. Bidualité

L’application canonique est J_E : E → E**, définie par J_E(x)(φ)=φ(x). La base de E** duale à (e¹,e²,e³,e⁴) est (e¹**,e²**,e³**,e⁴**), où eⁱ**(φ)=φ(eᵢ). Comme J_E(eᵢ)(eʲ)=eʲ(eᵢ)=δᵢⱼ, on a J_E(eᵢ)=eⁱ**. Pour x=Σᵢxᵢeᵢ, J_E(x)=Σᵢxᵢeⁱ**. L’application envoie donc une base de E sur une base de E** et est un isomorphisme. Cette identification canonique ne nécessite aucun choix de produit scalaire.

### Vérifications rapides

- Substitution directe des deux vecteurs proposés dans le noyau dans l’équation Ax=0.
- Relation entre les lignes et indépendance des deux premières : rang 2 ; le calcul du noyau donne ensuite 4=2+2.
- La forme u¹+u²−u³ s’annule sur chaque vecteur de l’image, de forme (x,y,x+y), conformément au noyau de f*.
- Les générateurs proposés de l’orthogonal sont indépendants et orthogonaux aux générateurs du noyau pour le produit scalaire standard.

---

## Exercice 4 — 1.2 (b) : Applications multilinéaires, déterminant, orientation et groupe spécial linéaire

### Énoncé


On considère ℝ³ muni de sa base canonique ordonnée E=(e₁,e₂,e₃), qui fixe l’orientation positive. Posons a=e₁+e₂=(1,1,0), b=e₂+e₃=(0,1,1) et c=−e₁−e₃=(−1,0,−1). On note D(x,y,z) le déterminant de la famille ordonnée (x,y,z) dans E ; D est la forme 3-linéaire alternée normalisée par D(e₁,e₂,e₃)=1. Soit T l’unique endomorphisme de ℝ³ tel que T(e₁)=a, T(e₂)=b et T(e₃)=c.

1. Calculer D(a,b,c) en utilisant explicitement multilinéarité et alternance. Préciser les termes qui s’annulent et les signes des termes restants.
2. En déduire si (a,b,c) est une base de ℝ³ et déterminer son orientation relativement à E. Interpréter le signe du déterminant.
3. Écrire la matrice de T dans E, calculer son déterminant et décider si T préserve ou renverse l’orientation.
4. Rappeler la définition de SL₃(ℝ) et déterminer si la matrice de T lui appartient. Distinguer l’inversibilité de la condition d’appartenance à SL₃(ℝ).

### Correction détaillée

#### 1. Calcul par multilinéarité et alternance

La linéarité dans la troisième variable donne d’abord D(a,b,c)=−D(e₁+e₂,e₂+e₃,e₁+e₃). En développant ensuite par linéarité dans les première et deuxième variables :

D(a,b,c)=−[D(e₁,e₂,e₁)+D(e₁,e₂,e₃)+D(e₁,e₃,e₁)+D(e₁,e₃,e₃)+D(e₂,e₂,e₁)+D(e₂,e₂,e₃)+D(e₂,e₃,e₁)+D(e₂,e₃,e₃)].

Une forme alternée s’annule dès que deux arguments sont égaux : six termes de cette somme sont donc nuls. Il reste D(a,b,c)=−[D(e₁,e₂,e₃)+D(e₂,e₃,e₁)]. Par normalisation, D(e₁,e₂,e₃)=1. La permutation circulaire (e₁,e₂,e₃)↦(e₂,e₃,e₁) est le produit de deux échanges, donc son signe est (−1)²=1 et D(e₂,e₃,e₁)=1. Ainsi D(a,b,c)=−(1+1)=−2.

#### 2. Base et orientation

Dans un espace de dimension 3, trois vecteurs forment une base si et seulement si leur déterminant dans une base donnée est non nul. Comme D(a,b,c)=−2≠0, (a,b,c) est une base de ℝ³. Par convention, une base ordonnée est de même orientation que E si son déterminant dans E est positif, et d’orientation opposée si ce déterminant est négatif. Ici −2<0 : (a,b,c) est une base négativement orientée, donc d’orientation opposée à E. Le signe indique le sens de l’orientation ; la valeur absolue 2 ne change pas cette interprétation.

#### 3. Matrice et orientation de T

Les colonnes de la matrice de T sont les coordonnées de T(e₁), T(e₂) et T(e₃). Par conséquent, [T]E = [[1,0,−1],[1,1,0],[0,1,−1]]. Son déterminant est celui de la famille de ses colonnes : det(T)=D(a,b,c)=−2. Comme ce déterminant est non nul, T est inversible. Un automorphisme réel de déterminant négatif renverse l’orientation ; T renverse donc l’orientation. Le déterminant d’un endomorphisme étant indépendant de la base choisie, cette conclusion ne dépend pas de la représentation matricielle.

#### 4. Groupe spécial linéaire

Par définition, SL₃(ℝ)={M∈GL₃(ℝ) : det(M)=1}, où GL₃(ℝ) est l’ensemble des matrices réelles inversibles d’ordre 3. La matrice de T est inversible puisque son déterminant −2 est non nul, mais son déterminant n’est pas égal à 1. Donc [T]E n’appartient pas à SL₃(ℝ). L’inversibilité exige det(M)≠0, alors que l’appartenance à SL₃(ℝ) exige précisément det(M)=1. Le déterminant 1 étant positif, tout élément de SL₃(ℝ) préserve l’orientation ; ici le déterminant négatif explique le renversement constaté.

### Vérifications rapides

- Calcul par développement selon la première ligne de la matrice : det=1(1·(−1)−0·1)+(−1)(1·1−1·0)=−1−1=−2.
- Calcul indépendant par produit mixte : b×c=(−1,−1,1), donc a·(b×c)=−1−1+0=−2.
- En échangeant les deux premières colonnes, le déterminant devient +2 : cela confirme la règle de changement de signe par échange et le signe négatif initial.

---

## Exercice 5 — 1.2 (c) : Matrices sur un anneau ou un corps, pivot de Gauss et applications

### Énoncé

Pour α, β ∈ ℝ, on considère le système d’inconnues x, y, z :

1) x + y + z = 1
2) x + αy + 2z = 2
3) 2x + 3y + 3z = β.

1. Écrire la matrice augmentée et effectuer une réduction de Gauss, en précisant les opérations élémentaires et leurs conditions de validité.
2. Discuter selon α et β le rang de la matrice des coefficients, le rang de la matrice augmentée et l’ensemble des solutions.
3. Calculer le déterminant de la matrice des coefficients en tenant compte des opérations réalisées.
4. Dans l’anneau ℤ/6ℤ, considérer B = [[2, 0], [0, 1]]. Son déterminant est non nul dans ℤ/6ℤ. B est-elle nécessairement inversible ? Justifier.

### Correction détaillée

#### 1. Réduction de Gauss

La matrice augmentée, dans l’ordre des inconnues x, y, z, est

[1  1    1 | 1]
[1  α    2 | 2]
[2  3    3 | β].

On travaille sur le corps ℝ. Les opérations élémentaires réversibles sur les lignes sont l’échange de deux lignes, l’ajout à une ligne d’un multiple d’une autre, et la multiplication d’une ligne par un scalaire non nul. Les deux premières ne nécessitent aucune hypothèse sur les paramètres. Une division par un scalaire n’est licite qu’après avoir vérifié qu’il est non nul.

Effectuons L₂ ← L₂ − L₁ et L₃ ← L₃ − 2L₁ :

[1  1      1 | 1]
[0  α − 1  1 | 1]
[0  1      1 | β − 2].

Puis L₂ ← L₂ − L₃, sans condition :

[1  1      1 | 1]
[0  α − 2  0 | 3 − β]
[0  1      1 | β − 2].

Le système est ainsi équivalent à : x + y + z = 1, (α − 2)y = 3 − β, y + z = β − 2.

#### 2. Discussion des rangs et résolution

**Cas α ≠ 2.** Le pivot α − 2 est non nul. On peut donc diviser par ce pivot (multiplier L₂ par 1/(α − 2)); cette étape n’est faite que sous l’hypothèse α ≠ 2. On obtient directement y = (3 − β)/(α − 2), puis z = β − 2 − (3 − β)/(α − 2). Comme y + z = β − 2, la première équation donne x = 1 − (β − 2) = 3 − β. Ainsi, pour tout β, l’unique solution est

(x, y, z) = (3 − β, (3 − β)/(α − 2), β − 2 − (3 − β)/(α − 2)).

Il y a trois pivots dans la matrice des coefficients : rg A = rg(A|b) = 3. Le système est compatible et possède une unique solution.

**Cas α = 2.** La deuxième équation réduite devient 0 = 3 − β.

- Si β ≠ 3, cette égalité est impossible. La matrice des coefficients a rang 2 : ses deux premières lignes initiales sont indépendantes, et sa troisième ligne est leur somme lorsque α = 2. La contradiction ajoute un pivot dans la matrice augmentée : rg A = 2 et rg(A|b) = 3. Le système n’a aucune solution.
- Si β = 3, la deuxième ligne est nulle. Les équations restantes donnent y + z = 1 et x + y + z = 1, donc x = 0. En posant y = t, z = 1 − t, où t ∈ ℝ, l’ensemble des solutions est {(0, t, 1 − t) : t ∈ ℝ}. On a rg A = rg(A|b) = 2 : il y a une infinité de solutions avec un paramètre libre.

Récapitulatif :

| Conditions | rg A | rg(A|b) | Solutions |
|---|---:|---:|---|
| α ≠ 2 | 3 | 3 | Une solution, donnée ci-dessus |
| α = 2, β = 3 | 2 | 2 | (0, t, 1 − t), t ∈ ℝ |
| α = 2, β ≠ 3 | 2 | 3 | Aucune |

#### 3. Déterminant

La matrice des coefficients est A = [[1, 1, 1], [1, α, 2], [2, 3, 3]]. Les opérations L₂ ← L₂ − L₁, L₃ ← L₃ − 2L₁ et L₂ ← L₂ − L₃ ne changent pas le déterminant : elles consistent à ajouter à une ligne un multiple d’une autre. Après ces opérations, la matrice est [[1, 1, 1], [0, α − 2, 0], [0, 1, 1]]. Son déterminant, par développement selon la première colonne, vaut α − 2. Donc det A = α − 2. Sur ℝ, A est inversible exactement lorsque α ≠ 2, en accord avec les rangs.

#### 4. Matrice sur ℤ/6ℤ

On a det B = 2, qui est non nul modulo 6. Toutefois, 2 n’est pas une unité dans ℤ/6ℤ : aucun élément u ne satisfait 2u = 1 modulo 6. Si B était inversible, la multiplicativité du déterminant donnerait det(B)det(B⁻¹) = 1, donc un inverse de 2, ce qui est impossible. B n’est donc pas inversible.

Vérification directe : le vecteur non nul (3, 0) est envoyé par B sur (6, 0) = (0, 0) modulo 6. L’application n’est pas injective, donc B n’est pas inversible. En général, pour une matrice carrée sur un anneau commutatif, le critère est que le déterminant soit une unité, et non simplement non nul. En particulier, diviser par 2 n’est pas licite dans ℤ/6ℤ.

### Vérifications rapides

- Calcul indépendant du déterminant par développement : det A = (3α − 6) − (3 − 4) + (3 − 2α) = α − 2, identique au résultat de Gauss.
- Pour α = 3 et β = 0, la solution annoncée est (3, 3, −5) ; ses membres de gauche dans les trois équations valent respectivement 1, 2 et 0.
- Pour α = 2, la troisième ligne de A est la somme des deux premières, lesquelles sont indépendantes. La matrice des coefficients est donc de rang 2 ; la même relation sur les équations exige β = 3.
- Dans ℤ/6ℤ, B(3, 0) = (0, 0) avec (3, 0) non nul, ce qui confirme indépendamment la non-injectivité et la non-inversibilité.

---

## Exercice 6 — 1.2 (d) : Polynômes, Cayley–Hamilton, réduction des endomorphismes et exponentielle

### Énoncé


On travaille sur R, dans la base canonique de R³, et l’on considère la matrice

    A = [[2, 1, 0],
         [0, 2, 0],
         [0, 0, -1]].

Convention : χ_A(X)=det(XI₃−A). Un polynôme annule A si p(A)=0, et le polynôme minimal est unitaire.

1. Calculer χ_A, ses valeurs propres et leurs multiplicités algébriques. Calculer A² et A³, puis vérifier Cayley–Hamilton.
2. Déterminer le polynôme minimal. En déduire une formule explicite de réduction de p(A) pour tout p∈R[X], puis une formule pour Aᵏ, k≥0.
3. Calculer les espaces propres et décider si A est diagonalisable sur R. Dire si elle est trigonalizable sur R. Déterminer E₂=ker(A−2I)³ et E₋₁=ker(A+I)³.
4. Déterminer la décomposition de Dunford A=S+N et vérifier ses propriétés.
5. Pour tout t∈R, calculer e^(tA), puis e^A.

### Correction détaillée

#### 1. Polynôme caractéristique et Cayley–Hamilton

La matrice XI₃−A est triangulaire supérieure, donc

    χ_A(X)=(X−2)²(X+1)=X³−3X²+4.

Les valeurs propres sont 2 et −1, de multiplicités algébriques 2 et 1. Le calcul matriciel donne

    A² = [[4, 4, 0], [0, 4, 0], [0, 0, 1]],
    A³ = [[8, 12, 0], [0, 8, 0], [0, 0, -1]].

Ainsi

    χ_A(A)=A³−3A²+4I₃
          = [[8−12+4, 12−12, 0], [0, 8−12+4, 0], [0, 0, −1−3+4]]
          = 0.

Cayley–Hamilton est vérifié explicitement.

#### 2. Polynôme minimal et réduction

Les vecteurs e₁ et e₃ sont propres associés à 2 et −1. Tout polynôme annulateur est donc divisible par (X−2)(X+1). De plus, (A−2I)e₂=e₁ et (A−2I)e₁=0. Si un polynôme p s’écrit p(X)=(X−2)q(X), avec q(2)≠0, alors p(A)e₂=q(A)e₁=q(2)e₁≠0. Le facteur X−2 doit donc apparaître au carré dans tout annulateur. Puisque χ_A annule A,

    μ_A(X)=(X−2)²(X+1)=X³−3X²+4.

On contrôle aussi l’exposant double par

    (A−2I)(A+I)=A²−A−2I=[[0,3,0],[0,0,0],[0,0,0]]≠0.

Pour réduire un polynôme quelconque, posons P=p(2), D=p′(2), Q=p(−1). Le reste r de la division de p par μ_A est de degré au plus 2 et vérifie r(2)=P, r′(2)=D, r(−1)=Q. Écrivant r(X)=aX²+bX+c, ces conditions sont 4a+2b+c=P, 4a+b=D, a−b+c=Q. Leur résolution donne

    a=(Q−P+3D)/9,
    b=(4P−3D−4Q)/9,
    c=(5P−6D+4Q)/9.

Comme p−r est divisible par μ_A, p(A)=r(A)=aA²+bA+cI. En évaluant cette expression, on obtient la formule de réduction

    p(A) = [[p(2), p′(2), 0],
            [0,     p(2), 0],
            [0,     0,     p(−1)]].

Pour k≥1, en appliquant cette formule à p(X)=Xᵏ,

    Aᵏ = [[2ᵏ, k·2ᵏ⁻¹, 0],
          [0,  2ᵏ,      0],
          [0,  0,        (−1)ᵏ]].

Pour k=0, A⁰=I₃.

#### 3. Espaces propres, diagonalisation et trigonalisation

On a A−2I=[[0,1,0],[0,0,0],[0,0,−3]]. Résoudre (A−2I)x=0 impose x₂=x₃=0, donc ker(A−2I)=Vect(e₁), de dimension 1. Par ailleurs A+I=[[3,1,0],[0,3,0],[0,0,0]], d’où ker(A+I)=Vect(e₃). La somme des dimensions propres vaut 2<3 ; A n’est pas diagonalisable sur R. Cela correspond également au facteur répété X−2 de son polynôme minimal.

A est déjà triangulaire supérieure dans la base canonique ; elle est donc trigonalizable sur R.

Sur les deux premières coordonnées, A−2I est nilpotent d’indice 2 ; sur la troisième, il agit par −3. Ainsi E₂=ker(A−2I)³=Vect(e₁,e₂). Sur les deux premières coordonnées A+I est inversible et sur la troisième il est nul. Donc E₋₁=ker(A+I)³=Vect(e₃), et R³=E₂⊕E₋₁.

#### 4. Décomposition de Dunford

Posons

    S = [[2, 0, 0], [0, 2, 0], [0, 0, -1]],
    N = [[0, 1, 0], [0, 0, 0], [0, 0, 0]].

Alors A=S+N. La matrice S est diagonale, donc diagonalisable ; N²=0, donc N est nilpotente. Les deux parties commutent : SN=NS=2N. Le polynôme caractéristique étant scindé sur le corps de base R, la décomposition de Dunford s’applique ; les matrices S et N données sont cette décomposition.

#### 5. Exponentielle matricielle

L’exponentielle est définie par la série convergente e^(tA)=Σₖ₌₀∞ tᵏAᵏ/k!. Les matrices S et N commutent, donc e^(tA)=e^(tS)e^(tN). Or

    e^(tS)=diag(e^(2t), e^(2t), e^(−t)),
    e^(tN)=I+tN=[[1,t,0],[0,1,0],[0,0,1]],

car N²=0, donc la série exponentielle de tN s’arrête au terme linéaire. Par multiplication, pour tout t réel,

    e^(tA) = [[e^(2t), t·e^(2t), 0],
              [0,      e^(2t),    0],
              [0,      0,         e^(−t)]].

En particulier,

    e^A = [[e², e², 0], [0, e², 0], [0, 0, e⁻¹]].

### Vérifications rapides

- Le déterminant triangulaire donne χ_A=(X−2)²(X+1), et son développement restitue la relation calculée directement : A³−3A²+4I₃=0.
- La formule de réduction restitue A pour p(X)=X et, pour p(X)=X², le produit indépendant A²=[[4,4,0],[0,4,0],[0,0,1]].
- La formule de l’exponentielle donne e^(0A)=I₃ ; sa dérivée entrée par entrée vérifie d(e^(tA))/dt=Ae^(tA), notamment le terme hors diagonale dont la dérivée est (1+2t)e^(2t).

## Référence du programme

Les intitulés suivent le [programme officiel 2027 de l’agrégation externe spéciale, section mathématiques](https://www.devenirenseignant.gouv.fr/media/20323/download); voir aussi le [registre des sources du dépôt](SOURCES.md). Le programme officiel fait foi en cas de divergence de notation ou de périmètre.
