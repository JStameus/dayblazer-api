import fs from "fs";
import path from "path";

const events = JSON.parse(fs.readFileSync(path.resolve("./data/events_master.json")));

function findAll() {
    return events;
}

function findByOwner(owner) {
    // TODO: What happens if there is no board? That should be handled here.
    return events.find(board => board.owner === owner);  
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

function addNew(body) {
    try {
        const newEvent = {
            id: createRandomID(),
            // TODO: It probably shouldn't be possible to not set a name. Make
            // sure to handle this properly.
            name: body.name || "Unnamed",
            description: body.description || "No description",
            date: body.date || "N/A",
            startTime: body.startTime || "N/A",
            endTime: body.endTime || "N/A",
        }
    }
    catch(err) {
        console.log(`ERROR: ${err}`);
        return false;
    }
}

export default {createRandomID, findAll, addNew, findByOwner};
