SAMUELS WEBSHOP

Öppna index.html. Behåll övriga filer och mappen images tillsammans med HTML-filen.
157 MakerWorld-referensbilder finns lokalt och kan visas utan internet.
För tillförlitlig localStorage rekommenderas samma HTTPS-adress eller localhost. Webbläsare hanterar lagring för direktöppnade lokala filer olika. Kopiering har en manuell reservlösning.

INNEHÅLL
50 hushållsprodukter, 50 barn/fidget och 57 artiklar till julklappsspelet.
Julklappsfilter: upp till 20, 50 och 100 kr, baserat på de nya viktbaserade artikelpriserna, utan elkostnad.
Sex färger: vit, mörkblå, ljusblå, grå, beige och grön.
Färg väljs före tillägg och kan ändras i intresselistan. Samma SKU och färg samlas på en rad. Olika färger får separata rader. Alla färger har samma pris för den valda referensprofilen.
Listan sparas under samuels3d.interest.v2. Den äldre v1-listan raderas inte; gamla exempelprodukter är inte automatiskt översättbara till nya MakerWorld-modeller.
Sökning, Visa fler, totalsumma, antal, borttagning och kopierad förfrågan ingår. Ingen betalning, checkout eller automatisk överföring.

NAMN OCH KOPIERING
Samuels webshop finns som synlig toppruta, sidtitel, Open Graph-titel samt alt/title på produktbilder. Kopiering av markerad sidtext lägger till namnet om det saknas. Beställningsförfrågan börjar också med namnet. Alt/title ensamt kan inte styra alla externa appar eller deras länkförhandsvisningar.

PRODUKTER OCH BILDER
products.js innehåller redigerbar produktdata och priser i öre.
makerworld-kallor.json innehåller modellnamn, skapare, källänk, originalbildens adress och lokal bildfil för varje artikel. Modellernas originalnamn har behållits för tydlig koppling till källan.
Priserna beräknas från MakerWorlds filamentåtgång: 400 kr/kg och 50 % marginal, alltså 0,80 kr per gram i försäljningspris. Priset gäller en hel uppsättning av den namngivna profilen, alla plattor. Elkostnad 20 kr läggs en gång per intresselista. Extra delar, arbete, felutskrifter och frakt ingår inte i kalkylen. Profilvikter är beräknad förbrukning och måste räknas om om storlek, antal delar eller inställningar ändras. H-125, H-148 och J-146 behöver PLA-kontroll eftersom referensprofilen använder PETG helt eller delvis. Produktbilderna är skaparnas referensbilder; valet av färg ändrar inte dessa bilder.
Bild- och försäljningstillstånd för de 157 modellerna har INTE verifierats. Källhänvisning ger inte automatiskt tillstånd. Kontrollera aktuell licens och eventuella separata bildrättigheter med skaparen före offentlig publicering eller försäljning. Vissa modeller kan kräva kommersiell licens. Katalogen är levererad lokalt, inte publicerad.

VILLKOR
Den uttryckliga texten om reklamationsrätt är borttagen på begäran. Fotnoten beskriver privat försäljning, PLA, fungerande artiklar vid överlämning, ingen extra frivillig garanti samt avtal och tillämplig lag. Privat försäljning betyder inte automatiskt att allt ansvar för fel upphör. Källa: https://www.konsumentverket.se/konsumentratt/kopa-av-privatperson/

VIKTUNDERLAG
VIKTER-OCH-PRISER.md är en läsbar tabell med alla 157 profiler, vikter, materialkostnader, försäljningspriser och källänkar. vikt-och-prisunderlag.json innehåller samma information strukturerat.
En uppsättning av varje profil: 25 198 g totalt. Detta är inte vikten av en viss kunds lista; listans totalvikt räknas dynamiskt med antal och färgvarianter.
PRICING överst i app.js styr filamentpris, marginal och el. Produktpriser räknas där om från vikt. För synkroniserade källrapporter bör även underlagsfiler uppdateras om inställningarna ändras.

VALIDERING
13 automatiska tester godkända: 400 kr/kg, riktig 50 % marginal, 157 källprofiler med vikt, kilogramomräkning, tom lista utan el, antal och vikt över färgvarianter, el endast en gång, artikelpris utan el, budgetfilter, kopierad förfrågan, färgsammanslagning, lagring/ogiltiga antal och markering av PETG-referenser.
Webbläsartest: H-101 (545 g) + två B-110 (2 × 4 g) = 553 g, artikelsumma 442,40 kr + elkostnad 20 kr = 462,40 kr. Summorna bevarades efter omladdning. Kopieringsknappen gav lyckad återkoppling och textinnehållet verifierades i logiktest. Markeringen för osäker PLA-vikt kontrollerades.
157 lokala bildfiler har kontrollerats. Layout granskad på dator. Separat fysisk mobiltest, nekad lagring och nekad urklippsåtkomst har inte framtvingats.
