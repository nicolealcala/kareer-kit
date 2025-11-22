import { Router } from "express";

const employmentRecordRouter = Router();

employmentRecordRouter.use((req, res, next) => {
    console.log("Employment Record route accessed");
    console.log(req.method, req.url);
    next();
});

employmentRecordRouter.get("/", (req, res) => {
    res.send("Employment Record route is working");
});

export default employmentRecordRouter;