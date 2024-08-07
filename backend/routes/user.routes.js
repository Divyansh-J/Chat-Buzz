import express from "express";
import { isAuthenticate } from "../middleware/auth.middleware.js";
import  {getUsersFromSidebar}  from "../controller/user.controller.js";

const router = express.Router();

router.get("/",isAuthenticate, getUsersFromSidebar);

export default router;