import { Router } from "express";

const userRouter = Router();

router.use((req, res, next) => {
    console.log("User route accessed");
    console.log(req.method, req.url);
    next();
})

router.get("/", (req, res) => {
    res.send("User route is working");
});

export default userRouter;