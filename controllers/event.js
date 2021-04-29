import Event from "../models/event.js";

function getAllEventLists(req, res) {
    res.json(Event.findAll());
}

function getOwnerEventList(owner, req, res) {
    if (validateOwner(req, owner)) {
        res.json(Event.findByOwner(owner));
    }
    else {
        // TODO: Should I make this response different depending on if the token
        // was incorrect, or the user? Would that reveal too much information?
        const errorResponse = {
            message: "Sorry, the requested resource could not be retrieved."
        };
        res.status(404);
        res.json(errorResponse);
    }
}

// Checks the request header for a token and who sent it, and returns true if
// the user requesting the information IS the owner.
function validateOwner(req, owner) {
    // TODO: Implement proper token creation/validation
    const validToken = "abc123";
    if (req.header("Board-Token") === validToken) {
        // TODO: I'm not actually checking for the real owner here.
        if (req.header("User-Name") === owner) {
            console.log("TRUE");
            return true;
        }
    }
    // If the sent token does not correspond to the valid one, and the user is
    // not the owner of the requested resource, return false
    console.log("FALSE");
    return false;
}

export default {getAllEventLists, getOwnerEventList};
