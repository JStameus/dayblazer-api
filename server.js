// External modules
import express from "express";
import handlebars from "express-handlebars";
import path from "path";

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
}));

// Data to render the page with
let eventList = EventController.getEventList();
let calendarInfo = CalendarController.getCalendarInfo();

// -- ROUTES --
app.get("/", (req, res) => {
    res.render("main", calendarInfo);
})

// -- INITIALIZATION --
app.listen(PORT, () => {
    console.log(`Dayblazer Calendar: Server listening on Port ${PORT}`);
    console.log(`Serving static files from: ${PUBLICDIR}`);
});
