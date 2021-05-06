import Event from "../models/EventModel.js";
import utils from "../utils.js";

// TODO: Either this is only for testing and should never be exposed to the end
// user, or it should be removed as it would probably never be useful.
function getAllEventLists(_req, res) {
    res.json(Event.findAll());
}

// TODO: Since the validateOwner function also gets an event board from the
// model, the model sends that event board twice. Is that a performance issue?
function getOwnerEventList(req, res) {
    const requestingUser = req.header("User-Name");
    // TODO: Throws an error "Event.findByOwner is not a function". Why?
    //if(utils.validateToken(req) && utils.validateOwner(req, req.params.user)) {
    if(utils.validateToken(req)) {
        res.json(Event.findByOwner(requestingUser));
    } else {
        res.status(403);
        const responseObject = {
            message: "Sorry, the requested resource could not be retrieved.",
            reason: "Access denied"
        };
        res.json(responseObject);
    }
}

function updateEventList(req, res) {
    if(utils.validateToken(req)) {
        console.log(`RECIEVING POST REQUEST FROM '${req.header("User-Name")}'`);
        // TODO: The body is just {}. Is this a server or client error? 
        console.log(JSON.stringify(req.body));
    }
}

export default {getAllEventLists, getOwnerEventList, updateEventList};
