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

const viewModes = {
    week: "Week",
    month: "Month",
    year: "Year"
}
let currentViewMode = viewModes.month;

function init() {
    const current = document.querySelector("#header_viewControl_current");
    switch(currentViewMode) {
        case "Week":
            console.log("View Mode: WEEK");
            break;
        case "Month":
            console.log("View Mode: MONTH");
            const monthDisplay = document.querySelector("#header_viewControl_current");
            monthDisplay.textContent = currentMonth;
            break;
        case "Year":
            console.log("View Mode: YEAR");
            break;
    }
}

init();
