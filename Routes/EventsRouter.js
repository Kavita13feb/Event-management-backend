const express = require("express");
const { getAllEvents, addEvents, getSingleEvent, updateEventData, SearchEventsByName, cancelEvent } = require("../Controller/EventController");
// const { EventSignup, EventLogin, getUsers, addOrUpdatedAddress } = require("../controllers/user.controller");

const EventRouter = express.Router();
EventRouter.get("/search", SearchEventsByName);

EventRouter.get("/", getAllEvents);
EventRouter.get("/:EventID", getSingleEvent);

EventRouter.post("/add", addEvents);
EventRouter.put("/edit/:EventID", updateEventData);
EventRouter.delete("/delete/:EventID", cancelEvent);




module.exports = { EventRouter };