import { Request, Response, Router } from "express";

const router = Router();
//SESSION TEST in HOME
router.get("/api/auth/session", (request: Request, response: Response) => {
  console.log(request.session);
  console.log("home session id ", request.session.id);
  // request.session.visited = true;
  //   response.cookie("cookie", "cookie monster", {
  //     maxAge: 30000,
  //     signed: true,
  //   });
  response.status(200).send(request.session);
});

export default router;
