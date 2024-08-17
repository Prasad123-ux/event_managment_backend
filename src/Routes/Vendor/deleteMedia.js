const express = require('express')
const { deleteMediaController } = require('../../Controlllers/Vendor/DeleteMedia')
const { VendorAuthenticate } = require('../../Middleware/Vendor/Authenticate')
const deleteMediaRoute=express.Router() 


deleteMediaRoute.post('/event/delete',VendorAuthenticate,deleteMediaController)


module.exports={deleteMediaRoute}