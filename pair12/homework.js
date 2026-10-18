
let courses = [
    {id: 1, title: "Плавання", category: "Спорт", price: 700, duration: 20, rating: 4.6, available: true},
    {id: 2, title: "Танці", category: "Спорт", price: 850, duration: 24, rating: 4.8, available: true},
    {id: 3, title: "Теніс", category: "Спорт", price: 1200, duration: 40, rating: 4.9, available: true},
    {id: 4, title: "Java", category: "Програмування", price: 1500, duration: 45, rating: 4.7, available: false},
    {id: 5, title: "Python", category: "Програмування", price: 950, duration: 30, rating: 4.5, available: true},
    {id: 6, title: "Малювання", category: "Творчість", price: 800, duration: 18, rating: 4.4, available: true},
    {id: 7, title: "Вокал", category: "Творчість", price: 1100, duration: 36, rating: 4.3, available: false},
    {id: 8, title: "Маркетинг", category: "Маркетинг", price: 1300, duration: 32, rating: 4.6, available: true},
]

function findCourseById(id) {
    return courses.find(course => course.id === id);
}


function findCoursesByCategory(category) {
    return courses.filter(course => course.category === category);
}

function findCoursesByPrice(price) {
    return courses.filter(course => course.price <= price);
}

function findCoursesByTitle(title) {
    return courses.filter(course => course.title.includes(title));
}

function getCourseTitles() {
    return courses.map(course => course.title);
}

function getDiscountCourses() {
    return courses.map(course => ({
        title: course.title,
        price: course.price * 0.85,
    }));
}


function sortCoursesByPrice() {
    let sortedCourses = [];
    for (let course of courses) {
        sortedCourses.push(course);
    }
    return sortedCourses.sort((course1, course2) => course1.price - course2.price);
}

function sortCoursesByRating() {
    let sortedCourses = [];
    for (let course of courses) {
        sortedCourses.push(course);
    }
    return sortedCourses.sort((course1, course2) => course2.rating - course1.rating);
}



function sortCoursesByTitle() {
    let sortedCourses = [];
    for (let course of courses) {
        sortedCourses.push(course);
    }
    return sortedCourses.sort((course1, course2) => {
        if (course1.title > course2.title) {
            return 1;
        }else if (course1.title < course2.title) {
            return -1;
        }else{
            return 0;
        }
    });
}



function getAvailableStatistics() {
    let availableCourses = courses.filter(course => course.available === true);
    let totalPrice = 0;

    for (let course of availableCourses) {
        totalPrice += course.price;
    }
    let averagePrice = totalPrice / availableCourses.length;
    return {
        totalPrice: totalPrice,
        averagePrice: averagePrice,
    };
}




let runCourses = true;

do {
    let choice = +prompt(
        "1 - Find course by ID\n" +
        "2 - Find courses by category\n" +
        "3 - Find courses by price\n" +
        "4 - Find courses by title\n" +
        "5 - Show titles\n" +
        "6 - Show sale prices\n" +
        "7 - Sort by price\n" +
        "8 - Sort by rating\n" +
        "9 - Sort by title\n" +
        "10 - Show statistics\n" +
        "0 - Exit"
    );

    switch (choice) {
        case 1:
            let userId = +prompt("Enter course ID");
            let foundCourse = findCourseById(userId);

            if (foundCourse === undefined) {
                alert("Nema cursu");
            }else{
                alert(`${foundCourse.title}\nCategory: ${foundCourse.category}\nPrice: ${foundCourse.price}\nDuration: ${foundCourse.duration}\nRating: ${foundCourse.rating}`);
            }

            break;

        case 2:
            let userCategory = prompt("Enter category");
            let categoryCourses = findCoursesByCategory(userCategory);

            if (categoryCourses.length === 0) {
                alert("Nema cursiv");
            }else{
                alert(categoryCourses.map(course => course.title).join(", "));
            }

            break;

        case 3:
            let userPrice = +prompt("max price");
            let lowCostCourses = findCoursesByPrice(userPrice);

            if (lowCostCourses.length === 0) {
                alert("Nema cursiv");
            }else{
                alert(lowCostCourses.map(course => `${course.title} - ${course.price}`).join("\n"));
            }

            break;

        case 4:
            let searchTitle = prompt("Enter title");
            let searchCourses = findCoursesByTitle(searchTitle);

            if (searchCourses.length === 0) {
                alert("Nema cursiv");
            }else{
                alert(searchCourses.map(course => course.title).join(", "));
            }

            break;

        case 5:
            let titles = getCourseTitles();
            alert(titles.join(", "));
            break;

        case 6:
            let discountCourses = getDiscountCourses();
            alert(discountCourses.map(course => `${course.title} - ${course.price}`).join("\n"));
            break;

        case 7:
            let priceSortedCourses = sortCoursesByPrice();
            alert(priceSortedCourses.map(course => `${course.title} - ${course.price}`).join("\n"));
            break;

        case 8:
            let ratingSortedCourses = sortCoursesByRating();
            alert(ratingSortedCourses.map(course => `${course.title} - ${course.rating}`).join("\n"));
            break;

        case 9:
            let titleSortedCourses = sortCoursesByTitle();
            alert(titleSortedCourses.map(course => course.title).join(", "));
            break;

        case 10:
            let statistics = getAvailableStatistics();
            alert(`Total price: ${statistics.totalPrice}\nAverage price: ${statistics.averagePrice}`);
            break;

        case 0:
            runCourses = false;
            break;

        default:
            alert("Nepravilniy punkt menu");
    }

    if (runCourses === true) {
        let yes = confirm("Back to menu?");

        if (yes === false) {
            runCourses = false;
        }
    }

} while (runCourses);
