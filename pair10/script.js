// let book = {//обʼєкти
//     title: "Kobsar",
//     author: "Shevchenko",
//     year: "1840",
//     price: 500,
//     availabilities: true,
// }
// console.log(book.title)
// //console.log(book[0])
// //масив
// let books = [
//     {
//         id:1,
//         title: "Kobsar",
//         author: "Shevchenko",
//         year: "1840",
//         price: 500,
//         availabilities: true,
//     },
//     {
//         id:2,
//         title: "Lisova pisnya",
//         author: "Lesya Ukrainka",
//         year: "1911",
//         price: 450,
//         availabilities: true,
//     },
//     {
//         id:3,
//         title: "Tigrolovu",
//         author: "Ivan Bagryany",
//         year: "1943",
//         price: 550,
//         availabilities: false,
//     },
//     {
//         id:4,
//         title: "Misto",
//         author: "Valerian Pidmogilny",
//         year: "1927",
//         price: 450,
//         availabilities: false,
//     },
// ]
//
// // console.log(books[2])
// // for (let book of books) {
// //     console.log(`[${book.title}]: ${book.author} (${book.year})]`)
// // }
// // books.forEach (function(book) {
// //     console.log(`[${book.title}]: ${book.author} (${book.year})`)
// // })
//
// let availableCount = 0
// let totalPrice = 0
// for (let book of books) {
//     if (book.availabilities === true) {
//         availableCount++;
//         totalPrice+=book.price;
//     }
// }
// console.log(availableCount)
// console.log(totalPrice)
//
// books.push({
//     id: 5,
//     title: "Zachar Berkkut",
//     author: "Ivan Franco",
//     year: "1882",
//     price: 500,
//     availabilities: true,
// })
//
// console.log(books.length)
// let id_books = +prompt("Enter book id")
// let foundBook = null
// for (let book of books) {
//     if (book.id === id_books) {
//         foundBook = book;
//         break;
//     }
// }
// if (foundBook !== null) {
//     let status = "Nema"
//     if (foundBook.availabilities === true){
//         status = "Ye"
//     }
//     alert('[${book.title}]: ${book.author} (${book.year})')
// }else{
//     alert(`knigi takoi nema`)
// }
//----------------practichna-------------------------
let gurtok = [
    {
        id:1,
        name:"plavannya",
        category: "sport",
        price: 100,
        members: 10,
        active: true,
    },
    {
        id:2,
        name:"java",
        category: "IT",
        price: 50,
        members: 25,
        active: true,
    },
    {
        id:3,
        name:"tennis",
        category: "sport",
        price: 250,
        members: 4,
        active: false,
    },
    {
        id:4,
        name:"dance",
        category: "sport",
        price: 150,
        members: 15,
        active: true,
    },
    {
        id:5,
        name:"C++",
        category: "IT",
        price: 200,
        members: 12,
        active: false,
    },
]

let run = true
while (run) {
    let choice = +prompt(
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );

    switch (choice) {
        case 1:
            if (gurtok.length === 0) {
                alert("Nema");
            }
            gurtok.forEach(function(item) {
                alert(`[ID: ${item.id}] ${item.name} (${item.category}) | Ціна: ${item.price} грн | Учасників: ${item.members} | Набір: ${item.active}\n`);
            });
            break;
        case 2:
            let searchId = +prompt("Enter ID");
            let foundGurtok = null;
            for (let gurt of gurtok) {
                if (gurt.id === searchId) {
                    foundGurtok = gurt;
                    break;
                }
            }
            if (foundGurtok!==null) {
                alert(`Гурток: ${foundGurtok.name}\nНапрям: ${foundGurtok.category}\nЦіна: ${foundGurtok.price}\nУчасників: ${foundGurtok.members}\nСтатус: ${foundGurtok.active}`);
            }else{
                alert(`nema`)
            }
            break;
        case 3:
            let memberId = +prompt("Enter ID");
            let foundGurtokForMember = null;
            for (let gurt of gurtok) {
                if (gurt.id === memberId) {
                    foundGurtokForMember = gurt;
                    break;
                }
            }
            if (foundGurtokForMember === null) {
                alert("nema");
            }else if (foundGurtokForMember.active === false) {
                alert("Nabir zakritiy");
            }else{
                let yes = confirm(`Zapysaty uchasnyka do ${foundGurtokForMember.name}?`);
                if (yes === true) {
                    foundGurtokForMember.members++;
                    alert("Uchasnyka zapysano");
                }else{
                    alert("Zapis skasovano");
                }
            }
            break;
        case 4:
            let statusId = +prompt("Enter ID");
            let foundGurtokForStatus = null;
            for (let gurt of gurtok) {
                if (gurt.id === statusId) {
                    foundGurtokForStatus = gurt;
                    break;
                }
            }
            if (foundGurtokForStatus === null) {
                alert("nema");
            }else{
                let yes = confirm(`Zminyty status naboru dlya ${foundGurtokForStatus.name}?`);
                if (yes === true) {
                    if (foundGurtokForStatus.active === true) {
                        foundGurtokForStatus.active = false;
                    }else{
                        foundGurtokForStatus.active = true;
                    }
                    alert(`Noviy status: ${foundGurtokForStatus.active}`);
                }else{
                    alert("Zminu skasovano");
                }
            }
            break;
        case 5:
            let newName = prompt("Enter name");
            let newCategory = prompt("Enter category");
            let newPrice = +prompt("Enter price");
            let newMembers = +prompt("Enter members");

            if (newName === "" || newName === null || newCategory === "" || newCategory === null) {
                alert("Name i category ne mozhut buty porozhnimi");
            }else if (newPrice < 0 || newMembers < 0 || isNaN(newPrice) || isNaN(newMembers)) {
                alert("Price i members ne mozhut buty vidyemnimi i povinni buty chislami");
            }else{
                let newId = 1;
                for (let gurt of gurtok) {
                    if (gurt.id >= newId) {
                        newId = gurt.id + 1;
                    }
                }
                gurtok.push({
                    id: newId,
                    name: newName,
                    category: newCategory,
                    price: newPrice,
                    members: newMembers,
                    active: true,
                });
                alert("Noviy gurtok dodano");
            }
            break;
        case 6:
            if (gurtok.length === 0) {
                alert("Nema");
            }else{
                let activeCount = 0;
                let totalMembers = 0;
                let totalPrice = 0;
                for (let gurt of gurtok) {
                    if (gurt.active === true) {
                        activeCount++;
                    }
                    totalMembers += gurt.members;
                    totalPrice += gurt.price;
                }
                alert(
                    `Vsogo gurtkiv: ${gurtok.length}\n` +
                    `Vidkritih dlya naboru: ${activeCount}\n` +
                    `Vsogo uchasnikiv: ${totalMembers}\n` +
                    `Serednya tsina: ${totalPrice / gurtok.length}`
                );
            }
            break;
        case 0:
            run = false;
            break;
        default:
            alert("Nepravilniy punkt menu");
    }
}