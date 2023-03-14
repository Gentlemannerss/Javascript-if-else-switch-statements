// ==========================================
// Opdracht 1: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

const errorCode = 0;

// Je mag ervanuit gaan dat deze variabele altijd een waarde tussen de 0 en de 4 bevat. Deze codes hebben de volgende betekenissen (foutmeldingen):
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"

switch (errorCode) {
    case 0:
        console.log("Geen watertoevoer.");
        break
    case 1:
        console.log("Tempratuur te laag.")
        break
    case 2:
        console.log("Koffiebonen op.")
        break
    case 3:
        console.log("Afvalbak vol.")
        break
    case 4:
        console.log("Geen druk.")
        break
    default:
        /*Continue*/
}

// Verwachtte uitkomsten:
// const errorCode = 0 geeft "Geen watertoevoer" in de terminal
// const errorCode = 4 geeft "Geen druk" in de terminal
// etc.


// ==========================================
// Opdracht 2: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

const monitorColor = "red";

// Deze variabele zal altijd een kleur bevatten. De specifieke kleuren waar een melding bij gemaakt moet worden zijn: "red", "green", "yellow" en "orange".
// Deze codes zijn gelinkt aan de volgende meldingen:
// "green": "Hartslag stabiel"
// "yellow": "Hartslag verhoogd"
// "orange": "Kritieke hartslag, actie vereist!"
// "red": "Kritieke hartslag, actie vereist!"
// Bij alle andere kleuren is de status van de hartslag onbekend.

switch (monitorColor) {
    case "orange":
    case "red":
        console.log("Kritieke hartslag, actie vereist!");
        break;
    case "green":
        console.log("Hartslag stabiel.")
        break
    case "yellow":
        console.log("Hartslag verhoogd.")
        break
    default:
        console.log("Status onbekend.")
}

// Verwachtte uitkomsten:
// const monitorColor = "red" geeft "Kritieke hartslag, actie vereist!" in de terminal
// const monitorColor = "green" geeft "Hartslag stabiel" in de terminal
// etc.

// ==========================================
// [BONUSOPDRACHT] - optioneel: kun je de switch-statement uit opdracht 2 ook opschrijven met een aantal if-statements?
// ==========================================

const monitorColor2 = "blue";

if (monitorColor2 === "green") {
    console.log("Hartslag stabiel");
} else {
    if (monitorColor2 === "yellow") {
        console.log("Hartslag verhoogd.");
    } else {
        if (monitorColor2 === "orange" || monitorColor2 === "red") {
            console.log("Kritieke hartslag, actie vereist!");
        } else {
            console.log("Status onbekend.");
        }
    }
}

const monitorColor3 = "yellow";

if (monitorColor3 === "green") {
    console.log("Hartslag stabiel");
} else if (monitorColor3 === "yellow") {
    console.log("Hartslag verhoogd.");
} else if (monitorColor3 === "orange" || monitorColor3 === "red") {
    console.log("Kritieke hartslag, actie vereist!");
} else {
    console.log("Status onbekend.");
}