import express from "express";
import {isAuthenticate} from "../middleware/auth.middleware.js";
import {sendMessage} from "../controller/message.controler.js";


const router = express.Router();

router.post("/send/:id",isAuthenticate, sendMessage);

export default router;