let second = 0;
let minute = 0;
let hour = 0;
let clockDate = new Date();

setInterval(() => {
    clockDate = new Date();
    second = clockDate.getSeconds() * 6;
    minute = clockDate.getMinutes() * 6;
    hour = clockDate.getHours() * 30 + Math.round(minute / 12);

    let secondHand = document.getElementById("secondHand")
    secondHand.style.transform = "rotate(" + second + "deg)";
    let minuteHand = document.getElementById("minuteHand")
    minuteHand.style.transform = "rotate(" + minute + "deg)";
    let hourHand = document.getElementById("hourHand")
    hourHand.style.transform = "rotate(" + hour + "deg)";
}, 1000);