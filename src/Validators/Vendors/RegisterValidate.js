const {check}= require("express-validator")


const registerVendorValidation=[
    check("data.email","Please Enter Valid Email ").isEmail(),
    check('data.password',"Password should be strong").isStrongPassword()
]


module.exports={registerVendorValidation}