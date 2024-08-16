import { Response, Router, Request } from "express";
import passport from "passport";

const router = Router();

router.post(
  "/api/auth",
  passport.authenticate("local"),
  (req: Request, res: Response) => {
    console.log(`/api/auth GET method`);
    res.sendStatus(200);
  }
);

router.get("/api/auth/status", (req: Request, res: Response) => {
  console.log("/api/auth/status GET method");
  console.log("current session", req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

router.post("/api/auth/logout", (req: Request, res: Response) => {
  console.log("/api/auth/logout POST method", req.user);
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(400);
    res.send(200);
  });
});

router.get("/api/auth/discord", passport.authenticate("discord"));
router.get(
  "/api/auth/discord/redirect",
  passport.authenticate("discord"),
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export default router;
