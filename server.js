// External modules
import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import fs from "fs";

// My own modules
import EventController from "./controllers/event.js";
import CalendarController from "./controllers/calendar.js";

const app = express();

// -- SERVER SETUP --
const PORT = 3000;
// TODO: This directory works, but it goes all the way from "home". Find a way
// to get the absolute path of the project root only.
const PUBLICDIR = path.resolve("./public");

app.use(express.static(PUBLICDIR));
app.set("view engine", "handlebars");
app.engine("handlebars", handlebars({
    layoutsDir: path.resolve("./views/layouts"),
    partialsDir: path.resolve("./views/partials"),
    defaultLayout: "index",
    extname: "handlebars",
    helpers: {
        showName: (a) => {
            console.log(a.toUpperCase());
        },
    }
}));

// Data to render the page with
let eventList = EventController.getEventList();
let calendarInfo = CalendarController.getCalendarInfo();

let myData = {
    name: "Jean-Paul",
    level: 5,
};

// -- ROUTES --
app.get("/", (req, res) => {
    res.render("main", calendarInfo);
});

app.get("/calendar/u=:user", (req, res) => {
    // Get events belonging to the selected user
    res.json(JSON.parse(fs.readFileSync(path.resolve("./data/events.json"), {
        encoding: "utf-8",
    })));
});

// -- INITIALIZATION --
app.listen(PORT, () => {
    console.log(`Dayblazer Calendar: Server listening on Port ${PORT}`);
    console.log(`Serving static files from: ${PUBLICDIR}`);
});
