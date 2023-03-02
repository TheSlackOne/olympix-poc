
import { Router } from "express";
import { reportController } from "../controllers/controller-report";

const router = Router();

router.post('/report', reportController);

export default router;
