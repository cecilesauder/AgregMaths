# Titre 4 — Formes bilinéaires et quadratiques sur un espace vectoriel

> **Statut : guide de révision, à travailler, ne remplace pas un cours.** Ce document organise les intitulés du programme officiel de la session 2027 et rappelle des définitions, résultats usuels et méthodes de travail associés. Il ne prétend ni fournir les démonstrations complètes ni garantir une exhaustivité au-delà des points explicitement vérifiés dans le programme et développés ici. Il doit être complété par un cours, des exercices et des annales.

Le programme officiel intitule cette unité « 4 Formes bilinéaires et quadratiques sur un espace vectoriel » et la divise en cinq sous-parties (a) à (e), reproduites ci-dessous sous leur intitulé officiel. Dans les titres 1 à 5, les corps considérés sont commutatifs. Le texte officiel précise aussi que le programme décrit des connaissances à maîtriser et à savoir illustrer, et n’est pas rédigé comme un plan de cours [1]. Les rappels qui suivent explicitent des notions usuelles associées à ces intitulés : ils ne constituent pas une liste officielle plus détaillée.

## (a) Formes bilinéaires, alternées et symétriques ; formes quadratiques et forme polaire ; orthogonalité, non-dégénérescence, adjoint, matrices, changement de base et rang

### Définitions à maîtriser

Soient \(E\) un espace vectoriel de dimension finie sur un corps commutatif \(K\), et \(b:E\times E\to K\). La forme \(b\) est **bilinéaire** si elle est linéaire séparément en chacune de ses variables. Elle est **symétrique** si \(b(x,y)=b(y,x)\), et **alternée** si \(b(x,x)=0\) pour tout \(x\). Une forme alternée est antisymétrique; réciproquement, cette équivalence demande que \(2\ne0\) dans \(K\). Ne pas confondre forme alternée et forme symétrique.

Une **forme quadratique** \(q:E\to K\) vérifie \(q(\lambda x)=\lambda^2q(x)\) et sa polarisation \(B_q(x,y)=q(x+y)-q(x)-q(y)\) est bilinéaire. Lorsque \(\operatorname{car}(K)\ne2\), on lui associe la forme bilinéaire symétrique polaire :
\[
 b_q(x,y)=\frac{q(x+y)-q(x)-q(y)}{2},\qquad q(x)=b_q(x,x).
\]
Ainsi \(q(x+y)=q(x)+2b_q(x,y)+q(y)\). En caractéristique 2, la division par 2 n’a pas de sens et la forme polaire seule ne détermine pas en général \(q\) ; il faut donc conserver la forme quadratique comme objet distinct. Dans le cas réel, \(q\) s’écrit souvent \(q(x)=x^{\mathsf T}Mx\) avec \(M\) symétrique.

Deux vecteurs sont **orthogonaux pour \(b\)** si \(b(x,y)=0\). Cette notion dépend de la forme considérée et n’est pas nécessairement une notion de distance ou d’angle. La **forme bilinéaire non dégénérée** est celle dont le radical est nul; en dimension finie, cela équivaut à ce que l’application \(E\to E^*\), \(x\mapsto(y\mapsto b(x,y))\), soit un isomorphisme (selon l’ordre choisi des variables, on peut employer l’application analogue avec les variables inversées).

Pour un endomorphisme \(u\) et une forme bilinéaire non dégénérée \(b\), son **adjoint relativement à \(b\)** est l’unique endomorphisme \(u^*\) tel que \(b(ux,y)=b(x,u^*y)\) pour tous \(x,y\). Existence et unicité viennent de la non-dégénérescence. Lorsque \(b\) est le produit scalaire euclidien, il s’agit de l’adjoint usuel. Pour une matrice de Gram \(M\) inversible et la matrice \(A\) de \(u\), la matrice de l’adjoint est \(M^{-1}A^{\mathsf T}M\) dans le cas réel.

### Matrices, changement de base et rang

Dans une base \(\mathcal B\), la matrice \(M=(b(e_i,e_j))\) vérifie \(b(x,y)=X^{\mathsf T}MY\). Si la matrice de passage vers une nouvelle base est \(P\), la matrice de la forme devient \(P^{\mathsf T}MP\) : il s’agit d’une **congruence**, et non du changement par similitude utilisé pour un endomorphisme. Le rang de \(b\) est le rang de sa matrice, ou celui de l’application associée \(E\to E^*\); il ne dépend pas de la base. Pour une forme symétrique, la matrice est symétrique; pour une forme alternée, elle est antisymétrique (et la diagonale est nulle).

### Exemple et usage

Sur \(\mathbb R^2\), \(b((x_1,x_2),(y_1,y_2))=x_1y_1+2x_2y_2\) a pour matrice \(\mathrm{diag}(1,2)\), est symétrique et non dégénérée. Sa forme quadratique associée vaut \(q(x_1,x_2)=x_1^2+2x_2^2\); ses deux coordonnées sont orthogonales. La forme \(a((x_1,x_2),(y_1,y_2))=x_1y_2-x_2y_1\) est alternée : \(a(x,x)=0\) et sa matrice \(\begin{pmatrix}0&1\\-1&0\end{pmatrix}\) est de rang 2. Ces exemples servent à calculer le rang, tester la dégénérescence et transformer une forme par changement de base.

### Checklist de travail — (a)

- [ ] Définir bilinéarité, symétrie, alternance, forme quadratique, forme polaire et non-dégénérescence; préciser le rôle de la caractéristique.
- [ ] Passer de \(q\) à \(b_q\), puis vérifier par calcul \(q(x+y)=q(x)+2b_q(x,y)+q(y)\).
- [ ] Écrire une forme dans une base, calculer son rang et son radical à partir de la matrice.
- [ ] Calculer une matrice de forme après changement de base par congruence et la distinguer d’une similitude.
- [ ] Déterminer un adjoint dans un cas non dégénéré et vérifier l’identité qui le définit.
- [ ] Donner un exemple calculé de forme alternée et un exemple de forme symétrique.
- [ ] Résoudre des exercices de dégénérescence, d’orthogonalité et de changement de base.

## (b) Orthogonalité, sous-espaces isotropes, somme de carrés, inertie de Sylvester, classification sur \(\mathbb R\) ou \(\mathbb C\), orthogonalisation

### Orthogonalité et isotropie

Pour un sous-espace \(F\subset E\), son **orthogonal** est \(F^\perp=\{x\in E\mid b(x,f)=0\text{ pour tout }f\in F\}\). Si \(b\) est non dégénérée et \(E\) de dimension finie, alors \(\dim F^\perp=\dim E-\dim F\). On a toujours \(F\subset(F^\perp)^\perp\) pour une forme symétrique; dans le cas non dégénéré de dimension finie, l’inclusion est une égalité. Il ne s’ensuit pas toujours que \(E=F\oplus F^\perp\) : cela équivaut à l’absence d’intersection non nulle \(F\cap F^\perp\), autrement dit à la non-dégénérescence de la restriction à \(F\).

Pour une forme quadratique \(q\), un vecteur non nul \(x\) tel que \(q(x)=0\) est **isotrope**. Un sous-espace est totalement isotrope si \(q\) y est identiquement nulle; lorsque la caractéristique est différente de 2, cela équivaut à l’annulation de la forme polaire sur toute paire de vecteurs de ce sous-espace. Une forme positive définie réelle n’a pas de vecteur isotrope non nul, tandis qu’une forme indéfinie peut en avoir.

### Réduction en somme de carrés et classifications

Sur un corps de caractéristique différente de 2, une forme quadratique peut être diagonalisée par changement de coordonnées : \(q=\sum_i a_i X_i^2\), avec certains coefficients éventuellement nuls. Sur \(\mathbb R\), après rescaling des variables, elle s’écrit comme somme de carrés positifs moins somme de carrés négatifs; le nombre de chaque signe et le rang ne dépendent pas de la réduction. C’est le **théorème d’inertie de Sylvester**. Ces nombres donnent la signature et classent les formes quadratiques réelles à équivalence linéaire près.

Sur \(\mathbb C\), tout coefficient diagonal non nul peut être normalisé à 1 par un changement d’échelle complexe. Deux formes quadratiques complexes sont donc équivalentes si et seulement si elles ont même rang; une forme de rang \(r\) est équivalente à \(X_1^2+\cdots+X_r^2\), les autres coordonnées étant dans le noyau. Il ne faut pas transposer à \(\mathbb C\) la distinction réelle entre coefficients positifs et négatifs.

Les **procédés d’orthogonalisation** recherchent une base où les vecteurs distincts sont orthogonaux, puis une base diagonalisant la forme. À chaque étape de Gram–Schmidt, la division par \(b(u,u)\) n’est possible que si ce pivot est non nul ; la positivité définie garantit cette condition pour tout vecteur non nul d’une famille libre. Pour une forme indéfinie, les pivots isotropes imposent de choisir ou de combiner autrement les vecteurs. Par exemple, pour \(q(x,y)=x^2-y^2\), les vecteurs \(v=(1,1)\) et \(w=(1,-1)\) sont isotropes, mais \(v+w=(2,0)\) est de carré 4 et \(v-w=(0,2)\) de carré −4 ; ils donnent une base orthogonale adaptée.

### Exemple et usage

La forme réelle \(q(x,y)=x^2-y^2\) a signature \((1,1)\) et possède les vecteurs isotropes non nuls vérifiant \(y=\pm x\). Ses deux directions isotropes illustrent pourquoi un sous-espace peut rencontrer son orthogonal de façon non triviale. La forme \(x^2+y^2\), elle, est définie positive et n’a aucun vecteur isotrope non nul. En exercice, ces exemples distinguent signature, rang et isotropie.

### Checklist de travail — (b)

- [ ] Calculer \(F^\perp\), vérifier la formule de dimension sous ses hypothèses et tester si \(F\oplus F^\perp=E\).
- [ ] Distinguer vecteur isotrope, sous-espace totalement isotrope et sous-espace simplement orthogonal.
- [ ] Diagonaliser une forme quadratique et expliquer les changements de coordonnées employés.
- [ ] Réduire une forme réelle en carrés positifs, négatifs et nuls; retrouver rang et signature.
- [ ] Appliquer l’inertie de Sylvester pour décider si deux formes réelles sont équivalentes.
- [ ] Classer une forme complexe par son rang sans attribuer de signe aux coefficients.
- [ ] Effectuer une orthogonalisation de Gram–Schmidt, vérifier la non-annulation de chaque pivot et savoir que la positivité définie la garantit.
- [ ] Traiter un exemple avec un pivot isotrope et construire une réduction adaptée.

## (c) Espaces euclidiens et hermitiens, dual, supplémentaire orthogonal, Cauchy–Schwarz, norme et bases orthonormales

Un **espace euclidien** est un espace vectoriel réel de dimension finie muni d’un produit scalaire, c’est-à-dire une forme bilinéaire symétrique définie positive \(\langle\cdot,\cdot\rangle\). Un **espace hermitien** est un espace complexe de dimension finie muni d’une forme sesquilinéaire hermitienne définie positive. Par exemple, avec la convention linéaire en première variable, \(h(y,x)=\overline{h(x,y)}\) et \(h(x,x)>0\) pour \(x\ne0\). Les conventions de linéarité en variable complexe doivent être annoncées et utilisées de façon cohérente.

Le produit scalaire euclidien définit l’isomorphisme \(E\to E^*\), \(x\mapsto(y\mapsto\langle y,x\rangle)\); en dimension finie, il est bijectif. Dans le cas hermitien, l’identification avec le dual linéaire fait intervenir la conjugaison selon la convention choisie. Pour tout sous-espace \(F\) d’un espace euclidien ou hermitien de dimension finie, \(E=F\oplus F^\perp\); la projection orthogonale sur \(F\) est alors bien définie.

L’**inégalité de Cauchy–Schwarz** est \(|\langle x,y\rangle|\leq\|x\|\,\|y\|\), où \(\|x\|=\sqrt{\langle x,x\rangle}\). Elle s’applique également au module du produit hermitien. L’égalité a lieu exactement lorsque les vecteurs sont linéairement dépendants (y compris le cas d’un vecteur nul). Une **base orthonormale** est une base \((e_i)\) telle que \(\langle e_i,e_j\rangle=\delta_{ij}\); les coordonnées et les projections orthogonales y sont particulièrement simples.

### Exemple et usage

Dans \(\mathbb R^3\) muni du produit scalaire usuel, pour \(F=\mathrm{Vect}((1,1,0))\), on a \(F^\perp=\{(x,y,z):x+y=0\}\) et \(\mathbb R^3=F\oplus F^\perp\). Pour \(x=(1,2,0)\) et \(y=(2,1,0)\), Cauchy–Schwarz fournit une borne sur \(|\langle x,y\rangle|\) et l’égalité ne se produit pas, car les deux vecteurs ne sont pas proportionnels. Gram–Schmidt transforme une base de \(F^\perp\) en base orthonormale pour effectuer des projections ou des calculs de norme.

### Checklist de travail — (c)

- [ ] Vérifier qu’une forme est un produit scalaire réel ou hermitien complexe et définie positive.
- [ ] Calculer une norme, une distance issue de cette norme et un produit scalaire en coordonnées.
- [ ] Appliquer Cauchy–Schwarz, et caractériser correctement le cas d’égalité.
- [ ] Déterminer un dual par l’identification induite par le produit scalaire réel.
- [ ] Calculer un orthogonal, une projection orthogonale et une décomposition \(E=F\oplus F^\perp\).
- [ ] Construire une base orthonormale par Gram–Schmidt et contrôler les normalisations.
- [ ] Faire un exemple hermitien en respectant la conjugaison dans la seconde variable (ou la convention annoncée).
- [ ] Résoudre des exercices de calcul de coordonnées et de projections dans une base orthonormale.

## (d) Groupes orthogonal et spécial orthogonal; réflexions; endomorphismes symétriques et normaux; diagonalisation réelle; valeurs singulières; réduction simultanée; polaire réelle; classifications de \(O(2,\mathbb R)\) et \(O(3,\mathbb R)\); produits mixte et vectoriel

### Groupes et réflexions

Dans un espace euclidien, \(O(E)=\{u\in GL(E):\langle ux,uy\rangle=\langle x,y\rangle\}\) est le **groupe orthogonal**. Le **groupe spécial orthogonal** est \(SO(E)=\{u\in O(E):\det u=1\}\). Une réflexion orthogonale par rapport à l’hyperplan \(H=n^\perp\), avec \(n\) unitaire, fixe \(H\) et envoie \(n\) sur \(-n\); sa formule est \(s(x)=x-2\langle x,n\rangle n\). Elle a déterminant \(-1\).

En dimension finie réelle, tout automorphisme orthogonal est un produit fini de réflexions. En pratique, ce résultat permet de ramener l’étude d’un élément de \(O(E)\) à des transformations élémentaires. La décomposition n’est pas nécessairement unique.

### Symétrie, normalité, valeurs singulières

Un endomorphisme réel est **symétrique** si \(A=A^*\); il est **normal** si \(AA^*=A^*A\). Le théorème spectral réel affirme qu’un endomorphisme symétrique d’un espace euclidien de dimension finie possède une base orthonormale de vecteurs propres; sa matrice y est diagonale réelle. Le mot « normal » ne permet pas, à lui seul, d’affirmer qu’un endomorphisme réel est diagonalisable dans une base orthonormale réelle : la diagonalisation réelle énoncée ici est celle des endomorphismes symétriques.

Pour toute matrice réelle \(A\) de taille \(m\times n\), la **décomposition en valeurs singulières** s’écrit \(A=U\Sigma V^{\mathsf T}\), avec \(U\in O(m)\), \(V\in O(n)\), et \(\Sigma\) diagonale rectangulaire à coefficients diagonaux non négatifs. Ces coefficients sont les racines carrées des valeurs propres de \(A^{\mathsf T}A\) (avec les zéros éventuels). Les valeurs singulières décrivent notamment l’action de \(A\) sur les longueurs.

### Réduction simultanée et décomposition polaire dans \(GL(n,\mathbb R)\)

Soient \(q_1,q_2\) deux formes quadratiques réelles sur \(\mathbb R^n\), et supposons que \(q_1\) est définie positive. Notons \(b_1,b_2\) leurs formes bilinéaires polaires, définies par \(q_i(x)=b_i(x,x)\). Il existe une base orthonormale pour le produit scalaire \(b_1\) qui diagonalise aussi \(q_2\). En effet, l’unique endomorphisme \(T\) défini par \(b_2(x,y)=b_1(Tx,y)\) est auto-adjoint pour \(b_1\); le théorème spectral fournit cette base. Dans celle-ci, les matrices des deux formes sont respectivement \(I\) et une matrice diagonale réelle. L’hypothèse de positivité de la première forme est déterminante.

Pour toute matrice inversible réelle \(A\), la décomposition polaire est \(A=QS\), où \(Q\) est orthogonale et \(S=(A^{\mathsf T}A)^{1/2}\) est symétrique définie positive. Cette factorisation est unique sous ces conditions. On peut la voir comme la séparation d’une transformation en une partie qui préserve les longueurs et une partie positive qui les déforme.

### Classifications en dimensions deux et trois; produits

Tout élément de \(O(2,\mathbb R)\) de déterminant \(+1\) est une rotation plane; tout élément de déterminant \(-1\) est une réflexion par rapport à une droite. En dimension trois, un élément de \(SO(3)\) possède un axe propre de valeur propre \(+1\) et agit sur le plan orthogonal comme une rotation : c’est une rotation autour d’un axe, identité comprise. Un élément de \(O(3)\) de déterminant \(-1\) possède une direction propre de valeur propre \(-1\) et agit sur le plan orthogonal comme une rotation; ce cas inclut la réflexion par rapport à un plan et l’application \(-I\). Ces descriptions résultent des valeurs propres possibles d’une matrice orthogonale réelle en dimension deux ou trois.

Dans un espace euclidien orienté de dimension trois, le **produit mixte** est \([x,y,z]=\det(x,y,z)\) dans une base orthonormale directe; il mesure le volume orienté du parallélépipède. Le **produit vectoriel** \(x\times y\) est caractérisé par \(\langle x\times y,z\rangle=[x,y,z]\) pour tout \(z\). Il est orthogonal à \(x\) et à \(y\), et sa norme est l’aire du parallélogramme construit sur ces deux vecteurs. Le signe dépend de l’orientation choisie.

### Exemple et usage

Pour \(A=\begin{pmatrix}1&1\\0&1\end{pmatrix}\), on a \(A^{\mathsf T}A=\begin{pmatrix}1&1\\1&2\end{pmatrix}\), dont les valeurs propres sont \((3\pm\sqrt5)/2\). Les valeurs singulières de \(A\) sont donc \((\sqrt5+1)/2\) et \((\sqrt5-1)/2\) ; elles donnent les facteurs principaux d’étirement. Pour la matrice \(R_\theta\) d’une rotation plane, \(R_\theta\in SO(2)\) et sa valeur propre complexe décrit l’angle \(\theta\). Dans \(\mathbb R^3\), \(e_1\times e_2=e_3\) pour l’orientation canonique, ce qui fixe le signe de la convention.

### Checklist de travail — (d)

- [ ] Vérifier qu’une matrice est orthogonale, calculer son déterminant et distinguer \(O(n)\) de \(SO(n)\).
- [ ] Écrire la matrice ou l’action d’une réflexion et vérifier qu’elle préserve le produit scalaire.
- [ ] Distinguer endomorphisme symétrique et normal; appliquer le théorème spectral réel avec les bonnes hypothèses.
- [ ] Construire ou exploiter une décomposition en valeurs singulières, y compris pour une matrice rectangulaire.
- [ ] Ramener simultanément deux formes réelles à \(I\) et une diagonale lorsque l’une est définie positive.
- [ ] Calculer les facteurs de la décomposition polaire réelle d’une matrice inversible.
- [ ] Classifier et justifier les cas de \(O(2,\mathbb R)\) et \(O(3,\mathbb R)\) à partir du déterminant et des valeurs propres.
- [ ] Calculer produit mixte et produit vectoriel; suivre l’orientation et interpréter les résultats géométriquement.
- [ ] Faire des exercices de factorisation, de classification et d’interprétation géométrique.

## (e) Groupes unitaire et spécial unitaire; diagonalisation des endomorphismes normaux; décomposition polaire dans \(GL(n,\mathbb C)\)

### Définitions et résultats

Sur un espace hermitien, le **groupe unitaire** est \(U(E)=\{u\in GL(E):u^*u=I\}\). Il préserve le produit hermitien et les normes. Le **groupe spécial unitaire** est \(SU(E)=\{u\in U(E):\det u=1\}\). Dans une base orthonormale complexe, leurs matrices satisfont respectivement \(U^*U=I\) et, en plus, \(\det U=1\), où \(U^*=\overline U^{\mathsf T}\).

Un endomorphisme complexe est normal si \(AA^*=A^*A\). Le théorème spectral complexe affirme que tout endomorphisme normal d’un espace hermitien complexe de dimension finie est diagonalisable dans une base orthonormale; sa matrice est diagonale, avec valeurs propres complexes. Les endomorphismes hermitiens (auto-adjoints) en sont un cas particulier, avec valeurs propres réelles.

Pour toute matrice inversible complexe \(A\), la décomposition polaire est \(A=UP\), avec \(U\) unitaire et \(P=(A^*A)^{1/2}\) hermitienne définie positive. Ces facteurs sont uniques sous ces conditions. La même idée que dans le cas réel s’applique, en remplaçant la transposée par l’adjoint hermitien.

### Exemple et usage

La matrice diagonale \(\mathrm{diag}(e^{i\alpha},e^{i\beta})\) est unitaire et appartient à \(SU(2)\) exactement lorsque \(e^{i(\alpha+\beta)}=1\). Elle illustre la condition de déterminant. Pour une matrice inversible complexe quelconque, calculer \(A^*A\), prendre sa racine carrée positive, puis poser \(U=AP^{-1}\) donne une méthode de calcul de la décomposition polaire; on vérifie alors \(U^*U=I\).

### Checklist de travail — (e)

- [ ] Vérifier les relations \(U^*U=I\) et \(\det U=1\) et distinguer \(U(n)\) de \(SU(n)\).
- [ ] Reconnaître un endomorphisme normal complexe et distinguer normalité et hermiticité.
- [ ] Énoncer et appliquer le théorème spectral complexe avec la base orthonormale adaptée.
- [ ] Diagonaliser un exemple normal et vérifier l’orthonormalité des vecteurs propres.
- [ ] Calculer ou caractériser les facteurs de la décomposition polaire complexe d’une matrice inversible.
- [ ] Effectuer des exercices de calcul avec l’adjoint hermitien, en incluant la conjugaison complexe.

## Checklist transversale — preuves, méthodes, calculs et entraînement

- [ ] Pour chaque théorème utilisé, énoncer les hypothèses et expliquer pourquoi elles s’appliquent au problème.
- [ ] Savoir rédiger ou reconstituer les preuves centrales travaillées en cours, en particulier celles de l’inertie, des théorèmes spectraux et des décompositions polaire et singulière.
- [ ] Choisir et justifier une méthode de réduction : congruence pour une forme, similitude pour un endomorphisme, diagonalisation orthogonale ou unitaire selon le cadre.
- [ ] Effectuer sans erreur les calculs de matrices de Gram, orthogonaux, adjoints, signatures, valeurs propres et valeurs singulières.
- [ ] Construire au moins un exemple et un contre-exemple pour les notions délicates : dégénérescence, isotropie, normalité sans symétrie réelle, et nécessité de la positivité dans la réduction simultanée.
- [ ] Résoudre des exercices de chaque sous-partie sans consulter la fiche, puis reprendre les erreurs en explicitant l’hypothèse ou le calcul manquant.
- [ ] Compléter l’entraînement par des exercices gradués et des annales du concours; vérifier que les résultats peuvent être expliqués et pas seulement calculés.

## Lacunes à combler et exigences de maîtrise

Le PDF officiel donne bien les cinq sous-parties reproduites ici, mais formule certains contenus sous forme d’intitulés très larges. Il ne fixe pas dans cette unité un niveau de détail par théorème, une liste d’exercices, une technique unique d’orthogonalisation, ni les démonstrations à connaître mot pour mot. Les rappels et exemples ci-dessus éclairent les intitulés, mais ne permettent pas à eux seuls de garantir toute l’étendue des questions possibles. Il faut notamment approfondir dans un cours les démonstrations des théorèmes spectraux, de l’inertie, de la réduction simultanée et des décompositions singulière et polaire; s’entraîner aux calculs de congruence, d’orthogonaux, de projections et de bases adaptées; puis vérifier le transfert de ces méthodes dans des exercices et des annales.

La maîtrise attendue ne se limite pas à réciter les énoncés : il faut reconnaître les hypothèses, choisir la bonne notion de changement de base, justifier les conclusions et savoir illustrer les résultats par des calculs ou des exemples. La présente fiche est donc un support de révision, à compléter systématiquement par **cours, exercices et annales**. Elle ne remplace ni ces supports ni une vérification régulière de sa compréhension.

## Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel de l’agrégation externe spéciale de mathématiques, session 2027"
