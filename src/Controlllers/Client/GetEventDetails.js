const { EventData } = require("../../Modules/Vendor/Event")

const getEventDetailsController=async (req, res)=>{

    const id = req.params.id
    
    try{
    const data= await EventData.findOne({_id:id}).exec() 
    if(data){
        
        return res.status(200).json({Success:true, Message:"Data found", eventDetails:data})
    }else{
        return res.status(404).json({Success:false, Message:"Data Not Found"})

    }
}catch(err){
    return res.status(500).json({Success:false, Message:"Server Error"})

}

}

module.exports={getEventDetailsController}