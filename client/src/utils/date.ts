import { DateTime } from "luxon";
import { type CalendarEvent, type Schedule } from "@/lib/types/schedules";

export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Function to convert UTC string start and end dates into locale form
 *
 * @param start
 * @param end
 * @returns
 */
function convertDateToLocale(start: string, end: string | null) {
  const localeStartDate = new Date(start);
  const localeEndDate = end ? new Date(end) : null;

  return {
    localeStart: {
      date: localeStartDate.toLocaleDateString(),
      time: localeStartDate.getHours(),
      day: localeStartDate.getDay(),
    },
    localeEnd: localeEndDate
      ? {
          date: localeEndDate.toLocaleDateString(),
          time: localeEndDate.getHours(),
          day: localeEndDate.getDay(),
        }
      : null,
  };
}

/**
 * Function that accepts an array of Schedule objects in UTC and transforms
 * them into locale dates and time.
 *
 * @param data
 * @returns
 */
export function transformWeeklySchedules(data: Schedule[]) {
  return data.map((d) => {
    const { startAt, endAt } = d;
    const { localeStart, localeEnd } = convertDateToLocale(startAt, endAt);

    return {
      title: d.title,
      day: localeStart.day,
      start: localeStart.time,
      end: localeEnd?.time ?? null,
    };
  });
}

/**
 * Function to convert a Date object into its ISO string form
 * @param date
 * @returns string
 */

export function convertDateToIso(date: Date | string) {
  return date instanceof Date ? date.toISOString() : date;
}

export function toCalendarEvent(event: Schedule): CalendarEvent | null {
  if (!event.id) return null;

  const start = DateTime.fromISO(event.startAt).toJSDate();
  const end = event.endAt ? DateTime.fromISO(event.endAt).toJSDate() : start;

  const isShortEvent = end.getTime() - start.getTime() <= 30 * 60 * 1000;

  return {
    ...event,
    id: event.id,
    start: DateTime.fromISO(event.startAt).toJSDate(),
    end: event.endAt
      ? DateTime.fromISO(event.endAt).toJSDate()
      : DateTime.fromISO(event.startAt).toJSDate(),
    allDay: event.isAllDay,
    isShortEvent,
  };
}

/**
 * Function to convert UTC date string to locale date string (shortened without year)
 * @param date
 * @returns string
 */

export function formatShortenedLocaleDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

/**
 * Function to calcaulte duration of an event
 * @param start
 * @param end
 * @param { step: number, approxPrefix: string }
 * @returns string
 */

type DurationOptions = {
  step?: number;
  approxPrefix?: string;
};

export function formatDuration(
  start: DateTime | Date,
  end: DateTime | Date,
  { step = 5, approxPrefix = "approx" }: DurationOptions = {},
): string {
  const s = start instanceof Date ? DateTime.fromJSDate(start) : start;
  const e = end instanceof Date ? DateTime.fromJSDate(end) : end;

  const totalMinutes = e.diff(s, "minutes").minutes;
  if (!Number.isFinite(totalMinutes) || totalMinutes <= 0) return "";

  const rounded = Math.round(totalMinutes / step) * step;
  const isApprox = rounded !== totalMinutes;

  const hours = Math.floor(rounded / 60);
  const minutes = rounded % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  if (minutes > 0)
    parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);

  const label = parts.join(" ") || "0 minutes";
  return isApprox ? `${approxPrefix} ${label}` : label;
}
