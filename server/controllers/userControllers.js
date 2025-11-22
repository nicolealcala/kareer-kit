import { prisma } from "../lib/prisma.js";

const CONTENT_STATUS = {
    fulfilled: "FULFILLED",
    empty: "EMPTY"
}
export function getUsersHandler(req, res) {
    prisma.user.findMany().then(users => {
        res.json({ users, status: users.length > 0 ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty });
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to fetch users" });
    });
}

export function createUserHandler(req, res) {
    const { name, email, country, passwordHash } = req.body;
    prisma.user.create({
        data: { name, email, country, passwordHash }
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
    const { name, email, country, passwordHash } = req.body;

    prisma.user.update({
        where: { id },
        data: { name, email, country, passwordHash }
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

