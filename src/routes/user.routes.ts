import { Router } from "express";
import {
  takeUser,
  getUsers,
  createUsers,
  signUp,
  updateUser,
  updateUsers,
  deleteUser,
  deleteUsers,
  signIn
} from "../controller/user.controller";

const router = Router();

router.get("/:id", takeUser);
router.get("/", getUsers);
router.post("/signIn", signIn)
router.get("/create-many", createUsers);
router.post("/", signUp);
router.patch("/:id", updateUser);
router.patch("/", updateUsers);
router.delete("/:id", deleteUser);
router.delete("/", deleteUsers);

export default router;
