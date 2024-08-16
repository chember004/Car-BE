import express, { Response, Request } from "express";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";
import "./strategies/local-strategy";
// import "./strategies/discord-strategy.mjs";
export const createApp = () => {
  const app = express();

  //todo query
  app.use(express.json()); //parsing to JSON data
  app.use(cookieParser("secret"));
  app.use(
    session({
      secret: "secret",
      //set saveUninitialized to TRUE, if you want to persist the a session.
      //ex. user not login yet but added some items in the cart.
      //Then requires the user login/register to perform a checkout.
      saveUninitialized: false,
      // set resave to TRUE, if you want to change/update the session expiration
      resave: false,
      cookie: {
        maxAge: 60000 * 60,
      },
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);

  app.get("/", (request: Request, response: Response) => {
    console.log(request.session);
    console.log("home session id ", request.session.id);
    // request.session.visited = true;
    response.cookie("cookie", "cookie monster", {
      maxAge: 30000,
      signed: true,
    });
    response.status(200).send("Hello World!");
  });

  return app;
};
