import { Request, Response, Router } from "express";

const router = Router();

router.get("/api/products", (request: Request, response: Response) => {
  if (request.user)
    return response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);

  return response
    .status(403)
    .send({ msg: "Sorry. You need the correct cookie" });
});

export default router;
