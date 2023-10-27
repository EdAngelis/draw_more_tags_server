import { User } from "../models";
import { IUser } from "../models/user.model";

const getByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

const findMany = async (query: any) => {
  try {
    const users = await User.find(query);
    return users;
  } catch (error) {
    throw error;
  }
};

const findOne = async (_id: string) => {
  try {
    const user = User.findById(_id);
    return user;
  } catch (error) {
    throw error;
  }
};

const create = async (user: IUser) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const createMany = async (Users: IUser[]) => {
  try {
    const newUsers = await User.insertMany(Users);
    return newUsers;
  } catch (error) {
    throw error;
  }
};

const updateOne = async (_id: string, user: IUser) => {
  try {
    const newUser = User.findByIdAndUpdate(_id, user, {
      new: true,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

const updateMany = async (query: any, toUpdate: IUser) => {
  try {
    const newUser = User.updateMany(query, toUpdate);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const deleteOne = async (_id: string) => {
  try {
    const response = User.findByIdAndDelete(_id);
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteMany = async (query: any) => {
  try {
    const response = User.deleteMany(query);
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  findMany,
  createMany,
  create,
  findOne,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  getByEmail
};
