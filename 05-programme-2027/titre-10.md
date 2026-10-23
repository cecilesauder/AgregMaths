# 10 — Calcul intégral : mesure, intégration et analyse de Fourier

> **Statut : guide de révision, à travailler, ne remplace pas un cours.**
>
> Ce document suit l’unité officielle **10 « Calcul intégral »** du programme de l’agrégation externe spéciale de mathématiques, session 2027. Le programme place sous ce titre la théorie de la mesure (10.1), l’intégration (10.2) et l’analyse de Fourier (10.3). Le titre « Mesure, intégration et analyse de Fourier » est une description commode du contenu, mais n’est pas l’intitulé officiel de l’unité. Les formulations officielles et chacun de leurs sous-items sont repris ci-dessous. [1]

Le guide donne des définitions, des théorèmes usuels et des exemples de travail associés à chaque sous-partie. Les constructions de la mesure de Lebesgue et de la mesure produit sont admises dans le texte officiel. Pour les autres résultats, le programme nomme les notions et théorèmes sans fixer toujours leurs formulations exactes ni toutes leurs hypothèses. Les hypothèses indiquées ci-dessous sont des cadres classiques de révision, pas une prétention à reproduire une formulation unique du jury ou du cours.

## 10.1 Notions de théorie de la mesure

**Intitulé officiel :** définition des espaces mesurables, tribu produit, cas particulier des tribus boréliennes ; définition d’une mesure positive, cas particuliers de la mesure de comptage, de la mesure de Lebesgue (construction admise) et des mesures de probabilité ; définition d’une mesure produit (construction admise) ; définition des fonctions mesurables, approximation par des fonctions étagées. [1]

### Espaces mesurables, tribus produit et boréliennes

Une **tribu** (ou σ-algèbre)  sur un ensemble X est une famille 𝒜 de parties de X telle que X∈𝒜, qu’elle soit stable par complémentaire et par réunion dénombrable. Elle est donc aussi stable par intersection dénombrable et différence dénombrable. Un **espace mesurable** est un couple (X,𝒜). Les éléments de 𝒜 sont les ensembles mesurables.

Pour deux espaces mesurables (X,𝒜) et (Y,ℬ), la **tribu produit** 𝒜⊗ℬ est la plus petite tribu sur X×Y qui contient tous les rectangles A×B, avec A∈𝒜 et B∈ℬ. Pour des familles dénombrables d’espaces, la définition se généralise par les cylindres mesurables.

Sur un espace topologique X, la **tribu borélienne** ℬ(X) est engendrée par les ouverts. Sur ℝ, elle est aussi engendrée par les intervalles ouverts, ou par les demi-droites (-∞,a]. Pour ℝ^d muni de sa topologie usuelle, ℬ(ℝ^d)=ℬ(ℝ)^{⊗d}. Une application borélienne est mesurable pour les tribus boréliennes considérées.

**Exemple / usage.** Le rectangle [0,1]×(2,3) est mesurable dans la tribu produit borélienne de ℝ². Pour établir la mesurabilité d’une application à valeurs dans ℝ^d, on peut vérifier que les images réciproques des ouverts sont mesurables; dans les espaces euclidiens, il suffit souvent de traiter une base dénombrable d’ouverts.

### Mesures positives et exemples fondamentaux

Une **mesure positive** sur (X,𝒜) est une application μ:𝒜→[0,+∞] telle que μ(∅)=0 et que, pour toute suite d’ensembles mesurables deux à deux disjoints (A_n),

μ(⋃_{n≥1}A_n)=Σ_{n≥1}μ(A_n).

Il ne faut pas confondre cette σ-additivité avec l’additivité finie. Une mesure est **finie** si μ(X)<∞, et **σ-finie** si X est réunion dénombrable d’ensembles de mesure finie.

- La **mesure de comptage** sur X attribue à A son cardinal si A est fini, et +∞ sinon. L’intégrale par rapport à la mesure de comptage est une somme.
- La **mesure de Lebesgue** sur ℝ^d est la mesure de volume usuelle, invariante par translation et qui attribue à un pavé ∏_j[a_j,b_j] le volume ∏_j(b_j-a_j). Sa construction est admise par le programme. Il faut distinguer la tribu borélienne de la tribu de Lebesgue, complétée par les sous-ensembles des ensembles boréliens de mesure nulle.
- Une **mesure de probabilité** est une mesure P telle que P(X)=1. Elle modélise notamment une distribution de masse totale un.

**Exemple / usage.** Sur ℕ muni de la mesure de comptage, une fonction positive f a pour intégrale Σ_{n≥0}f(n). Sur un intervalle [a,b] muni de la probabilité uniforme, la probabilité d’un sous-intervalle est sa longueur divisée par b-a.

### Mesure produit

Pour deux mesures positives μ et ν, la **mesure produit** μ⊗ν est une mesure sur la tribu produit, qui satisfait sur les rectangles mesurables

(μ⊗ν)(A×B)=μ(A)ν(B).

Dans le cadre standard où μ et ν sont σ-finies, il existe une telle mesure et elle est déterminée de manière unique par ses valeurs sur les rectangles (théorème d’extension; construction admise ici). Les questions de complétion peuvent dépendre des conventions retenues : la complétion d’une mesure produit n’est pas automatiquement la même chose que la tribu produit non complétée.

**Exemple / usage.** La mesure de Lebesgue sur ℝ² est le produit des mesures de Lebesgue sur chaque coordonnée. On peut alors calculer l’aire d’un rectangle comme produit des longueurs et intégrer une fonction indicatrice de rectangle.

### Fonctions mesurables et fonctions étagées

Une application f:(X,𝒜)→(Y,ℬ) est **mesurable** si f^{-1}(B)∈𝒜 pour tout B∈ℬ. Pour une fonction réelle, il suffit par exemple que {f>a}∈𝒜 pour tout a∈ℝ. Une fonction **étagée** mesurable est une fonction mesurable à nombre fini de valeurs, que l’on écrit sous la forme φ=Σ_{k=1}^N c_k 1_{A_k} pour des ensembles mesurables A_k.

Toute fonction mesurable positive est limite croissante d’une suite de fonctions étagées positives (au sens usuel, avec valeurs éventuellement non négatives). Cette approximation sert à définir l’intégrale des fonctions positives et à démontrer ses propriétés fondamentales.

**Exemple / usage.** Pour f(x)=x sur [0,1], les fonctions étagées qui arrondissent x vers le bas aux multiples de 2^{-n} croissent vers f. Elles donnent des sommes de Riemann simples et motivent la définition de l’intégrale.

## 10.2 Intégration

### 10.2(a) Intégrale des fonctions mesurables positives, théorème de convergence monotone. Lemme de Fatou. Fonctions intégrables, théorème de convergence dominée.

Pour une fonction mesurable étagée positive φ=Σ c_k1_{A_k} à valeurs finies, on pose ∫φ dμ=Σc_kμ(A_k). Pour une fonction mesurable f:X→[0,+∞], on définit

∫f dμ=sup{∫φ dμ : 0≤φ≤f, φ étagée mesurable}.

Cette définition étend les sommes et les aires usuelles. Une fonction mesurable réelle ou complexe est **intégrable** si ∫|f|dμ<∞. Une fonction intégrable est finie presque partout et son intégrale est bien définie; deux fonctions égales presque partout ont la même intégrale.

**Convergence monotone (Beppo Levi).** Si 0≤f_n≤f_{n+1} sont mesurables et f_n(x)→f(x), alors

∫f_n dμ → ∫f dμ,

les deux membres pouvant valoir +∞. La positivité et la croissance sont essentielles.

**Lemme de Fatou.** Pour toute suite de fonctions mesurables positives f_n,

∫liminf_{n→∞} f_n dμ ≤ liminf_{n→∞}∫f_n dμ.

Il donne une inégalité dans le sens indiqué, pas en général une convergence des intégrales.

**Convergence dominée (Lebesgue).** Si f_n→f presque partout, si les fonctions sont mesurables, et s’il existe une fonction intégrable g≥0 telle que |f_n|≤g presque partout pour tout n, alors f est intégrable et ∫|f_n-f|dμ→0; en particulier ∫f_n dμ→∫f dμ. Le majorant doit être intégrable sur l’espace considéré.

**Exemple / usage.** Pour f_n(x)=x^n sur [0,1] muni de Lebesgue, f_n→0 presque partout et |f_n|≤1; la convergence dominée donne ∫_0^1x^n dx→0, conformément à 1/(n+1)→0. À l’inverse, sur ℝ, les fonctions indicatrices 1_{[n,n+1]} convergent vers zéro presque partout et leurs intégrales valent toutes 1 : il n’y a pas de majorant intégrable commun de la forme requise.

### 10.2(b) Fonctions intégrables à valeurs dans un espace vectoriel de dimension finie. Continuité, dérivabilité des intégrales à paramètres.

Soit E un espace vectoriel réel ou complexe de dimension finie. Une fonction mesurable f:X→E est intégrable si ∫∥f(x)∥dμ(x)<∞. Son intégrale se définit coordonnée par coordonnée dans une base; elle ne dépend pas du choix de la base et vérifie notamment ∥∫f dμ∥≤∫∥f∥dμ.

Pour les intégrales à paramètres, le schéma central consiste à écrire F(t)=∫_X f(t,x)dμ(x) puis à vérifier des hypothèses qui permettent d’intervertir limite (ou dérivée) et intégrale. Un cadre suffisant de **continuité** : f(t,x) est mesurable en x, continue en t pour presque tout x, et, au voisinage de chaque paramètre, ∥f(t,x)∥≤g(x) avec g∈L¹(μ). La convergence dominée donne alors la continuité de F. Pour la **dérivabilité**, on ajoute l’existence de ∂_t f(t,x) presque partout et un majorant intégrable local uniforme de cette dérivée; sous des hypothèses mesurables et de régularité appropriées, F'(t)=∫∂_t f(t,x)dμ(x).

**Exemple / usage.** Pour F(t)=∫_0^1 e^{tx}dx, sur tout intervalle borné de paramètres, l’intégrande et sa dérivée en t sont dominées par des constantes intégrables. On peut donc dériver sous le signe intégral : F'(t)=∫_0^1xe^{tx}dx. Cette méthode est fréquente pour établir des identités ou des estimations dépendant d’un paramètre.

### 10.2(c) Espaces \(L^p\), où \(1≤p≤∞\). Complétude. Inégalité de Hölder.

Pour 1≤p<∞, L^p(X,μ) est l’espace des fonctions mesurables modulo l’égalité presque partout telles que ∫|f|^p dμ<∞, muni de ∥f∥_p=(∫|f|^p dμ)^{1/p}. L^∞ regroupe les classes de fonctions essentiellement bornées, avec la norme essentielle ∥f∥_∞=ess sup |f|. Le théorème de complétude affirme que L^p est un espace de Banach pour tout 1≤p≤∞.

**Inégalité de Hölder.** Si 1≤p,q≤∞ sont conjugués, c’est-à-dire 1/p+1/q=1 avec la convention 1/∞=0, si f∈L^p et g∈L^q, alors fg∈L^1 et ∥fg∥_1≤∥f∥_p∥g∥_q. Pour p=q=2, c’est Cauchy–Schwarz.

**Exemple / usage.** Si f,g∈L²(ℝ^d), alors fg∈L¹ et |∫fg|≤∥f∥₂∥g∥₂. Cela justifie de nombreux produits scalaires et estimations d’intégrales.

### 10.2(d) Théorème de Fubini. Changement de variables dans une intégrale multiple. Cas des coordonnées polaires, cas des coordonnées sphériques.

**Fubini.** Si f:X×Y→ℂ est intégrable pour μ⊗ν, en particulier si ∫_{X×Y}|f|d(μ⊗ν)<∞, alors les intégrales itérées existent presque partout, sont intégrables, et

∫_{X×Y}f(x,y)d(μ⊗ν)=∫_X(∫_Y f(x,y)dν(y))dμ(x)=∫_Y(∫_X f(x,y)dμ(x))dν(y).

Pour une fonction positive mesurable, le théorème de Tonelli permet aussi d’échanger les intégrales, éventuellement infinies. Ne pas utiliser Fubini pour une fonction signée ou complexe sans établir l’intégrabilité absolue, ou sans une autre hypothèse suffisante.

**Changement de variables.** Si Φ:U→V est un difféomorphisme entre ouverts de ℝ^d et si f est intégrable (ou positive mesurable), alors

∫_V f(y)dy = ∫_U f(Φ(u)) |det DΦ(u)|du.

Le facteur |det DΦ| est le jacobien. En dimension deux, les coordonnées polaires (r,θ)↦(r cosθ,r sinθ) donnent dxdy=r drdθ. En dimension trois, les coordonnées sphériques usuelles (r,θ,φ), avec θ∈[0,π] l’angle polaire et φ∈[0,2π) l’azimut, donnent dxdydz=r² sinθ drdθdφ. Les coordonnées sont dégénérées en certains points ou axes; ces ensembles négligeables et le choix des domaines doivent être traités proprement.

**Exemple / usage.** Pour une fonction radiale f(x)=h(|x|) sur ℝ², ∫_{ℝ²}f(x)dx=2π∫_0^∞h(r)r dr dès que l’intégrale est bien définie. Le facteur r ne peut pas être omis. En dimension trois, l’intégrale radiale devient 4π∫_0^∞h(r)r²dr.

### 10.2(e) Convolution. Régularisation et approximation par convolution.

Sur ℝ^d, pour des fonctions intégrables, la convolution est définie presque partout par

(f*g)(x)=∫_{ℝ^d} f(x-y)g(y)dy.

Sous les hypothèses usuelles f,g∈L¹, f*g∈L¹ et ∥f*g∥₁≤∥f∥₁∥g∥₁. Si une fonction est assez régulière et l’autre intégrable, la convolution peut hériter de la régularité; les conditions exactes dépendent du résultat visé.

Une **approximation de l’identité** (ou noyau régularisant) est une famille ρ_ε(x)=ε^{-d}ρ(x/ε) construite à partir d’un noyau intégrable ρ de masse ∫ρ=1 et concentrée près de zéro lorsque ε→0. Pour f∈L^p(ℝ^d), 1≤p<∞, un noyau convenable donne ρ_ε*f→f dans L^p. Si le noyau est C^∞_c, la convolution régularise, sous les hypothèses requises, une fonction localement intégrable; elle sert à approximer par des fonctions lisses. Pour p=∞, une convergence en norme uniforme n’est pas vraie en général sans hypothèses additionnelles.

**Exemple / usage.** Convoler une fonction indicatrice d’intervalle par une petite bosse lisse de masse un produit une version lissée de la fonction, dont les transitions s’effectuent sur une petite zone près des bords. Cela permet d’approcher les fonctions intégrables par des fonctions lisses dans les normes usuelles L^p, p<∞.

## 10.3 Analyse de Fourier

### 10.3(a) Séries de Fourier des fonctions localement intégrables périodiques d’une variable réelle. Lemme de Riemann–Lebesgue. Produit de convolution de fonctions périodiques. Théorèmes de Dirichlet, de Fejér et de Parseval.

On adopte ici la période 2π. Une fonction f∈L¹_{loc}(ℝ) 2π-périodique est intégrable sur une période. Ses coefficients de Fourier sont

$$ĉ(n)=\frac1{2π}∫_{-π}^{π}f(x)e^{-inx}dx,\qquad n∈ℤ,$$

et sa série formelle est Σ_{n∈ℤ}ĉ(n)e^{inx}. Ces définitions s’étendent à une autre période par changement d’échelle. Une fonction localement intégrable périodique n’est pas nécessairement continue, ni égale partout à la somme de sa série.

**Lemme de Riemann–Lebesgue.** Pour f∈L¹([−π,π]), ĉ(n)→0 quand |n|→∞. Il exprime la disparition des oscillations moyennes à haute fréquence, mais ne garantit pas à lui seul la convergence ponctuelle de la série de Fourier.

Le **produit de convolution périodique** dépend de la normalisation. Ici,

$$(f*_{𝕋}g)(x)=\frac1{2π}∫_{-π}^{π}f(x-y)g(y)dy.$$

Pour f,g∈L¹(𝕋), la convolution est définie presque partout et $\widehat{f*_{𝕋}g}(n)=ĉ_f(n)ĉ_g(n)$. Sans le facteur 1/(2π) dans la définition, un facteur 2π apparaît dans cette identité.

**Dirichlet.** Une forme classique : si f est périodique et régulière par morceaux (par exemple C¹ par morceaux avec nombre fini de morceaux sur une période), alors les sommes partielles symétriques de sa série de Fourier convergent en tout point x vers (f(x^-)+f(x^+))/2. En particulier, en un point de continuité, la limite vaut f(x). Les hypothèses précises varient selon les formulations classiques; la seule intégrabilité locale ne suffit pas à conclure ainsi.

**Fejér.** Les moyennes de Cesàro des sommes partielles, appelées sommes de Fejér, s’écrivent comme une convolution avec le noyau positif de Fejér, de masse normalisée un. Pour f∈L¹(𝕋), elles convergent vers f dans L¹; en tout point où f est continue, elles convergent vers f(x). C’est une méthode de sommation plus stable que la convergence terme à terme.

**Parseval.** Pour f∈L²(𝕋), les exponentielles normalisées forment une base hilbertienne et

$$\frac1{2π}∫_{-π}^{π}|f(x)|²dx=Σ_{n∈ℤ}|ĉ(n)|².$$

Cette identité relie l’énergie de la fonction à celle de ses coefficients. La formule de Parseval pour le produit scalaire s’obtient par polarisation.

**Exemple / usage.** Pour f(x)=x sur (-π,π), prolongée 2π-périodiquement, les coefficients se calculent par intégration par parties et la série converge, aux points de saut du prolongement, vers la moyenne des limites latérales. Parseval permet ensuite de transformer une somme de carrés de coefficients en intégrale, ce qui fournit notamment des sommes numériques.

### 10.3(b) Transformation de Fourier sur les espaces \(L^1(\mathbb R^d)\) et \(L^2(\mathbb R^d)\). Cas de l’espace de Schwartz des fonctions à décroissance rapide ainsi que toutes leurs dérivées. Théorème de Plancherel. Lien avec la convolution. Règles de calculs. Formule d’inversion. Cas de la fonction gaussienne.

Pour fixer les constantes, on adopte la convention

$$\widehat f(ξ)=∫_{ℝ^d}f(x)e^{-ix·ξ}dx,\qquad f∈L¹(ℝ^d).$$

Alors $\widehat f$ est bornée et continue, et $\widehat f(ξ)→0$ quand |ξ|→∞ (Riemann–Lebesgue). L’espace de **Schwartz** 𝒮(ℝ^d) est constitué des fonctions C^∞ telles que sup_x|x^α∂^βf(x)|<∞ pour tous multi-indices α,β. Autrement dit, la fonction et toutes ses dérivées décroissent plus vite que toute puissance. La transformée de Fourier envoie 𝒮 sur 𝒮.

**Plancherel.** La transformée de Fourier se prolonge de manière unique par densité en un opérateur sur L²(ℝ^d); avec la convention ci-dessus,

$$∥\widehat f∥₂=(2π)^{d/2}∥f∥₂,\qquad ∫|\widehat f(ξ)|²dξ=(2π)^d∫|f(x)|²dx.$$

La version unitaire $(2π)^{-d/2}\widehat f$ est unitaire sur L². Dans ce cadre, une fonction de L² n’a pas nécessairement de transformée définie par une intégrale absolument convergente; la définition passe par le prolongement.

**Convolution et calcul.** Pour f,g∈L¹(ℝ^d), f*g∈L¹ et $\widehat{f*g}=\widehat f\,\widehat g$. Pour les fonctions de Schwartz, les identités usuelles sont

- translation : $\widehat{f(\cdot-a)}(ξ)=e^{-ia·ξ}\widehat f(ξ)$ ;
- modulation : $\widehat{e^{ib·(\cdot)}f}(ξ)=\widehat f(ξ-b)$ ;
- dérivation : $\widehat{∂_j f}(ξ)=iξ_j\widehat f(ξ)$ ;
- multiplication par une coordonnée : $\widehat{x_j f}(ξ)=i∂_{ξ_j}\widehat f(ξ)$.

Ces règles s’étendent hors de 𝒮 sous des hypothèses adaptées; vérifier l’intégrabilité ou le sens faible avant de les appliquer. Avec cette normalisation, $\widehat{fg}=(2π)^{-d}(\widehat f*\widehat g)$ lorsque les hypothèses de convolution et d’inversion requises sont satisfaites.

**Inversion.** Si f∈𝒮(ℝ^d), alors

$$f(x)=(2π)^{-d}∫_{ℝ^d}\widehat f(ξ)e^{ix·ξ}dξ.$$

Il existe aussi des théorèmes d’inversion sous des hypothèses plus larges, par exemple $f,\widehat f∈L¹$, avec égalité presque partout et aux points de continuité appropriés. Énoncer les hypothèses d’inversion utilisées : la formule n’est pas automatiquement une intégrale convergente pour toute fonction f∈L¹.

**Gaussienne.** Pour f(x)=e^{-|x|²/2} dans ℝ^d,

$$\widehat f(ξ)=(2π)^{d/2}e^{-|ξ|²/2}.$$

Plus généralement, e^{-a|x|²}, a>0, a pour transformée (π/a)^{d/2}e^{-|ξ|²/(4a)} sous cette convention. La gaussienne est donc stable par transformation de Fourier à un facteur et un changement d’échelle près.

**Exemple / usage.** Les règles de dérivation et de multiplication convertissent une équation différentielle à coefficients constants en une relation algébrique en fréquence, utile pour résoudre des équations ou étudier des opérateurs. La transformée gaussienne permet de vérifier les constantes de la convention et intervient dans les noyaux de chaleur.

## Checklist de révision

Cocher un item lorsque vous pouvez le réaliser sans vous contenter de reconnaître la formule. Pour chaque résultat, entraînez-vous à énoncer les hypothèses, à identifier les objets mesurables et à préciser si la conclusion vaut partout ou presque partout.

### Notions et formulations

- [ ] Définir une tribu, un espace mesurable, une tribu produit et la tribu borélienne; distinguer tribu borélienne et tribu de Lebesgue complétée.
- [ ] Énoncer la définition σ-additive d’une mesure positive; décrire comptage, Lebesgue, probabilité et mesure produit, en reconnaissant les hypothèses de σ-finitude nécessaires aux énoncés usuels.
- [ ] Vérifier la mesurabilité par image réciproque et construire/majorer une fonction par des fonctions étagées.
- [ ] Définir l’intégrale positive à partir des fonctions étagées et distinguer convergence monotone, Fatou et convergence dominée par leurs hypothèses et le sens de leurs conclusions.
- [ ] Définir l’intégrabilité d’une fonction à valeurs dans un espace de dimension finie et expliquer l’intégration coordonnée par coordonnée.
- [ ] Énoncer des critères suffisants de continuité et de dérivation sous l’intégrale à paramètre en indiquant le majorant intégrable local.
- [ ] Définir les espaces L^p, y compris L^∞ modulo l’égalité presque partout; énoncer leur complétude et Hölder avec exposants conjugués.
- [ ] Énoncer les versions appropriées de Tonelli et Fubini et le théorème de changement de variables avec son jacobien.
- [ ] Retrouver et utiliser les jacobiens polaire r et sphérique r²sinθ.
- [ ] Définir la convolution sur ℝ^d et l’approximation de l’identité; préciser le cadre de convergence L^p.
- [ ] Définir les coefficients d’une série de Fourier et le produit de convolution périodique; suivre clairement les constantes dues au choix de période et de normalisation.
- [ ] Énoncer Riemann–Lebesgue, Dirichlet, Fejér et Parseval avec les hypothèses et les types de convergence pertinents.
- [ ] Définir la transformée de Fourier sur L¹, l’espace de Schwartz et son prolongement L²; énoncer Plancherel, l’inversion et le lien convolution-produit.

### Preuves, méthodes et calculs

- [ ] Reconstituer l’idée de l’approximation d’une fonction mesurable positive par des fonctions étagées et son rôle dans la définition de l’intégrale.
- [ ] Savoir démontrer ou utiliser la monotonie de l’intégrale, Fatou et la convergence dominée; pour une limite d’intégrales, justifier convergence presque partout et domination intégrable.
- [ ] Appliquer Hölder ou Cauchy–Schwarz pour prouver l’intégrabilité d’un produit et obtenir une estimation explicite.
- [ ] Réécrire une intégrale double en intégrales itérées après avoir vérifié positivité ou intégrabilité absolue.
- [ ] Calculer un changement de variables en identifiant domaine, jacobien et éventuelles multiplicités ou ensembles dégénérés.
- [ ] Justifier la dérivation sous le signe intégral sur un voisinage du paramètre, et pas seulement en un point.
- [ ] Établir les estimations de convolution et reconnaître quand une approximation par convolution converge en L^p.
- [ ] Calculer les coefficients de Fourier d’exemples élémentaires, déterminer la limite de Dirichlet aux points de continuité et de saut, et appliquer Parseval.
- [ ] Vérifier les constantes de convolution, dérivation, translation et inversion de Fourier avec la convention annoncée.
- [ ] Utiliser Plancherel pour transformer une norme L² ou un produit scalaire et calculer la transformée d’une gaussienne.

### Exemples et exercices à refaire

- [ ] Calculer une intégrale-somme sur un ensemble dénombrable avec la mesure de comptage; calculer la mesure d’un rectangle produit.
- [ ] Tester les théorèmes de convergence sur x^n dans [0,1] et sur une suite de translatées d’indicatrices dans ℝ.
- [ ] Évaluer une intégrale à paramètre simple et justifier continuité et dérivabilité par domination.
- [ ] Calculer l’intégrale d’une fonction radiale sur ℝ² ou ℝ³, en contrôlant le facteur radial.
- [ ] Lisser une fonction en la convolant avec un noyau de masse un et expliquer le mode de convergence visé.
- [ ] Étudier la série de Fourier de x sur (-π,π) périodisée et retrouver sa convergence aux sauts.
- [ ] Calculer une transformée de Fourier de fonction de Schwartz en utilisant une règle de calcul, puis vérifier l’inversion ou Plancherel dans un exemple gaussien.
- [ ] Faire des exercices et annales où les hypothèses ne sont pas satisfaites afin d’apprendre à repérer un théorème qu’on ne peut pas appliquer.

## Lacunes à combler et exigences de maîtrise

Le programme officiel est un **programme de notions** : pour 10.1, il précise explicitement que les constructions de Lebesgue et de mesure produit sont admises, mais n’énumère pas leurs étapes de construction. Il ne donne pas, pour chaque théorème de convergence, une liste de variantes équivalentes ni les démonstrations attendues. Il faut donc compléter avec le cours pour connaître les formulations retenues et le niveau de preuve exigible.

Pour 10.2(b), le document officiel nomme l’intégration vectorielle en dimension finie et la continuité/dérivabilité des intégrales à paramètres, sans préciser dans son texte les hypothèses techniques. Les hypothèses données dans ce guide sont des conditions suffisantes classiques. Elles ne couvrent pas toutes les versions possibles; vérifiez la formulation enseignée. Pour 10.2(d), le texte officiel nomme Fubini, le changement de variables et les cas polaire et sphérique, sans détailler les théorèmes ou conventions de paramétrage. Pour 10.2(e), il nomme convolution, régularisation et approximation par convolution, sans préciser un noyau ni un mode de convergence : ceux-ci doivent être maîtrisés selon le cadre demandé.

Pour 10.3(a), le texte officiel énumère Riemann–Lebesgue, convolution périodique et les théorèmes de Dirichlet, Fejér et Parseval, mais ne spécifie ni période, ni normalisation des coefficients, ni hypothèses complètes de chaque théorème. Le guide fixe une convention de période et donne des formulations classiques; ajustez les constantes si le cours retient une autre convention. Pour 10.3(b), le programme donne les espaces L¹ et L², Schwartz, Plancherel, convolution, calcul, inversion et gaussienne, sans détailler chaque règle ou toutes les hypothèses d’inversion. Le calcul présent choisit une convention explicite; les formules et facteurs 2π changent avec la convention.

La maîtrise à viser est de pouvoir **formuler exactement les hypothèses**, distinguer égalité ponctuelle et presque partout, justifier les échanges limite/intégrale et somme/intégrale, suivre les normalisations, et choisir un théorème qui s’applique réellement. Ce guide n’est pas une preuve complète de tous les résultats et ne prétend pas dépasser les points qu’il explicite. Il doit être complété par un cours, des exercices variés et les annales du concours.

## Source officielle

Le programme normatif consulté est le PDF officiel de l’agrégation externe spéciale de mathématiques, session 2027, unité 10, « Calcul intégral » : [document officiel](https://www.devenirenseignant.gouv.fr/media/20323/download). [1]

[1]: https://www.devenirenseignant.gouv.fr/media/20323/download "Programme officiel de l’agrégation externe spéciale de mathématiques, session 2027"
