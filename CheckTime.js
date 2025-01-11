function checkTime(targetTimeUTC) {
    const interval = 1000; // Check every second
    const checkInterval = setInterval(() => {
        const nowUTC = new Date().toUTCString();
        const nowUTCTime = nowUTC.split(" ")[4]; 

        if (nowUTCTime >= targetTimeUTC) {
            console.log("Target time reached or passed:", targetTimeUTC);
            clearInterval(checkInterval); 
        }
    }, interval);
}

const targetTimeUTC = "20:00:00"; 
checkTime(targetTimeUTC);
