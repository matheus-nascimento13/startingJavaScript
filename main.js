const listOfDestinations = new Array(
    `Edinburgh`,
    `New York`,
    `London`,
    `Oslo`,
);

const buyerAge = 20;
const accompanied = false;
const destiny = "Brazil";

const canBuy = buyerAge >= 18 || accompanied == true;
let destinyExist = false;

let counter = 0;

while (counter < 4) {
    if (listOfDestinations[counter] == destiny) {
        console.log("Great! We have tickets to your destiny!");
        console.log("So, let's buy your Tickets!");
        destinyExist = true;
        break;
    }
    counter += 1;
}

if (canBuy == true && destinyExist == true) {
    console.log("Choose the day of the ticket to", destiny);
} else {
    console.log("unfortunately you do not have the attributes to continue your purchase.");
}


