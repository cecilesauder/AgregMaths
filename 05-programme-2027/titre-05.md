# Titre 5 — Géométries affine et euclidienne

> **Statut : guide de révision, à travailler, ne remplace pas un cours.** Ce document suit les intitulés officiels du programme de la session 2027. Il aide à organiser les révisions et à repérer les résultats et techniques à maîtriser ; il ne prétend ni donner les démonstrations complètes ni couvrir au-delà des points vérifiés dans le texte officiel. [1]

Le programme précise que **tous les espaces considérés dans ce chapitre sont de dimension finie**. La sous-partie (e) restreint explicitement l’étude des quadriques à l’espace affine euclidien de dimension trois. Les cinq sous-parties ci-dessous reprennent les intitulés (a) à (e) du PDF, dans leur ordre officiel. [1]

## (a) Espace affine et espace vectoriel associé. Application affine et application linéaire associée. Sous-espaces affines, barycentres. Repères affines, équations d’un sous-espace affine. Groupe affine, notion de propriété affine. Groupe des homothéties-translations, affinités. Parties convexes, enveloppe convexe d’une partie d’un espace affine réel, points extrémaux.

### Notions et résultats à savoir

Dans les titres communs d’algèbre, \(K\) désigne un corps commutatif ; les notions affines se formulent sur un \(K\)-espace affine. Le cadre euclidien et la convexité sont réels, donc correspondent au cas \(K=\mathbb R\).

Un **espace affine** \(A\) de direction un espace vectoriel \(E\) est un ensemble de points sur lequel les vecteurs de \(E\) agissent librement et transitivement : pour \(P,Q\in A\), il existe un unique vecteur \(\overrightarrow{PQ}\in E\), et \(P+u\) désigne le point obtenu en translatant \(P\) de \(u\). La différence de deux points est un vecteur ; la somme de points n’est pas définie en général.

Une application \(f:A\to B\) entre espaces affines est **affine** si elle préserve les combinaisons affines \(\sum_i \lambda_iP_i\), avec \(\lambda_i\in K\) et \(\sum_i\lambda_i=1\). Elle possède une application linéaire associée \(\vec f:E\to F\) caractérisée par \(\overrightarrow{f(P)f(Q)}=\vec f(\overrightarrow{PQ})\). Dans des repères, elle s’écrit \(x\mapsto Lx+b\). Elle est bijective exactement lorsque \(L\) est inversible.

Un **sous-espace affine** est un translaté \(P+V\) d’un sous-espace vectoriel \(V\subset E\) ; sa direction est \(V\), sa dimension est celle de \(V\). Le **barycentre** des points \(P_i\) affectés de coefficients \(\lambda_i\in K\) est défini si \(\sum_i\lambda_i\ne0\) : pour n’importe quel point origine \(O\), il est donné par \(\overrightarrow{OG}=(\sum_i\lambda_i\overrightarrow{OP_i})/(\sum_i\lambda_i)\), et le point obtenu ne dépend pas de \(O\). Dans le cadre réel, des coefficients tous égaux et positifs donnent notamment le centre de gravité d’un simplexe ; la convexité requiert des coefficients réels non négatifs de somme 1.

Un **repère affine** de dimension \(n\) est un point origine affine et une base de la direction. Tout point a alors des coordonnées uniques. Un sous-espace affine s’exprime par des équations linéaires affines \(Mx=c\) ; il peut aussi être donné par un point et une base de sa direction. La forme choisie doit respecter sa dimension et son rang.

Le **groupe affine** est le groupe des bijections affines d’un espace sur lui-même, de forme \(x\mapsto Lx+b\) avec \(L\in GL(E)\). Une **propriété affine** est une propriété préservée par toutes les transformations affines bijectives : alignement, parallélisme, rapports sur une même droite et barycentres en sont des exemples ; longueurs et angles n’en sont pas.

Le groupe des **homothéties-translations** est formé, dans un espace de dimension positive, des transformations \(x\mapsto \lambda x+b\) avec \(\lambda\ne0\), relativement à un choix d’origine. Le cas \(\lambda=1\) donne une translation ; si \(\lambda\ne1\), la transformation est une homothétie de centre fixe. Une **affinité** de direction donnée fixe point par point un sous-espace affine appelé axe et dilate la direction transverse : si l’espace directeur se décompose en \(E=U\oplus V\), où \(U\) est la direction de l’axe et \(V\) la direction de l’affinité, alors, dans un repère d’origine sur l’axe, elle agit par \(u+v\mapsto u+kv\) (pour une affinité bijective, \(k\ne0\)). Ne pas confondre cette transformation particulière avec toute application affine.

Une partie d’un espace affine réel est **convexe** si elle contient le segment \([P,Q]\) dès qu’elle contient \(P,Q\). L’**enveloppe convexe** d’une partie \(S\) est le plus petit convexe contenant \(S\), équivalemment l’ensemble de ses combinaisons convexes finies \(\sum_i\lambda_iP_i\), avec \(\lambda_i\ge0\) et \(\sum_i\lambda_i=1\). Un point \(P\) d’un convexe \(C\) est **extrémal** s’il ne peut s’écrire comme combinaison stricte \(P=tQ+(1-t)R\) de deux points distincts \(Q,R\in C\), pour \(0<t<1\).

### Exemple / usage

Dans le plan, les points \((0,0),(2,0),(0,2)\) ont pour barycentre à coefficients égaux \((2/3,2/3)\). Leurs combinaisons convexes décrivent le triangle plein. Ses trois sommets sont extrémaux, contrairement à un point intérieur. Cette description permet de passer des coordonnées barycentriques à la géométrie du triangle. Pour une application affine \(f(x)=Lx+b\), on peut aussi vérifier directement que \(f(\sum_i\lambda_iP_i)=\sum_i\lambda_if(P_i)\) lorsque \(\sum_i\lambda_i=1\).

### À savoir travailler

- Retrouver l’application linéaire associée à partir d’une formule affine et inversement.
- Décrire un sous-espace affine par un point, une direction, des paramètres ou des équations ; vérifier dimension et rang.
- Calculer des barycentres et justifier quand ils sont définis ; passer des coordonnées à une combinaison affine.
- Distinguer invariants affines, métriques et convexes ; déterminer points extrémaux d’exemples finis et simples.
- Composer et inverser des applications affines ; reconnaître translations, homothéties et affinités dans des coordonnées.

## (b) Isométries d’un espace affine euclidien. Groupe des isométries d’un espace affine euclidien. Déplacements, antidéplacements. Similitudes directes et indirectes du plan. Classification des isométries en dimension deux et trois.

### Notions et résultats à savoir

Un **espace affine euclidien** est un espace affine dont l’espace directeur porte un produit scalaire. Une **isométrie affine** conserve les distances. Dans des coordonnées orthonormales, elle s’écrit \(f(x)=Qx+b\), où \(Q\) est orthogonale, soit \(Q^{\mathsf T}Q=I\). Le groupe des isométries est fermé par composition et passage à l’inverse.

En dimension finie, une isométrie affine a une partie linéaire orthogonale. Son déterminant vaut \(+1\) ou \(-1\). Les isométries de déterminant \(+1\) sont les **déplacements** (elles préservent l’orientation) ; celles de déterminant \(-1\) sont les **antidéplacements** (elles renversent l’orientation). Cette distinction porte sur l’orientation, pas sur le fait de déplacer ou non des points.

Une **similitude** multiplie toutes les distances par un même rapport \(r>0\). Dans le plan orienté, une similitude directe préserve l’orientation et une indirecte la renverse. En identification complexe, les formes sont respectivement \(z\mapsto az+b\) et \(z\mapsto a\overline z+b\), où \(a\ne0\) et le rapport est \(|a|\). Les isométries en sont les cas de rapport 1.

En dimension 2, si \(\det Q=1\), l’isométrie est une translation lorsque \(Q=I\), et une rotation avec point fixe lorsque \(Q\ne I\). Si \(\det Q=-1\), \(Q\) est une réflexion linéaire : l’isométrie affine est une réflexion axiale si la composante de translation dans la direction de l’axe est nulle, et une réflexion-glissée sinon. En dimension 3, si \(\det Q=1\), une isométrie est une translation (\(Q=I\)) ou, lorsque \(Q\ne I\), un vissage : après changement d’origine, il reste une rotation autour d’un axe et une translation parallèle à cet axe, éventuellement nulle. Si \(\det Q=-1\) et \(Q\ne -I\), les cas se distinguent selon que \(Q\) possède un plan propre de valeur propre \(+1\) : on obtient une réflexion de plan ou une réflexion-glissée selon que la translation parallèle à ce plan est nulle ou non ; sinon l’isométrie possède un point fixe et sa partie linéaire est une rotation impropre. Le cas \(Q=-I\) est une symétrie centrale après déplacement de l’origine.

**Méthode de classification en coordonnées.** Déterminer \(Q\), son déterminant et ses sous-espaces propres ; résoudre ensuite \(Qx+b=x\) pour savoir s’il existe un point fixe. Si \(P\) est fixe, changer d’origine en \(P\) réduit l’isométrie à sa partie orthogonale. En l’absence de point fixe, examiner les composantes de \(b\) selon les directions invariantes, ce qui fait apparaître translations, vissages ou formes glissées.

### Exemple / usage

Dans le plan, \(z\mapsto iz+1\) est une similitude directe de rapport 1, donc une isométrie directe : c’est une rotation, et son centre se trouve en résolvant \(z=iz+1\). En revanche, \(z\mapsto\overline z+2i\) est une isométrie indirecte et une réflexion d’axe horizontal \(y=1\), comme on le vérifie en écrivant \(z=x+iy\). Pour toute formule concrète, vérifier l’axe ou le point fixe plutôt que se fier à l’apparence de l’expression.

### À savoir travailler

- Vérifier qu’une application affine est une isométrie à l’aide de sa partie linéaire orthogonale.
- Calculer le déterminant et conclure déplacement ou antidéplacement.
- Trouver centres, axes et plans fixes en résolvant les équations appropriées.
- Classer des exemples en dimensions deux et trois, y compris les cas dégénérés et sans point fixe.
- Écrire et distinguer similitudes directes/indirectes du plan ; lire le rapport et l’orientation.

## (c) Angles en dimension deux : angles de vecteurs, angles de droites, théorème de l’angle inscrit, cocyclicité.

### Notions et résultats à savoir

Dans un plan euclidien orienté, l’**angle de deux vecteurs non nuls** est défini modulo \(2\pi\). L’**angle de deux droites** est non orienté et pris modulo \(\pi\) ; il peut être représenté par un angle aigu ou droit. Il faut annoncer la convention (orientée ou non) dans chaque calcul. Une rotation ajoute son angle aux angles orientés de vecteurs et préserve les angles non orientés.

Le **théorème de l’angle inscrit** : dans un cercle, si \(A,B,C\) sont sur le cercle et \(A\ne B\), l’angle inscrit \(\widehat{ACB}\) mesure la moitié de l’angle au centre qui intercepte le même arc \(AB\) ne contenant pas \(C\). Deux angles inscrits qui interceptent le même arc ont donc la même mesure. Les angles inscrits qui interceptent une corde depuis les deux arcs complémentaires peuvent être supplémentaires ; l’arc choisi importe.

Des points distincts \(A,B,C,D\) sont **cocycliques** (sur un même cercle) si et seulement si, lorsque les droites et angles concernés sont définis, deux angles qui sous-tendent la même corde sont égaux modulo la convention adaptée. Une formulation équivalente est que deux angles opposés d’un quadrilatère inscrit sont supplémentaires. Pour la réciproque, vérifier que les points ne sont pas confondus et que la configuration est non dégénérée ; le cas de points alignés doit être distingué.

### Exemple / usage

Si \(A,B,C,D\) sont dans une configuration non dégénérée et que \(\angle ACB=\angle ADB\) avec les deux angles sous-tendant la corde \(AB\) depuis le même côté, alors \(A,B,C,D\) sont cocycliques. Cette réciproque est un outil courant pour prouver qu’un quadrilatère est inscriptible, puis transférer une égalité d’angles à l’aide du théorème de l’angle inscrit.

### À savoir travailler

- Convertir un angle orienté en relation modulo \(2\pi\) et un angle de droites en relation modulo \(\pi\).
- Identifier l’arc intercepté par un angle inscrit et tenir compte du côté où se trouve le sommet.
- Appliquer le théorème de l’angle inscrit dans les deux sens, avec ses hypothèses.
- Prouver une cocyclicité par égalité d’angles ou par somme d’angles opposés, sans confondre réciproque et configuration dégénérée.

## (d) Groupe des isométries laissant stable une partie du plan ou de l’espace. Polygones réguliers. Relations métriques dans le triangle. Utilisation des nombres complexes en géométrie plane.

### Notions et résultats à savoir

Pour une partie \(S\) d’un espace euclidien, son **groupe d’isométries stabilisateur** est \(\{g\in\mathrm{Isom}:g(S)=S\}\). La condition est une égalité d’ensembles, pas seulement l’inclusion. Un polygone régulier à \(n\ge3\) sommets dans le plan a pour symétries les \(n\) rotations de centre son centre et les \(n\) réflexions d’axes appropriés : son groupe diédral a \(2n\) éléments. Dans l’espace, le groupe dépend de la partie étudiée ; ne pas transposer sans vérification la formule plane à un polyèdre ou à un ensemble quelconque.

Les **relations métriques dans le triangle** incluent notamment, pour un triangle euclidien non dégénéré de côtés \(a,b,c>0\) opposés aux angles \(A,B,C\), la loi des cosinus \(a^2=b^2+c^2-2bc\cos A\), la loi des sinus \(a/\sin A=b/\sin B=c/\sin C\), et le théorème de Pythagore lorsque le triangle est rectangle. Les formules de médiane ou de projection peuvent aussi être utiles ; il faut en établir les hypothèses et les notations dans l’exercice. Le programme nomme ce domaine sans en donner une liste exhaustive de formules : les résultats effectivement attendus doivent être fixés avec le cours et les annales.

Les **nombres complexes** représentent les points du plan par leurs affixes. Les transformations \(z\mapsto az+b\) décrivent similitudes directes, celles de module 1 sont des isométries directes ; \(z\mapsto a\overline z+b\) décrit les similitudes indirectes. L’argument encode l’angle orienté et le module les distances à un facteur près. Les identités complexes sont particulièrement efficaces pour les rotations, alignements, parallélismes et cocyclicité, à condition de distinguer points, vecteurs et affixes.

### Exemple / usage

Pour un triangle de côtés \(b=3\), \(c=4\) et angle compris \(A=\pi/3\), la loi des cosinus donne \(a^2=9+16-24\cos(\pi/3)=13\), donc \(a=\sqrt{13}\). Pour un polygone régulier, les rotations de centre le centre et d’angle \(2k\pi/n\) préservent l’ensemble ; une rotation d’un autre angle ne le fait généralement pas.

### À savoir travailler

- Déterminer et justifier le stabilisateur d’une partie, en testant l’image de la partie entière.
- Décrire les symétries d’un polygone régulier et composer rotations et réflexions.
- Choisir entre loi des sinus, loi des cosinus, Pythagore ou une relation métrique adaptée ; vérifier les données disponibles.
- Traduire une configuration plane en affixes, traiter conjuguaison et modules, puis interpréter le résultat géométriquement.

## (e) Application des formes quadratiques à l’étude des coniques propres du plan affine euclidien (foyer, excentricité) et des quadriques de l’espace affine euclidien de dimension trois.

### Notions et résultats à savoir

Une **forme quadratique réelle** en coordonnées est un polynôme homogène de degré deux \(q(x)=x^{\mathsf T}Ax\), avec \(A\) symétrique. Son étude euclidienne utilise la diagonalisation orthogonale des matrices symétriques réelles. Une équation du second degré s’écrit sous la forme \(x^{\mathsf T}Ax+2\ell^{\mathsf T}x+c=0\). On choisit des axes orthonormés adaptés pour diagonaliser la partie quadratique, puis on effectue les translations permises pour réduire les termes linéaires. Les signes des coefficients et le terme constant orientent la classification, mais chaque cas doit être vérifié : une équation quadratique peut être dégénérée, sans point réel ou réduire à une paire de droites.

Une **conique propre** est ici à distinguer des coniques dégénérées ; les détails fins de convention sur « propre » et le niveau de classification ne sont pas davantage définis dans l’item du programme. Pour les coniques réelles usuelles, l’ellipse, la parabole et l’hyperbole se reconnaissent par leur forme réduite. L’**excentricité** est un paramètre géométrique : pour une conique propre définie par foyer et directrice, avec foyer hors de la directrice, les points \(M\) vérifient \(MF=e\,d(M,\Delta)\). Les régimes usuels sont ellipse (\(0<e<1\)), parabole (\(e=1\)) et hyperbole (\(e>1\)); le cercle est un cas particulier d’ellipse traité séparément. Le ou les foyers et l’excentricité doivent être obtenus à partir de l’équation réduite en précisant le repère choisi.

Repères calculés : pour \(x^2/a^2+y^2/b^2=1\), avec \(a>b>0\), l’ellipse a ses foyers \((\pm c,0)\), où \(c^2=a^2-b^2\), et \(e=c/a\). Pour \(x^2/a^2-y^2/b^2=1\), l’hyperbole a \(c^2=a^2+b^2\) et \(e=c/a>1\). La parabole \(y^2=4px\), \(p>0\), a pour foyer \((p,0)\), directrice \(x=-p\) et excentricité 1.

Une **quadrique** de l’espace affine euclidien de dimension trois est un lieu défini par une équation polynomiale de degré au plus deux, usuellement écrite \(x^{\mathsf T}Ax+2\ell^{\mathsf T}x+c=0\), avec \(A\) symétrique. Les changements orthonormés d’axes et translations servent à la réduire. Les formes canoniques usuelles comprennent notamment ellipsoïdes, hyperboloïdes, cônes, paraboloïdes et cylindres, ainsi que des cas dégénérés ou sans points réels. Le programme dit « quadriques » sans énumérer une liste officielle de formes ni préciser les cas à démontrer : cette liste est un repère de révision, non une garantie d’exhaustivité attendue.

Parmi les formes réduites à savoir reconnaître figurent \(x^2/a^2+y^2/b^2+z^2/c^2=1\) (ellipsoïde), \(x^2/a^2+y^2/b^2-z^2/c^2=1\) (hyperboloïde à une nappe), \(x^2/a^2+y^2/b^2-z^2/c^2=-1\) (hyperboloïde à deux nappes) et \(z=x^2/a^2+y^2/b^2\) (paraboloïde elliptique), avec paramètres positifs. Les signes et les termes constants doivent être relus après la réduction, car ils distinguent notamment les nappes et les cas dégénérés.

### Exemple / usage

L’équation plane \(x^2/9+y^2/4=1\) est une ellipse centrée à l’origine, de demi-axes \(a=3\) et \(b=2\). Son foyer est sur l’axe du grand axe, à distance \(c=\sqrt{a^2-b^2}=\sqrt5\) du centre, et son excentricité vaut \(e=c/a=\sqrt5/3\). La démarche montre pourquoi la forme réduite précède le calcul du foyer. En dimension trois, \(x^2/4+y^2+z^2=1\) décrit un ellipsoïde ; ses sections planes peuvent être étudiées à l’aide de l’équation quadratique restreinte au plan.

### À savoir travailler

- Associer à une équation son terme quadratique et sa matrice symétrique ; diagonaliser orthogonalement.
- Réduire une équation du second degré en distinguant rotation des axes et translation de l’origine.
- Reconnaître les cas non dégénérés, dégénérés et sans points réels dans les exemples travaillés.
- Passer d’une conique réduite à ses foyers et son excentricité en distinguant ellipse, parabole et hyperbole.
- Réduire et interpréter des équations usuelles de quadriques dans un repère orthonormé de dimension trois.

## Checklist de révision

Coche les compétences seulement après les avoir mises en œuvre sans aide, dans des exercices variés. Pour les preuves, prépare une démonstration complète ou une restitution exacte du cours selon les résultats exigés par celui-ci.

- [ ] Je sais passer d’une description d’espace affine à sa direction et utiliser correctement les différences de points.
- [ ] Je sais calculer l’application linéaire associée, composer/inverser une application affine et reconnaître ses invariants.
- [ ] Je sais donner un sous-espace affine en paramètres et en équations, calculer des barycentres et justifier leur définition.
- [ ] Je sais construire un repère affine et distinguer groupe affine, homothétie-translation et affinité.
- [ ] Je sais caractériser convexité, enveloppe convexe et points extrémaux sur des exemples ; je peux en justifier les réponses.
- [ ] Je sais vérifier une isométrie, déterminer son orientation, ses points fixes et classer des exemples en dimensions 2 et 3.
- [ ] Je sais reconnaître et calculer une similitude directe ou indirecte du plan, son rapport, son centre ou ses éléments invariants.
- [ ] Je sais appliquer angles orientés, angle inscrit et critères de cocyclicité en contrôlant arcs, orientations et cas dégénérés.
- [ ] Je sais déterminer des groupes d’isométries de parties et des polygones réguliers ; j’ai résolu des exercices de relations métriques du triangle.
- [ ] Je sais utiliser les complexes en géométrie plane et traduire une conclusion algébrique en propriété géométrique.
- [ ] Je sais diagonaliser la partie quadratique, réduire des coniques/quadriques usuelles et calculer foyer/excentricité lorsque pertinent.
- [ ] J’ai vérifié mes connaissances par des preuves, méthodes de calcul, exemples et exercices, puis confronté mes erreurs à un cours et à des annales.

## Lacunes à combler et exigences de maîtrise

Le texte officiel énumère les thèmes, mais ne fournit ni les démonstrations, ni un inventaire de tous les théorèmes métriques du triangle, ni une liste exhaustive des cas de classification des quadriques, ni un barème de profondeur pour chacun. Il ne permet donc pas de garantir à lui seul la couverture de ces détails. Les conventions exactes de classification des isométries tridimensionnelles et la terminologie de « conique propre » peuvent aussi varier dans la présentation des cours : vérifier les définitions du cours suivi et savoir ramener les exemples à une forme canonique plutôt que mémoriser une liste ambiguë.

**Ce guide doit être complété par un cours, des exercices et des annales.** Il faut notamment travailler les démonstrations centrales, les changements de repères, les cas limites, les calculs de points fixes et les réductions quadratiques ; la checklist n’atteste pas à elle seule la maîtrise.

### Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel du concours externe spécial de mathématiques, session 2027, Titre 5 — Géométries affine et euclidienne"
