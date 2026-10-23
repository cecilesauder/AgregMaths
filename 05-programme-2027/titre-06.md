# Titre 6 — Analyse à une variable réelle

> **Statut : guide de révision, à travailler, ne remplace pas un cours.**
>
> Ce document organise les connaissances à réviser d’après le programme officiel de la session 2027. Il rappelle des définitions et des énoncés centraux et propose des usages-types ; ce n’est ni un cours démontré, ni une liste exhaustive de preuves ou d’exercices. Il doit être complété par des cours, des exercices et des annales.

## Périmètre officiel et corrections

Le périmètre traité ici est exactement le **titre 6, « Analyse à une variable réelle »**, §§ **6.1 à 6.5** : 6.1 Nombres réels ; 6.2 Séries numériques ; 6.3 Fonctions définies sur une partie de ℝ et à valeurs réelles, avec (a) Continuité et (b) Dérivabilité ; 6.4 Fonctions usuelles ; 6.5 Intégration, avec (a) Intégrale sur un segment des fonctions continues par morceaux et (b) Intégrales généralisées. Les intitulés et éléments de programme reproduits ci-dessous suivent le PDF officiel [1].

Deux corrections sont importantes pour bien délimiter le travail. **La convexité n’appartient pas aux §§ 6.1–6.5 :** elle figure séparément au § 6.7 (« Convexité »). Elle n’est donc pas développée ici. De même, les suites et séries de fonctions du § 6.6 sont hors périmètre. Enfin, le § 6.4 officiel énumère les familles de fonctions usuelles, mais ne détaille pas dans ce paragraphe leurs dérivées, propriétés ou développements. Les éléments de révision ci-dessous pour ces familles constituent un rappel de travail, pas une prétention à reproduire une sous-liste officielle qui n’existe pas dans le texte. Les développements limités sont explicitement mentionnés au § 6.3(b) [1].

Le programme officiel précise qu’il décrit des connaissances à maîtriser et à savoir illustrer, et non un plan de cours ; ses exemples éventuels sont indicatifs [1]. Les exemples de ce guide sont donc des points d’appui, non une couverture garantie de tout sujet possible.

## 6.1 — Nombres réels

**Intitulé et contenu officiel :** « Le corps ℝ des nombres réels. Topologie de ℝ. Sous-groupes additifs de ℝ. Suites de nombres réels : convergence, valeur d’adhérence. Suites récurrentes. Limites inférieure et supérieure. Suites de Cauchy. Complétude de ℝ. Théorème de Bolzano-Weierstrass. Parties compactes de ℝ. Parties connexes de ℝ. » [1]

### Notions et énoncés à maîtriser

- **Le corps ℝ et sa structure d’ordre.** Connaître les opérations, l’ordre compatible avec l’addition et la multiplication par un réel positif, la valeur absolue et la propriété fondamentale de la borne supérieure : toute partie non vide de ℝ majorée possède une borne supérieure. Cette propriété caractérise la complétude de l’ordre réel et intervient dans la construction des limites et des extrema.
- **Topologie de ℝ.** Pour ε > 0, la boule ouverte centrée en x est ]x−ε,x+ε[. Un ouvert est une partie qui contient un voisinage de chacun de ses points ; un fermé contient les limites de ses suites convergentes. Pour A ⊂ ℝ, un point x est adhérent à A si tout voisinage de x rencontre A ; l’adhérence est l’ensemble des points adhérents. Un point est intérieur s’il possède un voisinage inclus dans A. Savoir distinguer adhérence, intérieur, frontière et point isolé, et traduire ces notions par des suites.
- **Sous-groupes additifs de ℝ.** Un sous-groupe H vérifie 0 ∈ H et est stable par différence. Un résultat de classification utile : tout sous-groupe additif de ℝ non nul est soit dense dans ℝ, soit de la forme aℤ pour un a > 0. L’idée de preuve s’appuie sur l’infimum des éléments strictement positifs de H : s’il est positif, il est atteint et engendre H ; s’il vaut 0, H contient des éléments positifs arbitrairement petits et est dense. *Exemple :* ℚ est un sous-groupe additif dense, tandis que 3ℤ est discret.
- **Convergence et valeurs d’adhérence d’une suite.** xₙ → ℓ signifie : pour tout ε > 0, il existe N tel que n ≥ N entraîne |xₙ−ℓ| < ε. Une valeur d’adhérence est la limite d’une sous-suite. La convergence entraîne l’unicité de la limite et impose que toute sous-suite converge vers la même limite ; la réciproque générale est fausse. Une suite réelle converge si et seulement si elle est bornée et possède une unique valeur d’adhérence.
- **Suites récurrentes.** Pour xₙ₊₁ = f(xₙ), identifier l’intervalle stable, les points fixes, la monotonie éventuelle de la suite et son bornage. Si la suite converge vers ℓ et f est continue en ℓ, alors ℓ = f(ℓ). Cette équation est nécessaire, pas toujours suffisante pour prouver la convergence. *Exemple :* xₙ₊₁ = (xₙ+2)/(2) pour x₀ donné est une récurrence affine simple ; son étude se ramène à la différence avec le point fixe 2.
- **Limites inférieure et supérieure.** Pour une suite réelle bornée, lim sup xₙ = limₙ supₖ≥ₙ xₖ et lim inf xₙ = limₙ infₖ≥ₙ xₖ. Ce sont respectivement la plus grande et la plus petite valeur d’adhérence. Pour une suite non nécessairement bornée, les mêmes définitions se comprennent dans ℝ étendu, avec des valeurs ±∞ possibles. La suite converge vers ℓ dans ℝ si et seulement si lim inf = lim sup = ℓ. *Exemple :* pour xₙ = (−1)ⁿ, lim sup = 1 et lim inf = −1 ; la suite n’a pas de limite.
- **Suites de Cauchy et complétude.** (xₙ) est de Cauchy si, pour tout ε > 0, il existe N tel que m,n ≥ N entraîne |xₙ−xₘ| < ε. Toute suite convergente est de Cauchy ; dans ℝ, toute suite de Cauchy converge. En particulier, une suite de Cauchy réelle est bornée. Ne pas confondre ce résultat — qui dépend de la complétude — avec la seule convergence des suites monotones bornées.
- **Bolzano-Weierstrass.** Toute suite réelle bornée possède une sous-suite convergente. Réciproquement, une partie de ℝ est séquentiellement compacte si et seulement si elle est compacte. *Usage :* pour établir l’existence d’une valeur d’adhérence, ou raisonner par contradiction en extrayant une sous-suite convergente d’une suite bornée.
- **Parties compactes de ℝ.** Une partie K de ℝ est compacte si tout recouvrement ouvert de K admet un sous-recouvrement fini. Dans ℝ, les parties compactes sont exactement les parties fermées et bornées. Toute fonction continue sur un compact atteint son minimum et son maximum et y est uniformément continue. *Exemple :* [a,b] est compact si a ≤ b ; ]a,b[ ne l’est pas si a < b.
- **Parties connexes de ℝ.** Les parties connexes de ℝ sont exactement les intervalles (en incluant les intervalles réduits à un point et les intervalles non bornés). Une séparation en deux ouverts relatifs disjoints non vides est impossible dans un intervalle. *Exemple :* [0,1]∪[2,3] n’est pas connexe, tandis que ]0,1[ l’est.

**Exemple fil rouge.** Pour une suite définie par récurrence, commencer par prouver qu’elle reste dans un intervalle fermé borné invariant, puis montrer qu’elle est monotone ou étudier ses valeurs d’adhérence. La compacité fournit une sous-suite convergente ; la continuité de la fonction de récurrence force alors tout point d’adhérence à être fixe. Une étape supplémentaire (unicité du point fixe, ou monotonie de la suite) est nécessaire pour conclure à la convergence de toute la suite.

### Checklist — 6.1

- [ ] Je sais traduire les notions topologiques usuelles de ℝ en langage de voisinages et en suites.
- [ ] Je sais prouver la classification des sous-groupes additifs, ou utiliser correctement ses deux cas.
- [ ] Je distingue limite, valeur d’adhérence, lim inf et lim sup, et sais exploiter les suites extraites.
- [ ] Je vérifie stabilité, monotonie et bornitude avant de conclure sur une suite récurrente.
- [ ] Je sais reconnaître les suites de Cauchy et utiliser la complétude de ℝ au bon endroit.
- [ ] Je sais appliquer Bolzano-Weierstrass et caractériser les compacts et connexes de ℝ.
- [ ] J’ai fait des exercices de récurrence, de sous-suites et de contre-exemples à une réciproque erronée.

## 6.2 — Séries numériques

**Intitulé et contenu officiel :** « Convergence des séries à termes réels. Séries géométriques, séries de Riemann. Séries à termes positifs. Sommation des relations de comparaison. Comparaison d’une série et d’une intégrale. Estimations des restes. Convergence absolue. Produits de séries. Séries alternées. » [1]

### Notions et énoncés à maîtriser

- **Convergence d’une série réelle.** La série ∑uₙ converge lorsque la suite des sommes partielles S_N = ∑ₙ₌₀ᴺ uₙ possède une limite finie. Condition nécessaire : uₙ → 0, mais cette condition ne suffit pas. Les sommes partielles de Cauchy fournissent le critère de convergence dans ℝ. *Exemple :* la série harmonique ∑ₙ≥₁ 1/n diverge alors que son terme tend vers 0.
- **Séries géométriques et séries de Riemann.** ∑ₙ≥₀ qⁿ converge si et seulement si |q| < 1, et sa somme vaut 1/(1−q). Pour ∑ₙ≥₁ 1/nᵅ, convergence équivaut à α > 1. Pour les séries de Riemann alternées, analyser séparément les signes, le terme général et les critères adaptés ; ne pas appliquer le critère positif sans vérifier ses hypothèses.
- **Séries à termes positifs et comparaisons.** Si uₙ ≥ 0, les sommes partielles sont croissantes : la série converge si et seulement si elles sont bornées. Pour 0 ≤ uₙ ≤ vₙ à partir d’un certain rang, la convergence de ∑vₙ entraîne celle de ∑uₙ ; la divergence de ∑uₙ entraîne celle de ∑vₙ. Si uₙ/vₙ → c avec 0 < c < +∞ et les termes sont positifs à partir d’un certain rang, les deux séries sont de même nature. Si uₙ ~ vₙ avec termes positifs, elles sont de même nature. *Usage :* comparer un terme compliqué à n⁻ᵅ après en avoir établi un équivalent.
- **Sommation des relations de comparaison.** Savoir utiliser une comparaison terme à terme pour obtenir convergence/divergence et, lorsque pertinent, des bornes sur les queues. La sommation d’équivalents demande une prudence supplémentaire : pour des termes positifs, un équivalent permet notamment de comparer la nature, mais ne donne pas automatiquement une équivalence des sommes partielles dans toute situation. Toujours préciser si l’on étudie nature, somme partielle ou reste.
- **Comparaison série-intégrale.** Si f est positive et décroissante sur [1,+∞[, alors les rectangles encadrent les sommes : ∫₁ᴺ⁺¹ f(x) dx ≤ ∑ₙ₌₁ᴺ f(n) ≤ f(1)+∫₁ᴺ f(x) dx. Ces inégalités comparent aussi la convergence de ∑f(n) et de ∫₁∞ f(x)dx. *Exemple :* appliquer f(x)=x⁻ᵅ retrouve le seuil α=1.
- **Estimations des restes.** Pour une série positive convergente, R_N = ∑ₙ>N uₙ ≥ 0. Si uₙ=f(n) avec f positive décroissante intégrable, on a notamment ∫ₙ₊₁∞f(x)dx ≤ R_N ≤ ∫ₙ∞f(x)dx. Pour une série géométrique, calculer le reste exactement. Ne pas présenter une borne de reste sans expliciter l’indexation et l’hypothèse de décroissance.
- **Convergence absolue.** Si ∑|uₙ| converge, alors ∑uₙ converge, et toute réorganisation conserve la somme. La réciproque est fausse : une série peut converger sans être absolument convergente. Les critères de comparaison, quotient, racine ou rapport s’emploient avec leurs hypothèses et limites ; notamment le critère du rapport ne conclut pas lorsque la limite vaut 1.
- **Produits de séries.** Le produit de Cauchy de ∑aₙ et ∑bₙ a pour coefficients cₙ=∑ₖ₌₀ⁿaₖbₙ₋ₖ. Si les deux séries convergent absolument, le produit de Cauchy converge absolument et sa somme est le produit des sommes. Il existe aussi des résultats sous des hypothèses plus faibles, mais il faut les énoncer précisément ; ne pas multiplier formellement des séries conditionnellement convergentes sans justification. *Exemple :* le produit de Cauchy de deux séries géométriques de raison q, |q|<1, a pour coefficient (n+1)qⁿ.
- **Séries alternées.** Si uₙ ≥ 0, uₙ décroît à partir d’un certain rang et uₙ → 0, alors ∑(−1)ⁿuₙ converge. Le reste après arrêt est de signe celui du premier terme omis et son absolu est au plus ce terme. *Exemple :* ∑ₙ≥₁(−1)ⁿ⁺¹/n converge, mais pas absolument. La monotonie et la limite nulle sont des hypothèses essentielles du critère usuel.

### Checklist — 6.2

- [ ] Je sais relier convergence d’une série et convergence des sommes partielles, et reconnaître la condition nécessaire uₙ → 0.
- [ ] Je connais les seuils géométrique et Riemann et sais choisir un équivalent pertinent.
- [ ] Je sais appliquer les comparaisons en séparant clairement les cas positifs et les séries de signe quelconque.
- [ ] Je sais comparer une série à une intégrale et fournir une estimation justifiée du reste.
- [ ] Je distingue convergence absolue et convergence simple et connais l’effet d’une permutation dans le cas absolument convergent.
- [ ] Je sais énoncer les conditions d’un produit de Cauchy et les vérifier avant de multiplier.
- [ ] Je sais utiliser le critère des séries alternées et borner le reste.
- [ ] J’ai résolu des exercices mêlant équivalents, comparaison intégrale, critères de convergence et calcul de restes.

## 6.3 — Fonctions définies sur une partie de ℝ et à valeurs réelles

### 6.3(a) Continuité

**Intitulé officiel :** « Limites, continuité. Théorème des valeurs intermédiaires, image d’un segment. Étude de la continuité des fonctions monotones. Continuité d’une fonction réciproque. » [1]

### Notions et énoncés à maîtriser

- **Limites et continuité.** Pour f définie au voisinage de a, f(x) → ℓ quand x → a signifie : pour tout ε > 0, il existe δ > 0 tel que 0 < |x−a| < δ entraîne |f(x)−ℓ| < ε. f est continue en a si limₓ→a f(x)=f(a). Savoir étudier limites à droite/gauche, limites infinies et limites aux bornes du domaine, et utiliser les règles algébriques sous leurs conditions. *Exemple :* x↦(x²−1)/(x−1) n’est pas définie en 1, mais admet une limite 2 en 1 ; son prolongement par continuité prend la valeur 2.
- **Théorème des valeurs intermédiaires (TVI).** Si f est continue sur un intervalle I, toute valeur comprise entre f(a) et f(b), pour a,b∈I, est prise par f en un point compris entre a et b. En particulier, sur [a,b], si f(a)f(b)<0, f s’annule dans ]a,b[. Le TVI ne garantit pas l’unicité du point. *Usage :* établir l’existence d’une solution réelle d’une équation f(x)=c par un changement de signe.
- **Image d’un segment.** Si f est continue sur [a,b], elle y est bornée, atteint ses bornes et f([a,b]) est un segment [m,M]. Ce résultat rassemble compacité, continuité et TVI. Il ne s’applique pas tel quel à un intervalle ouvert ou à une fonction simplement continue sur une partie non compacte.
- **Continuité des fonctions monotones.** Une fonction monotone sur un intervalle admet des limites unilatérales en tout point intérieur ; ses discontinuités sont des sauts. Une fonction monotone n’est pas nécessairement continue. Pour une fonction monotone, les ensembles de points de discontinuité sont au plus dénombrables. Savoir calculer les limites latérales par les suprema et infima adaptés, et distinguer monotonie stricte et non stricte.
- **Continuité d’une fonction réciproque.** Si f est continue et strictement monotone sur un intervalle I, elle réalise une bijection de I sur l’intervalle f(I), et f⁻¹ est continue sur f(I). *Exemple :* x↦x³ est continue et strictement croissante sur ℝ ; sa réciproque x↦∛x est continue. Vérifier la bijectivité avant d’utiliser f⁻¹.

### Checklist — 6.3(a)

- [ ] Je sais rédiger une preuve ε–δ ou utiliser correctement une limite unilatérale.
- [ ] Je vérifie les hypothèses de continuité et de compacité avant d’appliquer le TVI ou le théorème d’image d’un segment.
- [ ] Je distingue existence d’une solution et unicité, et sais ajouter une hypothèse de stricte monotonie pour cette dernière.
- [ ] Je sais déterminer les limites latérales et les sauts possibles d’une fonction monotone.
- [ ] Je vérifie continuité et stricte monotonie avant de conclure à la continuité de la réciproque.
- [ ] J’ai traité des exercices d’existence de racines, de prolongement par continuité et d’étude d’inverses.

### 6.3(b) Dérivabilité

**Intitulé officiel :** « Dérivée en un point, fonctions dérivables. Dérivée d’une fonction composée. Dérivée d’une fonction réciproque. Théorèmes de Rolle et des accroissements finis. Étude des variations d’une fonction. Dérivées d’ordre supérieur. Applications de classe Cᵏ, de classe Cᵏ par morceaux. Formule de Leibniz. Formule de Taylor-Young, formule de Taylor avec reste intégral (Taylor-Laplace), formule de Taylor-Lagrange. Calcul de développements limités et de développements asymptotiques. » [1]

### Notions et énoncés à maîtriser

- **Dérivée en un point et fonctions dérivables.** f est dérivable en a si le quotient [f(a+h)−f(a)]/h tend vers une limite finie lorsque h→0 ; cette limite f′(a) est la pente de la tangente et la différentielle vaut h↦f′(a)h. La dérivabilité entraîne la continuité, mais la réciproque est fausse. *Exemple :* |x| est continue en 0 mais non dérivable en 0.
- **Dérivée d’une composée.** Si f est dérivable en a et g dérivable en f(a), alors g∘f est dérivable en a et (g∘f)′(a)=g′(f(a))f′(a). *Exemple :* dériver x↦sin(x²) donne 2x cos(x²).
- **Dérivée de la réciproque.** Si f est bijective entre des intervalles, dérivable au point x₀, et f′(x₀)≠0, alors la réciproque est dérivable en y₀=f(x₀) et (f⁻¹)′(y₀)=1/f′(x₀), sous les conditions locales assurant l’inversion. Si f′ s’annule, cette formule ne s’applique pas directement. *Exemple :* elle permet de calculer la dérivée de ln comme inverse de exp.
- **Rolle.** Si f est continue sur [a,b], dérivable sur ]a,b[, et f(a)=f(b), alors il existe c∈]a,b[ tel que f′(c)=0. Les conditions aux bornes et à l’intérieur ne sont pas interchangeables.
- **Théorème des accroissements finis (TAF).** Si f est continue sur [a,b] et dérivable sur ]a,b[, il existe c∈]a,b[ tel que f(b)−f(a)=f′(c)(b−a). En particulier, si |f′|≤M sur ]a,b[, alors |f(b)−f(a)|≤M|b−a|. *Usage :* établir une inégalité, une unicité ou une estimation de variation ; vérifier la continuité jusqu’aux bornes.
- **Variations.** Sur un intervalle, si f′≥0, f est croissante ; si f′≤0, elle est décroissante. Une dérivée strictement positive donne la stricte croissance. Une annulation isolée de f′ n’inverse pas nécessairement le sens de variation. Dresser un tableau demande le domaine, le signe de la dérivée, les points critiques et les limites pertinentes.
- **Dérivées d’ordre supérieur, classes Cᵏ et Cᵏ par morceaux.** f∈Cᵏ sur un intervalle signifie que ses dérivées jusqu’à l’ordre k existent et sont continues. « Cᵏ par morceaux » se comprend sur une partition finie en morceaux où les dérivées jusqu’à l’ordre k ont la régularité indiquée ; expliciter la convention locale utile et les points de raccord. Cette régularité n’équivaut pas à Cᵏ sur tout l’intervalle.
- **Formule de Leibniz.** Si f et g sont k fois dérivables, (fg)⁽ᵏ⁾=∑ⱼ₌₀ᵏ (k parmi j) f⁽ʲ⁾g⁽ᵏ⁻ʲ⁾. *Usage :* dériver un produit à un ordre élevé ou établir les coefficients d’un développement.
- **Taylor-Young.** Si f est n fois dérivable au voisinage approprié de a (une formulation usuelle suppose f∈Cⁿ près de a), alors f(a+h)=∑ₖ₌₀ⁿ f⁽ᵏ⁾(a)hᵏ/k! + o(hⁿ), lorsque h→0. Dans les formulations à régularité minimale, préciser les hypothèses exactes utilisées. C’est un développement local, sans contrôle uniforme automatique de l’erreur.
- **Taylor-Lagrange.** Si f∈Cⁿ sur [a,b] et f est n+1 fois dérivable sur ]a,b[ (version usuelle), il existe c entre a et b tel que f(b)=∑ₖ₌₀ⁿ f⁽ᵏ⁾(a)(b−a)ᵏ/k! + f⁽ⁿ⁺¹⁾(c)(b−a)ⁿ⁺¹/(n+1)!. Des variantes avec hypothèses adaptées existent ; il faut les énoncer au lieu de mélanger les versions.
- **Taylor avec reste intégral (Taylor-Laplace).** Si f∈Cⁿ⁺¹ sur [a,b], f(b)=∑ₖ₌₀ⁿ f⁽ᵏ⁾(a)(b−a)ᵏ/k! + (1/n!)∫ₐᵇ(b−t)ⁿf⁽ⁿ⁺¹⁾(t)dt. Cette expression exige la régularité et l’intégrabilité correspondantes ; elle donne souvent un contrôle du reste via une borne sur f⁽ⁿ⁺¹⁾.
- **Développements limités et asymptotiques.** Un DL à l’ordre n en a écrit f(a+h)=Pₙ(h)+o(hⁿ) ; savoir sommer, multiplier, composer lorsque les ordres et les termes dominants le permettent, puis en déduire limites, équivalents et positions relatives. Un équivalent f~g signifie f/g→1 avec quotient défini près du point considéré. On ne peut pas toujours substituer des équivalents dans une différence : les annulations peuvent imposer un développement à un ordre supérieur. *Exemple :* sin x = x−x³/6+o(x³) lorsque x→0, donc sin x~x.

**Méthode d’étude.** Pour une fonction, fixer d’abord son domaine et ses limites, établir sa continuité et sa dérivabilité sur les intervalles concernés, puis calculer le signe de f′. Pour une approximation, choisir le théorème de Taylor selon le but : Taylor-Young pour un DL local, Lagrange pour une borne via une dérivée, reste intégral si l’intégrale du reste est utile. Ne pas annoncer une précision d’erreur supérieure à la régularité disponible.

### Checklist — 6.3(b)

- [ ] Je sais définir la dérivée comme limite du taux d’accroissement, et citer un exemple continu non dérivable.
- [ ] Je sais appliquer les règles de composition et de réciproque en vérifiant les hypothèses.
- [ ] Je connais les hypothèses exactes de Rolle et du TAF et sais les utiliser dans une preuve.
- [ ] Je sais déduire les variations du signe de la dérivée et construire un tableau d’étude cohérent.
- [ ] Je maîtrise les notations Cᵏ et Cᵏ par morceaux ainsi que la formule de Leibniz.
- [ ] Je distingue Taylor-Young, Taylor-Lagrange et Taylor avec reste intégral par leurs hypothèses et leurs formes de reste.
- [ ] Je sais calculer un DL, en déduire un équivalent ou une limite, et éviter les substitutions invalides dans une différence.
- [ ] J’ai rédigé des exercices de justification d’inégalité par le TAF et de contrôle d’un reste de Taylor.

## 6.4 — Fonctions usuelles

**Intitulé et contenu officiel :** « Fonctions polynômes, fonctions rationnelles. Logarithmes. Exponentielles. Fonctions puissances. Fonctions circulaires et hyperboliques. Fonctions circulaires et hyperboliques réciproques. » [1]

Le texte officiel donne ici une **liste de familles**, sans décomposer leurs propriétés en sous-items. Il ne spécifie pas dans le § 6.4 une liste d’identités, de dérivées ou de développements à réciter. Il faut néanmoins savoir travailler ces fonctions en cohérence avec les exigences générales des §§ 6.3 et 6.5 ; les rappels ci-après sont des repères de révision, et non une transcription exhaustive d’exigences additionnelles.

### Repères de révision pour chaque famille nommée

- **Fonctions polynômes et rationnelles.** Connaître l’évaluation, la factorisation pertinente, les dérivées usuelles et les zéros/pôles. Une fonction rationnelle P/Q est définie là où Q≠0 ; ses limites aux zéros du dénominateur et à l’infini exigent l’étude du quotient. *Exemple :* x/(x−1) est définie sur ℝ\{1} et a une asymptote verticale en x=1.
- **Logarithmes.** ln est défini sur ]0,+∞[, strictement croissant, dérivable, de dérivée 1/x et réciproque de exp. Identités : ln(ab)=ln a+ln b pour a,b>0, et ln(aᵣ)=r ln a pour les puissances réelles positives. *Usage :* transformer un produit positif ou une puissance en somme pour étudier une limite ou résoudre une équation.
- **Exponentielles.** exp est définie sur ℝ, strictement positive, croissante, dérivable et égale à sa propre dérivée ; exp(x+y)=exp(x)exp(y). Elle est réciproque de ln. *Exemple :* l’équation eˣ=c possède une solution réelle unique exactement si c>0.
- **Fonctions puissances.** La fonction x↦xᵅ a un domaine réel qui dépend de α et de la convention de définition ; pour tout α∈ℝ, la définition xᵅ=exp(α ln x) s’applique à x>0. Sa dérivée est αxᵅ⁻¹ pour x>0. Pour des exposants entiers ou rationnels, les extensions au domaine réel peuvent différer : annoncer le domaine et la convention avant de dériver. *Piège-exemple :* x¹ᐟ² ne se définit pas comme fonction réelle sur les x négatifs.
- **Fonctions circulaires et hyperboliques.** Savoir utiliser domaines, périodes et parités des fonctions trigonométriques, leurs identités fondamentales (par exemple cos²x+sin²x=1), ainsi que les définitions cosh x=(eˣ+e⁻ˣ)/2 et sinh x=(eˣ−e⁻ˣ)/2 et l’identité cosh²x−sinh²x=1. Vérifier les intervalles de restriction quand une fonction périodique est inversée. *Exemple :* résoudre sin x=c demande |c|≤1 et, pour une solution unique, une restriction d’intervalle.
- **Fonctions circulaires et hyperboliques réciproques.** Préciser leurs domaines et images, qui dépendent de la branche retenue. Parmi les identités de référence : arctan′x=1/(1+x²) ; arsinh′x=1/√(1+x²) ; arcosh est défini pour x≥1, et sa dérivée usuelle pour x>1 vaut 1/√(x²−1). Les fonctions inverses trigonométriques ne sont réciproques qu’après restriction de la fonction initiale à un intervalle où elle est bijective. *Usage :* interpréter une primitive comme une fonction réciproque et contrôler son domaine.

**Lien avec les développements.** Le § 6.3(b) exige le calcul de développements limités et asymptotiques, mais le § 6.4 ne donne pas de catalogue. Les développements classiques près de 0 (par exemple ceux de exp, sin, cos, ln(1+x) dans leurs domaines) sont à travailler à partir des théorèmes et hypothèses du cours ; ne pas attribuer au PDF une liste ou un ordre qu’il n’énonce pas.

### Checklist — 6.4

- [ ] Je sais fixer le domaine réel exact des polynômes, fractions rationnelles et puissances avant tout calcul.
- [ ] Je sais utiliser les propriétés différentielles et algébriques de ln et exp sans oublier les conditions de positivité.
- [ ] Je connais les identités trigonométriques et hyperboliques utiles et les domaines des fonctions réciproques.
- [ ] Je sais justifier le choix d’une branche avant de résoudre une équation trigonométrique ou d’inverser une fonction.
- [ ] Je sais obtenir un développement des fonctions usuelles avec un théorème de Taylor et préciser le point et l’ordre.
- [ ] J’ai fait des exercices de limites, dérivées, équations et primitives mettant en jeu plusieurs familles usuelles.

## 6.5 — Intégration

### 6.5(a) Intégrale sur un segment des fonctions continues par morceaux

**Intitulé officiel :** « Calcul de primitives. Sommes de Riemann. Primitives d’une fonction continue. Méthodes usuelles de calcul d’intégrales. Changement de variable. Intégration par parties. » Le sous-titre officiel est « Intégrale sur un segment des fonctions continues par morceaux ». [1]

### Notions et énoncés à maîtriser

- **Intégrale sur un segment et intégrabilité.** Une fonction continue par morceaux sur [a,b] est intégrable au sens de Riemann. Elle est bornée et possède un nombre fini de morceaux de continuité dans la définition usuelle. L’intégrale est linéaire, additive par rapport aux intervalles et positive : si f≤g, alors ∫ₐᵇf≤∫ₐᵇg. Pour a>b, ∫ₐᵇf=−∫ᵦᵃf. Si |f|≤M, alors |∫ₐᵇf|≤M(b−a). *Exemple :* une fonction en escalier est continue par morceaux, même si elle a des sauts.
- **Sommes de Riemann.** Pour f continue sur [a,b], des sommes de Riemann à maillage tendant vers zéro convergent vers ∫ₐᵇf. Sur un découpage régulier, (b−a)/n∑ₖ₌₀ⁿ⁻¹f(a+k(b−a)/n) → ∫ₐᵇf. La continuité assure ici le résultat ; pour une fonction intégrable plus générale, il faut préciser la version utilisée. *Usage :* convertir une limite de sommes en intégrale.
- **Primitives et théorème fondamental.** Une primitive F de f sur un intervalle vérifie F′=f. Toute fonction continue f possède une primitive, et x↦∫ₐˣf(t)dt est une primitive. Si F′=f et f est continue sur [a,b], alors ∫ₐᵇf(x)dx=F(b)−F(a). Deux primitives sur un intervalle connexe diffèrent d’une constante. *Exemple :* ∫₀¹2x dx = [x²]₀¹=1.
- **Méthodes usuelles de calcul.** Savoir reconnaître des dérivées composées, utiliser les symétries, décomposer en éléments simples quand cela convient, et contrôler la validité de l’intervalle et des singularités. Le calcul d’une primitive ne dispense pas de vérifier les bornes et le domaine.
- **Changement de variable.** Si φ est C¹ sur [α,β] et f est continue sur l’image pertinente, alors ∫_{φ(α)}^{φ(β)}f(x)dx=∫_α^β f(φ(t))φ′(t)dt ; une formulation par substitution dans ∫ₐᵇf(x)dx demande une paramétrisation adaptée des bornes. *Exemple :* dans ∫₀¹2x cos(x²)dx, poser u=x² donne ∫₀¹cos u du. Suivre les bornes transformées et le facteur φ′.
- **Intégration par parties.** Pour u,v∈C¹([a,b]), ∫ₐᵇu(x)v′(x)dx=[u(x)v(x)]ₐᵇ−∫ₐᵇu′(x)v(x)dx. *Usage :* déplacer une dérivée, notamment dans une intégrale logarithmique ou un produit polynôme-exponentielle. Garder le terme de bord, qui est souvent déterminant.

### Checklist — 6.5(a)

- [ ] Je sais identifier les fonctions continues par morceaux et utiliser les propriétés de l’intégrale de Riemann.
- [ ] Je sais reconnaître une limite de sommes de Riemann et expliciter le maillage.
- [ ] Je distingue primitive et intégrale définie et applique correctement le théorème fondamental.
- [ ] Je sais calculer des primitives et choisir une méthode adaptée, sans oublier domaine et singularités.
- [ ] Je sais réaliser un changement de variable en transformant bornes et différentielle.
- [ ] Je sais faire une intégration par parties avec ses hypothèses et ses termes de bord.
- [ ] J’ai résolu des exercices où il faut justifier l’intégrabilité avant de calculer.

### 6.5(b) Intégrales généralisées

**Intitulé officiel :** « Intégrales absolument convergentes. Intégration des relations de comparaison. Intégrales semi-convergentes. » [1]

### Notions et énoncés à maîtriser

- **Définition et convergence.** Une intégrale généralisée apparaît lorsqu’une borne est infinie ou que l’intégrande est non borné près d’un bord ou d’un point singulier. Par exemple, ∫ₐ∞f est définie comme lim_{R→∞}∫ₐᴿf si cette limite finie existe ; une singularité en c requiert une limite unilatérale et, si c est intérieur, la convergence des deux intégrales séparées. Il faut contrôler chaque extrémité séparément. *Exemple :* ∫₀¹x⁻ᵅdx converge si et seulement si α<1 ; ∫₁∞x⁻ᵅdx converge si et seulement si α>1.
- **Convergence absolue.** Si ∫_I|f| converge, alors ∫_I f converge. Une intégrale qui converge sans que l’intégrale de |f| converge est dite semi-convergente ou conditionnellement convergente. Pour une fonction de signe quelconque, ne pas comparer directement les intégrales sans valeur absolue ou hypothèse de signe.
- **Intégration des relations de comparaison.** Si 0≤f≤g près d’une borne impropre et ∫g converge, alors ∫f converge ; si ∫f diverge, alors ∫g diverge. Si f/g tend vers une constante strictement positive finie dans le cadre où les fonctions sont positives, les deux intégrales ont même nature. Il est souvent utile d’établir f(x)~g(x) puis de comparer au modèle x⁻ᵅ. Les conditions de signe et de comportement « près de la borne » sont indispensables.
- **Intégrales semi-convergentes.** L’exemple de référence ∫₁∞ sin(x)/x dx converge, mais ∫₁∞|sin(x)/x|dx diverge. La convergence peut se démontrer par un critère de Dirichlet (primitive bornée de sin et facteur 1/x décroissant vers 0). Cet exemple montre pourquoi une comparaison absolue ou un critère pour fonctions positives ne suffit pas.

**Méthode de décision.** Repérer d’abord toutes les bornes impropres et singularités intérieures. Séparer l’intégrale en morceaux, étudier chaque limite indépendamment, tester l’absolue convergence en premier, puis n’employer une comparaison qu’après avoir fixé le signe et établi un modèle asymptotique. Une valeur principale ou une compensation entre deux singularités ne remplace pas la convergence ordinaire des intégrales unilatérales.

### Checklist — 6.5(b)

- [ ] Je sais écrire la définition par limite d’une intégrale généralisée et traiter séparément les singularités.
- [ ] Je connais les seuils d’intégrabilité de x⁻ᵅ en 0 et à l’infini.
- [ ] Je sais prouver la convergence absolue et en déduire la convergence de l’intégrale signée.
- [ ] Je vérifie signe, domination ou équivalence avant d’appliquer un critère de comparaison.
- [ ] Je distingue convergence absolue, divergence et semi-convergence ; je connais un exemple conditionnel et sa méthode de preuve.
- [ ] J’ai fait des exercices où plusieurs bornes impropres doivent être examinées séparément.

## Lacunes à combler et niveau de maîtrise attendu

Ce guide rappelle les définitions, résultats classiques et méthodes de base correspondant aux intitulés identifiés. Il n’en donne pas toutes les démonstrations, ne détaille pas tous les cas techniques possibles et ne garantit pas qu’il épuise toutes les façons dont les notions peuvent être mobilisées aux épreuves. Certaines formulations de théorèmes ont plusieurs variantes : apprendre dans le cours une version précise, avec ses hypothèses exactes, puis s’y tenir dans une preuve. Cela concerne en particulier les versions de Taylor, les produits de séries, les fonctions Cᵏ par morceaux et les changements de variable.

Pour chaque résultat, l’objectif est de savoir **énoncer les hypothèses, reconnaître quand elles sont satisfaites, appliquer le résultat, justifier les étapes et construire un exemple ou un contre-exemple**. Le programme officiel demande des connaissances maîtrisées et illustrées ; une checklist cochée ne remplace ni la résolution autonome d’exercices ni l’entraînement aux annales. Il faut donc compléter ce support par un cours complet, des exercices progressifs et des annales corrigées ou travaillées en conditions d’épreuve.

### Checklist transversale de préparation

- [ ] Je sais exposer les hypothèses avant de citer un théorème, et nommer exactement la conclusion obtenue.
- [ ] Je sais choisir un contre-exemple lorsqu’une réciproque ou une hypothèse manque.
- [ ] Je sais alterner preuves, calculs de limites, études de signe, développements limités et intégrales sans sauter les questions de domaine.
- [ ] Je peux illustrer chaque grande notion par un exemple et dire pourquoi les hypothèses d’un énoncé sont satisfaites.
- [ ] J’ai repris en cours les variantes de théorèmes et les points signalés comme réserves dans ce guide.
- [ ] J’ai travaillé des exercices puis des annales ; je peux refaire les méthodes sans consulter la correction.

## Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel de l’agrégation externe spéciale de mathématiques, session 2027, pages 3–4"
