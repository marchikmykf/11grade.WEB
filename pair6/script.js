// function name(argument){
//     code
// }

// function showMessage() {
//     alert("Hello World!");
// }
//
// showMessage();
// showMessage();
//
// function showIngo(){
//     console.log("Ingo!");
// }
//
// showIngo();
//
// function showProducts(name, price, count){
//     console.log("Mariia give", name)
//     console.log(price, "uah za one")
//     console.log("At all", price*count)
// }
// showProducts("poroch", 200, 5)
// function calculateTotal(price, count) {
//     return price * count;
// }
//
// let total = calculateTotal(800, 3);
// console.log(total);
//


// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     } else {
//         return 0;
//     }
// }
//
// let discount1 = discount(1000);
// let discount2 = discount(6000);
// console.log(discount1);
// console.log(discount2);

//
// function getProductTotal(price, count){
//     return price * count;
// }
//
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 15
//     }
//     else if (total >= 5000) {
//         return 10;
//     }
//     else if (total >= 2000) {
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total *percent / 100;
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("Enter product name");
// let productPrice = prompt("Enter product price");
// let productCount = prompt("Enter product count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productPrice} грн.`);
// console.log(`Кількість ${productCount} шт.`);
// console.log(`Сума ${productTotal} грн.`);
// console.log(`Знижка ${productDiscountPercent} %`);
// console.log(`Сума знижки ${productDiscountValue} грн`);
// console.log(productFinalPrice);


//--------------------------
function calculateTickets(price, count){
    return price * count;
}

function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15;
    }
    else if (total >= 1000) {
        return 10;
    }
    else if (total >= 500) {
        return 5;
    }
    else{
        return 0;
    }
}

function calculateTicketDiscount(total, percent){
    return total * percent / 100;
}

function calculateTicketFinalPrice(total, discount){
    return total - discount;
}

let ticketPrice = prompt("Enter price");
let ticketCount = prompt("Enter count");

let total = calculateTickets(ticketPrice, ticketCount);
let discountPercent = getTicketDiscount(total);
let discountValue = calculateTicketDiscount(total, discountPercent);
let finalPrice = calculateTicketFinalPrice(total, discountValue);

console.log(`Ціна: ${ticketPrice} грн`);
console.log(`Кількість: ${ticketCount} шт`);
console.log(`Сума: ${total} грн`);
console.log(`Знижка: ${discountPercent} %`);
console.log(`Сума знижки: ${discountValue} грн`);
console.log(`Сума оплати: ${finalPrice} грн`);
