// > < >= <= == === !== !=
// let a, b;
// a = 1
// b = "1"
// console.log(a === b);
//
// if (умова) {
//
// }

// let temp = Number(prompt("Enter a temp"));
// let result;
// if (temp < 0) {
//     result = "cold"
// }
// else if (temp >= 25){
//     result = "hot"
// }
// else if (temp > 0 && temp < 24){
//     result = "norm"
// }
//
// alert(result);
// || - or; && - and


//-----------------------------------------------------
//
// let num = Number(prompt("Enter a num"));
// let result;
// if (num % 2 === 0) {
//     result = "parne"
// }
// else if (num % 2 === 1) {
//     result = "ne parne"
// }
// alert(result);

// -----------------------------------------------------

// const login = "admin";
// const password = "12345";
// let guest_l = prompt("Enter your login");
// let guest_p = prompt("Enter your password");
//
// if (guest_l === login && guest_p === password) {
//     alert("Доступ дозволено")
// }
// else {
//     alert("доступ заборонено")
// }

//
// post 100
// courier 200
// pickup free

//
// let deliveryT = prompt("What do you want?");
// let cost;
// switch(deliveryT) {
//     case "post":
//         cost = 100;
//         break;
//     case "courier":
//         cost = 200;
//         break;
//     case "pick up":
//         cost = 0;
//         break;
//     default:
//         cost = "n|a"
//         break;
// }
// alert(cost);
// -----------------------------------------------------
let day = prompt("What is the number of day?");
let result;
switch (day) {
    case "1":
        result = "Monday";
        break;
    case "2":
        result = "Tuesday";
        break;
    case "3":
        result = "Wednesday";
        break;
    case "4":
        result = "Thursday";
        break;
    case "5":
        result = "Friday";
        break;
    case "6":
        result = "Saturday";
        break;
    case "7":
        result = "Sunday";
        break;
    default:
        break;
}
alert(result);
// -----------------------------------------------------