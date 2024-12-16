import express from 'express';

const router = express.Router();

// Import the controller functions
import { register, login, updateUser } from "../DB/controllers/authController.js";

// Define routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-user').patch(updateUser);

export default router;
