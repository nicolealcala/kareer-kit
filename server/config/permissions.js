export const DASHBOARD_PERMISSIONS = [
    { name: "VIEW_DASHBOARD", description: "Permission to view the dashboard" },
]

export const APPLICATION_PERMISSIONS = [
    { name: "VIEW_APPLICATION", description: "Permission to view applications" },
    { name: "CREATE_APPLICATION", description: "Permission to create a new application" },
    { name: "EDIT_APPLICATION", description: "Permission to edit an existing application" },
    { name: "DELETE_APPLICATION", description: "Permission to delete an application" },
]

export const SCHEDULE_PERMISSIONS = [
    { name: "VIEW_SCHEDULE", description: "Permission to view schedules" },
    { name: "CREATE_SCHEDULE", description: "Permission to create a new schedule" },
    { name: "EDIT_SCHEDULE", description: "Permission to edit an existing schedule" },
    { name: "DELETE_SCHEDULE", description: "Permission to delete a schedule" },
]

export const ROLE_PERMISSIONS = [
    { name: "VIEW_ROLE", description: "Permission to view roles" },
    { name: "CREATE_ROLE", description: "Permission to create a new role" },
    { name: "EDIT_ROLE", description: "Permission to edit an existing role" },
    { name: "DELETE_ROLE", description: "Permission to delete a role" },
]

export const USER_PERMISSIONS = [
    { name: "VIEW_USER", description: "Permission to view users" },
    { name: "CREATE_USER", description: "Permission to create a new user" },
    { name: "EDIT_USER", description: "Permission to edit an existing user" },
    { name: "DELETE_USER", description: "Permission to delete a user" },
]

export const ALL_PERMISSIONS = [
    ...DASHBOARD_PERMISSIONS,
    ...APPLICATION_PERMISSIONS,
    ...SCHEDULE_PERMISSIONS,
    ...ROLE_PERMISSIONS,
    ...USER_PERMISSIONS,
]