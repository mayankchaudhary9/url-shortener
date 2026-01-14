import express from "express";
import short_urlController from "../controller/short_url.controller.js";
const router = express.Router();

router.post("/", short_urlController.createShortUrl);

export default router;
