import { Router } from "express";
import { createUserHandler, deleteUserHandler, getUserByIdHandler, getUsersHandler, updateUserHandler } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.use((req, res, next) => {
    console.log("User route accessed");
    console.log(req.method, req.url);
    next();
})

userRouter.get("/", getUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.get("/:id", getUserByIdHandler);
userRouter.patch("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

export default userRouter;