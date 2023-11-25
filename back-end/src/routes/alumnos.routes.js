import { Router } from "express";
import {getAlumno} from "../controllers/alumnos.controllers.js"

const router = Router()
router.get("/alumnos/:id",getAlumno)


export default router; 