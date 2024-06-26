"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const dbConfig_1 = require("./utils/dbConfig");
const mainApp_1 = require("./mainApp");
const mongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const store = new mongoDBStore({
    uri: process.env.MONGO_DB_URL,
    collection: "sessions",
});
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.APP_URL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use((0, cors_1.default)({ origin: process.env.APP_URL_ONLINE }));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 24 * 60,
        sameSite: "lax",
        secure: false,
    },
    store,
}));
(0, mainApp_1.mainApp)(app);
const server = app.listen(port, () => {
    console.clear();
    console.log("Server Connected and Running 🔥🔥");
    console.log();
    (0, dbConfig_1.dbConfig)();
});
process.on("uncaughtException", (error) => {
    console.log("uncaughtException: ", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection: ", reason);
    server.close(() => {
        process.exit(1);
    });
});
