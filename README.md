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
