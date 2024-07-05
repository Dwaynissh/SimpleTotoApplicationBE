import { Request, Response } from "express";
import todoModel from "../model/todoModel";
import { iProps } from "../model/todoModel";
import { http } from "../utils/enums";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, desc, priority, dueDate, date } = req.body;

    const createTask = await todoModel.create({
      title,
      desc,
      priority,
      dueDate,
      date,
    });

    return res.status(http.Created).json({
      message: "todo task created successfully",
      data: createTask,
    });
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error creating todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};

export const editTodo = async (req: Request, res: Response) => {
  try {
    const { ID } = req.params;
    const { title, desc, priority, dueDate, date } = req.body;

    const editedTasked = await todoModel.findByIdAndUpdate(ID, {
      title,
      desc,
      priority,
      dueDate,
      date,
    });

    return res.status(http.Created).json({
      message: "todo task edited successfully",
      data: editedTasked,
    });
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error editing todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { ID } = req.params;

    const deleteTask = await todoModel.findByIdAndDelete(ID);

    return res.status(http.Ok).json({
      message: "todo task deleted successfully",
      data: deleteTask,
    });
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error deleting todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};

export const moveTodoToProgress = async (req: Request, res: Response) => {
  try {
    const { ID } = req.params;

    const createTask = await todoModel.findByIdAndUpdate(
      ID,
      { progress: true },
      { new: true }
    );

    return res.status(http.Ok).json({
      message: "todo task created successfully",
      data: createTask,
    });
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error creating todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};

export const moveTodoToDone = async (req: Request, res: Response) => {
  try {
    const { ID } = req.params;

    const findTask = await todoModel.findById(ID);

    if (findTask?.progress) {
      const createTask = await todoModel.findByIdAndUpdate(
        ID,
        { done: true },
        { new: true }
      );

      return res.status(http.Ok).json({
        message: "todo task created successfully",
        data: createTask,
      });
    } else {
      return res.status(http.Ok).json({
        message: "Todo Task must start first",
      });
    }
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error creating todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};

export const getAllTask = async (req: Request, res: Response) => {
  try {
    const getall = await todoModel.find();

    return res.status(http.Ok).json({
      message: "todo task created successfully",
      data: getall,
    });
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error creating todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};

export const getAllCombine = async (req: Request, res: Response) => {
  try {
    const getTask = await todoModel.find();

    const getAllTask = getTask.filter((el: iProps) => {
      return el.progress === false && el.done === false;
    });

    const getAllProgress = getTask.filter((el: iProps) => {
      return el.progress === true && el.done === false;
    });

    const getAllDone = getTask.filter((el: iProps) => {
      return el.progress === true && el.done === true;
    });

    let allData = {
      task: getAllTask,
      progress: getAllProgress,
      done: getAllDone,
    };

    return res.status(201).json({
      message: "todo task created successfully",
      data: allData,
    });
  } catch (error) {
    return res.status(http.Bad_Request).json({
      message: "error creating todo task",
      status: http.Bad_Request,
      data: error,
    });
  }
};
