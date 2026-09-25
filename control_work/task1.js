let age = +prompt("What is your age?");

let day = +prompt("What is the day?");
if (day !== 1 && day !==2){
    console.log("Помилка: неправильний тип дня");
}

base_cost =0;
switch (day) {
    case 1:
        base_cost = 200;
        break;
    case 2:
        base_cost = 250;
}
cost=0
if (age>0 && age <=7){
    cost = 0
}
else if (age>=8 && age <=17){
    cost = base_cost*0.5;
}
else if (age>=18 && age <=59){
    cost = base_cost;
}
else if (age>=60 && age <=100){
    cost = base_cost*0.6;
}
else{
    console.log("incorrect age")
}

console.log("Age: " + age);
console.log("Day: " + day);
console.log("result: " + cost + " uah");