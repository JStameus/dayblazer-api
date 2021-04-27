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
            return {weekday: "Monday", dayIndex: 0};
        case "Tue":
            return {weekday: "Tuesday", dayIndex: 1};
        case "Wed":
            return {weekday: "Wednesday", dayIndex: 2};
        case "Thu":
            return {weekday: "Thursday", dayIndex: 3};
        case "Fri":
            return {weekday: "Friday", dayIndex: 4};
        case "Sat":
            return {weekday: "Saturday", dayIndex: 5};
        case "Sun":
            return {weekday: "Sunday", dayIndex: 6};
        default:
            return {weekDay: "UNDEFINED", dayIndex: 0};
    }

}

function createEmptyDayDivs() {
    // 35 is the max number of grid items that can be displayed on the grid
    for(let i = 0; i < 35; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("monthView_day");

        dayGrid.appendChild(newDiv);
   }
}

function fillCurrentMonthDivs() {
    if (dayGrid.children.length < 1) {
        console.error("ERROR: Cannot fill current month divs: No children of dayGrid found.");
        return false;
    }
    const firstDay = getFirstWeekDayInMonth(currentDate);
    const firstDayDiv = dayGrid.children[firstDay.dayIndex];
    // For debugging only
    firstDayDiv.style.backgroundColor = "red";

    for(let i = firstDay.dayIndex; i < 35; i++) {
        dayGrid.children[i]
    }
}

function fillPreviousMonthDivs() {

}

function fillNextMonthDivs() {

}

function init() {
    console.log("Loading Month View");
    createEmptyDayDivs();
    fillCurrentMonthDivs();
    
}

init();

// --------------------

//const date = new Date();
//
//function renderCalendar() {
//    date.setDate(1);
//
//    const dayGrid = document.querySelector("#monthView_dayGrid");
//
//    const lastDay = new Date(
//        date.getFullYear(),
//        date.getMonth() + 1,
//        0
//    ).getDate();
//    console.log(`Last day of month: ${lastDay}`);
//
//    const prevLastDay = new Date(
//        date.getFullYear(),
//        date.getMonth(),
//        0
//    ).getDate();
//    console.log(`Last day of previous month: ${prevLastDay}`);
//
//    const firstDayIndex = date.getDay();
//
//    const lastDayIndex = new Date(
//        date.getFullYear(),
//        date.getMonth() + 1,
//        0
//    ).getDay();
//
//    const nextDays = 7 - lastDayIndex - 1;
//    console.log(nextDays);
//
//    const months = [
//        "January",
//        "February",
//        "March",
//        "April",
//        "May",
//        "June",
//        "July",
//        "August",
//        "September",
//        "October",
//        "November",
//        "December",
//    ];
//
//    // Set current month name
//    document.querySelector("#currentDate_month").textContent = months[date.getMonth()];
//
//    // Set current day header
//    document.querySelector("#currentDate_full").textContent = new Date().toDateString();
//}
//
//renderCalendar();

// --------------------

// get the current date
// get the amount of days in the current month
// find out which weekday the 1st day is
// go backwards from the first day's weekday and add prevdays
// add the days of the current month
// look at how many days are left to fill the grid, and add them as nextdays

//console.log(currentDate);


//console.log(daysInCurrentMonth);
console.log(getFirstWeekDayInMonth(currentDate));
