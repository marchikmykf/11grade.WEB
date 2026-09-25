let amount = +prompt("How many students?");
let sum = 0, grade7_12=0, max=0, grade1_7=0;
for (let i = 0; i < amount; i++) {
    let grade = +prompt("Grade?");
    if (grade>1 && grade < 7){
        sum+=grade;
        grade1_7+=1;
    }
    else if (grade >= 7 && grade <=12){
        sum+=grade;
        grade7_12 +=1;
    }
    if (grade >= max){
        max = grade;
    }
}
console.log(sum);
console.log(sum/amount);
console.log(grade7_12);
console.log(grade1_7);
console.log(max);