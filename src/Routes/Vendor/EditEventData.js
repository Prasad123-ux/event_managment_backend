const express = require("express")
const { EditEventDataController } = require("../../Controlllers/Vendor/EditEvent")
const editEventDataRoute= express.Router()  


editEventDataRoute.post('/updateEventData/:id',EditEventDataController)



module.exports={editEventDataRoute}
