import { Request, Response } from "express";
import todo from "../utils/model/todo";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, projectname } = req.body;
    const todO = await todo.create({ title, description, projectname });
    res.status(200).json({
      status: 200,
      message: "Todo created",
      data: todO,
    });
  } catch (error: any) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todO = await todo.findByIdAndDelete(id);
    res.status(200).json({
      status: 200,
      message: "Todo deleted",
      data: todO,
    });
  } catch (error: any) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todO = await todo.findById(id);
    res.status(200).json({
      status: 200,
      message: "Get one Todo",
      data: todO,
    });
  } catch (error: any) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const todO = await todo.find();
    res.status(200).json({
      status: 200,
      message: "getting All Todo",
      data: todO,
    });
  } catch (error: any) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};
