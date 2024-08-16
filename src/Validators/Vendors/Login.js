const {check}= require("express-validator")


const loginVendorValidation=[
    check("data.email","Please Enter Valid Email ").isEmail(),                          //Verifying user request  data
    check('data.password',"Password should be strong").isStrongPassword()
]


module.exports={loginVendorValidation}