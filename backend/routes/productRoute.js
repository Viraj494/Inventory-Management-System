// routes/productRoute.js
const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    upload,
} = require("../controllers/productController");

// Use multer middleware for image upload before handling product creation
router.post("/", upload.single("image"), createProduct);  // Image will be uploaded as 'image'

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
