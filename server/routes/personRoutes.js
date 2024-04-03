import express from 'express'
import { createPerson, getPeople } from "../controller/personController.js";
const router = express.Router();

router.post("/person", createPerson);
router.get("/person", getPeople)

export default router;