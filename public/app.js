function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function createDayDivs() {
    const grid = document.querySelector("#monthView_dayGrid");
    const dayCount = daysInMonth(4, 2021);
    for(i = 0; i < dayCount; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("monthView_day");
        
        const label = document.createElement("p");
        label.textContent = i + 1;
        newDiv.appendChild(label);
        grid.appendChild(newDiv);

    }
}

function init() {
    console.log("Eat beans");
    createDayDivs();
}

init();
