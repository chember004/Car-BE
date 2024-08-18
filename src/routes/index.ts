import { Router } from "express";
import userRoute from "./users";
import productsRouter from "./products";
import authRouterMongoose from "./authMongoose";
import authRouterPostgresql from "./authPostgresql";
import authSession from "./session";
const router = Router();

router.use(userRoute);
router.use(productsRouter);
router.use(authRouterMongoose);
router.use(authRouterPostgresql);
router.use(authSession);

export default router;
