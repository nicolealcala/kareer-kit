import { getPreviousWeekday } from "../utils/date.js";
import { type CreateApplicationData } from "../../../validation/application.validation.js";

const previousMonday = getPreviousWeekday(0);
const previousWednesday = getPreviousWeekday(2);
const previousFriday = getPreviousWeekday(4);

const today = new Date();
today.setHours(12, 0, 0, 0);

export const MOCK_APPLICATIONS: CreateApplicationData[] = [
  {
    company: "Accenture",
    position: "Frontend Engineer",
    employmentType: "full_time",
    workArrangement: "hybrid",
    location: {
      city: "Taguig",
      state: "Metro Manila",
      country: "Philippines",
      countryCode: "PH",
    },
    compensationMin: 50000,
    compensationMax: 70000,
    currency: "PHP",
    payFrequency: "monthly",
    status: "applied",
    appliedAt: previousMonday,
    jobDescription:
      "Develop and maintain React applications for enterprise clients.",
    notes: "Applied through company careers page.",
    sourcePlatform: "company-website",
    sourceUrl: "https://www.accenture.com/ph-en/careers",
  },
  {
    company: "IBM",
    position: "AI Developer",
    employmentType: "full_time",
    workArrangement: "remote",
    location: {
      city: "Quezon City",
      state: "Metro Manila",
      country: "Philippines",
      countryCode: "PH",
    },
    compensationMin: 70000,
    compensationMax: 90000,
    currency: "PHP",
    payFrequency: "monthly",
    status: "initial_interview",
    appliedAt: previousWednesday,
    jobDescription: "Build AI-powered internal tools and backend services.",
    notes: "Recruiter reached out via LinkedIn.",
    sourcePlatform: "linkedin",
    sourceUrl: "https://www.linkedin.com/jobs/",
  },
  {
    company: "Rollstack",
    position: "Software Engineer - TypeScript",
    employmentType: "full_time",
    workArrangement: "remote",
    location: {
      city: "Florida",
      country: "United States",
      countryCode: "US",
    },
    compensationMin: 85000,
    compensationMax: 110000,
    currency: "USD",
    payFrequency: "annually",
    status: "offer_received",
    appliedAt: previousWednesday,
    jobDescription: null,
    notes: null,
    sourcePlatform: "wellfound",
    sourceUrl: "https://wellfound.com",
  },
  {
    company: "Canva",
    position: "Frontend Software Engineer",
    employmentType: "full_time",
    workArrangement: "hybrid",
    location: {
      city: "Makati",
      state: "Metro Manila",
      country: "Philippines",
      countryCode: "PH",
    },
    compensationMin: null,
    compensationMax: null,
    currency: null,
    payFrequency: null,
    status: "rejected",
    appliedAt: previousFriday,
    jobDescription: null,
    notes: "Received rejection after technical assessment.",
    sourcePlatform: "company-website",
    sourceUrl: "https://www.canva.com/careers/",
  },
  {
    company: "Vercel",
    position: "Frontend Engineer",
    employmentType: "full_time",
    workArrangement: "remote",
    location: null,
    compensationMin: null,
    compensationMax: null,
    currency: null,
    payFrequency: null,
    status: "applied",
    appliedAt: today,
    jobDescription:
      "Work on developer-facing features across the Vercel platform.",
    notes: null,
    sourcePlatform: "company-website",
    sourceUrl: "https://vercel.com/careers",
  },
];
