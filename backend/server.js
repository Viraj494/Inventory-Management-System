const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// Create 'uploads' directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);  // Create the 'uploads' folder if it doesn't exist
}

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Error handling middleware (catch any errors)
app.use(errorHandler);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
