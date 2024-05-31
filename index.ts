import express, { Application, NextFunction, Request, Response } from "express";
import session from "express-session";
import cors from "cors";
import dotnev from "dotenv";
import mongoDB from "connect-mongodb-session";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const mongoDBStore = mongoDB(session);
const store = new mongoDBStore({
  uri: process.env.MONGO_DB_URL!,
  collection: "sessions",
});

const app: Application = express();
const port = process.env.PORT!;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", process.env.APP_URL_ONLINE!);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors({ origin: process.env.APP_URL_ONLINE! }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,

    cookie: {
      maxAge: 1000 * 60 * 24 * 60,
      sameSite: "lax",
      secure: false,
    },
    store,
  })
);
mainApp(app);

const server = app.listen(port, () => {
  console.clear();
  console.log("Server Connected and Running 🔥🔥");
  console.log();
  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
