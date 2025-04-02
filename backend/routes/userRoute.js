// routes/userRoute.js
const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login", loginUser);

// Protected route to get the logged-in user's profile
router.get("/profile", protect, getUserProfile);

// Protected route to update the logged-in user's profile
router.put("/profile", protect, updateUserProfile);

module.exports = router;
