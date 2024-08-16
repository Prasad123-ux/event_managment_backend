const express= require("express")
const app = express()
const env= require('dotenv')
const cors= require("cors")
const { vendorRegistrationRoute } = require("./src/Routes/Vendor/Registration")
const { vendorLoginRoute } = require("./src/Routes/Vendor/Login")
const { clientLoginRoute } = require("./src/Routes/Login")
const bodyParser= require('body-parser')
const { uploadRouter, addMediaRoutes } = require("./src/Routes/Vendor/AddMedia")
const { getEventsRoutes } = require("./src/Routes/Vendor/getEvents")
const { getEventDetailsRoutes } = require("./src/Routes/getEventDetails")
const { editEventDataRoute } = require("./src/Routes/Vendor/EditEventData")
const { deleteMediaRoute } = require("./src/Routes/Vendor/deleteMedia")
env.config()



app.use(bodyParser.json())
app.use(cors())


app.use('/api/vendor',vendorRegistrationRoute)
app.use('/api/vendor',vendorLoginRoute)
app.use('/api/client',clientLoginRoute)
// app.use('/api/Vendor',uploadRouter)
app.use('/api/vendor',addMediaRoutes)
app.use('/api/vendor',getEventsRoutes)
app.use('/api/client',getEventDetailsRoutes)
app.use('/api/vendor',editEventDataRoute)
app.use('/api/vendor',deleteMediaRoute)

// getting the port from env file
const port= process.env.PORT


// starting the server
app.listen(port,()=>{
    console.log("server is running on",port)
})