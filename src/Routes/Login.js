const express = require("express")
const { loginClientController } = require("../Controlllers/Client/Login")
const clientLoginRoute=express.Router() 




clientLoginRoute.post('/login',loginClientController)


module.exports={clientLoginRoute}