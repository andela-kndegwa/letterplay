// Reference: https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/


function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    return {
      'total': t,
      'seconds': seconds
      };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
      var t = getTimeRemaining(endtime);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if(t.total<=0){
        clearInterval(timeinterval);
      }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);
}

var timeInSeconds = 10
var currentTime = Date.parse(new Date());

var deadline = new Date(currentTime + timeInSeconds * 1000)
initializeClock('clockdiv', deadline)
