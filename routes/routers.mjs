import { Router } from "express";
import UserController from "../controllers/UserController.mjs";
import AuthMiddleware from "../middlewares/authMiddleware.mjs";
const Route = Router();

// define all the API routes here
Route.post("/user", [UserController.createUser]);
Route.get("/users", [AuthMiddleware, UserController.getAllUsers]);
Route.get("/users/:id", [UserController.getUserById]);
Route.put("/users/:id", [UserController.updateUserById]);
Route.delete("/users/:id", [UserController.deleteUserById]);

export default Route;
