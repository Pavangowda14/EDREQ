import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createLesson,fetchLessons } from "../controllers/lessonController.js";

const router=express.Router()

router.route("/lesson/add").post(isAuthenticated,isAdmin,createLesson);
router.route("/lessons/:id").get(isAuthenticated,fetchLessons);

export default router;