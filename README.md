# Browser_Technologies_Mike

# Verslag Gesprekken

<details>
<summary><strong>8 februari 2025 - Browser Tech</strong></summary>

### Gesprek: Browser Tech

#### Voortgang

- Inputvelden geanalyseerd en op detailniveau bekeken.
- Onderzoek naar regular expressions (mogelijk via RegExr tool) voor pattern-gebaseerde invoer.
- Breder perspectief bekijken:
  - Anchors naar andere vragen of nieuwe vragen toevoegen indien nodig.
  - Vragen verbergen of invalideren afhankelijk van andere invoer.
  - Inputwaarde doorgeven aan andere vragen indien hetzelfde antwoord vereist is (bijv. "Vul ook in bij vraag 5k").

</details>

<details>
<summary><strong>5 Mar - Browser Tech</strong></summary>

#### Voortgang

- Dropdown met een overige toggle gemaakt. Uiteindelijk besloten hem beter niet te gebruiken voor snellere UX.

</details>

<details>
<summary><strong>6 Mar - Browser Tech</strong></summary>

### Gesprek: Browser Tech

#### Voortgang

- radio buttons gestyled met before en focus. Normale appearance uitgezet.
- IBAN Pattern checker toegevoegd voor nederlandse IBAN met 14 karakters.
- Datum maker gemaakt die je max waardes heeft.
- hideable overig gemaakt maar werkt niet zo goed als ik wil dus het veld maar standaard laten staan.
- EIND vd dag: ook nog een foldable vraag gemaakt. Als je op ja klikt komt er nog een extra vraag tevoorschijn

![Dinsdag 6 Mar](./images/voortgang_6mar.png)

</details>

<details>
<summary><strong>7 Mar - Browser Tech</strong></summary>

### Gesprek: Browser Tech

#### Voortgang

optioneel toevoegen ipv \* required.
input datalist options interactieve select voor talen bijv. lange lijsten
vormgeving tussendoor om tijd te besparen aan het eind
ol li counter

small> voor kleine extra toevoeging/tekst bij een label.

aan en uit state in radio button vorm > kan een checkbox worden, vraag stellen zodat het een vink wordt als getrouwd is, anders kippen. bijv.

updateBSN()

- var element
- var 2e element - .value attribute runnen als eerst element wordt ingevuld zodat de waarde wordt overgenomen

vragen links uitlijnen en rechts evt vervolgvraag.

min 280 responsive px’s, hoeft niet perfect maar moet wel werken.

</details>

<summary><strong>13 Mar - Browser Tech</strong></summary>

### Hiden & togglen van vragen

#### Uitwerking

Ik wilde de toegankelijkheid voor iedereen goed hebben op deze vraag.

De logica werkt als volgt.

Ik laadt alle vragen in.
Op moment dat de javascript werkt/geladen is gaat hij de vragen hiden.
Zodat ze op een later moment als de juiste condities gelden de vragen tevoorschijn komen.

![Donderdag 13 Mar - resultaat functie](./images/hiden.png)
![Donderdag 13 Mar - javascript functie](./images/js_hiden.png)
![Donderdag 13 Mar - css functie](./images/css_hiden.png)

Ik heb de 3 meest voorkomende opties weergegeven. Het is een prototype dus het gaat om het principe van de 'meest gekozen' optie. Ik heb geen data die zegt dat ze dat daadwerkelijk zijn. Maar het is prettig om te hebben bij de grote lijst aan opties van relatie-keuzes. Met optgroup kun je ze dus uniek maken / categoriseren.

![Donderdag 13 Mar - option_optgroup](./images/option_optgroup.png)
![Donderdag 13 Mar - dropdown foto](./images/dropdown.JPG)


<summary><strong>week tot 20 Mar - Browser Tech</strong></summary>


  ![20 maart - styling op containers van vragen](./images/validatie_3_dates.png)
  Deze 3 dates hadden een selecter van 3 :has-es en de laaste zou een ::after krijgen om de gebruiker te laten weten dat de 3 inputs user-valid zijn. echter ging ik ze wat stylen om goed op desktop te laten zien en mobiel, maar daarvoor moest ik divs gebruiken. daardoor ging de validatie code stuk.
  ![20 maart - fix](./images/validatie.3.png)
  als oplossing moest ik de selector wat aanpassen en de div styling aanpassen. ik dat als volgt gedaan: 

  ![20 maart - fix](./images/validatie.1.png)
  bovenaan de grid die ik heb gerealiseerd om dit te krijgen:

  ![20 maart - fix](./images/validatie.2.png)

  maar nogsteeds werkte allen mijn enkele validation vinkjes.
  nu de section validator fixen:

  ![20 maart - fix](./images/fix_validation.png)
  na een half uur puzzelen ben ik er met deze selector goed vanaf gekomen.

  ![20 maart - fix](./images/validation_result_d.png)
  ![20 maart - fix](./images/validation_result_m.png)
  met een nice messsage krijgt de gebruiker nu meer duidelijke validatie en weten ze het goed hebben ingevuld, ik vind dat dit nodig is omdat je handmatig een datum in typt en niet een datum picker gebruikt, dmv de min en max + validatie weetje dat het een valide datum is.



  ![20 maart - fix](./images/message_error.png)
  Error messages toegevoegd bij user:invalid. Wel zo prettig dat de gebruiker feedback krijgt als er iets niet goed is. Een gewoon kruis is zo agressief, nu duidelijk in welk format het moet en wat er aangepast moet worden.


### BEREKENING samensetlling erfenis - sectie
 ![20 maart - fix](./images/overheid_theorie.png)
 ![20 maart - fix](./images/theorie_formule_achter_berekening.png)
 dit is de genoteerde formule achter het formulier van de overheid om het overzicht te bewaren.

 ![20 maart - fix](./images/js_code_consts.png)
 om de code zo overzichtelijk te houden, duidelijke benamingen en comments.


  ![20 maart - fix](./images/js_code_hiden.png)
  zorgen dat de code worden getoond. standaard op hidden zodat als de JS het niet doet er niets zichtbaar berekend gaat worden. progressive enhancement

  ![20 maart - fix](./images/secties_berekeningen.png)
  hier per sectie de berekening volgens formulie per sectie uitvoeren en opslaan.
  deze worden dan gegbruikt in de formule van de subtotaalberekening

  ![20 maart - fix](./images/js_subtotaal.png)
  hier wordt een subtotaal berekend door alle sectie waardes te pakken en uit te rekenen
  door return pakken we de numerieke waarden en kunnen we deze gebruiken in de laatste fase 

  ![20 maart - fix](./images/js_per_persoon.png)
  berekening toaal per persoon en alleen delen door aantal ingevuld in value als hij hoger is dan 1 anders pakken de default value

  ![20 maart - fix](./images/js_totaal.png)
  totaal slotberekening en afronden op 2 decimalen met tofixed2.
  en onderaan de fucntie om de gehele formule uit te voeren telkens als er een aanpassing aan een inputfield.value wordt gedaan.
  
  ![20 maart - fix](./images/styling_vragen.png)
  de berekening sectie is nog niet gestyled, wel goed werkend qua technische formule en input waardes

  ![20 maart - fix](./images/berekening.png)


 
















### Notes jeremy keith gesprek

#### Notes

notes

outline ipv border
outline offset

accent-color

:root{
accent-color for radio checkbox etc

}

least amount of work for most amount of effect

check for type  
value maakt niet
checked value attribute

https://webkit.org/blog/14933/bringing-back-horizontal-rules-in-select-elements/#:~:text=Using%20in%20%3Cselect,authors%20can%20use%20lines%20too.

obtgroup for label

dividing line with HR>

</details>
