export function getMonthsUpToCurrent() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth(); // 0-based
    const months = [];

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (let i = 0; i <= currentMonthIndex; i++) {
        const label = `${monthNames[i]} ${currentYear}`;
        const value = `${monthNames[i].toLowerCase()}-${currentYear}`;
        months.push({ label, value });
    }

    return months;
}
