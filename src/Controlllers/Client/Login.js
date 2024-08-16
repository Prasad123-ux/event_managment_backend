const { ClientData } = require("../../Modules/Client/Client")
// const {eventData}= require('../../Modules/Vendor/Events')
const jwt = require('jsonwebtoken')
const env= require("dotenv")
const { EventData } = require("../../Modules/Vendor/Event")
env.config()

const loginClientController=(req,res)=>{
    // console.log(req.body)

    const data = req.body.data
    console.log(data.eventID)
    

    EventData.findOne({_id:data.eventID}).exec()
    .then((user)=>{
        console.log(user)
        if(user===null){
             return res.status(403).json({Success:false,Title:"Event Not Found ", Message:"Please check your Event ID you don't have any event with that ID"})
        }else{

  

    ClientData.findOne({email:data.email}).exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({Success:true,Title:"Login Successfully", Message:"You can view your event"})
        }else{
            const clientObject= new ClientData({
                name:data.name,
                email:data.email
            
            })
            clientObject.save().then((user)=>{
                // const token= jwt.sign({email:user.email,role:user.role},process.env.JWT_TOKEN,{"expiresIn":"30d"})
                res.status(200).json({Success:true,Title:"Login Successfully", Message:"You can view your event"})

            })
        }

    }).catch((error)=>{
        res.status(500).json({Success:false,Title:"Database Error",Error:error.message})
    })
}
})
}

module.exports={loginClientController}