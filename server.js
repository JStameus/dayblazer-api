import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import fs from "fs";

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
let dataObject = {
    calendarInfo: {
        currentWeek: "w. 16",
        currentMonth: "April",
        currentYear: "2021"
    },
    weekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    hourSpans: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
    ]
};

// -- ROUTES --
app.get("/", (req, res) => {
    res.render("main", dataObject);
})

// -- INITIALIZATION --
app.listen(PORT, () => {
    console.log(`Dayblazer Calendar: Server listening on Port ${PORT}`);
    console.log(`Serving static files from: ${PUBLICDIR}`);
});
