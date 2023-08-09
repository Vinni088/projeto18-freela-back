import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signUp, signIn, isLogged, createFeedback, updateFeedback } from "../controllers/users.controller.js";
import { signUpSchema, signInSchema } from "../schemas/users.schemas.js";
const usersRouter = Router();

usersRouter.post("/signup", validateSchema(signUpSchema), signUp);
usersRouter.post("/signin", validateSchema(signInSchema), signIn);
usersRouter.post("/logged", isLogged);
usersRouter.post("/feedback", createFeedback);
usersRouter.post("/feedback/update", updateFeedback);

export default usersRouter