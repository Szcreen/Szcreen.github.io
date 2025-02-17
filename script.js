// Time Display in CET
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const options = {
        timeZone: 'Europe/Paris', // CET
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString('en-GB', options);
    timeDisplay.textContent = `${formattedTime} CET`;
}

setInterval(updateTime, 1000);
updateTime();
