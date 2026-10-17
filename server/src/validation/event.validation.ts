import { z } from "zod";
import {
  nullableTextSchema,
  nullableUrlSchema,
  requiredTextSchema,
} from "./common.validation.js";
import { eventModality, eventStatus, eventType } from "../db/schema/enums.js";

const eventDateValidationSchema = z.object({
  startAt: z.coerce.date().optional(),
  endAt: z.coerce.date().nullish(),
  isAllDay: z.boolean().optional(),
});

type EventDateValidationInput = z.infer<typeof eventDateValidationSchema>;

const validateEventDateConstraints = (
  data: EventDateValidationInput,
  ctx: z.RefinementCtx,
) => {
  const now = new Date();

  if (!data.isAllDay && data.startAt && data.startAt < now) {
    ctx.addIssue({
      code: "custom",
      message: "Event start time cannot be in the past",
      path: ["startAt"],
    });
  }

  if (data.startAt && data.endAt != null && data.endAt < data.startAt) {
    ctx.addIssue({
      code: "custom",
      message: "End time cannot be before start time",
      path: ["endAt"],
    });
  }
};

export const createEventSchema = z
  .object({
    applicationId: z.uuid().nullish(),
    title: requiredTextSchema,
    description: nullableTextSchema,
    type: z.enum(eventType.enumValues).optional(),
    status: z.enum(eventStatus.enumValues).default("scheduled"),
    startAt: z.coerce.date(),
    endAt: z.coerce.date().nullish(),
    isAllDay: z.boolean().optional(),
    modality: z.enum(eventModality.enumValues).nullish(),
    location: z.string().optional(),
    meetingLink: nullableUrlSchema,
  })
  .superRefine(validateEventDateConstraints);

export const updateEventSchema = z
  .object({
    applicationId: z.uuid().nullish(),
    id: z.string().nonempty(),
    title: requiredTextSchema,
    description: nullableTextSchema,
    type: z.enum(eventType.enumValues).optional(),
    status: z.enum(eventStatus.enumValues).optional(),
    startAt: z.coerce.date().optional(),
    endAt: z.coerce.date().nullish(),
    isAllDay: z.boolean().optional(),
    modality: z.enum(eventModality.enumValues).optional(),
    location: z.string().optional(),
    meetingLink: nullableUrlSchema,
  })
  .superRefine(validateEventDateConstraints);

export const eventParamsSchema = z.object({
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export type EventParams = z.infer<typeof eventParamsSchema>;

export type CreateEventData = z.infer<typeof createEventSchema>;
export type UpdateEventData = z.infer<typeof updateEventSchema>;
