import { Router } from "express";

const scheduleRouter = Router();

scheduleRouter.use((req, res, next) => {
    console.log("Schedule route accessed");
    console.log(req.method, req.url);
    next();
});

scheduleRouter.get("/", (req, res) => {
    res.send("Schedule route is working");
});

export default scheduleRouter;