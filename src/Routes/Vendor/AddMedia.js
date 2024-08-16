const express = require("express")
const { VendorAuthenticate } = require("../../Middleware/Vendor/Authenticate")
const { addMediaController } = require("../../Controlllers/Vendor/AddMedia")
const addMediaRoutes= express.Router() 




addMediaRoutes.post('/uploadMedia', VendorAuthenticate,addMediaController)


module.exports={addMediaRoutes}