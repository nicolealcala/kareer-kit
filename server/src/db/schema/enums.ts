import { pgEnum } from "drizzle-orm/pg-core";

export const applicationStatus = pgEnum("application_status", [
  "applied",
  "assessment",
  "final_interview",
  "initial_interview",
  "offer_accepted",
  "offer_declined",
  "offer_received",
  "rejected",
  "viewed",
  "withdrawn",
]);

export type ApplicationStatus = (typeof applicationStatus.enumValues)[number];

export const workArrangement = pgEnum("work_arrangement", [
  "hybrid",
  "onsite",
  "remote",
]);

export type WorkArrangement = (typeof workArrangement.enumValues)[number];

export const eventType = pgEnum("event_type", [
  "assessment",
  "follow_up",
  "interview",
  "meeting",
  "other",
  "task",
]);

export const eventStatus = pgEnum("event_status", [
  "cancelled",
  "completed",
  "missed",
  "scheduled",
]);

export const eventModality = pgEnum("event_modality", ["virtual", "in_person"]);

export const employmentType = pgEnum("employment_type", [
  "full_time",
  "part_time",
  "contract",
  "fixed_term",
  "temporary",
  "internship",
  "freelance",
  "self_employed",
  "volunteer",
  "apprenticeship",
]);

export const payFrequency = pgEnum("pay_frequency", [
  "annually",
  "bi_weekly",
  "daily",
  "hourly",
  "monthly",
  "weekly",
]);
