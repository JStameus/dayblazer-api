import CalendarModel from "../models/calendar.js";

function getCalendarInfo() {
    const calendarInfo = CalendarModel.getCalendarInfo();
    return calendarInfo;
}

export default {getCalendarInfo};
