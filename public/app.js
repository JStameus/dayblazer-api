// NOTE: Most of this is for testing purposes. A more dynamic solution will have
// to be implemented when the back-end is up and running.
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let currentMonth = months[3];
let currentWeek = "W 16";

const viewModes = {
    week: "Week",
    month: "Month",
    year: "Year"
}
let currentViewMode = viewModes.week;

function updateWeekView() {
    const currentDisplay = document.querySelector("#header_viewControl_current");
    currentDisplay.textContent = currentWeek;
}

function updateMonthView() {
    const currentDisplay = document.querySelector("#header_viewControl_current");
    currentDisplay.textContent = currentMonth;
}

function updateYearView() {

}

function init() {
    switch(currentViewMode) {
        case "Week":
            console.log("View Mode: WEEK");
            updateWeekView();
            break;
        case "Month":
            console.log("View Mode: MONTH");
            updateMonthView();
            break;
        case "Year":
            console.log("View Mode: YEAR");
            updateYearView();
            break;
    }
}

init();
