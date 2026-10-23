# Titre 3 — Anneaux, corps et polynômes

> **Statut : guide de révision, à travailler, ne remplace pas un cours.**
>
> Ce document reprend les six sous-parties (a) à (f) du Titre 3 du programme officiel de l’agrégation externe spéciale de mathématiques, session 2027. Il donne un itinéraire de révision, rappelle des définitions et résultats centraux, et propose des usages pour s’entraîner. Le programme officiel énumère des thèmes, mais ne fixe pas dans ce passage le niveau de détail de chaque démonstration ni une liste exhaustive de résultats : les rappels ci-dessous ne prétendent donc ni remplacer les démonstrations du cours ni épuiser le sujet. [1]

## (a) Anneaux, morphismes, sous-anneaux, idéaux et quotients

**Intitulé officiel :** « Anneaux (unitaires), morphisme d’anneaux, sous-anneaux. L’anneau Z des entiers relatifs. Produit d’anneaux. Idéaux d’un anneau commutatif, anneaux quotients, idéaux premiers, idéaux maximaux. Théorème chinois. Notion d’algèbre associative sur un anneau commutatif. » [1]

### Notions à savoir

Un **anneau unitaire** est un ensemble muni d’une addition qui en fait un groupe abélien, d’une multiplication associative distributive sur l’addition, et d’un élément unité multiplicatif. Sauf précision, vérifier si la convention du cours impose aux anneaux d’être commutatifs. Ici, l’intitulé réserve explicitement les idéaux aux anneaux commutatifs. Un **morphisme d’anneaux** préserve addition et multiplication; dans la convention unitaire usuelle, il envoie aussi 1 sur 1. Son noyau est un idéal et son image est un sous-anneau. Un **sous-anneau** est stable par addition, opposé et multiplication et contient l’unité lorsque la convention l’exige.

Connaître l’anneau **Z**, ses unités (1 et −1), ses sous-anneaux et les morphismes qui le font intervenir. Pour des anneaux A et B, leur **produit** A × B porte les opérations composante par composante; ses projections sont des morphismes.

Dans un anneau commutatif A, un **idéal** I est un sous-groupe additif tel que a x ∈ I pour tous a ∈ A et x ∈ I. Le quotient A/I est un anneau. Le théorème d’isomorphisme donne A/ker(f) ≅ im(f) pour un morphisme f. Un idéal premier est un idéal propre p tel que xy ∈ p entraîne x ∈ p ou y ∈ p; un idéal maximal est un idéal propre maximal pour l’inclusion. Les tests à retenir sont : p premier si et seulement si A/p est intègre; m maximal si et seulement si A/m est un corps. Un idéal maximal est premier, mais la réciproque n’est pas toujours vraie.

Le **théorème chinois** : si I₁,…,Iᵣ sont des idéaux deux à deux comaximaux d’un anneau commutatif unitaire A, alors l’application naturelle A/(I₁⋯Iᵣ) → ∏ A/Iᵢ est un isomorphisme. Dans ce cas, l’intersection des idéaux est aussi leur produit. Bien distinguer l’hypothèse « deux à deux comaximaux » de la seule distinction des idéaux.

Une **A-algèbre associative** est un A-module doté d’une multiplication A-bilinéaire et associative compatible avec l’action de A; l’existence d’une unité dépend de la convention ou de la précision donnée. Les matrices carrées sur A en sont un exemple, généralement non commutatif.

### Résultats, méthode et exemple

Pour n,m ≥ 1, les idéaux nZ et mZ sont comaximaux exactement lorsque pgcd(n,m)=1. Le chinois donne alors Z/(nm)Z ≅ Z/nZ × Z/mZ. Par exemple, résoudre x ≡ 2 (mod 3), x ≡ 3 (mod 5) revient à déterminer une classe modulo 15; x ≡ 8 convient. Usage : transformer un système de congruences indépendantes en une congruence modulo le produit.

Pour décider si un idéal est premier ou maximal, passer au quotient est souvent plus simple que manipuler directement tous ses éléments. Par exemple, (p) est maximal dans Z lorsque p est premier, car Z/pZ est un corps. Pour pratiquer, calculer noyau et image d’un morphisme explicite, puis identifier le quotient par le premier théorème d’isomorphisme.

## (b) Polynômes univariés et multivariés

**Intitulé officiel :** « Algèbre des polynômes à une ou plusieurs indéterminées sur un anneau commutatif. Racines d’un polynôme, multiplicité. Relations entre les coefficients et les racines d’un polynôme scindé. Sommes de Newton. Polynôme dérivé. Formule de Taylor (en caractéristique nulle). Décomposition en somme de polynômes homogènes. Polynômes symétriques. » [1]

### Notions à savoir

Pour un anneau commutatif A, A[X] et A[X₁,…,Xₙ] sont les anneaux de polynômes correspondants. Un polynôme univarié est **scindé** sur A si sa factorisation en facteurs linéaires y est disponible. Sur un corps K, a est une racine de P si P(a)=0; la multiplicité de a est le plus grand entier m tel que (X−a)^m divise P. Elle vaut au moins m lorsque P(a)=P′(a)=…=P⁽ᵐ⁻¹⁾(a)=0, et égale m si P⁽ᵐ⁾(a)≠0 en caractéristique nulle. En caractéristique positive, les dérivées peuvent ne pas détecter toute la multiplicité; la définition par divisibilité reste sûre.

Pour un polynôme scindé de degré n, les **relations de Viète** relient les coefficients aux fonctions symétriques élémentaires des racines, avec les signes alternés. Si P(X)=∏ᵢ(X−rᵢ), alors le coefficient de Xⁿ⁻ᵏ vaut (−1)ᵏ fois la somme des produits des rᵢ pris k à la fois.

Les **sommes de Newton** relient les sommes de puissances sₖ=∑ᵢ rᵢᵏ aux coefficients. Pour P(X)=Xⁿ+c₁Xⁿ⁻¹+⋯+cₙ, une forme usuelle est, pour 1≤k≤n,

sₖ+c₁sₖ₋₁+⋯+cₖ₋₁s₁+k cₖ=0,

et pour k>n, sₖ+c₁sₖ₋₁+⋯+cₙsₖ₋ₙ=0. Ces identités permettent de calculer les sommes de puissances sans déterminer chaque racine.

La **dérivée formelle** de P=∑ aᵢXⁱ est P′=∑_{i≥1} i aᵢXⁱ⁻¹. Elle satisfait les règles de somme et de produit. En caractéristique nulle, pour K un corps, la formule de Taylor s’écrit P(X+H)=∑ₖ P⁽ᵏ⁾(X)Hᵏ/k!; elle sert à développer autour d’un point et à caractériser les multiplicités. Ne pas transposer sans précaution les divisions par k! à un anneau où elles ne sont pas inversibles.

Un polynôme multivarié est **homogène de degré d** si chacun de ses monômes non nul a degré total d. Tout polynôme se décompose de manière unique en somme de ses composantes homogènes par degré. Un polynôme est **symétrique** si sa valeur ne change pas sous permutation des variables. À connaître notamment : les fonctions symétriques élémentaires et le fait que, sur un anneau commutatif, tout polynôme symétrique s’exprime comme un polynôme en celles-ci.

### Résultats, méthode et exemple

Pour P(X)=X³−6X²+11X−6=(X−1)(X−2)(X−3), Viète donne somme des racines 6, somme des produits deux à deux 11 et produit 6. Newton donne par exemple s₁=6 et s₂=6²−2·11=14. Usage : retrouver des sommes de puissances à partir des coefficients.

Exemples multivariés : X²+XY+Y² est homogène de degré 2 et symétrique en X,Y; X²+Y n’est pas homogène. S’entraîner à trier les termes par degré, à vérifier l’invariance par permutation, à calculer les dérivées formelles et à développer P(a+H) dans un corps de caractéristique nulle.

## (c) Corps, caractéristique et extensions

**Intitulé officiel :** « Corps, sous-corps. Caractéristique, morphisme de Frobenius. Extension de corps. Corps des fractions d’un anneau intègre. Le corps Q des nombres rationnels. Le corps R des nombres réels. Le corps C des nombres complexes. Théorème de d’Alembert-Gauss. Éléments algébriques et transcendants. Extensions algébriques. Corps algébriquement clos. Corps de rupture et corps de décomposition. Corps finis. » [1]

### Notions à savoir

Un **corps** est un anneau commutatif unitaire non nul où tout élément non nul est inversible. Un sous-corps contient 0 et 1 et est stable par les opérations de corps. La **caractéristique** d’un corps est le plus petit entier positif p tel que p·1=0, s’il existe, et vaut 0 sinon. La caractéristique d’un corps est 0 ou un nombre premier.

En caractéristique p>0, le **Frobenius** F(x)=xᵖ est un morphisme d’anneaux commutatifs, grâce à la divisibilité par p des coefficients binomiaux intermédiaires. Dans un corps, il est injectif; il est un automorphisme si le corps est fini. Il n’est pas automatiquement surjectif dans tout corps infini.

Une **extension** L/K est un corps L contenant K. Sa dimension comme espace vectoriel sur K est son degré [L:K] lorsqu’elle est finie. Pour un anneau intègre A, son **corps des fractions** Frac(A) contient A et consiste en fractions a/b avec b≠0; les fractions sont identifiées par ad=bc. Les exemples fondamentaux sont Frac(Z)=Q, puis les inclusions Q⊂R⊂C.

Un élément α d’une extension de K est **algébrique sur K** s’il annule un polynôme non nul de K[X]; sinon il est transcendant. Une extension est algébrique lorsque chacun de ses éléments l’est. Un corps est **algébriquement clos** si tout polynôme non constant y possède une racine, donc s’y scinde par itération. Toute extension algébrique finie est de degré fini; l’inverse (tout élément d’une extension finie est algébrique) est également à retenir. Le théorème de d’Alembert-Gauss affirme que tout polynôme non constant de C[X] possède une racine complexe; en particulier, C est algébriquement clos. Il n’affirme pas que tout polynôme de R[X] se scinde en facteurs linéaires réels.

Un **corps de rupture** d’un polynôme irréductible P∈K[X] est une extension engendrée par une racine de P, typiquement K[X]/(P). Un **corps de décomposition** est une extension où P se scinde et qui est engendrée par ses racines; il est unique à isomorphisme près sur K. Un **corps fini** a un nombre q=pⁿ d’éléments pour un premier p; pour chaque puissance pⁿ, il existe à isomorphisme près un corps fini à pⁿ éléments.

### Résultats, méthode et exemple

Le polynôme X²−2 est irréductible sur Q et son adjonction d’une racine donne Q(√2), de degré 2 sur Q. √2 est algébrique sur Q; π est un exemple de nombre transcendant sur Q. Pour un polynôme P irréductible, le quotient K[X]/(P) est un corps et la classe de X y est une racine de P : c’est la construction concrète d’un corps de rupture. Usage : construire le plus petit corps contenant une racine plutôt que supposer qu’elle existe déjà dans K.

Pour les corps finis, Fₚ=Z/pZ lorsque p est premier; dans Fₚ, le Frobenius est l’identité. Dans un corps fini F_q, le groupe multiplicatif des éléments non nuls est cyclique d’ordre q−1. Ces faits aident à calculer des puissances et à étudier les racines de polynômes. Vérifier toujours le corps de base avant de parler d’irréductibilité ou d’une racine.

## (d) Divisibilité, factorisation, anneaux euclidiens et polynômes irréductibles

**Intitulé officiel :** « Divisibilité dans les anneaux commutatifs intègres. Éléments irréductibles, éléments inversibles, éléments premiers entre eux. Anneaux factoriels. Plus grand diviseur commun, plus petit multiple commun. Factorialité de A[X] quand A est un anneau factoriel. Anneaux principaux. Théorème de Bézout. Anneaux euclidiens. Algorithme d’Euclide. Cas de l’anneau Z et de l’algèbre K[X] des polynômes sur le corps K. Polynômes irréductibles. Exemples : polynômes cyclotomiques dans Q[X], critère d’Eisenstein. » [1]

### Notions à savoir

Dans un anneau commutatif intègre A, a divise b s’il existe c∈A tel que b=ac. Les **unités** sont les éléments inversibles. Deux éléments associés diffèrent par un facteur unité. Un élément non nul et non unité est **irréductible** s’il ne se factorise qu’en produit d’une unité et d’un associé; il est **premier** s’il divise ab seulement en divisant a ou b. « Premiers entre eux » signifie que les diviseurs communs sont des unités, ou, dans un anneau où le PGCD existe, que leur PGCD est une unité. Dans un anneau factoriel, irréductibles et éléments premiers coïncident.

Un **anneau factoriel** est un anneau intègre où tout élément non nul non unité se décompose en irréductibles, de façon unique à l’ordre et aux associés près. Le **PGCD** est un diviseur commun qui est multiple de tout diviseur commun; le **PPCM** est défini de manière duale. Dans un anneau factoriel, ils existent et sont déterminés à multiplication par une unité près. Un **anneau principal** est un anneau intègre dont chaque idéal est engendré par un seul élément. Dans un tel anneau, un idéal engendré par a,b est engendré par un PGCD; on obtient l’identité de **Bézout** ua+vb=d pour un PGCD d.

Un anneau intègre est **euclidien** s’il possède une fonction euclidienne permettant, pour a et b≠0, d’écrire a=bq+r avec r=0 ou un reste strictement plus petit que b. Un anneau euclidien est principal, et donc factoriel. L’algorithme d’Euclide calcule un PGCD; en remontant les divisions, il fournit les coefficients de Bézout.

Z est euclidien pour la valeur absolue; ses unités sont ±1. Pour un corps K, K[X] est euclidien pour le degré; ses unités sont les polynômes constants non nuls. Le lemme de Gauss implique que si A est factoriel, A[X] est factoriel. La qualification du corps de base compte : la factorisation peut changer quand on étend K.

Les polynômes **cyclotomiques** Φₙ∈Z[X] ont pour racines les racines complexes primitives n-ièmes de l’unité; Φₙ est irréductible sur Q. Le **critère d’Eisenstein** : si un premier p divise tous les coefficients sauf le coefficient dominant, ne divise pas celui-ci et si p² ne divise pas le terme constant, alors un polynôme primitif de Z[X] est irréductible sur Q[X]. La forme usuelle s’applique après extraction du contenu lorsque le polynôme initial n’est pas primitif.

### Résultats, méthode et exemple

Dans Z, l’algorithme d’Euclide donne pgcd(252,198)=18 et la remontée des divisions produit une combinaison linéaire 18=4·252−5·198. L’identité montre le rôle de Bézout et aide à prouver qu’une classe possède un inverse modulo n lorsque son représentant est premier avec n.

Exemple d’Eisenstein : X⁵−2 est irréductible dans Q[X] avec p=2. Exemple cyclotomique : Φ₃(X)=X²+X+1 est irréductible sur Q, bien qu’il n’ait pas de racine rationnelle. Pour une division dans K[X], appliquer la division euclidienne puis vérifier que le reste a degré strictement inférieur au diviseur. Exercices utiles : calculer PGCD/PPCM et Bézout dans Z et K[X], factoriser sur des corps différents, et tester toutes les hypothèses du critère avant de conclure.

## (e) Congruences, nombres premiers et anneaux Z/nZ

**Intitulé officiel :** « Congruences dans Z. Nombres premiers. Étude de l’anneau Z/nZ et de ses éléments inversibles, fonction indicatrice d’Euler. » [1]

### Notions à savoir

Pour n≥1, a≡b (mod n) signifie n|(a−b). Cette relation est compatible avec l’addition et la multiplication; les classes forment l’anneau quotient Z/nZ. Ses unités sont exactement les classes ā telles que pgcd(a,n)=1. Il en découle que Z/nZ est un corps si et seulement si n est premier (pour n>1).

Un nombre premier p>1 n’a que 1 et lui-même comme diviseurs positifs. Connaître l’unicité de la décomposition en facteurs premiers dans Z et le rôle des valuations ou de la décomposition en facteurs premiers dans les calculs de divisibilité. La **fonction indicatrice d’Euler** φ(n) compte les entiers de 1 à n qui sont premiers avec n; elle compte aussi les unités de Z/nZ. Si p est premier, φ(p)=p−1; si p^k est une puissance première, φ(p^k)=p^k−p^{k−1}. Si m et n sont premiers entre eux, φ(mn)=φ(m)φ(n).

Le théorème d’Euler : si pgcd(a,n)=1, alors a^{φ(n)}≡1 (mod n). Le théorème de Fermat en est le cas n=p premier. L’hypothèse de coprimalité est indispensable pour l’application du théorème d’Euler.

### Résultats, méthode et exemple

Dans Z/12Z, les classes inversibles sont 1,5,7,11; leur nombre vaut φ(12)=4. La classe 8 n’est pas inversible puisqu’elle n’est pas première à 12. Exemple de congruence : 7⁴≡1 (mod 10), conformément à φ(10)=4. Usage : réduire les puissances, tester l’inversibilité et résoudre des congruences linéaires. Pour ax≡b (mod n), une solution existe si et seulement si pgcd(a,n)|b; lorsqu’elle existe, elle est unique modulo n/pgcd(a,n).

## (f) Fractions rationnelles et éléments simples

**Intitulé officiel :** « Corps des fractions rationnelles à une indéterminée sur un corps. Décomposition en éléments simples. Cas réel et complexe. » [1]

### Notions à savoir

Pour un corps K, le **corps des fractions rationnelles** K(X) est le corps des fractions de K[X]. Ses éléments s’écrivent P/Q avec P,Q∈K[X], Q≠0; deux écritures représentent la même fraction si leurs produits croisés sont égaux. On peut réduire une fraction en divisant numérateur et dénominateur par leur PGCD. La division euclidienne sépare une partie polynomiale et une fraction propre dont le degré du numérateur est inférieur à celui du dénominateur.

La **décomposition en éléments simples** est obtenue en factorisant le dénominateur en facteurs irréductibles puis en décomposant selon leurs puissances. Pour un facteur irréductible q de multiplicité m, les termes associés sont Aⱼ/qʲ, pour 1≤j≤m, avec deg(Aⱼ)<deg(q). La décomposition est unique une fois la partie polynomiale et les facteurs irréductibles fixés. Sur C, les facteurs irréductibles sont linéaires; sur R, ils sont linéaires ou quadratiques irréductibles. Il faut donc traiter séparément les pôles réels et les facteurs quadratiques réels.

### Méthode et exemple

Commencer par factoriser le dénominateur sur le corps choisi, effectuer au besoin la division euclidienne, écrire la forme des éléments simples avec les degrés de numérateurs requis, puis déterminer les coefficients par identité polynomiale, substitution aux racines simples ou identification des coefficients. La factorisation dépend du corps : un facteur irréductible réel quadratique se scinde sur C.

Par exemple,

\[
\frac{1}{(X-1)(X+1)}=\frac12\left(\frac1{X-1}-\frac1{X+1}\right).
\]

Pour des pôles multiples, inclure chaque puissance jusqu’à l’ordre maximal : oublier un terme tel que A₂/(X−a)² rend la forme incomplète. Sur R, un facteur quadratique irréductible ax²+bx+c contribue des numérateurs de degré inférieur à 2, donc linéaires au plus.

## Checklist de révision

Cocher une compétence seulement après l’avoir vérifiée sans lire le rappel. Pour chaque item, garder une preuve rédigée, un exemple calculé et au moins un exercice refait sans aide lorsque cela est pertinent.

### Anneaux et quotients — (a)

- [ ] Je sais vérifier les axiomes utiles d’un anneau, repérer les unités, et préciser les conventions sur l’unité et la commutativité.
- [ ] Je sais tester un morphisme, calculer son noyau et son image, vérifier qu’un ensemble est un sous-anneau, et appliquer le théorème d’isomorphisme.
- [ ] Je sais caractériser les idéaux premiers et maximaux au moyen du quotient, et expliquer pourquoi tout maximal est premier.
- [ ] Je sais énoncer les hypothèses du théorème chinois et résoudre un système de congruences à modules premiers entre eux.
- [ ] Je sais illustrer la notion d’algèbre associative par un exemple et vérifier l’associativité de sa multiplication.

### Polynômes — (b)

- [ ] Je sais évaluer un polynôme, décider si un élément est racine et déterminer une multiplicité par factorisation.
- [ ] Je sais écrire les relations de Viète et calculer des sommes de puissances avec Newton, en contrôlant les signes et indices.
- [ ] Je sais calculer une dérivée formelle, reconnaître les limites de la méthode des dérivées en caractéristique positive, et appliquer Taylor sous ses hypothèses.
- [ ] Je sais décomposer un polynôme multivarié en composantes homogènes et tester sa symétrie.
- [ ] Je sais développer un exemple explicite dans chaque cas, par exemple X³−6X²+11X−6 pour Viète/Newton et X²+XY+Y² pour homogénéité/symétrie.

### Corps et extensions — (c)

- [ ] Je sais déterminer la caractéristique d’un corps et expliquer quand Frobenius est un morphisme, injectif ou automorphisme.
- [ ] Je sais construire Frac(A), reconnaître Q comme Frac(Z), et manipuler les inclusions Q⊂R⊂C.
- [ ] Je sais distinguer élément algébrique, transcendant et extension algébrique, et appliquer correctement d’Alembert-Gauss sur C.
- [ ] Je sais construire un corps de rupture K[X]/(P) lorsque P est irréductible et décrire un corps de décomposition.
- [ ] Je sais donner des exemples de corps finis et ne pas supposer que Frobenius est surjectif pour un corps infini.

### Divisibilité et factorisation — (d)

- [ ] Je sais distinguer unité, associé, irréductible et élément premier, et préciser le domaine dans lequel je travaille.
- [ ] Je sais calculer PGCD, PPCM et coefficients de Bézout dans Z et K[X] par l’algorithme d’Euclide.
- [ ] Je sais reconnaître les implications anneau euclidien ⇒ principal ⇒ factoriel et employer la factorialité de A[X] lorsque A est factoriel.
- [ ] Je sais factoriser un polynôme sur le corps indiqué, utiliser un polynôme cyclotomique et appliquer Eisenstein en vérifiant chaque hypothèse.
- [ ] Je sais fournir un exemple où l’irréductibilité dépend du corps de base et un calcul vérifiable d’identité de Bézout.

### Congruences — (e)

- [ ] Je sais travailler dans Z/nZ, déterminer les unités par un PGCD et décider si le quotient est un corps.
- [ ] Je sais calculer φ(n), notamment par factorisation première, et appliquer Euler ou Fermat avec l’hypothèse de coprimalité.
- [ ] Je sais résoudre ax≡b (mod n) en contrôlant la condition pgcd(a,n)|b et le nombre de classes solutions.
- [ ] Je sais établir des exemples de calcul modulo n et expliquer pourquoi une classe donnée est ou n’est pas inversible.

### Fractions rationnelles — (f)

- [ ] Je sais réduire P/Q, effectuer la division euclidienne et isoler la partie polynomiale.
- [ ] Je sais écrire la forme générale des éléments simples, y compris en présence de facteurs répétés.
- [ ] Je sais distinguer les facteurs irréductibles sur R et C, calculer les coefficients et vérifier le résultat par recombinaison.
- [ ] Je sais traiter un exemple à pôles simples et un exemple avec pôle multiple ou facteur quadratique réel.

## Lacunes à combler et exigences de maîtrise

Le texte officiel de l’unité liste des thèmes, mais ne précise pas à lui seul les conventions de cours (notamment anneaux unitaires, morphismes préservant 1, notations), le degré de détail attendu pour chaque preuve, ni une liste exhaustive des exercices ou résultats intermédiaires. Les formulations données ici explicitent les énoncés usuels utiles pour réviser; elles ne garantissent pas que chaque variante, démonstration ou application possible soit couverte. En cas de différence de convention, suivre celle du cours et vérifier qu’elle reste compatible avec l’intitulé officiel.

Les points à consolider en priorité sont les hypothèses de chaque théorème, la distinction entre structure et propriétés (par exemple corps quotient versus quotient intègre), les dépendances au corps de base pour la factorisation, ainsi que la justification des calculs. Les théorèmes rappelés ne sont pas démontrés ici. Le guide doit impérativement être complété par le cours, des exercices corrigés puis non corrigés, et les annales du concours; refaire les démonstrations exigées par le cours est indispensable pour transformer les rappels en maîtrise.

**Source officielle consultée :** programme de l’agrégation externe spéciale de mathématiques, session 2027, Titre 3, p. 2. [1]

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Agrégation externe spéciale de mathématiques — programme officiel 2027"
