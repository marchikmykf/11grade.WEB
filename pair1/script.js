// alert("Hello"); // повідомлення на початку
// // var - пропускає помилки, let -новіший варіант, не пропускає
// let age = 18;
// const name = "Ivan";
//
// console.log(age);
// console.log(name);
//
// age = 19;

//
// const name = "Ivan";
// let number = 0;
// let isTrue = false;
//
// console.log(typeof name); //перевірити тип данних (виводимо в консоль)

//+ -
// * / %(ділення остачі)
// **

// const name = prompt("What is your name?");
// let num1 = prompt("Type first number");
// let num2 = prompt("Type second number");
// console.log(num1 + num2);//склеяться
// console.log(Number(num1) + Number(num2));
// console.log((num1-0)+ (num2-0));
//
// let num3 = 100;
// console.log(String(num3));

let productName = prompt("Enter your product name");
let productPrice = Number(prompt("Enter your product price"));
let productQuantity = Number(prompt("Enter your product quantity"));
let delivery = Number(prompt("Enter your delivery price"));

let productCost = price * productQuantity + delivery;
console.log('${productCost} грн');


alert("Товар: "+productName + "\nВртість товарів: "+productCost);

let discount = Number(prompt("Enter your discount in %"));
alert("Zi znihkoyu vash tovar koshtue: " + (productPrice*productQuantity*discount/100 + delivery));