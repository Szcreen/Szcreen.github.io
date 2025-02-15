function updateTime() {
    // Create a new Date object to get the current date and time
    const currentTime = new Date();

    const options = {
        timezone: 'CET',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formattedTime = currentTime.toLocaleString('en-GB', options);

    document.getElementById('time-display').innerText = `${formattedTime} CET`;
}

// Call updateTime immediately to set the initial time
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);
