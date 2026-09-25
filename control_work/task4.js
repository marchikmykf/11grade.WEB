
let processedCars = 0, elect = 0, sum = 0, max = 0;

for (let i = 1; i <= 7; ++i) {
    let hours = +prompt(` How many hours`);

    if (hours === 0) {
        break;
    }
    else if (hours > 12 || hours < 0) {
        continue;
    }

    let type = +prompt("What is the type ");
    let type_cost = 0;

    if (type === 1) {
        type_cost = 40;
    } else if (type === 2) {
        type_cost = 30;
        elect = elect + 1;
    } else {
        console.log("Помилка: неправильний тип автоу");
        continue;
    }

    let currentCarCost = hours * type_cost;

    if (hours > 5) {
        currentCarCost = currentCarCost * 0.8;
    }

    sum = sum + currentCarCost;
    processedCars = processedCars + 1;

    if (currentCarCost > max) {
        max = currentCarCost;
    }
}

console.log(processedCars);
console.log(elect);
console.log(sum);
console.log(max);
