// import { EventData } from "../../Modules/Vendor/Event"
const {EventData}= require('../../Modules/Vendor/Event')


const deleteMediaController= async (req ,res)=>{
    console.log(req.body)

try{
    const event=  await EventData.updateOne({eventName:req.body.eventName,},{$pull:{media:req.body.media} })
    console.log(event)
    if(event.modifiedCount > 0){
        res.status(200).json({Success:true, Message:"File Deleted Successfully"})
    }else{
        res.status(400).json({Success:false, Message:"File Could Not be Deleted"})

    }
    }catch(err){
        res.status(500).json({Success:false, Message:"server Error"})

    }
}

module.exports={deleteMediaController}