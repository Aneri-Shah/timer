const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");
const timerElement = document.getElementById("timer");

let interval;
let timeLeft = 2700;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerElement.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft == 0){
            clearInterval(interval);
            alert("Time's Up!");
            timeLeft = 2700;
            updateTimer();
        }
    }, 1000)
    console.log("start");
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 2700;
    updateTimer();
}

startElement.addEventListener("click", startTimer)
stopElement.addEventListener("click", stopTimer)
resetElement.addEventListener("click", resetTimer)


