const express = require("express")
const { EditEventDataController } = require("../../Controlllers/Vendor/EditEvent")
const { VendorAuthenticate } = require("../../Middleware/Vendor/Authenticate")
const editEventDataRoute= express.Router()  


editEventDataRoute.post('/updateEventData/:id',VendorAuthenticate,EditEventDataController)



module.exports={editEventDataRoute}
