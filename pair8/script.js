// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// console.log(names.length);
// names.push("Mariia"); //add at the end
// console.log(names);
// names.pop() //delete last element
// names.unshift("Pavlo") //add at the start of the list
// name.shift() //delete at the start
//
//
// let name2 = names.slice(1, 3) //"Oleksandra", "Olesia"

//
// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// let deleted = name.splice(2, 1) //delete from n position
// console.log(deleted)
//
// names.splice(1,0, "Seva")
// console.log(names)
//
// names.splice(0, 1, "Tetiana")

//trim - delete all пробіли
// function register(name) {
//     if (name.trim() === ""){
//         alert("Please enter your name");
//         return;
//     }
//     let exists = false;
//     for(let i = 0; i < name.length; i++) {
//         if(event[i] === name){
//             exists = true;
//         }
//     }
//     if (exists){
//         alert("Учасник вже зареєстрований" + name);
//         return;
//     }
//     event.push(name)
//     alert(`Зареєстровано учасника: ${name}`);
// }
// function remove(name){
//     let index = -1;
//     for (let i = 0; i < event.length; i++){
//         if (event[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("Такого учасника немає")
//     }
//     else{
//         event.splice(index, 1);
//         alert("deleted")
//     }
// }
// function count(){
//     alert("Всього учасників" + event.length)
// }
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// register("Slavik")
// register("Ann")
// register("    ")
// remove("Slavik")
// count()

let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];

// for(let i = 0; i < event.length; i++) {
//     console.log(event[i]);
// }
// for (let name of names) {
//     console.log(name);
// }
names.forEach(function (name, index){
    console.log(name);
})


