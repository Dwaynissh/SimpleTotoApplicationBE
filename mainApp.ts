import { Application, NextFunction, Request, Response } from "express";
import { http } from "./utils/enums";
import { mainError } from "./error/mainError";
import { handleError } from "./error/handleError";
import todo from "./router/todoRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/", todo);
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(http.Ok).json({
          message: "Todo Application API Welcome to our Default Route ⭐",
        });
      } catch (error) {
        return res.status(http.Bad_Request).json({
          message: "Error Loading Default Route",
        });
      }
    });

    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
          status: http.Bad_Request,
          success: false,
        })
      );
    });

    app.use(handleError);
  } catch (error) {
    return error;
  }
};
