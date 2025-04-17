//Declaring variables
let totalStrips = 0;
let totalSets = 0;
let extraStrips = 0;
let stripsPerStore = 0;
let askAgain = "";
let menuSelect = "";

//Date of last count/update
const lastUpdate = "April 11, 2025"

//Define dictionary -- for keeping total amounts
const allBrands = {
    "CELEB Luxury": 125,
    "CHI Ionic": 0,
    "DANGER JONES Semi's": 0,
    "DANGER JONES Toners": 0,
    "JOICO Vero K-PAK": 0,
    "JOICO Vero K-PAK Age Defy": 0,
    "JOICO Lumishine": 0,
    "JOICO Lumishine Youthlock": 0,
    "JOICO Lumishine DD": 0,
    "JOICO Lumishine Liquid": 0,
    "JOICO Lumi 10": 0,
    "JOICO Color Intensity": 124,
    "KENRA Permanent": 0,
    "KENRA Monochrome": 0,
    "KENRA Demi": 0,
    "KENRA Express": 0,
    "KEUNE Tinta": 0,
    "KEUNE Semi": 0,
    "LANZA Healing Color": 0,
    "MOROCCANOIL Color Rhapsody": 0,
    "MOROCCANOIL Color Calypso": 80,
    "MOROCCANOIL Highlift & Color Infusion": 0,
    "MOROCCANOIL Ultimates": 0,
    "MOROCCANOIL Color Rhapsody 10 Minute": 125,
    "NOOK The Origin Color": 0,
    "OLIGO Calura Permanent": 194,
    "OLIGO Calura Ten": 52,
    "OLIGO Calura Gloss": 96,
    "PRAVANA ChromaSilk Permanent": 0,
    "PRAVANA ChromaSilk Express Tones": 0,
    "PRAVANA ChromaSilk Vivids": 0,
    "PRAVANA ChromaSilk Hydragloss": 0,
    "PULPRIOT Semi & Toners": 0,
    "SCHWARZKOPF IGORA Royal": 0,
    "SCHWARZKOPF IGORA Color 10": 0,
    "SCHWARZKOPF IGORA Absolutes": 0,
    "SCHWARZKOPF IGORA Vibrance": 0,
    "SCHWARZKOPF IGORA Highlift": 0,
    "SCHWARZKOPF IGORA Zero AMM": 171,
    "SCHWARZKOPF BLONDME": 0,
    "WELLA Koleston Perfect": 0,
    "WELLA Koleston Xpress": 0,
    "WELLA Color Touch": 0,
    "WELLA Illumina": 0,
    "WELLA Shinefinity": 0,
    "WELLA Blondor": 0
}

//Function -- adding counted strips
async function addStrips() {
    let stripCount = await input("How many strips: ");
    let arrayCount = stripCount.split(',');
    totalStrips = 0;
    for (strips of arrayCount) {
        let num = parseInt(strips.trim());
        if (!isNaN(num)) {
            totalStrips += num;
        }
    }
    return totalStrips;
}

//Function -- calculating total sets
async function calcSets() {
    stripsPerStore = await input("How many strips per store: ");
    stripsPerStore = parseInt(stripsPerStore);
    totalSets = 0;
    totalSets = parseInt(totalStrips / stripsPerStore);
    return totalSets;
}

//Function -- calculating remainder strips
function calcRemainder() {
    extraStrips = 0;
    extraStrips = (totalStrips % stripsPerStore);
    return extraStrips;
}

//Function -- calculating strip total with total sets + extras
async function calcStrips() {

    //Get how many total sets
    let countedSets = await input("How many sets? ");
    let arraySets = countedSets.split(',');
    totalCountedSets = 0;
    for (sets of arraySets) {
        let num2 = parseInt(sets.trim());
        if (!isNaN(num2)) {
            totalCountedSets += num2;
        }
    }

    //Get how many strips per set
    let stripsPerStore2 = await input("How many strips per set? ");
    stripsPerStore2 = parseInt(stripsPerStore2);
    
    //Get total strip number
    let countedExtras = await input("How many extra strips? ");
    countedExtras = parseInt(countedExtras);
    totalCountedStrips = (totalCountedSets * stripsPerStore2) + countedExtras;
    return totalCountedStrips;
}

//Function -- main
async function main() {
    do {
        output("Enter an option: \n1. Display \n2. Count \n3. Recount");
        menuSelect = await input("");
    
        //Switch Statement -- for menu
        switch (menuSelect) {
    
            //Menu -- display
            case "1":
                output(`As of ${lastUpdate}, these are the color strips we have:`)
                for (const [key, value] of Object.entries(allBrands)) {
                    output(`${key}: ${value}`);
                }
                break;
    
            //Menu -- count
            case "2":
                await addStrips();
                await calcSets();
                await calcRemainder();
                output(`Total Strips: ${totalStrips}  --  Total Sets: ${totalSets}  --  Extra Strips: ${extraStrips}`);
                break;

            //Menu -- recount
            case "3":
                await calcStrips();
                output(`Total Strips: ${totalCountedStrips}`);
                break;
    
            //Default -- end session
            default:
                output("Have a great day!");
                break;
    }
    } while (menuSelect.includes("1") || menuSelect.includes("2") || menuSelect.includes("3"));
}