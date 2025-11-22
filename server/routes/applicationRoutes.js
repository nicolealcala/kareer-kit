import { Router } from "express";

const applicationRouter = Router();

applicationRouter.use((req, res, next) => {
    console.log('Application route accessed');
    console.log(req.method, req.url);
    next();
});

applicationRouter.get("/", (req, res) => {
    res.send("Application route is working");
});

export default applicationRouter;