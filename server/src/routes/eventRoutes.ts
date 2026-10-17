// TO DO: Replace userId with extracted userId from JWT

import { Router } from "express";
import { validateRequest } from "../middleware/validationMiddleware.js";
import {
  createEventSchema,
  eventParamsSchema,
  updateEventSchema,
} from "../validation/event.validation.js";
import EventService from "../services/event.service.js";
import { resourceParamSchema } from "../validation/common.validation.js";

const eventRouter = Router();
const eventService = new EventService();

export default function eventRoutes(userId: string) {
  eventRouter.get(
    "/",
    validateRequest("query", eventParamsSchema),
    async (req, res) => {
      const query = eventParamsSchema.parse(req.query);

      const events = await eventService.getList(
        userId,
        query.startDate,
        query.endDate,
      );

      res.json(events);
    },
  );

  eventRouter.patch(
    "/:id",
    validateRequest("body", updateEventSchema),
    async (req, res) => {
      const data = updateEventSchema.parse(req.body);

      const updatedEvent = await eventService.updateById(userId, data);

      res.json(updatedEvent);
    },
  );

  eventRouter.post(
    "/",
    validateRequest("body", createEventSchema),
    async (req, res) => {
      const data = createEventSchema.parse(req.body);

      const newEvent = await eventService.createOne(userId, data);

      res.json(newEvent);
    },
  );

  eventRouter.delete(
    "/:id",
    validateRequest("params", resourceParamSchema),
    async (req, res) => {
      const { id: eventId } = resourceParamSchema.parse(req.params);

      const deletedEvent = await eventService.delete(userId, eventId);

      res.json(deletedEvent);
    },
  );

  return eventRouter;
}
