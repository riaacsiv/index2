// Clock Time Checker using switch
const hourInput = document.getElementById('hourInput');
const checkHourBtn = document.getElementById('checkHourBtn');
const timeResult = document.getElementById('timeResult');

checkHourBtn.addEventListener('click', () => {
    const hour = Number(hourInput.value);

    if (isNaN(hour) || hour < 0 || hour > 23) {
        timeResult.textContent = "Please enter a valid hour between 0 and 23.";
        timeResult.style.color = "crimson";
        return;
    }

    let timeOfDay;

    switch (true) {
        case (hour >= 5 && hour <= 11):
            timeOfDay = "Morning 🌅";
            break;
        case (hour >= 12 && hour <= 16):
            timeOfDay = "Afternoon ☀️";
            break;
        case (hour >= 17 && hour <= 20):
            timeOfDay = "Evening 🌇";
            break;
        case (hour >= 21 || hour <= 4):
            timeOfDay = "Night 🌙";
            break;
        default:
            timeOfDay = "Unknown time";
    }

    timeResult.textContent = `Hour ${hour}: ${timeOfDay}`;
    timeResult.style.color = "green";
});
