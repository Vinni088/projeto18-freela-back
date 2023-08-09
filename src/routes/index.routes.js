import { Router } from "express";
import usersRouter from "./users.routes.js";
import jobsRouter from "./jobs.routes.js";

const router = Router();

router.use(usersRouter);
router.use(jobsRouter);

export default router;
