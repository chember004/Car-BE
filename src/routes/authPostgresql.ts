import { Router } from "express";
import { body } from "express-validator";
import {
  registerUserPostgresql,
  loginUserPostgresql,
  logoutUser,
} from "../controllers/authController";
import { validate } from "../middlewares/validationMiddleware";

const router = Router();

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  validate,
  registerUserPostgresql
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validate,
  loginUserPostgresql
);

router.get("/logout", logoutUser);

export default router;
