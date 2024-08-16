const express = require('express')
// const { loginVendorValidation } = require('../../Validators/Vendors/Login')
const { loginVendorController } = require('../../Controlllers/Vendor/Login')
const { loginVendorValidation } = require('../../Validators/Vendors/Login')
const vendorLoginRoute= express.Router() 

vendorLoginRoute.post('/login',loginVendorValidation,loginVendorController)



module.exports={vendorLoginRoute}