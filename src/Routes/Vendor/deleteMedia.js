const express = require('express')
const { deleteMediaController } = require('../../Controlllers/Vendor/DeleteMedia')
const deleteMediaRoute=express.Router() 


deleteMediaRoute.post('/event/delete',deleteMediaController)


module.exports={deleteMediaRoute}