  //Declaring variables
let totalStrips = 0;
let totalSets = 0;
let extraStrips = 0;
let stripsPerStore = 0;

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
    
    //Run functions
    await addStrips();
    await calcSets();
    await calcRemainder();
    output(`Total Strips: ${totalStrips} \nTotal Sets: ${totalSets} \nExtra Strips: ${extraStrips}`);

    //Ask to run again
    askAgain = await input("Would you like to count more?(Y/N) ");
    askAgain = askAgain.toLowerCase();
} while (askAgain.includes("y"));
}