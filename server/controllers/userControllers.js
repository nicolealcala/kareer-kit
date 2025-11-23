import { prisma } from "../lib/prisma.js";
import { User } from "../lib/zod/userSchemaValidator.js";
import { CONTENT_STATUS } from "../app.js";

export function getUsersHandler(req, res) {
    prisma.user.findMany().then(users => {
        res.json({ users, status: users.length > 0 ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty });
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to fetch users" });
    });
}

export function createUserHandler(req, res) {
    const validationResult = User.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error, message: "Invalid user data" });
    }

    const userData = validationResult.data;

    prisma.user.create({
        data: userData
    }).then(user => {
        res.status(201).json(user);
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to create user" });
    });
}

export function getUserByIdHandler(req, res) {
    const { id } = req.params;

    prisma.user.findUnique({
        where: { id }
    }).then(user => {
        res.json({ user, status: user ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty });
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to fetch user" });
    });
}

export function updateUserHandler(req, res) {
    const { id } = req.params;

    const validationResult = User.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error, message: "Invalid user data" });
    }

    const userData = validationResult.data;

    prisma.user.update({
        where: { id },
        data: userData
    }).then(user => {
        res.status(204).json(user);
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to update user" });
    });
}

export function deleteUserHandler(req, res) {
    const { id } = req.params;

    prisma.user.delete({
        where: { id }
    }).then(() => {
        res.status(204).send();
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to delete user" });
    });
}

