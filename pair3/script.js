// let age = prompt("Enter your age");
// let access = confirm("Are you sure?");
//
// if (age>=18 && access === true){
//     alert("Welcome!")
// }else{
//     alert("Access denied");
// }


//рівень доступу
// let role = prompt("What is your role?");
// if (role === "admin" || role === "teacher") {
//     alert("Welcome to the admin!");
// }else{
//     alert("access denied");
// }
//
// let login = confirm("Are you registered?");
// let age = prompt("What is your age number?");
// if (login === true) {
//     if (age >= 18) {
//         alert("Access allowed")
//     }
//     else{
//         alert("Access denied")
//     }
// }
// else{
//     alert("Access denied")
// }

// let age = Number(prompt("Enter your age"));
// if (age < 6){
//     alert("child")
// }else if(age >= 6 && age <= 13){
//     alert("школяр")
// }
// else if (age >=14 && age <= 18){
//     alert("teen")
// }else{
//     alert("adult")
// }

// let age = prompt("Enter your age");
// if (age >=18) {
//     alert("access grated")
// }else if (age <18 && age>=16){
//     let access = confirm("Are you sure?");
//     if (access===true) {
//         alert("access grated")
//     }
// }

let price = prompt("Enter your price");
let name = prompt("What are you buying");
let quantity = prompt("Enter your quantity");
let login = confirm("Are you registered?");
let promo = prompt("Enter your promo number");
const promo2 = "sale";
let vip = confirm("Are you vip?");
if (price*quantity >= 1000 && login === true && (promo === promo2 || vip === true)){
    alert(`Your price with discount is ${price*quantity*0.9} UAH`);
}else{
    alert(price)
}