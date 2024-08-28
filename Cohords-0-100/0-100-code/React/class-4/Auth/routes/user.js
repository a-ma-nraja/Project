const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup",async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
   const newUser = await User.create({
      username,
      password
    });
  console.log('new user' , newUser);
    res.json({
      message: "User created successfully",
    });
  });

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});


// router.post("/courses/:courseId", userMiddleware, async (req, res) => {
//     try {
//       const courseId = req.params.courseId;
//       const username = req.headers.username;
  
//       await User.updateOne(
//         { username: username },
//         { $push: { purchasedCourses: courseId } }
//       );
  
//       res.json({ message: "Purchase complete!" });
//     } catch (error) {
//       console.error("Error during course purchase:", error);
//       res.status(500).json({ error: "An error occurred during course purchase" });
//     }
//   });

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
