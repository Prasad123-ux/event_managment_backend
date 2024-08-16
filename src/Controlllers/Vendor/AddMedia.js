// import { EventData } from "../../Modules/Vendor/Event"
const {EventData}= require('../../Modules/Vendor/Event')

const addMediaController=async  (req,res)=>{
 const urls= req.body.url 
 const data= req.body.data 
 console.log(req.body)
console.log(urls)
console.log(data)
try{
   const user =await EventData.findOne({eventName:data.eventName}).exec()
  if(!user){
    const eventObject= new EventData({
      eventName:data.eventName,
      eventDescription:data.description,
      eventDate:data.date,
      media:urls

    })

    const details= await eventObject.save()  
    return res.status(200).json({Success:true, Message:"Event Saved Successfully"})
    
  }else{
    return res.status(409).json({Success:false,Message:"Event  Already Found",})
  }
}catch(err){
return res.status(500).json({Success:false, Message:"Event Not saved ! try again"})
}


}

module.exports={addMediaController}