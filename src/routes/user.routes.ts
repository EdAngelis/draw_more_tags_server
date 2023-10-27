import { Router } from "express";
import {
  getUsers,
  createUsers,
  signUp,
  getUser,
  updateUser,
  updateUsers,
  deleteUser,
  deleteUsers,
  signIn
} from "../controller/user.controller";

const router = Router();

router.get("/signIn", signIn)
router.get("/create-many", createUsers);
router.post("/", signUp);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.patch("/", updateUsers);
router.delete("/:id", deleteUser);
router.delete("/", deleteUsers);

export default router;
