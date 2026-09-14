// for (let i = 1; i <= 5; i--) {
//    console.log(i)
// }
// //for (задаємо і, доки вона менше 5, і++){}
//
// for (let i = 10; i >= 1; i-=2) {
//     console.log(i)
// }
// let sum = 0;
// for (let i = 0; i<10; i++) {
//     sum += i;
//
// }
// console.log(sum);
//
//
// //-------------------------------
// let sum = 0
// for(let i = 0; i <=50; i+=2) {
//     sum += i;
// }
// console.log(sum);

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         count++;
//     }
// }
// console.log(count);

// for(let i=1; i<=100; i++){
//     if(i>20 && i %4 ===0 && i %6===0){
//         console.log(i);
//         break;
//     }
// }

//
// for (let i = 1; i<=30; i++) {
//     if (i%5===0){
//         continue;
//     }
//     console.log(i);
// }

// let studentCount = +prompt("Enter your student count"); //+ = Number()
// if(studentCount > 0){
//     let sum = 0, highLevel = 0, others = 0;
//     for(let i = 0; i < studentCount; i++){
//         let grade = +prompt("Enter your student grade");
//         if (!(grade >=1 && grade <= 12)){
//             alert("Error");
//             i--;
//             continue;
//         }
//         if (grade >= 7 && grade <= 12){
//             highLevel++;
//         }
//         else{
//             others++;
//         }
//         sum += grade;
//     }
//     console.log(sum)
//     console.log(sum/studentCount);
//     console.log(highLevel, others);
// }


//---------------------------------------------------homework
let participantsCount = +prompt("Enter your student count");
if (participantsCount > 0) {
    let sum = 0, count90_100=0, count60_89=0,
        count0_60=0, maxScore = 0, minScore = 100, first100=0;
    for(let i = 0; i < participantsCount; i++){
        let grade = +prompt("Enter your student grade");
        if (grade <= 100 && grade >=0){
            if (grade >= 90 && grade <=100){
                count90_100+=1;
            }
            else if (grade >= 60 && grade <=89){
                count60_89+=1;
            }
            else if (grade <60 && grade >=0){
                count0_60+=1;
            }

            if (grade > maxScore){
                maxScore = grade;
            }
            if (grade < minScore){
                minScore = grade;
            }
            if (grade === 100 &&  first100=== 0) {
                first100 = i + 1;
            }
            sum += grade
        }
        else{
            alert("Please enter your student grade!(0-100)");
            i--;
        }
    }
    console.log(sum/participantsCount)
    console.log(count90_100)
    console.log(count60_89)
    console.log(count0_60)
    console.log(maxScore)
    console.log(minScore)
    console.log(first100)
}
