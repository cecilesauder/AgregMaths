# Fiches de révision A5 — Écrit de l'agrégation
### Contenu à recopier à la main, dans l'ordre logique de révision

---

## 🎨 Code couleur suggéré (à utiliser sur chaque fiche)

| Couleur | Usage |
|---|---|
| 🟡 **Doré / jaune** | Théorèmes et formules à savoir par cœur |
| 🔵 **Bleu** | Définitions |
| 🟣 **Violet** | Méthodes / réflexes pratiques |
| 🟢 **Vert** | Exemples concrets |
| 🔴 **Rouge** | Pièges classiques à ne pas faire |

Astuce : garde ces 5 couleurs **identiques sur toutes les fiches** — ton œil apprendra à repérer "ça c'est un piège" ou "ça c'est une définition" rien qu'à la couleur, même sans lire.

---

## PARTIE ALGÈBRE

### Fiche 1 — Groupes cycliques
- 🔵 Ordre d'un élément = plus petit n tel que n fois l'élément = neutre
- 🟡 Dans Z/nZ : ordre(k) = n / pgcd(k,n)
- 🔵 Sous-groupe engendré ⟨k⟩ = tous les multiples de k
- 🟡 Théorème de Lagrange : l'ordre d'un sous-groupe (ou d'un élément) divise toujours |G|
- 🟣 Si |G| = p premier → G cyclique automatiquement (isomorphe à Z/pZ)
- 🟡 k engendre Z/nZ ⟺ pgcd(k,n) = 1
- 🟢 Exemple : Z/12Z, ⟨8⟩ = {0,4,8}, ordre 3

### Fiche 2 — Morphismes de groupes
- 🟡 La règle d'or : f(x+y) = f(x) + f(y) — toujours vraie, c'est la définition
- 🟡 Conséquences : f(0) = 0, et f(-x) = -f(x)
- 🔵 ker(f) = {x : f(x) = 0} — TOUJOURS un sous-groupe
- 🔵 Im(f) = valeurs atteintes — TOUJOURS un sous-groupe
- 🟣 Pour montrer f injective : ker(f) = {0} (ne jamais revenir à la définition générale)
- 🟡 1er théorème d'isomorphisme : G/ker(f) ≅ Im(f)

### Fiche 3 — Sous-groupes distingués & quotients
- 🔵 H distingué ⟺ gHg⁻¹ = H pour tout g
- 🟣 Raccourci 1 : G abélien ⟹ tout sous-groupe est distingué (gratuit)
- 🟣 Raccourci 2 : ker(f) est TOUJOURS distingué
- 🟣 Raccourci 3 : [G:H] = 2 ⟹ H distingué automatiquement
- 🟡 Pour G fini et H sous-groupe : |G/H| = |G|/|H|; en général, |G/H|=[G:H].
- 🟢 Exemple à connaître : Aₙ distingué dans Sₙ (indice 2), Sₙ/Aₙ ≅ Z/2Z

### Fiche 4 — Actions de groupe
- 🔵 Orb(x) = {g·x : g ∈ G} — partitionne toujours X
- 🔵 Stab(x) = {g : g·x = x} — TOUJOURS un sous-groupe
- 🟡 Pour G fini, orbite-stabilisateur : |Orb(x)|·|Stab(x)|=|G|
- 🔵 Action par conjugaison : g·x = gxg⁻¹ → classes de conjugaison, centralisateur
- 🟣 Pour X fini, équation aux classes : |X| = somme des |Orb(xᵢ)| (un représentant par orbite).
- 🟢 Classique d'oral : |G|=p² ⟹ Z(G) ≠ {e} (via équation aux classes)

### Fiche 5 — Anneaux : bases
- 🔵 Sous-anneau : contient 1, stable par − et ×
- 🔴 PIÈGE : idéal ≠ sous-anneau ! Idéal = sous-groupe pour + ET stable par ×externe (tout A)
- 🔴 Un idéal ne contient JAMAIS 1 (sauf I=A)
- 🟡 Morphisme d'anneaux : f(x+y)=f(x)+f(y), f(xy)=f(x)f(y), f(1)=1
- 🟡 ker(f) est un idéal (pas un sous-anneau)
- 🟡 1er théo. d'isomorphisme anneaux : A/ker(f) ≅ Im(f)
- 🟢 Exemple : R[X]/(X²+1) ≅ C

### Fiche 6 — Arithmétique des polynômes
- 🟣 Analogie utile entre K[X] (K corps) et Z; vérifier les hypothèses propres à chaque anneau.
- 🟡 Division euclidienne : P = BQ + R, deg R < deg Q
- 🟣 Astuce : reste de la division par (X−a) = P(a) directement
- 🟡 a racine de P ⟺ (X−a) divise P
- 🟡 En caractéristique 0 (ou car(K)>k), multiplicité k : P(a)=P'(a)=…=P^(k−1)(a)=0 et P^(k)(a)≠0; attention en caractéristique positive.
- 🟣 Irréductibilité : test racine (deg 2-3), Eisenstein, réduction mod p
- 🔵 Sur C : irréductibles = degré 1 seulement. Sur R : degré 1 ou 2 (discriminant <0)

### Fiche 7 — Anneaux principaux & extensions de corps
- 🔵 Anneau principal : tout idéal engendré par 1 seul élément
- 🟡 Z et K[X] sont principaux (démo via division euclidienne + élément de degré minimal)
- 🔵 Extension L/K : degré [L:K] = dim de L comme K-espace vectoriel
- 🟡 Si les degrés sont finis : [M:K]=[M:L][L:K] (base produit).
- 🔵 Polynôme minimal de α : unitaire, irréductible, de plus petit degré annulant α
- 🟡 Si α est algébrique sur K, K(α)≅K[X]/(μ_α).

### Fiche 8 — Réduction des endomorphismes
- 🟡 En dimension finie, χ_u(X)=det(XI−u), deg χ_u=dim E; ses racines dans K sont les valeurs propres sur K (les autres apparaissent dans un corps de scission).
- 🟣 En dimension finie sur K : diagonalisable sur K ⟺ le polynôme minimal est scindé à racines simples (équiv. χ scindé et chaque espace propre a dimension la multiplicité algébrique).
- 🟡 Cayley-Hamilton : χ_u(u) = 0 (toujours vrai)
- 🟡 Lemme des noyaux : P=P₁P₂ premiers entre eux, P(u)=0 ⟹ E=ker(P₁(u))⊕ker(P₂(u))
- 🔵 En dimension finie, u nilpotent ⟺ χ_u(X)=Xⁿ; sur une clôture algébrique ses valeurs propres sont toutes nulles. Non nul, il n’est pas diagonalisable.
- 🟣 Si A est diagonalisable, A=PDP⁻¹ ⟹ Aⁿ=PDⁿP⁻¹; sinon utiliser une autre réduction.

### Fiche 9 — Réduction de Jordan
- 🔵 Sur un corps où χ_u est scindé : sous-espace caractéristique associé à λ, ker(u−λI)^m (m = multiplicité algébrique de λ).
- 🔵 Bloc Jordan J_k(λ) : λ diagonale, 1 sur sur-diagonale
- 🟡 χ_u scindé ⟹ u semblable à somme de blocs de Jordan (unique à l'ordre près)
- 🟣 Nb de blocs de taille ≥k pour λ = rg(u−λI)^(k-1) − rg(u−λI)^k
- 🟢 Pour un bloc avec 1 sur la surdiagonale, ordonner la chaîne (N^(k−1)v,…,Nv,v), avec N^(k−1)v≠0.

### Fiche 10 — Formes bilinéaires & espaces euclidiens
- 🔵 Si car(K)≠2 : polarisation b(x,y) = ½[q(x+y)−q(x)−q(y)].
- 🟣 Algorithme de Gauss : compléter le carré en x₁, puis recommencer sur le reste
- 🟡 Sylvester : signature (p,q) indépendante de la décomposition choisie
- 🟡 Cauchy–Schwarz vaut dans tout espace préhilbertien; preuve par le discriminant (cas y=0 traité à part).
- 🟣 Gram–Schmidt s’applique à un produit scalaire défini positif; soustraire les projections, puis normaliser.
- 🟡 Une matrice symétrique réelle est diagonalisable orthogonalement pour le produit scalaire euclidien standard.

---

## PARTIE ANALYSE

### Fiche 11 — Topologie & espaces métriques
- 🔵 Suite de Cauchy : les termes se rapprochent entre eux (pas forcément d'une limite connue)
- 🔵 Complet : toute suite de Cauchy y converge
- 🟡 Point fixe de Banach : f:X→X contractante sur un espace métrique complet ⟹ unique point fixe.
- 🔵 Compact : de tout recouvrement ouvert, sous-recouvrement fini (ou : Bolzano-Weierstrass)
- 🔴 PIÈGE : "fermé borné ⟹ compact" (Heine-Borel) SEULEMENT en dimension finie !
- 🟡 Heine : continue sur compact ⟹ uniformément continue
- 🔵 Connexe : image par application continue reste connexe (généralise TVI)

### Fiche 12 — Suites et séries de fonctions
- 🔵 Convergence simple : point par point. Uniforme : sup|fₙ−f| → 0
- 🔴 PIÈGE classique : une limite uniforme de fonctions continues est continue; la limite simple peut être discontinue.
- 🟣 Convergence normale (Weierstrass) : Σ‖fₙ‖∞ < ∞ ⟹ normale ⟹ uniforme
- 🟡 Sur un segment, convergence uniforme permet l’interversion avec l’intégrale de Riemann; en intégration de Lebesgue, convergence dominée/monotone donnent aussi des critères.
- 🔴 PIÈGE : dérivation terme à terme — version suffisante : fₙ∈C¹, fₙ' converge uniformément et fₙ(x₀) converge en un point; alors fₙ converge uniformément et on dérive la limite.
- 🟡 Dini : sur un compact, suite monotone de fonctions continues convergeant simplement vers une fonction continue ⟹ convergence uniforme.
- 🟢 Exemple à vie : fₙ(x)=xⁿ sur [0,1]

### Fiche 13 — Intégration de Lebesgue
- 🟡 Convergence monotone : 0≤fₙ croissante ⟹ ∫fₙ → ∫f (même si +∞)
- 🟡 Convergence dominée : fₙ→f p.p. + |fₙ|≤g intégrable (indép. de n) ⟹ ∫fₙ→∫f
- 🔴 PIÈGE : la domination doit être indépendante de n, pas juste tendre vers une limite
- 🟣 Fatou : pour fₙ mesurables positives, ∫liminf fₙ ≤ liminf∫fₙ.
- 🟣 Fubini-Tonelli : fonctions mesurables sur un espace produit; Tonelli pour f≥0, Fubini si ∫∫|f|<∞.
- 🟡 Hölder : ‖fg‖₁≤‖f‖ₚ‖g‖_q, 1/p+1/q=1, y compris p=1,q=∞; p=q=2 donne Cauchy–Schwarz intégral.
- 🟢 Contre-exemple domination : fₙ(0)=0, fₙ=n sur (0,1/n], 0 ailleurs; fₙ→0 presque partout, mais ∫fₙ=1.

### Fiche 14 — Espaces de Hilbert & L²
- 🔵 Hilbert = produit scalaire + complétude
- 🟡 Projection sur convexe fermé : existe, unique; en Hilbert complexe, Re⟨x−p,c−p⟩≤0 (convention de produit scalaire à préciser).
- 🟣 Cas sous-espace F fermé : projection linéaire, H=F⊕F⊥
- 🟡 Riesz : toute forme linéaire continue s’écrit φ(x)=⟨a,x⟩, selon la convention choisie pour le produit scalaire.
- 🟡 Base hilbertienne + Parseval : x=Σ⟨x,eₙ⟩eₙ, ‖x‖²=Σ|⟨x,eₙ⟩|²
- 🟢 Exemple central : L²(μ), et (e^(int)/√2π) base hilbertienne → pont direct vers Fourier

### Fiche 15 — Séries entières & fonctions holomorphes
- 🟡 Rayon de convergence : 1/R = limsup |aₙ|^(1/n) (ou règle du rapport d'Alembert)
- 🟡 Holomorphe = analytique sur C : dérivable 1 fois ⟹ indéfiniment dérivable (très différent de R !)
- 🟡 Cauchy-Riemann : ∂P/∂x=∂Q/∂y et ∂P/∂y=−∂Q/∂x (f=P+iQ)
- 🟡 Cauchy : f(a)=(2πi)⁻¹∮f(z)/(z−a)dz, si f est holomorphe au voisinage du disque fermé, a intérieur et contour positif.
- 🟣 Résidus : ∮f=2πiΣRes(f,a) pour f méromorphe, aucun pôle sur le contour et orientation positive (sinon tenir compte de l’indice).
- 🔵 Sur un domaine, des zéros d’une fonction holomorphe avec point d’accumulation intérieur impliquent f=0 sur la composante connexe.
- 🟢 Liouville : une fonction entière bornée sur ℂ est constante.

### Fiche 16 — Séries de Fourier
- 🔵 cₙ(f) = (1/2π)∫f(t)e^(−int)dt — ou version réelle aₙ, bₙ
- 🟣 Astuce parité : f paire ⟹ bₙ=0 ; f impaire ⟹ aₙ=0
- 🟡 Dirichlet : f C¹ par morceaux ⟹ convergence ponctuelle vers demi-somme des limites
- 🟡 Parseval : (1/2π)∫|f|² = Σ|cₙ(f)|² (cas particulier du Hilbert, fiche 14)
- 🟡 Convergence uniforme : f continue et C¹ par morceaux (hypothèses usuelles) ⟹ convergence uniforme de sa série de Fourier; cela ne suffit pas à la convergence normale.
- 🟣 Calculer une somme numérique : évaluer en un point (Dirichlet) OU via Parseval
- 🟢 Classique : Σ1/n² = π²/6 (problème de Bâle, retrouvé via Parseval)

---

## 💡 Conseils pour la recopie

- Une fiche = un côté de carte A5 maximum. Si ça déborde, le contenu est trop dense — coupe en deux fiches.
- Recopie les formules encadrées (🟡) en GROS, au centre — c'est ce que l'œil doit retrouver en 1 seconde.
- Laisse de la place en bas de chaque fiche pour ajouter, au crayon, tes propres rappels après un exercice raté dessus.
- Numérote les fiches au dos (1 à 16) pour pouvoir les mélanger et t'auto-tester dans le désordre plus tard.
