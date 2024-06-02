import express from 'express';
import User from '../models/userModel.js'; // Ensure this path is correct
import { test } from '../controllers/userController.js'; // Ensure this path is correct

const router = express.Router();

// A simple GET route
router.get('/', test);

export default router;

