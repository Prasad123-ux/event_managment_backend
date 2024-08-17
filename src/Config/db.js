const mongoose= require("mongoose")
const env = require("dotenv")
env.config()


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.awfae.mongodb.net/event_managment?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("database not connected")
})

module.exports={mongoose}