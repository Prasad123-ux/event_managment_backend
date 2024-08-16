const mongoose= require("mongoose")


mongoose.connect(`mongodb://0.0.0.0/Event_Management_system`)
.then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("database not connected")
})

module.exports={mongoose}