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
- 🟡 |G/H| = |G| / |H|
- 🟢 Exemple à connaître : Aₙ distingué dans Sₙ (indice 2), Sₙ/Aₙ ≅ Z/2Z

### Fiche 4 — Actions de groupe
- 🔵 Orb(x) = {g·x : g ∈ G} — partitionne toujours X
- 🔵 Stab(x) = {g : g·x = x} — TOUJOURS un sous-groupe
- 🟡 Théorème orbite-stabilisateur : |Orb(x)| × |Stab(x)| = |G|
- 🔵 Action par conjugaison : g·x = gxg⁻¹ → classes de conjugaison, centralisateur
- 🟣 Équation aux classes : |X| = somme des |Orb(xᵢ)| (un représentant par orbite)
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
- 🟣 Fil rouge : K[X] se comporte EXACTEMENT comme Z
- 🟡 Division euclidienne : P = BQ + R, deg R < deg Q
- 🟣 Astuce : reste de la division par (X−a) = P(a) directement
- 🟡 a racine de P ⟺ (X−a) divise P
- 🟡 Multiplicité k : P(a)=P'(a)=...=P^(k-1)(a)=0 et P^(k)(a)≠0
- 🟣 Irréductibilité : test racine (deg 2-3), Eisenstein, réduction mod p
- 🔵 Sur C : irréductibles = degré 1 seulement. Sur R : degré 1 ou 2 (discriminant <0)

### Fiche 7 — Anneaux principaux & extensions de corps
- 🔵 Anneau principal : tout idéal engendré par 1 seul élément
- 🟡 Z et K[X] sont principaux (démo via division euclidienne + élément de degré minimal)
- 🔵 Extension L/K : degré [L:K] = dim de L comme K-espace vectoriel
- 🟡 Formule des degrés : [M:K] = [M:L] × [L:K]
- 🔵 Polynôme minimal de α : unitaire, irréductible, de plus petit degré annulant α
- 🟡 K(α) ≅ K[X]/(polynôme minimal de α)

### Fiche 8 — Réduction des endomorphismes
- 🟡 χ_u(X) = det(XI − u), racines = valeurs propres, deg = dim E
- 🟣 Diagonalisable ⟺ χ scindé + dim(sev propre)=multiplicité, OU annulateur scindé à racines simples
- 🟡 Cayley-Hamilton : χ_u(u) = 0 (toujours vrai)
- 🟡 Lemme des noyaux : P=P₁P₂ premiers entre eux, P(u)=0 ⟹ E=ker(P₁(u))⊕ker(P₂(u))
- 🔵 u nilpotent : seule valeur propre 0, χ_u(X)=Xⁿ, jamais diagonalisable (sauf 0)
- 🟣 Puissances : diagonaliser A=PDP⁻¹ ⟹ Aⁿ=PDⁿP⁻¹

### Fiche 9 — Réduction de Jordan
- 🔵 Sous-espace caractéristique : ker(u−λI)^m (m = multiplicité de λ)
- 🔵 Bloc Jordan J_k(λ) : λ diagonale, 1 sur sur-diagonale
- 🟡 χ_u scindé ⟹ u semblable à somme de blocs de Jordan (unique à l'ordre près)
- 🟣 Nb de blocs de taille ≥k pour λ = rg(u−λI)^(k-1) − rg(u−λI)^k
- 🟢 Astuce construction : partir du vecteur v avec N^(k-1)v≠0, famille (v,Nv,...,N^(k-1)v) libre

### Fiche 10 — Formes bilinéaires & espaces euclidiens
- 🔵 Polarisation : b(x,y) = ½[q(x+y)−q(x)−q(y)]
- 🟣 Algorithme de Gauss : compléter le carré en x₁, puis recommencer sur le reste
- 🟡 Sylvester : signature (p,q) indépendante de la décomposition choisie
- 🟡 Cauchy-Schwarz : |⟨x,y⟩| ≤ ‖x‖‖y‖ (démo : discriminant de ‖x+ty‖²≥0)
- 🟣 Gram-Schmidt : soustraire les projections sur les vecteurs déjà construits, puis normaliser
- 🟡 Théorème spectral : matrice symétrique réelle → toujours diagonalisable en base ORTHONORMÉE

---

## PARTIE ANALYSE

### Fiche 11 — Topologie & espaces métriques
- 🔵 Suite de Cauchy : les termes se rapprochent entre eux (pas forcément d'une limite connue)
- 🔵 Complet : toute suite de Cauchy y converge
- 🟡 Point fixe de Banach : f k-lipschitzienne (k<1) sur complet ⟹ unique point fixe
- 🔵 Compact : de tout recouvrement ouvert, sous-recouvrement fini (ou : Bolzano-Weierstrass)
- 🔴 PIÈGE : "fermé borné ⟹ compact" (Heine-Borel) SEULEMENT en dimension finie !
- 🟡 Heine : continue sur compact ⟹ uniformément continue
- 🔵 Connexe : image par application continue reste connexe (généralise TVI)

### Fiche 12 — Suites et séries de fonctions
- 🔵 Convergence simple : point par point. Uniforme : sup|fₙ−f| → 0
- 🔴 PIÈGE classique : limite discontinue ⟹ PAS uniforme (mais continue n'implique pas uniforme non plus !)
- 🟣 Convergence normale (Weierstrass) : Σ‖fₙ‖∞ < ∞ ⟹ normale ⟹ uniforme
- 🟡 Interversion limite/intégrale : besoin convergence UNIFORME + continuité
- 🔴 PIÈGE : dérivation terme à terme — c'est sur les DÉRIVÉES qu'il faut l'uniforme, pas sur fₙ !
- 🟡 Dini : simple + monotone + compact + continue ⟹ automatiquement uniforme
- 🟢 Exemple à vie : fₙ(x)=xⁿ sur [0,1]

### Fiche 13 — Intégration de Lebesgue
- 🟡 Convergence monotone : 0≤fₙ croissante ⟹ ∫fₙ → ∫f (même si +∞)
- 🟡 Convergence dominée : fₙ→f p.p. + |fₙ|≤g intégrable (indép. de n) ⟹ ∫fₙ→∫f
- 🔴 PIÈGE : la domination doit être indépendante de n, pas juste tendre vers une limite
- 🟣 Fatou : f≥0 ⟹ ∫liminf fₙ ≤ liminf ∫fₙ (dépannage sans domination)
- 🟣 Fubini-Tonelli : Tonelli (f≥0, toujours licite), Fubini (besoin ∫∫|f|<∞ d'abord)
- 🟡 Hölder : ‖fg‖₁ ≤ ‖f‖ₚ‖g‖_q avec 1/p+1/q=1 (cas p=q=2 = Cauchy-Schwarz intégral)
- 🟢 Contre-exemple domination : fₙ=n sur [0,1/n], aire=1 toujours, mais fₙ(x)→0 partout

### Fiche 14 — Espaces de Hilbert & L²
- 🔵 Hilbert = produit scalaire + complétude
- 🟡 Projection sur convexe fermé : existe, unique, caractérisée par ⟨x−p(x),c−p(x)⟩≤0
- 🟣 Cas sous-espace F fermé : projection linéaire, H=F⊕F⊥
- 🟡 Riesz : toute forme linéaire continue s'écrit φ(x)=⟨a,x⟩
- 🟡 Base hilbertienne + Parseval : x=Σ⟨x,eₙ⟩eₙ, ‖x‖²=Σ|⟨x,eₙ⟩|²
- 🟢 Exemple central : L²(μ), et (e^(int)/√2π) base hilbertienne → pont direct vers Fourier

### Fiche 15 — Séries entières & fonctions holomorphes
- 🟡 Rayon de convergence : 1/R = limsup |aₙ|^(1/n) (ou règle du rapport d'Alembert)
- 🟡 Holomorphe = analytique sur C : dérivable 1 fois ⟹ indéfiniment dérivable (très différent de R !)
- 🟡 Cauchy-Riemann : ∂P/∂x=∂Q/∂y et ∂P/∂y=−∂Q/∂x (f=P+iQ)
- 🟡 Formule de Cauchy : f(a) = (1/2iπ)∮f(z)/(z−a)dz
- 🟣 Théorème des résidus : ∮f = 2iπ×Σrésidus — pour calculer des intégrales réelles
- 🔵 Zéros isolés : f s'annule sur un ensemble avec point d'accumulation ⟹ f≡0
- 🟢 Classique d'oral : Liouville (holomorphe + bornée sur C ⟹ constante)

### Fiche 16 — Séries de Fourier
- 🔵 cₙ(f) = (1/2π)∫f(t)e^(−int)dt — ou version réelle aₙ, bₙ
- 🟣 Astuce parité : f paire ⟹ bₙ=0 ; f impaire ⟹ aₙ=0
- 🟡 Dirichlet : f C¹ par morceaux ⟹ convergence ponctuelle vers demi-somme des limites
- 🟡 Parseval : (1/2π)∫|f|² = Σ|cₙ(f)|² (cas particulier du Hilbert, fiche 14)
- 🟡 Convergence uniforme : f continue + C¹ par morceaux ⟹ convergence normale
- 🟣 Calculer une somme numérique : évaluer en un point (Dirichlet) OU via Parseval
- 🟢 Classique : Σ1/n² = π²/6 (problème de Bâle, retrouvé via Parseval)

---

## 💡 Conseils pour la recopie

- Une fiche = un côté de carte A5 maximum. Si ça déborde, le contenu est trop dense — coupe en deux fiches.
- Recopie les formules encadrées (🟡) en GROS, au centre — c'est ce que l'œil doit retrouver en 1 seconde.
- Laisse de la place en bas de chaque fiche pour ajouter, au crayon, tes propres rappels après un exercice raté dessus.
- Numérote les fiches au dos (1 à 16) pour pouvoir les mélanger et t'auto-tester dans le désordre plus tard.
