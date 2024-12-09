

const calculateDuration = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = endDate.toLowerCase() === "present" ? new Date() : new Date(endDate);

    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
        return `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
    }
    return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
};

export default calculateDuration