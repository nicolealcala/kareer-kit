import { and, eq, gte, lte } from "drizzle-orm";
import { db } from "../db/index.js";
import { events } from "../db/schema/index.js";
import type { RequiredTextData } from "../validation/common.validation.js";
import type {
  CreateEventData,
  UpdateEventData,
} from "../validation/event.validation.js";

export default class EventService {
  createOne(userId: RequiredTextData, data: CreateEventData) {
    return db.insert(events).values({ ...data, userId });
  }

  getList(userId: RequiredTextData, startDate: Date, endDate: Date) {
    return db
      .select()
      .from(events)
      .where(
        and(
          lte(events.startAt, endDate),
          gte(events.endAt, startDate),
          eq(events.userId, userId),
        ),
      );
  }

  updateById(
    userId: RequiredTextData,
    eventId: RequiredTextData,
    data: UpdateEventData,
  ) {
    return db
      .update(events)
      .set(data)
      .where(and(eq(events.userId, userId), eq(events.id, eventId)))
      .returning();
  }

  delete(userId: RequiredTextData, eventId: RequiredTextData) {
    return db
      .delete(events)
      .where(and(eq(events.userId, userId), eq(events.id, eventId)));
  }
}
