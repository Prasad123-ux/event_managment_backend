const { EventData } = require("../../Modules/Vendor/Event")

const getEventsController=async(req,res)=>{
try{
const getEvents= await EventData.find().exec()
if(getEvents.length===0){
    return res.status(404).json({Success:false, Message:"Events Not Found"})
}else{
    res.status(200).json({Success:true,Message:"Events Found",events:getEvents})
}
}catch(err){
    return res.status(500).json({Success:false, Message:"Server error"})

}


}

module.exports={getEventsController}