import { Router } from "express";
import { checkSchema } from "express-validator";
import { userValidationSchema } from "../utils/userValidationSchema";
import { createUser, getUserById, getUsers } from "../handlers/users";

const router = Router();

//todo register and get users
router.get("/api/users", getUsers);
router.get("/api/users/:username", getUserById);
router.post("/api/user", checkSchema(userValidationSchema), createUser);

export default router;
