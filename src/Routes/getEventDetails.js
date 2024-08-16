const express = require("express")
// const { getEventsController } = require("../Controlllers/Vendor/getEvents")
const { getEventDetailsController } = require("../Controlllers/Client/GetEventDetails")
const getEventDetailsRoutes=express.Router()  



getEventDetailsRoutes.get('/getEventDetails/:id',getEventDetailsController)


module.exports={getEventDetailsRoutes}