
const jwt = require('jsonwebtoken')

const adminAuthenticate=(req,res,next)=>{
    const token= req.body.token 

    // Middleware for checking user is authenticated
    if(token==="undefined"){
        res.status(401).json({Success:false,Message:"Authentication required. Please log in to access this resource"})
    }
    else{
           const decoded = jwt.verify(token,process.env.JWT_TOKEN)      //finding tokens  data 
           req.email= decoded.email
           req.role= decoded.role

           if(req.role==="Admin"){
             next()                                                    //Verifying Role 
              
           }else{
           res.status(403).json({Success:true,Message:"Access denied. You do not have permission to perform this action."})
           }
            
}
}


module.exports={adminAuthenticate}