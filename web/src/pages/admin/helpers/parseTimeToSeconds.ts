export const parseTimeToSeconds = (timeString: string) => {
    const timestringArr = timeString.split(":");
    return (
        parseInt(timestringArr[0], 10) * 60 * 60 +
        parseInt(timestringArr[1], 10) * 60
    );
};
