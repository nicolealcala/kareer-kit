import * as z from 'zod';

export const User = z.object({
    email: z.email(),
    name: z.string().max(250),
    settings: z.object({
        theme: z.enum(['LIGHT', 'DARK']).optional(),
        notifications: z.boolean().optional(),
    }).optional(),
    country: z.object({
        code: z.string().length(2).optional(),
        stateCode: z.string().optional(),
        telCode: z.string().min(1).max(5).optional(),
    }).optional(),
    passwordHash: z.string(),
})