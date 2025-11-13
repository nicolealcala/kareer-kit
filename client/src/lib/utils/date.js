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

export function groupApplicationsByMonth(data) {
    const groupedData = {};
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    data.forEach(item => {
        const date = new Date(item.date);
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
        if (!groupedData[monthKey]) {
            groupedData[monthKey] = [];
        }
        groupedData[monthKey].push(item);
    });

    return groupedData;
}