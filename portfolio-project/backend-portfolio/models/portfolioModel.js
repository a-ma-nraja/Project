const mongoose = require("mongoose");


// Intro Section Database schema 
const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    caption: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
});

// about Section Database schema 
const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        require: true,
    },
    description1: {
        type: String,
        require: true,
    },
    description2: {
        type: String,
        require: true,
    },
    skills: {
        type: Array,
        require: true,
    },
});

// experience section Database Schema
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    period: {
        type: String,
        require: true,
    },
    company: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

// projects section Database Schema
const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    technolgies: {
        type: Array,
        require: true,
    },
});

// Courses section Database Schema
const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
});

// contact section Database Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
});

module.exports = {
    Intro: mongoose.model("intro", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Experience: mongoose.model("experience", experienceSchema),
    Project: mongoose.model("projects", projectsSchema),
    Course: mongoose.model("courses", coursesSchema),
    Contact: mongoose.model("contacts", contactSchema)
}
