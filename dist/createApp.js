"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
require("./config/passport/local-strategy");
// import "./config/passport/postgressql-strategy";
// import "./strategies/discord-strategy.mjs";
const createApp = () => {
    const app = (0, express_1.default)();
    //todo query
    app.use(express_1.default.json()); //parsing to JSON data
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)("secret"));
    app.use((0, express_session_1.default)({
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
        store: connect_mongo_1.default.create({
            client: mongoose_1.default.connection.getClient(),
        }),
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    //ROUTES
    app.use(routes_1.default);
    return app;
};
exports.createApp = createApp;
