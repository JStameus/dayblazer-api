import Event from "../models/event.js";

function getEventList() {
    const eventList = Event.findAll();
    return eventList;
}

export default {getEventList};
