const event_route = require("express").Router();


const eventService = require("../services/event.services") 

event_route.get("/view",eventService.findEvent);
event_route.post("/add",eventService.insertEvent);
event_route.put("/:id",eventService.updateEvent);
event_route.delete("/:id",eventService.deleteEvent);

module.exports = event_route;

