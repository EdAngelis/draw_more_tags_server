import { Request, Response } from "express";
import { response } from "../types/response-body.type";
import {
  findMany,
  createMany,
  create,
  findOne,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
} from "../repository/user.repo";

const  signIn = async ( req: Request, res: Response) => {
  const { email, password } = req.body;
   try {
      const data = await findOne(email);
      if(!data) return response(res, 201, { message: "User not found", data: data });

      return response(res, 200, { message: "User found", data: data });
   } catch (error) {
      console.log(error);
      return response(res, 500, { message: "Error", data: error });
   }
}

const getUsers = async (req: Request, res: Response) => {
  const query = req.query;

  try {
    const data = await findMany(query);
    if (!data) return response(res, 404, { message: "Users not found", data });

    return response(res, 200, { message: "All Users", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const data = await findOne(req.params.id);

    if (!data) return response(res, 404, { message: "User not found", data });

    return response(res, 200, { message: "User found", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const data = await create(req.body);

    return response(res, 200, { message: "User created", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const createUsers = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const data = await createMany(body);

    if (!data)
      return response(res, 500, {
        message: "Problem creating the users",
        data,
      });

    return response(res, 200, { message: "Users created", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const data = await updateOne(req.params.id, body);

    if (!data) return response(res, 404, { message: "User not found", data });

    return response(res, 200, { message: "User updated", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const updateUsers = async (req: Request, res: Response) => {
  const query = req.query;
  const toUpdate = req.body;

  try {
    const data = await updateMany(query, toUpdate);
    if (!data) return response(res, 404, { message: "Users not found", data });

    return response(res, 200, { message: "Users Updated", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const data = await deleteOne(_id);

    if (!data) return response(res, 404, { message: "User not found", data });

    return response(res, 200, { message: "User deleted", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

const deleteUsers = async (req: Request, res: Response) => {
  const query = req.query;

  try {
    const data = await deleteMany(query);
    if (!data) return response(res, 404, { message: "Users not found", data });

    return response(res, 200, { message: "Users Deleted", data });
  } catch (error) {
    console.log(error);
    return response(res, 500, { message: "Error", data: error });
  }
};

export {
  getUsers,
  createUsers,
  signUp,
  getUser,
  updateUser,
  updateUsers,
  deleteUser,
  deleteUsers,
  signIn
};
