# Titre 7 — Analyse à une variable complexe

> **Statut : guide de révision, à travailler, ne remplace pas un cours.** Ce document aide à organiser les révisions et à vérifier les acquis ; il ne prétend ni fournir les démonstrations complètes ni garantir une exhaustivité au-delà des points vérifiés dans le programme officiel. Le support doit être complété par le cours, des exercices et des annales.

Le PDF officiel de la session 2027 nomme ce titre **« 7 Analyse à une variable complexe »** (et non « Analyse complexe et séries entières »). Il comprend exactement deux unités, 7.1 et 7.2, avec les sous-items (a) à (e) reproduits ci-dessous. Le descriptif initial ne nommait pas le **principe du prolongement analytique**, pourtant explicitement inclus dans 7.2(c). Les intitulés et cette correction suivent le PDF officiel [1].

## 7.1 Séries entières

### 7.1(a) « Rayon de convergence. Propriétés de la somme d’une série entière sur son disque de convergence : continuité, dérivabilité par rapport à la variable complexe, primitives. »

Pour une série entière \(\sum_{n\geq 0}a_n(z-z_0)^n\), son rayon de convergence est
\[
R=\frac{1}{\limsup_{n\to\infty}|a_n|^{1/n}},
\]
avec les conventions usuelles pour \(0\) et \(+\infty\). Elle converge absolument pour \(|z-z_0|<R\), diverge pour \(|z-z_0|>R\), et son comportement sur le cercle \(|z-z_0|=R\) doit être étudié séparément. Sur tout disque fermé strictement inclus dans le disque ouvert de convergence, la convergence est uniforme.

La somme est holomorphe dans le disque ouvert, donc continue et dérivable au sens complexe. On peut dériver terme à terme : \(S'(z)=\sum_{n\geq1}na_n(z-z_0)^{n-1}\), dont le rayon de convergence est le même. Une primitive s’obtient également terme à terme, par exemple \(A+\sum_{n\geq0}a_n(z-z_0)^{n+1}/(n+1)\), avec le même rayon.

**Exemple et usage.** Pour \(\sum_{n\geq0}z^n\), le rayon vaut 1 et la somme est \(1/(1-z)\) sur \(|z|<1\). La série dérivée donne \(\sum_{n\geq1}nz^{n-1}=1/(1-z)^2\). À retenir : le rayon seul ne dit rien, en général, sur la convergence aux points du cercle frontière.

**Checklist — 7.1(a)**
- [ ] Calculer un rayon par le critère de Cauchy-Hadamard ou le critère de d’Alembert quand il s’applique.
- [ ] Distinguer le disque ouvert de convergence et l’étude séparée de la frontière.
- [ ] Justifier la convergence uniforme sur tout compact du disque et l’holomorphie de la somme.
- [ ] Dériver ou intégrer terme à terme en indiquant le domaine de validité.
- [ ] S’exercer sur une série géométrique, une série avec coefficients polynomiaux et un exemple de frontière.

### 7.1(b) « Exponentielle complexe ; propriétés. Extension des fonctions circulaires au domaine complexe. Développement en série entière des fonctions usuelles. »

L’exponentielle complexe est définie par \(e^z=\sum_{n\geq0}z^n/n!\). Elle est entière, vérifie \((e^z)'=e^z\), \(e^{z+w}=e^ze^w\), ne s’annule jamais et satisfait \(e^{x+iy}=e^x(\cos y+i\sin y)\). Ainsi \(e^{iy}\) décrit le cercle unité. Les extensions complexes des fonctions circulaires sont définies à partir de l’exponentielle : \(\cos z=(e^{iz}+e^{-iz})/2\) et \(\sin z=(e^{iz}-e^{-iz})/(2i)\). Elles sont entières et vérifient les identités usuelles, qui restent valables dans le domaine complexe.

Parmi les développements usuels à savoir reconnaître et utiliser figurent
\[
\frac1{1-z}=\sum_{n\geq0}z^n\quad(|z|<1),\qquad
\log(1+z)=\sum_{n\geq1}(-1)^{n+1}\frac{z^n}{n}\quad(|z|<1),
\]
\[
e^z=\sum_{n\geq0}\frac{z^n}{n!},\quad
\sin z=\sum_{n\geq0}\frac{(-1)^nz^{2n+1}}{(2n+1)!},\quad
\cos z=\sum_{n\geq0}\frac{(-1)^nz^{2n}}{(2n)!}.
\]
La série de \(\log(1+z)\) représente la détermination nulle en 0 et vaut dans le disque \(|z|<1\). Ces exemples illustrent l’expression officielle « fonctions usuelles » ; le programme ne fournit pas ici une liste exhaustive de développements.

**Exemple et usage.** Résoudre \(e^z=1\) revient à écrire \(z=2k\pi i\), \(k\in\mathbb Z\). Les séries de \(\sin\) et \(\cos\) permettent aussi d’obtenir leurs valeurs et dérivées autour de 0.

**Checklist — 7.1(b)**
- [ ] Retrouver les propriétés algébriques de l’exponentielle et la formule d’Euler.
- [ ] Passer entre les définitions exponentielles et les identités de \(\sin\) et \(\cos\).
- [ ] Connaître les développements usuels et leurs rayons/domaines de validité.
- [ ] Choisir une série adaptée pour calculer une valeur, une dérivée ou un comportement local.
- [ ] Vérifier les équations exponentielles et les périodicités dans \(\mathbb C\), sans transposer abusivement les propriétés réelles.

## 7.2 Fonctions d’une variable complexe

### 7.2(a) « Fonctions holomorphes. Conditions de Cauchy-Riemann. Intégrale d’une fonction continue le long d’un chemin C¹ par morceaux. Primitives d’une fonction holomorphe. Déterminations du logarithme. Théorème d’holomorphie sous le signe intégrale. »

Une fonction \(f:U\to\mathbb C\), définie sur un ouvert \(U\subset\mathbb C\), est holomorphe si elle est complexe dérivable en tout point de \(U\). En écrivant \(f=u+iv\) et \(z=x+iy\), les conditions de Cauchy-Riemann sont \(u_x=v_y\) et \(u_y=-v_x\). Si \(u,v\) sont de classe \(C^1\) sur \(U\), ces conditions sont suffisantes à l’holomorphie ; elles sont nécessaires à l’existence de la dérivée complexe.

Un chemin \(\gamma:[a,b]\to U\) est \(C^1\) par morceaux s’il est continu et \(C^1\) sur un nombre fini de sous-intervalles. Pour \(f\) continue, son intégrale est définie par \(\int_\gamma f(z)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt\), avec somme sur les morceaux. Si \(f=F'\) possède une primitive sur un ouvert contenant le chemin, alors \(\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))\). En particulier, toute intégrale le long d’un chemin fermé est nulle. Une condition suffisante classique d’existence d’une primitive pour toute fonction holomorphe est que son domaine soit simplement connexe ; l’holomorphie seule sur un domaine quelconque ne suffit pas.

Une détermination holomorphe du logarithme sur un domaine \(V\subset\mathbb C\setminus\{0\}\) est une fonction holomorphe \(L\) telle que \(e^{L(z)}=z\). Le logarithme complexe est multivalué avant le choix d’une détermination. Il n’existe pas de logarithme holomorphe global sur \(\mathbb C\setminus\{0\}\) ; sur \(\mathbb C\setminus(-\infty,0]\), on peut choisir la détermination principale.

Le théorème d’holomorphie sous le signe intégrale permet de dériver une intégrale dépendant d’un paramètre complexe sous des hypothèses de régularité et de domination locales. Un cadre suffisant courant : si \(K(z,t)\) est continue en \(t\), holomorphe en \(z\) sur un ouvert, et si sur tout compact en \(z\), les fonctions intégrées ainsi que leurs dérivées en \(z\) sont dominées par une fonction intégrable indépendante de \(z\), alors \(F(z)=\int K(z,t)\,dt\) est holomorphe et \(F'(z)=\int \partial_zK(z,t)\,dt\). Les hypothèses exactes dépendent du cadre d’intégration ; il faut les énoncer dans chaque application.

**Conditions et exemple.** Pour \(f(z)=z^2\), les parties réelle et imaginaire \(u=x^2-y^2\), \(v=2xy\) vérifient Cauchy-Riemann et sont \(C^1\), donc \(f\) est holomorphe. Pour \(f(z)=1/z\) sur \(\mathbb C\setminus\{0\}\), aucune primitive globale n’existe : son intégrale sur le cercle unité orienté positivement vaut \(2\pi i\). Ce calcul montre pourquoi la topologie du domaine importe.

**Checklist — 7.2(a)**
- [ ] Vérifier l’ouverture du domaine et distinguer holomorphie, continuité et dérivabilité réelle.
- [ ] Calculer les dérivées partielles et appliquer Cauchy-Riemann avec les hypothèses de régularité requises.
- [ ] Paramétrer un chemin \(C^1\) par morceaux et calculer une intégrale, en respectant orientation et morceaux.
- [ ] Utiliser une primitive ou un théorème d’existence de primitive en vérifiant la topologie du domaine.
- [ ] Définir une branche du logarithme sur son domaine et repérer une obstruction globale.
- [ ] Dériver sous le signe intégral en énonçant une domination locale suffisante.
- [ ] Faire des exercices d’intégrales de chemins ouverts et fermés ainsi que de paramètres complexes.

### 7.2(b) « Indice d’un chemin fermé C¹ par morceaux par rapport à un point. »

Pour un chemin fermé \(\gamma\) et un point \(a\) qui n’appartient pas à son image, son indice est
\[
\operatorname{Ind}(\gamma,a)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-a}.
\]
C’est un entier : il mesure le nombre de tours algébriques du chemin autour de \(a\), en tenant compte de l’orientation et des tours répétés. Il est constant quand \(a\) varie dans une même composante connexe du complémentaire du chemin.

**Exemple et usage.** Le cercle unité parcouru une fois dans le sens direct a un indice 1 par rapport à 0 et 0 par rapport à un point extérieur, par exemple 2. L’indice intervient dans les formules de Cauchy et le théorème des résidus ; ne pas confondre un tour positif et un tour négatif.

**Checklist — 7.2(b)**
- [ ] Vérifier que le point considéré n’appartient pas à l’image du chemin fermé.
- [ ] Calculer l’indice par l’intégrale ou par la géométrie du parcours.
- [ ] Tenir compte du sens de parcours, des répétitions et des composantes du complémentaire.
- [ ] S’exercer sur des cercles et des chemins composés, avec des points intérieurs et extérieurs.

### 7.2(c) « Formules de Cauchy. Analyticité d’une fonction holomorphe. Principe des zéros isolés. Principe du prolongement analytique. Principe du maximum. »

**Formules de Cauchy.** Si \(f\) est holomorphe sur un ouvert contenant un disque fermé et son bord circulaire \(\Gamma\), orienté positivement, alors pour \(a\) à l’intérieur,
\[
f(a)=\frac{1}{2\pi i}\int_\Gamma\frac{f(\zeta)}{\zeta-a}\,d\zeta,
\qquad
f^{(n)}(a)=\frac{n!}{2\pi i}\int_\Gamma\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta.
\]
Ces formules impliquent les estimations de Cauchy et la régularité analytique.

**Analyticité.** Toute fonction holomorphe est localement représentable par une série entière autour de chaque point de son domaine. Le rayon de cette représentation dépend de la région où la fonction reste holomorphe ; les singularités les plus proches limitent souvent ce rayon.

**Zéros isolés et prolongement analytique.** Si une fonction holomorphe sur un domaine connexe n’est pas identiquement nulle, ses zéros sont isolés. Si deux fonctions holomorphes sur un domaine connexe coïncident sur un ensemble ayant un point d’accumulation à l’intérieur, elles coïncident partout dans ce domaine. C’est le principe du prolongement analytique : une égalité locale peut imposer l’égalité globale sur la composante connexe. La connexité du domaine est une hypothèse importante.

**Principe du maximum.** Si \(f\) est holomorphe sur un domaine connexe, le module \(|f|\) ne peut atteindre un maximum local intérieur que si \(f\) est constante. En particulier, sur un domaine borné, si \(f\) est continue sur l’adhérence et holomorphe à l’intérieur, son maximum de module est atteint au bord, sauf cas constant.

**Exemple et usage.** Si deux fonctions entières coïncident sur l’axe réel, elles coïncident partout, car cet ensemble a des points d’accumulation dans le domaine. Pour borner \(|f|\) dans un disque, on peut donc souvent réduire l’estimation au bord grâce au principe du maximum.

**Checklist — 7.2(c)**
- [ ] Énoncer les formules de Cauchy avec contour, orientation, domaine et point intérieur corrects.
- [ ] Déduire des formules les dérivées et les estimations de Cauchy.
- [ ] Expliquer le passage de holomorphe à analytique et exploiter un développement local.
- [ ] Appliquer le principe des zéros isolés en séparant le cas de la fonction identiquement nulle.
- [ ] Utiliser le principe du prolongement analytique en vérifiant connexité et accumulation intérieure.
- [ ] Appliquer le principe du maximum sans oublier la frontière ni le cas constant.
- [ ] Résoudre des exercices de détermination d’une fonction par ses valeurs et d’estimation dans un disque.

### 7.2(d) « Singularités isolées. Séries de Laurent. Fonctions méromorphes. Théorème des résidus. »

Une singularité isolée de \(f\) en \(a\) signifie que \(f\) est holomorphe dans un disque ponctué \(0<|z-a|<r\). Dans cet anneau, elle possède un développement de Laurent \(\sum_{n\in\mathbb Z}c_n(z-a)^n\). La partie principale contient les puissances négatives. Selon la forme de cette partie, la singularité est amovible (aucune puissance négative), un pôle (partie principale finie non nulle) ou essentielle (une infinité de coefficients négatifs non nuls).

Une fonction méromorphe est holomorphe sauf en des pôles isolés. Le résidu en \(a\), \(\operatorname{Res}(f,a)\), est le coefficient de \((z-a)^{-1}\) dans le développement de Laurent. Pour un pôle simple, \(\operatorname{Res}(f,a)=\lim_{z\to a}(z-a)f(z)\) ; pour un pôle d’ordre \(m\), on peut utiliser \(\frac1{(m-1)!}\lim_{z\to a}\frac{d^{m-1}}{dz^{m-1}}[(z-a)^mf(z)]\).

**Théorème des résidus.** Si \(f\) est méromorphe dans un ouvert contenant le domaine délimité par un contour fermé régulier par morceaux, sans pôle sur le contour, alors l’intégrale sur le contour est \(2\pi i\) fois la somme des résidus à l’intérieur, comptés selon les indices du contour. Pour un contour simple orienté positivement, les pôles intérieurs sont comptés une fois. Cette formule est également valable en tenant compte de l’indice pour les contours non simples dans le cadre usuel.

**Exemple et usage.** Pour \(f(z)=1/(z(z-1))\), les résidus en 0 et 1 valent respectivement \(-1\) et 1. Le contour doit exclure ou inclure les pôles selon le domaine et l’orientation ; il ne peut passer par un pôle. Les résidus transforment le calcul d’intégrales complexes en une somme finie de coefficients locaux.

**Checklist — 7.2(d)**
- [ ] Déterminer le type d’une singularité à partir de la partie principale de Laurent ou d’un critère adapté.
- [ ] Calculer une série de Laurent sur un anneau de validité précis.
- [ ] Repérer les pôles et établir leur ordre.
- [ ] Calculer les résidus par coefficient, limite, formule de pôle ou décomposition simple.
- [ ] Appliquer le théorème des résidus en vérifiant absence de pôle sur le contour et orientation/indices.
- [ ] S’exercer sur des intégrales autour de plusieurs pôles et sur des singularités amovibles ou essentielles.

### 7.2(e) « Suites et séries de fonctions holomorphes. Stabilité de l’holomorphie par convergence uniforme. »

La stabilité pertinente s’énonce localement : si \((f_n)\) est une suite de fonctions holomorphes sur un ouvert \(U\) et converge uniformément sur tout compact de \(U\) vers \(f\), alors \(f\) est holomorphe. Pour une série \(\sum f_n\), une convergence uniforme sur tout compact de la série assure donc l’holomorphie de sa somme. La convergence uniforme sur tout \(U\), lorsqu’elle est établie, implique la convergence uniforme sur tout compact ; une convergence simplement ponctuelle ne suffit pas. La convergence locale uniforme permet aussi, sous les théorèmes usuels, de passer à la limite dans les intégrales sur des contours compacts. La convergence des dérivées nécessite des hypothèses supplémentaires ou l’usage de la formule de Cauchy ; elle ne découle pas de la convergence uniforme seule sans justification.

**Exemple et usage.** Les sommes partielles \(S_N(z)=\sum_{n=0}^Nz^n\) sont holomorphes et convergent uniformément sur tout compact de \(|z|<1\) vers \(1/(1-z)\), qui est donc holomorphe dans ce disque.

**Checklist — 7.2(e)**
- [ ] Distinguer convergence simple, convergence uniforme et convergence uniforme sur tout compact.
- [ ] Vérifier le domaine commun d’holomorphie et la convergence locale uniforme avant d’invoquer la stabilité.
- [ ] Appliquer le résultat aux suites et aux sommes de séries holomorphes.
- [ ] Ne pas conclure à la convergence des dérivées sans hypothèse ou argument supplémentaire.
- [ ] Construire des estimations uniformes sur un compact et traiter un exemple de série entière comme série de fonctions.

## Lacunes à combler et exigences de maîtrise

Les résultats précédents sont des rappels synthétiques, non des démonstrations. Il reste à apprendre les preuves et les variantes exigées par le cours, en particulier les théorèmes de Cauchy, l’analyticité, les principes d’unicité, les classifications de singularités et le théorème des résidus. Les calculs doivent être repris à la main : paramétrage et orientation des chemins, détermination des domaines de convergence, coefficients de Laurent et résidus, choix d’une branche du logarithme et vérification systématique des hypothèses. Il faut aussi pratiquer la rédaction complète d’un raisonnement, les contre-exemples aux réciproques abusives et les exercices de synthèse/annales. Le PDF énumère les connaissances à maîtriser et à illustrer, mais ne détaille pas une liste exhaustive des développements usuels, variantes de théorèmes ou exercices ; aucune liste plus précise n’est inventée ici.

**Exigence de travail :** compléter ce guide par le cours, des exercices variés corrigés et des annales du concours. Cocher une compétence n’atteste la maîtrise qu’après l’avoir mobilisée sans aide dans plusieurs problèmes, en énonçant clairement les hypothèses et le domaine de validité.

## Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Concours externe spécial de l’agrégation du second degré, section mathématiques, programme de la session 2027"
