import Event from "../models/EventModel.js";
import colors from "colors/safe.js";

// TODO: Either this is only for testing and should never be exposed to the end
// user, or it should be removed as it would probably never be useful.
function getAllEventLists(_req, res) {
    res.json(Event.findAll());
}

// TODO: Since the validateOwner function also gets an event board from the
// model, the model sends that event board twice. Is that a performance issue?
function getOwnerEventList(req, res) {
    // TODO: This is a lot of variables just to compose a message. Do I need to
    // clean this up?
    const timeStamp = getTimeStamp();
    const requestingUser = req.header("User-Name");
    const userString = colors.italic(colors.blue(req.header("User-Name")));
    const tokenAccepted = validateToken(req);
    const ownerAccepted = validateOwner(req, req.params.user);
    const tokenStatusMessage = tokenAccepted ? colors.green("Accepted"): colors.red("Rejected"); 
    const ownerStatusMessage = ownerAccepted ? colors.green("Accepted"): colors.red("Rejected"); 
    const requestStatusMessage = tokenAccepted && ownerAccepted ? colors.underline(colors.green("GRANTED")) : colors.underline(colors.red("DENIED"));
    const logMessage = `${timeStamp} | User '${userString}' requested access to event board. | Token: ${tokenStatusMessage} | Owner: ${ownerStatusMessage} | ${requestStatusMessage}`;

    // TODO: Maybe I should save these messages in a log file of some sort?
    console.log(logMessage);
    if(validateToken(req) && validateOwner(req, req.params.user)) {
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

// Checks the request against the owner supplied as a second argument, and
// returns true of they match. 
function validateOwner(req, requestedOwner) {
    const requestedEventBoard = Event.findByOwner(requestedOwner);
    const requestingUser = req.header("User-Name");

    if(requestingUser === requestedEventBoard.owner) {
        return true;
    }
    return false;
}

function validateToken(req) {
    // TODO: Obviously this dummy token will have to be dynamically generated,
    // and much more complex. Something something sha256sum?
    const validToken = "abc123";

    if(req.header("Board-Token") === validToken) {
        return true;
    }
    return false;
}

// TODO: Does this function belong here? 
function getTimeStamp() {
    const timeStamp = new Date();
    const date = timeStamp.toLocaleDateString();
    const hours = timeStamp.getHours();
    // TODO: This gives me a single digit if it's less than 10. Looks dumb :(
    const minutes = timeStamp.getMinutes();
    return `${date} - ${hours}:${minutes}`;
}

export default {getAllEventLists, getOwnerEventList};
