import * as z from 'zod';

export const Schedule = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    scheduledAt: z.string(),
    location: z.object({
        type: z.enum(['PHYSICAL', 'VIRTUAL']),
        address: z.string().optional(),
        url: z.url().optional(),
    }),
    type: z.enum(['INTERVIEW', 'ASSESSMENT', 'FOLLOW_UP', 'TASK', 'OTHER']),
    notes: z.string().optional(),
    isCompleted: z.boolean(),
});