import { Router } from "express";
import userRoute from "./users";
import productsRouter from "./products";
import authRouterMongoose from "./authMongoose";
import authRouterPostgresql from "./authPostgresql";
const router = Router();

router.use(userRoute);
router.use(productsRouter);
router.use(authRouterMongoose);
router.use(authRouterPostgresql);

export default router;
