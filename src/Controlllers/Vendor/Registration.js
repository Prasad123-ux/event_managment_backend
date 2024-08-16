const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { VendorData } = require('../../Modules/Vendor/Vendor');
const { registerVendorValidation } = require('../../Validators/Vendors/RegisterValidate');
const { validationResult } = require('express-validator');

const registerVendorController = async (req, res) => {
    console.log(req.body);
    const data = req.body.data;

    // Validate the input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(403).json({
            Success: false,
            Title: "Error in Data Validation",
            Message: errors.errors[0].msg
        });
    }

    try {
        // Check if the user is already registered
        const user = await VendorData.findOne({ email: data.email });
        if (user) {
            return res.status(400).json({
                Success: false,
                Message: "User Already Registered! Please log in."
            });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        // Create a new vendor object
        const vendorObject = new VendorData({
            name: data.name,
            email: data.email,
            password: data.password,
        });

        // Save the vendor object to the database
        const savedUser = await vendorObject.save();

        // Generate a JWT token
        const token = jwt.sign(
            { email: savedUser.email, role: savedUser.role },
            process.env.JWT_TOKEN,
            { expiresIn: "30d" }
        );

        // Send the response with the token
        return res.status(200).json({
            Success: true,
            Message: "Account Created",
            token: token
        });

    } catch (err) {
        // Handle errors
        console.error(err);
        return res.status(500).json({
            Success: false,
            Title: "Server Problem",
            Message: "Please try again",
            Error: err.message
        });
    }
};

module.exports = { registerVendorController };
