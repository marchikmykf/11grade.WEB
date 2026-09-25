let correct_pin = 2026;
let i = 0
while (i <= 3){
    i++
    let pin = +prompt("pass?");
    if (pin === correct_pin){
        console.log("Доступ дозволено");
        break;
    }
    else if (pin !== correct_pin && i < 2){
        console.log(`Залишилось ${3-i} спроби`)
    }
    else if (pin !== correct_pin && i === 2) {
        console.log("Доступ заблоковано");
        break;
    }
}