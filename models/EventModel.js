import fs from "fs";
import path from "path";

class EventData {
    constructor(id, name, description, date, type, difficulty, start, end, finished, locked) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.type = type;
        this.difficulty = difficulty;
        this.start = start;
        this.end = end;
        this.finished = finished; 
        this.locked = locked;
    }
    send() {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            description: this.description,
            date: this.date,
            type: this.type,
            difficulty: this.difficulty,
            startTime: this.start,
            endTime: this.end,
            finished: this.finished,
        });
    }
    validate(data) {
             
    }
}

function findAll() {
    const eventList = JSON.parse(fs.readFileSync(path.resolve("./data/events_master.json")));
    return eventList;
}

function findByOwner(owner) {
    // TODO: What happens if there is no board? That should be handled here.
    const eventList = JSON.parse(fs.readFileSync(path.resolve(`./data/events/events_${owner}.json`)));
    return eventList;
}

function createRandomID() {
    let id = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    // Get three random letters and two random numbers
    for(let i = 0; i < 3; i++) {
        id += letters[Math.floor(Math.random() * letters.length)];
    }
    for(let i = 0; i < 2; i++) {
        id += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return id;
}

// Overwrites the entire event list(data) of the specified owner
function updateEventList(data, owner) {
    const newEventList = JSON.stringify(data);
    fs.writeFileSync(path.resolve(`./data/events/events_${owner}.json`), newEventList);
}

export default {createRandomID, findAll, findByOwner, updateEventList};
