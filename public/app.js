function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function createDayDiv(date) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("monthView_day");
    
    const label = document.createElement("p");
    label.textContent = date;
    dayDiv.appendChild(label);

    return dayDiv;
}

function populateMonthView() {
    const grid = document.querySelector("#monthView_dayGrid");
    const dayCount = daysInMonth(4, 2021);
    for(i = 0; i < dayCount; i++) {
        grid.appendChild(createDayDiv(i+1));
    }
}

function init() {
    console.log("Loading Month View");
    populateMonthView();
}

init();
