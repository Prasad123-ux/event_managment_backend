const express = require('express')
const { registerVendorController } = require('../../Controlllers/Vendor/Registration')
const { registerVendorValidation } = require('../../Validators/Vendors/RegisterValidate')
// const { registerVendorValidation } = require('../../Validators/Vendors/RegisterValidate')
const vendorRegistrationRoute= express.Router() 




vendorRegistrationRoute.post('/registration',registerVendorValidation,registerVendorController)                   //Making a route for vendor registration


module.exports={vendorRegistrationRoute}