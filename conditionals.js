// ==========================================
// 0. Voorbeeldvraag: declareer een variabele met daarin de vergelijking of 2 gelijk is aan 2.                // geeft true wanneer gelogd
// ==========================================

const equalNumbers = 2 === 2;
console.log('Is 2 gelijk aan 2?', equalNumbers);

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false wanneer gelogd
// ==========================================

const biggerThan = 10 > 20;
console.log("Is 10 bigger than 20?", biggerThan)

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true wanneer gelogd
// ==========================================

const uneven = 10 !== 11;
console.log("Is 10 ongelijk aan 11?", uneven)

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false wanneer gelogd
// ==========================================

const same = "zoet" === "sappig";
console.log("Zijn zoet en sappig hetzelfde?", same)

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!' wanneer gelogd
// ==========================================

let grade = 9;
if (grade >= 8) {
    console.log("Goed gedaan, Cum laude!")
} else {
    console.log("Helaas, volgende keer beter leren.")
}

// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================

const isRaining = false;
const temperature = 23;

if (isRaining === false && temperature >= 21) {
    console.log("Je kunt een korte broek aan!")
} else {
    console.log("Trek een lange broek aan.")
}

if (isRaining === true || temperature <= 12) {
    console.log("Trek een jas aan.")
}