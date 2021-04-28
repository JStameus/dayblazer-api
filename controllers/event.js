import Event from "../models/event.js";

function getAllEventLists(req, res) {
    res.json(Event.findAll());
}

function getOwnerEventList(owner, req, res) {
    res.json(Event.findByOwner(owner));
}

export default {getAllEventLists, getOwnerEventList};
