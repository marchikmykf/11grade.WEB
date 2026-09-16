// let num = 1;
// while(num<=5){
//     console.log(num);
//     num += 1
// }
//
// let UserNumber = prompt("Enter your number");
// while (UserNumber < 1 || UserNumber > 10){
//     UserNumber = +prompt("Error.Enter your number");
// }
// console.log(UserNumber);


// isNaN() - not a number

//
// console.log(Number("7"))
// console.log(Number("hello"))
//
//
// let age = +prompt("What is your age?");
// while (Number.isNaN(age) || age <=0 || age >=100){
//     age = +prompt("What is your age?");
// }
// console.log(age);
//
// const correctPin = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
//
// while (attempt < 3 && pin!==correctPin) {
//     pin = +prompt('Enter a valid pin');
//     attempt ++
// }
// if (pin === correctPin) {
//     console.log("Dostup allowed")
// }
// else{
//     console.log("Dostup forbidden")
// }
//
// let attempt= 1, password= 1234;
//
// while (attempt <= 3) {
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword) {
//         console.log("Доступ дозволенно");
//         console.log(attempt);
//         break;
//     }
//     console.log("")
//     attempt++;
// }



// let menuchoice;
// do {
//     menuchoice = +prompt("Choose diu: \n" +
//     "1 - Profil\n," + "2 - settingsi\n" + "0 - Exit\n");
//     if (menuchoice === 1) {
//         alert("open your profile");
//     }
//     else if(menuchoice === 2) {
//         alert("open your settings");
//     }
//     else if (menuchoice === 0) {
//         alert("Do exit");
//     }
//     else {
//         alert("unknown");
//     }
// }
// while (menuchoice === 0);

// _____________________________________________

// let menuchoice;
// do {
//     menuchoice = +prompt("Choose diu: \n" +
//         "1 - Profil\n," + "2 - settings\n" + "3 - News" + "0 - Exit\n");
//     switch (menuchoice) {
//         case 1: alert("open your profile");
//             break;
//         case 2: alert("open your settings");
//             break;
//         case 3: alert("open news");
//             break;
//         case 0: alert("Do exit");
//             break;
//     }
// }
// while (menuchoice === 0);

//
// let count = 0, sum = 0;
// while (count <5){
//     let currenGrade = +prompt(`name grage ${count + 1}`);
//     if (currenGrade < 0 || currenGrade > 12 || Number.isNaN(currenGrade)){
//         alert("si not a grade");
//         continue;
//     }
//     sum += currenGrade;
//     count++;
// }
// console.log(sum/count);

//
// let questionsNumber = 1;
// let score = 1;
// while (questionsNumber <= 5) {
//     let questions ="", answer = "";
//     switch (questionsNumber) {
//         case 1:
//             questions ="How create a zminna";
//             answer ="let";
//             break;
//         case 2:
//             questions = "what an operator strogoyi rivnosti";
//             answer ="===";
//             break;
//         case 3:
//             questions ="how to write and";
//             answer = "&&";
//             break;
//         case 4:
//             questions ="how finish zukl";
//             answer ="break";
//             break;
//         case 5:
//             questions = "how zapisat inkrement?";
//             answer = "++";
//             break;
//     }
//
//     let answers = prompt(`Запитання № ${questionsNumber} із 5\n ${questions}`);
//
//     if (answers === "") {
//         console.log("відповідь не може бути пустою");
//         continue;
//     }
//
//     if (answers === answer) {
//         alert("правильно");
//         score++;
//     } else {
//         alert("не правильно");
//     }
//     questionsNumber++;
// }
// if (score === 5){
//     alert("nice")
// }else if (score >= 3){
//     alert("norm")
// }else {
//     alert("lox")
// }

//_________________________________ТЕРМІНАЛ БЕЗПЕКИ
let age = +prompt("enter your age");
while (Number.isNaN(age) || age <12 || age >90){
    age = +prompt("What is your age?");
}
let correct_pass = 4321
let pass = +prompt('Enter a valid pin');
let attempt = 1;

while (attempt < 3 && pass!==correct_pass) {
    pass = +prompt('Enter a valid pin');
    attempt++;
}
if (pass === correct_pass) {
    console.log("Dostup allowed")
    let menu;
        do {
            menu = +prompt("Choose diu: \n" +
            "1 - Особистий кабінет\n" + "2 - Повідомлення\n" + "3 - Налаштування\n"+ "0 - Вихід\n");
            switch (menu) {
                case 1:
                    alert("open Особистий кабінет");
                    break;
                case 2:
                    alert("open повідомлення");
                    break;
                case 3:
                    alert("open Налаштування");
                    break;
                case 0:
                    alert("Do exit");
                    break;
                default:
                    alert("Такого пункту немає");
                    break;
            }
        }
        while (menu !== 0);
}
else{
    console.log("Dostup forbidden")
}

