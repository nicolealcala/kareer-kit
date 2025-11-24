import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => {
    const { user } = req.body;
    console.log(user);  

    const userData = {
        email: user.email,
        passwordHash: "",
        name: `${user.user_metadata.first_name} ${user.user_metadata.last_name}`,
        country: {},
        settings: { theme: 'LIGHT', notifications: true },
    }

    prisma.user.create({
        data: userData
    }).then(user => {
        res.status(201).json(user);
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to create user" });
    });
})

export default authRouter;