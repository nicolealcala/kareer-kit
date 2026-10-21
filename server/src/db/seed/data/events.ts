import type { CreateEventData } from "../../../validation/event.validation.js";
import {
  getCurrentWeekday,
  getPreviousWeekday,
  setTime,
} from "../utils/date.js";

const getEventStatus = (startAt: Date, endAt: Date) => {
  const now = new Date();

  if (endAt < now) {
    return "completed";
  }

  return "scheduled";
};

const previousMonday = getPreviousWeekday(0);
const previousWednesday = getPreviousWeekday(2);

const thisMonday = getCurrentWeekday(0);
const thisTuesday = getCurrentWeekday(1);
const thisWednesday = getCurrentWeekday(2);
const thisThursday = getCurrentWeekday(3);
const thisFriday = getCurrentWeekday(4);

export const MOCK_EVENTS: CreateEventData[] = [
  {
    title: "Technical Interview",
    description: "First-round technical interview with the engineering team.",
    type: "interview",
    status: "completed",
    startAt: setTime(previousMonday, 10, 0),
    endAt: setTime(previousMonday, 11, 0),
    isAllDay: false,
    modality: "virtual",
    meetingLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    title: "Coding Assessment",
    description: "Complete the take-home assessment.",
    type: "assessment",
    status: "completed",
    startAt: setTime(previousWednesday, 13, 0),
    endAt: setTime(previousWednesday, 15, 0),
    isAllDay: false,
    modality: null,
  },
  {
    title: "Final Interview",
    description: "Meet with the hiring manager.",
    type: "interview",
    status: getEventStatus(
      setTime(thisThursday, 9, 30),
      setTime(thisThursday, 10, 30),
    ),
    startAt: setTime(thisThursday, 9, 30),
    endAt: setTime(thisThursday, 10, 30),
    isAllDay: false,
    modality: "virtual",
    meetingLink: "https://zoom.us/j/123456789",
  },
  {
    title: "Update Resume",
    description: "Tailor resume for frontend engineering roles.",
    type: "task",
    status: "scheduled",
    startAt: setTime(thisFriday, 8, 0),
    endAt: null,
    isAllDay: true,
    modality: null,
  },
  {
    title: "Follow up with Recruiters",
    description: "Send follow-up emails for pending applications.",
    type: "follow_up",
    status: getEventStatus(
      setTime(thisMonday, 14, 0),
      setTime(thisMonday, 14, 30),
    ),
    startAt: setTime(thisMonday, 14, 0),
    endAt: setTime(thisMonday, 14, 30),
    isAllDay: false,
    modality: null,
  },
  {
    title: "Portfolio Review",
    description:
      "Review and refine portfolio projects before submitting applications.",
    type: "task",
    status: getEventStatus(
      setTime(thisTuesday, 9, 0),
      setTime(thisTuesday, 10, 0),
    ),
    startAt: setTime(thisTuesday, 9, 0),
    endAt: setTime(thisTuesday, 10, 0),
    isAllDay: false,
    modality: null,
  },
  {
    title: "HR Screening Call",
    description: "Initial screening call with the company's recruitment team.",
    type: "interview",
    status: getEventStatus(
      setTime(thisTuesday, 13, 0),
      setTime(thisTuesday, 13, 30),
    ),
    startAt: setTime(thisTuesday, 13, 0),
    endAt: setTime(thisTuesday, 13, 30),
    isAllDay: false,
    modality: "virtual",
    meetingLink: "https://meet.google.com/xyz-abcd-efg",
  },
  {
    title: "Research Company",
    description:
      "Review the company's products, engineering team, and recent projects.",
    type: "task",
    status: getEventStatus(
      setTime(thisTuesday, 16, 0),
      setTime(thisTuesday, 17, 0),
    ),
    startAt: setTime(thisTuesday, 16, 0),
    endAt: setTime(thisTuesday, 17, 0),
    isAllDay: false,
    modality: null,
  },
  {
    title: "Submit Take Home Coding Exam",
    description:
      "Complete and submit the application for a frontend developer position.",
    type: "assessment",
    status: getEventStatus(
      setTime(thisWednesday, 15, 0),
      setTime(thisWednesday, 15, 30),
    ),
    startAt: setTime(thisWednesday, 15, 0),
    endAt: setTime(thisWednesday, 15, 30),
    isAllDay: false,
    modality: null,
  },
  {
    title: "Technical Interview",
    description: "Technical interview with the frontend development team.",
    type: "interview",
    status: getEventStatus(
      setTime(thisWednesday, 10, 30),
      setTime(thisWednesday, 11, 30),
    ),
    startAt: setTime(thisWednesday, 10, 30),
    endAt: setTime(thisWednesday, 11, 30),
    isAllDay: false,
    modality: "in_person",
    location: "5th Floor, One Global Place, Bonifacio Global City, Taguig",
  },
] as const;
