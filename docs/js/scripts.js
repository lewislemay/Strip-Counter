//Declaring variables
let totalStrips = 0;
let totalSets = 0;
let extraStrips = 0;
let stripsPerStore = 0;
let askAgain = "";
let menuSelect = "";

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

    //Referencing buttons
    const countbtn = document.getElementById('countbtn');
    const recountbtn = document.getElementById('recountbtn');

    //Event listener -- Count button
    countbtn.addEventListener('click', async function() {
        //document.getElementById("output").textContent = ""; //Removes previous output
        await addStrips();
        await calcSets();
        await calcRemainder();
        output(`Total Strips: ${totalStrips}  --  Total Sets: ${totalSets}  --  Extra Strips: ${extraStrips}`);
    });

    //Event listener -- Recount button
    recountbtn.addEventListener('click', async function() {
        //document.getElementById("output").textContent = ""; //Removes previous output
        await calcStrips();
        output(`Total Strips: ${totalCountedStrips}`);
    });
}