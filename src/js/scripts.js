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
    "OLIGO Calura Permanent": 194,
    "OLIGO Calura Gloss": 96,
    "OLIGO Caluraten": 52,
    "IGORA Zero Amm": 171,
    "CELEB": 125,
    "MOROCCANOIL Color Rhapsody 10 Minute": 125,
    "MOROCCANOIL Color Calypso": 80,
    "JOICO Color Intensity": 124
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

//Function -- main
async function main() {
    do {
        output("Enter an option: \n(D)isplay \n(C)ount");
        menuSelect = await input("");
        menuSelect = menuSelect.toLowerCase();
    
        //Switch Statement -- for menu
        switch (menuSelect) {
    
            //Menu -- display
            case "d":
                output(`As of ${lastUpdate}, these are the color strips we have:`)
                for (const [key, value] of Object.entries(allBrands)) {
                    output(`${key}: ${value}`);
                }
                askAgain = await input("Return to menu?(Y/N) ");
                askAgain = askAgain.toLowerCase();
                break;
    
            //Menu -- count
            case "c":
                await addStrips();
                await calcSets();
                await calcRemainder();
                output(`Total Strips: ${totalStrips} \nTotal Sets: ${totalSets} \nExtra Strips: ${extraStrips}`);
                askAgain = await input("Return to menu?(Y/N) ");
                askAgain = askAgain.toLowerCase();
                break;
    
            //Default -- end session
            default:
                output("Have a great day!");
                break;
    }
    } while (menuSelect.includes("d") || menuSelect.includes("c"));
}