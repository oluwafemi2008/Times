let play = document.querySelector(".play") 
let reset = document.getElementById('resetBtn');
let pause = document.querySelector(".pause")

let hour = 0;
let minute = 0;
let seconds = 0;
play.addEventListener("click", () => {
play.style.display = "none";
pause.style.display = "block";
timer = true;
stopWatch();

function stopWatch() {
    if(timer){
        seconds++;
        if(seconds=== 60){
            minute++;
            seconds = 0
        }
        if(minute === 60){
            hour++;
            minute = 0;
            seconds = 0;
        }

        let hourCal = hour;
        let minCal = minute;
        let secCal = seconds

        if(hour < 10){
            hourCal = "0" + hourCal;
        }
        if(minute < 10){
            minCal = "0" + minCal;
        }
        if(seconds < 10){
            secCal = "0" + secCal;
        }
        document.getElementById("theHr").innerHTML = hourCal;
        document.getElementById("theMins").innerHTML = minCal;
        document.getElementById("theSecs").innerHTML = secCal;
        setTimeout(stopWatch,1000);
    }}
});



reset.addEventListener("click", () => {
    timer = false; 
    hour = 0; 
    minute = 0; 
    seconds = 0; 
    play.style.display = "block"
    pause.style.display = "none"
    document.getElementById('theHr').innerHTML = "00"; 
    document.getElementById('theMins').innerHTML = "00"; 
    document.getElementById('theSecs').innerHTML = "00";  
    });

    pause.addEventListener("click", () => {
        timer = false;
        pause.style.display = "none"
        play.style.display = "block"
    });
