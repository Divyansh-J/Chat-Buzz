import express from "express";
import {isAuthenticate} from "../middleware/auth.middleware.js";
import {getMessages, sendMessage} from "../controller/message.controler.js";


const router = express.Router();

router.post("/send/:id",isAuthenticate, sendMessage);
router.get("/:id",isAuthenticate, getMessages);


export default router;