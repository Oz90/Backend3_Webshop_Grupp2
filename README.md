# Backend3_Webshop_Grupp2
## Nackademin Backend 3 - Fullstack School Project

## Group Members
<h3 align="center">
  <a href="https://github.com/Flibben">Albin</a>
  •
  <a href="https://github.com/d-c-k">Daniel</a>
  •
  <a href="https://github.com/ErikaAhlstrom">Erika</a>
  •
  <a href="https://github.com/RickardssonJ">Jimmy</a>
  •
  <a href="https://github.com/Mathilde-akerlind">Mathilde</a>
  •
  <a href="https://github.com/Semthan">Sarmad</a>
  •
  <a href="https://github.com/Oz90">Özgür</a>
  </h3>

## Trello
[Trello for our project][trello ref]

[trello ref]: https://trello.com/b/RiE1kXST/backend-3-webshop-grupp-2

## Specification of Requirements (Swedish)
<table><tr><td>
  
### Översikt
Detta projekt syftar till att bygga en webshop för e-handel. Applikationen ska låta användare
lista produkter enligt kategorier, söka efter produkter, lägga till produkter i en varukorg, och
slutligen slutföra köpet (själva betalningen ska inte ingå).
  
### Grundläggande krav (Godkänt)
Besökare ska kunna skapa konto och logga in, och en varukorg ska sparas automatiskt så
att användaren kan återkomma vid ett senare tillfälle för att slutföra köpet. Slutförda köp
(kvitto) ska lagras och kunna listas för en inloggad användare.
Produkterna i applikationen ska innehålla 1-3 bilder, en titel, en längre beskrivning, kategori,
vikt, pris, och tillverkare. Vid listning av flera produkter så ska första bilden, titeln, och pris
visas för varje produkt. När en enskild produkt visas så skall alla detaljer presenteras.
Bilderna ska visas som s.k. thumbnails med den valda bilden i full storlek.
  
En användare ska kunna skapa ett konto och lägga till följande information om sig själva:
- Fullständigt namn
- Epost
- Telefonnummer
- Leveransadress
  
En inloggad användare ska kunna redigera ovanstående detaljer samt se alla sina tidigare
slutförda ordrar.
  
En oinloggad besökare ska kunna söka och lista produkter. Övrig funktionalitet ska kräva att
användare skapar konto och loggar in.
  
När en inloggad användare har registrerat en beställning så skall den sparas i systemet med
följande information:
- Referens till beställda produkter och deras antal
- Fraktkostnad
- Total kostnad
- Leveransadress vid beställning
- Status på beställning (t.ex. “registrerad”, “behandlas”, “under leverans”, “levererad”)

### Utökade krav (Väl Godkänt)
För Väl Godkänt så skall alla ovanstående krav vara uppfyllda. Utöver det så skall en
administrativ funktion byggas för applikationen. Registrerade användare kan ha olika roller,
och de som har en admin-roll kan därmed komma åt admin-funktionen i applikationen.
Admin-funktionen skall kunna lista alla registrerade beställningar från alla användare,
uppdatera status på en order, samt kunna lägga till och redigera befintliga produkter
(inklusive uppladdning av bilder) i systemet.
  
### Tekniska krav
Detta projekt ska byggas som en fullstack lösning med följande tekniker:
- MongoDB
- ExpressJS
- ReactJS
Backend skall implementeras som ett fristående API (REST API med JSON) utan något
visuellt gränssnitt. Frontend ska vara en Single-Page-Application byggd i React.
  
### Redovisning
Projektet ska redovisas löpande i form av skriftlig standup från projektdeltagarna (Se
föreläsningen med Torbjörn om Agil projektform). Det slutgiltiga projektet ska redovisas som
ett fullstack projekt på GitHub. Datum för sista redovisningsdag presenteras på
studentportalen.</td></tr></table>

## Tech Stack
- [MongoDB][mongodb ref]
- [ExpressJS][express ref]
- [ReactJS][react ref]
- [NodeJS][node ref]
- [Tutorial: How to set up a MERN project][tutorial ref]

[mongodb ref]: https://docs.mongodb.com/
[express ref]: https://expressjs.com/en/starter/installing.html
[react ref]: https://reactjs.org/docs/getting-started.html
[node ref]: https://nodejs.org/en/
[tutorial ref]: https://www.mongodb.com/languages/mern-stack-tutorial
