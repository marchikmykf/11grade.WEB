let event = +prompt("enter type of event");
while (event !== 1 && event !== 2 && event !== 3) {
    event = +prompt("What is your event?");
}
let cinema = 150, theater = 220, concert = 350;
let cost_no_d = 0
switch (event) {
    case 1:
        cost_no_d = cinema;
        break;
    case 2:
        cost_no_d = theater;
        break;
    case 3:
        cost_no_d = concert;
        break;
}



let day = +prompt("What is the day?");
while (day !== 1 && day !== 2) {
    day = +prompt("What is the day?");
}
let day_add_price = 0;
switch (day) {
    case 1:
        day_add_price = 1;
        break;
    case 2:
        day_add_price = 1.15;
        break;
}


let num_ticket = +prompt("How many tickets?");
while (Number.isNaN(num_ticket) || num_ticket<1 || num_ticket > 6) {
    num_ticket = +prompt("How many tickets?");
}

let free = 0, amount = 0, with_discount = 0, whole_price = 0, sum = 0;
for (let i = 0; i < num_ticket; i++) {
    let age = +prompt("What is the age?");

    // Повторне введення некоректного віку
    while (Number.isNaN(age) || !Number.isInteger(age) || age < -1) {
        age = +prompt("What is REAL age?");
    }

    if (age === -1) {
        break;
    }

    amount++;

    let cost;

    if (age >= 0 && age <= 5) {
        free++;
    } else if (age >= 6 && age <= 12) {
        cost = cost_no_d * day_add_price * 0.5;
        with_discount++;
        sum += cost;
    } else if (age >= 13 && age <= 17) {
        cost = cost_no_d * day_add_price * 0.8;
        with_discount++;
        sum += cost;
    } else if (age >= 18 && age <= 25) {
        let student = prompt("Do you have student ticket?");

        while (student !== "yes" && student !== "no") {
            student = prompt("Do you have student ticket?");
        }

        switch (student) {
            case "no":
                cost = cost_no_d * day_add_price;
                whole_price++;
                sum += cost;
                break;

            case "yes":
                cost = cost_no_d * day_add_price * 0.9;
                with_discount++;
                sum += cost;
                break;
        }
    } else if (age >= 26 && age <= 59) {
        cost = cost_no_d * day_add_price;
        sum += cost;
        whole_price++;
    } else if (age >= 60) {
        cost = cost_no_d * day_add_price * 0.75;
        with_discount++;
        sum += cost;
    }
}
if (sum > 1000){
    sum = sum*0.95;
}
console.log(`Кількість оброблених квитків: ${amount}`);
console.log(`Кількість безкоштовних квитків: ${free}`);
console.log(`Кількість квитків зі знижкою:  ${with_discount}`);
console.log(`Кількість квитків за повною ціною: ${whole_price}`);
console.log(`Загальна сума: ${sum}`);


