import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { showJobs, showMyJobs, createJob, updateJob, deleteJob } from "../controllers/jobs.controller.js";

const jobsRouter = Router();

jobsRouter.get("/jobs", showJobs);
jobsRouter.get("/jobs/me", showMyJobs);
jobsRouter.post("/jobs", createJob);
jobsRouter.post("/jobs/:id", updateJob);
jobsRouter.delete("/jobs/:id", deleteJob);

export default jobsRouter;