// Reference: https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    return {
        'total': t,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
}

var timeInSeconds = wordChallengeLength;
var currentTime = Date.parse(new Date());

var deadline = new Date(currentTime + timeInSeconds * 2000)
initializeClock('timer', deadline)

// gotten from the main.js file where gameplay is defined
// If timer is at 0 stop.
// get timer show
// keep checking the value of the timer
//get the deadline met element
var deadlineMet = document.getElementById("deadline-met");
deadlineMet.style.display = "none";
deadlineMet.style.visibility = "hidden";

function stopGame(){
  deadlineMet.style.display = "";
  deadlineMet.style.visibility = "visible";
  wordResponse.disabled = true;

}

var letterPlayCounter = setInterval(function() {
        var timeleft = document.getElementById("timer");
        timeleft = timeleft.getElementsByTagName("span")[0].innerText;
        timeleft = parseInt(timeleft)
        if (timeleft > 0){
         startGamePlay();
         wordResponse.disabled = false;
        }
        else if(timeleft === 0){
          stopGame(); //flash a time is up bar and then disable input.
          clearInterval(letterPlayCounter)// clear interval if the time is up

        }


    }, 1000);

