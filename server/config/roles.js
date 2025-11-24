import { ALL_PERMISSIONS, APPLICATION_PERMISSIONS, DASHBOARD_PERMISSIONS, SCHEDULE_PERMISSIONS } from './permissions.js'
export const roles = [
    {
        name: 'User',
        description: 'A standard user who tracks their own job applications, manages schedules, and generates resumes or cover letters.',
        permissions: [
            ...DASHBOARD_PERMISSIONS,
            ...APPLICATION_PERMISSIONS,
            ...SCHEDULE_PERMISSIONS,
        ],
    },
    {
        name: 'Admin',
        description: 'Full-access administrator with control over users, roles, applications, schedules, resumes, cover letters, and reports.',
        permissions: [...ALL_PERMISSIONS],
    },
]