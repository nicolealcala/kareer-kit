export type ScheduleType =
  | "meeting"
  | "interview"
  | "assessment"
  | "task"
  | "other";

export type ScheduleStatus = "scheduled" | "cancelled" | "completed" | "missed";

export type Modality = "remote" | "onsite";

interface BaseSchedule {
  id: string;
  title: string;
  status: ScheduleStatus;
  description?: string | null;
  type: ScheduleType;
  startAt: string;
  endAt: string | null;
  isAllDay: boolean;
}

export interface RemoteSchedule extends BaseSchedule {
  modality: "virtual";
  meetingLink: string;
}

export interface OnsiteSchedule extends BaseSchedule {
  modality: "in_person";
  location?: string | null;
}

export type Schedule = RemoteSchedule | OnsiteSchedule;

/**
 * [CALENDAR]
 *
 * This type is primarily used in Calendar component, since it only accepts
 * JS Date for start and end props.
 */

export type RemoteCalendarEvent = Omit<
  RemoteSchedule,
  "id" | "start" | "end" | "isAllDay"
> & {
  id: string;
  start: Date;
  end: Date;
  allDay: boolean;
  isShortEvent: boolean;
};

export type OnsiteCalendarEvent = Omit<
  OnsiteSchedule,
  "id" | "start" | "end" | "isAllDay"
> & {
  id: string;
  start: Date;
  end: Date;
  allDay: boolean;
  isShortEvent: boolean;
};

export type CalendarEvent = RemoteCalendarEvent | OnsiteCalendarEvent;
