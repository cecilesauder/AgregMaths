# Concours externe spécial de mathématiques — session 2027
## Programme spécifique — Option A : probabilités et statistiques

> **Statut : guide de révision, à travailler, ne remplace pas un cours.**
>
> Ce document suit les huit sous-parties (a) à (h) du « Programme spécifique de l’option A » du texte officiel. Le programme précise un périmètre et des notions, mais ne fixe pas partout les conventions, variantes de théorèmes, niveau de détail des preuves, ni les algorithmes de simulation à privilégier. Les rappels ci-dessous donnent des repères et des énoncés centraux sous des hypothèses explicitement indiquées ; ils ne prétendent ni remplacer les démonstrations de cours ni constituer une exhaustivité au-delà des points que le texte officiel permet de vérifier. [1]

L’option A s’ajoute au programme commun des titres 1 à 12. Ainsi, les notions de probabilité du titre 11 — espaces probabilisés, variables aléatoires, lois, indépendance, espérance, variance, convergences, lois des grands nombres, théorème central limite et premières notions statistiques — restent des prérequis et ne sont pas remplacées par ce guide. [1]

## (a) Utilisation de lois usuelles et simulation

**Intitulé officiel :** « Utilisation de lois usuelles (voir titre 11, ainsi que loi multinomiale, hypergéométrique, Gamma, du χ²) pour modéliser certains phénomènes aléatoires. Exemples : temps d’attente ou durée de vie, erreurs de mesure, sondages… Méthodes de simulation de variables aléatoires. » [1]

### Notions à savoir

Le renvoi au titre 11 demande de maîtriser les lois qui y sont nommées, notamment Bernoulli, binomiale, géométrique, Poisson, uniforme, exponentielle et gaussienne, avec leurs paramètres, supports, fonctions de masse ou densités, fonctions de répartition, espérances et variances. Le complément énumère explicitement les lois multinomiale, hypergéométrique, Gamma et du χ².

Pour un vecteur de comptages multinomial de paramètres \(n\) et \((p_1,\ldots,p_k)\), où \(p_i\geq0\) et \(\sum_i p_i=1\), les composantes comptent les occurrences des catégories dans \(n\) essais indépendants. Pour une population de taille \(N\) comportant \(K\) succès, un tirage uniforme de taille \(n\) sans remise donne une variable hypergéométrique de support \(\max(0,n-(N-K)),\ldots,\min(n,K)\). La loi Gamma de forme \(\alpha>0\) et taux \(\lambda>0\) a pour densité \(f(x)=\lambda^\alpha x^{\alpha-1}e^{-\lambda x}/\Gamma(\alpha)\) sur \(x>0\) ; les conventions forme-échelle existent, donc vérifier la paramétrisation. La loi du χ² à \(r\) degrés de liberté est la loi de la somme des carrés de \(r\) variables gaussiennes standard indépendantes ; c’est un cas particulier de loi Gamma.

Savoir choisir un modèle suppose d’expliciter le mécanisme : avec ou sans remise, nombre fixé d’essais, événements rares, erreur additive, temps d’attente, etc. La simulation doit respecter ce mécanisme. On pourra construire des variables à partir d’un générateur uniforme, utiliser l’inversion de la fonction de répartition lorsqu’elle est accessible, ou simuler selon une construction connue (par exemple somme d’exponentielles pour certaines Gamma de paramètre entier). Il faut distinguer une réalisation simulée de la loi théorique et examiner l’erreur d’échantillonnage.

### Repères et usage

Pour \(X\sim\mathrm{Hypergéométrique}(N,K,n)\), \(\mathbb E[X]=nK/N\) et, lorsque \(N>1\), \(\operatorname{Var}(X)=n(K/N)(1-K/N)(N-n)/(N-1)\). Ce facteur de correction rend compte du tirage sans remise. **Usage :** estimer le nombre de produits défectueux dans un échantillon prélevé sans remise dans un lot fini. Une binomiale peut parfois l’approcher si la population est grande relativement à l’échantillon, mais ce n’est pas le même modèle.

Pour \(X\sim\mathrm{Gamma}(\alpha,\lambda)\) dans la convention taux, \(\mathbb E[X]=\alpha/\lambda\) et \(\operatorname{Var}(X)=\alpha/\lambda^2\). Si \(E_i\) sont indépendantes de loi exponentielle de taux \(\lambda\), leur somme pour \(i=1,\ldots,m\) suit une Gamma de forme \(m\) et taux \(\lambda\). **Usage :** modéliser un temps cumulé d’attente pour plusieurs événements Poisson.

### Checklist de travail

- [ ] Je sais reconnaître les hypothèses d’une loi multinomiale ou hypergéométrique et écrire leurs probabilités.
- [ ] Je sais préciser les paramétrisations des lois Gamma et χ², et retrouver moments et liens usuels.
- [ ] Je peux expliquer le choix d’une loi pour un temps d’attente, une durée de vie, une erreur de mesure ou un sondage.
- [ ] Je sais proposer, exécuter et contrôler une simulation, puis comparer histogramme ou fréquences aux valeurs théoriques.
- [ ] Je sais résoudre un exercice où le choix entre tirage avec et sans remise change la loi.

## (b) Chaînes de Markov à espace d’états fini ou dénombrable

**Intitulé officiel :** « Chaînes de Markov à espace d’états fini ou dénombrable. Propriétés de Markov faible et forte. Classification des états, transience, récurrence positive ou nulle. Communication entre états et irréductibilité. Mesure stationnaire (existence et unicité). Théorèmes de convergence : loi des grands nombres, apériodicité et convergence en loi. Exemple de la marche aléatoire simple. » [1]

### Notions à savoir

Une chaîne de Markov à temps discret \((X_n)_{n\geq0}\) sur un ensemble fini ou dénombrable \(E\) satisfait, pour tout \(n\), la propriété de Markov : conditionnellement au présent, le futur ne dépend pas du passé. Dans le cas homogène, \(P(X_{n+1}=j\mid X_n=i)=p_{ij}\) ne dépend pas de \(n\). La matrice \(P=(p_{ij})\) est stochastique : ses coefficients sont positifs ou nuls et chaque ligne somme à 1.

La propriété faible est la propriété de Markov au temps déterministe. La propriété forte l’étend à un temps d’arrêt \(T\) : sous les hypothèses usuelles de chaîne de Markov et pour \(T<\infty\) presque sûrement, conditionnellement à \(X_T\), la chaîne après \(T\) évolue comme une chaîne redémarrant de \(X_T\). Il faut savoir identifier la filtration et justifier que le temps considéré est bien un temps d’arrêt.

Un état \(i\) mène à \(j\) s’il existe \(n\geq0\) tel que \(P^n(i,j)>0\). Deux états communiquent si chacun mène à l’autre ; les classes de communication partitionnent l’espace. La chaîne est irréductible si tous les états communiquent. Un état est récurrent si, en partant de lui, le retour a lieu avec probabilité 1, transient sinon. Un état récurrent est positif si son temps moyen de retour est fini, nul si ce temps moyen est infini. La périodicité d’un état est le PGCD des temps positifs possibles de retour ; l’état est apériodique si ce PGCD vaut 1.

Une probabilité \(\pi\) sur \(E\) est stationnaire si \(\pi P=\pi\). Pour une chaîne irréductible finie, il existe une unique probabilité stationnaire ; ses états sont récurrents positifs. Pour une chaîne irréductible dénombrable, une probabilité stationnaire existe si et seulement si la chaîne est récurrente positive, et elle est alors unique. Ces résultats ne s’appliquent pas tels quels à une chaîne réductible : plusieurs classes fermées peuvent conduire à plusieurs probabilités stationnaires.

### Théorèmes de convergence : formulations utiles

Pour une chaîne irréductible positive récurrente, la fréquence asymptotique de visite d’un état \(j\) est \(\pi_j\) presque sûrement, sous la loi des grands nombres ergodique. Une formulation pour les fonctions est que, si \(f\) est intégrable sous \(\pi\), alors \(n^{-1}\sum_{k=0}^{n-1}f(X_k)\to\sum_j\pi_jf(j)\) presque sûrement, pour une chaîne irréductible positive récurrente et tout état initial (avec les formulations usuelles sur l’intégrabilité).

Pour la convergence en loi vers \(\pi\), l’irréductibilité, la récurrence positive et l’apériodicité sont des hypothèses centrales : sur un espace dénombrable, elles donnent \(P^n(i,\cdot)\to\pi\) en variation totale pour chaque état initial \(i\). Sans apériodicité, la loi peut osciller avec le temps même si une mesure stationnaire existe. Pour le cas fini, attention à distinguer convergence des distributions de convergence presque sûre des trajectoires.

### Marche aléatoire simple : exemple

Sur \(\mathbb Z\), posons \(X_{n+1}=X_n+1\) avec probabilité \(p\) et \(X_{n+1}=X_n-1\) avec probabilité \(q=1-p\), les incréments étant indépendants. C’est une chaîne homogène irréductible. En dimension un, elle est récurrente lorsque \(p=q=1/2\), mais récurrente nulle, sans probabilité stationnaire sur \(\mathbb Z\) ; si \(p\ne q\), elle est transiente. Cet exemple permet de calculer les transitions, d’étudier les retours et de voir qu’irréductibilité n’implique pas récurrence positive.

### Checklist de travail

- [ ] Je sais écrire la matrice de transition et calculer une transition en plusieurs pas par \(P^n\).
- [ ] Je distingue propriété de Markov faible et forte, et je justifie l’usage d’un temps d’arrêt.
- [ ] Je sais déterminer classes de communication, irréductibilité, périodes et classes fermées.
- [ ] Je sais distinguer transience, récurrence positive et récurrence nulle, et relier récurrence positive à une probabilité stationnaire.
- [ ] Je peux résoudre \(\pi P=\pi\) avec \(\sum_i\pi_i=1\), puis vérifier les hypothèses de convergence avant d’invoquer un théorème.
- [ ] Je sais étudier une marche aléatoire simple et expliquer l’effet de l’apériodicité.
- [ ] Je sais simuler une chaîne et comparer fréquences observées et loi stationnaire, en signalant les limites numériques.

## (c) Construction du processus de Poisson sur \(\mathbb R_+\)

**Intitulé officiel :** « Construction du processus de Poisson sur \(\mathbb R_+\) à partir de variables exponentielles. Indépendance, stationnarité et loi des accroissements. » [1]

### Notions à savoir

Soient \((E_n)_{n\geq1}\) des variables indépendantes de loi exponentielle de taux \(\lambda>0\). Posons \(T_0=0\), \(T_n=E_1+\cdots+E_n\), puis \(N_t=\max\{n:T_n\leq t\}\). Les \(T_n\) sont les instants d’arrivée et \(N_t\) compte les arrivées jusqu’au temps \(t\). Comme les temps d’attente sont strictement positifs et que leur somme diverge presque sûrement, le nombre d’arrivées sur tout intervalle borné est presque sûrement fini.

Le processus ainsi construit est un processus de Poisson de taux \(\lambda\). Ses accroissements sur des intervalles disjoints sont indépendants ; la loi d’un accroissement ne dépend que de la longueur de l’intervalle (stationnarité des accroissements) ; pour \(0\leq s<t\), \(N_t-N_s\sim\mathrm{Poisson}(\lambda(t-s))\). En particulier, \(N_t\sim\mathrm{Poisson}(\lambda t)\). La construction fournit également la propriété sans mémoire du temps d’attente exponentiel.

### Exemple ou usage

Si des appels arrivent selon un taux moyen de \(\lambda=3\) par heure dans le modèle, le nombre d’appels sur une demi-heure suit une loi de Poisson de paramètre \(1.5\). La construction par exponentielles permet de simuler les instants d’arrivée, puis de compter ceux inférieurs à la durée étudiée. Le modèle suppose notamment un taux constant et des accroissements indépendants ; ces hypothèses doivent être discutées avant d’interpréter les simulations.

### Checklist de travail

- [ ] Je sais construire les temps d’arrivée comme sommes d’exponentielles indépendantes et construire \(N_t\).
- [ ] Je sais établir ou utiliser la loi de \(N_t\) et d’un accroissement sur un intervalle.
- [ ] Je sais expliquer indépendance des accroissements et stationnarité des accroissements sans les confondre.
- [ ] Je peux simuler les arrivées et vérifier numériquement la moyenne et la variance d’un comptage.
- [ ] Je sais identifier quand l’hypothèse de taux constant rend le modèle inadapté.

## (d) Espérance conditionnelle, martingales et temps d’arrêt

**Intitulé officiel :** « Espérance conditionnelle, définition des (sur/sous-)martingales à temps discrets, temps d’arrêt. Exemples d’utilisation des théorèmes d’arrêt et de convergence presque sûre et \(L^2\). » [1]

### Notions à savoir

Pour une variable intégrable \(X\) et une tribu \(\mathcal G\), l’espérance conditionnelle \(\mathbb E[X\mid\mathcal G]\) est, à égalité presque sûre près, une variable \(\mathcal G\)-mesurable telle que \(\mathbb E[1_A\mathbb E(X\mid\mathcal G)]=\mathbb E[1_AX]\) pour tout \(A\in\mathcal G\). Elle vérifie notamment la propriété de tour lorsque \(\mathcal H\subseteq\mathcal G\) : \(\mathbb E[\mathbb E(X\mid\mathcal G)\mid\mathcal H]=\mathbb E(X\mid\mathcal H)\).

Par rapport à une filtration \((\mathcal F_n)\), un processus intégrable et adapté \((M_n)\) est une martingale si \(\mathbb E[M_{n+1}\mid\mathcal F_n]=M_n\). En remplaçant l’égalité par \(\geq\) ou \(\leq\), on obtient surmartingale ou sous-martingale. Un temps aléatoire \(T\) à valeurs dans \(\mathbb N\cup\{\infty\}\) est un temps d’arrêt si \(\{T\leq n\}\in\mathcal F_n\) pour tout \(n\) : la décision de s’arrêter à la date \(n\) dépend seulement de l’information disponible jusqu’à cette date.

### Arrêt et convergence : précautions d’hypothèses

Un énoncé élémentaire du théorème d’arrêt est le suivant : si \((M_n)\) est une martingale, \(T\) un temps d’arrêt borné, alors \(\mathbb E[M_T]=\mathbb E[M_0]\). Pour un temps d’arrêt non borné, l’égalité n’est pas automatique : des hypothèses supplémentaires (par exemple uniform integrability dans une formulation adaptée, ou conditions de domination) sont nécessaires. L’arrêt presque sûr seul ne suffit pas.

Un résultat classique de convergence est que toute martingale bornée dans \(L^2\), c’est-à-dire \(\sup_n\mathbb E[M_n^2]<\infty\), converge presque sûrement et dans \(L^2\). Pour une martingale générale, les conditions de convergence doivent être précisées ; ne pas conclure à une convergence \(L^2\) à partir de la seule convergence presque sûre.

### Exemple ou usage

Pour une marche aléatoire simple centrée \(S_n=\xi_1+\cdots+\xi_n\) avec incréments indépendants d’espérance nulle, \((S_n)\) est une martingale pour la filtration naturelle. L’analyse de \(S_{T\wedge n}\) pour un temps de sortie borné permet d’appliquer une identité d’espérance à temps fini. Pour un temps de sortie non borné, il faut d’abord justifier le passage à la limite et l’intégrabilité requise : c’est un piège classique.

### Checklist de travail

- [ ] Je sais définir une espérance conditionnelle et appliquer linéarité, propriété de tour et interprétation par conditionnement.
- [ ] Je sais vérifier adaptation, intégrabilité et égalité/inégalité conditionnelle pour classer une martingale, surmartingale ou sous-martingale.
- [ ] Je sais vérifier la propriété de temps d’arrêt à l’aide de \(\{T\leq n\}\).
- [ ] Je peux appliquer un théorème d’arrêt avec ses hypothèses explicites et repérer pourquoi un arrêt non borné exige davantage.
- [ ] Je sais utiliser une condition de bornitude dans \(L^2\) pour conclure à la convergence p.s. et \(L^2\).
- [ ] Je sais construire un exemple probabiliste où martingale et arrêt ont une interprétation concrète.

## (e) Échantillons et estimation statistique

**Intitulé officiel :** « Échantillons, moments empiriques, loi et fonction de répartition empiriques. Applications des théorèmes de convergences à l’estimation (lois des grands nombres, théorème central limite, utilisation du lemme de Slutsky). Définition et construction d’intervalles de confiance. Estimation paramétrique. Estimation par maximum de vraisemblance : définition et exemples. » [1]

### Notions à savoir

Un échantillon i.i.d. \(X_1,\ldots,X_n\) de loi \(F_\theta\) est une famille de variables indépendantes de même loi, paramétrée par \(\theta\). Le moment empirique d’ordre \(r\) est \(n^{-1}\sum_iX_i^r\) lorsque défini. La mesure empirique est \(n^{-1}\sum_i\delta_{X_i}\) et la fonction de répartition empirique \(F_n(x)=n^{-1}\sum_i1_{\{X_i\leq x\}}\). Il faut distinguer la loi de chaque observation, la distribution empirique aléatoire et sa fonction de répartition.

Si \(X_i\) sont i.i.d. intégrables, la loi forte donne \(\bar X_n\to\mathbb E[X_1]\) presque sûrement. Si elles sont i.i.d. de moyenne \(\mu\) et variance finie \(\sigma^2\), le TCL donne \(\sqrt n(\bar X_n-\mu)/\sigma\Rightarrow\mathcal N(0,1)\). Le lemme de Slutsky permet notamment de remplacer \(\sigma\) par un estimateur convergeant en probabilité vers \(\sigma>0\) pour obtenir la même limite normalisée.

Un intervalle de confiance de niveau nominal \(1-\alpha\) est une procédure aléatoire \([L(X),U(X)]\) telle que la probabilité de contenir le paramètre soit \(1-\alpha\), ou au moins ce niveau, selon la procédure considérée. Le paramètre est fixe dans l’approche fréquentiste ; l’intervalle change avec l’échantillon. La construction utilise une loi pivotale exacte ou une approximation asymptotique dont les hypothèses doivent être annoncées.

En estimation paramétrique, un estimateur est une statistique construite pour estimer \(\theta\). Le maximum de vraisemblance maximise, pour les observations fixées, la vraisemblance \(L(\theta;x)=\prod_{i=1}^nf_\theta(x_i)\) dans le cas de densités, ou le produit des probabilités dans le cas discret. Il faut respecter l’espace des paramètres, traiter les maxima aux bornes éventuelles et distinguer la vraisemblance d’une densité de probabilité en \(\theta\).

### Exemple ou usage

Pour \(X_i\) i.i.d. Bernoulli de paramètre \(p\), la vraisemblance est \(p^{\sum X_i}(1-p)^{n-\sum X_i}\), et un maximum (pour les cas ordinaires) est atteint en \(\hat p=\bar X_n\). L’estimation par fréquence converge vers \(p\) par la loi forte ; le TCL fournit une approximation normale de \(\hat p\) pour construire un intervalle approximatif lorsque la taille d’échantillon est adéquate et que le paramètre n’est pas à une situation limite. Pour une variable de répartition continue, \(F_n(x)\) estime \(F(x)\) et les théorèmes de convergence donnent un fondement à cette approximation empirique.

### Checklist de travail

- [ ] Je sais construire les moments empiriques, la mesure empirique et la fonction de répartition empirique.
- [ ] Je sais identifier les hypothèses i.i.d. et moments requises pour une loi des grands nombres ou un TCL.
- [ ] Je sais justifier un passage par Slutsky et expliciter l’estimateur convergent substitué.
- [ ] Je sais interpréter correctement le niveau et la couverture d’un intervalle de confiance.
- [ ] Je sais construire un intervalle à partir d’un pivot ou d’une approximation, en préciser la validité et les limites.
- [ ] Je sais écrire une vraisemblance, maximiser (y compris aux bornes) et interpréter un estimateur du maximum de vraisemblance.
- [ ] Je peux traiter un exemple paramétrique et vérifier biais, consistance ou incertitude quand l’exercice le demande.

## (f) Vecteurs gaussiens

**Intitulé officiel :** « Vecteurs gaussiens : définition, simulation, théorème de Cochran. Théorème central limite dans \(\mathbb R_n\). » [1]

### Notions à savoir

Un vecteur aléatoire \(X\in\mathbb R^d\) est gaussien si toute combinaison linéaire \(u^TX\) est une variable gaussienne réelle (éventuellement dégénérée). Sa loi est déterminée par son vecteur moyenne \(m\) et sa matrice de covariance \(\Sigma\), qui est symétrique positive semi-définie. On peut le simuler en écrivant \(X=m+AZ\), où \(Z\) a des coordonnées gaussiennes standard indépendantes et \(AA^T=\Sigma\), par exemple via une factorisation adaptée ; si \(\Sigma\) est singulière, une factorisation de rang réduit est possible.

Pour un vecteur gaussien, des composantes non corrélées sont indépendantes. La transformation affine \(BX+b\) demeure gaussienne, avec moyenne \(Bm+b\) et covariance \(B\Sigma B^T\). Le TCL dans \(\mathbb R^d\) : si \(X_i\) sont des vecteurs i.i.d. de moyenne \(m\) et de covariance finie \(\Sigma\), alors \(\sqrt n(\bar X_n-m)\) converge en loi vers une loi gaussienne centrée de covariance \(\Sigma\) (dégénérée si nécessaire).

Le théorème de Cochran concerne des formes quadratiques orthogonales d’un vecteur gaussien standard : pour une décomposition orthogonale en projecteurs symétriques idempotents, les formes quadratiques correspondantes sont indépendantes et suivent des lois du χ² avec degrés de liberté égaux aux rangs des projecteurs. Dans le modèle classique de régression gaussienne, il explique notamment la séparation de sommes de carrés résiduelles et expliquées. Les hypothèses précises de la version utilisée doivent être formulées : normalité, projecteurs orthogonaux et dimensions/rangs.

### Exemple ou usage

Pour simuler un vecteur normal de moyenne \(m\) et covariance \(\Sigma\), calculer une factorisation \(\Sigma=AA^T\), générer \(Z\sim\mathcal N(0,I_d)\), puis former \(m+AZ\). On peut vérifier sur un grand nombre de réalisations que la moyenne et la covariance empiriques approchent leurs valeurs cibles. Cette vérification ne prouve pas la loi et doit tenir compte de l’erreur Monte-Carlo.

### Checklist de travail

- [ ] Je sais reconnaître une loi gaussienne vectorielle par ses combinaisons linéaires et identifier moyenne/covariance.
- [ ] Je sais transformer une gaussienne et utiliser le critère d’indépendance par non-corrélation dans ce contexte.
- [ ] Je sais simuler un vecteur gaussien, y compris lorsque la covariance est seulement semi-définie positive.
- [ ] Je sais énoncer le TCL vectoriel avec hypothèses de moments et covariance.
- [ ] Je sais énoncer la structure du théorème de Cochran et vérifier orthogonalité, rangs et degrés de liberté dans un exemple.
- [ ] Je sais relier Cochran à la décomposition des sommes de carrés en régression gaussienne.

## (g) Modèle linéaire gaussien

**Intitulé officiel :** « Modèle linéaire gaussien : calculs par moindres carrés, régression linéaire, exemples d’utilisation. » [1]

### Notions à savoir

Le modèle linéaire s’écrit \(Y=X\beta+\varepsilon\), où \(Y\in\mathbb R^n\), la matrice de plan \(X\in\mathbb R^{n\times p}\) est connue, \(\beta\in\mathbb R^p\), et, dans le modèle linéaire gaussien classique, \(\varepsilon\sim\mathcal N(0,\sigma^2I_n)\). Les moindres carrés minimisent \(\|Y-Xb\|^2\). Si \(X\) est de rang colonne plein, l’estimateur est \(\hat\beta=(X^TX)^{-1}X^TY\). En rang déficient, l’estimateur des coefficients peut ne pas être unique ; les valeurs ajustées par projection sur l’image de \(X\) restent définies.

Le projecteur orthogonal sur l’espace des colonnes est \(H=X(X^TX)^{-1}X^T\) sous l’hypothèse de rang plein. Les ajustements sont \(\hat Y=HY\), les résidus \(e=(I-H)Y\). Dans le modèle classique, \(\hat\beta\) est gaussien de moyenne \(\beta\) et covariance \(\sigma^2(X^TX)^{-1}\). Les propriétés statistiques usuelles dépendent des hypothèses sur moyenne nulle, variance, indépendance ou structure de covariance et normalité ; les moindres carrés ne justifient pas à eux seuls un modèle causal.

La régression linéaire simple avec constante utilise une droite ajustée aux couples \((x_i,y_i)\) par minimisation de la somme des carrés verticaux. Le choix du modèle, l’examen des résidus et l’incertitude des paramètres font partie de l’analyse, en plus du calcul numérique.

### Exemple ou usage

On mesure une réponse \(Y_i\) en fonction d’une variable explicative \(x_i\), puis on ajuste \(Y_i=\beta_0+\beta_1x_i+\varepsilon_i\). La pente est estimée par moindres carrés et interprétée dans le cadre du modèle. Un graphique des résidus peut mettre en évidence courbure, variance non constante ou valeurs atypiques qui rendent le modèle gaussien homoscédastique discutable.

### Checklist de travail

- [ ] Je sais formuler le modèle linéaire gaussien et séparer hypothèses algébriques et probabilistes.
- [ ] Je sais obtenir l’équation normale et calculer l’estimateur si \(X\) est de rang plein.
- [ ] Je sais interpréter projection, valeurs ajustées, résidus et sommes de carrés.
- [ ] Je sais traiter le cas de rang déficient sans inverser une matrice non inversible.
- [ ] Je sais calculer ou interpréter la loi et la covariance de \(\hat\beta\) sous les hypothèses gaussiennes.
- [ ] Je sais conduire une régression simple, examiner les résidus et discuter la pertinence du modèle.

## (h) Tests paramétriques et tests d’ajustement

**Intitulé officiel :** « Tests paramétriques. Tests d’ajustement (tests du χ², tests de Kolmogorov-Smirnov). Exemples d’utilisation. » [1]

### Notions à savoir

Un test statistique oppose une hypothèse nulle \(H_0\) à une alternative \(H_1\) au moyen d’une statistique de test et d’une région de rejet. Le niveau \(\alpha\) borne sous \(H_0\) la probabilité de rejeter à tort ; la puissance est la probabilité de rejeter sous une alternative donnée. La p-valeur est, sous \(H_0\), une mesure de l’extrémalité de la statistique observée dans le sens de l’alternative. Elle n’est pas la probabilité que \(H_0\) soit vraie. Il faut définir le sens du test, la statistique, sa loi sous \(H_0\) et les conditions de validité avant de conclure.

Les tests paramétriques portent sur des hypothèses relatives à un ou plusieurs paramètres d’une famille de lois (par exemple une moyenne ou une proportion). Selon le contexte, un pivot exact ou une approximation asymptotique fournit la loi sous l’hypothèse nulle. Le choix unilatéral ou bilatéral doit être fixé avant d’examiner les données.

Pour un test d’ajustement du χ² sur \(k\) classes, la statistique de Pearson est \(Q=\sum_{i=1}^k (O_i-E_i)^2/E_i\), où \(O_i\) sont les effectifs observés et \(E_i\) les effectifs attendus sous \(H_0\). Son approximation par une loi du χ² nécessite notamment un échantillon adapté et des effectifs attendus suffisants ; le nombre de degrés de liberté est réduit par les contraintes et, le cas échéant, par l’estimation de paramètres. Les règles pratiques de regroupement ou seuils numériques dépendent de la convention de cours retenue : ne pas les appliquer sans vérifier leurs conditions.

Le test de Kolmogorov-Smirnov à un échantillon compare \(F_n\) à une fonction de répartition théorique continue \(F_0\) spécifiée par \(H_0\), via \(D_n=\sup_x|F_n(x)-F_0(x)|\). La loi nulle classique suppose une distribution continue entièrement spécifiée ; si des paramètres sont estimés sur les mêmes données, les seuils usuels ne sont généralement plus valides tels quels. Les variantes à deux échantillons et les adaptations doivent être distinguées si elles sont rencontrées.

### Exemple ou usage

Pour vérifier si des catégories ont des probabilités théoriques spécifiées, on calcule les effectifs attendus, la statistique de Pearson et les degrés de liberté, puis on compare à la loi de référence ou utilise la p-valeur en vérifiant les conditions d’approximation. Pour une hypothèse de loi continue spécifiée, on peut comparer la fonction de répartition empirique à la fonction théorique par le test de Kolmogorov-Smirnov. Dans les deux cas, le résultat du test ne démontre pas que le modèle est vrai ; il indique si les données sont suffisamment incompatibles avec lui au niveau choisi.

### Checklist de travail

- [ ] Je sais écrire \(H_0\), \(H_1\), choisir le sens du test et distinguer erreur de première espèce, puissance et p-valeur.
- [ ] Je sais définir la statistique de test et obtenir sa loi sous \(H_0\) avec les hypothèses requises.
- [ ] Je sais distinguer test paramétrique et test d’ajustement.
- [ ] Je sais calculer une statistique du χ², les effectifs attendus et les degrés de liberté, et vérifier l’approximation.
- [ ] Je sais définir la statistique KS et expliquer la condition de loi continue spécifiée pour les seuils usuels.
- [ ] Je sais interpréter une décision sans affirmer que l’acceptation prouve \(H_0\).
- [ ] Je peux mettre en œuvre un exemple et rapporter statistique, seuil ou p-valeur, niveau et limites.

## Checklist transversale de préparation

- [ ] Je peux passer d’un énoncé de modélisation à une loi ou un processus en explicitant les hypothèses et les paramètres.
- [ ] Je peux justifier un résultat par les bonnes hypothèses, notamment indépendance, intégrabilité, moments finis, irréductibilité et apériodicité.
- [ ] Je sais simuler les objets concernés et documenter l’algorithme, les paramètres, la graine utilisée si pertinente et les limites numériques.
- [ ] Je sais confronter théorie, calcul et simulation sans traiter un résultat numérique comme une preuve.
- [ ] Je peux exposer une méthode lisible, vérifier les calculs et interpréter les résultats dans le modèle.
- [ ] J’ai fait des exercices de preuve, de calcul, de simulation, d’estimation, de régression et de tests, et je les ai corrigés activement.
- [ ] J’ai travaillé des sujets et annales de modélisation, en m’entraînant à expliquer les choix de modèle et à illustrer informatiquement les résultats.

## Lacunes à combler et niveau de maîtrise attendu

Ce guide sert de carte de révision et de rappel de résultats centraux. Le PDF officiel nomme les thèmes et plusieurs propriétés, mais ne détaille pas toutes les versions des théorèmes, conventions paramétriques, algorithmes de génération aléatoire, conditions pratiques de validité des tests, ni le degré de démonstration attendu pour chaque résultat. Les énoncés résumés ici ne doivent donc pas être pris comme une liste exhaustive de preuves à connaître. Pour chaque résultat travaillé, compléter les hypothèses exactes et la preuve dans le cours de référence ; refaire des exercices où une hypothèse est supprimée ou modifiée ; vérifier les détails sur les paramètres et les degrés de liberté selon le cours suivi.

**Ce support doit être complété par des cours, des exercices corrigés et des annales.** Il faut notamment s’entraîner à faire des calculs à la main, construire les justifications, programmer des simulations contrôlées et présenter l’interprétation et les limites d’un modèle. L’épreuve de modélisation officielle porte aussi sur le programme commun des titres 1 à 12 et prévoit une illustration informatique ; ce guide optionnel ne couvre pas à lui seul ces exigences transversales. [1]

## Référence officielle

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel de l’agrégation externe spéciale de mathématiques, session 2027, programme spécifique de l’option A et titre 11"
