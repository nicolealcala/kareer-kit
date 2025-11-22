import * as z from 'zod';

export const Application = z.object({
    organization: z.string().max(300),
    position: z.string().max(300),
    category: z.string().optional(),
    location: z.string().max(300).optional(),
    workArrangement: z.enum(['ONSITE', 'REMOTE', 'HYBRID']),
    salaryRange: z.string().optional(),
    status: z.enum([
        'APPLIED',
        'VIEWED',
        'INTERVIEWING',
        'INTERVIEW_COMPLETED',
        'OFFER_RECEIVED',
        'OFFER_ACCEPTED',
        'OFFER_DECLINED',
        'REJECTED',
        'WITHDRAWN'
    ]),
    jobDescription: z.string().optional(),
    notes: z.string().optional(),
    dateApplied: z.string().optional(),
    source: z.object({
        platform: z.string().max(100).optional(),
        url: z.url().max(500).optional(),
    }).optional(),
})