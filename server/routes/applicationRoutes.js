import { Router } from "express";
import {
    createApplicationHandler,
    deleteApplicationHandler,
    getApplicationByIdHandler,
    getApplicationsHandler,
    updateApplicationHandler
} from "../controllers/applicationControllers";

const applicationRouter = Router();

applicationRouter.use((req, res, next) => {
    console.log('Application route accessed');
    console.log(req.method, req.url);
    next();
});

applicationRouter.get("/", getApplicationsHandler);
applicationRouter.post("/", createApplicationHandler);
applicationRouter.get("/:id", getApplicationByIdHandler);
applicationRouter.put("/:id", updateApplicationHandler);
applicationRouter.delete("/:id", deleteApplicationHandler);

export default applicationRouter;