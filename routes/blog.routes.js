import express from "express"
import {createBlog} from "../controllers/blog.controller.js"

const router=express.Router()

router.post("/createblog",createBlog)

export default router