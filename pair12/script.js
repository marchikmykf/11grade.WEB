// function isHighScore(score) {
//     return score >= 10
// }
// let scores = [7, 12, 2, 8, 10, 5]
// let HighScore = scores.filter(isHighScore)//відсіює за заданими умовами
// console.log(HighScore)

// let scores = [7, 12, 2, 8, 10, 5]
// let highScore = scores.filter(score => score >= 10)
// console.log(highScore)

//
// let courses = [
//     {id:1, name:'HTML', price: 700, description:'HTML HTML', active: true},
//     {id:2, name:'CSS', price: 300, description:'CSS description', active: true},
//     {id:3, name:'JavaScript', price: 400, description:'JavaScript description', active: false},
//     {id:4, name:'Vue', price: 800, description:'Vue description', active: true},
// ]
// let found = courses.find(course => course.id === 3);
// console.log(found);
// if (found !== undefined) {
//     console.log(found.description);
// }else{
//     console.log("nema cursu");
// }
//
// let activeCourse = courses.filter(course => course.active === true);
// let lowCost = courses.filter(course => course.price <= 400);
// console.log(lowCost);
// console.log(activeCourse);
//
// let titles = courses.map(course => course.title); //утворює новий масив
// let selPrice = courses.map(course => course.price * 0.9);
// console.log('Початкові дані:', courses);
// console.log(titles);
// console.log(selPrice);
//
//
// let search = courses.filter(course => course.title.includes("Script")); //перевіряє на наявність значень
// console.log(search);
//
// function isAvailable(book){
//     return book.available === true;
// }
//
// let books = [
//     {id:1, title: "HTML for pochatkivziv", author: "Olena Klasna", year: 2024, available: true},
//     {id:2, title: "JavaScript for pochatkivziv", author: "Olena Precrasna", year: 2022, available: false},
//     {id:3, title: "CSS for pochatkivziv", author: "Olena Women", year: 2022, available: true},
//     {id:4, title: "HTML+JavaScript+CSS for pochatkivziv", author: "Olena Myjnya", year: 2024, available: false},
// ]
// let userIdBooks = +prompt('Enter user id')
// let searchBookId = books.find((book) => book.id === userIdBooks)
// let availableBooks = books.filter(isAvailable)
// let title = books.map(book => book.title).join(', ');
// let js = books.filter(book => book.title.includes("JavaScript"));
