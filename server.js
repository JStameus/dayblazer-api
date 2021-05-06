// External modules
import express from "express";
import cors from "cors";
import path from "path";

// My own modules
import EventController from "./controllers/EventController.js";

const app = express();

// -- SERVER SETUP --
const PORT = 3000;
// TODO: This directory works, but it goes all the way from "home". Find a way
// to get the absolute path of the project root only.
const PUBLICDIR = path.resolve("./public");

app.use(express.static(PUBLICDIR));
// TODO: Are there any security concerns I need to learn about here?
app.use(cors());
app.use(express.json());

// -- ROUTES --
// Getting the homepage
app.get("/", (req, res) => {
    res.send("Loading Index page...");
});

app.get("/api", (req, res) => {
    EventController.getAllEventLists(req, res);
});

app.get("/api/u=:user", (req, res) => {
    // Get events belonging to the selected user after validating the request
    EventController.getOwnerEventList(req, res);
});

app.post("/api", (req, res) => {
    // TODO: Fix this EventController function and make sure it actually handles
    // the request body properly
    //EventController.updateEventList(req, res);
    console.log("TODO: Someone is trying to post and save their event list.");
});

// -- INITIALIZATION --
app.listen(PORT, () => {
    console.log(`Dayblazer Calendar: Server listening on Port ${PORT}`);
    console.log(`Serving static files from: ${PUBLICDIR}`);
});
