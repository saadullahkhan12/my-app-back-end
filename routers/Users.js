import express from "express";
const router = express.Router();
import Users from "../models/users.js";
import sendResponses from "../sender/sendResponses.js";

router.post("/", async (req, res) => {
    // Expecting { firstname, lastname, email } directly from the body
    const { firstname, lastname, email } = req.body;  

    let newUser = new Users({ firstname, lastname, email });  // Use the values directly
    try {
        newUser = await newUser.save();
        sendResponses(res, 201, newUser, false, "User ad successfully");
    } catch (error) {
        sendResponses(res, 500, null, true, "Error adding user");
    }
});




export default router;
