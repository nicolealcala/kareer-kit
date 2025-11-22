import { Router } from "express";
import { createScheduleHandler, deleteScheduleHandler, getScheduleByIdHandler, getSchedulesHandler, updateScheduleHandler } from "../controllers/scheduleControllers";

const scheduleRouter = Router();

scheduleRouter.use((req, res, next) => {
    console.log("Schedule route accessed");
    console.log(req.method, req.url);
    next();
});

scheduleRouter.get("/", getSchedulesHandler);
scheduleRouter.post("/", createScheduleHandler);
scheduleRouter.get("/:id", getScheduleByIdHandler);
scheduleRouter.put("/:id", updateScheduleHandler);
scheduleRouter.delete("/:id", deleteScheduleHandler);

export default scheduleRouter;