import { Application, Request, Response } from "express";
import todo from "./router/todoRouter";

export const mainApp = (app: Application) => {
  app.use("/", todo);
  try {
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Good job!",
          status: 200,
        });
      } catch (error: any) {
        res.status(400).json({
          status: 400,
          message: error.message,
        });
      }
    });
  } catch (error: any) {
    return error;
  }
};
