function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function createDayDivs() {
    const dayCount = daysInMonth(4, 2021);
    for(i = 0; i < dayCount; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("mainView_day");
    }
}

function init() {
    
}
