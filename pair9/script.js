//------------------1-----------------
// let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"]
// names.push("Владa")
// names.unshift("Всеволод")
// names.pop()
// names.splice(2, 1, "Єгор")
// for (let i = 1; i <= names.length; i++) {
//     console.log(i + ": " + names[i-1])
// }
// for (let name of names) {
//     console.log(name)
// }
// names.forEach(function (name) {
//     console.log(name + ": " + name.length)
// })

//------------------2-----------------
let price = [120, 250, 180, 300, 150, 400]
let sum = 0
for (let i = 0; i < price.length; i++) {
    sum += price[i]
}
let ticket200 = 0
price.forEach(function (ticket) {
    if (ticket>=200){
        ticket200++
    }
})
console.log(`Suma: ${sum}`)
console.log(`Amount of 200+: ${ticket200}`)
console.log(`Average: ${sum/price.length}`)