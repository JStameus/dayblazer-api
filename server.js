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

// -- ROUTES --
app.get("/", (req, res) => {
    res.render("main", {message: "Welcome, USERNAME!"});
})

// -- INITIALIZATION --
app.listen(PORT, () => {
    console.log(`Dayblazer Calendar: Server listening on Port ${PORT}`);
    console.log(`Serving static files from: ${PUBLICDIR}`);
});
