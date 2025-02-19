import { Router } from "express";
import { userController } from '../controller/users.controller.js';

const router = Router();
router.post("/", userController)

export default router;

