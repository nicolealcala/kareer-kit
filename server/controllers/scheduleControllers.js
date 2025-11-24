import { prisma } from "../lib/prisma.js";
import { Schedule } from "../lib/zod/scheduleSchemaValidator.js";
import { CONTENT_STATUS } from "../app.js";

export function getSchedulesHandler(req, res) {
    const { userId } = req.query;

    prisma.schedule.findMany({ where: userId })
        .then(schedules => res.json({ schedules, status: schedules.length > 0 ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty }))
        .catch(err => res.status(500).json({ error: err, message: "Failed to fetch schedules" }));
}

export function createScheduleHandler(req, res) {
    const validationResult = Schedule.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error, message: "Invalid schedule data" });
    }

    const scheduleData = validationResult.data;

    prisma.schedule.create({ data: scheduleData })
        .then(schedule => res.status(201).json(schedule))
        .catch(err => res.status(500).json({ error: err, message: "Failed to create schedule" }));
}

export function getScheduleByIdHandler(req, res) {
    const { id } = req.params;

    prisma.schedule.findUnique({ where: { id } })
        .then(schedule => res.json({ schedule, status: schedule ? CONTENT_STATUS.fulfilled : CONTENT_STATUS.empty }))
        .catch(err => res.status(500).json({ error: err, message: "Failed to fetch schedule" }));
}

export function updateScheduleHandler(req, res) {
    const { id } = req.params;

    const validationResult = Schedule.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error, message: "Invalid schedule data" });
    }

    const scheduleData = validationResult.data;

    prisma.schedule.update({
        where: { id },
        data: scheduleData
    }).then(schedule => {
        res.status(204).json(schedule);
    }).catch(err => {
        res.status(500).json({ error: err, message: "Failed to update schedule" });
    });
}

export function deleteScheduleHandler(req, res) {
    const { id } = req.params;
    prisma.schedule.delete({ where: { id } })
        .then(() => res.status(204).send())
        .catch(err => res.status(500).json({ error: err, message: "Failed to delete schedule" }));
}