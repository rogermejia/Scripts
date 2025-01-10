function checkTime(targetTimeUTC) {
    const interval = 1000; // Check every second
    const checkInterval = setInterval(() => {
        const nowUTC = new Date().toUTCString();
        const nowUTCTime = nowUTC.split(" ")[4]; // Get the current time in HH:MM:SS format

        if (nowUTCTime >= targetTimeUTC) {
            console.log("Target time reached or passed:", targetTimeUTC);
            clearInterval(checkInterval); // Stop checking once the target time is reached or passed
        }
    }, interval);
}

// Usage example
const targetTimeUTC = "20:00:00"; // Set your target time in HH:MM:SS format
checkTime(targetTimeUTC);
