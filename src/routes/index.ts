import { Router } from "express";
import userRoute from "./users";
import productsRouter from "./products";
import authRouter from "./auth";

const router = Router();

router.use(userRoute);
router.use(productsRouter);
router.use(authRouter);

export default router;
