import express from "express";
const router = express.Router()
import { 
    getProducts, 
    getProductById, 
    deleteProduct, 
    createProduct, 
    updateProduct 
} from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

//Fetch all products
router.route('/').get(getProducts).post(protect, admin, createProduct)

//Fetch particular products
router.route('/:id')
        .get(getProductById)
        .delete(protect, admin, deleteProduct)
        .put(protect, admin, updateProduct)

export default router