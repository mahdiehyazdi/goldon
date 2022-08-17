const express = require("express");
const router = express.Router();
const SelfWorth = require("../Model/selfWorth");

router.get("/", async (req, res) => {
    try {
        const selfWorth = await SelfWorth.find();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const selfWorth = new SelfWorth({
        session: req.body.session,
        courseTeacher: req.body.courseTeacher,
        fileType: req.body.fileType,
        courseTime: req.body.courseTime,
        courseTopics: req.body.courseTopics,
        icon: req.body.icon,
        link: req.body.link,
        courseRecommended: req.body.courseRecommended,
    });
    try {
        const newSelf = await selfWorth.save();
        res.status(201).json(newSelf);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/getSelfKnowledge", async (req, res) => {
    try {
        let SelfKnowledge = await SelfWorth.find({});
        res.send({ SelfKnowledge: SelfKnowledge[0] });
    } catch (err) {
        res.sendStatus(400).send(err);
    }
});

module.exports = router;
