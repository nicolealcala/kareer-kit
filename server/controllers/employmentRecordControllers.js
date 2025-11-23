import { CONTENT_STATUS } from "../app.js";
import { prisma } from "../lib/prisma.js";

export function getEmploymentRecords(req, res) {
    const { id } = req.params;

    prisma.employmentRecord.findMany({ where: { userId: id } }).then((records) => {
        res.json({ records, status: records ? CONTENT_STATUS.success : CONTENT_STATUS.empty })
    }).catch((err) => {
        res.status(500).json({ error: err, message: "Failed to fetch employment records" });
    });
}

export function createEmploymentRecord(req, res) {
    prisma.employmentRecord.create({
        data: req.body
    }).then((record) => { res.status(201).json(record); }).catch((err) => {
        res.status(500).json({ error: err, message: "Failed to create employment record" });
    });
}

export function updateEmploymentRecord(req, res) {
    const { id } = req.params;
    prisma.employmentRecord.update({
        where: { id },
        data: req.body
    }).then((record) => { res.status(204).json(record); }).catch((err) => {
        res.status(500).json({ error: err, message: "Failed to update employment record" });
    });
}

export function deleteEmploymentRecord(req, res) {
    const { id } = req.params;

    prisma.employmentRecord.delete({
        where: { id }
    }).then(() => { res.status(204).send() }).catch((err) => {
        res.status(500).json({ error: err, message: "Failed to delete employment record" })
    })
}
