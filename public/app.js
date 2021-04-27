// 35 is the maximum amount of grid items that fit on one screen
const maxGridItems = 35;
const dayGrid = document.querySelector("#monthView_dayGrid");
const currentDate = new Date();
const daysInCurrentMonth = getDaysInMonth(
    currentDate.getMonth() + 1,
    currentDate.getFullYear());
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Take a date as an argument, and return which weekday is the first day of that
// month
function getFirstWeekDayInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayDate = new Date(year, month, 1);
    const firstDayDateSlice = firstDayDate
        .toString()
        .split(" ")[0];
    // TODO: Maybe there's a better way to do this, but it works for now, and I
    // can't be bothered with the Date object's arcane nonsense API anymore
    switch (firstDayDateSlice) {
        case "Mon":
            return {weekday: "Monday", index: 0};
        case "Tue":
            return {weekday: "Tuesday", index: 1};
        case "Wed":
            return {weekday: "Wednesday", index: 2};
        case "Thu":
            return {weekday: "Thursday", index: 3};
        case "Fri":
            return {weekday: "Friday", index: 4};
        case "Sat":
            return {weekday: "Saturday", index: 5};
        case "Sun":
            return {weekday: "Sunday", index: 6};
        default:
            return {weekDay: "UNDEFINED", index: 0};
    }
}

function createDayDiv(type) {
    const newDiv = document.createElement("div");
    newDiv.className= "monthView_day";
    newDiv.classList.add(type);
    return newDiv;
}

// Takes a date as an argument, and creates a calendar grid of that date's
// corresponding month
// TODO: Make this more reusable by taking any date as an argument
function createCalendarGrid() {
    const firstDayOfMonth = getFirstWeekDayInMonth(currentDate);

    // Add the previous days up to the first weekday of the date
    for(let i = 0; i < firstDayOfMonth.index; i++) {
        dayGrid.appendChild(createDayDiv("previous"));
    }     

    // Add all the days of the current month
    for(let i = 0; i < daysInCurrentMonth; i++) {
        dayGrid.appendChild(createDayDiv("current"));
    }

    // Fill up the rest of the grid with next month's days
    const daysRemaining = maxGridItems - dayGrid.children.length;
    for(let i = 0; i < daysRemaining; i++) {
        dayGrid.appendChild(createDayDiv("next"));
    }

    // Lastly, add the "today" class to the current day
    dayGrid.children[currentDate.getDate() + firstDayOfMonth.index - 1].classList.add("today");
}

function init() {
    console.log("Loading Month View");
    createCalendarGrid();
    dayGrid.addEventListener("click", (e) => {
        switch (e.target.classList[1]) {
            case "previous":
                // TODO: Go back one month
                break;
            case "next":
                // TODO: Go forward one month
                break;
            case "current":
                // TODO: Show daily agenda
            default:
                break;
        }
    });
}
init();
