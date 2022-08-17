const express = require("express");
const router = express.Router();
const Users = require("../Model/users");

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const users = new Users({
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        fullName: req.body.fullName,
        email: req.body.email,
    });
    try {
        const newUser = await users.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
