import { getMonthsUpToCurrent } from "../utils/date";

export const statusFilters = [
    { label: "All", value: "all" },
    { label: "Applied", value: "applied" },
    { label: "Interviewing", value: "interviewing" },
    { label: "Offered", value: "offered" },
    { label: "Rejected", value: "rejected" },
];

export const applicationStatuses = [
    {
        label: "Applied",
        value: "applied",
        color: "bg-indigo-50! text-indigo-500",
    },
    {
        label: "Interviewing",
        value: "interviewing",
        color: "bg-yellow-50! text-yellow-500",
    },
    {
        label: "Offered",
        value: "offered",
        color: "bg-green-50! text-green-500",
    },
    {
        label: "Rejected",
        value: "rejected",
        color: "bg-red-50! text-red-500",
    },
    {
        label: "Ghosted",
        value: "ghosted",
        color: "bg-gray-50! text-gray-500",
    },
];


export const mockData = [
    {
        id: 1,
        organization: "Company A",
        position: "Software Engineer Software Engineer  Software Engineer  Software Engineer",
        location: "Makati, Philippines",
        workArrangement: "Remote",
        from: { platform: "LinkedIn", link: "#" },
        salary: "30,000-40,000",
        status: "applied",
        date: "2025-05-10",
    },
    {
        id: 2,
        organization: "Company B",
        position: "Data Scientist",
        location: "Makati, Philippines",
        workArrangement: "Remote",
        from: { platform: "Indeed", link: "#" },
        salary: "30,000-40,000",
        status: "interviewing",
        date: "2024-04-22",
    },
    {
        id: 3,
        organization: "Company C",
        position: "Product Manager",
        location: "Makati, Philippines",
        workArrangement: "Hybrid",
        from: { platform: "JobStreet", link: "#" },
        salary: "30,000-40,000",
        status: "offered",
        date: "2024-03-15",
    },
    {
        id: 4,
        organization: "Company D",
        position: "UX Designer",
        location: "Makati, Philippines",
        workArrangement: "Remote",
        from: { platform: "JobStreet", link: "#" },
        salary: "50,000-80,000",
        status: "rejected",
        date: "2024-02-28",
    },
];
export const dateItems = getMonthsUpToCurrent();