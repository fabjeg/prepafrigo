/* Contenu pédagogique — Préparation à l'habilitation fluide CAT 1-5
   Source: "Préparation à l'habilitation fluide Théorie-Pratique CAT1-5" (Petit Forestier) */

const CHAPTERS = [
{
  id: "ch1",
  num: "01",
  title: "Impact des fluides frigorigènes sur l'environnement",
  html: `
  <div class="card">
    <h3>Deux impacts environnementaux distincts</h3>
    <ul>
      <li><b>Couche d'ozone (ODP)</b> : les fluides <b>chlorés</b> (CFC, HCFC) contiennent du chlore. Une molécule de chlore détruit environ <span class="key-value">100 000</span> molécules d'ozone. Le fluide de référence est le <b>R11</b>. Il faut environ 30 ans aux CFC/HCFC pour atteindre la couche d'ozone.</li>
      <li><b>Effet de serre (GWP)</b> : les fluides <b>fluorés</b> (HFC) contiennent du fluor et sont responsables de 10 à 15% de l'effet de serre actuel.</li>
    </ul>
  </div>
  <div class="card">
    <h3>ODP — Ozone Depletion Potential</h3>
    <p>Indique le potentiel de destruction de la couche d'ozone d'un fluide.</p>
    <table>
      <tr><th>Règlementation</th><th>Famille</th><th>Exemples</th><th>ODP</th></tr>
      <tr><td>1987</td><td>CFC</td><td>R12, R11 (ODP=1), R13B1 (ODP=10)</td><td>1 à 10</td></tr>
      <tr><td>2015</td><td>HCFC</td><td>R22 (0,055), R408A (0,026), R409A (0,048)</td><td>faible</td></tr>
      <tr><td>2016</td><td>HFC</td><td>R134a, R404A, R407C, R410A, R452A</td><td><b>0</b></td></tr>
    </table>
    <p><b>1987 — Accords de Montréal</b> : protection de la couche d'ozone, interdiction progressive des fluides qui l'appauvrissent. Les CFC sont interdits, remplacés par les HCFC.</p>
  </div>
  <div class="card">
    <h3>GWP — Global Warming Potential (PRG)</h3>
    <p>Le GWP mesure la nocivité d'un gaz vis-à-vis de l'effet de serre, sur une durée donnée (généralement 100 ans). Le fluide de référence est le <b>CO2 (R744)</b>, GWP = <span class="key-value">1</span>. Plus le chiffre est élevé, plus le fluide est nocif.</p>
    <table>
      <tr><th>Fluide</th><th>GWP</th></tr>
      <tr><td>R134a</td><td>1430</td></tr>
      <tr><td>R404A</td><td>3922</td></tr>
      <tr><td>R410A</td><td>2088</td></tr>
      <tr><td>R452A</td><td>2141</td></tr>
      <tr><td>R507A</td><td>4000</td></tr>
      <tr><td>R125</td><td>3500</td></tr>
      <tr><td>R143a</td><td>4470</td></tr>
      <tr><td>R152a</td><td>124</td></tr>
    </table>
    <p><b>1997 — Protocole de Kyoto</b> : réduction des émissions de CO2 (encadrement des HFC). <b>2016 — Accords de Kigali</b> : élimination progressive des HFC.</p>
  </div>
  <div class="card">
    <h3>Familles de fluides — à retenir</h3>
    <ul>
      <li><b>CFC / HCFC</b> : impact sur la couche d'ozone (chlore).</li>
      <li><b>HFC</b> : impact sur l'effet de serre (fluor), ODP = 0.</li>
      <li><b>HFO</b> : faible impact sur l'effet de serre (GWP &lt; 10), durée de vie atmosphérique très courte (18 jours pour le R1234ze). Faible toxicité mais <b>inflammables</b> (classés <b>A2L</b>) ; en cas d'incendie ils dégagent de l'acide fluorhydrique toxique.</li>
      <li><b>HC (hydrocarbures)</b> : propane, isobutane — GWP de l'ordre de 3.</li>
      <li><b>Fluides naturels (inorganiques)</b> : ammoniac, CO2 naturel — GWP entre 0 et 1.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Fluides purs vs mélanges</h3>
    <ul>
      <li><b>Fluide pur</b> : composé d'un seul fluide. Ex : le R134a est composé à 100% de R134a.</li>
      <li><b>Mélange</b> : composé de plusieurs fluides purs. Ex : le R404A = 52% R143a + 44% R125 + 4% R134a.</li>
    </ul>
  </div>`,
  questions: [
    { q: "Que signifie ODP ?", options: ["Ozone Depletion Potential (potentiel de destruction de l'ozone)", "Overall Density Parameter", "Ozone Diffusion Pressure", "Organic Decay Point"], a: 0, explain: "ODP = Ozone Depletion Potential, potentiel de destruction de la couche d'ozone d'un fluide." },
    { q: "Quel élément chimique contenu dans les CFC/HCFC est responsable de la destruction de la couche d'ozone ?", options: ["Le fluor", "Le carbone", "Le chlore", "L'azote"], a: 2, explain: "Le chlore réagit avec l'ozone et le détruit ; une molécule de chlore détruit environ 100 000 molécules d'ozone." },
    { q: "Quel est le fluide de référence pour le GWP, et quelle est sa valeur ?", options: ["R134a, GWP=1430", "CO2 (R744), GWP=1", "R11, GWP=1", "R22, GWP=100"], a: 1, explain: "Le GWP est toujours donné par rapport au CO2 (R744) dont le GWP vaut 1." },
    { q: "Quel accord international, en 1987, organise l'interdiction progressive des fluides appauvrissant la couche d'ozone ?", options: ["Le protocole de Kyoto", "Les accords de Kigali", "Les accords de Montréal", "Le règlement F-Gaz"], a: 2, explain: "1987 : Accords de Montréal, protection de la couche d'ozone." },
    { q: "Quel accord, en 2016, organise l'élimination progressive des HFC ?", options: ["Les accords de Kigali", "Les accords de Montréal", "Le protocole de Kyoto", "La directive F-Gaz de 2014"], a: 0, explain: "2016 : accords de Kigali, élimination des HFC." },
    { q: "L'ODP des fluides HFC (R134a, R404A, R410A...) est de :", options: ["1", "0,5", "0", "10"], a: 2, explain: "Les HFC n'ont aucun impact sur la couche d'ozone : ODP = 0. Leur impact est sur l'effet de serre (GWP)." },
    { q: "Quel est le GWP approximatif du R404A ?", options: ["124", "1430", "3922", "0"], a: 2, explain: "Le R404A a un GWP de 3922." },
    { q: "Le R404A est un mélange composé de :", options: ["100% R134a", "52% R143a, 44% R125, 4% R134a", "50% R22, 50% R134a", "R32 et R125 uniquement"], a: 1, explain: "R404A = 52% R143a + 44% R125 + 4% R134a, c'est un mélange (zéotrope)." },
    { q: "Les fluides HFO sont classés :", options: ["A1 (non inflammable)", "B2 (toxique, inflammable)", "A2L (faible toxicité, légèrement inflammable)", "A3 (fortement inflammable)"], a: 2, explain: "Les HFO sont classés A2L : faiblement toxiques mais inflammables, et dégagent de l'acide fluorhydrique en cas d'incendie." },
    { q: "Quel type de fluide a un GWP compris entre 0 et 1 ?", options: ["Les HFC", "Les fluides naturels (ammoniac, CO2 naturel)", "Les CFC", "Les HCFC"], a: 1, explain: "Les fluides naturels comme l'ammoniac ou le CO2 naturel ont un GWP quasi nul (0 à 1)." },
  ],
},
{
  id: "ch2",
  num: "02",
  title: "Notions de physique",
  html: `
  <div class="card">
    <h3>Température — unité Kelvin</h3>
    <p>La température se mesure en degrés Celsius dans la vie courante (0°C = fusion de la glace, 100°C = ébullition de l'eau à pression atmosphérique). En thermodynamique, l'unité de référence est le <b>Kelvin (K)</b> : <span class="key-value">0 K = -273,15 °C</span>.</p>
    <p>Les différences de température (<b>DELTA, Δ</b>) sont toujours exprimées en <b>Kelvin</b>.</p>
  </div>
  <div class="card">
    <h3>Pression — unité Pascal</h3>
    <p>La pression = force par unité de surface. Unité SI : le <b>Pascal (Pa)</b> = 1 Newton/m².</p>
    <ul>
      <li>1 atmosphère normale = 101 325 Pa = <span class="key-value">1,013 bar</span></li>
      <li>1 bar = 100 000 Pa</li>
    </ul>
    <p>Cette valeur (1,013 bar) sert de référence pour la lecture des manomètres en réfrigération.</p>
  </div>
  <div class="card">
    <h3>Masse — unité kilogramme</h3>
    <p>Masse (kg) ≠ Poids (Newton). Le poids est une force : <span class="key-value">Poids = Masse × g</span> (g = pesanteur = 9,81 m/s²). La masse est la quantité de matière ; le poids dépend de la gravité du lieu.</p>
  </div>
  <div class="card">
    <h3>Volume — unité m³</h3>
    <ul>
      <li><b>Densité</b> : sans unité. Rapport de la masse volumique d'un corps à celle de l'eau (liquide) ou de l'air (gaz).</li>
      <li><b>Masse volumique</b> : kg/m³.</li>
      <li><b>Volume massique</b> : m³/kg — permet de dimensionner les tuyauteries.</li>
      <li><b>Débit volumique</b> : Qv (m³/s) = S (section, m²) × V (vitesse, m/s)</li>
      <li><b>Débit massique</b> : Qm (kg/s) = Qv (m³/s) × Mv (kg/m³)</li>
    </ul>
  </div>
  <div class="card">
    <h3>Énergie (Joule) et Puissance (Watt)</h3>
    <ul>
      <li><b>Puissance</b> P(W) = J(joules) / t(secondes) — travail ou énergie fourni par unité de temps.</li>
      <li><b>Énergie thermique</b> : Joule (ancienne unité : calorie, 1 cal = 4,18 J). 1 calorie = quantité de chaleur pour élever 1 g d'eau de 1°C.</li>
      <li><b>Énergie mécanique</b> : 1 J = déplacement de 1 m sous une force de 1 N.</li>
    </ul>
  </div>`,
  questions: [
    { q: "0 Kelvin correspond à quelle température en degrés Celsius ?", options: ["0°C", "-273,15°C", "-100°C", "-40°C"], a: 1, explain: "0 K = -273,15°C, c'est le zéro absolu." },
    { q: "Les écarts de température (Delta Δ) sont toujours exprimés en :", options: ["Celsius", "Fahrenheit", "Kelvin", "Bar"], a: 2, explain: "Par convention, un delta de température (différence) s'exprime toujours en Kelvin." },
    { q: "1 bar correspond à combien de Pascal ?", options: ["1 000 Pa", "10 000 Pa", "100 000 Pa", "1 000 000 Pa"], a: 2, explain: "1 bar = 100 000 Pa." },
    { q: "1 atmosphère normale équivaut à :", options: ["1 bar exactement", "1,013 bar", "10 bar", "0,5 bar"], a: 1, explain: "1 atm = 101 325 Pa = 1,013 bar. C'est la référence pour la lecture des manomètres." },
    { q: "Quelle est la formule du poids ?", options: ["Poids = Masse / g", "Poids = Masse × g", "Poids = Masse × Volume", "Poids = Masse + g"], a: 1, explain: "Poids (Newton) = Masse (kg) × g (9,81 m/s²)." },
    { q: "Le débit massique Qm se calcule comme :", options: ["Qm = S × V", "Qm = Qv × Mv (masse volumique)", "Qm = Qv / Mv", "Qm = S / V"], a: 1, explain: "Qm (kg/s) = Qv (m³/s) × Mv (kg/m³)." },
    { q: "Quelle est l'unité de la puissance et sa formule ?", options: ["Le Watt, P = J/t", "Le Joule, P = m × g", "Le Pascal, P = F/S", "Le Newton, P = J × t"], a: 0, explain: "La puissance s'exprime en Watt : P(W) = J(joules)/t(secondes)." },
    { q: "Une calorie équivaut à environ :", options: ["1 Joule", "4,18 Joules", "100 Joules", "0,18 Joule"], a: 1, explain: "1 calorie ≈ 4,18 Joules." },
    { q: "Le volume massique s'exprime en :", options: ["kg/m³", "m³/kg", "m³/s", "kg/s"], a: 1, explain: "Volume massique = m³/kg (volume occupé par une unité de masse)." },
  ],
},
{
  id: "ch3",
  num: "03",
  title: "Mécanique des fluides",
  html: `
  <div class="card">
    <h3>Liquide vs Gaz</h3>
    <ul>
      <li><b>Liquide</b> : incompressible, volume constant sous la pression, soumis à la gravité (prend la forme basse du contenant).</li>
      <li><b>Gaz</b> : se dilate avec la température ; comprimé, son volume diminue et sa pression augmente (occupe tout l'espace disponible).</li>
    </ul>
  </div>
  <div class="card">
    <h3>Relation Pression / Température d'ébullition</h3>
    <p>Pour chaque liquide, il existe une relation directe entre pression et température d'ébullition (moment où apparaît la première bulle de vapeur).</p>
    <table>
      <tr><th>Situation</th><th>Pression</th><th>T° ébullition de l'eau</th></tr>
      <tr><td>Cocotte-minute</td><td>2,0 bar</td><td>120°C</td></tr>
      <tr><td>Niveau de la mer</td><td>1,013 bar</td><td>100°C</td></tr>
      <tr><td>Sommet montagne</td><td>0,5 bar</td><td>82°C</td></tr>
    </table>
    <p>À pression atmosphérique : R134a bout à <span class="key-value">-26,4°C</span>, R404A bout à <span class="key-value">-46,5°C</span>.</p>
  </div>
  <div class="card">
    <h3>Enthalpie : chaleur sensible et chaleur latente</h3>
    <p><b>Enthalpie</b> = énergie interne contenue dans un fluide = <b>chaleur sensible + chaleur latente</b>.</p>
    <ul>
      <li><b>Chaleur sensible</b> : variation de température d'un corps <b>sans</b> changement d'état (mesurable "au toucher"). Ex : 418 kJ pour chauffer 1 L d'eau de 0 à 100°C.</li>
      <li><b>Chaleur latente</b> : énergie nécessaire pour changer d'état <b>sans</b> modifier la température. Ex : transformer de l'eau à 100°C en vapeur à 100°C.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Mélanges Zéotropiques et Azéotropiques</h3>
    <ul>
      <li><b>Zéotropiques (série 400)</b> : glissement de température plus ou moins important lors du changement d'état (évaporation/condensation).</li>
      <li><b>Azéotropiques (série 500)</b> : pas de glissement de température, se comportent comme un fluide pur.</li>
      <li>Un fluide pur (ex : R134a) change d'état à température constante.</li>
    </ul>
  </div>`,
  questions: [
    { q: "Un liquide est :", options: ["Compressible", "Incompressible", "Sans volume propre", "Toujours gazeux à froid"], a: 1, explain: "Le liquide est incompressible : son volume ne varie pas sous la pression." },
    { q: "Quand on comprime un gaz (température constante), que se passe-t-il ?", options: ["Son volume augmente et sa pression baisse", "Son volume diminue et sa pression augmente", "Rien ne change", "Il devient liquide instantanément"], a: 1, explain: "Un gaz comprimé voit son volume diminuer et sa pression augmenter." },
    { q: "À quelle température l'eau bout-elle au niveau de la mer (1,013 bar) ?", options: ["82°C", "100°C", "120°C", "0°C"], a: 1, explain: "À pression atmosphérique normale, l'eau bout à 100°C." },
    { q: "Dans une cocotte-minute (2,0 bar), l'eau bout à environ :", options: ["100°C", "82°C", "120°C", "150°C"], a: 2, explain: "La pression plus élevée dans la cocotte-minute élève la température d'ébullition à environ 120°C." },
    { q: "À pression atmosphérique, à quelle température bout le R134a ?", options: ["-46,5°C", "-26,4°C", "0°C", "-10°C"], a: 1, explain: "Le R134a bout à -26,4°C à pression atmosphérique." },
    { q: "La chaleur latente correspond à :", options: ["Une variation de température sans changement d'état", "Un changement d'état sans variation de température", "Une variation de pression uniquement", "Une chaleur mesurable au toucher"], a: 1, explain: "La chaleur latente permet un changement d'état (ex: liquide→vapeur) sans faire varier la température." },
    { q: "L'enthalpie d'un fluide est égale à :", options: ["Chaleur sensible - chaleur latente", "Chaleur sensible + chaleur latente", "Pression x Volume", "Masse x Vitesse"], a: 1, explain: "Enthalpie = chaleur sensible + chaleur latente." },
    { q: "Un mélange zéotropique (série 400) présente :", options: ["Un glissement de température lors du changement d'état", "Un comportement identique à un fluide pur (pas de glissement)", "Une absence totale de chaleur latente", "Un ODP de 1"], a: 0, explain: "Les zéotropiques (série 400) ont un glissement de température lors de l'évaporation/condensation, contrairement aux azéotropiques (série 500)." },
    { q: "Un fluide pur comme le R134a change d'état à :", options: ["Température variable selon la charge", "Température constante", "Pression constante uniquement, température aléatoire", "Une température toujours de 0°C"], a: 1, explain: "Un fluide pur change d'état à température constante (à pression donnée)." },
  ],
},
{
  id: "ch4",
  num: "04",
  title: "Réglementation",
  html: `
  <div class="card">
    <h3>Évolutions réglementaires françaises et européennes</h3>
    <ul>
      <li><b>Arrêtés du 25/07/2016</b> : modification du CERFA 15497*02 ; programmation de la disparition des fluides HFC (<i>phase down</i>) ; la quantité de charge est convertie en tonnes équivalent CO2.</li>
      <li><b>2023</b> : modification du CERFA 15497*03 et mise en place de Trackdéchets. La fiche d'intervention et le bordereau de déchet sont réunis en un seul document.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Règlement UE 517/2014 — F-Gaz : obligations des entreprises</h3>
    <ul>
      <li>Être titulaire d'une <b>attestation de capacité</b> à manipuler les fluides (cat. I, II, IV ou V).</li>
      <li>Posséder le matériel obligatoire : machine de récupération, manomètres, thermomètre, détecteur de fuite, balance (matériel contrôlé <b>chaque année</b>).</li>
      <li>Techniciens titulaires d'une <b>attestation d'aptitude</b> (valide à vie).</li>
      <li>Le détenteur d'une installation doit confier l'entretien à un professionnel avec attestation de capacité valide (liste sur www.syderep.ademe.fr).</li>
      <li><b>Vignette d'étanchéité</b> (bleue ou rouge) lors du contrôle annuel ou après intervention, pour les installations de plus de <b>5 T éq. CO2</b> (plus de 3,5 T de PTAC pour la réfrigération embarquée).</li>
      <li>Archiver les fiches d'intervention et contrôles d'étanchéité pendant <b>5 ans</b>.</li>
      <li>Déclaration fluidique annuelle auprès de l'organisme d'accréditation.</li>
    </ul>
    <p>Formule de conversion : <span class="key-value">t éq. CO2 = GWP × charge (kg) / 1000</span></p>
  </div>
  <div class="card">
    <h3>Obligations des personnes manipulant du fluide</h3>
    <ul>
      <li>Dégazage dans l'atmosphère <b>interdit</b>.</li>
      <li>Recharge sur fuite <b>interdite</b> (une demi-charge avec traceur tolérée pour la climatisation automobile, si charge initiale &lt; 2 kg).</li>
      <li>Identification des contenants de manière lisible et indélébile.</li>
      <li>Documents de traçabilité : CERFA <b>15497*03</b> (fiche d'intervention et d'étanchéité).</li>
      <li>Justifier par un document la vérification du matériel (moins d'un an).</li>
    </ul>
  </div>
  <div class="card">
    <h3>Documents obligatoires</h3>
    <ul>
      <li>Fiche de manipulation au format <b>CERFA 15497*03</b>.</li>
      <li>Bordereau de suivi de déchets (<b>Trackdéchets</b>).</li>
    </ul>
  </div>`,
  questions: [
    { q: "Quel règlement européen encadre la manipulation des fluides frigorigènes (F-Gaz) ?", options: ["UE 517/2014", "UE 1005/2009", "UE 305/2011", "UE 842/2006"], a: 0, explain: "Le règlement F-Gaz UE 517/2014 encadre les obligations liées aux fluides frigorigènes." },
    { q: "Quelle attestation, valide à vie, doit posséder un technicien manipulant du fluide ?", options: ["Attestation de capacité", "Attestation d'aptitude", "Permis feu", "Habilitation électrique"], a: 1, explain: "L'attestation d'aptitude (technicien) est valide à vie, contrairement à l'attestation de capacité (entreprise)." },
    { q: "À quelle fréquence le matériel obligatoire (manomètres, balance, détecteur de fuite...) doit-il être contrôlé ?", options: ["Tous les 2 ans", "Une fois par mois", "Chaque année", "Jamais, sauf panne"], a: 2, explain: "Le matériel obligatoire doit être contrôlé chaque année." },
    { q: "Pour quelles installations la vignette d'étanchéité est-elle obligatoire ?", options: ["Toutes les installations sans exception", "Plus de 5 T éq. CO2 (3,5T PTAC pour l'embarqué)", "Uniquement les installations fixes de plus de 100kg", "Uniquement en climatisation automobile"], a: 1, explain: "La vignette (bleue ou rouge) concerne les installations de plus de 5T éq. CO2, ou plus de 3,5T de PTAC pour la réfrigération embarquée." },
    { q: "Pendant combien de temps faut-il archiver les fiches d'intervention et contrôles d'étanchéité ?", options: ["1 an", "3 ans", "5 ans", "10 ans"], a: 2, explain: "Les fiches doivent être archivées pendant 5 ans." },
    { q: "Comment calcule-t-on les tonnes équivalent CO2 (t éq. CO2) ?", options: ["GWP × charge (kg) / 1000", "ODP × charge (kg)", "charge (kg) / GWP", "GWP + charge (kg)"], a: 0, explain: "t éq. CO2 = GWP × charge (kg) / 1000." },
    { q: "Le dégazage de fluide frigorigène dans l'atmosphère est :", options: ["Toléré en cas d'urgence", "Interdit", "Autorisé avec déclaration", "Autorisé pour les HFO uniquement"], a: 1, explain: "Le dégazage dans l'atmosphère est strictement interdit." },
    { q: "La recharge sur fuite est interdite, sauf exception pour :", options: ["Les installations fixes de grande capacité", "La climatisation automobile avec traceur, si charge initiale < 2kg", "Les groupes de transport routier", "Aucune exception n'existe"], a: 1, explain: "Une demi-charge avec traceur est tolérée en climatisation automobile si la charge initiale est inférieure à 2kg." },
    { q: "Quel document réunit désormais la fiche d'intervention et le bordereau de déchet (depuis 2023) ?", options: ["CERFA 15497*02", "CERFA 15497*03 avec Trackdéchets", "Le registre de l'équipement", "L'attestation de capacité"], a: 1, explain: "Depuis 2023, le CERFA 15497*03 et Trackdéchets réunissent fiche d'intervention et bordereau de déchet." },
  ],
},
{
  id: "ch5",
  num: "05",
  title: "Principe de fonctionnement d'une installation frigorifique",
  html: `
  <div class="card">
    <h3>Le transfert de chaleur</h3>
    <p>« Faire du froid » n'est qu'une expression : le froid ne se fabrique pas. On <b>génère du froid en prélevant du chaud</b> dans un milieu et en le rejetant dans un autre.</p>
    <ul>
      <li>L'abaissement de température d'un corps se fait toujours par transfert et évacuation de sa chaleur.</li>
      <li>À 0 Kelvin (-273°C), un corps ne contient théoriquement plus de chaleur (valeur inatteignable, arrêt total de l'activité moléculaire).</li>
      <li>Le transfert de chaleur se fait toujours en <b>sens unique</b> : du plus chaud vers le plus froid.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Les 4 éléments de base du circuit</h3>
    <ul>
      <li><b>Compresseur</b> : cœur de l'installation, fait circuler le fluide — ne peut travailler qu'en <b>phase gaz</b>.</li>
      <li><b>Condenseur</b> : évacue la chaleur (calories cellule + travail compresseur), transforme le gaz en liquide (condensation).</li>
      <li><b>Détendeur</b> : fait chuter la pression (et la température) via l'orifice calibré ; règle le débit de fluide dans l'évaporateur.</li>
      <li><b>Évaporateur</b> : capte les calories de la cellule, transforme le liquide en gaz (évaporation).</li>
    </ul>
  </div>`,
  questions: [
    { q: "\"Faire du froid\", concrètement, cela signifie :", options: ["Fabriquer des molécules froides", "Prélever du chaud dans un milieu et le rejeter dans un autre", "Réduire la pression uniquement", "Ajouter du fluide frigorigène"], a: 1, explain: "Le froid ne se fabrique pas : on prélève de la chaleur dans un milieu pour la rejeter ailleurs." },
    { q: "Dans quel sens se fait toujours le transfert de chaleur ?", options: ["Du plus froid vers le plus chaud", "Du plus chaud vers le plus froid", "Dans les deux sens simultanément", "Cela dépend du fluide utilisé"], a: 1, explain: "Le transfert de chaleur se fait toujours en sens unique, du plus chaud vers le plus froid." },
    { q: "Le compresseur ne peut travailler qu'en phase :", options: ["Liquide", "Gazeuse", "Mélange liquide-vapeur", "Solide"], a: 1, explain: "Le compresseur ne peut comprimer que du gaz, jamais du liquide (risque de casse)." },
    { q: "Quel organe transforme le gaz en liquide ?", options: ["L'évaporateur", "Le détendeur", "Le condenseur", "Le compresseur"], a: 2, explain: "Le condenseur évacue la chaleur et transforme le gaz (vapeur) en liquide : c'est la phase de condensation." },
    { q: "Quel organe capte les calories de la cellule et transforme le liquide en gaz ?", options: ["Le condenseur", "L'évaporateur", "Le détendeur", "Le compresseur"], a: 1, explain: "L'évaporateur capte les calories de la cellule à réfrigérer et évapore le fluide (liquide → gaz)." },
    { q: "Quel organe fait chuter la pression et règle le débit de fluide dans l'évaporateur ?", options: ["Le détendeur", "Le compresseur", "Le condenseur", "Le déshydrateur"], a: 0, explain: "Le détendeur, via son orifice calibré, fait chuter la pression et règle le débit d'admission dans l'évaporateur." },
  ],
},
{
  id: "ch6",
  num: "06",
  title: "Tracé du cycle frigorifique (diagramme de Mollier)",
  html: `
  <div class="card">
    <h3>Diagramme enthalpique (Mollier)</h3>
    <p>Il permet de comprendre le cycle frigorifique en suivant l'évolution du fluide au cours de chaque transformation, d'un état initial à un état final, en déterminant les différentes enthalpies.</p>
    <p><b>Enthalpie</b> : quantité de chaleur contenue par un fluide.</p>
  </div>
  <div class="card">
    <h3>Les étapes du cycle</h3>
    <ul>
      <li><b>1→2 Évaporateur</b> : le fluide s'évapore, T° et P° ne changent pas mais l'enthalpie augmente. Le fluide capte les calories du milieu à refroidir.<br>Entrée : mélange liquide-vapeur BP. Sortie : vapeur BP surchauffée.</li>
      <li><b>2→3 Fin d'évaporateur</b> : zone de contrôle du niveau de remplissage (surchauffe), garantit que tout le fluide est évaporé.</li>
      <li><b>2→4 Zone de surchauffe totale</b> : surchauffe évaporateur + surchauffe « naturelle » (tuyauterie jusqu'au compresseur).</li>
      <li><b>4→5 Compresseur</b> : le gaz est comprimé, la hausse de pression s'accompagne d'une hausse de température.<br>Entrée : vapeur BP. Sortie : vapeur HP.</li>
      <li><b>5→6 Zone de désurchauffe</b> : tuyauterie cuivre entre sortie compresseur et entrée condenseur.</li>
      <li><b>6→7 Condenseur</b> : le fluide passe à l'état liquide, la pression ne change pas ; la condensation cède de la chaleur (l'enthalpie diminue).<br>Entrée : vapeur HP. Sortie : liquide HP sous-refroidi.</li>
      <li><b>7→8 Fin de condenseur</b> : zone de sous-refroidissement, permet de contrôler la charge de l'installation.</li>
      <li><b>8→1 Détendeur</b> : le fluide se détend par laminage (chute brusque de pression) à travers un orifice ; une partie du fluide se vaporise.<br>Entrée : liquide HP. Sortie : mélange liquide-vapeur BP. Retour à l'étape 1→2.</li>
    </ul>
  </div>`,
  questions: [
    { q: "Que représente l'enthalpie dans le diagramme de Mollier ?", options: ["La vitesse du fluide", "La quantité de chaleur contenue par un fluide", "La masse du fluide", "La pression du fluide"], a: 1, explain: "L'enthalpie représente la quantité de chaleur contenue dans le fluide." },
    { q: "Pendant l'évaporation (1→2), que se passe-t-il ?", options: ["La température et la pression augmentent", "La température et la pression restent constantes, l'enthalpie augmente", "L'enthalpie diminue", "Le fluide se condense"], a: 1, explain: "Lors de l'évaporation, T° et P° restent constantes mais l'enthalpie augmente : le fluide capte des calories." },
    { q: "Quel est l'état du fluide en sortie d'évaporateur (en fonctionnement normal) ?", options: ["Liquide sous-refroidi", "Mélange liquide-vapeur", "Vapeur BP surchauffée", "Vapeur HP"], a: 2, explain: "En sortie d'évaporateur, le fluide doit être en vapeur BP surchauffée (garantit l'absence de liquide au compresseur)." },
    { q: "Pendant la compression (4→5), la pression augmente. Que se passe-t-il pour la température ?", options: ["Elle diminue", "Elle reste stable", "Elle augmente également", "Elle devient négative"], a: 2, explain: "La compression fait augmenter simultanément la pression et la température du gaz." },
    { q: "Quel est l'état du fluide en sortie de condenseur (en fonctionnement normal) ?", options: ["Vapeur HP", "Liquide HP sous-refroidi", "Mélange liquide-vapeur BP", "Vapeur BP surchauffée"], a: 1, explain: "En sortie de condenseur, le fluide est liquide HP, sous-refroidi." },
    { q: "Dans le condenseur (6→7), la pression :", options: ["Augmente", "Diminue", "Ne change pas", "Devient négative"], a: 2, explain: "Dans le condenseur, la pression reste constante tandis que le fluide se liquéfie (l'enthalpie diminue)." },
    { q: "Que se passe-t-il au niveau du détendeur (8→1) ?", options: ["Compression du gaz", "Laminage : chute brusque de pression, une partie du fluide se vaporise", "Condensation complète", "Évaporation totale"], a: 1, explain: "Le détendeur fait chuter brusquement la pression par laminage ; une partie du fluide liquide se vaporise instantanément." },
    { q: "La zone de sous-refroidissement (7→8) sert à :", options: ["Réguler la vitesse du compresseur", "Contrôler la charge de l'installation", "Mesurer la température ambiante", "Détecter les fuites"], a: 1, explain: "La zone de sous-refroidissement en fin de condenseur permet de contrôler la charge de l'installation." },
  ],
},
{
  id: "ch7",
  num: "07",
  title: "Les éléments du circuit frigorifique en détail",
  html: `
  <div class="card">
    <h3>Sous-refroidissement (condenseur)</h3>
    <p>= Température de condensation (lue au manomètre HP) − Température de sortie condenseur (lue au thermomètre). Permet de contrôler la charge de l'installation.</p>
    <ul>
      <li>Valeur normale : entre <span class="key-value">4°C et 7°C</span>.</li>
      <li>&lt; 4°C : manque de fluide.</li>
      <li>&gt; 7°C : trop de fluide dans l'installation.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Surchauffe (évaporateur)</h3>
    <p>= Température d'évaporation (lue au manomètre BP) − Température au bulbe du détendeur (lue au thermomètre). Contrôle le remplissage/efficacité de l'évaporateur.</p>
    <ul>
      <li>Valeur normale : entre <span class="key-value">5°C et 8°C</span> (ex : R404A, 4°C à -20°C selon données constructeur).</li>
      <li>&lt; 4°C : trop de liquide dans l'évaporateur.</li>
      <li>&gt; 8°C : pas assez de fluide dans l'évaporateur.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Familles de compresseurs</h3>
    <table>
      <tr><th>Type</th><th>Avantages</th><th>Inconvénients</th></tr>
      <tr><td>Ouvert</td><td>Coût, simplicité</td><td>Étanchéité, fragilité (tension courroie)</td></tr>
      <tr><td>Semi-hermétique</td><td>Robustesse</td><td>Poids</td></tr>
      <tr><td>Hermétique</td><td>Étanchéité, compact, vitesse variable</td><td>Coût, plus fragile que semi-H</td></tr>
    </table>
    <p><b>3 types</b> de compresseurs : à <b>piston</b> (réfrigérateurs/congélateurs), à <b>spirale/scroll</b> (climatisation, discrétion sonore), à <b>vis</b> (hélico-compresseur, film d'huile pour l'étanchéité).</p>
  </div>
  <div class="card">
    <h3>Vanne de service</h3>
    <ul>
      <li><b>Position arrière</b> (siège arrière) : fonctionnement normal, prise de pression isolée.</li>
      <li><b>Position intermédiaire</b> : raccordement des manomètres.</li>
      <li><b>Position avant</b> (siège avant) : isole le fluide, utilisé pour la maintenance (ex : remplacement compresseur).</li>
    </ul>
  </div>
  <div class="card">
    <h3>Autres composants clés</h3>
    <ul>
      <li><b>Flexible anaconda (anti-vibration)</b> : proche des compresseurs, arrête les vibrations, précaution lors du remplacement (chauffe excessive lors de soudure).</li>
      <li><b>Séparateur d'huile</b> : sortie HP compresseur, isole l'huile du gaz et la fait revenir à l'aspiration (BP).</li>
      <li><b>BRL (Bouteille Réservoir Liquide)</b> : sortie condenseur (liquide HP), stock tampon, peut contenir la charge totale. Vanne "vanne liquide".</li>
      <li><b>BAL (Bouteille Anti-coup de Liquide)</b> : aspiration compresseur (gaz BP), évite l'arrivée de liquide au compresseur. Orifice taré pour le retour d'huile.</li>
      <li><b>Déshydrateur</b> : retient les impuretés, absorbe l'humidité résiduelle (évite bouchons/pollution).</li>
      <li><b>Voyant liquide</b> : contrôle le remplissage de la ligne liquide, la teneur en humidité (pastille test), et la pollution visuelle du fluide.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Pressostats</h3>
    <p>Interrupteurs électriques réagissant à une pression prédéfinie ou ajustable.</p>
    <ul>
      <li><b>Pressostats de sécurité</b> : stoppent le compresseur en cas de pression anormale (haute ou basse), risque pour personnes/machine.</li>
      <li><b>Pressostats de régulation</b> : contrôlent un organe de régulation (vanne de bipassage, ventilation condenseur...).</li>
    </ul>
    <h4 style="margin-bottom:4px;">Pressostat BP</h4>
    <ul>
      <li>Implanté sur l'aspiration compresseur. Pression de coupure généralement <span class="key-value">0,2 bar</span>.</li>
      <li>En régulation : <b>pump down</b> — arrête le compresseur via le pressostat BP après que la température de consigne soit atteinte.</li>
    </ul>
    <h4 style="margin-bottom:4px;">Pressostat HP (sécurité)</h4>
    <ul>
      <li>Implanté sur la culasse ou le refoulement compresseur. Contact <b>NC</b> (normalement fermé).</li>
      <li>Réglage pression de coupure : Température extérieure maximum + 15°C (condensation) + 5°C (sécurité).<br>Exemple : 35°C ext. → 35+15+5 = 55°C → 14 bars pour R134a.</li>
    </ul>
    <p>Pressostat de régulation : contact <b>NO</b> généralement (parfois NC).</p>
  </div>
  <div class="card">
    <h3>Vannes limitatrices</h3>
    <ul>
      <li><b>KVP</b> (régulateur de pression d'évaporation) : maintient une pression minimale préréglée dans l'évaporateur, utile pour évaporateurs multiples à températures différentes sur un même compresseur.</li>
      <li><b>KVL</b> (régulateur de démarrage / CPR) : limite la pression d'aspiration au démarrage pour protéger le compresseur contre la surcharge (après dégivrage/arrêt prolongé). Installé au plus près du compresseur.</li>
    </ul>
  </div>
  <div class="card">
    <h3>VEM — Vannes électromagnétiques (électrovannes)</h3>
    <ul>
      <li><b>NO (normalement ouverte)</b> : laisse passer le fluide au repos (hors tension) ; bague <b>rouge</b> au sommet.</li>
      <li><b>NC (normalement fermée)</b> : bloque le fluide au repos, laisse passer sous tension.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Détendeur</h3>
    <p>Assure l'admission automatique du fluide à l'évaporateur pour un remplissage optimal, et détend le liquide (mélange liquide-vapeur ~80%/20%, baisse P° et T°).</p>
    <p><b>3 familles</b> : capillaire, thermostatique, électronique.</p>
    <p><b>2 types de détendeurs thermostatiques</b> : à égalisation de pression interne, ou externe. On utilise généralement l'<b>égalisation externe</b>, seule à permettre de compenser les pertes de charge d'un évaporateur (plusieurs rangs, plaques, distributeur de liquide).</p>
  </div>
  <div class="card">
    <h3>Évaporateur et condenseur — températures de référence</h3>
    <ul>
      <li><b>Évaporateur</b> : Température d'évaporation = Température de cellule <b>− 10°C</b>. Ex : cellule à +5°C → évaporation à -5°C.</li>
      <li><b>Condenseur</b> : Température de condensation = Température ambiante <b>+ 15°C</b>. Ex : ambiante +25°C → condensation à +40°C.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Huile frigorifique</h3>
    <ul>
      <li><b>Huile minérale</b> : miscible avec les HCFC.</li>
      <li><b>Huile polyester (POE)</b> : nécessaire avec les HFC ; très hygroscopique (forte rétention d'eau) → précautions : ne pas laisser un bidon ouvert, déshydrateur antiacide obligatoire.</li>
      <li>Niveau d'huile : doit être entre le mini et le maxi. Un dégivrage ramène l'huile au compresseur — <b>obligatoire avant tout complément</b>.</li>
    </ul>
  </div>`,
  questions: [
    { q: "Quelle est la plage normale de sous-refroidissement ?", options: ["0 à 2°C", "4°C à 7°C", "10°C à 15°C", "20°C à 25°C"], a: 1, explain: "Le sous-refroidissement normal est compris entre 4°C et 7°C." },
    { q: "Un sous-refroidissement inférieur à 4°C indique :", options: ["Un excès de fluide", "Un manque de fluide", "Une surchauffe excessive", "Un problème de compresseur uniquement"], a: 1, explain: "Un sous-refroidissement trop faible (<4°C) indique un manque de fluide dans l'installation." },
    { q: "La surchauffe se mesure comme :", options: ["T° condensation - T° sortie condenseur", "T° évaporation (mano BP) - T° au bulbe du détendeur", "T° ambiante - T° soufflage", "T° cellule - T° évaporation"], a: 1, explain: "Surchauffe = Température d'évaporation (lue au mano BP) - Température au bulbe du détendeur (thermomètre)." },
    { q: "Une surchauffe supérieure à 8°C signifie :", options: ["Trop de liquide dans l'évaporateur", "Pas assez de fluide dans l'évaporateur", "Le compresseur est cassé", "Le condenseur est encrassé"], a: 1, explain: "Une surchauffe trop élevée (>8°C) indique un manque de fluide dans l'évaporateur." },
    { q: "Quel type de compresseur offre étanchéité, compacité et vitesse variable, mais est plus fragile et coûteux ?", options: ["Ouvert", "Semi-hermétique", "Hermétique", "À vis"], a: 2, explain: "Le compresseur hermétique est étanche, compact, à vitesse variable, mais plus fragile et coûteux." },
    { q: "Quels sont les 3 types de compresseurs couramment utilisés ?", options: ["Piston, scroll, vis", "Piston, rotatif, centrifuge", "Scroll, vis, turbine", "Piston, membrane, palettes"], a: 0, explain: "Les 3 types courants sont : piston, spirale (scroll), et vis." },
    { q: "Sur une vanne de service, la position 'siège avant' sert à :", options: ["Le fonctionnement normal", "Le raccordement des manomètres", "Isoler le fluide pour la maintenance", "Purger le circuit"], a: 2, explain: "La position avant (siège avant) isole le fluide pour la maintenance (ex : remplacement compresseur)." },
    { q: "Où est placée la BRL (bouteille réservoir liquide) ?", options: ["Sur l'aspiration du compresseur", "En sortie de condenseur (liquide HP)", "Sur le détendeur", "Sur l'évaporateur"], a: 1, explain: "La BRL est placée en sortie de condenseur, en phase liquide HP, comme réserve de fluide." },
    { q: "Où est placée la BAL (bouteille anti-coup de liquide) et quel est son rôle ?", options: ["Sortie condenseur, stocker le liquide", "Aspiration compresseur, éviter l'arrivée de liquide au compresseur", "Sur le détendeur, réguler la pression", "Sur le déshydrateur, filtrer l'humidité"], a: 1, explain: "La BAL est placée à l'aspiration du compresseur (BP) pour éviter les coups de liquide, avec un orifice taré pour le retour d'huile." },
    { q: "Le déshydrateur a pour fonction de :", options: ["Comprimer le gaz", "Retenir les impuretés et absorber l'humidité résiduelle", "Réguler la haute pression", "Séparer l'huile du gaz"], a: 1, explain: "Le déshydrateur retient les impuretés et absorbe l'humidité pour éviter bouchons et pollution du circuit." },
    { q: "Un pressostat de sécurité sert à :", options: ["Réguler la ventilation du condenseur en continu", "Stopper le compresseur en cas de pression anormale", "Afficher la température ambiante", "Mesurer le débit de fluide"], a: 1, explain: "Le pressostat de sécurité arrête le compresseur en cas de pression anormalement haute ou basse." },
    { q: "La pression de coupure d'un pressostat BP de sécurité est généralement de :", options: ["0,2 bar", "5 bars", "10 bars", "20 bars"], a: 0, explain: "La pression de coupure du pressostat BP est généralement de 0,2 bar." },
    { q: "Comment détermine-t-on la pression de coupure d'un pressostat HP ?", options: ["T° extérieure max + 15°C + 5°C", "T° cellule - 10°C", "T° ambiante x 2", "Toujours fixée à 10 bars"], a: 0, explain: "Réglage HP : T° extérieure max + 15°C (condensation) + 5°C (sécurité). Exemple : 35+15+5=55°C soit 14 bars pour R134a." },
    { q: "Le pressostat HP de sécurité utilise un contact :", options: ["NO (normalement ouvert)", "NC (normalement fermé)", "Sans contact électrique", "Bistable"], a: 1, explain: "Les pressostats HP de sécurité sont munis d'un contact normalement fermé (NC)." },
    { q: "Le régulateur KVP sert à :", options: ["Limiter la pression au démarrage du compresseur", "Maintenir une pression minimale dans l'évaporateur", "Comprimer le fluide", "Filtrer l'huile"], a: 1, explain: "Le KVP (régulateur de pression d'évaporation) maintient une pression minimale préréglée dans l'évaporateur." },
    { q: "Le régulateur KVL (ou CPR) sert à :", options: ["Maintenir une pression minimale dans l'évaporateur", "Limiter la pression d'aspiration au démarrage du compresseur", "Réchauffer le fluide", "Réguler la température ambiante"], a: 1, explain: "Le KVL limite la pression d'aspiration au démarrage, protégeant le compresseur contre les surcharges." },
    { q: "Une vanne électromagnétique NO (normalement ouverte) se reconnaît à :", options: ["Sa bague bleue", "Sa bague rouge", "Sa couleur verte", "L'absence de marquage"], a: 1, explain: "Les vannes NO se différencient des NC par leur bague rouge au sommet." },
    { q: "Quel type de détendeur thermostatique est généralement utilisé sur les installations à forte perte de charge (plusieurs rangs, plaques...) ?", options: ["Égalisation interne", "Égalisation externe", "Capillaire", "Électronique uniquement"], a: 1, explain: "Le détendeur à égalisation externe compense les pertes de charge des évaporateurs complexes, contrairement à l'égalisation interne." },
    { q: "La température d'évaporation est généralement égale à :", options: ["Température de cellule - 10°C", "Température de cellule + 10°C", "Température ambiante + 15°C", "0°C toujours"], a: 0, explain: "T° évaporation = T° cellule - 10°C. Exemple : cellule à +5°C → évaporation à -5°C." },
    { q: "La température de condensation est généralement égale à :", options: ["Température ambiante - 15°C", "Température ambiante + 15°C", "Température de cellule + 10°C", "Toujours 40°C"], a: 1, explain: "T° condensation = T° ambiante + 15°C. Exemple : ambiante +25°C → condensation à +40°C." },
    { q: "Pourquoi l'huile POE (polyester) nécessite-t-elle des précautions particulières ?", options: ["Elle est inflammable", "Elle est très hygroscopique (forte rétention d'eau)", "Elle mousse trop", "Elle ne se mélange pas au fluide"], a: 1, explain: "L'huile POE est hygroscopique : elle absorbe fortement l'eau, d'où la nécessité d'un déshydrateur antiacide et de limiter l'exposition à l'air." },
    { q: "Avant de faire un complément d'huile, il faut impérativement :", options: ["Vider tout le fluide", "Procéder à un dégivrage", "Changer le compresseur", "Arrêter l'installation 48h"], a: 1, explain: "Un dégivrage ramène la majorité de l'huile au compresseur ; il est donc obligatoire avant tout complément d'huile." },
  ],
},
{
  id: "ch8",
  num: "08",
  title: "Pratique — obligations, interdictions, matériel",
  html: `
  <div class="card">
    <h3>Obligations</h3>
    <ul>
      <li>Récupérer le fluide lors des interventions.</li>
      <li>Déclarer annuellement les quantités manipulées.</li>
      <li>Réaliser un contrôle d'étanchéité après chaque intervention.</li>
      <li>Vérifier les organes de sécurité.</li>
      <li>Réparer les fuites avant réintroduction de fluide (délai de <b>4 jours</b>).</li>
      <li>Nettoyer le circuit lors d'une casse compresseur.</li>
      <li>Vérifier régulièrement l'état des manomètres et flexibles.</li>
      <li>Braser/débraser sous circulation d'azote (fortement recommandé).</li>
      <li>Réaliser les contrôles d'étanchéité annuels obligatoires.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Interdictions</h3>
    <ul>
      <li>Évacuer du fluide dans l'atmosphère (dégazage).</li>
      <li>Supprimer/modifier les sécurités électriques ou mécaniques.</li>
      <li>Réintroduire du fluide sans réparer la fuite.</li>
      <li>Changer le type de fluide (ou les quantités) sans effectuer les modifications requises.</li>
      <li>Mélanger les fluides dans les bouteilles de récupération.</li>
      <li>Faire des compléments avec un fluide interdit à l'utilisation.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Matériel obligatoire (catégorie 1) — contrôle annuel</h3>
    <ul>
      <li><b>Manomètres</b> : étanchéité, cohérence des plages (2 valeurs minimum).</li>
      <li><b>Station de récupération/charge</b> : étanchéité, cohérence des plages, capacité à dépressuriser un circuit.</li>
      <li><b>Balance électronique</b> : précision de <span class="key-value">5%</span>, cohérence par rapport à un poids étalon.</li>
      <li><b>Détecteur de fuite</b> : détection d'au moins <span class="key-value">5 g/an</span> (fuite étalon).</li>
      <li><b>Thermomètre</b> : précision de <span class="key-value">1°C</span>, cohérence des plages.</li>
      <li>Chaque flexible doit être isolé à son extrémité par une vanne 1/4T ou vanne clim.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Manomètre vs Vacuomètre</h3>
    <ul>
      <li><b>Manomètre</b> (contrôle de fonctionnement) : gradué de -1 à 10 ou 30 bars.</li>
      <li><b>Vacuomètre</b> : gradué de 0 à 1000 mmBar (1 Bar) — réservé au tirage au vide.</li>
      <li><b>Circuit sous pression</b> (Pr > Patm) : un défaut d'étanchéité entraîne une fuite (perte de fluide).</li>
      <li><b>Circuit au vide</b> (Pr < Patm) : un défaut d'étanchéité entraîne une entrée d'air (incondensable, humidité, circuit pollué).</li>
    </ul>
  </div>
  <div class="card">
    <h3>Station de récupération</h3>
    <p>3 modes : <b>Récupération liquide/lente</b> (limite le débit vers les pistons, protège de la casse), <b>Récupération gaz/rapide</b> (passage ouvert à 100%), <b>Purge</b> (évacue tout le fluide et un maximum de gaz des flexibles).</p>
  </div>
  <div class="card">
    <h3>Balance de précision</h3>
    <ul>
      <li>Attention à la mémorisation lors de la réinitialisation/extinction automatique.</li>
      <li>Toujours vérifier l'unité de mesure (Lbs, Oz, Kg).</li>
      <li>Toujours peser et noter les bouteilles (neuves, transfert, récupération) avant intervention.</li>
      <li>Vérifier le marquage du type de fluide sur la bouteille.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Détecteurs de fuite</h3>
    <ul>
      <li><b>Détecteur électronique (méthode directe externe)</b> : seuil réglable à 5g/an, détecte le fluor (fluide halogéné requis), ne pas déplacer à plus de 1cm/sec. Seul détecteur reconnu réglementairement pour les étanchéités annuelles. À renseigner sur le CERFA 15497-2, étalonné annuellement.</li>
      <li><b>Détecteur liquide (solution moussante)</b> : bulles autour de la fuite, efficace sur grandes/moyennes fuites, moins sur les micro-fuites. <b>Pas une méthode réglementaire</b>.</li>
      <li><b>Traceur (méthode directe interne)</b> : liquide miscible à l'huile, réagit aux UV, utilisé en automobile (CAT V).</li>
    </ul>
  </div>
  <div class="card">
    <h3>Contrôle avant mise en service</h3>
    <ul>
      <li>Essai de tenue à la pression : pression appliquée = <span class="key-value">1,43 × PS</span> (PS = pression maximale admissible).</li>
      <li>Essai d'étanchéité à la pression.</li>
      <li>Tirage au vide : évacue les incondensables et l'humidité, ultime test d'étanchéité.</li>
      <li>Inscription des résultats dans le registre de l'équipement.</li>
    </ul>
  </div>`,
  questions: [
    { q: "Dans quel délai maximum faut-il réparer une fuite avant de réintroduire du fluide ?", options: ["24 heures", "4 jours", "1 mois", "1 an"], a: 1, explain: "La fuite doit être réparée dans un délai de 4 jours avant réintroduction de fluide." },
    { q: "Le mélange de fluides différents dans une bouteille de récupération est :", options: ["Autorisé si les fluides sont compatibles", "Interdit", "Autorisé avec déclaration préalable", "Recommandé pour le recyclage"], a: 1, explain: "Il est interdit de mélanger les fluides dans les bouteilles de récupération." },
    { q: "Quelle est la précision requise pour une balance électronique (matériel catégorie 1) ?", options: ["1%", "5%", "10%", "20%"], a: 1, explain: "La balance électronique doit avoir une précision de 5%." },
    { q: "Quel est le seuil de détection minimal exigé pour un détecteur de fuite ?", options: ["1 g/an", "5 g/an", "50 g/an", "500 g/an"], a: 1, explain: "Le détecteur de fuite doit détecter une fuite d'au moins 5 g/an." },
    { q: "Quelle est la précision requise pour un thermomètre (matériel catégorie 1) ?", options: ["0,1°C", "1°C", "5°C", "10°C"], a: 1, explain: "Le thermomètre doit avoir une précision de 1°C." },
    { q: "À quoi sert un vacuomètre ?", options: ["Mesurer la pression de fonctionnement normale", "Mesurer le tirage au vide (0 à 1000 mmBar)", "Peser les bouteilles", "Détecter les fuites de gaz"], a: 1, explain: "Le vacuomètre, gradué de 0 à 1000 mmBar, sert uniquement au tirage au vide." },
    { q: "Sur un circuit 'au vide' (pression < Patm), un défaut d'étanchéité entraîne :", options: ["Une fuite de fluide vers l'extérieur", "Une entrée d'air dans le circuit", "Aucune conséquence", "Une explosion"], a: 1, explain: "Sur un circuit au vide, la pression étant inférieure à l'atmosphère, un défaut d'étanchéité fait entrer de l'air (incondensables, humidité)." },
    { q: "Le mode 'récupération liquide/lente' d'une station de récupération sert à :", options: ["Aller plus vite", "Limiter le débit vers les pistons pour éviter leur casse (liquide incompressible)", "Purger les flexibles", "Chauffer le fluide"], a: 1, explain: "Le mode liquide/lente limite le débit car le liquide est incompressible et pourrait casser les pistons de la station." },
    { q: "Quel est le seul détecteur de fuite reconnu réglementairement pour les contrôles d'étanchéité annuels ?", options: ["La solution moussante", "Le détecteur électronique", "Le traceur UV", "L'oreille humaine"], a: 1, explain: "Le détecteur électronique est le seul reconnu réglementairement pour les étanchéités annuelles ou après intervention." },
    { q: "La méthode par solution moussante (bulles) est efficace sur :", options: ["Uniquement les micro-fuites", "Les grandes et moyennes fuites", "Aucune fuite", "Uniquement en climatisation automobile"], a: 1, explain: "La solution moussante est efficace sur grandes/moyennes fuites, mais moins sur les micro-fuites, et n'est pas une méthode réglementaire." },
    { q: "L'essai de tenue à la pression se réalise à quelle pression ?", options: ["1,43 × PS", "2 × PS", "0,5 × PS", "Toujours 10 bars"], a: 0, explain: "La pression d'essai de tenue = 1,43 fois la Pression maximale admissible (PS)." },
  ],
},
{
  id: "ch9",
  num: "09",
  title: "Descriptif des opérations",
  html: `
  <div class="card">
    <h3>Où brancher les manomètres</h3>
    <ul>
      <li><b>BP</b> : vanne d'aspiration compresseur ou schrader de charge — flexible <b>bleu</b>.</li>
      <li><b>HP</b> : vanne de départ liquide (sur réservoir) ou vanne de compresseur — flexible <b>rouge</b>.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Pose des manomètres (procédure)</h3>
    <ol>
      <li>Raccorder le flexible jaune à la pompe à vide.</li>
      <li>Ouvrir l'obturateur du flexible jaune.</li>
      <li>Démarrer la pompe à vide.</li>
      <li>Ouvrir les robinets HP et BP du manomètre (les aiguilles indiquent -1).</li>
      <li>Fermer les robinets HP et BP.</li>
      <li>Fermer l'obturateur du flexible jaune, arrêter la pompe à vide.</li>
      <li>Vérifier le vide des manomètres.</li>
      <li>Ouvrir les vannes HP et BP de l'installation, puis les obturateurs rouge et bleu.</li>
    </ol>
    <p>Résultat : les manomètres sont installés sans faire pénétrer d'air, et le flexible jaune est au vide, prêt à être raccordé.</p>
  </div>
  <div class="card">
    <h3>Récupération classique — points clés</h3>
    <ul>
      <li>Peser et marquer la bouteille de récupération. Vérifier la capacité maximale admissible (coefficient constructeur × contenance). Ex : bouteille 27L / R134a coef 0,84 = 22,68 kg max.</li>
      <li>Récupération liquide d'abord (poids augmente rapidement), puis récupération gaz (BP) en chauffant les points froids (déshydrateur, BAL, réservoir d'huile...).</li>
      <li>La station s'arrête généralement sous <span class="key-value">-0,7 bar</span> (pressostat BP).</li>
      <li>Le flexible de sortie de la station (encore sous fluide) est réinjecté dans l'installation après tirage au vide plutôt que rejeté à l'atmosphère.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Azote</h3>
    <ul>
      <li>Utiliser de l'<b>azote U</b> (azote asséchée) impérativement.</li>
      <li>Toujours utiliser un <b>manodétendeur</b> — jamais un flexible relié directement à la bouteille (<b>risque de danger mortel</b>).</li>
      <li>Brasure sous ambiance d'azote : un filet d'azote circule dans le circuit pour absorber les résidus (calamine) et les évacuer.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Tirage au vide</h3>
    <p>Objectif : évacuer les incondensables et l'humidité. Durée variable selon la taille du circuit, la pollution, la puissance de la pompe, la section des flexibles et la température ambiante.</p>
    <p>Le tirage au vide est efficace quand la pression atteint la <b>pression d'évaporation de l'eau</b> à la température ambiante (lue au vacuomètre) : l'eau contenue dans l'huile passe alors en vapeur et est aspirée.</p>
    <p>Il est terminé quand la pression lue reste stable, inférieure à cette valeur d'évaporation.</p>
  </div>`,
  questions: [
    { q: "Sur quelle couleur de flexible se raccorde la basse pression (BP) ?", options: ["Rouge", "Bleu", "Jaune", "Vert"], a: 1, explain: "Le flexible bleu se raccorde à la basse pression (aspiration compresseur)." },
    { q: "Sur quelle couleur de flexible se raccorde la haute pression (HP) ?", options: ["Bleu", "Jaune", "Rouge", "Noir"], a: 2, explain: "Le flexible rouge se raccorde à la haute pression (vanne bouteille liquide)." },
    { q: "Lors de la pose des manomètres, à quoi sert le flexible jaune en premier lieu ?", options: ["À charger le fluide", "À le raccorder à la pompe à vide", "À mesurer la température", "À purger l'azote"], a: 1, explain: "Le flexible jaune est d'abord raccordé à la pompe à vide pour mettre les manomètres au vide avant tout raccordement." },
    { q: "Pourquoi ne faut-il jamais utiliser un flexible directement relié à une bouteille d'azote (sans manodétendeur) ?", options: ["Cela abîme le flexible", "Risque de danger mortel (surpression)", "Cela ralentit le travail", "Ce n'est pas assez précis"], a: 1, explain: "Sans manodétendeur, la pression de la bouteille d'azote (très élevée) peut causer un danger mortel." },
    { q: "Le tirage au vide est efficace/terminé lorsque la pression atteint :", options: ["0 bar exactement", "La pression d'évaporation de l'eau à la température ambiante", "10 mbar toujours", "1 bar"], a: 1, explain: "Le tirage au vide est efficace quand la pression atteint la pression d'évaporation de l'eau à la température ambiante, permettant d'extraire l'humidité." },
    { q: "Pendant la récupération classique, à quelle pression la station s'arrête-t-elle généralement (pressostat BP) ?", options: ["0 bar", "-0,7 bar", "5 bars", "-1 bar toujours"], a: 1, explain: "La station de récupération s'arrête généralement sous -0,7 bar." },
    { q: "Que doit-on utiliser impérativement avec une bouteille d'azote ?", options: ["Un simple raccord fileté", "Un manodétendeur", "Un thermomètre", "Une balance"], a: 1, explain: "Un manodétendeur est obligatoire avec une bouteille d'azote pour éviter tout risque mortel de surpression." },
    { q: "Que fait-on du fluide restant dans le flexible de sortie de la station de récupération, en fin d'opération ?", options: ["On le rejette à l'atmosphère", "On le réinjecte dans l'installation après tirage au vide", "On le jette avec l'huile usagée", "On le brûle"], a: 1, explain: "Pour éviter tout rejet atmosphérique, le fluide restant est réinjecté dans l'installation après tirage au vide." },
  ],
},
{
  id: "ch10",
  num: "10",
  title: "Épreuve pratique — méthodes et pressions de contrôle",
  html: `
  <div class="card">
    <h3>Sécurité au brasage</h3>
    <ul>
      <li>Porter les EPI nécessaires (gants de brasage, lunettes adaptées, tablier cuir, chaussures de sécurité).</li>
      <li>Se munir d'un extincteur avant toute opération.</li>
      <li>Contrôler l'état des tuyaux, manodétendeurs et bouteilles.</li>
      <li>Vérifier l'absence de sources inflammables (chiffons, solvants...) dans le périmètre.</li>
      <li>Être titulaire d'un permis feu si nécessaire.</li>
      <li>Baliser la zone de travail, assurer une bonne ventilation.</li>
      <li>Ne jamais allumer le chalumeau avec un briquet (risque d'explosion).</li>
      <li>Vider les tuyaux et manodétendeur après chaque utilisation.</li>
    </ul>
    <p>Pression de réglage du chalumeau : Oxygène <span class="key-value">1,5 bar</span>, Acétylène <span class="key-value">0,5 bar</span>.</p>
  </div>
  <div class="card">
    <h3>Méthodes de détection de fuite</h3>
    <ul>
      <li><b>Méthode indirecte</b> : analyse du registre de l'équipement, contrôle des pressions (rapport pression/température) à l'arrêt et en fonctionnement.</li>
      <li><b>Méthode directe externe</b> : contrôle visuel (traces d'huile/frottement), fixation des éléments, solution moussante, détecteur électronique.</li>
      <li><b>Méthode directe interne</b> : traceur fluorescent avec lampe UV (climatisation automobile).</li>
    </ul>
  </div>
  <div class="card">
    <h3>Pression d'épreuve (contrôle d'étanchéité à l'azote)</h3>
    <ul>
      <li><b>Côté HP</b> : Température maximum (zone géographique) + delta de condensation (15°C) + 5°C de sécurité. Ex : 35°C + 15°C + 5°C = 55°C → <b>14 bars</b> pour le R134a.</li>
      <li><b>Côté BP</b> : on prend la valeur la plus critique, soit <b>10 bars</b> (pression max du manomètre).</li>
    </ul>
    <p>Contrôle avec solution savonneuse (circuit sous azote) ou détecteur électronique (circuit sous pression de fluide). Conclusion : « Bon » ou « Pas bon ».</p>
  </div>
  <div class="card">
    <h3>Rapport d'intervention</h3>
    <p>Doit être bref et clair, mettre en avant par des valeurs le diagnostic, la réparation et l'analyse de fonctionnement. Informations à faire apparaître : opérateur, détenteur, informations sur l'installation, réparations effectuées, analyse de fonctionnement. Le CERFA 15497*02 est également à remplir.</p>
  </div>`,
  questions: [
    { q: "Quelle est la pression de réglage de l'oxygène pour le brasage ?", options: ["0,5 bar", "1,5 bar", "3 bars", "5 bars"], a: 1, explain: "La pression de réglage du chalumeau : Oxygène 1,5 bar." },
    { q: "Quelle est la pression de réglage de l'acétylène pour le brasage ?", options: ["1,5 bar", "0,5 bar", "2 bars", "5 bars"], a: 1, explain: "La pression de réglage du chalumeau : Acétylène 0,5 bar." },
    { q: "Comment doit-on allumer un chalumeau de brasage ?", options: ["Avec un briquet", "Jamais avec un briquet (risque d'explosion), avec un allume-gaz adapté", "Avec une flamme nue", "Peu importe le moyen"], a: 1, explain: "Il ne faut jamais allumer le chalumeau avec un briquet, en raison du risque d'explosion de celui-ci." },
    { q: "La méthode indirecte de détection de fuite consiste à :", options: ["Utiliser une solution moussante", "Analyser le registre et contrôler les pressions (rapport pression/température)", "Injecter un traceur UV", "Utiliser un détecteur électronique"], a: 1, explain: "La méthode indirecte s'appuie sur l'analyse du registre de l'équipement et le contrôle du rapport pression/température." },
    { q: "Quelle méthode de détection de fuite est réservée à la climatisation automobile (méthode directe interne) ?", options: ["Solution moussante", "Détecteur électronique", "Traceur fluorescent UV", "Analyse du registre"], a: 2, explain: "Le traceur fluorescent avec lampe UV est la méthode directe interne, utilisée en climatisation automobile." },
    { q: "Pour une pression d'épreuve HP avec une T° extérieure max de 35°C au R134a, quelle est la pression visée ?", options: ["10 bars", "14 bars", "20 bars", "55 bars"], a: 1, explain: "35°C + 15°C (condensation) + 5°C (sécurité) = 55°C, ce qui correspond à 14 bars pour le R134a." },
    { q: "Quelle pression d'épreuve retient-on généralement côté BP ?", options: ["14 bars", "10 bars (pression max du manomètre)", "0,2 bar", "1 bar"], a: 1, explain: "Côté BP, on retient la valeur la plus critique, soit 10 bars (pression maximum du manomètre)." },
  ],
},
{
  id: "ch11",
  num: "11",
  title: "Climatisation automobile (CAT 5)",
  html: `
  <div class="card">
    <h3>Particularités du circuit</h3>
    <ul>
      <li>La bouteille anti-coup de liquide (BAL) peut aussi servir de bouteille réservoir liquide.</li>
      <li>Le détendeur est souvent un <b>orifice calibré</b> (appelé orifice gradué, étrangleur).</li>
      <li>Test de performance : contrôle des pressions HP et BP + contrôle du <b>delta d'air</b> (différence entre température ambiante et température de soufflage), comparé au tableau constructeur.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Stations de maintenance automobile</h3>
    <p>Autonomes pour la manipulation du fluide, mais nécessitent une programmation attentive : chaque paramètre doit être validé (charge, quantité d'huile, cycle de nettoyage...).</p>
  </div>
  <div class="card">
    <h3>Réglementation spécifique</h3>
    <ul>
      <li>Pas de contrôle d'étanchéité annuel obligatoire pour la climatisation automobile.</li>
      <li>Détection de fuite par traceur fluorescent autorisée à hauteur de <b>50% de la charge</b>, uniquement si la charge initiale est <b>≤ 2 kg</b>. Ex : circuit de 0,600 kg de R134a → charge de 0,300 kg avec traceur autorisée.</li>
      <li>L'injection de traceur fluorescent se fait <b>une seule fois</b> par circuit ; une étiquette doit ensuite être apposée sur l'installation.</li>
      <li>La station de maintenance imprime elle-même la fiche d'intervention au format ticket.</li>
      <li>Test d'étanchéité au détecteur de fuite après toute intervention : <b>obligatoire</b>.</li>
    </ul>
  </div>`,
  questions: [
    { q: "En climatisation automobile, quel organe fait souvent office de détendeur ?", options: ["Un détendeur thermostatique classique", "Un orifice calibré (étrangleur)", "Une vanne électromagnétique", "Un pressostat"], a: 1, explain: "Le détendeur est souvent un simple orifice calibré (orifice gradué, étrangleur) en climatisation automobile." },
    { q: "Le test de performance d'une climatisation automobile inclut le contrôle du :", options: ["Delta d'air (T° ambiante - T° soufflage)", "Delta de pression uniquement", "Niveau d'huile moteur", "Volume du réservoir de carburant"], a: 0, explain: "Le test de performance contrôle les pressions HP/BP et le delta d'air (T° ambiante - T° soufflage)." },
    { q: "Le contrôle d'étanchéité annuel est-il obligatoire pour la climatisation automobile ?", options: ["Oui, comme toute installation", "Non, ce n'est pas requis", "Uniquement pour les véhicules de plus de 5 ans", "Uniquement en cas de fuite visible"], a: 1, explain: "La réglementation sur les climatisations automobiles ne requiert pas de contrôle d'étanchéité annuel." },
    { q: "À quelle condition peut-on utiliser un traceur fluorescent avec 50% de la charge en climatisation automobile ?", options: ["Toujours possible", "Si la charge initiale est ≤ 2 kg", "Si la charge initiale est ≥ 2 kg", "Uniquement sur les circuits au R404A"], a: 1, explain: "Le traceur à 50% de charge est autorisé uniquement si la charge initiale du circuit est inférieure ou égale à 2 kg." },
    { q: "Combien de fois peut-on injecter du traceur fluorescent dans un même circuit ?", options: ["Autant de fois que nécessaire", "Une seule fois, avec pose d'une étiquette ensuite", "Deux fois maximum par an", "Jamais, c'est interdit"], a: 1, explain: "L'injection de traceur se fait une seule fois par circuit ; une étiquette doit être apposée après la première injection." },
    { q: "Sous quel format la station de maintenance automobile imprime-t-elle la fiche d'intervention ?", options: ["Format A4 classique", "Format ticket", "Elle ne l'imprime pas, il faut la rédiger manuellement", "Format CERFA papier uniquement"], a: 1, explain: "La station de maintenance automobile imprime elle-même la fiche d'intervention sous format ticket." },
    { q: "Le test d'étanchéité au détecteur de fuite après une intervention sur climatisation automobile est :", options: ["Facultatif", "Obligatoire", "Requis seulement si une fuite est suspectée", "Remplacé par le traceur uniquement"], a: 1, explain: "Le test d'étanchéité au détecteur de fuite après toute intervention reste obligatoire même en climatisation automobile." },
  ],
},
];

const FLASHCARDS = [
  { front: "0 Kelvin = ?", back: "-273,15 °C (zéro absolu)" },
  { front: "1 bar = combien de Pa ?", back: "100 000 Pa" },
  { front: "1 atmosphère normale = ?", back: "101 325 Pa = 1,013 bar" },
  { front: "GWP de référence : quel fluide et quelle valeur ?", back: "CO2 (R744), GWP = 1" },
  { front: "GWP du R134a", back: "1430" },
  { front: "GWP du R404A", back: "3922" },
  { front: "GWP du R410A", back: "2088" },
  { front: "ODP des fluides HFC", back: "0 (aucun impact sur la couche d'ozone)" },
  { front: "Que détruit le chlore contenu dans les CFC/HCFC ?", back: "L'ozone : 1 molécule de chlore détruit ~100 000 molécules d'ozone" },
  { front: "Composition du R404A", back: "52% R143a + 44% R125 + 4% R134a" },
  { front: "Accords de Montréal — année et sujet", back: "1987 — protection de la couche d'ozone" },
  { front: "Protocole de Kyoto — année et sujet", back: "1997 — réduction des émissions de CO2 (HFC)" },
  { front: "Accords de Kigali — année et sujet", back: "2016 — élimination des HFC" },
  { front: "Classification de sécurité des HFO", back: "A2L : faible toxicité, légèrement inflammables" },
  { front: "GWP des hydrocarbures (HC) type propane", back: "Environ 3" },
  { front: "Température d'ébullition du R134a à pression atmo", back: "-26,4°C" },
  { front: "Température d'ébullition du R404A à pression atmo", back: "-46,5°C" },
  { front: "Enthalpie = ?", back: "Chaleur sensible + chaleur latente" },
  { front: "Chaleur latente : définition", back: "Chaleur qui change l'état d'un corps sans modifier sa température" },
  { front: "Différence zéotrope / azéotrope", back: "Zéotrope (série 400) : glissement de température. Azéotrope (série 500) : pas de glissement" },
  { front: "Formule : tonnes équivalent CO2", back: "t éq. CO2 = GWP × charge (kg) / 1000" },
  { front: "Durée d'archivage des fiches d'intervention", back: "5 ans" },
  { front: "Seuil des installations nécessitant une vignette d'étanchéité", back: "Plus de 5 T éq. CO2 (3,5T PTAC pour l'embarqué)" },
  { front: "CERFA de la fiche de manipulation fluide", back: "CERFA 15497*03" },
  { front: "Délai maximum pour réparer une fuite avant réintroduction de fluide", back: "4 jours" },
  { front: "Rôle du compresseur", back: "Faire circuler le fluide, ne travaille qu'en phase gaz" },
  { front: "Rôle du condenseur", back: "Évacuer la chaleur, transformer le gaz en liquide" },
  { front: "Rôle du détendeur", back: "Faire chuter la pression/température, régler le débit vers l'évaporateur" },
  { front: "Rôle de l'évaporateur", back: "Capter les calories de la cellule, transformer le liquide en gaz" },
  { front: "Plage normale de sous-refroidissement", back: "4°C à 7°C" },
  { front: "Sous-refroidissement < 4°C signifie", back: "Manque de fluide" },
  { front: "Sous-refroidissement > 7°C signifie", back: "Trop de fluide" },
  { front: "Plage normale de surchauffe", back: "5°C à 8°C" },
  { front: "Surchauffe > 8°C signifie", back: "Pas assez de fluide dans l'évaporateur" },
  { front: "Surchauffe < 4°C signifie", back: "Trop de liquide dans l'évaporateur" },
  { front: "3 types de compresseurs courants", back: "Piston, scroll (spirale), vis" },
  { front: "Avantage principal du compresseur hermétique", back: "Étanchéité, compact, vitesse variable" },
  { front: "Où est placée la BRL ?", back: "En sortie de condenseur (liquide HP)" },
  { front: "Où est placée la BAL ?", back: "À l'aspiration du compresseur (gaz BP)" },
  { front: "Fonction du déshydrateur", back: "Retenir les impuretés, absorber l'humidité résiduelle" },
  { front: "Pression de coupure typique d'un pressostat BP", back: "0,2 bar" },
  { front: "Contact d'un pressostat HP de sécurité", back: "NC (normalement fermé)" },
  { front: "Calcul de la pression de coupure HP", back: "T° extérieure max + 15°C + 5°C de sécurité" },
  { front: "Rôle du régulateur KVP", back: "Maintenir une pression minimale dans l'évaporateur" },
  { front: "Rôle du régulateur KVL (CPR)", back: "Limiter la pression d'aspiration au démarrage du compresseur" },
  { front: "Couleur de bague d'une vanne électromagnétique NO", back: "Rouge" },
  { front: "Type de détendeur thermostatique utilisé pour évaporateurs à forte perte de charge", back: "Égalisation externe" },
  { front: "Température d'évaporation par rapport à la cellule", back: "T° cellule - 10°C" },
  { front: "Température de condensation par rapport à l'ambiante", back: "T° ambiante + 15°C" },
  { front: "Pourquoi l'huile POE est-elle délicate à manipuler ?", back: "Elle est très hygroscopique (absorbe l'eau)" },
  { front: "Précision requise pour une balance électronique", back: "5%" },
  { front: "Seuil de détection minimal d'un détecteur de fuite", back: "5 g/an" },
  { front: "Précision requise pour un thermomètre", back: "1°C" },
  { front: "Plage de graduation d'un vacuomètre", back: "0 à 1000 mmBar" },
  { front: "Seul détecteur de fuite réglementaire pour les contrôles annuels", back: "Le détecteur électronique" },
  { front: "Couleur du flexible BP / HP", back: "BP = bleu, HP = rouge" },
  { front: "Pression de la station de récupération à laquelle elle s'arrête généralement", back: "-0,7 bar" },
  { front: "Type d'azote à utiliser obligatoirement", back: "Azote U (asséchée), avec manodétendeur" },
  { front: "Formule de l'essai de tenue à la pression", back: "1,43 × PS (pression maximale admissible)" },
  { front: "Pression de réglage chalumeau : Oxygène / Acétylène", back: "Oxygène 1,5 bar / Acétylène 0,5 bar" },
  { front: "Pression d'épreuve HP typique (35°C ext, R134a)", back: "14 bars (55°C)" },
  { front: "Pression d'épreuve BP retenue", back: "10 bars" },
  { front: "En clim auto, le détendeur est souvent...", back: "Un orifice calibré (étrangleur)" },
  { front: "Contrôle d'étanchéité annuel obligatoire en clim auto ?", back: "Non, non requis par la réglementation" },
  { front: "Condition pour utiliser le traceur à 50% de charge en clim auto", back: "Charge initiale ≤ 2 kg" },
];
