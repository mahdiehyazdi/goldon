const mongoose = require("mongoose");

const selfWorthSchema = new mongoose.Schema({
    session: {
        sessionCount: {
            type: Number,
            max: 100,
            min: 1,
        },
        courseName: {
            type: String,
            maxlength: 15,
            required: true,
            unique: true,
        },
        courseDescription: {
            type: String,
            maxlength: 15,
            required: true,
        },
    },
    courseTeacher: {
        firstName: {
            type: String,
            maxlength: 10,
            required: true,
        },
        lastName: {
            type: String,
            maxlength: 15,
            required: true,
        },
    },
    fileType: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    courseTime: {
        hour: {
            type: Number,
            min: 00,
        },
        minutes: {
            type: Number,
            max: 59,
            min: 00,
        },
    },
    courseTopics: {
        type: String,
        required: true,
        maxlength: 30,
    },
    icon: {
        type: String,
        required: true,
    },
    link: {
        webSite: {
            link: {
                type: String,
                required: true,
                pattern: "[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)",
            },
            name: {
                type: String,
                required: true,
            },
        },
        local: {
            link: {
                type: String,
                required: true,
                pattern: "[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)",
            },
        },
    },
    courseRecommended: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model("selfWorth", selfWorthSchema);
