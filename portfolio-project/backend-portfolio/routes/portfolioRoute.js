const router = require('express').Router();
const { Intro, About, Project, Contact, Experience, Course, _id } = require('../models/portfolioModel');
const User = require("../models/userModel");

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intros: intros[0],
            abouts: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            courses: courses
        })
    }
    catch (error) {
        res.status(500).send(error);
        // console.log(error);
    }
});


// intro section routes
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        // console.log(intro);
        res.status(200).send(
            {
                data: intro,
                success: true,
                message: "intro Update successfully"
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
})


// about section routes
router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        // console.log(intro);
        res.status(200).send(
            {
                data: about,
                success: true,
                message: "about Update successfully"
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
});

// add experience
router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update experience
router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete experience
router.post("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete(
            { _id: req.body._id }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// add Project
router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update project
router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete project
router.post("/delete-project", async (req, res) => {
    try {
        const project = await Project.findOneAndDelete(
            { _id: req.body._id }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// add course
router.post("/add-course", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            data: course,
            success: true,
            message: "Course added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update course
router.post("/update-course", async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: "Course updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete course
router.post("/delete-course", async (req, res) => {
    try {
        const course = await Course.findOneAndDelete(
            { _id: req.body._id }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: "Course deleted Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update Contact 
router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact Updated Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Admin Login 
router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login Successfully",
            });
        } else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid Username or Password",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;