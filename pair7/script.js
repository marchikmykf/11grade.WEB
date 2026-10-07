// let prices = [120, 23, 45] //масив
// console.log(prices[1])
//
// prices[1]= 65
//
// console.log(prices.length)
//
// for(let i= 0; i < prices.length; i++){
//     console.log(prices[i]);
// }
//
// let sum = 0
// for(let i= 0; i < prices.length; i++){
//     sum += prices[i]
// }
// console.log(sum)
//
// function getTotalPrices(prices) {
//     let sum = 0
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i]
//     }
//     return sum
// }
// let prices = [120, 23, 45, 60, 55]
// // let result = getTotalPrices(prices)
// // console.log(result)
//
//
// let sum = 0;
// function final(price) {
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > 50) {
//             console.log(prices[i])
//             sum += prices[i];
//         }
//     }
// }
// let result = final(prices);
function startRAR() {
    let n1 = +prompt("Enter a number");
    return n1
}
let n = startRAR()
function nextRAR() {
    let num = []
    for (let i = 0; i<n; i++){
        let current = +prompt("Enter a number");
        if (current % 2 === 0){
            num[num.length] = current;
        }
    }
    console.log(num)
}
nextRAR()