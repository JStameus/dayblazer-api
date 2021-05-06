import colors from "colors/safe.js";

function logAccessAttempt(req) {
    const timeStamp = getTimeStamp();
    const userString = colors.italic(colors.blue(req.header("User-Name")));
    const tokenAccepted = validateToken(req);
    const ownerAccepted = validateOwner(req, req.params.user);
    const tokenStatusMessage = tokenAccepted ? colors.green("Accepted"): colors.red("Rejected"); 
    const ownerStatusMessage = ownerAccepted ? colors.green("Accepted"): colors.red("Rejected"); 
    const requestStatusMessage = tokenAccepted && ownerAccepted ? colors.underline(colors.green("GRANTED")) : colors.underline(colors.red("DENIED"));
    return `${timeStamp} | User '${userString}' requested access to event board. | Token: ${tokenStatusMessage} | Owner: ${ownerStatusMessage} | ${requestStatusMessage}`;
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

function getTimeStamp() {
    const timeStamp = new Date();
    const date = timeStamp.toLocaleDateString();
    const hours = timeStamp.getHours();
    // TODO: This gives me a single digit if it's less than 10. Looks dumb :(
    const minutes = timeStamp.getMinutes();
    return `${date} - ${hours}:${minutes}`;
}

export default {logAccessAttempt, validateOwner, validateToken, getTimeStamp}
