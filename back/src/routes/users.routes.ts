import { Router } from "express";
import {
  getAllUsers,
  getUsersById,
  postNewUser,
  loginUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUsersById);
router.post("/register", postNewUser);
router.post("/login", loginUser);

export default router;
