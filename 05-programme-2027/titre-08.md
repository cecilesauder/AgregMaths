# Titre 8 — Topologie, espaces normés et Hilbert

> **Statut : guide de révision, à travailler, ne remplace pas un cours.**
>
> Ce document sert à organiser les notions, énoncés et méthodes de révision du Titre 8. Il donne des formulations de référence et des exemples de repérage, mais **ne fournit pas les démonstrations** et ne prétend pas à une exhaustivité au-delà des points du programme officiel vérifiés. Il doit être complété par le cours, des exercices et les annales.

Le programme officiel de la session 2027 répartit ce titre en trois unités, **8.1 Topologie et espaces métriques**, **8.2 Espaces vectoriels normés sur ℝ ou ℂ** et **8.3 Espaces de Hilbert**. Les lettres (a), (b), etc. ci-dessous suivent les sous-items officiels. [1]

## 8.1 Topologie et espaces métriques

### 8.1(a) Topologie d’un espace métrique. Topologie induite. Produit fini d’espaces métriques

**À savoir.** Une distance sur un ensemble X est une application d : X × X → [0,+∞[ qui est positive, séparante, symétrique et vérifie l’inégalité triangulaire. La boule ouverte B(x,r) rassemble les points à distance strictement inférieure à r de x. Un ouvert est un ensemble qui contient, autour de chacun de ses points, une boule incluse dans l’ensemble. Les fermés sont les complémentaires des ouverts.

La topologie induite sur A ⊂ X est celle obtenue avec la distance restreinte à A × A : un ouvert de A est de la forme A ∩ U, où U est ouvert dans X. Pour un nombre fini d’espaces métriques (Xᵢ,dᵢ), la topologie produit est induite, par exemple, par la distance produit d((xᵢ),(yᵢ)) = maxᵢ dᵢ(xᵢ,yᵢ). Sur un produit fini, d’autres choix usuels comme la somme des distances donnent la même topologie.

**Exemple / usage.** Pour A = [0,1] dans ℝ, les ouverts relatifs peuvent contenir 0 sans contenir d’intervalle ouvert centré en 0 dans ℝ : [0,ε) est ouvert dans A. Sur ℝ², les distances euclidienne, maximum et somme des valeurs absolues induisent la topologie usuelle. Cela permet de choisir la distance la plus commode pour étudier une convergence ou une continuité.

### 8.1(b) Suites. Valeurs d’adhérence. Limites. Applications continues. Homéomorphismes

**À savoir.** Une suite (xₙ) converge vers x si, pour tout ε > 0, il existe N tel que n ≥ N entraîne d(xₙ,x) < ε. Une valeur d’adhérence d’une suite est la limite d’une sous-suite. L’adhérence d’une partie A est l’ensemble des points dont tout voisinage rencontre A; elle est aussi le plus petit fermé contenant A.

Une application f : X → Y entre espaces métriques est continue en x si, pour tout ε > 0, il existe δ > 0 tel que dₓ(x,y) < δ implique dᵧ(f(x),f(y)) < ε. Dans les espaces métriques, cela équivaut à la préservation des limites de suites : si xₙ → x, alors f(xₙ) → f(x). Un homéomorphisme est une bijection continue dont l’inverse est continu; il identifie les deux espaces du point de vue topologique.

**Exemple / usage.** L’inclusion [0,1] → ℝ est continue, mais n’est pas un homéomorphisme sur son image si l’on compare [0,1] à l’intervalle ouvert ]0,1[ : il n’existe pas de bijection entre eux? (Ils sont en fait en bijection, mais pas d’homéomorphisme; distinguer l’argument topologique d’une simple bijection.) Plus concrètement, ℝ et ]0,1[ sont homéomorphes via une fonction continue strictement croissante à limites 0 et 1 aux deux infinis, tandis que [0,1] et ]0,1[ ne le sont pas car la compacité est préservée par homéomorphisme et seul le premier est compact. En exercice, la caractérisation séquentielle de la continuité est souvent le moyen le plus rapide de réfuter ou établir une continuité.

### 8.1(c) Compacité. Équivalence des définitions en termes de valeurs d’adhérence (Bolzano-Weierstrass) ou de recouvrements ouverts (Borel-Lebesgue). Connexité. Composantes connexes. Connexité par arcs

**À savoir — compacité.** Un espace est compact si de tout recouvrement par des ouverts on peut extraire un sous-recouvrement fini (Borel–Lebesgue). Dans un espace métrique, c’est équivalent à la compacité séquentielle : toute suite admet une sous-suite convergente dont la limite appartient à l’espace. Formulation d’adhérence équivalente : toute suite possède une valeur d’adhérence dans l’espace (Bolzano–Weierstrass). Une partie est compacte lorsqu’elle l’est pour sa topologie induite. Dans ℝⁿ muni de sa topologie usuelle, le théorème de Heine–Borel affirme qu’une partie est compacte si et seulement si elle est fermée et bornée.

**À savoir — connexité.** Un espace est connexe s’il ne peut pas s’écrire comme réunion de deux ouverts disjoints non vides. Une partie connexe maximale est une composante connexe; les composantes forment une partition. Un espace est connexe par arcs si deux points quelconques peuvent être reliés par un chemin continu γ : [0,1] → X. La connexité par arcs implique la connexité, mais la réciproque n’est pas vraie en général.

**Exemple / usage.** Dans ℝ, un intervalle est connexe et connexe par arcs; [0,1] est compact par Heine–Borel. Toute suite de [0,1] admet donc une sous-suite convergente dans [0,1]. Pour une fonction continue sur un compact, ces résultats permettent d’obtenir une valeur maximale et minimale et de passer de suites à des sous-suites convergentes.

### 8.1(d) Applications lipschitziennes, applications uniformément continues. Théorème de Heine

**À savoir.** Une application f entre espaces métriques est K-lipschitzienne si d(f(x),f(y)) ≤ K d(x,y) pour tous x,y et un K ≥ 0 fixé. Elle est alors uniformément continue : pour chaque ε > 0, le même δ peut être choisi indépendamment du point x. La continuité uniforme exige que d(x,y) < δ entraîne d(f(x),f(y)) < ε uniformément sur tout le domaine.

Le théorème de Heine affirme qu’une fonction continue définie sur un espace métrique compact à valeurs dans un espace métrique est uniformément continue. Il ne faut pas confondre cette conclusion avec le théorème de Heine–Borel de 8.1(c).

**Exemple / usage.** La fonction x ↦ x² est uniformément continue sur [−M,M] pour M fini, par exemple grâce à |x²−y²| ≤ 2M|x−y|; elle n’est pas uniformément continue sur ℝ. Une application K-lipschitzienne est souvent étudiée en contrôlant directement l’écart entre deux images.

### 8.1(e) Espaces métriques complets. Théorème du point fixe pour les applications contractantes

**À savoir.** Une suite est de Cauchy si, pour tout ε > 0, ses termes sont à distance mutuelle < ε à partir d’un certain rang. Un espace métrique est complet si toute suite de Cauchy y converge dans cet espace. Une contraction T : X → X vérifie d(Tx,Ty) ≤ q d(x,y) avec 0 ≤ q < 1.

**Théorème du point fixe (Banach).** Si (X,d) est un espace métrique complet, non vide, et si T : X → X est une contraction, alors T possède un unique point fixe x*, et les itérations xₙ₊₁ = T(xₙ), à partir de tout x₀ ∈ X, convergent vers x*. Les hypothèses sont à vérifier : l’application doit envoyer X dans X, l’espace doit être complet et le facteur strictement inférieur à 1.

**Exemple / usage.** Sur ℝ, T(x) = (x+1)/2 est une contraction de facteur 1/2. Son unique point fixe est 1, et l’itération converge vers 1 depuis tout point initial. La contraction apparaît aussi pour établir l’existence et l’unicité dans des problèmes d’équations reformulés en x = T(x).

## 8.2 Espaces vectoriels normés sur ℝ ou ℂ

### 8.2(a) Topologie d’un espace vectoriel normé. Normes équivalentes. Cas des espaces de dimension finie. Normes ∥·∥ₚ sur ℝⁿ et ℂⁿ. Espaces de Banach. Séries absolument convergentes dans un espace de Banach

**À savoir — normes et topologie.** Une norme ∥·∥ sur un espace vectoriel E est positive, séparante, homogène (∥λx∥ = |λ|∥x∥) et vérifie l’inégalité triangulaire. Elle définit la distance d(x,y) = ∥x−y∥ et donc une topologie. Deux normes sont équivalentes s’il existe a,b > 0 tels que a∥x∥₁ ≤ ∥x∥₂ ≤ b∥x∥₁ pour tout x. Elles définissent alors les mêmes ouverts, les mêmes suites convergentes et les mêmes notions de continuité.

En dimension finie, toutes les normes sont équivalentes. Dans ℝⁿ ou ℂⁿ, pour 1 ≤ p < ∞, ∥x∥ₚ = (Σᵢ |xᵢ|ᵖ)^(1/p), tandis que ∥x∥∞ = maxᵢ |xᵢ|. Toute norme de dimension finie donne la même topologie; toute suite de Cauchy converge, donc ces espaces normés sont complets.

**À savoir — Banach et séries.** Un espace normé complet est un espace de Banach. Une série Σxₙ dans un espace normé est absolument convergente lorsque Σ∥xₙ∥ < ∞. Dans un espace de Banach, cette condition garantit que la série vectorielle converge. Ne pas confondre convergence de la série et convergence absolue : l’implication demandée est de l’absolue vers la convergence.

**Exemple / usage.** Sur ℝⁿ, les normes ∥·∥₁, ∥·∥₂ et ∥·∥∞ sont équivalentes. Pour xₙ = 2⁻ⁿ e₁ dans ℝⁿ, la série est absolument convergente puisque la série des normes est géométrique. Le critère de Cauchy appliqué aux sommes partielles est la méthode centrale pour démontrer une convergence de série dans un Banach.

### 8.2(b) Applications linéaires continues, norme d’une application linéaire continue

**À savoir.** Une application linéaire u : E → F entre espaces normés est continue si et seulement si elle est bornée sur la boule unité; cela équivaut à l’existence de C ≥ 0 tel que ∥u(x)∥F ≤ C∥x∥E pour tout x. Sa norme d’opérateur est ∥u∥ = sup{∥u(x)∥F : ∥x∥E ≤ 1}; c’est la meilleure constante dans cette inégalité. L’ensemble des applications linéaires continues de E vers F est noté L(E,F).

**Exemple / usage.** Pour une matrice A entre espaces de dimension finie, l’application x ↦ Ax est continue; calculer ou majorer sa norme revient à estimer sup∥x∥≤1∥Ax∥. Dans les preuves, la majoration linéaire de ∥u(x)∥ permet de contrôler les limites et les séries transformées par u.

### 8.2(c) Norme de la convergence uniforme. Espace des fonctions continues bornées sur un espace métrique, à valeurs dans un espace de Banach

**À savoir.** Si X est un espace métrique et F un Banach, l’espace Cᵇ(X,F) des fonctions continues bornées de X dans F est muni de la norme uniforme ∥f∥∞ = supₓ∈X ∥f(x)∥F. Converger pour cette norme signifie converger uniformément : supₓ ∥fₙ(x)−f(x)∥F → 0. Avec cette norme, Cᵇ(X,F) est complet lorsque F est complet.

**Exemple / usage.** Pour les fonctions continues sur [0,1], la norme uniforme mesure l’erreur maximale sur tout l’intervalle. Si fₙ(x)=xⁿ sur [0,1], les valeurs ponctuelles convergent vers une fonction discontinue en 1; la convergence n’est pas uniforme. Cet exemple rappelle qu’une limite uniforme de fonctions continues reste continue, alors qu’une limite simplement ponctuelle peut ne pas l’être.

### 8.2(d) Étude de la compacité de parties d’un espace vectoriel normé : théorème de Riesz, théorème d’Ascoli

**À savoir — Riesz et dimension.** Le théorème de Riesz sur les parties compactes en dimension infinie énonce que la boule unité fermée d’un espace normé est compacte si et seulement si l’espace est de dimension finie. Ainsi, une partie fermée et bornée n’est pas automatiquement compacte dans un espace normé de dimension infinie. (Ne pas confondre avec le théorème de représentation de Riesz, qui figure en 8.3(c).)

**À savoir — Ascoli.** Forme métrique usuelle du théorème d’Arzelà–Ascoli : si K est un espace métrique compact et E un espace métrique complet, une famille de fonctions continues K → E est relativement compacte pour la norme uniforme si elle est équicontinue et si, pour tout x ∈ K, l’ensemble des valeurs prises en x est relativement compact dans E. Réciproquement, la relative compacité uniforme entraîne ces propriétés. Pour E = ℝ ou ℂ, la relative compacité ponctuelle peut être remplacée par la bornitude ponctuelle. Si la famille considérée est en plus fermée dans C(K,E), la relative compacité permet de conclure à sa compacité.

**Exemple / usage.** Une famille de fonctions uniformément bornées et ayant un même module de continuité sur [0,1] satisfait les conditions d’équicontinuité et de compacité ponctuelle; Ascoli est alors un outil pour extraire une sous-suite convergeant uniformément. La seule bornitude d’une famille ne suffit pas.

> **Précision de périmètre.** Le programme officiel nomme le théorème d’Ascoli sans en détailler dans cet item les hypothèses ni choisir une formulation particulière. La version métrique ci-dessus est donnée comme formulation de travail usuelle, à confronter à celle du cours.

## 8.3 Espaces de Hilbert

### 8.3(a) Espaces préhilbertiens

**À savoir.** Un produit scalaire sur un espace vectoriel réel ou complexe est une forme sesquilinéaire (bilinéaire en réel), symétrique/hermitienne, positive et définie. Il induit la norme ∥x∥ = √⟨x,x⟩. L’inégalité de Cauchy–Schwarz donne |⟨x,y⟩| ≤ ∥x∥∥y∥. Un espace préhilbertien est un espace vectoriel muni d’un produit scalaire; s’il est complet pour la norme induite, c’est un espace de Hilbert. Deux vecteurs sont orthogonaux lorsque leur produit scalaire est nul.

**Exemple / usage.** Sur ℝⁿ, le produit scalaire usuel ⟨x,y⟩ = Σxᵢyᵢ induit la norme euclidienne. Pour prouver qu’une famille est orthogonale, on calcule ses produits scalaires deux à deux; la formule de Pythagore s’applique à une somme finie de vecteurs orthogonaux.

### 8.3(b) Projection sur un convexe fermé. Projection orthogonale sur un sous-espace vectoriel fermé

**À savoir — convexe fermé.** Dans un espace de Hilbert H, pour tout convexe fermé non vide C et tout x ∈ H, il existe un unique point p ∈ C minimisant ∥x−p∥. Il est caractérisé par ⟨x−p, z−p⟩ ≤ 0 pour tout z ∈ C, selon la convention réelle; en complexe, on prend la partie réelle. La projection P_C(x)=p est non expansive : ∥P_C(x)−P_C(y)∥ ≤ ∥x−y∥.

**À savoir — sous-espace fermé.** Si M est un sous-espace vectoriel fermé de H, chaque x s’écrit de manière unique x = p + q avec p ∈ M et q ∈ M⊥. Le vecteur p est la projection orthogonale de x sur M; il minimise la distance à M et vérifie ⟨x−p,m⟩ = 0 pour tout m ∈ M.

**Exemple / usage.** Dans ℝ², projeter (a,b) sur l’axe horizontal donne (a,0); le résidu (0,b) est orthogonal à l’axe. Pour une approximation par un sous-espace de dimension finie, la projection orthogonale fournit le meilleur approximant au sens de la norme hilbertienne.

### 8.3(c) Dual d’un espace de Hilbert, théorème de représentation de Riesz. Cas des espaces ℓ² et L². Bases hilbertiennes (dans le cas séparable). Exemples de bases de polynômes trigonométriques et de polynômes orthogonaux

**À savoir — dual et représentation de Riesz.** Le dual H′ est l’espace des formes linéaires continues sur H (complexes, avec la convention de linéarité choisie pour le produit scalaire). Le théorème de représentation de Riesz affirme que toute forme linéaire continue φ sur un espace de Hilbert H s’écrit de façon unique sous la forme φ(x)=⟨x,y⟩ ou φ(x)=⟨y,x⟩, selon la convention, pour un unique y ∈ H. De plus, ∥φ∥ = ∥y∥. À ne pas confondre avec le théorème de Riesz de compacité en 8.2(d).

**À savoir — ℓ² et L².** ℓ² est l’espace des suites scalaires x=(xₙ) telles que Σ|xₙ|² < ∞, muni du produit scalaire somme correspondant; c’est un espace de Hilbert. Pour un espace mesuré (Ω,𝒜,μ), L²(Ω,μ) est l’espace des classes de fonctions mesurables de carré intégrable, avec identification presque partout; son produit scalaire est l’intégrale de f\overline g (ou l’équivalent suivant la convention), et c’est un Hilbert. Ces exemples rendent concrètes les notions de complétude, orthogonalité, projection et représentation des formes linéaires.

**À savoir — bases hilbertiennes.** Une famille orthonormale est une base hilbertienne lorsqu’elle est totale : le sous-espace vectoriel qu’elle engendre est dense dans H. Dans un Hilbert séparable, il existe une base hilbertienne finie ou dénombrable. Pour une base orthonormale (eₙ), tout x se développe en série hilbertienne x = Σ⟨x,eₙ⟩eₙ, avec convergence en norme, et l’identité de Parseval donne ∥x∥² = Σ|⟨x,eₙ⟩|². La convention du produit scalaire détermine l’ordre des arguments dans les coefficients.

**Exemples / usage.** Dans ℓ², les vecteurs eₙ ayant un 1 à la n-ième place et 0 ailleurs forment une base hilbertienne. Dans L² périodique, la famille exponentielle e^{int} (ou la famille réelle des sinus, cosinus et constante, convenablement normalisés) est la base trigonométrique usuelle. Dans L²([-1,1]), les polynômes de Legendre orthogonaux, convenablement normalisés, fournissent l’exemple standard de base orthogonale complète. Les polynômes trigonométriques sont ceux des fréquences entières sur le cercle; le domaine et la mesure doivent donc être précisés lorsqu’on énonce ces exemples.

> **Précision de périmètre.** Le programme mentionne les bases hilbertiennes « dans le cas séparable » et donne comme exemples les polynômes trigonométriques et les polynômes orthogonaux, sans imposer dans l’intitulé une mesure, un intervalle ni une normalisation particuliers. Les exemples ci-dessus précisent des contextes usuels; ce sont les conventions et résultats retenus dans le cours qu’il faut maîtriser.

## Checklist de révision

Coche chaque item après l’avoir réellement travaillé, idéalement sans consulter la fiche.

### Compétences et définitions

- [ ] Je sais définir une distance, une boule, un ouvert, un fermé, la topologie induite et la topologie d’un produit fini, puis reconnaître les ouverts relatifs.
- [ ] Je sais définir convergence, valeur d’adhérence, adhérence, continuité, continuité séquentielle et homéomorphisme, et distinguer bijection continue et homéomorphisme.
- [ ] Je sais formuler la compacité par recouvrements ouverts et par suites dans un espace métrique, appliquer Heine–Borel dans ℝⁿ, et distinguer connexité, connexité par arcs et composantes.
- [ ] Je sais différencier Lipschitz, continuité uniforme et continuité simple; je sais donner les hypothèses du théorème de Heine et du théorème du point fixe.
- [ ] Je sais définir norme, équivalence de normes, Banach, convergence absolue, norme d’opérateur, norme uniforme et espace Cᵇ(X,F).
- [ ] Je sais définir produit scalaire, espace préhilbertien et Hilbert, orthogonalité, projection sur un convexe fermé, projection orthogonale et base hilbertienne.

### Énoncés, preuves et méthodes

- [ ] Je sais passer d’une propriété de continuité à sa formulation séquentielle dans les espaces métriques, et construire des suites pour tester fermeture ou adhérence.
- [ ] Je sais utiliser l’équivalence des définitions de compacité, extraire des sous-suites et justifier les hypothèses avant d’appliquer Heine–Borel ou Heine.
- [ ] Je sais établir qu’une application est Lipschitz ou uniformément continue par une majoration, et repérer pourquoi une continuité locale ne fournit pas une continuité uniforme sur un domaine non compact.
- [ ] Je sais vérifier la complétude du cadre, l’invariance du domaine et le facteur de contraction avant d’appliquer le théorème du point fixe; je sais écrire l’itération.
- [ ] Je sais calculer/majorer une norme d’opérateur et établir la complétude de Cᵇ(X,F) à partir de la complétude de F.
- [ ] Je sais distinguer convergence ponctuelle et uniforme, puis vérifier équicontinuité et compacité ponctuelle avant d’invoquer Ascoli.
- [ ] Je sais utiliser la caractérisation de la compacité de la boule unité en dimension finie, et ne pas appliquer « fermé et borné implique compact » en dimension infinie.
- [ ] Je sais reconnaître le théorème de Riesz pertinent (compacité ou représentation), écrire la propriété de meilleure approximation par projection et utiliser l’orthogonalité du résidu.
- [ ] Je sais vérifier qu’une famille orthonormale est totale dans l’exemple étudié, puis interpréter expansion hilbertienne et identité de Parseval.

### Calculs et exemples à refaire

- [ ] Je sais comparer ∥·∥₁, ∥·∥₂ et ∥·∥∞ sur ℝⁿ/ℂⁿ et calculer quelques distances dans un produit fini.
- [ ] Je sais décider si une série vectorielle est absolument convergente en étudiant Σ∥xₙ∥ dans un Banach.
- [ ] Je sais calculer une projection orthogonale dans ℝⁿ et déterminer un meilleur approximant dans un sous-espace simple.
- [ ] Je sais vérifier les exemples de bases de ℓ², trigonométriques et de polynômes orthogonaux dans les espaces et mesures annoncés.
- [ ] J’ai travaillé, pour chaque sous-item, des exercices de preuve, de contre-exemple et d’application; j’ai confronté mes méthodes à des annales.

## Exigences de maîtrise, lacunes et source

Cette fiche rassemble et développe les intitulés officiels du Titre 8, mais ne remplace ni l’apprentissage des preuves demandées par le cours, ni l’entraînement à choisir le bon théorème, vérifier chacune de ses hypothèses et construire des contre-exemples. Les énoncés d’Ascoli et les exemples de bases peuvent varier par convention ou cadre; le programme officiel ne fixe pas ces détails, signalés dans les passages concernés. La fiche ne prétend donc pas fournir les démonstrations ni garantir la couverture d’un développement plus précis que les items explicitement publiés.

**À compléter impérativement par le cours, des exercices corrigés et des annales** du concours, en particulier pour les preuves, les hypothèses exactes et les techniques de calcul.

Référence normative vérifiée : programme officiel de l’agrégation externe spéciale de mathématiques, session 2027, Titre 8, unités 8.1 à 8.3. [1]

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel de l’agrégation externe spéciale de mathématiques — session 2027"
