const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { VendorData } = require("../../Modules/Vendor/Vendor");
const { loginVendorValidation } = require("../../Validators/Vendors/Login");
const env = require('dotenv');
const { validationResult } = require('express-validator');
env.config();

const loginVendorController = async (req, res) => {
    console.log(req.body);

    const data = req.body.data;

    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            Success: false,
            Title: "Validation Error",
            Message: errors.errors[0].msg
        });
    }

    try {
        // Check if the user exists
        const user = await VendorData.findOne({ email: data.email }).exec();
        if (!user) {
            return res.status(403).json({
                Success: false,
                Message: "User not found. Please check the provided information and try again.",
            
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                Success: false,
                Message: "Password does not match. Please try again."
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_TOKEN,
            { expiresIn: "30d" }
        );

        // Successful login response
        return res.status(200).json({
            Success: true,
            Message: "Login Successfully.",
            token: token
        });

    } catch (error) {
        // Server error handling
        console.error(error);
        return res.status(500).json({
            Success: false,
            Message: "Internal Server Error. Please try again later.",
            Error: error.message
        });
    }
};

module.exports = { loginVendorController };
