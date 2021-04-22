import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve("./public")));

const routeMap = [
    {
        route: "/",
        filePath: "public/index.html",
    }
]

// -- ROUTES --

// -- INITIALIZATION --
app.listen(PORT, () => {
    console.log(`Dayblazer Calendar: Server listening on Port ${PORT}`);
});
