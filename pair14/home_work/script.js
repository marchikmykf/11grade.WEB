let acceptBtn = document.querySelector("#acceptBtn");
let status = document.querySelector("#status");
acceptBtn.addEventListener("click", function() {
    status.classList.add("success");
    acceptBtn.textContent="Підтверджено";
})

let welcome = document.querySelector("#welcome");
let studentsName = document.querySelector("#studentsName");


studentsName.addEventListener("input", function() {
    let name = studentsName.value.trim();
    if (name === "") {
        welcome.textContent = "Вітаємо";
    }
    else {
        welcome.textContent = "Вітаємо, " + name;
    }
})

let tema = document.querySelector("#tema");
let container = document.querySelector("#container");
let currentTema = 0;
tema.addEventListener("change", function() {
    if (currentTema) {
        container.classList.remove(currentTema)
    }
    container.classList.add(this.value);
    currentTema = this.value;
})
let detailsBtn = document.querySelector("#detailsBtn");
let details = document.querySelector("#details");
detailsBtn.addEventListener("click", function() {
    details.classList.toggle("hidden");
    if (details.classList.contains("hidden")) {
        detailsBtn.textContent = "Показати опис";
    }
    else {
        detailsBtn.textContent = "Приховати опис";
    }
})


