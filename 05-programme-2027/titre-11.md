# Titre 11 — Probabilités et statistiques (programme commun)

> **Statut : guide de révision, à travailler, ne remplace pas un cours.** Ce document organise et explicite les points du programme commun de la session 2027. Il donne des définitions, des énoncés de référence et des pistes d’application ; il ne fournit pas les démonstrations complètes et ne prétend pas remplacer le travail systématique du cours, des exercices et des annales. Les intitulés et le périmètre ci-dessous ont été vérifiés dans le programme officiel, titre 11, page 7 du PDF [1].

Le programme officiel rappelle que le programme du concours décrit des connaissances à maîtriser et à savoir illustrer, et n’est pas rédigé comme un plan de cours [1]. La progression proposée ici sert donc à réviser, pas à délimiter à elle seule tout le travail nécessaire.

## Plan officiel du bloc

- **11.1 — Définition d’un espace probabilisé**
- **11.2 — Variables aléatoires, loi d’une variable aléatoire**
  - **(a)** Loi discrète, loi absolument continue ; fonction de répartition et densité ; loi conjointe et indépendance ; espérance, transfert, moments, variance ; lois usuelles citées au programme.
  - **(b)** Fonction caractéristique ; fonction génératrice d’une variable aléatoire à valeurs dans \(\mathbb N\) ; application aux sommes de variables indépendantes.
- **11.3 — Convergences de suites de variables aléatoires**
  - **(a)** Convergences en probabilité, dans \(L^p\), presque sûrement et en loi ; inégalités de Markov et de Bienaymé-Tchebychev ; théorème de Lévy.
  - **(b)** Lois faible et forte des grands nombres ; théorème central limite.
- **11.4 — Statistiques**
  - **(a)** Statistiques descriptives univariées : indicateurs de position et de dispersion ; représentations graphiques.
  - **(b)** Série statistique à deux variables quantitatives, nuage de points, coefficient de corrélation, droite de régression des moindres carrés.
  - **(c)** Estimation ponctuelle ; estimation par intervalle de confiance.

**Précision de transcription.** Dans le PDF, la phrase sur « fonction de répartition et densité » puis « loi conjointe » apparaît deux fois à la suite dans 11.2(a). Le présent guide regroupe cette répétition typographique en une seule rubrique de notions ; elle ne conduit pas à ajouter une exigence distincte. En particulier, le programme commun s’arrête ici aux éléments du titre 11 : des notions présentes plus loin dans le programme spécifique de l’option A (par exemple chaînes de Markov ou espérance conditionnelle) ne sont pas ajoutées à ce guide du programme commun.

## 11.1 — Définition d’un espace probabilisé

### À savoir et à savoir formuler

Un **espace probabilisé** est un triplet \((\Omega,\mathcal A,\mathbb P)\), où \(\Omega\) est l’univers, \(\mathcal A\) une tribu (ou \(\sigma\)-algèbre) de parties de \(\Omega\), et \(\mathbb P\) une mesure de probabilité sur \((\Omega,\mathcal A)\). Une tribu contient \(\Omega\), est stable par complémentaire et par réunion dénombrable. La mesure \(\mathbb P\) est positive, dénombrablement additive et vérifie \(\mathbb P(\Omega)=1\). Les éléments de \(\mathcal A\) sont les événements. Il faut connaître les conséquences élémentaires telles que \(\mathbb P(\varnothing)=0\), la monotonie et, pour deux événements disjoints, l’additivité.

Deux événements \(A,B\) sont indépendants si \(\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)\). Des événements sont **mutuellement indépendants** si cette identité vaut pour toute sous-famille finie, et pas seulement pour chaque paire. Deux tribus \(\mathcal G,\mathcal H\subseteq\mathcal A\) sont indépendantes si tout événement de \(\mathcal G\) est indépendant de tout événement de \(\mathcal H\). L’indépendance des tribus formalise l’indépendance de toutes les informations qu’elles décrivent.

Pour une suite d’événements \((A_n)\), \(\limsup A_n=\bigcap_{m\ge1}\bigcup_{n\ge m} A_n\) est l’événement « une infinité de \(A_n\) se réalisent ». Les lemmes de **Borel-Cantelli** donnent :

- sans hypothèse d’indépendance, si \(\sum_n\mathbb P(A_n)<\infty\), alors \(\mathbb P(\limsup A_n)=0\) ;
- si les \(A_n\) sont indépendants et si \(\sum_n\mathbb P(A_n)=\infty\), alors \(\mathbb P(\limsup A_n)=1\).

La **loi du 0-1 de Kolmogorov** concerne une suite de variables (ou d’événements) indépendantes : tout événement de la tribu queue, c’est-à-dire qui ne dépend d’aucun nombre fini initial de coordonnées, a une probabilité égale à 0 ou à 1. Avant de l’utiliser, il faut établir que l’événement étudié est bien un événement de queue et que l’hypothèse d’indépendance est satisfaite.

Si \(\mathbb P(B)>0\), la probabilité conditionnelle de \(A\) sachant \(B\) est \(\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)\). Pour une partition dénombrable \((B_i)\) de \(\Omega\) constituée d’événements de probabilité positive, la formule des probabilités totales est
\[
\mathbb P(A)=\sum_i \mathbb P(A\mid B_i)\mathbb P(B_i).
\]
On vérifie la partition et les dénominateurs avant d’appliquer la formule.

### Exemple ou usage

Pour des lancers indépendants d’une pièce équilibrée, posons \(A_n=\{\text{le }n\text{-ième lancer donne pile}\}\). Comme \(\sum_n\mathbb P(A_n)=\infty\) et que les événements sont indépendants, le second lemme de Borel-Cantelli affirme que pile apparaît une infinité de fois presque sûrement. À l’inverse, si \(\mathbb P(A_n)=2^{-n}\), le premier lemme suffit à conclure que seuls un nombre fini de ces événements se produisent presque sûrement, sans exiger l’indépendance.

## 11.2 — Variables aléatoires, loi d’une variable aléatoire

### 11.2(a) Lois discrètes et absolument continues ; loi conjointe ; espérance et variance

Une variable aléatoire réelle \(X\) est une application mesurable de \((\Omega,\mathcal A)\) vers \(\mathbb R\). Sa loi est la mesure image \(\mathbb P_X\), définie par \(\mathbb P_X(C)=\mathbb P(X\in C)\) pour les boréliens \(C\). Sa fonction de répartition est \(F_X(x)=\mathbb P(X\le x)\) ; elle est croissante, continue à droite, et ses limites en \(-\infty\) et \(+\infty\) sont respectivement 0 et 1.

Une loi est **discrète** si elle est portée par un ensemble fini ou dénombrable : elle est décrite par les masses \(p_k=\mathbb P(X=x_k)\), avec \(p_k\ge0\) et \(\sum_kp_k=1\). Une loi est **absolument continue** si elle admet une densité \(f\ge0\) par rapport à la mesure de Lebesgue, avec \(\int_{\mathbb R}f(x)\,dx=1\) ; alors \(F_X(x)=\int_{-\infty}^{x} f(t)\,dt\) et \(\mathbb P(a<X\le b)=\int_a^b f(t)\,dt\). Une variable à densité n’a pas de masse ponctuelle : \(\mathbb P(X=x)=0\). Une fonction de répartition existe pour toute variable réelle, tandis qu’une densité n’existe pas nécessairement.

Pour un vecteur \((X,Y)\), sa **loi conjointe** est la loi sur \(\mathbb R^2\), par exemple décrite par les masses conjointes dans le cas discret ou par une densité jointe \(f_{X,Y}\) dans le cas absolument continu. Les lois marginales s’obtiennent en sommant ou en intégrant l’autre coordonnée. \(X\) et \(Y\) sont indépendantes si leur loi conjointe est le produit de leurs lois marginales ; dans le cas des fonctions de répartition, cela équivaut à \(F_{X,Y}(x,y)=F_X(x)F_Y(y)\). Pour des variables discrètes, la factorisation s’écrit \(p_{X,Y}(x,y)=p_X(x)p_Y(y)\), et pour une densité jointe, \(f_{X,Y}(x,y)=f_X(x)f_Y(y)\) presque partout. Vérifier une seule covariance n’établit pas l’indépendance.

L’espérance d’une variable positive est définie dans \([0,+\infty]\). Pour une variable complexe, elle est définie lorsque \(\mathbb E|X|<\infty\), en intégrant ses parties réelle et imaginaire. Le **théorème de transfert** exprime l’espérance d’une fonction de \(X\) directement à partir de sa loi : si \(g\ge0\), \(\mathbb E[g(X)]=\sum_k g(x_k)p_k\) dans le cas discret ou \(\int g(x)f_X(x)\,dx\) dans le cas à densité ; pour une fonction signée ou complexe, il faut l’intégrabilité absolue appropriée. Les moments d’ordre \(r\) sont les espérances de puissances (ou de puissances absolues selon la convention étudiée) lorsque celles-ci existent. Pour \(X\) réel de carré intégrable, \(\operatorname{Var}(X)=\mathbb E[(X-\mathbb EX)^2]=\mathbb E[X^2]-(\mathbb EX)^2\). Une variance requiert donc notamment un second moment fini.

### Lois usuelles à reconnaître et utiliser

Les conventions de support et de paramétrage doivent être indiquées. Pour p∈[0,1], une Bernoulli de paramètre p vaut 1 avec probabilité p, sinon 0 ; son espérance et sa variance sont p et p(1-p). Une binomiale 𝓑(n,p) compte les succès dans n essais de Bernoulli indépendants ; ses paramètres donnent moyenne np et variance np(1-p). Une géométrique modélise le rang du premier succès dans une suite d’essais indépendants de probabilité de succès p ; pour le support {1,2,…}, son paramètre doit vérifier 0<p≤1 et P(X=k)=(1-p)^(k-1)p. D’autres cours adoptent le nombre d’échecs avant le succès, support ℕ : il faut annoncer la convention.

Une Poisson de paramètre \(\lambda>0\) a masses \(e^{-\lambda}\lambda^k/k!\), \(k\in\mathbb N\), et modélise notamment un comptage d’événements rares sous des hypothèses adaptées. Une uniforme sur \([a,b]\), \(a<b\), a densité \(1/(b-a)\) sur cet intervalle. Une exponentielle de taux \(\lambda>0\) a densité \(\lambda e^{-\lambda x}\) pour \(x\ge0\) et intervient dans les modèles de temps d’attente. Une gaussienne \(\mathcal N(\mu,\sigma^2)\), \(\sigma>0\), a densité \((2\pi\sigma^2)^{-1/2}\exp(-(x-\mu)^2/(2\sigma^2))\). Savoir reconnaître une loi inclut son support, son paramètre, sa fonction ou densité et ses moments usuels.

**Exemple ou usage.** Le nombre de succès de 12 essais indépendants dont chacun a une probabilité \(0{,}3\) de succès suit une loi \(\mathcal B(12,0{,}3)\). Sa moyenne vaut \(3{,}6\) et sa variance \(2{,}52\). Dans un modèle continu de temps d’attente exponentiel de taux \(\lambda\), la probabilité d’attendre plus de \(t\ge0\) vaut \(e^{-\lambda t}\). Ces identifications supposent que les hypothèses du modèle sont justifiées.

### 11.2(b) Fonction caractéristique et fonction génératrice

La **fonction caractéristique** de toute variable réelle \(X\) est \(\varphi_X(t)=\mathbb E(e^{itX})\), pour \(t\in\mathbb R\). Cette espérance existe toujours puisque \(|e^{itX}|=1\). Elle détermine la loi et transforme une somme de variables indépendantes en produit : si \(X,Y\) sont indépendantes, \(\varphi_{X+Y}(t)=\varphi_X(t)\varphi_Y(t)\).

Pour une variable \(N\) à valeurs dans \(\mathbb N\), sa **fonction génératrice** est \(G_N(s)=\mathbb E(s^N)=\sum_{k\ge0}\mathbb P(N=k)s^k\), au moins pour \(|s|\le1\). Pour des variables indépendantes à valeurs dans \(\mathbb N\), \(G_{N_1+N_2}(s)=G_{N_1}(s)G_{N_2}(s)\) là où les expressions sont définies. Les dérivées en 1 permettent de récupérer des moments seulement sous les conditions d’existence nécessaires.

**Exemple ou usage.** Si \(N_1,N_2\) sont indépendantes et de lois de Poisson de paramètres \(\lambda_1,\lambda_2\), alors le produit de leurs fonctions génératrices est \(\exp((\lambda_1+\lambda_2)(s-1))\), fonction génératrice d’une Poisson de paramètre \(\lambda_1+\lambda_2\). Cela identifie la loi de la somme sans convoluer terme à terme les masses.

## 11.3 — Convergences de suites de variables aléatoires

### 11.3(a) Modes de convergence, inégalités et théorème de Lévy

Pour des variables \(X_n,X\) sur un même espace probabilisé :

- \(X_n\to X\) **en probabilité** si, pour tout \(\varepsilon>0\), \(\mathbb P(|X_n-X|>\varepsilon)\to0\).
- \(X_n\to X\) **dans \(L^p\)**, pour \(0<p<\infty\), si \(\mathbb E|X_n-X|^p\to0\) (les quantités doivent être définies). Pour \(p\ge1\), cela correspond à la convergence pour la norme \(L^p\) ; pour \(0<p<1\), cette expression ne définit pas une norme. Si le cours inclut \(p=\infty\), la convergence dans \(L^\infty\) signifie \(\operatorname*{ess\,sup}|X_n-X|\to0\). Pour tout \(p>0\) fini, la convergence dans \(L^p\) implique la convergence en probabilité par Markov.
- \(X_n\to X\) **presque sûrement** si \(\mathbb P(\{\omega:X_n(\omega)\to X(\omega)\})=1\).
- \(X_n\to X\) **en loi** si les lois convergent faiblement ; sur \(\mathbb R\), cela équivaut à la convergence des fonctions de répartition en tout point de continuité de \(F_X\).

La convergence presque sûre implique la convergence en probabilité, qui implique la convergence en loi ; les réciproques ne sont pas vraies en général. Une convergence en loi porte sur les lois, et non sur une réalisation commune des variables. La convergence en probabilité vers une constante implique la convergence en loi vers cette constante.

Pour \(Y\ge0\) intégrable et \(a>0\), l’inégalité de **Markov** donne \(\mathbb P(Y\ge a)\le\mathbb EY/a\). En appliquant cette inégalité à \(|X|^p\), on obtient une borne de queue en fonction du moment d’ordre \(p\). Pour \(X\) de variance finie, l’inégalité de **Bienaymé-Tchebychev** donne, pour \(\varepsilon>0\),
\[
\mathbb P(|X-\mathbb EX|\ge\varepsilon)\le\frac{\operatorname{Var}(X)}{\varepsilon^2}.
\]
Il faut vérifier la positivité dans Markov et l’existence de la moyenne et de la variance dans Tchebychev.

Le **théorème de Lévy** (continuité) relie convergence en loi et fonctions caractéristiques : une suite de fonctions caractéristiques \(\varphi_{X_n}\) converge ponctuellement vers une fonction \(\varphi\) continue en 0 si et seulement si \(\varphi\) est la fonction caractéristique d’une loi et que les lois de \(X_n\) convergent vers cette loi. En pratique, connaître le candidat-limite et vérifier la continuité en 0 sont indispensables ; une convergence ponctuelle arbitraire de fonctions ne suffit pas.

**Exemple ou usage.** Si \(X_n\) est centrée et \(\operatorname{Var}(X_n)\to0\), Tchebychev donne pour tout \(\varepsilon>0\) une probabilité d’écart d’au moins \(\varepsilon\) majorée par \(\operatorname{Var}(X_n)/\varepsilon^2\), donc \(X_n\to0\) en probabilité. Cette méthode est souvent plus directe que le calcul complet de la loi.

### 11.3(b) Lois des grands nombres et théorème central limite

Soient \(X_1,X_2,\ldots\) des variables indépendantes et de même loi, d’espérance \(\mu\) finie, et \(\overline X_n=(X_1+\cdots+X_n)/n\). La **loi faible des grands nombres** affirme, sous ces hypothèses usuelles (notamment si les variables ont une variance finie), que \(\overline X_n\to\mu\) en probabilité. La **loi forte des grands nombres**, pour des variables indépendantes de même loi intégrables, affirme que \(\overline X_n\to\mu\) presque sûrement. Les versions et hypothèses doivent être formulées avec soin : ne pas attribuer une hypothèse de variance à toute version forte, ni omettre les hypothèses d’indépendance et d’intégrabilité.

Le **théorème central limite** classique : si les \(X_i\) sont indépendantes, de même loi, d’espérance \(\mu\) et de variance finie \(\sigma^2>0\), alors
\[
\frac{\sum_{i=1}^nX_i-n\mu}{\sigma\sqrt n}\ \xrightarrow[\text{loi}]{}\ \mathcal N(0,1).
\]
Il décrit une approximation de la loi des sommes centrées et réduites pour grand \(n\), pas une égalité exacte pour un échantillon de taille finie.

**Exemple ou usage.** Pour des Bernoulli indépendantes de paramètre \(p\), la moyenne empirique converge vers \(p\), et le TCL donne l’approximation \(\sqrt n(\overline X_n-p)/\sqrt{p(1-p)}\approx\mathcal N(0,1)\) lorsque \(0<p<1\) et que \(n\) est suffisamment grand. L’usage numérique de l’approximation doit tenir compte de la taille d’échantillon et du modèle.

## 11.4 — Statistiques

### 11.4(a) Statistiques descriptives univariées

Une série univariée est un ensemble observé de valeurs quantitatives. Les indicateurs de **position** résument où se situent les observations : moyenne, médiane, quantiles et, pour des données discrètes, mode. Les indicateurs de **dispersion** décrivent leur étalement : étendue, écart interquartile, variance et écart-type. Les conventions de calcul sur une série (notamment les diviseurs \(n\) ou \(n-1\) selon que l’on décrit les données ou estime une variance de population) doivent être précisées.

Les représentations graphiques prévues au programme comprennent notamment diagrammes en bâtons pour des valeurs discrètes, histogrammes pour des données regroupées ou continues, et boîtes à moustaches. Le choix du graphique dépend du type de variable et de la question ; un histogramme dépend du choix et de la largeur des classes.

**Exemple ou usage.** Pour comparer deux séries ayant une moyenne proche, on peut examiner leurs médianes, écarts interquartiles ou boîtes à moustaches : une série peut présenter des valeurs extrêmes qui tirent la moyenne et l’écart-type. Un graphique décrit un jeu de données ; à lui seul, il ne prouve pas une relation dans une population.

### 11.4(b) Séries à deux variables, corrélation et régression

Une série statistique à deux variables quantitatives s’écrit \((x_i,y_i)_{1\le i\le n}\). Son **nuage de points** associe à chaque observation le point \((x_i,y_i)\). La covariance empirique décrit le sens de variation conjoint ; le coefficient de corrélation linéaire de Pearson est la covariance divisée par le produit des écarts-types, lorsque ceux-ci sont non nuls. Selon les conventions de série, un même diviseur intervient dans covariance et variances. Le coefficient est compris entre \(-1\) et \(1\), et mesure la force et le sens d’une association linéaire. Il ne mesure pas toute dépendance : une corrélation nulle n’implique pas l’indépendance.

La **droite de régression des moindres carrés de \(y\) sur \(x\)** minimise la somme des carrés des résidus verticaux \(\sum_i(y_i-a-bx_i)^2\). Si la dispersion des \(x_i\) est non nulle, sa pente vaut \(b=\operatorname{Cov}_{\rm emp}(x,y)/\operatorname{Var}_{\rm emp}(x)\) et son ordonnée à l’origine \(a=\bar y-b\bar x\). La droite passe par \((\bar x,\bar y)\). Inverser la régression de \(y\) sur \(x\) et celle de \(x\) sur \(y\) ne donne généralement pas des droites inverses l’une de l’autre.

**Exemple ou usage.** Dans une série reliant temps d’étude et résultat à un test, le nuage permet de repérer une tendance et les observations atypiques. La pente de la droite des moindres carrés résume l’association linéaire observée ; elle ne permet pas, sans hypothèses supplémentaires, de conclure que le temps d’étude cause l’écart de résultats.

### 11.4(c) Estimation ponctuelle et intervalles de confiance

En statistique inférentielle, on observe un échantillon issu d’un modèle dépendant d’un paramètre inconnu \(\theta\). Un **estimateur** est une statistique calculée à partir des observations ; une estimation ponctuelle remplace le paramètre par une valeur calculée. Pour discuter la qualité d’un estimateur, il faut distinguer biais, variance, erreur quadratique et consistance, et toujours préciser le modèle et les hypothèses d’échantillonnage. Le programme cite l’estimation ponctuelle sans imposer ici une liste de propriétés ou une méthode unique.

Un intervalle de confiance est une procédure qui, à partir de l’échantillon, construit un intervalle aléatoire destiné à couvrir le paramètre. Un intervalle de niveau \(1-\alpha\) a une probabilité de couverture égale (ou, selon la procédure, au moins ou approximativement) à \(1-\alpha\), sous les hypothèses annoncées. Dans l’interprétation fréquentiste, le paramètre est fixe et c’est l’intervalle qui varie d’un échantillon à l’autre. La méthode peut être exacte ou asymptotique ; il faut indiquer laquelle, et ne pas interpréter le niveau comme une probabilité a posteriori que le paramètre fixe appartienne à l’intervalle observé.

**Exemple ou usage.** Pour un échantillon gaussien indépendant de moyenne inconnue et de variance connue \(\sigma^2\), un intervalle bilatéral classique de niveau \(1-\alpha\) pour la moyenne est \([\overline X_n-z_{1-\alpha/2}\sigma/\sqrt n,\;\overline X_n+z_{1-\alpha/2}\sigma/\sqrt n]\), où \(z_q\) est le quantile d’ordre \(q\) de la loi normale centrée réduite. Cette formule dépend explicitement du modèle gaussien et de la variance connue ; elle n’est pas une recette universelle.

## Checklist de révision à cocher

À cocher après avoir été capable d’expliquer et de refaire le point sans suivre une solution. Les cases « preuve/méthode » indiquent un travail à accomplir : elles ne signifient pas que ce guide donne une démonstration complète.

### Connaissances et preuves/méthodes

- [ ] Je sais définir un espace probabilisé, une tribu et une probabilité, et justifier les identités élémentaires de mesure.
- [ ] Je distingue indépendance deux à deux et indépendance mutuelle ; je sais définir l’indépendance de deux tribus et reconnaître une tribu queue.
- [ ] Je sais appliquer chaque lemme de Borel-Cantelli en vérifiant exactement ses hypothèses, et énoncer la loi du 0-1 de Kolmogorov dans le cadre indépendant.
- [ ] Je sais conditionner par un événement de probabilité positive et décomposer un calcul avec une partition dénombrable pour la formule des probabilités totales.
- [ ] Je sais passer d’une loi discrète ou d’une densité à sa fonction de répartition, et préciser si une densité existe réellement.
- [ ] Je sais retrouver les marginales d’une loi conjointe, tester la factorisation et distinguer indépendance, covariance nulle et corrélation nulle.
- [ ] Je sais appliquer le transfert à une variable discrète ou à densité en vérifiant l’intégrabilité ; je sais calculer espérance, moments et variance avec les hypothèses requises.
- [ ] Je sais identifier les lois de Bernoulli, binomiale, géométrique, Poisson, uniforme, exponentielle et gaussienne, en précisant support et convention de paramétrage.
- [ ] Je sais écrire une fonction caractéristique ou génératrice et utiliser le produit pour une somme de variables indépendantes ; je vérifie les conditions des moments récupérés par dérivation.
- [ ] Je sais définir les quatre convergences, utiliser les implications valides sans supposer leurs réciproques, et formuler convergence en loi aux points de continuité pertinents.
- [ ] Je sais choisir Markov ou Bienaymé-Tchebychev et indiquer les hypothèses (positivité, intégrabilité, variance finie) avant de conclure.
- [ ] Je sais énoncer le théorème de Lévy avec la condition de continuité en 0 et un candidat de fonction caractéristique d’une loi limite.
- [ ] Je sais appliquer LGN faible/forte et TCL en nommant indépendance, identité de loi, moments, mode de convergence et normalisation.
- [ ] Je sais calculer et interpréter des indicateurs de position et de dispersion, choisir un graphique adapté et exposer la convention retenue.
- [ ] Je sais calculer le coefficient de corrélation et la droite des moindres carrés, vérifier la non-nullité de la dispersion de \(x\), et éviter toute conclusion causale injustifiée.
- [ ] Je sais distinguer estimateur et estimation, expliquer le niveau fréquentiste d’un intervalle de confiance et préciser si sa garantie est exacte ou asymptotique.

### Calculs, exemples et exercices

- [ ] J’ai refait un exercice de probabilité totale avec partition, puis un exercice séparant conditionnement et indépendance.
- [ ] J’ai traité un exercice de Borel-Cantelli où l’indépendance n’est pas requise, et un autre où elle est nécessaire pour la seconde partie.
- [ ] J’ai calculé une loi conjointe et ses marginales, puis vérifié l’indépendance par factorisation.
- [ ] J’ai calculé des espérances et variances dans les cas discret et continu, avec les conditions de finitude indiquées.
- [ ] J’ai utilisé fonctions caractéristiques ou génératrices pour identifier la loi d’une somme indépendante.
- [ ] J’ai comparé deux modes de convergence sur des exemples et établi une borne de probabilité avec Markov ou Tchebychev.
- [ ] J’ai résolu des exercices distincts de loi faible, loi forte et TCL sans confondre leurs conclusions.
- [ ] J’ai construit une description univariée, un nuage de points et une droite de régression sur des données ; j’ai interprété les résultats sans extrapolation abusive.
- [ ] J’ai construit ou interprété au moins un intervalle de confiance en explicitant son modèle et sa couverture.
- [ ] J’ai complété ces révisions par des exercices corrigés et des sujets d’annales du concours, puis repris les questions que je ne pouvais pas résoudre sans aide.

## Lacunes et exigences de maîtrise

Ce guide ne développe pas les démonstrations des lemmes de Borel-Cantelli, de la loi du 0-1, du théorème de Lévy, des lois des grands nombres ou du TCL. Il donne leurs formulations de référence et les conditions à vérifier ; leur preuve, leurs variantes et les techniques de démonstration sont à travailler à partir du cours. Le programme officiel ne prescrit pas, dans ce titre, un catalogue de méthodes d’estimation, des intervalles particuliers ou une définition unique de toutes les statistiques descriptives : les exemples retenus ici illustrent les notions, sans constituer une liste normative exhaustive.

Les pièges majeurs à contrôler sont l’oubli des hypothèses d’indépendance dans Borel-Cantelli ou les lois limites ; la confusion entre indépendance deux à deux et mutuelle ; l’emploi d’une densité sans justification ; une espérance ou variance utilisée sans vérifier son existence ; l’inversion des implications de convergence ; une application du théorème de Lévy sans continuité en 0 ; la confusion entre approximation TCL et égalité exacte ; les conventions différentes pour la loi géométrique et pour les indicateurs empiriques ; et l’interprétation causale d’une corrélation ou probabiliste d’un intervalle de confiance fréquentiste.

**À compléter impérativement par le cours, des exercices et les annales.** La maîtrise attendue implique de savoir définir, énoncer avec hypothèses, choisir un outil pertinent, mener les calculs et illustrer les résultats. La checklist n’est acquise que si ces tâches peuvent être effectuées de façon autonome, y compris dans des problèmes nouveaux.

## Source officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Concours externe spécial de l’agrégation du second degré, section mathématiques — Programme de la session 2027"
