import { Request, Response } from "express";
import { User } from "../models/postgresql";
import { hashPassword } from "../utils/helpers";
import passport from "passport";

export const loginMongoose = (req: Request, res: Response) => {
  console.log(`/api/auth POST method`, req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
  // res.sendStatus(200);
};

export const checkAuthStatusMongoose = (req: Request, res: Response) => {
  console.log("/api/auth/status GET method");
  console.log("current session", req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
};

export const registerUserPostgresql = async (req: Request, res: Response) => {
  console.log("/register Postgresql POST method", req.user);
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

export const loginUserPostgresql = (req: Request, res: Response, next: any) => {
  console.log("/login Postgresql POST method", req.user);
  passport.authenticate("local", (err: any, user: Express.User, info: any) => {
    if (err) return next(err);
    if (!user)
      return res.status(400).json({ message: "Login failed", ...info });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ message: "Logged in", user });
    });
  })(req, res, next);
};

export const logoutUser = (req: Request, res: Response) => {
  console.log("/api/auth/logout POST method", req.user);
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(400);
    res.status(200).json({ message: "Logged out", isLoggedOut: true });
  });
};
