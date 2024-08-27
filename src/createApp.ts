import express, { Response, Request } from "express";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";

import "./config/passport/local-strategy";
// import "./config/passport/postgressql-strategy";
// import "./strategies/discord-strategy.mjs";
export const createApp = () => {
  const app = express();

  //todo query
  app.use(express.json()); //parsing to JSON data
  app.use(express.urlencoded({ extended: true }));
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
        // @ts-ignore TS2322
        client: mongoose.connection.getClient(),
        stringify: false,
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  //ROUTES
  app.use(routes);

  return app;
};
