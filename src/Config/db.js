const mongoose= require("mongoose")
const env = require("dotenv")
env.config()
// mongoose.connect(`mongodb://0.0.0.0/Event_Management_system`)


mongoose.connect('mongodb+srv://prasadmetkar333:uWFPsDYkN1SOcu6i@cluster0.awfae.mongodb.net/event_managment?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("database not connected")
})

module.exports={mongoose}