import fs from "fs";
import path from "path";

const calendarInfo = JSON.parse(fs.readFileSync(path.resolve("./data/calendar.json")));

function getCalendarInfo() {
    return calendarInfo;
}

function getDays() {
    return calendarInfo.template.days;
}

function getHours() {
    return calendarInfo.template.hours;
}

function getCurrentWeek() {
    return calendarInfo.current.week;
}

function getCurrentMonth() {
    return calendarInfo.current.month;
}

function getCurrentYear() {
    return calendarInfo.current.year;
}

export default {getCalendarInfo};
