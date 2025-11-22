import { prisma } from "../lib/prisma.js";
import { Application } from "../lib/zod/applicationSchemaValidator.js";

const CONTENT_STATUS = {
    fulfilled: "FULFILLED",
    empty: "EMPTY"
}

export function getApplicationsHandler(req, res) {
    const { userId } = req.query;

    prisma.application.findMany({ where: userId }).then(applications => {
        res.json({ applications, status: applications.length > 0 ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty });
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to fetch applications" });
    });
}

export function createApplicationHandler(req, res) {
    const validationResult = Application.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error, message: "Invalid application data" });
    }

    const applicationData = validationResult.data;

    prisma.application.create({
        data: applicationData
    }).then(application => {
        res.status(201).json(application);
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to create application" });
    });
}

export function getApplicationByIdHandler(req, res) {
    const { id } = req.params;

    prisma.application.findUnique({
        where: { id }
    }).then(application => {
        res.json({ application, status: application ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty });
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to fetch application" });
    });
}

export function updateApplicationHandler(req, res) {
    const { id } = req.params;

    const validationResult = Application.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error, message: "Invalid application data" });
    }

    const applicationData = validationResult.data;

    prisma.application.update({
        where: { id },
        data: applicationData
    }).then(application => {
        res.status(204).json(application);
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to update application" });
    });
}

export function deleteApplicationHandler(req, res) {
    const { id } = req.params;

    prisma.application.delete({
        where: { id }
    }).then(() => {
        res.status(204).send();
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to delete application" });
    });
}

