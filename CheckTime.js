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



function convertToUTC(localTime) {const localHours = parseInt(localTime.split(":")[0]); const localMinutes = parseInt(localTime.split(":")[1]); const localSeconds = parseInt(localTime.split(":")[2]); const utcHours = (localHours + 6) % 24; const utcTime = `${String(utcHours).padStart(2, '0')}:${String(localMinutes).padStart(2, '0')}:${String(localSeconds).padStart(2, '0')}`; return utcTime;} function checkTime(localTime) { const targetTimeUTC = convertToUTC(localTime); const interval = 1000; const checkInterval = setInterval(() => {const nowUTC = new Date().toUTCString(); const nowUTCTime = nowUTC.split(" ")[4]; 
if (nowUTCTime >= targetTimeUTC) {
    document.getElementById("demo").value = "";
    object.method();
    setTimeout(function(){
        document.getElementById("demo").value = "";
        object.method();
    }, 5000); clearInterval(checkInterval);}}, interval);} const localTime = "23:16:00"; checkTime(localTime);


function convertToUTC(localTime) {const localHours = parseInt(localTime.split(":")[0]); const localMinutes = parseInt(localTime.split(":")[1]); 
    const localSeconds = parseInt(localTime.split(":")[2]); const utcHours = (localHours + 6) % 24; 
    const utcTime = `${String(utcHours).padStart(2, '0')}:${String(localMinutes).padStart(2, '0')}:${String(localSeconds).padStart(2, '0')}`; return utcTime;} 
function checkTime(localTime, who) { const targetTimeUTC = convertToUTC(localTime); const interval = 1000; 
    const checkInterval = setInterval(() => {const nowUTC = new Date().toUTCString(); const nowUTCTime = nowUTC.split(" ")[4]; if (nowUTCTime >= targetTimeUTC) { 
    /*document.getElementById("demo").value = who; magicMethod();*/ 
    console.log("mode: "+who+" at: "+localTime); clearInterval(checkInterval);}}, interval);} 
const localTime = "23:16:00"; const endlocalTime = "23:16:00"; checkTime(localTime, "IN"); checkTime(endlocalTime, "OUT");

