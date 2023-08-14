import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { showJobs, showMyJobs, createJob, updateJob, deleteJob, showJobsById } from "../controllers/jobs.controller.js";

const jobsRouter = Router();

jobsRouter.get("/jobs", showJobs);
jobsRouter.get("/jobs/:id", showJobsById);
jobsRouter.get("/me", validateAuth, showMyJobs);
jobsRouter.post("/jobs", validateAuth, createJob);
jobsRouter.post("/jobs/:id", validateAuth, updateJob);
jobsRouter.delete("/jobs/:id", validateAuth, deleteJob);

export default jobsRouter;