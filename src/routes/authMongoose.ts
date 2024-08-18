import { Response, Router, Request } from "express";
import passport from "passport";
import {
  checkAuthStatusMongoose,
  loginMongoose,
  logoutUser,
} from "../controllers/authController";

const router = Router();

router.post("/api/auth", passport.authenticate("local"), loginMongoose);
router.get("/api/auth/status", checkAuthStatusMongoose);
router.post("/api/auth/logout", logoutUser);

router.get("/api/auth/discord", passport.authenticate("discord"));
router.get(
  "/api/auth/discord/redirect",
  passport.authenticate("discord"),
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export default router;
