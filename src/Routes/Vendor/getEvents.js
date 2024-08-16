const express = require("express")
const { getEventsController } = require("../../Controlllers/Vendor/getEvents")
const getEventsRoutes=express.Router()




getEventsRoutes.get('/getEvents',getEventsController)


module.exports={getEventsRoutes}