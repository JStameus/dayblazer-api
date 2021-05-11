import fs from "fs";
import path from "path";

function getUserByName(name) {
    return fs.readFileSync(path.resolve(`./data/users/user_${name}.json`));
}
